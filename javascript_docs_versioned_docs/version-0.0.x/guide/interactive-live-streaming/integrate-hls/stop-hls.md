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

# Stop HLS - Javascript

Stopping HLS refers to the process of halting the ongoing HLS stream transmission, indicating that the stream is no longer accessible to viewers.

## Stopping HLS

The `stopHls()` method, accesible from the `meeting` object, is used to stop the interactive livestream of a meeting.

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

- **hls-state-changed** - The `hls-state-changed` event is triggered whenever the state of meeting HLS changes.

- You will get `HLS_STOPPING` and `HLS_STOPPED` status on calling `stopHls()`.

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
    // on hlsStateChanged started you will receive downstreamUrl
    const { downstreamUrl } = data;
    console.log("Meeting Hls is started");
    //highlight-start
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
    //highlight-end
  } else {
    //
  }
});
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [stopHls()](/javascript/api/sdk-reference/meeting-class/methods#stophls)
- [hls-state-changed](/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)
