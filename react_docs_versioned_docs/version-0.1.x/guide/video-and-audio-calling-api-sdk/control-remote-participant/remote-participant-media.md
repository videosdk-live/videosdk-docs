---
title: Toggle Remote Participant Media | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Toggle Remote Participant Media
pagination_label: Toggle Remote Participant Media
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remote-participant-media
---

# Toggle Remote Participant Media

When hosting a meeting, it's important that the host of the meeting should be able to request someone's Mic or Camera to be turned on or should be able to turn them off.

:::note
Participant who will be controlling other participant's mic and camera should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/react/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

Before we discuss the methods and events associated with this functionality, here is how the flow would look like.

![img1](../../../../../static/img/toggle-remote-media.png)

## Methods

### `enableMic()`

- If you wish to turn **on** the microphone of a participant, you will be calling the `enableMic()` from the `useParticipant` hook.

- When these method is called, the participant whose microphone is requested will receive the `onMicRequested` event with the `participantId` of the participant who requested it and two callback functions `accept` and `reject` which should be called based on decision made by the user.

- **Example:** Meeting is running with **Participant A** and **Participant B**. Now **Participant A** wants to Enable Mic of **Participant B**, so **Participant A** will use `enableMic()` function to request **Participant B**, after that **Participant B** recieve the `onMicRequested` event, from there user can either accept or reject the incoming request.

### `enableWebcam()`

- If you wish to turn **on** the camera of a participant, you will be calling the `enableWebcam()` from the `useParticipant` hook.

- When these method is called, the participant whose camera is requested will receive the `onWebcamRequested` event with the `participantId` of the participant who requested it and two callback functions `accept` and `reject` which should be called based on decision made by the user.

- **Example:** Meeting is running with **Participant A** and **Participant B**. Now **Participant A** wants to Enable Webcam of **Participant B**, so **Participant A** will use `enableWebcam()` function to request **Participant B**, after that **Participant B** recieve the `onWebcamRequested` event, from there user can either accept or reject the incoming request.

### `disableMic()`

- If you wish to turn **off** the microphone of a participant, you will be calling the `disableMic()` from the `useParticipant` hook.
- These will disable the microphone of the participant.

### `disableWebcam()`

- If you wish to turn **off** the camera of a participant, you will be calling the `disableWebcam()` from the `useParticipant` hook.
- These will disable the camera of the participant.

###### Usage

```js
import { useParticipant } from "@videosdk.live/react-sdk";

const ParticipantView = () => {
  const { enableWebcam, disableWebcam, enableMic, disableMic } =
    useParticipant("<participant-id>");

  const handleEnableWebcam = () => {
    // This will emit an event called "onWebcamRequested" to that particular participant
    enableWebcam();
  };

  const handleEnableMic = () => {
    // This will emit an event called "onMicRequested" to that particular participant
    enableMic();
  };

  const handleDisableWebcam = () => {
    // This will disable the webcam of that particular participant
    disableWebcam();
  };

  const handleDisableMic = () => {
    // This will disable the mic of that particular participant
    disableMic();
  };

  return (
    <>
      <button onClick={handleEnableWebcam}>Enable Webcam</button>
      <button onClick={handleEnableMic}>Enable Mic</button>
      <button onClick={handleDisableableWebcam}>Disable Webcam</button>
      <button onClick={handleDisableableMic}>Disable Mic</button>
    </>
  );
};
```

## Events

### `onWebcamRequested`

This event will be emitted to the `Participant B` when any other `Participant A` requests to enable webcam of that participant (`Participant B`). This event handler will receieve following three arguments:

- `accept()` - Callback function to accept the request.
- `reject()` - Callback function to reject the request.
- `participantId` - ParticipantId of the requesting participant

### `onMicRequested`

This event will be emitted to the `Participant B` when any other `Participant A` requests to enable mic of that participant (`Participant B`). This event handler will receieve following three arguments:

- `accept()` - Callback function to accept the request.
- `reject()` - Callback function to reject the request.
- `participantId` - ParticipantId of the requesting participant

###### Usage

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const {
  /** Methods */
} = useMeeting({
  onWebcamRequested: ({ accept, reject, participantId }) => {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
  },
  onMicRequested: ({ accept, reject, participantId }) => {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
  },
});
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/toggle-media.mp4' width={"100%"}/>

</div>

## API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [enableMic()](/react/api/sdk-reference/use-participant/methods#enablemic)
- [enableWebcam()](/react/api/sdk-reference/use-participant/methods#enablewebcam)
- [onWebcamRequested()](/react/api/sdk-reference/use-meeting/events#onwebcamrequested)
- [onMicRequested()](/react/api/sdk-reference/use-meeting/events#onmicrequested)
