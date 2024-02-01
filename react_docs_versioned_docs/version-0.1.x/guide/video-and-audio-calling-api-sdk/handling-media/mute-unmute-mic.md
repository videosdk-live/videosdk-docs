---
title: Mute / Unmute Mic | Video SDK
hide_title: true
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mute / Unmute Mic
pagination_label: Mute / Unmute Mic
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-unmute-mic
---

# Mute / Unmute Mic - React

Muting and Unmuting your microphone refers to turning your microphone off and on, respectively.

Muting your microphone prevents the transmission of any sound from your microphone to other meeting participants, while unmuting allows them to hear you.

### `unmuteMic()`

- By using the `unmuteMic()` function of the `useMeeting` hook, local participant can publish audio to other participants.

  - You can only call this method when the local participant is not broadcasting audio to others.

- You can pass customised audio track in the `unmuteMic()` method by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `micStream` property of the `useParticipant` hook.

### `muteMic()`

- By using the `muteMic()` function of the `useMeeting` hook, local participant can stop publishing audio to other participants.

- You can only call this method when the local participant is broadcasting audio to others.

### `toggleMic()`

- By utilizing the `toggleMic()` function of `useMeeting` hook, local participant can start or stop publishing audio to other participants based on the current state of the mic.

- You can pass customised audio track in the `toggleMic()` method by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `micStream` property of the `useParticipant` hook.

#### Example

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

:::note
To learn, how to render audio in the meeting, follow this detailed [guide](/react/guide/video-and-audio-calling-api-sdk/render-media/display-audio-video#3-rendering-audio).
:::

### Events associated with unmuteMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamenabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with muteMic

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with toggleMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object if the **audio broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object if the **audio broadcasting was stopped**.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

```js
import { useParticipant } from "@videosdk.live/react-sdk";

const ParticipantView = (participantId) => {
  //Callback for when the participant starts a stream
  //highlight-start
  function onStreamEnabled(stream) {
    if(stream.kind === 'audio'){
      console.log("Audio Stream On: onStreamEnabled", stream);
    }
  }
  //highlight-end

  //Callback for when the participant stops a stream
  //highlight-start
  function onStreamDisabled(stream) {
    if(stream.kind === 'audio'){
      console.log("Audio Stream Off: onStreamDisabled", stream);
    }
  }
  //highlight-end


  //Callback for when participant's media changes
  //highlight-start
  function onMediaStatusChanged(data) {
    const { kind, newStatus} = data;
    console.log("Participant Media Kind: ", kind, " newStatus: ", newStatus);
  }
  //highlight-end

  const {
    displayName
    ...
  } = useParticipant(participantId,{
    onStreamEnabled,
    onStreamDisabled,
    onMediaStatusChanged
    ...
  });
  return <> Participant View </>;
}
```

### Getting Participant's Mic Status

- You can get the **local participant's** mic status from the `useMeeting` hook using a property called `localMicOn`.
- If `localMicOn` is `true`, it means that the local participant's microphone is currently active. If it is `false`, it means that the local participant's microphone is currently muted or inactive.

```js
import { useMeeting } from "@videosdk.live/react-sdk";
const MeetingView = () => {
  // Get the localMicOn property
  //highlight-next-line
  const { localMicOn } = useMeeting();

  return <> Local Mic is {localMicOn} </>;
};
```

- To get the status of **any other participant's** media you can use the `micOn` property of the `useParticipant` hook. This parameter will be `true` if the **participant's** `mic is on` otherwise, it will be `false`.

```js
import { useParticipant } from "@videosdk.live/react-sdk";
const ParticipantView = (participantId) => {
  // Get the micOn property
  //highlight-next-line
  const { micOn } = useParticipant(participantId);

  return <> Participant Mic is {micOn} </>;
};
```

### Audio Permissions

- By default, VideoSDK will request audio permission when a participant attempts to turn on the mic. Once the permission is granted, the mic is activated. If the permission is denied, VideoSDK will send an error message in the `onError` event callback of `useMeeting` hook.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/capturing-audio-permission.mov' width={"100%"}/>

</div>

### Troubleshoot Audio Permissions

- If a participant denies the microphone permission, they can **manually grant** it by following the below shown steps.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/troubleshoot-audio-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`**, i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [unmuteMic()](/react/api/sdk-reference/use-meeting/methods#unmutemic)
- [muteMic()](/react/api/sdk-reference/use-meeting/methods#mutemic)
- [toggleMic()](/react/api/sdk-reference/use-meeting/methods#togglemic)
- [onStreamEnabled()](/react/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onMediaStatusChanged()](/react/api/sdk-reference/use-participant/events#onmediastatuschanged)
