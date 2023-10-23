---
title: On / Off Camera | Video SDK
hide_title: true
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: On / Off Camera
pagination_label: On / Off Camera
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: on-off-camera
---

# On / Off Camera - React Native

Any participant can turn on or off his camera in the meeting using below methods.

### `enableWebcam()`

- By using `enableWebcam()` function of `useMeeting` hook, local participant can publish video to other participants.

- You can call this method when the local participant is not broadcasting any video to others.

- You can pass customised video track in `enableWebcam()` by using [Custom Video Track](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

- Video stream of the participant can be accessed from the `webcamStream` property of `useParticipant` hook.

### `disableWebcam()`

- By using `disableWebcam()` function of `useMeeting` hook, local participant can stop publish video to other participants.

- You can call this method when the local participant is broadcasting any video to others.

### `toggleWebcam()`

- By using `toggleWebcam()` function of `useMeeting` hook, local participant can start or stop publish video to other participants based on the current state of the camera.

- You can pass customised video track in `toggleWebcam()` by using [Custom Video Track](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

- Video stream of the participant can be accessed from the `webcamStream` property of `useParticipant` hook.

#### Example

```jsx
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const MeetingView = () => {
  //Getting the camera methods from hook
  //highlight-start
  const { enableWebcam, disableWebcam, toggleWebcam } = useMeeting();
  //highlight-end

  const handleEnableWebcam = () => {
    // Enabling camera
    //highlight-next-line
    enableWebcam();
  };

  const handleDisableWebcam = () => {
    // Disabling camera
    //highlight-next-line
    disableWebcam();
  };

  const handleToggleWebcam = () => {
    // Toggling webcam
    //highlight-next-line
    toggleWebcam();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleEnableWebcam();
        }}
      >
        <Text>Enable Webcam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleDisableWebcam();
        }}
      >
        <Text>Disable Webcam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleToggleWebcam();
        }}
      >
        <Text>Toggle Webcam</Text>
      </TouchableOpacity>
    </>
  );
};
```

:::note
To learn, how to render video in the meeting, follow this detailed [guide](/react-native/guide/video-and-audio-calling-api-sdk/render-media/display-video#2-rendering-video).
:::

### Getting Participant Camera Status

- You can get the **local participant's** media status from the `useMeeting` hook property named `localWebcamOn`.
- If `localWebcamOn` is `true`, it means that the local participant's camera is currently active. If it is `false`, it means that the local participant's camera is currently disable or inactive.

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
const MeetingView = () => {
  // Get the localWebcamOn property
  //highlight-next-line
  const { localWebcamOn } = useMeeting();

  return (
    <>
      <Text>Local Camera is {localWebcamOn}</Text>
    </>
  );
};
```

- To get the status of **any participant** you can use the `webcamOn` property of the `useParticipant` hook. This parameter will be `true` if **participant's** `camera is on` else it will be `false`.

```js
import { useParticipant } from "@videosdk.live/react-native-sdk";
const ParticipantView = (participantId) => {
  // Get the webcamOn property
  //highlight-next-line
  const { webcamOn } = useParticipant(participantId);

  return (
    <>
      <Text>Participant Camera is {webcamOn}</Text>
    </>
  );
};
```

### Events associated with enableWebcam

- Every Participant will receive a callback on [`onStreamEnabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with disableWebcam

- Every Participant will receive a callback on [`onStreamDisabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with toggleWebcam

- Every Participant will receive a callback on [`onStreamEnabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **video broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **video broadcasting was stopped**.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

```js
import { useParticipant } from "@videosdk.live/react-native-sdk";

const ParticipantView = (participantId) => {
  //Callback for when the participant starts a stream
  //highlight-start
  function onStreamEnabled(stream) {
    if(stream.kind === 'video'){
      console.log("Video Stream On: onStreamEnabled", stream);
    }
  }
  //highlight-end

  //Callback for when the participant stops a stream
  //highlight-start
  function onStreamDisabled(stream) {
    if(stream.kind === 'video'){
      console.log("Video Stream Off: onStreamDisabled", stream);
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

- [enableWebcam()](/react-native/api/sdk-reference/use-meeting/methods#enablewebcam)
- [disableWebcam()](/react-native/api/sdk-reference/use-meeting/methods#disablewebcam)
- [toggleWebcam()](/react-native/api/sdk-reference/use-meeting/methods#togglewebcam)
- [onStreamEnabled()](/react-native/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onMediaStatusChanged()](/react-native/api/sdk-reference/use-participant/events#onmediastatuschanged)
