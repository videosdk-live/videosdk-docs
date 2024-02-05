---
title: HLS Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: HLS Events
pagination_label: HLS Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: hls-events
---

# HLS Events - Javascript

VideoSDK provides the `hls-state-changed` event, which informs you about the current state of HLS for the meeting.

### hls-state-changed

- This event is triggered when the HLS status of the meeting changes.
- It can be subscribed to using the `meeting` object.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const Constants = VideoSDK.Constants;

meeting.on("hls-state-changed", (data) => {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    // when hls is started you will receive downstreamUrl
    const { downstreamUrl } = data;

    console.log("Meeting Hls is started");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [hls-state-changed](/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)
