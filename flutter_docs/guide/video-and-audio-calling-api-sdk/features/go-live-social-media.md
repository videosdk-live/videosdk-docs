---
title: RTMP Live Social Media Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: RTMP Live Social Media features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Go Live On Social Media
pagination_label: Go Live On Social Media
keywords:
  - Facebook Live
  - Youtube Live
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-social-media
---

# Go Live On Social Media

This feature allows participant to broadcast meeting on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

1. **Start LiveStream** - By using `startLivestream()` function, a participant can start broadcasting meeting on various platforms by provding url and stream keys as an argument.
2. **Stop LiveStream** - By using `stopLivestream()` function, a participant can stop broadcasting on all platforms.

### Start And Stop Live Stream

```js
// Start Live Stream
meeting.startLivestream([
  {
    url: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "streamKey1",
  },
]);

// Stop Live Stream
meeting?.stopLivestream();
```

### Events

1. **livestreamStarted** - Whenever broadcasting of meeting started, `livestreamStarted` event will trigger.

2. **livestreamStopped** - Whenever broadcasting of meeting stopped, `livestreamStopped` event will trigger.

```js
meeting.on(Events.livestreamStarted, () {
  print("meeting livestream started");
});
//
meeting.on(Events.livestreamStopped, () {
  print("meeting livestream stopped");
});

```
