---
title: Media Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Media Events
pagination_label: Media Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: media-events
---

# Media Events

VideoSDK provides multiple types of events which can be listened to know the about the participant's media status in the meeting.

Here are the events which specifically relate to the stream.

### stream-enabled

- This event is triggered whenever a participant's video, audio or screen share stream is enabled.
- This event can be subscribed from the `Participant` object.

### stream-disabled

- This event is triggered whenever a participant's video, audio or screen share stream is disabled.
- This event can be subscribed from the `Participant` object.

### media-status-changed

- This event will be triggered whenever a participant's video or audio is disabled or enabled.
- This event can be subscribed from the `Participant` object.

### Example

Here is the usage of all the events mentioned in this page.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  //
});

participant.on("stream-disabled", (stream) => {
  //
});

participant.on("media-status-changed", (data) => {
  const { kind, newStatus } = data;
  //
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [stream-enabled](/javascript/api/sdk-reference/participant-class/events#stream-enabled)
- [stream-disabled](/javascript/api/sdk-reference/participant-class/events#stream-disabled)
- [media-status-changed](/javascript/api/sdk-reference/participant-class/events#media-status-changed)
