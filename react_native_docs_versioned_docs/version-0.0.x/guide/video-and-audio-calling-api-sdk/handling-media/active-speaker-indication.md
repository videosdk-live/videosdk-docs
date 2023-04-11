---
title: Active Speaker Indication | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Active Speaker Indication
pagination_label: Active Speaker Indication
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: active-speaker-indication
---

# Active Speaker Indication

Active Speaker indication feature in VideoSDK let you know, which participant in a meeting is active speaker. This feature can be particularly useful in larger meetings or webinars, where there may be many participants and it can be difficult to tell who is speaking.

Whenever any participant speaks in meeting, `onSpeakerChanged` event will trigger with the participant id of the active speaker.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `onSpeakerChanged` event will trigger and return the speaker `participantId`.

### Event

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  /** useMeeting hooks events */
  const {
    /** Methods */
  } = useMeeting({
    onSpeakerChanged: (activeSpeakerId) => {
      console.log("Active Speaker participantId", activeSpeakerId);
    },
  });
};
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onSpeakerChanged()](/react-native/api/sdk-reference/use-meeting/events#onspeakerchanged)
