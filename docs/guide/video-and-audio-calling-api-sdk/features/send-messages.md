---
title: Send Messages
hide_title: true
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

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/pubsub)
- [React](/react/guide/video-and-audio-calling-api-sdk/features/pubsub)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/features/pubsub)
- [Android](/android/guide/video-and-audio-calling-api-sdk/features/pubsub)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/features/pubsub)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/features/pubsub)

:::

# Send Messages

Whenever any participant wants to notify other participants via chat messages or Raise hand, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement chat and raise hand in a meeting.

1. **Chat Message** - If a participant wants to inform or notify something in current meeting, they can use `sendChatMessage()` function by providing `{message:"Anything they wish to send"}` object argument.

2. **Raised Hand** - If a participant has some doubts during the meeting and wants to raise hand, they can use `sendChatMessage()` function by providing `{type:"RAISE_HAND"}` object argument.

:::note
`sendChatMessage()` function only takes string as an argument.
:::

### Send Message And Raised Hand

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Sending Message
  let data = {
    message: "Hello World",
  };

  meeting?.sendChatMessage(JSON.stringify(data));

  // Raising Hand
  meeting?.sendChatMessage(JSON.stringify({ type: "RAISE_HAND", data: {} }));
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Sending Message
  let data = {
    message: "Hello World",
  };
  meeting?.sendChatMessage(JSON.stringify(data));

  // Raising Hand
  meeting?.sendChatMessage(JSON.stringify({ type: "RAISE_HAND", data: {} }));
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Sending Message
  let data = {
    message: "Hello World",
  };
  meeting?.sendChatMessage(JSON.stringify(data));

  // Raising Hand
  meeting?.sendChatMessage(JSON.stringify({ type: "RAISE_HAND", data: {} }));
};
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>

### Events

1. **chat-message** - Whenever any participant sending message/raise hand in the meeting, then `chat-message` event will trigger and return senderId, senderName, timeStamp, text and type `(RAISE_HAND/CHAT)`.

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
meeting.on("chat-message", (messageData) => {
  const { senderId, senderName, text } = messageData;

  const { type, data } = JSON.parse(text);

  // type can be "CHAT" or "RAISE_HAND"
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onChatMessage: (messageData) => {
    const { senderId, senderName, text } = messageData;

    const { type, data } = JSON.parse(text);

    // type can be "CHAT" or "RAISE_HAND"
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onChatMessage: (messageData) => {
    const { senderId, senderName, text } = messageData;

    const { type, data } = JSON.parse(text);

    // type can be "CHAT" or "RAISE_HAND"
  },
});
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>
