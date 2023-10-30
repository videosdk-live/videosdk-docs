---
title: Leave or End Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Leave or End Meeting
pagination_label: Leave or End Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting
---

# Leave or End Meeting - Javascript

Participant can choose to leave the meeting without removing all the other participants. This is typically done by `Leave Meeting`.

Alternatively, if the participant is the host or the last person remaining in the session, they can choose `End Meeting` by removing all other participants, which will end the session for everyone.

### `leave()`

To leave the meeting without removing all the participant you need to call `leave()` which is the part of the `meeting` object.

### `end()`

To leave the meeting by removing all the participant you need to call `end()` which is the part of the `meeting` object.

:::note
This methods can be called after the meeting is joined successfully.
:::

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const leaveBtn = document.getElementById("leaveBtn");

leaveBtn.addEventListener("click", () => {
  // Leave Meeting
  meeting?.leave();

  // Exit Meeting
  meeting?.end();
});
```

:::tip
You should call the `leave()` method on the unmount of your main meeting component so that meeting is left once the view is unmounted.
:::

### Events associated with Leave

Following callbacks are received when a participant leaves the meeting.

- [Local Participant](../concept-and-architecture#2-participant) will receive a [`meeting-left`](/javascript/api/sdk-reference/meeting-class/events#meeting-left) event.
- All [Remote participants](../concept-and-architecture#2-participant) will receive a [`participant-left`](/javascript/api/sdk-reference/meeting-class/events#participant-left) event.

### Events associated with End

Following events are received when a participant ends the meeting.

- All [remote participants](../concept-and-architecture#2-participant) and [local participant](../concept-and-architecture#2-participant) will receive a callback on [`meeting-left`](/javascript/api/sdk-reference/meeting-class/events#meeting-left) event.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("meeting-left", () => {
  //Meeting Left
});

meeting.on("participant-left", (participant) => {
  //Participant Left the meeting
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [leave()](/javascript/api/sdk-reference/meeting-class/methods#leave)
- [end()](/javascript/api/sdk-reference/meeting-class/methods#leave#end)
- [meeting-left event](/javascript/api/sdk-reference/meeting-class/events#meeting-left)
- [participant-left event](/javascript/api/sdk-reference/meeting-class/events#participant-left)
