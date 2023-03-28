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

Using these role is helpful, when the viewers and host have to interact with each other and also allow the viewers to join the livestream where they are allowed to publish and consume other participant's media.

If you are developing a web app, where host does not have to interact with the viewers, you can just have the simple livestream being played on the viewer side without the need to join a VideoSDK meeting and only use the `CONFERENCE` as role for the hosts.

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
      <MeetingView />
    </MeetingProvider>
  ) : (
    <></>
  );
};

const MeetingView = () => {
  // Get Meeting object using useMeeting hook
  const meeting = useMeeting();
  console.log("Meeting Obj",meeting);

  return <>...</>;
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
function MeetingView() {
  const { changeMode } = useMeeting();

  const changeParticipantMode = () => {
    changeMode(Constants.modes.CONFERENCE);
  };

  return <>...</>;
}
```

## Tips while using roles

- When using modes, you should make sure that participants with mode set to `CONFERENCE` are only shown on screen. To achieve these you can filter the participants based on there mode before showing them in the grid.

- If the participant's mode is `VIEWER` just show the HLS player instead of the actual participant's grid. To learn more about HLS player [follow these guide](../integrate-hls/setup-hls-player).

- To ensure only the hosts/speakers are shown in the grid, you should use the `SPOTLIGHT` layout and `pin` as the priority when starting the interactive livestream. Also dont forget to pin all the host/speaker.

## API Reference

The API references for all the methods utilised in this guide are provided below.

- [MeetingProvider](/react/api/sdk-reference/meeting-provider)
- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
- [useParticipant](/react/api/sdk-reference/use-participant/introduction)
- [changeMode](/react/api/sdk-reference/use-meeting/methods#changemode)
