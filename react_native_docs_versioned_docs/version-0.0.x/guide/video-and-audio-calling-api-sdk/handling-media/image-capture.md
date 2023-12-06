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

In this guide, we will see how to capture image of Local participant from video stream.

### `captureImage()`

- By using `captureImage()` function of `useParticipant` hook, you can capture image of a local participant from video stream. 

- You can pass your desired height and width in `captureImage()` as parameter. If you pass `null` or `0` as height/width, videosdk will automatically take height/width according to local participant's webcamStream.

- `captureImage()` will return image in a form of `base64`.

```js
const { webcamStream, webcamOn, captureImage } = useParticipant(mMeeting.localParticipant.id);

async function getBase64Data() {
    if (webcamOn && webcamStream) {
      const base64 = await captureImage({height:400,width:400}); // captureImage will return base64
      console.log("base64",base64);
    }
}
```

:::note

You can only capture an image of local participant. If you called `captureImage()` function on Remote participant, it will give you an error. If you want to capture an image of remote participant you can refer below documentation.

:::


### How to Capture an image of remote participant ?


- You can capture an image of remote participants, using [VideoSDK's temporary file storage system](../collaboration-in-meeting/upload-fetch-temporary-file.md) and [pubsub mechanism](../collaboration-in-meeting/pubsub.md).

- The following example will demonstrate how you can capture an image of remote participants.

1. 
1. Upload a image file to the VideoSDK's temporary file storage system.

```js
const { uploadBase64File } = useFile();

async function uploadFile() {
    const base64Data = "<base64>"; // pass base64 which is return by captureImage() function
    const token = "<Your Token>";
    const fileName = "myImage.jpeg";  // Provide name with extension here
    const url = await uploadBase64File({base64Data,token,fileName});
}
```

2. Publish the `fileUrl` to a remote participants. We will be using `IMAGE_TRANSFER` as the topic for this one.

```js
function PublishUrl() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("IMAGE_TRANSFER");

  // Sending the fileUrl using the publish method
  publish(fileUrl, { persist: true });

 //...
}
```

:::note

If you want to send fileUrl to a specific a participant, you can set `sendOnly` property of [publish()](/react-native/api/sdk-reference/use-pubsub#publish) function. 

:::

3. Subscibe to a `IMAGE_TRANSFER` topic to get the `fileUrl` and retrieve the file from the VideoSDK's temporary file storage system. 

```js
function retriveImage() {
  const { publish, messages } = usePubSub("IMAGE_TRANSFER", {
    onMessageReceived: (message)=>{
      fetchFile({url:message.message});  // pass fileUrl to fetch the file
    }
  });
 //...
}

async function fetchFile({url}) {
    const token = "<Your Token>";
    const base64 = await fetchBase64File({url,token});
    console.log("base64",base64); // here is your image in a form of base64
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react-native/api/sdk-reference/use-participant/introduction)
- [pub-sub](/react-native/api/sdk-reference/use-pubsub)
- [useFile](/react-native/api/sdk-reference/use-file)