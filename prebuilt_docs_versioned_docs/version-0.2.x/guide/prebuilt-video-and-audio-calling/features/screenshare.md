---
title: Prebuilt Screen Share Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Screen Share features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Share Your Screen
pagination_label: Share Your Screen
keywords:
  - screen share in audio calling
  - screen share in video calling
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screenshare
---

# Share Your Screen - Prebuilt

Screen sharing allows any participant who wants to share either the complete screen, a specific window or, a browser tab during the meeting.

### How it works ?

- While `screenShareEnabled` value is set to `true`, you will show screen share button as display in below image.

- While `screenShareEnabled` value is set to `false`, the below screen share button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-screen-share.png)

### Screen Share Attributes

- `screenShareEnabled`: If it is true, then screen share button will be visible on top bar of the meeting. If it is false, then screen share button won't be available on top bar of the meeting.

```js title="index.html"
const config = {
  // ...
  screenShareEnabled: true,
  // ...
};
```
