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
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { startRecording, stopRecording } = useMeeting();

  const onPress = () => {
    // Start Recording
    startRecording(webhookUrl, awsDirPath);

    // Stop Recording
    stopRecording();
  };
  return <>...</>;
};
```

### Event

- **onRecordingStateChanged** - Whenever meeting recording state changes, then `onRecordingStateChanged` event will trigger.

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

function onRecordingStateChanged(data) {
  const { status } = data;

  if (status === Constants.recordingEvents.RECORDING_STARTING) {
    console.log("Meeting recording is starting");
  } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
    console.log("Meeting recording is started");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
    console.log("Meeting recording is stopping");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
    console.log("Meeting recording is stopped");
  } else {
    //
  }
}

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onRecordingStateChanged,
});
```
