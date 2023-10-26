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

# Camera Controls - Javascript

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Webcam

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

**Events associated with `enableWebcam()`:**

- [`stream-enabled`](../../../api/sdk-reference/participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

**Events associated with `disableWebcam()`:**

- [`stream-disabled`](../../../api/sdk-reference/participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

```js
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
```
