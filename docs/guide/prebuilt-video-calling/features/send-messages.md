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

This feature allows participants who wants to notify other participants via chat messages or Raise hand in the meeting.

### Chat

If a participant wants to inform or notify something in current meeting,
they can use this feature to communicate with other participants in the meeting.

- `chatEnabled`: If it is true, then chat button will be visible on top bar of the meeting. If it is false, then chat button won't be available on top bar of the meeting.

  ![Go live with VideoSDK](/img/prebuilt/prebuilt-chat.png)

### Raise hand

It allows participant to raise their hand virtually to indicate that participant has some doubts or comment during the meeting.

- `raiseHandEnabled`: If it is true, then raise hand button will be visible on top bar of the meeting. If it is false, then raise hand button won't be available on top bar of the meeting

  ![Go live with VideoSDK](/img/prebuilt/prebuilt-raise-hand.png)

```js title="index.html"
const config = {
  // ...
  chatEnabled: true,
  raiseHandEnabled: true,
  // ...
};
```
