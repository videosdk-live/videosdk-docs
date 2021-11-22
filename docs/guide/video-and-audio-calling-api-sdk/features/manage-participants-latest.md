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
slug: manage-participants-latest
---

# Manage Participants


## What is Participant?

A participant is refered as a single user in a meeting, it can be you or can be remote user.
In Video SDK we have categorise participant in two types.

  1. [Local Participant (Self || You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants-latest#1-local-participant-self)
  2. [Other Participants (Except You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants-latest#2-other-participants-except-you)



### 1. Local Participant (Self || You)

Local participant is used to consume your video & audio streams.
local participant object contains properties such as displayName, id, quality and streams Map.



### 2. Other Participants (Except You)

Other participants Map is used to get all the participants (except you) in the meeting at any given time.

Other participants Map contains same properties as **LocalParticipant**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


### Accessing Participants

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
// Access localParticipant
const localParticipant = meeeting.localParticipant;

// Access otherParticipant
const participants = meeeting.participants;

```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const {
    // Access localParticipant
    localParticipant,
    // Access otherParticipant
    participants
} = useMeeting()

```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const {
    // Access localParticipant
    localParticipant,
    // Access otherParticipant
    participants
} = useMeeting()

```

</TabItem>
<TabItem value="android">

```js
 Coming soon
```

</TabItem>
<TabItem value="ios">

```js
 Coming soon
```

</TabItem>
<TabItem value="flutter">

```js
 Coming soon
```

</TabItem>
</Tabs>

### Participant object properties

| Property Name | Type    | Description                                            |
| ------------- | ------- | ------------------------------------------------------ |
| id            | string  | Unique id of the participant.                          |
| displayName   | string  | The name you define during the meeting initialization. |
| local         | boolean | Indicates the participant is local or not.             |
| quality       | string  | Indicates the participant streams quality.             |
| [Streams](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants-latest#streams-map-properties)       | Map     | Returns Video & Audio Streams.                         |

### Streams Map properties

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id          |
| codec         | string | Video/Audio codec. |
| kind          | string | Stream Kind such as Audio, Video and Share       |
| track         | string | MediaStreamTrack   |


## How to Access Single Participant?

You can get single participant object by passing id.

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
// Access single participant using id
const participant = meeeting.participants.get('<participant-id>');

```

</TabItem>
<TabItem value="react">

```js
// 1. Using useParticipant Hook

import { useParticipant } from "@videosdk.live/react-sdk";

const participant = useParticipant('<participant-id>')

// 2. Using useMeeting Hook

import { useMeeting } from "@videosdk.live/react-sdk";

const { participants } = useMeeting()

const participant = participants.get('<participant-id>');

```

</TabItem>
<TabItem value="reactnative">

```js
// 1. Using useParticipant Hook

import { useParticipant } from "@videosdk.live/react-native-sdk";

const participant = useParticipant('<participant-id>')

// 2. Using useMeeting Hook

import { useMeeting } from "@videosdk.live/react-native-sdk";

const { participants } = useMeeting()

const participant = participants.get('<participant-id>');
```

</TabItem>
<TabItem value="android">

```js
 Coming soon
```

</TabItem>
<TabItem value="ios">

```js
 Coming soon
```

</TabItem>
<TabItem value="flutter">

```js
 Coming soon
```

</TabItem>
</Tabs>

## How to List Participant?
