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

# Active Speaker Indication - Javascript

The Active Speaker Indication feature in VideoSDK allows you to identify the participant who is currently the active speaker in a meeting. This feature proves especially valuable in larger meetings or webinars, where numerous participants can make it challenging to identify the active speaker.

Whenever any participant speaks in a meeting, the `onSpeakerChanged` event will trigger, providing the participant ID of the active speaker.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `onSpeakerChanged` event will trigger and return the speaker's `participantId`.

### Event

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("speaker-changed", (activeSpeakerId) => {
  console.log("participantId", activeSpeakerId);
  //
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [speaker-changed](/javascript/api/sdk-reference/meeting-class/events#speaker-changed)
