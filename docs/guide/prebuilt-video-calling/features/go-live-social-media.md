---
title: Prebuilt Go RTMP Live Social Media Audio & Video Call | Video SDK Embed Docs
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

# Go Live Social Media

Livestreaming allows participant to broadcast meeting on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

### Live streaming attributes

- `autoStart`: If it is true then live streaming will start automatically when the meeting starts, default value is false (You can't start live streaming during the meeting).
- `outputs`: It's an array of object that contains RTMP url and stream key from the provided platforms such as Youtube or Facebook.

```js title="index.html"
const config = {
  // ...
  livestream: {
    autoStart: true,
    outputs: [
      {
        url: "rtmp://x.rtmp.youtube.com/live2",
        streamKey: "<STREAM KEY FROM YOUTUBE>",
      },
    ],
  },
  // ...
};
```
