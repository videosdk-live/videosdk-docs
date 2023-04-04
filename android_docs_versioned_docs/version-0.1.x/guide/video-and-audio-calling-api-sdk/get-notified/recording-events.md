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

# Recording Events

VideoSDK provides `onRecordingStateChanged` event which will notify you of the current state of recording for the meeting.

### onRecordingStateChanged

- This event will be triggered when the meeting's recording status changed.
- You can implement this method of the abstract Class `MeetingEventListener` and add the listener to `Meeting` class using the `addEventListener()` method of `Meeting` Class.

### Example

Here is the usage of the event mentioned in this page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onRecordingStateChanged(recordingState: String) {
    when (recordingState) {
        "RECORDING_STARTING" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is starting")
        }
        "RECORDING_STARTED" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is started")
        }
        "RECORDING_STOPPING" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is stopping")
        }
        "RECORDING_STOPPED" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is stopped")
        }
    }
  }
}

override fun onCreate(savedInstanceState: Bundle?) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting!!.addEventListener(meetingEventListener)
}
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onRecordingStateChanged(String recordingState) {
      switch (recordingState) {
          case "RECORDING_STARTING":
              Log.d("onRecordingStateChanged", "Meeting recording is starting");
              break;
          case "RECORDING_STARTED":
              Log.d("onRecordingStateChanged", "Meeting recording is started");
              break;
          case "RECORDING_STOPPING":
              Log.d("onRecordingStateChanged", "Meeting recording is stopping");
              break;
          case "RECORDING_STOPPED":
              Log.d("onRecordingStateChanged", "Meeting recording is stopped");
              break;
      }
  }
}

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting.addEventListener(meetingEventListener);
}
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onRecordingStateChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onrecordingstatechanged)
