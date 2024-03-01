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

# Chat using PubSub - Javascript

For communication or any kind of messaging between participants, VideoSDK provides the `pubSub` property, which utilizes the Publish-Subscribe mechanism. It can be employed to develop a wide variety of functionalities. For example, participants could use it to send chat messages to each other, share files or other media, or even trigger actions like muting or unmuting audio or video.

This guide focuses on using PubSub to implement Chat functionality. If you are not familiar with the PubSub mechanism and `pubSub`, you can [follow this guide](/javascript/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Implementing Chat

1. The initial step in setting up a group chat involves selecting a topic to which all participants will publish and subscribe, facilitating the exchange of messages. In the following example, `CHAT` is used as the topic. 
Next step is to create a message input and a send button to publish the messages using the `pubSub` method from the `meeting` object.

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

2. The final step in the group chat is to display the messages sent by others. For this use the `messages` array and display all the messages.


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

To show the notification to the user when a new message arrives, following code snippet has to be followed.

```js
meeting.pubSub.subscribe("CHAT", (data) => {
  let { message, senderId, senderName, timestamp } = data;

  window.alert(senderName + " says " + message);

  // ...
});
```

### Downloading Chat Messages

All the messages from PubSub published with `persist : true` can be downloaded as an `.csv` file. This file will be accessible in the VideoSDK dashboard and through the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [pubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
