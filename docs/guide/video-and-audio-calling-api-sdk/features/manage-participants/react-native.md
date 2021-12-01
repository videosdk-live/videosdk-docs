---
title: React Native
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React Native SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "React Native"
pagination_label: "React Native"
keywords:
  - react native ios sdk
  - react native android sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: react-native
---

## Contents

- [How to Access Single Participant?](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react-native#how-to-access-single-participant)
- [How to Render Remote Participant?](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react-native#how-to-render-participant)
- [Events](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react-native#events)

## How to Access Single Participant?

For accessing single participant object you need to provide `id` in params, you can do it in two ways.

```js title="participant.js"
// 1. Using useParticipant Hook

import { useParticipant } from "@videosdk.live/react-native-sdk";

const participant = useParticipant("<participant-id>");

// 2. Using useMeeting Hook

import { useMeeting } from "@videosdk.live/react-native-sdk";

const { participants } = useMeeting();

const participant = participants.get("<participant-id>");
```

## How to Render Participant?

For rendering participant, you don't have to manage local participant seprately.
`participants` properties from `useMeeting` hook return all the participant (including you).

If you want to access local participant, you can use `localparticipant` from `useMeeting` hook.

### 1. Get Participants from useMeeting Hook

We will get participant properties from useMetting hook, participant is always in the form of [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

We will create array of pariticpantIds using `[...participants.keys()]` and it will result something like this `['participant-one-id','participant-two-id',...]`

```js title="index.js"
import { useParticipant, useMeeting } from "@videosdk.live/react-native-sdk";

const { participants } = useMeeting();
{
  [...participants.keys()].map((k) => (
    <View>
      {k.map((l) => (
        <ParticipantView key={l} participantId={l} />
      ))}
    </View>
  ));
}
```

### 2. Create Component for Handling Streams

In this step, we will create `ParticipantView` component which accept `participantId` as props and responsible for handling streams for particular participant.

```js title="index.js"
import {
  useParticipant,
  useMeeting,
  RTCView,
} from "@videosdk.live/react-native-sdk";

const { participants } = useMeeting();
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      <ParticipantView key={k} participantId={k} />
    </div>
  ));
}

const ParticipantView = ({ participantId }) => {
  return <RTCView streamURL={"<webcam-stream>"} style={{ flex: 1 }} />;
};
```

### 3. Set Stream from useParticipant Hook

In this step, we will get particular participant stream from useParticpant hook and set stream track to `<RTCView>` component `streamURL`

```js title="index.js"
import {
  useParticipant,
  useMeeting,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";

const { participants } = useMeeting();
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      <ParticipantView key={k} participantId={k} />
    </div>
  ));
}

const ParticipantView = ({ participantId }) => {
  /** useParticipant Hooks which accept `participantId`
    as parameter then return participant properties such as displayName, webcamOn, micOn etc.  */
  const { displayName, webcamStream, webcamOn, micOn, isActiveSpeaker } =
    useParticipant(participantId);

  return (
    <RTCView
      streamURL={new MediaStream([webcamStream?.track]).toURL()}
      style={{ flex: 1 }}
    />
  );
};
```

## Events

Please refer to this [Participant Events](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/participant-events) for more information about the event.
