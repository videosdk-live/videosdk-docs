---
title: Camera Controls Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Camera Controls
pagination_label: Camera Controls
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Webcam

```js
const onPress = async () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  const webcams = await meeting?.getWebcams(); // returns all webcams

  const { deviceId, label } = webcams[0];

  meeting?.changeWebcam(deviceId);
};
```

### Events

**Event associated with `enableWebcam()`:**

- Every Participant will receive a callback on [`onStreamEnabled()`](../../../api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](../../../api/sdk-reference/use-participant/introduction.md) hook with `Stream` object.

**Event associated with `disableWebcam()`:**

- Every Participant will receive a callback on [`onStreamDisabled()`](../../../api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](../../../api/sdk-reference/use-participant/introduction.md) hook with `Stream` object.

```js
function onStreamEnabled(stream) {
  if(stream.kind === 'video'){
    console.log("Video Stream On: onStreamEnabled", stream);
  }
}

function onStreamDisabled(stream) {
  if(stream.kind === 'video'){
    console.log("Video Stream Off: onStreamDisabled", stream);
  }
}

const {
  displayName
  ...
} = useParticipant(participantId,{
  onStreamEnabled,
  onStreamDisabled,
  ...
});
```
