---
title: Join and Leave Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This tutorial describes the process of joining and leave video and audio call using javascript.
sidebar_label: Join and Leave Meeting
pagination_label: Join and Leave Meeting
keywords:
  - Join Video Call
  - Leave Video Call
  - Init Video Call
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-and-leave-meeting
---

# Join and Leave Meeting
Video SDK Web uses [`Meeting`](/javascript/api/sdk-reference/meeting-class/introduction) Object to join and leave meeting. 

## Create Meeting object
Call `VideoSDK.initMeeting` to create meeting object. Specify couple of parameters such as following
- **meetingId [REQUIRED]:** Unique id of room
- **name [REQUIRED]**: Name of user
- **participantId [OPTIONAL]:** Unique id of user

```js
const meeting = VideoSDK.initMeeting({
  meetingId: "abc-1234-xyz",
  name: "Franz Kafka",
  participantId: "49151"
});
```

## Join the Meeting
After creating `Meeting` object, call [Meeting.join](/javascript/api/sdk-reference/meeting-class/methods#join) to join the meeting.

```js
meeting.join();

// will trigger for local participant
meeting.on("meeting-joined", () => {
    // operation need to call directly after local participant
    // joins meeting such as auto recording, start live streaming /// etc.
});

// will trigger for remote participant
meeting.on("participant-joined", (participant) => {
    // to display media of remote particiapnt
});
```
**API Reference**
- [join](/javascript/api/sdk-reference/meeting-class/methods#join)
- [on("meeting-joined")](/javascript/api/sdk-reference/meeting-class/events#meeting-joined)
- [on("participant-joined")](/javascript/api/sdk-reference/meeting-class/events#participant-joined)

## Leave the Meeting
Call [`Meeting.leave`](/javascript/api/sdk-reference/meeting-class/methods#leave) to leave the channel. You can call this method any time. After calling `leave`, the SDK destroys objects related to the current meeting. 


```js
meeting.leave();

// will trigger for local participant
meeting.on("meeting-left", () => {
    // operation need to call directly after local participant
    // leaves meeting
});

// will trigger for remote participant
meeting.on("participant-left", (participant) => {
    // to remove media of remote particiapnt
});
```
**API Reference**
- [leave](/javascript/api/sdk-reference/meeting-class/methods#leave)
- [on("meeting-left")](/javascript/api/sdk-reference/meeting-class/events#meeting-left)
- [on("participant-left")](/javascript/api/sdk-reference/meeting-class/events#participant-left)


