---
title: Raise Hand with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Raise Hand
pagination_label: Raise Hand
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: raise-hand
---

# Raise Hand

Let us see, how we can use PubSub to implement Raise Hand functionality. If you are not familiary with the PubSub mechanism and `pubSub` property of meeting object, you can [follow this guide](/javascript/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Implementing Raise Hand

1. We will be creating a button when clicked, we will publish a message it the topic `RAISE_HAND`

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const raiseHandBtn = document.getElementById("raiseHandBtn");
raiseHandBtn.addEventListener("click", () => {
  const topic = "RAISE_HAND";

  meeting?.pubSub.publish(topic, "Raise Hand");
});
```

2. Now let us show an alert to all the speakers showing who raised the hand.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Callback function
function raiseHand(data) {
  let { message, senderId, senderName, timestamp } = data;

  if (meeting.localParticipant.mode == "CONFERENCE") {
    window.alert(`${senderName} raise hand`);
  }
}

meeting?.pubSub?.subscribe("RAISE_HAND", raiseHand);
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [pubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
