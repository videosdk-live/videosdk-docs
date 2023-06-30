---
title: Chat messages with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Chat using PubSub
pagination_label: Chat using PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: chat-using-pubsub
---

# Chat using PubSub

For the communication or any kind of messaging in between the participants, VideoSDK provides `pubSub` property in meeting object which use Publish-Subscribe mechanism and can be used to develope wide varitey of functionalities. For example, participants could use it to send chat messages to each other, share files or other media, or even trigger actions like muting or unmuting audio or video.

Now we will see, how we can use PubSub to implement Chat functionality. If you are not familiar with the PubSub mechanism and `pubSub`, you can [follow this guide](/javascript/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Implementing Chat

1. First step in creating a group chat is choosing the topic which all the participants will publish and subscribe to send and receive the messages. We will be using `CHAT` as the topic for this one. So let us lets create a message input and send button to publish the messages using the `pubSub` from the `meeting` object.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const msgSendBtn = document.getElementById("msgSendBtn");

//publish chat meesage on button click
msgSendBtn.addEventListener("click", async () => {
  const message = document.getElementById("txtChat").value;

  document.getElementById("txtChat").value = "";

  meeting.pubSub
    .publish("CHAT", message, { persist: true })
    .then((res) => console.log(`response of publish : ${res}`))
    .catch((err) => console.log(`error of publish : ${err}`));
});
```

2. Final step in the group chat would be to display the messages others send. For this will use the messages and display all the messages by subscribing to the topic CHAT.

```js
//subscribe to the 'CHAT' on meeting join
meeting.on("meeting-joined", () => {
  meeting.pubSub.subscribe("CHAT", (data) => {
    let { message, senderId, senderName, timestamp } = data;

    const chatBox = document.getElementById("chatArea");

    const chatTemplate = `
        <div style="margin-bottom: 10px; ${
          meeting.localParticipant.id == senderId && "text-align : right"
        }">
          <span style="font-size:12px;">${senderName}</span>
          <div style="margin-top:5px">
            <span style="background:${
              meeting.localParticipant.id == senderId ? "grey" : "crimson"
            };color:white;padding:5px;border-radius:8px">${message}<span>
          </div>
        </div>
        `;

    chatBox.insertAdjacentHTML("beforeend", chatTemplate);
  });
});
```

### Display Latest Message Notificaiton

You may want to show the notification to the user when new message arrives. So lets continue our example and add alert for the new images.

```js
meeting.pubSub.subscribe("CHAT", (data) => {
  let { message, senderId, senderName, timestamp } = data;

  window.alert(senderName + " says " + message);

  // ...
});
```

### Downloading Chat Messages

All the messages from the PubSub which where published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [pubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
