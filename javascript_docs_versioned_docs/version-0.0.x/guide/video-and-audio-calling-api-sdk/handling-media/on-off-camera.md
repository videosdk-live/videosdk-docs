---
title: On / Off Camera | Video SDK
hide_title: true
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: On / Off Camera
pagination_label: On / Off Camera
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: on-off-camera
--- 

# On / Off Camera - Javascript

Participants in the meeting have the ability to toggle their cameras on or off using the methods outlined below.

### `enableWebcam()`

- By using the `enableWebcam()` function of the `meeting` object, the local participant can publish their video to other participants.

- You can only call this method when the local participant is not broadcasting video to others.

- You can also pass a customised video track in `enableWebcam()` by using [Custom Video Track](/javascript/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

- The video stream of a participant can be accessed from the `streams` property of the `Participant` object.

### `disableWebcam()`

- By using the `disableWebcam()` function of the `meeting` object, the local participant can stop publishing their video to other participants.

- You can only call this method when the local participant is broadcasting video to others.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const enableWebcamBtn = document.getElementById("enableWebcamBtn");
enableWebcamBtn.addEventListener("click", () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();
});

const disableWebcamBtn = document.getElementById("disableWebcamBtn");
disableWebcamBtn.addEventListener("click", () => {
  // Disable Webcam in Meeting
  meeting?.disableWebcam();
});
```

:::note
To learn, how to render video in the meeting, follow this detailed [guide](/javascript/guide/video-and-audio-calling-api-sdk/render-media/display-audio-video#2-rendering-video).
:::

### Events associated with enableWebcam

- Every Participant will receive a callback on[`stream-enabled`](/javascript/api/sdk-reference/participant-class/events#stream-enabled) event of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with the `Stream` object.

- Every Participant will receive a callback on [`media-status-changed`](/javascript/api/sdk-reference/participant-class/events#media-status-changed) event of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with the type of media and its status.

### Events associated with disableWebcam

- Every Participant will receive a callback on [`stream-disabled`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Participant will receive a callback on [`media-status-changed`](/javascript/api/sdk-reference/participant-class/events#media-status-changed) event of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with the type of media and its status.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind === "video") {
    //particiapnt turned on video
    //Render Participant video logic here
  }
});

participant.on("stream-disabled", (stream) => {
  if (stream.kind === "video") {
    //particiapnt turned off video
    //remove Participant video logic here
  }
});

participant.on("media-status-changed", (data) => {
  const { kind, newStatus } = data;
  if (kind === "video") {
    //particiapnt media status changed
  }
});
```

### Video Permissions

- By default, VideoSDK will request video permission when the participants attempts to turn on the camera. Once the permission is granted the camera gets turned on. If the permission is denied, VideoSDK will send an error message in the `onError` event callback of the `meeting` object.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/capturing-video-permission.mp4' width={"100%"}/>

</div>

### Troubleshoot Video Permissions

- If a participant denies the camera permission, they can **manually grant** it by following below shown steps.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/troubleshoot-video-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`** i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [enableWebcam()](/javascript/api/sdk-reference/meeting-class/methods#enablewebcam)
- [disableWebcam()](/javascript/api/sdk-reference/meeting-class/methods#disablewebcam)
- [stream-enabled event](/javascript/api/sdk-reference/participant-class/events#stream-enabled)
- [stream-disabled event](/javascript/api/sdk-reference/participant-class/events#stream-disabled)
- [media-status-changed event](/javascript/api/sdk-reference/participant-class/events#media-status-changed)
