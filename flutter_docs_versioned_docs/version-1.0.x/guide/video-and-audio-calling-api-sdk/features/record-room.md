---
title: Record Room Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Record Room features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Record Room
pagination_label: Record Room
keywords:
  - Start Recording Room
  - Stop Recording Room
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-room
---

# Record Room

Record room allows participants to record video & audio during the room. The recording files are available in developer dashboard.
Any participant can start / stop recording any time during the room.

This guide will provide an overview of how to implement start and stop Room Recording.

1. **Start Recording** - By using `startRecording()` function, a participant can start room recording.
2. **Stop Recording** - By using `stopRecording()` function, a participant can stop room recording.

### Start And Stop Recording

```js
// Start Recording
room.startRecording('<webhookUrl>');
// Stop Recording
room.stopRecording(),
```

### Events

1. **recordingStarted** - Whenever any participant start room recording, then `recordingStarted` event will trigger.

2. **recordingStopped** - Whenever any participant stop room recording, then `recordingStopped` event will trigger.

```js
room.on(Events.recordingStarted, () {
  print("Room recording started");
});
//
room.on(Events.recordingStopped, () {
  print("room recording stopped");
});
```
