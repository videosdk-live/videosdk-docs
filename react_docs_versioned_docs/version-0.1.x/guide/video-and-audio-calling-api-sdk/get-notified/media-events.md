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

# Media Events - React

VideoSDK offers various events that can be monitored to obtain information about the media status of participants in the meeting.

Here are the events specifically related to the stream:

### onStreamEnabled()

- This event is triggered whenever a participant's video, audio or screen share stream is enabled.
- It can be subscribed to using the `useParticipant` hook.

### onStreamDisabled()

- This event is triggered whenever a participant's video, audio or screen share stream is disabled.
- It can be subscribed to using the `useParticipant` hook.

### onMediaStatusChanged()

- This event is triggered whenever a participant's video or audio stream is disabled or enabled.
- It can be subscribed to using the `useParticipant` hook.

### Example

Here is an example demonstrating the usage of all the events mentioned on this page.

```js
function onStreamEnabled(stream) {
  console.log(" onStreamEnabled", stream);
}

function onStreamDisabled(stream) {
  console.log(" onStreamDisabled", stream);
}

function onMediaStatusChanged(data) {
  //kind: It repesents the type of media
  //newStatus: It repesents the status of the media
  const { kind, newStatus} = data;
}

const {
  dislplayName
  ...
} = useParticipant(participantId, {
  onStreamEnabled,
  onStreamDisabled,
  onMediaStatusChanged,
  ...
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [onStreamEnabled()](/react/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onMediaStatusChanged()](/react/api/sdk-reference/use-participant/events#onmediastatuschanged)
