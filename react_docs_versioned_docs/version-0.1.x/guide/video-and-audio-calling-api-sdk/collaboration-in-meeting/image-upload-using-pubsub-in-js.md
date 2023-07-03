---
title: Image upload using PubSub in JS - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Image Upload using PubSub
pagination_label: Image Upload using PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: image-upload-using-pubsub-in-js
---

# Image Uplaod Using Pubsub In JavaScript

This guide will show you how to upload an image using Pubsub. To do so, we first create an input with the file type, then select an image and upload it using Pubsub.

If you are not familiar with the PubSub mechanism, you can [follow this guide](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

We will achieve this using the following steps.

### Step 1 : Create input with file type

- Firstly, we place input for the upload file.

```html title="Index.html"
<div>
  <input
    type="file"
    id="myFile"
    name="filename"
    onchange="handleImageUpload(event)"
  />
</div>
```

### Step 2 : Send image using PubSub

- In this step, we will create `handleImageUpload()` In this, we will convert the image into `base64`, and then we divide that data into chunks.

- After that, we will publish image using `IMAGE_TRANSFER` pubsub topic.

```js title="Index.js"
function uploadImage({ data }) {
  // Chunk size, you can change it according to your requirements
  const chunkSize = 100; // bits

  // Total Chunks
  const chunks = splitStringIntoChunks(data, chunkSize);

  // Random String
  const result = Math.random().toString(36).substring(2, 7);

  // Iterate chunk
  for (let i = 0; i < chunks.length; i++) {
    const element = chunks[i];

    // Payload
    const data = {
      index: i,
      totalChunk: chunks.length,
      chunkdata: element,
      id: result.toString(),
    };

    // publish on `IMAGE_TRANSFER` topic
    meeting.pubSub.publish("IMAGE_TRANSFER", data);
  }
}

// splits data into chunks
function splitStringIntoChunks(str, chunkSize) {
  const chunks = [];
  let index = 0;

  while (index < str.length) {
    chunks.push(str.substring(index, index + chunkSize));
    index += chunkSize;
  }

  return chunks;
}

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    var base64data = reader.result;
    uploadImage({ data: base64data });
  };
};
```

### Step 3 : Create Pubsub topic

- Firstly, we will create `IMAGE_TRANSFER` Pubsub topic at receiver end for receiving image.

- Now, we will create `handleImageTransfer()` for storing sender chunks data and generate an image on the basis of that data.

```js title="Index.js"
const generateImage = (messages) => {
  // Getting src of image
  const srcImage = messages
    .sort((a, b) => parseInt(a.index) - parseInt(b.index))
    .map(({ chunkdata }) => chunkdata)
    .join("");

  // Creating image element
  const imgElement = document.createElement("img");
  imgElement.src = srcImage;
  imgElement.height = 300;
  imgElement.width = 300;

  const textElement = document.createElement("p");
  textElement.textContent = "Selected Image";

  // Appending image element to image container
  document.getElementById("imageContainer").appendChild(textElement);
  document.getElementById("imageContainer").appendChild(imgElement);
};

const handleImageTransfer = ({ message }) => {
  const { id, index, totalChunk } = message;

  // If you select multiple images, then it will store images on basis of id in imagesMessages object
  if (imagesMessages[id]) {
    imagesMessages[id].push(message);
  } else {
    imagesMessages[id] = [message];
  }

  if (index + 1 === totalChunk) {
    generateImage(imagesMessages[id]);
  }
};
```

- Now, we will subscribe to `IMAGE_TRANSFER` topic on `meeting-joined` event for receiving image.

```js title="Index.js"
meeting.on("meeting-joined", () => {
  //...

  // subscribe to IMAGE_TRANSFER topic
  meeting.pubSub.subscribe("IMAGE_TRANSFER", handleImageTransfer);
});
```

- After that, we will unsubscribe this topic on meeting-left event for cleanup data.

```js title="Index.js"
meeting.on("meeting-left", () => {
  //...

  // clearing images
  meeting.pubSub.unsubscribe("IMAGE_TRANSFER", handleImageTransfer);
});
```
