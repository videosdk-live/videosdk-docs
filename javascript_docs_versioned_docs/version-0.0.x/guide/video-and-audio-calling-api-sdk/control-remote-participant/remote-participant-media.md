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
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remote-participant-media
---

# Toggle Remote Participant Media - Javascript

When hosting a meeting, it's important that the host of the meeting should be able to request someone's Mic or Camera to be turned on or should be able to turn them off.

:::note
Participant who will be controlling other participant's mic and camera should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

Before we discuss the methods and events associated with this functionality, here is how the flow would look like.

![img1](../../../../../static/img/toggle-remote-media.png)

## Methods

### `enableMic()`

- If you wish to turn **on** the microphone of a participant, you will be calling the `enableMic()` from the `Participant` object.

- When this method is called, the participant whose microphone is requested will receive the `mic-requested` event with the `participantId` of the participant who requested it and two callback functions `accept` and `reject` which should be called based on decision made by the user.

- **Example:** Meeting is running with **Participant A** and **Participant B**. Now **Participant A** wants to Enable Mic of **Participant B**, so **Participant A** will use `enableMic()` function to request **Participant B**, after that **Participant B** recieve the `mic-requested` event, from there user can either accept or reject the incoming request.

### `enableWebcam()`

- If you wish to turn **on** the camera of a participant, you will be calling the `enableWebcam()` from the `Participant` object.

- When this method is called, the participant whose camera is requested will receive the `webcam-requested` event with the `participantId` of the participant who requested it and two callback functions `accept` and `reject` which should be called based on decision made by the user.

- **Example:** Meeting is running with **Participant A** and **Participant B**. Now **Participant A** wants to Enable Webcam of **Participant B**, so **Participant A** will use `enableWebcam()` function to request **Participant B**, after that **Participant B** recieve the `webcam-requested` event, from there user can either accept or reject the incoming request.

### `disableMic()`

- If you wish to turn **off** the microphone of a participant, you will be calling the `disableMic()` from the `Participant` object.
- This will disable the microphone of the participant.

### `disableWebcam()`

- If you wish to turn **off** the camera of a participant, you will be calling the `disableWebcam()` from the `Participant` object.
- This will disable the camera of the participant.

#### Example

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

// Enable remote participant mic
participant?.enableMic();

// Disable remote participant mic
participant?.disableMic();

// Enable remote Webcam mic
participant?.enableWebcam();

// Disable remote Webcam mic
participant?.enableWebcam();
```

## Events

### `mic-requested`

This event will be emitted to the `Participant B` when any other `Participant A` requests to enable webcam of that participant (`Participant B`). This event handler will receieve following three arguments:

- `accept()` - Callback function to accept the request.
- `reject()` - Callback function to reject the request.
- `participantId` - ParticipantId of the requesting participant

### `webcam-requested`

This event will be emitted to the `Participant B` when any other `Participant A` requests to enable mic of that participant (`Participant B`). This event handler will receieve following three arguments:

- `accept()` - Callback function to accept the request.
- `reject()` - Callback function to reject the request.
- `participantId` - ParticipantId of the requesting participant

###### Usage

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("webcam-requested", (data) => {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
});

meeting.on("mic-requested", (data) => {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
});
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/toggle-media.mp4' width={"100%"}/>

</div>

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [enableMic()](/javascript/api/sdk-reference/participant-class/methods#enablemic)
- [enableWebcam()](/javascript/api/sdk-reference/participant-class/methods#enablewebcam)
- [disableMic()](/javascript/api/sdk-reference/participant-class/methods#disablemic)
- [disableWebcam()](/javascript/api/sdk-reference/participant-class/methods#disablewebcam)
- [webcam-requested](/javascript/api/sdk-reference/meeting-class/events#webcam-requested)
- [mic-requested](/javascript/api/sdk-reference/meeting-class/events#mic-requested)
