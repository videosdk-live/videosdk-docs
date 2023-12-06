---
title: Image Capturer | Video SDK
hide_title: true
hide_table_of_contents: false
description: Stream Image Capturer.
sidebar_label: Image Capturer
pagination_label: Image Capturer
keywords:
  - image capturer
  - stream image capturer
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: image-capturer
---

# Image Capturer

In this guide, we will see how to capture image of participant from video stream.

### `captureImage()`

- By using `captureImage()` function of `meeting` object, you can capture image of a participant from video stream. 

- You can pass your desired height and width in `captureImage()` as parameter. If you pass `null` or `0` as height/width, videosdk will automatically take height/width according to participant's webcamStream.

- `captureImage()` will return image in a form of `base64`.

```js
btnCaptureImage.addEventListener("click", async () => {
  let base64 = await meeting.localParticipant.captureImage({height:400,width:400}); // captureImage will return base64
  console.log("base64",base64);
}
```

### How to transer a image to remote participants?

- You can transfer a image to remote participants, using [VideoSDK's temporary file storage system](../collaboration-in-meeting/upload-fetch-temporary-file.md) and [pubsub mechanism](../collaboration-in-meeting/pubsub.md).

- The following example will demonstrate how you can transfer a image to all the remote participants or a particular remote participant.

1. Upload a image file to the VideoSDK's temporary file storage system.

```js
async function uploadFile() {
    const base64Data = "<base64>"; // pass base64 which is return by captureImage() function
    const token = "<Your Token>";
    const fileName = "myImage.jpeg";  // Provide name with extension here
    const url = await meeting.uploadBase64File({base64Data,token,fileName});
    console.log("fileUrl",url);
}
```

2. Publish the `fileUrl` to a remote participants. We will be using `IMAGE_TRANSFER` as the topic for this one.

```js
function PublishUrl() {
  const url = "<fileUrl>"; // pass fileUrl which is return by uploadBase64File() function
  // publish on `IMAGE_TRANSFER` topic
  meeting.pubSub.publish("IMAGE_TRANSFER", url);
}

```

:::note

If you want to send fileUrl to a specific a participant, you can set `sendOnly` property of [publish()](/react-native/api/sdk-reference/use-pubsub#publish) function. 

:::

3. Subscibe to a `IMAGE_TRANSFER` topic to get the `fileUrl` and retrieve the file from the VideoSDK's temporary file storage system. 

```js

meeting.on("meeting-joined", () => {
  //...

  // subscribe to IMAGE_TRANSFER topic
  meeting.pubSub.subscribe("IMAGE_TRANSFER", handleImageTransfer);
});


const handleImageTransfer = ({ message }) => {
  const { url } = message;

  const base64 = await meeting.fetchBase64File({url,token});
  base64 = "data:data:image/jpeg;base64,"+base64;

  const captureImage = document.getElementById("captureImage");

  captureImage.src = base64;
}
```


## API Reference

The API references for all the methods utilized in this guide are provided below.

- [Participant](/javascript/api/sdk-reference/participant-class/introduction)
- [Meeting](/javascript/api/sdk-reference/meeting-class/introduction)
