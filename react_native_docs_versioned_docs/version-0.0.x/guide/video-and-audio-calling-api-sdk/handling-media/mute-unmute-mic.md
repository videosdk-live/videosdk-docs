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

# Mute / Unmute Mic

Muting and Unmuting your microphone refers to turning your microphone off and on, respectively.

When you mute your microphone, you prevent any sound from your microphone from being transmitted to other meeting participants, while unmuting it allows others to hear you.

### `unmuteMic()`

- By using `unmuteMic()` function of `useMeeting` hook, local participant can publish audio to other participants.

  - You can call this method when the local participant is not broadcasting any audio to others.

- You can pass customised audio track in `unmuteMic()` by using [Custom Audio Track](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `micStream` property of `useParticipant` hook.

### `muteMic()`

- By using `muteMic()` function of `useMeeting` hook, local participant can stop publish audio to other participants.

- You can call this method when the local participant is broadcasting any audio to others.

### `toggleMic()`

- By using `toggleMic()` function of `useMeeting` hook, local participant can start or stop publish audio to other participants based on the current state of the mic.

- You can pass customised audio track in `toggleMic()` by using [Custom Audio Track](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `micStream` property of `useParticipant` hook.

#### Example

```jsx
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

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
      <TouchableOpacity
        onPress={() => {
          handleMuteMic();
        }}
      >
        <Text>Mute Mic</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleUnmuteMic();
        }}
      >
        <Text>Unmute Mic</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleToggleMic();
        }}
      >
        <Text>Toggle Mic</Text>
      </TouchableOpacity>
    </>
  );
};
```

### Getting Participant Mic Status

- You can get the **local participant's** media status from the `useMeeting` hook property named `localMicOn`.
- If `localMicOn` is `true`, it means that the local participant's microphone is currently active. If it is `false`, it means that the local participant's microphone is currently muted or inactive.

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { Text } from "react-native";

const MeetingView = () => {
  // Get the localMicOn property
  //highlight-next-line
  const { localMicOn } = useMeeting();

  return (
    <>
      <Text>Local Mic is {localMicOn} </Text>
    </>
  );
};
```

- To get the status of **any participant** you can use the `micOn` property of the `useParticipant` hook. This parameter will be `true` if **participant's** `mic is on` else it will be `false`.

```js
import { useParticipant } from "@videosdk.live/react-sdk";
import { Text } from "react-native";

const ParticipantView = (participantId) => {
  // Get the micOn property
  //highlight-next-line
  const { micOn } = useParticipant(participantId);

  return (
    <>
      <Text>Participant Mic is {micOn}</Text>
    </>
  );
};
```

### Events associated with unmuteMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with muteMic

- Every Participant will receive a callback on [`onStreamDisabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with toggleMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **audio broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **audio broadcasting was stopped**.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

```js
import { useParticipant } from "@videosdk.live/react-native-sdk";

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

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [unmuteMic()](/react-native/api/sdk-reference/use-meeting/methods#unmutemic)
- [muteMic()](/react-native/api/sdk-reference/use-meeting/methods#mutemic)
- [toggleMic()](/react-native/api/sdk-reference/use-meeting/methods#togglemic)
- [onStreamEnabled()](/react-native/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onMediaStatusChanged()](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged)
