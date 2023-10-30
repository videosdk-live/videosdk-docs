---
title: Send Messages
hide_title: false
hide_table_of_contents: false
description: Send Messages features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Send Messages
pagination_label: Send Messages
keywords:
  - Send Message
  - Raise Hand
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: send-messages
---

# Send Messages - Javascript

Whenever any participant wants to notify other participants via chat messages or Raise hand, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement chat in a meeting using the PubSub mechanisum.

1. **Chat Message** - If a participant wants to inform or notify something in current meeting, they can use `meeting.pubSub.publish()` function by providing `{topic: 'CHAT', message:"Anything they wish to send" , {persist:true}}` object argument.

2. **Raised Hand** - If a participant has some doubts during the meeting and wants to raise hand, they can use `sendChatMessage()` function by providing `{topic: 'RAISED_HAND', message:"" , {persist:true}}` object argument.

:::note
`message` property can only take string as an argument.
:::

### Send Message And Raised Hand

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  // Sending Message
  meeting?.pubSub?.publish(topic: "CHAT", message: "Hello Everyone!", { persist: true })

  // Raising Hand
  meeting?.pubSub?.publish(topic: "RAISED_HAND", message: "", { persist: false })
};
```

### Receiving the message

Whenever any participant sending message/raise hand in the meeting, then the message will be received to everyone how has subscribed to the `topic` which will contain senderId, senderName, timeStamp, message.

```js
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

meeting.pubSub.subscribe("RAISED_HAND", (data) => {
  let { message, senderId, senderName, timestamp } = data;
  console.log(senderName, " raised Hand");
});
```

:::note
Check a detailed description of PubSub [here](./pubsub.md).
:::
