---
title: Meeting Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Meeting Events
pagination_label: Meeting Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-events
---

# Meeting Events - Javascript

VideoSDK provides several types of events that can be listened to in order to determine the current state of the meeting. 

Here are the events which specifically relate to the meeting:

### meeting-joined

- This event is triggered when the meeting is successfully joined.
- It can be subscribed to using the `meeting` object.

### meeting-left

- This event is triggered when the meeting is left.
- It can be subscribed to using the `meeting` object.

### speaker-changed

- This event is triggered when there is a change in the active speaker during the meeting.
- It can be subscribed to using the `meeting` object.

### presenter-changed

- This event is triggered when there is a change in the presenter during the meeting.
- It can be subscribed to using the `meeting` object.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("meeting-joined", () => {
  //
});

meeting.on("meeting-left", () => {
  //
});

meeting.on("speaker-changed", (activeSpeakerId) => {
  //
});

meeting.on("presenter-changed", (activePresenterId) => {
  //
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [meeting-joined](/javascript/api/sdk-reference/meeting-class/events#meeting-joined)
- [meeting-left](/javascript/api/sdk-reference/meeting-class/events#meeting-left)
- [speaker-changed](/javascript/api/sdk-reference/meeting-class/events#speaker-changed)
- [presenter-changed](/javascript/api/sdk-reference/meeting-class/events#presenter-changed)
