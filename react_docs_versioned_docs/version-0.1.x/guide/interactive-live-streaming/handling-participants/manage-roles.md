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

When doing interactive live streaming maintaining the role of users is quite important. To help manage these roles better, VideoSDK allows a participant with two types of modes:

**`1. CONFERENCE`** When a participant is joining with mode set to `CONFERENCE`, we will be able to **publish and consume the media** of other participants and also interact with them using the features like chat, poll etc.

**`2. VIEWER`** When a participant is joining with mode set to `VIEWER`, that participant is **not allowed to publish or consume any media** from other participants. Although they can interact with other participants using chat, polls etc.

![manage-roles](https://cdn.videosdk.live/website-resources/docs-resources/meeting_modes.jpg)

## When to use the Roles?

##### 1. Simple Adaptive Streaming

- Simple Adaptive Streaming (SAS) is a type of livestreaming that requires minimal interaction between the host and viewers.

- It is particularly useful for events with a large number of viewers who prefer not to engage with the host.

- In SAS, each speaker attends a VideoSDK meeting in `CONFERENCE` mode, while viewers can simply watch the livestream using the `playbackHlsUrl` and `livestreamUrl`. Unlike the speakers, viewers do not need to join the meeting in `CONFERENCE` or `VIEWER` mode. This allows for a seamless streaming experience without any unnecessary interruptions or distractions.
- when you receive `HLS_PLAYABLE` status you will receive 2 urls in response
  - `playbackHlsUrl` - Live HLS with playback support
  - `livestreamUrl` - Live HLS without playback support

:::note
`downstreamUrl` is now depecated. Use `playbackHlsUrl` or `livestreamUrl` in place of `downstreamUrl`
:::

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_simple_ils.mp4" height="500px" width={"100%"} />

</div>

##### 2. Adaptive Streaming with increased engagement

- If you're looking to increase engagement with your audience during a live streaming event, consider using Adaptive Streaming technology. With this approach, you can incorporate interactive features such as polls and conversations, and give viewers the ability to join and leave the livestream as the host decides.

- To set this up, have all speakers join as `CONFERENCE` mode participants, while the audience joins as `VIEWER` mode participants. This way, everyone can participate in the interactive elements of the live stream and create a more dynamic and engaging experience for all.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_livestream_interaction_1.mp4" height="500px" width={"100%"} />

</div>

## Using roles

The mode of the participants is set during the meeting intialization in the `config` in `MeetingProvider`.

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

You can identify the participants role by using `mode` property from `useParticipant` hook.

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

Let's say you are hosting a livestream and you want one of your viewer to join the livestream with you. In this case you can change the mode of the participant using the `changeMode()` of the `useMeeting` hook.

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
