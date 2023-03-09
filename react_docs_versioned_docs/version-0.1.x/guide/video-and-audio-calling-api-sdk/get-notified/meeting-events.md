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

VideoSDK provides multiple types of events which can be listened to know the current state of the meeting.

Here are the events which specifically relate to the meeting.

### onMeetingJoined

- These event is triggered when the meeting is successfully joined.
- These event can be subscribed from the `useMeeting` hook.

### onMeetingLeft

- These event is triggered when the meeting is left.
- These event can be subscribed from the `useMeeting` hook.

### onSpeakerChanged

- These event is triggered when the active speaker in the meeting gets changed.
- These event can be subscribed from the `useMeeting` hook.

### onPresenterChanged

- These event is triggered when the presenter in the meeting gets changed.
- These event can be subscribed from the `useMeeting` hook.

### Example

Here is the usage of all the events mentioned in these page.

```js
function onMeetingJoined() {
  console.log("onMeetingJoined");
}

function onMeetingLeft() {
  console.log("onMeetingLeft");
}

function onSpeakerChanged(activeSpeakerId) {
  console.log("onSpeakerChanged", activeSpeakerId);
}

function onPresenterChanged(presenterId) {
  console.log("onPresenterChanged", presenterId);
}

const {
  meetingId
  ...
} = useMeeting({
  onMeetingJoined,
  onMeetingLeft,
  onSpeakerChanged,
  onPresenterChanged,
  ...
});
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onMeetingJoined()](/react/api/sdk-reference/use-meeting/methods#onmeetingjoined)
- [onMeetingLeft()](/react/api/sdk-reference/use-meeting/events#onmeetingleft)
- [onSpeakerChanged()](/react/api/sdk-reference/use-meeting/events#onspeakerchanged)
- [onPresenterChanged()](/react/api/sdk-reference/use-meeting/events#onpresenterchanged)
