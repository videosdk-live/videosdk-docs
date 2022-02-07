---
title: Pin Participants Video & Audio Call - Video SDK Docs
hide_title: false
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

# Pin Participants

In any meeting with large number of participants, if you want to show only one or two participant(s) on main screen then you can pin that perticipants so that viewers can only focus upon that participants only.

This guide will provide an overview of how to pin or unpin any participants in a meeting.

## Participant Pin State

```js
const { cam, share } = participant?.pinState;
```

:::note
`pin()` and `unpin()` functions will take `string` or `null` as an argument. Pin will be effective for both webcam and screenshare of that participant.

Suppose you want to pin or unpin only webcam of that participant then you can pass `CAM`, else if you want to pin or unpin only screenshare of that participant then you can pass `SHARE`.

You can also pass `SHARE_AND_CAM` if you want to `pin` or `unpin` both webcam and screenshare media of that user, or passing `null` or nothing as an argument will also work in the same way.

If any participant's webcam is pinned but not screenshare, then calling `pin("SHARE")` the new pinState of that participant will be `{ cam: true, share: true }`.  
:::

### Pin And Unpin a Participant


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

### pin-state-changed Event

Whenever any participant got pinned or unpinned by any participant, `pin-state-changed` event will be triggered.


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
