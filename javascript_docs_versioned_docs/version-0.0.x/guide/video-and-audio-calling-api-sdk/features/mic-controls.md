---
title: Mic Controls Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mic Controls
pagination_label: Mic Controls
keywords:
  - Mic on
  - Mic off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mic-controls
---

# Mic Controls

Whenever any participant wants to start / stop broadcasting their audio to other participant in meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to use enable and disable Mic in a meeting.

1. **Enable Mic** - By using `unmuteMic()` function, a participant can publish audio to other participants.
2. **Disable Mic** - By using `muteMic()` function, a participant can stop publishing audio to other participants.
3. **Change Mic** - By using `changeMic()` function, a participant can change mic.

### Enable, Disable, Change Mic

:::note

For Javascript, we will use `unmuteMic()` function for publish audio to other participants and `muteMic()` function for stop publishing audio to other participants.
:::

### Enable, Disable Mic

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.unmuteMic();

  // Disable Mic in Meeting
  meeting?.muteMic();

  // Change Mic in Meeting
  const mics = await meeting?.getMics(); // returns all mics

  const { deviceId, label } = mics[0];

  meeting?.changeMic(deviceId);
};
```

### Events related to mic controls

**Events associated with `unmuteMic()`:**

- [`stream-enabled`](../../../api/sdk-reference/participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

**Events associated with `muteMic()`:**

- [`stream-disabled`](../../../api/sdk-reference/participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

```js
participant.on("stream-enabled", (stream) => {
  if (stream.kind === "audio") {
    //particiapnt turned on audio
    //Render Participant audio logic here
  }
});

participant.on("stream-disabled", (stream) => {
  if (stream.kind === "audio") {
    //particiapnt turned off audio
    //remove Participant audio logic here
  }
});
```
