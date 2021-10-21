---
title: Redirect on Leave
hide_title: false
hide_table_of_contents: false
description: This guide will explain leaving process of meeting.
sidebar_label: Redirect on Leave
pagination_label: Redirect on Leave
keywords:
  - exit audio calling
  - exit video calling
  - exit real-time communication
  - leave audio calling
  - leave video calling
  - leave real-time communication
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: redirect-on-leave
---

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

### Leave Meeting Attributes

- **participantCanLeave**: If it is true, then end meeting button will be visible on top right bar of the meeting. If it is false, then end meeting button won't be available on top right bar of the meeting.
- **redirectOnLeave**: It's URL where you want to redirect participant after leave the meeting,**OPTIONAL**.

```js title="index.html"
const config = {
  // ...
  participantCanLeave: true,
  redirectOnLeave: "https://www.videosdk.live/",
  // ...
};
```
