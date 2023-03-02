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

This feature allows participant to broadcast room on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting room.

1. **Start LiveStream** - By using `startLivestream()` function, a participant can start broadcasting room on various platforms by provding url and stream keys as an argument.

### Parameters

- **outputs**

  - type: `Array`
  - required: `true`
  - It will the array of object containing the url and stream keys.

- **config**:
  - type: `Object`
    - **config**:
      - **layout**:
        - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
        - **priority**: _"SPEAKER"_ | _"PIN"_
        - **gridSize**: Number _\`max 4\`_
      - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - required: `false`
  - It will be config for the layout of the recording you can to use.

2. **Stop LiveStream** - By using `stopLivestream()` function, a participant can stop broadcasting on all platforms.

### Start And Stop Live Stream

```js
// Start Live Stream
room.startLivestream([
  {
    url: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "streamKey1",
  },
], config: {
  'layout': {
    'type': 'GRID',
    'priority': 'SPEAKER',
    'gridSize': 4,
  },
  'theme': "LIGHT",
});

// Stop Live Stream
room?.stopLivestream();
```

### Events

1. **livestreamStateChanged** - Whenever broadcasting of meeting started / stopped, `livestreamStateChanged` event will trigger.

```js
room.on(Events.liveStreamStateChanged, (String status) {

  //Status can have values:
  // LIVESTREAM_STARTING -- Live Stream is starting
  // LIVESTREAM_STARTED -- Live Stream has started
  // LIVESTREAM_STOPPING -- Live Stream is stopping
  // LIVESTREAM_STOPPED -- Live Stream has stopped

  toastMsg("Meeting live streaming status : $status");
});
```
