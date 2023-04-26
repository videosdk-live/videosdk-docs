---
title: Toggle Participant Media
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Toggle Participant Media
pagination_label: Toggle Participant Media
keywords:
  - Camera on
  - Camera off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: toggle-participant-media
---

Control other participant's camera and mic.
For better idea, let's understand this with a real case scenario

**Scenario 1 (Online Class)** - In this scenario, the lecturer(Local Participant) will control the student's(Other Participant) camera and mic as per his/her needs.

**Scenario 2 (Online Events)** - In this scenario, the event hosts will control the audience camera and mic when someone wants to speak.

This guide will provide an overview of how to control other participant camera and mic in a room.

1. **Enable camera of Participant** - By using `enableCam()` function, a `cameraRequested` event will trigger on requested participant side.

   **Example** : Room is running with **User A** and **User B**. Now **User A** wants to Enable camera of **User B**, so **User A** will use `enableCam()` function to request **User B**, after that **User B** receive the `cameraRequested` event, from there user can either accept or reject the incoming request.

2. **Disable camera of Participant** - By using `disableCam()` function, camera of that participant will be turned off.

   **Example** : **User A** wants to Disable camera of **User B**, so **User A** will use `disableCam()` function to Disable it without any request.

3. **Unmute Mic of Participant** - By using `unmuteMic()` function, a `micRequested` event will trigger on requested participant side.

   **Example** : Room is running with **User A** and **User B**. Now **User A** wants to Enable Mic of **User B**, so **User A** will use `unmuteMic()` function to request **User B**, after that **User B** will receive the `micRequested` event, from there user can either accept or reject the incoming request.

4. **Mute Mic of Participant** - By using `muteMic()` function, Mic of that participant will disable.

   **Example** : **User A** wants to Disable Mic of **User B**, so **User A** will use `mute()` function to Disable it without any request.

:::note

To achieve this feature, you need to pass `allow_join` persmission while genearting token for room initialization. After that you will be able to access participant media methods.

[How to apply permission while generating token?](/flutter/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis)

:::

### Request Media Methods

```js
const participants = room.participants;
const participant = participants.get("<participant-id>");

// This will emit an event called "cameraRequested" to that particular participant
participant.enableCam();

// This will directly disable camera of particular participant
participant.disableCam();

// This will emit an event called "micRequested" to that particular participant
participant.unmuteMic();

// This will directly disable mic of particular participant
participant.muteMic();
```

### Manage Requested Media Events

1. **cameraRequested** - This event will be emitted to the participant `B` when any other participant `A` requests to enable camera of that participant `B`. This event handler will receive following three arguments:

   - `accept()` - Callback function to accept the request.
   - `reject()` - Callback function to reject the request.

<div style={{height: "10px"}}></div>

2. **micRequested** - This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of that participant `B`. This event handler will receieve following three arguments:

   - `accept()` - Callback function to accept the request.
   - `reject()` - Callback function to reject the request.

```js
// Handle camera Requested
widget.room.on(Events.cameraRequested, ({ accept, reject }) {
    // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
}, );

// Handle Mic Requested
widget.room.on(Events.micRequested, ({ accept, reject }) {
     // callback function to accept the request
    accept();

    // callback function to reject the request
    reject();
}, );
```
