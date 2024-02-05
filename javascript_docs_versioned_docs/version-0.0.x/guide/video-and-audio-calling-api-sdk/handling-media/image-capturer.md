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

# Image Capturer - Javascript

This guide provides instructions on capturing images of participants from a video stream. 

This capability proves particularly valuable in Video KYC scenarios, enabling the capture of images where users can hold up their identity for verification.

### `captureImage()`

- By using the `captureImage()` method of the `Participant` class, you can capture image of a local participant from their video stream.
- You have the option to specify the desired height and width in the `captureImage()` function; however, these parameters are optional. If not provided, the VideoSDK will automatically use the dimensions of the local participant's webcamStream. 
- The `captureImage()` function returns the image in the form of a `base64` string.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

let isWebcamOn; // status of your webcam, true/false

async function imageCapture() {
  if (isWebcamOn) {
    const base64Data = await meeting.localParticipant.captureImage(); // captureImage will return base64 string
    console.log("base64", base64);
  } else {
    console.error("Camera must be on to capture an image");
  }
}
```

:::tip

Rather than utilizing the `participants.get(participantId).captureImage()` method to capture an image of a remote participant, it is advisable to refer to the provided documentation for a more effective approach. The `participants.get(participantId).captureImage()` method captures an image from the current video stream being consumed from the remote participant. The alternative documentation is likely to provide a better and more appropriate method to achieve the desired result.

:::

### How to capture image of remote participant ?

- Before proceeding, it's crucial to understand [VideoSDK's temporary file storage system](/javascript/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/upload-fetch-temporary-file) and the underlying [pubsub mechanism](/javascript/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

- Here's a break down of the steps, using the names Participant A and Participant B for clarity:

#### Step 1 : Initiate Image Capture Request

- In this step, you have to first send a request to Participant B, whose image you want to capture, using pubsub.
- In order to do that, you have to create a pubsub topic called `IMAGE_CAPTURE` in the `index.js` File.​
- Here, you will be using the `sendOnly` property of the `publish()` method. Therefore, the request will be sent to that participant only.

```js title="index.js"
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

function sendRequest({ participantId }) {
  // Pass the participantId of the participant twhose image you want to capture 
  // Here, it will be Participant B's id, as you want to capture the the image of Participant B
  let message = "Sending request to capture image";
  meeting.pubSub
    .publish("IMAGE_CAPTURE", message, {
      persist: false,
      sendOnly: [participantId],
    })
    .then((res) => console.log(`response of publish : ${res}`))
    .catch((err) => console.log(`error of publish : ${err}`));
}
```

#### Step 2 : Capture and Upload File

- To capture an image from the remote participant [Participant B], you have to subscribe to the pubsub topic on the `meeting-joined` event of the `Meeting` class. When a participant receives an image capture request, this component uses the `captureImage` method of the `Participant` class to capture the image.

```js title="index.js"
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

async function captureAndStoreImage() {
  // capture image
  const base64Data = await meeting.localParticipant.captureImage();
  console.log("base64Data", base64Data);
}

const _handleOnImageCaptureMessageReceived = (message) => {
  try {
    if (message.senderId !== meeting.localParticipant.id) {
      // capture and store image when message received
      captureAndStoreImage();
    }
  } catch (err) {
    console.log("error on image capture", err);
  }
};

meeting.on("meeting-joined", () => {
  // ...
  meeting.pubSub.subscribe("IMAGE_CAPTURE", (data) => {
    _handleOnImageCaptureMessageReceived(data);
  });
});
```

- The captured image is then stored in VideoSDK's temporary file storage system using the `uploadBase64File()` function of the `Meeting` class. This operation returns a unique `fileUrl` of the stored image.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

async function captureAndStoreImage() {
  // capture image
  const base64Data = await meeting.localParticipant.captureImage();
  // upload image to videosdk storage system
  const fileUrl = await meeting.uploadBase64File({
    base64Data,
    token: "VIDEOSDK_TOKEN",
    fileName: "myImage.jpeg", // specify a name for image file with extension
  });

  console.log("fileUrl", fileUrl);
}
```

- Next, the `fileUrl` is sent back to the participant who initiated the request using the `IMAGE_TRANSFER` topic.

```js
async function captureAndStoreImage() {
  // ...

  const fileUrl = await meeting.uploadBase64File({
    base64Data,
    token: "VIDEOSDK_TOKEN",
    fileName: "myImage.jpeg", // specify a name for image file with extension
  });

  // publish image Transfer
  //highlight-start
  meeting.pubSub
    .publish("IMAGE_TRANSFER", fileUrl, {
      persist: false,
      sendOnly: [senderId],
    })
    .then((res) => console.log(`response of publish : ${res}`))
    .catch((err) => console.log(`error of publish : ${err}`));
  //highlight-end
}
```

#### Step 2 : Fetch and Display Image
 
- Upon publishing on the `IMAGE_TRANSFER` topic, subscribe to the same topic within the `meeting-joined` event of the `Meeting` class. This will provide access to the `fileUrl` associated with the captured image. Once obtained, use the `fetchBase64File()` method of the `Meeting` class to retrieve the file in `base64` format from VideoSDK's temporary storage.

```js
async function captureImageAndDisplay(message) {
  const token = "VIDEOSDK_TOKEN";
  let base64 = await meeting.fetchBase64File({
    url: message.message,
    token,
  });
  console.log("base64", base64); // here is your image in a form of base64
}

meeting.on("meeting-joined", () => {
  // ...
  meeting.pubSub.subscribe("IMAGE_TRANSFER", (data) => {
    if (data.senderId !== meeting.localParticipant.id) {
      captureImageAndDisplay(data);
    }
  });
});
```

- With the `base64` data in hand, you can now display the image.

```js
let captureImage = document.getElementById("captureImage");

async function captureImageAndDisplay(message) {
  const token = "VIDEOSDK_TOKEN";
  let base64 = await meeting.fetchBase64File({
    url: message.message,
    token,
  });
  console.log("base64", base64); // here is your image in a form of base64

  base64 = "data:data:image/jpeg;base64," + base64;
  captureImage.src = base64;
}
```

```html
<!--  -->
<img id="captureImage" />
```

:::note

The file stored in the [VideoSDK's temporary file storage system](/javascript/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/upload-fetch-temporary-file) will be automatically deleted once the current room/meeting comes to an end.

:::

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [captureImage](/javascript/api/sdk-reference/participant-class/methods#captureimage)
- [pub-sub](/javascript/api/sdk-reference/meeting-class/properties#pubsub)
- [uploadbase64file](/javascript/api/sdk-reference/meeting-class/methods#uploadbase64file)
- [fetchbase64file](/javascript/api/sdk-reference/meeting-class/methods#fetchbase64file)
