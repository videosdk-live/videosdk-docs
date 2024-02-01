---
title: Mute / Unmute Mic | Video SDK
hide_title: true
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mute / Unmute Mic
pagination_label: Mute / Unmute Mic
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-unmute-mic
---

# Mute / Unmute Mic - Javascript

Muting and Unmuting your microphone refers to turning your microphone off and on, respectively.

When you mute your microphone, you prevent any sound from your microphone from being transmitted to other meeting participants, while unmuting it allows others to hear you.

### `unmuteMic()`

- By using `unmuteMic()` function of `meeting` object, local participant can publish audio to other participants.

  - You can call this method when the local participant is not broadcasting any audio to others.

- You can pass customised audio track in `unmuteMic()` by using [Custom Audio Track](/javascript/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `streams` property of `Participant` object.

### `muteMic()`

- By using `muteMic()` function of `meeting` object, local participant can stop publish audio to other participants.

- You can call this method when the local participant is broadcasting any audio to others.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const unmuteMicBtn = document.getElementById("unmuteMicBtn");
unmuteMicBtn.addEventListener("click", () => {
  // unmuteMic Meeting
  meeting?.unmuteMic();
});

const muteMicBtn = document.getElementById("muteMicBtn");
muteMicBtn.addEventListener("click", () => {
  // unmuteMic Meeting
  meeting?.muteMic();
});
```

:::note
To learn, how to render a audio in the meeting, follow this detailed [guide](/javascript/guide/video-and-audio-calling-api-sdk/render-media/display-audio-video#3-rendering-audio).
:::

### Events associated with unmuteMic

- Every Participant will receive a callback on [`stream-enabled`](/javascript/api/sdk-reference/participant-class/events#stream-enabled) of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Participant will receive a callback on [`media-status-changed`](/javascript/api/sdk-reference/participant-class/events#media-status-changed) of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with the kind of media and its status.

### Events associated with muteMic

- Every Participant will receive a callback on [`stream-disabled`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Participant will receive a callback on [`media-status-changed`](/javascript/api/sdk-reference/participant-class/events#media-status-changed) of the [`participant`](/javascript/api/sdk-reference/participant-class/introduction) object with the kind of media and its status.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind === "audio") {
    //particiapnt turned on audio
    //Render Participant audio logic here
  }
});

participant.on("stream-disabled", (stream) => {
  if (stream.kind === "audio") {
    //particiapnt turned off audio
    //remove Participant audio logic here
  }
});

participant.on("media-status-changed", (data) => {
  const { kind, newStatus } = data;
  if (kind === "audio") {
    //particiapnt media status changed
  }
});
```

### Audio Permissions

- By default, VideoSDK ask for audio permissions when the participants requests to turn on the mic and once the permission is granted the mic gets turned on. If the permission is denied, VideoSDK will send the error message in the `error` event of the `meeting` object.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/capturing-audio-permission.mov' width={"100%"}/>

</div>

### Troubleshoot Audio Permissions

- If a participant denies the microphone permission, they can **manually grant** it by following below shown steps.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/troubleshoot-audio-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`** i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [unmuteMic()](/javascript/api/sdk-reference/meeting-class/methods#unmutemic)
- [muteMic()](/javascript/api/sdk-reference/meeting-class/methods#mutemic)
- [stream-enabled event](/javascript/api/sdk-reference/participant-class/events#stream-enabled)
- [stream-disabled event](/javascript/api/sdk-reference/participant-class/events#stream-disabled)
- [media-status-changed](/javascript/api/sdk-reference/participant-class/events#media-status-changed)
