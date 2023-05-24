---
title: Join Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Join Meeting
pagination_label: Join Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-meeting
---

# Join Meeting

### Overview

Before joining the meeting, it has to be initialized. If you have not initialized a meeting yet, you can [follow the guide here.](./initialise-meeting)

### `join()`

- To join the meeting you can call the `join()` on the created `meeting` object.
- This method can be called after the meeting is initialized from the `initMeeting` method.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", () => {
  // Joining Meeting
  meeting?.join();
});
```

### Events associated with Join

Following callbacks are received when a participant is successfully joined.

- [Local Participant](../concept-and-architecture#2-participant) will receive a [`meeting-joined`](/javascript/api/sdk-reference/meeting-class/events#meeting-joined) event, when successfully joined.
- [Remote Participant](../concept-and-architecture#2-participant) will receive a [`participant-joined`](/javascript/api/sdk-reference/meeting-class/events#participant-joined) event with the newly joined `Participant` object.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

meeting.on("meeting-joined", () => {
  console.log("Meeting Joined Successfully");
});

meeting.on("participant-joined", (participant) => {
  console.log("New Participant Joined: ", participant.id);
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [join()](/javascript/api/sdk-reference/meeting-class/methods#join)
- [meeting-joined event](/javascript/api/sdk-reference/meeting-class/events#meeting-joined)
- [participant-joined event](/javascript/api/sdk-reference/meeting-class/events#participant-joined)
