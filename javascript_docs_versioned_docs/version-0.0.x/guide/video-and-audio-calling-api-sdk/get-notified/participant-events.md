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

VideoSDK provides various events that can be utilized to gather information about the participants in the meeting.

Here are the events specifically related to the participant:

### participant-joined

- This event is triggered when someone joins the meeting, returning the `Participant` object as parameter.
- It can be subscribed to using the `meeting` object.

### participant-left

- This event is triggered someone leaves the meeting.
- It can be subscribed to using the `meeting` object.

### webcam-requested

- This event is triggered for participant `B`, when another participant, `A` requests to enable their webcam.
- Upon accepting the request, participant `B`'s webcam will be enabled.
- It can be subscribed to using the `meeting` object.

### mic-requested

- This event is triggered for participant `B`, when another participant, `A` requests to enable their mic.
- Upon accepting the request, participant `B`'s mic will be enabled.
- It can be subscribed to using the `meeting` object.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

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
