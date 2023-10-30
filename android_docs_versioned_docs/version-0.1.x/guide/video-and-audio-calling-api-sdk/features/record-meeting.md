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

# Record Meeting - Android

Record meeting allows participants to record video & audio during the meeting. The recording files are available in developer dashboard.
Any participant can start / stop recording any time during the meeting.

This guide will provide an overview of how to implement start and stop Meeting Recording.

1. **Start Recording** - By using `startRecording()` function, a participant can start meeting recording.
2. **Stop Recording** - By using `stopRecording()` function, a participant can stop meeting recording.

### Start And Stop Recording

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// TODO: change webhookUrl
val webhookUrl = "<webhook-url-here>"

// keep track of recording
val recording = false

findViewById<View>(R.id.btnRecording).setOnClickListener { view: View? ->
    if (!recording) {
        meeting!!.startRecording(webhookUrl)
    } else {
        meeting!!.stopRecording()
    }
}
```

</TabItem>

<TabItem value="Java">

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

</TabItem>

</Tabs>

### Events

- **onRecordingStateChanged** - A `onRecordingStateChanged` event will be triggered any time the recording state of a meeting changes.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
object : MeetingEventListener() {
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
```

</TabItem>

<TabItem value="Java">

```js
new MeetingEventListener() {
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
```

</TabItem>

</Tabs>
