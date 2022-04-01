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
// TODO: change webhookUrl
String webhookUrl = "<webhook-url-here>";

// keep track of recording
boolean recording = false;

findViewById(R.id.btnRecording).setOnClickListener(view -> {
    if (!recording) {
        meeting.startRecording(webhookUrl);
    } else {
        meeting.stopRecording();
    }
});
```

### Events

1. **recording-started** - Whenever any participant start meeting recording, then `recording-started` event will trigger.

2. **recording-stopped** - Whenever any participant stop meeting recording, then `recording-stopped` event will trigger.

```js
new MeetingEventListener() {
  @Override
  public void onRecordingStarted() {
      recording = true;

      // TODO: show indication that meeting recording is started.
  }

  @Override
  public void onRecordingStopped() {
      recording = false;

      // TODO: show indication that meeting recording is stopped.
  }
}
```
