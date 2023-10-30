---
title: Manage Participants Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Manage Participants features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Participants
pagination_label: Manage Participants
keywords:
  - Exit Meeting
  - Leave Meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-participants
---

# Manage Participants - React Native

## 1. Local Participant (self)

Local participant is used to consume your video & audio streams.
it contains information about local participant such as displayName, id, quality and streams Map.

You can acces localParticipant from the [useMeeting](/react/api/sdk-reference/use-meeting/introduction) Hook.

### Participant object properties

| Property Name | Type          | Description                                            |
| ------------- | ------------- | ------------------------------------------------------ |
| id            | string        | Unique id of the participant.                          |
| displayName   | string        | The name you define during the meeting initialization. |
| local         | boolean       | Indicates the participant is local or not.             |
| quality       | string        | Indicates the participant streams quality.             |
| Streams       | Map of Stream | Returns Video & Audio Streams.                         |

### Stream Object properties

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id          |
| codec         | string | Video/Audio codec. |
| kind          | string | Stream Kind.       |
| track         | string | MediaStreamTrack   |

## 2. Other Participants (Except You)

Other participants Map is used to get all the participants (except you) in the meeting at any given time.

Other participants Map contains same properties as [LocalParticipant](/react-native/guide/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### Local And Other Participants

```js
import { View } from "react-native";
import {
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";

/** localParticipant contains Participant object
  as displayed above local participant section */
const { localParticipant, participants } = useMeeting();

/** Render All Participant including local participant */
{
  [...participants.keys()].map((k) => (
    <View>
      {k.map((l) => (
        <ParticipantView key={l} participantId={l} />
      ))}
    </View>
  ));
}

/** Participant View Component*/

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

## 3. Participant Related Events

1. **onParticipantJoined** - Whenever any new participant join the meeting, `onParticipantJoined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `onParticipantJoined` event trigger and return the [participant object](/react-native/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **onParticipantLeft** - Whenever any participant leave/exit the meeting, `onParticipantLeft` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `onParticipantLeft` event trigger and return the [participant object](/react-native/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **onPresenterChanged** - Whenever any participant present/screenshare their screen/window in meeting, `onPresenterChanged` event will trigger and return the presenter `participantId`.

4. **onStreamEnabled** - Whenever any participant enabled mic/webcam in meeting, `onStreamEnabled` event will trigger and return [Stream](/react-native/guide/video-and-audio-calling-api-sdk/features/manage-participants#stream-object-properties).

5. **onStreamDisabled** - Whenever any participant disabled mic/webcam in meeting, `onStreamDisabled` event will trigger and return [Stream](/react-native/guide/video-and-audio-calling-api-sdk/features/manage-participants#stream-object-properties).

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";

  /** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onParticipantJoined: (participant) => {},
  onParticipantLeft: (participant) => {},
  onPresenterChanged: (presenterId) => {},
});

  /** useParticipant hooks events */
const {
  /** Methods */
} = useParticipant(participantId, {
  onStreamEnabled:(stream) => {};
  onStreamDisabled(stream) => {};
});
```
