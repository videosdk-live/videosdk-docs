---
title: Mute / Unmute Mic | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Mute / Unmute Mic
pagination_label: Mute / Unmute Mic
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-unmute-mic
---

# Mute / Unmute Mic

Any participant can mute or unmute himself in the meeting using below methods.

### `unmuteMic()`

- By using `unmuteMic()` function of `useMeeting` hook, local participant can publish audio to other participants.

- You can call these method when the local participant is not broadcasting any audio to others.

- You can pass customised audio track in `unmuteMic()` by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track#custom-track-with-unmutemic).

### `muteMic()`

- By using `muteMic()` function of `useMeeting` hook, local participant can stop publish audio to other participants.

- You can call these method when the local participant is broadcasting any audio to others.

### `toggleMic()`

- By using `toggleMic()` function of `useMeeting` hook, local participant can start or stop publish audio to other participants based on the current state of the mic.

- You can pass customised audio track in `toggleMic()` by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track#custom-track-with-unmutemic).

```jsx
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Getting the mic methods from hook
  //highlight-start
  const { unmuteMic, muteMic, toggleMic } = useMeeting();
  //highlight-end

  const handleUnmuteMic = () => {
    // Unmuting Mic
    //highlight-next-line
    unmuteMic();
  };

  const handleMuteMic = () => {
    // Muting Mic
    //highlight-next-line
    muteMic();
  };

  const handleToggleMic = () => {
    // Toggling Mic
    //highlight-next-line
    toggleMic();
  };

  return (
    <>
      <button onClick={handleMuteMic}>Mute Mic</button>
      <button onClick={handleUnmuteMic}>Unmute Mic</button>
      <button onClick={handleToggleMic}>Toggle Mic</button>
    </>
  );
};
```
