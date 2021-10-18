---
title: Prebuilt Leave Meeting Audio & Video Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Leave Meeting features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Leave Meeting
pagination_label: Leave Meeting
keywords:
  - exit audio calling
  - exit video calling
  - exit real-time communication
  - leave audio calling
  - leave video calling
  - leave real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-meeting
---

# Leave Meeting

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

### How it works. ?

- While `participantCanLeave` value set to `true`, the below screen will display with the end meeting button, by pressing that you will redirect to a URL specified in `redirectOnLeave`.

![Go live with VideoSDK](/img/prebuilt/prebuilt-leave.png)

### Leave Meeting Attributes

- `participantCanLeave`: If it is true, then end meeting button will be visible on top right bar of the meeting. If it is false, then end meeting button won't be available on top right bar of the meeting.
- `redirectOnLeave`: It's URL where you want to redirect participant after leave the meeting,**OPTIONAL**.

```js title="index.html"
const config = {
  // ...
  participantCanLeave: true,
  redirectOnLeave: "https://www.videosdk.live/",
  // ...
};
```
