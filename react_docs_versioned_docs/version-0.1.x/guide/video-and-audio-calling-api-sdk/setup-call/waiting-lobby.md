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

<!--
# Waiting Lobby - React

### Overview

With our React SDK, If the participant is host, then they can decide which participants can join the meeting by allowing or denying access.

Here are the following steps for implementing waiting lobby.

### Generating Token in your backend

- Your server will generate access token using your **API key** and **SECRET**.

- You have to generate a two different `token` with different permissions:

###### HOST Token Payload

```js
  {
   // ..
   apikey: API_KEY, // Your API key will be provide here
   permissions: [`allow_join`], //`allow_join` permission to directly join the meeting
   // ..
  }
```

###### GUEST Token Payload

```js
  {
   // ..
   apikey: API_KEY, // Your API key will be provide here
   permissions: [`ask_join`], //`ask_join` permission to ask permission to host for joinning the meeting
   // ..
  }
```

Here is a detailed explanation of the parameter.

- **`apikey`(Mandatory)**: These must be the API Key generated from the VideoSDK Dashobard. You can get it from [here](https://app.videosdk.live/api-keys).

- **`permissions`(Mandatory)**: By providing the permissions, you can control participant as well as activity.

  Available permissions are:

  - **`allow_join`**: The participant is **allowed to join** the meeting directly.
  - **`ask_join`**: The participant requires to **ask for permission to join** the meeting. The participant having the permission `allow_join` can accept or reject a participant whenever someone wants to join.
  - **`allow_mod`**: The participant is **allowed to toggle** webcam & mic of other participants.

- Then, you will sign this payload with your **`SECRET KEY`** and `jwt` options using the **`HS256 algorithm`**.

- To learn more about **Authentication** and token in detail you can follow [this guide](../authentication-and-token).

### Generating Meeting Id

With the token ready, we can get the `meetingId` from the [VideoSDK's rooms API](/api-reference/realtime-communication/create-room).

- You can [checkout this guide](/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#generating-meeting-id) for generate meetingId.

### Initialization of Meeting

We can initialize the meeting using the `MeetingProvider` from the React SDK. The `MeetingProvider` is responsible for initializing the meeting with the provided configuration, which includes the `token`, `meetingId`, `participantId` and many more.

#### Meeting Provider

`MeetingProvider` is React [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes.

We will be passing the initialization configuration for the meeting and the token in the `MeetingProvider`.

For take a deeper look at the available configuration options you can [check this out](/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#initialization-of-meeting).

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

### Events associated with Waiting Lobby

Following callbacks are received when a participant is successfully joined.

- Who participant join as a host will receive a [`onEntryRequested`](react/api/sdk-reference/use-meeting/events#onentryrequested) event, when guest participant try to join meeting.
- When host allow guest participant to join in meeting then guest will receive a [`onEntryResponded`](react/api/sdk-reference/use-meeting/events#onentryresponded) event with the newly joined `Participant` object from the event callback.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Event to know when some other participant wants to join meeting
  //highlight-start
  function onEntryRequested() {
    const { participantId, name, allow, deny } = data;

    console.log(`${name} requested to join the meeting.`);

    // If you want to allow the entry request
    allow();

    // if you want to deny the entry request
    deny();
  }
  //highlight-end

  //Event to know when the join() request is responded.
  //highlight-start
  function onEntryResponded(participantId, decision) {
    // participantId will be id of participant who requested to join meeting

    if (decision === "allowed") {
      // entry allowed
    } else {
      // entry denied
    }
  }
  //highlight-end

  //Getting the join  method and participants list to display all participants from hook and assigning event callbacks
  //highlight-start
  const { join, participants } = useMeeting({
    onEntryRequested,
    onEntryResponded,
  });
  //highlight-end

  return <>...</>;
};
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [MeetingProvider](/react/api/sdk-reference/meeting-provider)
- [join()](/react/api/sdk-reference/use-meeting/methods#join)
- [onentryrequested()](/react/api/sdk-reference/use-meeting/events#onentryrequested)
- [onentryresponded()](/react/api/sdk-reference/use-meeting/events#onentryresponded)

:::tip
You can checkout the complete [quick start for waiting lobby example here](https://github.com/videosdk-live/quickstart/tree/main/react-rtc).
::: -->

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

With the tokens ready, you can obtain the `meetingId` from the VideoSDK's rooms API, which can be found [here](/api-reference/realtime-communication/create-room).

Refer to [this guide](/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#generating-meeting-id) for generating the meetingId.

## Initialization of Meeting

Initialize the meeting using the `MeetingProvider` from the React SDK. The `MeetingProvider` is responsible for setting up the meeting with the provided configuration, including the `token`, `meetingId`, `participantId`, and more.

### Meeting Provider

`MeetingProvider` is a React [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes. Pass the initialization configuration for the meeting and the token in the `MeetingProvider`.

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

The following callbacks are received when a participant successfully joins the meeting.

- When a participant joins as a host, they will receive an `onEntryRequested` event when a guest participant tries to join the meeting.

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
