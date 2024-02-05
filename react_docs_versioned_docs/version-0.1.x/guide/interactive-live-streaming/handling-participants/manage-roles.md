---
title: Manage Roles - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Roles
pagination_label: Manage Roles
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-roles
---

# Manage Roles - React

## Roles with VideoSDK

When engaging in interactive live streaming, managing user roles is crucial. VideoSDK supports two participant modes to facilitate role management:

**`1. CONFERENCE`** When a participant joins with the mode set to `CONFERENCE`, they have the capability to both publish and consume the media of other participants. Additionally, they can interact with others using features like chat and polls.

**`2. VIEWER`** When a participant joins with the mode set to `VIEWER`, they are restricted from both **publishing and consuming any media** from other participants. However, they can still interact with other participants using features like chat and polls.

![manage-roles](https://cdn.videosdk.live/website-resources/docs-resources/meeting_modes.jpg)

## When to use the Roles?

##### 1. Simple Adaptive Streaming

- Simple Adaptive Streaming (SAS) is a type of livestreaming designed for events where minimal interaction between the host and viewers is preferred.

- Ideal for scenarios with a large audience that does not actively engage with the host, SAS operates with each speaker participating in a VideoSDK meeting in `CONFERENCE` mode. 

- Viewers, on the other hand, can effortlessly watch the livestream using the downstreamUrl. Unlike the speakers, viewers are not required to join the meeting in `CONFERENCE` or `VIEWER` mode. This setup ensures a smooth streaming experience without unnecessary interruptions or distractions.


import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_simple_ils.mp4" height="500px" width={"100%"} />

</div>

##### 2. Adaptive Streaming with increased engagement

- If you aim to enhance engagement with your audience during a live streaming event, Adaptive Streaming technology is the way to go. This approach allows you to integrate interactive features like polls and conversations, empowering viewers to join and leave the livestream at the host's discretion.

- To implement this, ensure that all speakers join as `CONFERENCE` mode participants, while the audience joins as `VIEWER` mode participants. This setup enables everyone to actively participate in the interactive elements of the live stream, creating a more dynamic and engaging experience for all involved.



<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_livestream_interaction_1.mp4" height="500px" width={"100%"} />

</div>

## Using roles

The mode of the participants is configured during the meeting initialization within the `config` parameter of the `MeetingProvider`.

```js
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";
const getToken = async () => {
  //highlight-next-line
  ...
};
const getMeetingId = async () => {
  //highlight-next-line
  ...
};
const App = () => {
    //highlight-start
    ...
    //highlight-end

  // Init Meeting Provider
  return token && meetingId ? (
    <MeetingProvider
      config={{
        meetingId: meetingId,
        name: "NAME HERE",
        micEnabled: true,
        webcamEnabled: true,
        //highlight-next-line
        mode: "CONFERENCE", // allowed: CONFERENCE | VIEWER
      }}
      token={token}
      joinWithoutUserInteraction={true}
    >
      <Container />
    </MeetingProvider>
  ) : (
    <></>
  );
};

const Container = () => {
  //highlight-start
  // Get Meeting object using useMeeting hook
  const { localParticipant } = useMeeting();

  return localParticipant.mode == "CONFERENCE" ? (
    <SpeakerView />
  ) : localParticipant.mode == "VIEWER" ? (
    <HlsPlayer />
  ) : null;
  //highlight-end
};

```

## Getting Participant Mode

The role of the participant is identified using the `mode` property from `useParticipant` hook.


```js
function ParticipantView({ participantId }) {
  const { displayName, mode } = useParticipant(participantId);

  return (
    <p>
      Name: {displayName}, Mode: {mode}
    </p>
  );
}
```

## Changing Participant's Mode

Suppose you are hosting a livestream and wish to have one of your viewers join the livestream with you. In this scenario, you can modify the mode of the participant using the `changeMode()` method provided by the `useMeeting` hook.

```js
function Container() {
  const { changeMode } = useMeeting();

  const changeParticipantMode = () => {
    // For CONFERENCE mode
    changeMode(Constants.modes.CONFERENCE);

    // For VIEWER mode
    changeMode(Constants.modes.VIEWER);
  };

  return <>...</>;
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [MeetingProvider](/react/api/sdk-reference/meeting-provider)
- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
- [useParticipant](/react/api/sdk-reference/use-participant/introduction)
- [changeMode](/react/api/sdk-reference/use-meeting/methods#changemode)
