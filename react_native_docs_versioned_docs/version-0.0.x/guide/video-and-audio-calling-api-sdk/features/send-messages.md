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

# Send Messages

Whenever any participant wants to notify other participants via chat messages or Raise hand, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement chat and raise hand in a meeting.

1. **Chat Message** - If a participant wants to inform or notify something in current meeting, they can use `publish()` function of the `usePubSub` hook and using the topic `CHAT`.

2. **Raised Hand** - If a participant has some doubts during the meeting and wants to raise hand, they can use `publish()` function of the `usePubSub` hook and using the topic `RAISED_HAND`.

:::note
`publish()` function only takes string as an argument.
:::

### Send Message

```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  const onPress = () => {
    // Sending Message
    const message = "Hello Everyone!";
    publish(message, { persist: true });
  };

  return <>...</>;
};
```

### Raise Hand

```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("RAISE_HAND");

  const onPress = () => {
    // RAISE HAND
    const message = "";
    publish(message, { persist: true });
  };
  return <>...</>;
};
```

### Events

1. **onMessageReceived** - `onMessageReceived` event will be triggered when a new message is published for the subscribed topic with the message object.

:::note
Check a detailed description of PubSub [here](./pubsub.md).
:::
