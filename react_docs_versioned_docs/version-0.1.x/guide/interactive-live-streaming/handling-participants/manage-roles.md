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

# Manage Roles

## Roles with VideoSDK

When doing interactive live streaming maintaining the role of users is quite important. To help manage these roles better, VideoSDK allows a participant with two types of modes:

**`1. CONFERENCE`** When a participant is joining with mode set to `CONFERENCE`, we will be able to **publish and consume the media** of other participants and also interact with them using the features like chat, poll etc.

**`2. VIEWER`** When a participant is joining with mode set to `VIEWER`, that participant is **not allowed to publish or consume any media** from other participants. Although they can interact with other participants using chat, polls etc.

## When to use the Roles?

##### 1. Simple Adaptive Streaming

When we talk about simple adaptive streaming, we imply that there is hardly any interaction between the hosts and the viewers.

These livestreams are helpful when there are a lot of viewers and they don't want to engage with the host. In this scenario, every presenter attends a VideoSDK meeting while every viewer only watches the livestream.

**In these scenario, there is no need to have the `VIEWER` join the meeting. Only the `CONFERENCE` participant will join the meeting.**

##### 2. Adaptive Streaming with increased engagement

When you want to communicate with your audience by enabling polls, conversations, and the ability for viewers to join and leave the livestream based on the host's decision, adaptive streaming with enhanced engagement will be the best fit for you.

**In these scenario, there all the speakers will join as `CONFERENCE` participant and all the audience will join the meeting as `VIEWER` participant.**

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
      joinWithoutInteraction={true}
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

Let's say you are hosting a livestream and you want one of youer viewer to join the livestream with you. In these case you can change the mode of the participant using the `changeMode()` of the `useMeeting` hook.

```js
function Container() {
  const { changeMode } = useMeeting();

  const changeParticipantMode = () => {
    changeMode(Constants.modes.CONFERENCE);
  };

  return <>...</>;
}
```

## Tips while using roles

- When using modes, you should make sure that participants with mode set to `CONFERENCE` are only shown on screen. To achieve these you can filter the participants based on there mode before showing them in the grid.

```js
//Get the participants from useMeeting
const { participants } = useMeeting();

//Filtering the host/speakers from all the participants
//highlight-start
const speakers = [...participants.values()].filter((participant) => {
  return participant.mode == Constants.modes.CONFERENCE;
});
//highlight-end
```

- If the participant's mode is `VIEWER` just show the HLS player instead of the actual participant's grid. To learn more about HLS player [follow these guide](../integrate-hls/setup-hls-player).

- To ensure only the hosts/speakers are shown in the grid, you should use the `SPOTLIGHT` layout and `pin` as the priority when starting the interactive livestream. Also dont forget to pin all the host/speaker.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [MeetingProvider](/react/api/sdk-reference/meeting-provider)
- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
- [useParticipant](/react/api/sdk-reference/use-participant/introduction)
- [changeMode](/react/api/sdk-reference/use-meeting/methods#changemode)
