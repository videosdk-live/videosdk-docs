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

   - You can pass customise audio track in `unmuteMic()` by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track#custom-track-with-unmutemic).

2. **Disable Mic** - By using `muteMic()` function, a participant can stop publishing audio to other participants.

3. **Change Mic** - By using `changeMic()` function, a participant can change mic.

4. **Toggle Mic** - By using `toggleMic()` function, a participant start or stop publishing the audio during the meeting.

### Enable, Disable, Change Mic

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { unmuteMic, muteMic, getMics, changeMic, toggleMic } = useMeeting();

  const onPress = async () => {
    // Enable Mic in Meeting
    unmuteMic();

    // Disable Mic in Meeting
    muteMic();

    // Toggle Mic in Meeting
    toggleMic();

    // Change Mic in Meeting
    const mics = await getMics(); // returns all mics

    const { deviceId, label } = mics[0];

    changeMic(deviceId);
  };

  return <>...</>;
};
```

:::note
To get a better control over the audio Quality, we recommend you to use the custom audio tracks. You can check out how to use custom audio tracks [here](./custom-track/custom-audio-track.md).
:::

### Events

**Event associated with `unmuteMic()`:**

- Every Participant will receive a callback on [`onStreamEnabled()`](../../../api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](../../../api/sdk-reference/use-participant/introduction.md) hook with `Stream` object.

**Event associated with `muteMic()`:**

- Every Participant will receive a callback on [`onStreamDisabled()`](../../../api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](../../../api/sdk-reference/use-participant/introduction.md) hook with `Stream` object.

```js

import { useParticipant } from "@videosdk.live/react-sdk";

function onStreamEnabled(stream) {
  if(stream.kind === 'audio'){
    console.log("Audio Stream On: onStreamEnabled", stream);
  }
}

function onStreamDisabled(stream) {
  if(stream.kind === 'audio'){
    console.log("Audio Stream Off: onStreamDisabled", stream);
  }
}

const {
  displayName
  ...
} = useParticipant(participantId,{
  onStreamEnabled,
  onStreamDisabled,
  ...
});
```
