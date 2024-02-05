---
title: Screen Share | Video SDK
hide_title: true
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Screen Share
pagination_label: Screen Share
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1 
slug: screen-share
---

# Screen Share - Javascript

Screen sharing in a meeting is the process of sharing your computer screen with other participants in the meeting. It allows everyone in the meeting to see exactly what you are seeing on your screen, which can be helpful for presentations, demonstrations, or collaborations.

### `enableScreenShare()`

- By using the `enableScreenShare()` function of the `meeting` object, the local participant can share their desktop screen to other participants.

- You can also pass a customised screenshare track in `enableScreenShare()` by using [Custom Screen Share Track](/javascript/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-screen-share-track).

- The Screen Share stream of a participant can be accessed from the `streams` property of the `Participant` object.

### `disableScreenShare()`

- By using `disableScreenShare()` function of the `meeting` object, the local participant can stop sharing their desktop screen to other participants.

:::note
Screen Sharing is only supported in the **Desktop browsers** and **not in mobile/tab browser**.
:::

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const enableScreenShareBtn = document.getElementById("enableScreenShareBtn");
enableScreenShareBtn.addEventListener("click", () => {
  // Enabling ScreenShare
  meeting?.enableScreenShare();
});

const disableScreenShareBtn = document.getElementById("disableScreenShareBtn");
disableScreenShareBtn.addEventListener("click", () => {
  // Disabling ScreenShare
  meeting?.disableScreenShare();
});
```

### Events associated with enableScreenShare

- Every Participant will receive a callback on [`stream-enabled`](/javascript/api/sdk-reference/participant-class/events#stream-enabled) event of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Participant will receive a callback on [`presenter-changed`](/javascript/api/sdk-reference/meeting-class/events#presenter-changed) event of the meeting object with `presenterId`.

### Events associated with disableScreenShare

- Every Participant will receive a callback on [`stream-disabled`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with the `Stream` object.

- Every Participant will receive a callback on [`presenter-changed`](/javascript/api/sdk-reference/meeting-class/events#presenter-changed) event of the meeting object with `null` value indicating there is no current presenter.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind === "share") {
    //particiapnt turned on screen share
    //Render screenshare logic here
  }
});

participant.on("stream-disabled", (stream) => {
  if (stream.kind === "share") {
    //particiapnt turned off screenshare
    //remove screenshare logic here
  }
});

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("presenter-changed", (presenterId) => {
  if (presenterId) {
    //someone start presenting
  } else {
    //someone stopped presenting
  }
});
```

### Screen Share with Audio

To enable screen sharing with audio, select the **Share tab audio** option when sharing the chrome tab as shown below.

<center>

![Screen Share with Audio](/img/screenshare-with-audio.png)

</center>

After clicking the `Share` button, you will receive the selected tab's audio stream in the participant's `screenShareAudioStream`.

:::note
Screen Share with Audio is only supported while sharing **Chrome Tab** in a **Chromium based browser** like Google Chrome, Brave etc.
:::

### Rendering Screen Share and Screen Share Audio

1. To display the screenshare video stream, you will receive it in the participant's stream-enabled callback with the stream kind set as "share".


```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind == "share") {
    const videoElem = createShareVideoElement(participant.id, stream);

    //add audioElem to your container
    container.appendChild(videoElem);
  }

  if (stream.kind == "shareAudio") {
  }
});

// creating video element
function createShareVideoElement(pId, stream) {
  if (pId == meeting.localParticipant.id) return;

  let videoElement = document.createElement("video");
  videoElement.setAttribute("autoPlay", false);
  videoElement.setAttribute("controls", "false");
  videoElement.setAttribute("id", `v-share-${pId}`);

  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  videoElement.srcObject = mediaStream;
  videoElement
    .play()
    .catch((error) => console.error("audioElem.play() failed", error));
  return videoElement;
}

// creating audio element
function createShareAudioElement(pId, stream) {}
```

2. Now to render the screenshare audio stream, you will receive it in the participant's stream-enabled callback with the stream kind set as "shareAudio".

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind == "share") {
  }
  if (stream.kind == "shareAudio") {
    const audioElem = createShareAudioElement(participant.id, stream);

    //add audioElem to your container
    container.appendChild(audioElem);
  }
});

// creating video element
function createShareVideoElement(pId, stream) {}

// creating audio element
function createShareAudioElement(pId, stream) {
  if (pId == meeting.localParticipant.id) return;

  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", false);
  audioElement.setAttribute("playsInline", "false");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-share-${pId}`);
  audioElement.style.display = "none";

  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  audioElement.srcObject = mediaStream;
  audioElement
    .play()
    .catch((error) => console.error("audioElem.play() failed", error));
  return audioElement;
}
```

### Troubleshoot MacOS Screen Share Permissions

- If you are using MacOS, you will have to allow the browser to do screen share. You can follow the steps shown in the video to do so.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/macos-screenshare-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`** i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [enableScreenShare()](/javascript/api/sdk-reference/meeting-class/methods#enablescreenshare)
- [disableScreenShare()](/javascript/api/sdk-reference/meeting-class/methods#disablescreenshare)
- [stream-enabled event](/javascript/api/sdk-reference/participant-class/events#stream-enabled)
- [stream-disabled event](/javascript/api/sdk-reference/participant-class/events#stream-disabled)
- [presenter-changed event](/javascript/api/sdk-reference/meeting-class/events#presenter-changed)
