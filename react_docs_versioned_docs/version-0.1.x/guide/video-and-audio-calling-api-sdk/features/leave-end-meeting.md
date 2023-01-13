---
title: Leave End Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Leave or End Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Leave or End Meeting
pagination_label: Leave or End Meeting
keywords:
  - Exit Meeting
  - Leave Meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting
---

# Leave or End Meeting

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

This guide will provide an overview of how to implement leave or end feature in VideoSDK meetings.

1. **Leave** - By using `leave()` function, only a participant will leave/exit the meeting, the rest of the meeting will continue with other participants.
2. **End** - By using `end()` function, meeting will end for each and every participant. So, use this function according to your use cases.

### Leave And End Meeting

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { leave, end } = useMeeting();

  const onPress = () => {
    // Leave Meeting
    leave();

    // Exit Meeting
    end();
  };

  return <>...</>;
};
```

### Events

**Events associated with `leave()`:**

- Local participant will receive a callback on[`onMeetingLeft`](../../../api/sdk-reference/use-meeting/events#onmeetingleft) of `useMeeting()` hook.
- All remote participants will receive a callback [`onParticipantLeft`](../../../api/sdk-reference/use-meeting/events#onparticipantleft) with Participant object.

**Event associated with `end()`:**

- All remote participants and local participant will receive a callback on [`onParticipantLeft`](../../../api/sdk-reference/use-meeting/events#onparticipantleft) with Participant object.

```js
function onParticipantLeft(participant) {
  console.log(" onParticipantLeft", participant);
}

function onMeetingLeft() {
  console.log("onMeetingLeft");
}


const {
  meetingId
  ...
} = useMeeting({
  onMeetingLeft,
  onParticipantLeft,
  ...
});
```
