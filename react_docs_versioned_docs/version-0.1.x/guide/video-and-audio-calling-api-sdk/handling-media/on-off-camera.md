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

# On / Off Camera - React

Any participant can turn their camera on or off in the meeting using the methods below.

### `enableWebcam()`

- By using `enableWebcam()` function of `useMeeting` hook, the local participant can publish their video to other participants.

- You can only call this method when the local participant is not broadcasting video to others.

- You can also pass customised video track in `enableWebcam()` by using [Custom Video Track](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

- Video stream of the participant can be accessed from the `webcamStream` property of `useParticipant` hook.

### `disableWebcam()`

- By using `disableWebcam()` function of `useMeeting` hook, local participant can stop publishing their video to other participants.

- You can only call this method when the local participant is broadcasting video to others.

### `toggleWebcam()`

- By using `toggleWebcam()` function of `useMeeting` hook, local participant can start or stop publishing their video to other participants based on the current state of the camera.

- You can also pass customised video track in `toggleWebcam()` by using [Custom Video Track](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

- Video stream of the participant can be accessed from the `webcamStream` property of `useParticipant` hook.

#### Example

```jsx
import { useMeeting } from "@videosdk.live/react-sdk";

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
      <button onClick={handleEnableWebcam}>Enable Webcam</button>
      <button onClick={handleDisableWebcam}>Disable Webcam</button>
      <button onClick={handleToggleWebcam}>Toggle Webcam</button>
    </>
  );
};
```

:::note
To learn, how to render video in the meeting, follow this detailed [guide](/react/guide/video-and-audio-calling-api-sdk/render-media/display-audio-video#2-rendering-video).
:::

### Events associated with enableWebcam

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamenabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with disableWebcam

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

### Events associated with toggleWebcam

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object if the **video broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the `Stream` object if the **video broadcasting was stopped**.

- Every Participant will receive a callback on [`onMediaStatusChanged()`](/react/api/sdk-reference/use-participant/events#onmediastatuschanged) event of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with the kind of media and its status.

```js
import { useParticipant } from "@videosdk.live/react-sdk";

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


  //Callback for when participant's media gets changed
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

### Getting Participant's Camera Status

- You can get the **local participant's** camera status from the `useMeeting` hook property named `localWebcamOn`.
- If `localWebcamOn` is `true`, it means that the local participant's camera is currently active. If it is `false`, it means that the local participant's camera is currently disable or inactive.

```js
import { useMeeting } from "@videosdk.live/react-sdk";
const MeetingView = () => {
  // Get the localWebcamOn property
  //highlight-next-line
  const { localWebcamOn } = useMeeting();

  return <> Local Camera is {localWebcamOn} </>;
};
```

- To get the status of **any other participant** you can use the `webcamOn` property of the `useParticipant` hook. This parameter will be `true` if the **participant's** `camera is on` otherwise, it will be `false`.

```js
import { useParticipant } from "@videosdk.live/react-sdk";
const ParticipantView = (participantId) => {
  // Get the webcamOn property
  //highlight-next-line
  const { webcamOn } = useParticipant(participantId);

  return <> Participant Camera is {webcamOn} </>;
};
```

### Video Permissions

- By default, VideoSDK will request video permission when the participants attempts to turn on the camera. Once the permission is granted the camera gets turned on. If the permission is denied, VideoSDK will send an error message in the `onError` event callback of `useMeeting` hook.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/capturing-video-permission.mp4' width={"100%"}/>

</div>

### Troubleshoot Video Permissions

- If a participant denies the camera permission, they can **manually grant** it by following below shown steps.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/troubleshoot-video-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`**, i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [enableWebcam()](/react/api/sdk-reference/use-meeting/methods#enablewebcam)
- [disableWebcam()](/react/api/sdk-reference/use-meeting/methods#disablewebcam)
- [toggleWebcam()](/react/api/sdk-reference/use-meeting/methods#togglewebcam)
- [onStreamEnabled()](/react/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onMediaStatusChanged()](/react/api/sdk-reference/use-participant/events#onmediastatuschanged)
