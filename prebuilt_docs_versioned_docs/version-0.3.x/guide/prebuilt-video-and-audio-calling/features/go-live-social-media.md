---
title: Prebuilt Go RTMP Live Social Media Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Go Live Social Media features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Go Live On Social Media
pagination_label: Go Live On Social Media
keywords:
  - Facebook Live
  - Youtube Live
  - audio calling
  - video calling
  - real-time communication
  - live on social media
  - video sdk embed
  - video sdk prebuilt
  - RTMP live social media
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-social-media
---

# Go Live On Social Media

Livestreaming allows participant to broadcast meeting on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

![Go-Live](/img/prebuilt/go-live.png)

### Live streaming flow

1. Click on `Add Live Streams`.
2. Add your streaming platforms there
3. Now one can live their streams on different platforms by hitting `Go Live` button

### Live streaming attributes

- `toggleLiveStream` : When set to true it will enable you to add your streaming platform details when you click on `Add Live Streams` button.
- `liveStream.enabled` : When set to true , one can go live otherwise one has no permission to go live even if live streaming platforms has been added.
- `liveStream.autoStart`: If it is true then live streaming will start automatically when the meeting starts, default value is false (You can't start live streaming during the meeting).

:::note

keep **liveStream.enabled** and **toggleLiveStream** **true** in order to see `Add Live Stream` button

:::

```js title="index.html"
const config = {
  // ...

  permissions: {
    //other permissions
    toggleLiveStream: true,
  },
  livestream: {
    autoStart: true,
    enabled: true,
  },
  // ...
};
```
