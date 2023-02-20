---
title: Recording Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Recording Events
pagination_label: Recording Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-events
---

# Recording Events

VideoSDK provides `onRecordingStateChanged` event which will notify you of the current state of recording for the meeting.

### onRecordingStateChanged

- This event will be triggered when the meeting's recording status changed.
- These event can be subscribed from the `useMeeting` hook.

### Usage

Here is the usage of the event mentioned in these page.

```javascript
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

const Constants = VideoSDK.Constants;

function onRecordingStateChanged(data) {
  const { status } = data;

  if (status === Constants.recordingEvents.RECORDING_STARTING) {
    console.log("Meeting Recording is starting");
  } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
    console.log("Meeting Recording is started");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
    console.log("Meeting Recording is stopping");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
    console.log("Meeting Recording is stopped");
  } else {
    //
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onRecordingStateChanged,
  ...
});
```

---

### API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [onRecordingStateChanged()](/react/api/sdk-reference/use-meeting/events#onrecordingstatechanged)
