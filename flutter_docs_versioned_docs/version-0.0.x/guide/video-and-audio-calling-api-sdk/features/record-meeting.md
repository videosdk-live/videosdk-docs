---
title: Record Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Record Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Record Meeting
pagination_label: Record Meeting
keywords:
  - Start Recording meeting
  - Stop Recording meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-meeting
---

# Record Meeting

Record meeting allows participants to record video & audio during the meeting. The recording files are available in developer dashboard.
Any participant can start / stop recording any time during the meeting.

This guide will provide an overview of how to implement start and stop Meeting Recording.

1. **Start Recording** - By using `startRecording()` function, a participant can start meeting recording.
2. **Stop Recording** - By using `stopRecording()` function, a participant can stop meeting recording.

### Start And Stop Recording

```js
// Start Recording
meeting.startRecording('<webhookUrl>');
// Stop Recording
meeting.stopRecording(),
```

### Events

1. **recordingStarted** - Whenever any participant start meeting recording, then `recordingStarted` event will trigger.

2. **recordingStopped** - Whenever any participant stop meeting recording, then `recordingStopped` event will trigger.

```js
meeting.on(Events.recordingStarted, () {
  print("meeting recording started");
});
//
meeting.on(Events.recordingStopped, () {
  print("meeting recording stopped");
});
```
