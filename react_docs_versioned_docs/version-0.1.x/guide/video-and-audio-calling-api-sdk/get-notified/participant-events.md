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

# Participant Events - React

VideoSDK provides various events that can be utilized to gather information about the participants in the meeting.

Here are the events that specifically relate to the participants.

### onParticipantJoined

- This event is triggered when someone joins the meeting, returning the `Participant` object as parameter.
- It can be subscribed to, from the `useMeeting` hook.

### onParticipantLeft

- This event is triggered when someone leaves the meeting.
- It can be subscribed to, from the `useMeeting` hook.

### onWebcamRequested

- This event will be triggered for participant `B`, when another participant, `A` requests to enable the webcam of participant `B`.
- Upon accepting the request, participant `B`'s webcam will be enabled.
- It can be subscribed to, from the `useMeeting` hook.

### onMicRequested

- This event will be triggered for participant `B` when another participant, `A` requests to enable the mic of participant `B`.
- Upon accepting the request, participant `B`'s mic will be enabled.
- It can be subscribed to, from the `useMeeting` hook.

### Example

Here is an example demonstrating the usage of all the events mentioned on this page.

```js
function onMicRequested(data) {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable mic

  // if accept request
  accept();

  // if reject request
  reject();
}

function onWebcamRequested(data) {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
}

function onParticipantJoined(participant) {
  console.log(" onParticipantJoined", participant);
}

function onParticipantLeft(participant) {
  console.log(" onParticipantLeft", participant);
}

const {
  meetingId
  ...
} = useMeeting({
  onParticipantJoined,
  onParticipantLeft,
  onMicRequested,
  onWebcamRequested,
  ...
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [onParticipantJoined()](/react/api/sdk-reference/use-meeting/events#onparticipantjoined)
- [onParticipantLeft()](/react/api/sdk-reference/use-meeting/events#onparticipantleft)
- [onWebcamRequested()](/react/api/sdk-reference/use-meeting/events#onwebcamrequested)
- [onMicRequested()](/react/api/sdk-reference/use-meeting/events#onmicrequested)
