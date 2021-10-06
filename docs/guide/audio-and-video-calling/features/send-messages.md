---
title: Send Messages
hide_title: false
hide_table_of_contents: false
description: This guide will explain send messages in meeting.
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

Whenever any participant wants to notify other participants via chat messages or Raise hand, they can simply do it with videoSDK Meeting.

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
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
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
