---
title: Record Meeting
hide_title: false
hide_table_of_contents: false
description: This guide will explain start and stop meeting recording.
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

Record meeting allows participants to record video and audio during the meeting. The recording files are available in developer dashboard.
Any participant can start / stop recording any time during the meeting.

This guide will provide an overview of how to implement start and stop Meeting Recording.

1. **Start Recording** - By using `startRecording()` function, a participant can start meeting recording.
2. **Stop Recording** - By using `stopRecording()` function, a participant can stop meeting recording.

### Start And Stop Recording

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording();

  // Stop Recording
  meeting?.stopRecording();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording();

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
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>

### Events

1. **recording-started** - Whenever any participant start meeting recording, then `recording-started` event will trigger.

2. **recording-stopped** - Whenever any participant stop meeting recording, then `recording-stopped` event will trigger.

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
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
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>
