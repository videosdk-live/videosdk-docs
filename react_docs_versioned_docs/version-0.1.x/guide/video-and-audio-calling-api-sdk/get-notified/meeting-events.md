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
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-events
---

# Meeting Events

VideoSDK provides multiple types of events which can be listened to know teh current state of the meeting.

Here are teh events which specifically relate to the meeting.

### onMeetingJoined

- These event is triggered when the meeting is successfully joined.
- These event can be subscribed from the `useMeeting` hook.

### onMeetingLeft

- These event is triggered when the meeting is left.
- These event can be subscribed from the `useMeeting` hook.

### Usage

Here is the usage of all the events mentioned in these page.

```js
function onMeetingJoined() {
  console.log("onMeetingJoined");
}

function onMeetingLeft() {
  console.log("onMeetingLeft");
}

const {
  meetingId
  ...
} = useMeeting({
  onMeetingJoined,
  onMeetingLeft,
  ...
});
```

### API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [onMeetingJoined()](/react/api/sdk-reference/use-meeting/methods#onmeetingjoined)
- [onMeetingLeft()](/react/api/sdk-reference/use-meeting/events#onmeetingleft)
