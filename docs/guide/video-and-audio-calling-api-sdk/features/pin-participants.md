---
title: Pin Participants Video & Audio Call - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Pin Participants
pagination_label: Pin Participants
keywords:
  - pin
  - unpin
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pin-participants
---

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/pin-participants)
- [React](/react/guide/video-and-audio-calling-api-sdk/features/pin-participants)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/features/pin-participants)

:::

# Pin Participants

In any meeting with large number of participants, if you want to show only one or two participant(s) on main screen then you can pin that perticipants so that viewers can only focus upon that participants only.

This guide will provide an overview of how to pin or unpin any participants in a meeting.

## Participant Pin State

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
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
const { cam, share } = participant?.pinState;
```

</TabItem>
<TabItem value="react">

```js
const { cam, share } = participant?.pinState;
```

</TabItem>

<TabItem value="reactnative">

```js
COMING SOON!
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>

<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>

</Tabs>

:::note
`pin()` and `unpin()` functions will take `string` or `null` as an argument. Pin will be effective for both webcam and screenshare of that participant.

Suppose you want to pin or unpin only webcam of that participant then you can pass `CAM`, else if you want to pin or unpin only screenshare of that participant then you can pass `SHARE`.

You can also pass `SHARE_AND_CAM` if you want to `pin` or `unpin` both webcam and screenshare media of that user, or passing `null` or nothing as an argument will also work in the same way.

If any participant's webcam is pinned but not screenshare, then calling `pin("SHARE")` the new pinState of that participant will be `{ cam: true, share: true }`.  
:::

### Pin And Unpin a Participant

<Tabs
defaultValue="js"
groupId={"client-group-id"}
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
const onPress = () => {
  // Pin both webcam and screenshare of that participant
  participant.pin();

  // Pin webcam of that participant
  participant.pin("CAM");

  // Pin screenshare of that participant
  participant.pin("SHARE");

  //
  // Unpin both webcam and screenshare of that participant
  participant.unpin();

  // Unpin webcam of that participant
  participant.unpin("CAM");

  // Unpin screenshare of that participant
  participant.unpin("SHARE");
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Pin both webcam and screenshare of that participant
  participant.pin();

  // Pin webcam of that participant
  participant.pin("CAM");

  // Pin screenshare of that participant
  participant.pin("SHARE");

  //
  // Unpin both webcam and screenshare of that participant
  participant.unpin();

  // Unpin webcam of that participant
  participant.unpin("CAM");

  // Unpin screenshare of that participant
  participant.unpin("SHARE");
};
```

</TabItem>

<TabItem value="reactnative">

```js
COMING SOON!
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>

<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>

</Tabs>

### pin-state-changed Event

Whenever any participant got pinned or unpinned by any participant, `pin-state-changed` event will be triggered.

<Tabs
defaultValue="js"
groupId={"client-group-id"}
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
meeting.on("pin-state-changed", ({ participantId, state, pinnedBy }) => {
  console.log({
    participantId, // id of participant who were pinned
    state, // { cam: true, share: true }
    pinnedBy, // id of participant who pinned that participant
  });
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onPinStateChanged: ({ participantId, state, pinnedBy }) => {
    console.log({
      participantId, // id of participant who were pinned
      state, // { cam: true, share: true }
      pinnedBy, // id of participant who pinned that participant
    });
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
COMING SOON!
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>
