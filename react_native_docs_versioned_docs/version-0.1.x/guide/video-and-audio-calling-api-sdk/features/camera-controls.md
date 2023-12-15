---
title: Camera Controls Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Camera Controls
pagination_label: Camera Controls
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls - React Native

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.

   - You can pass customise video track in `enableWebcam()` by using [Custom Video Track](/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track#using-custom-video-track).

2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.

3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

4. **Toggle Camera** - By using `toggleWebcam()` function, a participant start or stop publishing the video during the meeting.

### Enable, Disable And Switch Webcam

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
const MeetingView = () => {
  const {
    enableWebcam,
    disableWebcam,
    getWebcams,
    changeWebcam,
    toggleWebcam,
  } = useMeeting();

  const onPress = async () => {
    // Enable Camera in Meeting
    enableWebcam();

    // Disable Camera in Meeting
    disableWebcam();

    // Toggle Camera in Meeting
    toggleWebcam();

    // Change Camera in Meeting
    changeWebcam();
  };

  return <>...</>;
};
```

:::note
To get a better control over the Video Quality, we recommend you to use the custom video tracks. You can check out how to use custom video tracks [here](./custom-track/custom-video-track.md).
:::

### Events

**Event associated with `enableWebcam()`:**

- Every Participant will receive a callback on [`onStreamEnabled()`](../../../api/sdk-reference/use-participant/events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

**Event associated with `disableWebcam()`:**

- Every Participant will receive a callback on [`onStreamDisabled()`](../../../api/sdk-reference/use-participant/events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

```js
import { useParticipant } from "@videosdk.live/react-native-sdk";

function onStreamEnabled(stream) {
  if(stream.kind === 'video'){
    console.log("Video Stream On: onStreamEnabled", stream);
  }
}

function onStreamDisabled(stream) {
  if(stream.kind === 'video'){
    console.log("Video Stream Off: onStreamDisabled", stream);
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
