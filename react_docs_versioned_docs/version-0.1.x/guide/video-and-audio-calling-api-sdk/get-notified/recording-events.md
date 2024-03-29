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
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-events
---

# Recording Events - React

VideoSDK provides the `onRecordingStateChanged()` event, which notifies you of the current state of recording for the meeting.

### onRecordingStateChanged()

- This event is triggered when the recording status of the meeting changes. 
- It can be subscribed to using the `useMeeting` hook.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

```javascript
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

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

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [onRecordingStateChanged()](/react/api/sdk-reference/use-meeting/events#onrecordingstatechanged)
