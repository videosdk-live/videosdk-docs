---
title: Participants Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Manage Participants features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Introduction
pagination_label: Introduction to participant
keywords:
  - Exit Meeting
  - Leave Meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: introduction
---

# Introduction to participant

A participant is referred to as a single user in the meeting, it can be you or a remote user.

1. [Local Participant (Self | You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/manage-participants#1-local-participant-self--you)
2. [Remote Participants (Except You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/manage-participants#2-remote-participants-except-you)

### 1. Local Participant (Self | You)

Local participant is used to consume your video & audio streams.

`localParticipant` object contains properties such as `displayName`, `id`, `quality` and `streams` Map.

### 2. Remote Participants (Except You)

Remote participants Map is used to get all the participants (except you) in the meeting at any given time.

Each participant in the `participants` Map contains same properties as `localParticipant`.

### Accessing Participants

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
// Access localParticipant
const localParticipant = meeting.localParticipant;

// Access otherParticipant
const participants = meeting.participants;
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const {
  // Access localParticipant
  localParticipant,
  // Access remoteParticipant
  participants,
} = useMeeting();
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const {
  // Access localParticipant
  localParticipant,
  // Access remoteParticipant
  participants,
} = useMeeting();
```

</TabItem>

</Tabs>

### Participant object properties

| Property Name | Type                                                                                                                                   | Description                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| id            | string                                                                                                                                 | Unique id of the participant.                          |
| displayName   | string                                                                                                                                 | The name you define during the meeting initialization. |
| local         | boolean                                                                                                                                | Indicates the participant is local or not.             |
| quality       | string                                                                                                                                 | Indicates the participant streams quality.             |
| Streams       | Map of [Stream](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/manage-participants#stream-object-properties) | Returns Video & Audio Streams.                         |

### Stream Object properties

| Property Name | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| id            | string | Unique id                                  |
| codec         | string | Video/Audio codec.                         |
| kind          | string | Stream Kind such as audio, video and share |
| track         | string | MediaStreamTrack                           |

After getting better understanding of the participant, It would be easy for you to manage the participant from listed platforms.

- [Javascript](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/javascript)
- [React](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react)
- [React Native](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/react-native)
