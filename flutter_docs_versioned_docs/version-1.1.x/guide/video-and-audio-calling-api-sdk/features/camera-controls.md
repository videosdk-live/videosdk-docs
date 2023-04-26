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
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls

Whenever any participant wants to start/stop broadcasting their video to other participant in a room, they can simply do it with VideoSDK Room.

This guide will provide an overview of how to implement enable, disable and switch camera features in a room.

1. **Enable Camera** - By using `enableCam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableCam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeCam()` function, a participant can stream from front / rear camera during the room.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Camera

```js
ElevatedButton(
  onPressed: room.disableCam,
  child: Text("disable camera"),
),
ElevatedButton(
  onPressed: room.enableCam,
  child: Text("enable camera"),
),
ElevatedButton(
  onPressed:  () {
    room.changeCam("<device-id>")
  },
  child: Text("changeCam"),
),
```

### Events

**Events associated with `enableWebcam()`:**

- [`streamEnabled`](../../../api/sdk-reference/participant-class/events.md#streamEnabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

**Events associated with `disableWebcam()`:**

- [`streamDisabled`](../../../api/sdk-reference/participant-class/events.md#streamDisabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

```js
participant.on(Events.streamEnabled, (Stream stream){
  if (stream.kind === "video") {
    //particiapnt turned on video
    //Render Participant video logic here
  }
});
participant.on(Events.streamDisabled, (Stream stream){
  if (stream.kind === "video") {
    //particiapnt turned off video
    //remove Participant video logic here
  }
});
```
