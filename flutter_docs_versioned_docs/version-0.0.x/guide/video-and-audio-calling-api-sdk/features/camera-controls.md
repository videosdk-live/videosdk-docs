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

# Camera Controls - Flutter

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Webcam

```js
ElevatedButton(
  onPressed: meeting.disableWebcam,
  child: Text("disableWebcam"),
),
ElevatedButton(
  onPressed: meeting.enableWebcam,
  child: Text("enableWebcam"),
),
ElevatedButton(
  onPressed:  () {
    meeting?.changeWebcam("<device-id>")
  },
  child: Text("changeWebcam"),
),
```
