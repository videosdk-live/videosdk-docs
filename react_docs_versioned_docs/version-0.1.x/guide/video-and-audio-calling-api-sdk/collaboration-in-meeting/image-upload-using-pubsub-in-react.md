---
title: Image upload using PubSub in React- Video SDK Docs
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
slug: image-upload-using-pubsub-in-react
---

# Image Uplaod Using Pubsub In React

In this guide, we will see how to upload image using pubsub. For that first, we place an input with the file type, after we select image then we upload that image using pubsub.

If you are not familiar with the PubSub mechanism and usePubSubhook, you can [follow this guide](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

We will achieve this using the following steps.

### Step 1 : Create input with file type

- Firstly, we place input for the upload file.

```html title="Index.html"
<div>
  <input
    type="file"
    id="myFile"
    name="filename"
    onChange="{handleImageUpload}"
  />
</div>
```

### Step 2 : Send image using PubSub

- In this step, we will create `handleImageUpload()` In this, we will convert the image into `base64`, and then we divide that data into chunks.

- Now, we will publish image using `IMAGE_TRANSFER` Pubsub topic.

- After that, we will create `handleImageUpload()` In this, we will convert the image into `base64`, and then we divide that data into chunks.

```js title="Index.js"
import { usePubSub } from "@videosdk.live/react-sdk";

const { publish } = usePubSub("IMAGE_TRANSFER", {});

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
    publish({ data }, { persist: true });
  }
}

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

- In this step, we will create `IMAGE_TRANSFER` Pubsub topic to receive the data at the receiver side and render the image using that chunk data.

```js title="Index.js"
import { usePubSub } from "@videosdk.live/react-sdk";
import { useState,useEffect } from "react";

const [imageSrc, setImageSrc] = useState(null);
const imagesMessages = {};

const generateImage = (messages) => {

   // Getting src of image
   const srcImage = messages
     .sort((a, b) => parseInt(a.index) - parseInt(b.index))
     .map(({ chunkdata }) => chunkdata)
     .join("");

   // Setting src of image
   setImageSrc(srcImage);
};

usePubSub(`IMAGE_TRANSFER`, {
    onMessageReceived: ({ message }) => {
      const { id, index, totalChunk } = message.data;

      // Collect the chunk and push it to imagesMessages obj
      if (imagesMessages[id]) {
        imagesMessages[id].push(message.data);
      } else {
        imagesMessages[id] = [message.data];
      }

      // Check whether the index of chunk and totalChunk is same, it means it is last chunk or not
      if (index + 1 === totalChunk) {
        generateImage(imagesMessages[id]);
      }
    },
 });

// Render image
  return (
    imageSrc && (
      <div>
        <p>Selected Image</p>
        <img src={imageSrc} alt="demo" height={300} width={300} />
      </div>
	  );
	)
```

### Step 4 : Create Pubsub topic at receiver end

- Now we will create `IMAGE_TRANSFER` Pubsub topic at receiver end for receiving image.

```js title="Index.js"
import { usePubSub } from "@videosdk.live/react-sdk";
import { useState } from "react";

const [imageSrc, setImageSrc] = useState(null);

const imagesMessages = {};

const generateImage = (messages) => {
  // Getting src of image
  const srcImage = messages
    .sort((a, b) => parseInt(a.index) - parseInt(b.index))
    .map(({ chunkdata }) => chunkdata)
    .join("");

  // Setting src of image
  setImageSrc(srcImage);
};

usePubSub(`IMAGE_TRANSFER`, {
  onMessageReceived: ({ message }) => {
    const { id, index, totalChunk } = message.data;

    // If you select multiple images, then it will store images on basis of id in imagesMessages object
    if (imagesMessages[id]) {
      imagesMessages[id].push(message.data);
    } else {
      imagesMessages[id] = [message.data];
    }

    // Check whether the index of chunk and totalChunk is same, it means it is last chunk or not
    if (index + 1 === totalChunk) {
      generateImage(imagesMessages[id]);
    }
  },
});

return (
  imageSrc && (
    <div>
      <p>Selected Image</p>
      <img src={imageSrc} alt="demo" height={300} width={300} />
    </div>
  )
);
```
