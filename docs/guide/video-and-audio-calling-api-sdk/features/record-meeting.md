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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording(webhookUrl, awsDirPath);

  // Stop Recording
  meeting?.stopRecording();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording(webhookUrl, awsDirPath);

  // Stop Recording
  meeting?.stopRecording();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording();

  // Stop Recording
  meeting?.stopRecording();
};
```

</TabItem>
<TabItem value="android">

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
<TabItem value="ios">

```js
/// webhook url
private let recordingWebhookUrl = "<webhook-url-here>"

/// keep track of recording
private var recordingStarted = false

@IBAction func recordButtonTapped(_ sender: Any) {
    if !recordingStarted {
        // start recording
        meeting?.startRecording(webhookUrl: recordingWebhookUrl)
    } else {
        // stop recording
        meeting?.stopRecording()
    }
}
```

</TabItem>
<TabItem value="flutter">

```js
// Start Recording
meeting.startRecording('<webhookUrl>');
// Stop Recording
meeting.stopRecording(),
```

</TabItem>
</Tabs>

### Events

1. **recording-started** - Whenever any participant start meeting recording, then `recording-started` event will trigger.

2. **recording-stopped** - Whenever any participant stop meeting recording, then `recording-stopped` event will trigger.

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
meeting.on("recording-started", () => {
  console.log("Recording Started");
});

meeting.on("recording-stopped", () => {
  console.log("Recording Stopped");
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onRecordingStarted: () => {
    console.log("Recording Started");
  },
  onRecordingStopped: () => {
    console.log("Recording Stopped");
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onRecordingStarted: () => {
    console.log("Recording Started");
  },
  onRecordingStopped: () => {
    console.log("Recording Stopped");
  },
});
```

</TabItem>
<TabItem value="android">

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

</TabItem>
<TabItem value="ios">

```js
/// Called after recording starts
func onRecordingStarted() {
    recordingStarted = true

    // show indication that meeting recording is started.
}

/// Caled after recording stops
func onRecordingStoppped() {
    recordingStarted = false

    // hide meeting recording indication.
}
```

</TabItem>
<TabItem value="flutter">

```js
meeting.on(Events.recordingStarted, () {
  print("meeting recording started");
});
//
meeting.on(Events.recordingStopped, () {
  print("meeting recording stopped");
});
```

</TabItem>
</Tabs>
