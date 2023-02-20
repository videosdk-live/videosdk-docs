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
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-events
---

# Participant Events

VideoSDK provides multiple types of events which can be listened to know the about the participants in the meeting.

Here are the events which specifically relate to the meeting.

### onParticipantJoined

- These event is triggered when the someone joines meeting with the `Participant` object as parameter.
- These event can be subscribed from the `useMeeting` hook.

### onParticipantLeft

- These event is triggered when the someone leaves the meeting.
- These event can be subscribed from the `useMeeting` hook.

### onWebcamRequested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.
- These event can be subscribed from the `useMeeting` hook.

### onMicRequested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.
- These event can be subscribed from the `useMeeting` hook.

### Usage

Here is the usage of all the events mentioned in these page.

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

The API references for all the methods and events utilised in these guide are provided below.

- [onParticipantJoined()](/react/api/sdk-reference/use-meeting/events#onparticipantjoined)
- [onParticipantLeft()](/react/api/sdk-reference/use-meeting/events#onparticipantleft)
- [onWebcamRequested()](/react/api/sdk-reference/use-meeting/events#onwebcamrequested)
- [onMicRequested()](/react/api/sdk-reference/use-meeting/events#onmicrequested)
