---
title: React
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "React"
pagination_label: "React"
keywords:
  - react sdk
  - react js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: react
---

## What is Participant?

A participant is refered as a single user in a meeting, it can be you or can be remote user.
In Video SDK we have categorise participant in two types.

1. [Local Participant (Self | You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react#1-local-participant-self--you)
2. [Remote Participants](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react#2-remote-participants)

### 1. Local Participant (Self | You)

Local participant is used to consume your video & audio streams.
local participant object contains properties such as displayName, id, quality and streams Map.

### 2. Remote Participants

Remote participants Map is used to get all the participants (including you) in the meeting at any given time.

Remote participants Map contains same properties as **LocalParticipant**.

You can get Local and Remote Participant from `useMeeting` Hook.

### Accessing Participants

```js title="index.js"
import { useMeeting } from "@videosdk.live/react-sdk";

const {
  // Access localParticipant
  localParticipant,
  // Access remoteParticipant
  participants,
} = useMeeting();
```

### Participant object properties

| Property Name | Type                                                                                                                     | Description                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| id            | string                                                                                                                   | Unique id of the participant.                          |
| displayName   | string                                                                                                                   | The name you define during the meeting initialization. |
| local         | boolean                                                                                                                  | Indicates the participant is local or not.             |
| quality       | string                                                                                                                   | Indicates the participant streams quality.             |
| Streams       | Map of [Stream](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react#stream-object-properties) | Returns Video & Audio Streams.                         |

### Stream Object properties

| Property Name | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| id            | string | Unique id                                  |
| codec         | string | Video/Audio codec.                         |
| kind          | string | Stream Kind such as audio, video and share |
| track         | string | MediaStreamTrack                           |

## How to Access Single Participant?

For accessing single participant object you need to provide `id` in params, you can do it in two ways.

```js title="participant.js"
// 1. Using useParticipant Hook

import { useParticipant } from "@videosdk.live/react-sdk";

const participant = useParticipant("<participant-id>");

// 2. Using useMeeting Hook

import { useMeeting } from "@videosdk.live/react-sdk";

const { participants } = useMeeting();

const participant = participants.get("<participant-id>");
```

## How to Render Participant?

### 1. Get Participants from useMeeting Hook

We will get participant properties from useMetting hook, participant is always in the form of [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

We will create array of pariticpantIds using `[...participants.keys()]` and it will result something like this `['participant-one-id','participant-two-id',...]`

```js title="index.js"
import { useParticipant, useMeeting } from "@videosdk.live/react-sdk";

const { participants } = useMeeting();
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      <ParticipantView key={k} participantId={k} />
    </div>
  ));
}
```

### 2. Create Component for Handling Streams

In this step, we will create `ParticipantView` component which accept `participantId` as props and responsible for handling video and audio streams for particular participant.

```js title="index.js"
import { useParticipant, useMeeting } from "@videosdk.live/react-sdk";

const { participants } = useMeeting();
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      <ParticipantView key={k} participantId={k} />
    </div>
  ));
}

const ParticipantView = ({ participantId }) => {
  /** Define Refs*/
  const webcamRef = useRef(null);
  const micRef = useRef(null);

  return (
    <>
      <audio ref={micRef} autoPlay />
      <video height={"50%"} width={"50%"} ref={webcamRef} autoPlay />
    </>
  );
};
```

### 3. Set Stream from useParticipant Hook

In this step, we will get particular participant webcam and mic stream from useParticpant hook and set to the `<audio>` and `<video>` component.

```js title="index.js"
import { useParticipant, useMeeting } from "@videosdk.live/react-sdk";

const { participants } = useMeeting();
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      <ParticipantView key={k} participantId={k} />
    </div>
  ));
}

const ParticipantView = ({ participantId }) => {
  /** Define Refs*/
  const webcamRef = useRef(null);
  const micRef = useRef(null);

  /** useParticipant Hooks which accept `participantId`
    as parameter then return participant properties such as displayName, webcamOn, micOn etc.  */
  const {
    displayName,
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isActiveSpeaker,
  } = useParticipant(participantId);

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <>
      <audio ref={micRef} autoPlay />
      <video height={"50%"} width={"50%"} ref={webcamRef} autoPlay />
    </>
  );
};
```

## Events

You can follow this [Participant Related Events](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/participant-events).
