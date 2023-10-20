---
title: Participant Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Participant Events
pagination_label: Participant Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-events
---

# Participant Events - Javascript

VideoSDK provides multiple types of events which can be listened to know the about the participants in the meeting.

Here are the events which specifically relate to the participants.

### participant-joined

- This event is triggered when someone joins the meeting and return the `Participant` object as parameter.
- This event can be subscribed from the `meeting` object.

### participant-left

- This event is triggered when the someone leaves the meeting.
- This event can be subscribed from the `meeting` object.

### webcam-requested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.
- This event can be subscribed from the `meeting` object.

### mic-requested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.
- This event can be subscribed from the `meeting` object.

### Example

Here is the usage of all the events mentioned in this page.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("participant-joined", (participant) => {
  //
});

meeting.on("participant-left", (participant) => {
  //
});

meeting.on("webcam-requested", (data) => {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
});

meeting.on("mic-requested", (data) => {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [participant-joined](/javascript/api/sdk-reference/meeting-class/events#participant-joined)
- [participant-left](/javascript/api/sdk-reference/meeting-class/events#participant-left)
- [webcam-requested](/javascript/api/sdk-reference/meeting-class/events#webcam-requested)
- [mic-requested](/javascript/api/sdk-reference/meeting-class/events#mic-requested)
