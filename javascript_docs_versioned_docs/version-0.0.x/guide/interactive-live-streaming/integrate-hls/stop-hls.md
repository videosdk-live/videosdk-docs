---
title: Stop HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Stop HLS
pagination_label: Stop HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: stop-hls
---

# Stop HLS

This could refer to stopping the transmission of an ongoing HLS stream, which would mean the stream is no longer available to viewers.

## Stopping HLS

`stopHls()` can be used to stop a interactive livestream of the meeting which can be accessed from the `meeting` object.

### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const stopHlsBtn = document.getElementById("stopHlsBtn");
stopHlsBtn.addEventListener("click", () => {
  // Stop HLS
  meeting?.stopHls();
});
```

## Event associated with HLS

- **hls-state-changed** - Whenever meeting HLS state changes, then `hls-state-changed` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `HLS_STARTED`

```js
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
    //highlight-start
    // on hlsStateChanged started you will receive downstreamUrl
    const { downstreamUrl } = data;
    //highlight-end
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

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [stopHls()](/javascript/api/sdk-reference/meeting-class/methods#stophls)
- [hls-state-changed](/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)
