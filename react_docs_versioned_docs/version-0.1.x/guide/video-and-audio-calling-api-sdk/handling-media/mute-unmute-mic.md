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
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-unmute-mic
---

# Mute / Unmute Mic

Muting and Unmuting your microphone refers to turning your microphone off and on, respectively.

When you mute your microphone, you prevent any sound from your microphone from being transmitted to other meeting participants, while unmuting it allows others to hear you.

### `unmuteMic()`

- By using `unmuteMic()` function of `useMeeting` hook, local participant can publish audio to other participants.

  - You can call this method when the local participant is not broadcasting any audio to others.

- You can pass customised audio track in `unmuteMic()` by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `micStream` property of `useParticipant` hook.

### `muteMic()`

- By using `muteMic()` function of `useMeeting` hook, local participant can stop publish audio to other participants.

- You can call this method when the local participant is broadcasting any audio to others.

### `toggleMic()`

- By using `toggleMic()` function of `useMeeting` hook, local participant can start or stop publish audio to other participants based on the current state of the mic.

- You can pass customised audio track in `toggleMic()` by using [Custom Audio Track](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `micStream` property of `useParticipant` hook.

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

- [ ] TODO

:::note
To learn, how to render a audio in the meeting, follow these detailed guide.
:::

### Events associated with unmuteMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with muteMic

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with toggleMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **audio broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **audio broadcasting was stopped**.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

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


  //Callback for when participants media gets changed
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

### Getting Participant Mic Status

- You can get the **local participant's** media status from the `useMeeting` hook property named `localMicOn`.
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

- To get the status of **any participant** you can use the `micOn` property of the `useParticipant` hook. These parameter will be `true` if **participant's** `mic is on` else it will be `false`.

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

- By default, VideSDK ask for audio permissions when the participants requests to turn on the mic and once the permission is granted the mic gets turned on. If the permission is denied, VideoSDK will send the error message in teh `onError` event callback of `useMeeting` hook.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/capturing-audio-permission.mov' width={"100%"}/>

</div>

### Troubleshoot Audio Permissions

- If a participant denies the microphone permission, they can **manually grant** it by following below shown steps.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/troubleshoot-audio-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`** i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [unmuteMic()](/react/api/sdk-reference/use-meeting/methods#unmutemic)
- [muteMic()](/react/api/sdk-reference/use-meeting/methods#mutemic)
- [toggleMic()](/react/api/sdk-reference/use-meeting/methods#togglemic)
- [onStreamEnabled()](/react/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onMediaStatusChanged()](/react/api/sdk-reference/use-participant/events#onmediastatuschanged)
