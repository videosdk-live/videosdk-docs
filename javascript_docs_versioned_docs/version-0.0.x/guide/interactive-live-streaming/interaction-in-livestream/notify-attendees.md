---
title: Notify Attendees with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Notify Attendees in Realtime
pagination_label: Notify Attendees in Realtime
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: notify-attendees
---

# Notify Attendees in Realtime - Javascript

This guide explains how PubSub can be used to implement the functionality of broadcasting a message to all the viewers at once. If you are not familiar with the PubSub mechanism and `pubSub`, you can [follow this guide](./pubsub).

### Notifying Attendees

1. To implement this functionality, begin by creating a "Notify Attendees" button along with a text input to capture the message. When a message is entered into the input and the button is clicked, publish a message with the topic `NOTIFY_ATTENDEES`.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const notifyAttendeesBtn = document.getElementById("notifyAttendeesBtn");
notifyAttendeesBtn.addEventListener("click", async () => {
  const message = document.getElementById("notifyAttendeesTxt").value;

  const topic = "NOTIFY_ATTENDEES";
  meeting?.pubSub.publish(topic, message, { persist: true });
});
```

2. Next, alert all the speakers, displaying the message posted by the speaker.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Callback function
function notifyAttendees(data) {
  let { message, senderId, senderName, timestamp } = data;

  if (meeting.localParticipant.mode == "VIEWER") {
    window.alert(message);
  }
}

meeting?.pubSub?.subscribe("RAISE_HAND", notifyAttendees);
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [pubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
