---
title: Speaker Indication Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Speaker Indication
pagination_label: Speaker Indication
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: speaker-indication
---

# Speaker Indication

Speaker indication feature in VideoSDK let you know, which participant in a meeting is active speaker.

Whenever any participant speaks in meeting, `onSpeakerChanged` event will trigger.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `onSpeakerChanged` event will trigger and return the speaker `participantId`.

### speaker-changed Event

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  /** useMeeting hooks events */
  const {
    /** Methods */
  } = useMeeting({
    onSpeakerChanged: (activeSpeakerId) => {
      console.log("participantId", activeSpeakerId);
    },
  });
};
```
