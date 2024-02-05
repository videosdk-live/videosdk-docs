---
title: Waiting Lobby | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Waiting Lobby
pagination_label: Waiting Lobby
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: waiting-lobby
---

# Waiting Lobby - React SDK

## Overview

With our React SDK, you can implement a waiting lobby feature, which allows the host to control which participants can join the meeting by allowing or denying access. Here are the steps for implementing the waiting lobby.

## Generating Tokens in Your Backend

Your server should generate access tokens using your API key and secret. Two different tokens need to be generated with different permissions:

### HOST Token Payload

```js
{
  // ...
  apikey: API_KEY, // Your API key
  permissions: ['allow_join'], // Permission to directly join the meeting
  // ...
}
```

### GUEST Token Payload

```js
{
  // ...
  apikey: API_KEY, // Your API key
  permissions: ['ask_join'], // Permission to ask the host for permission to join the meeting
  // ...
}
```

Explanation of parameters:

- **`apikey` (Mandatory)**: Your API key generated from the VideoSDK Dashboard, which can be obtained [here](https://app.videosdk.live/api-keys).

- **`permissions` (Mandatory)**: Permissions that control participant activity. Available permissions include:

  - **`allow_join`**: Participants are allowed to join the meeting directly.
  - **`ask_join`**: Participants need to ask for permission to join the meeting. Participants with the `allow_join` permission can accept or reject others' join requests.
  - **`allow_mod`**: Participants are allowed to toggle webcam and mic of other participants.

Then, sign this payload with your `SECRET KEY` and use the `HS256 algorithm`. For more details on authentication and tokens, refer to [this guide](../authentication-and-token).

## Generating Meeting Id

With the tokens ready, you can now obtain the `meetingId` from the VideoSDK's rooms API, which can be found [here](/api-reference/realtime-communication/create-room).

Refer to [this guide](/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#generating-meeting-id) for generating the meetingId.

## Initialization of Meeting

Initialize the meeting using the `MeetingProvider` from the React SDK. The `MeetingProvider` is responsible for setting up the meeting with the provided configuration, including the `token`, `meetingId`, `participantId`, and more.

### Meeting Provider

`MeetingProvider` is a React [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to changes in the meeting. Pass the initialization configuration for the meeting and the token in the `MeetingProvider`.

For detailed configuration options, check [here](/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#initialization-of-meeting).

```js
<MeetingProvider
  config={{
    meetingId: "<Id-of-meeting>",
    name: "<Name-of-participant>",
    micEnabled: "<Flag-to-enable-mic>",
    webcamEnabled: "<Flag-to-enable-webcam>",
    participantId: "Id-of-participant", // optional, default: SDK will generate
  }}
  // If a participant joins as a host, provide them with the "allow_join" permission token.
  // Otherwise, provide the "ask_join" permission token.
  token={
    isHost ? "allow_join token will be here" : "ask_join token will be here"
  }
></MeetingProvider>
```

## Events associated with Waiting Lobby

The following events are received when a participant successfully joins the meeting.

- When a participant joins as a host, they will receive an `onEntryRequested` event whenever a guest participant tries to join the meeting.

- When a host allows a guest participant to join the meeting, the guest will receive an `onEntryResponded` event with the newly joined `Participant` object.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  function onEntryRequested(data) {
    const { participantId, name, allow, deny } = data;

    console.log(`${name} requested to join the meeting.`);

    // If you want to allow the entry request
    allow();

    // If you want to deny the entry request
    deny();
  }

  function onEntryResponded(participantId, decision) {
    // participantId will be the ID of the participant who requested to join the meeting

    if (decision === "allowed") {
      // Entry allowed
    } else {
      // Entry denied
    }
  }

  const { join, participants } = useMeeting({
    onEntryRequested,
    onEntryResponded,
  });

  return <>...</>;
};
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url="/video/react-waiting-lobby.mp4" height="500px" width={"100%"} />

</div>

<br/>

## API Reference

Here are the API references for all the methods and events used in this guide:

- [MeetingProvider](/react/api/sdk-reference/meeting-provider)
- [join()](/react/api/sdk-reference/use-meeting/methods#join)
- [onentryrequested()](/react/api/sdk-reference/use-meeting/events#onentryrequested)
- [onentryresponded()](/react/api/sdk-reference/use-meeting/events#onentryresponded)

:::tip
You can find a complete [quick start example for the waiting lobby here](https://github.com/videosdk-live/quickstart/tree/main/react-waiting-lobby-rtc).
:::
