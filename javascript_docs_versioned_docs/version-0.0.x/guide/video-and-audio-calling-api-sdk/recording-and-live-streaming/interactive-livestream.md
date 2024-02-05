---
title: Interactive Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Interactive Livestream (HLS)
pagination_label: Interactive Livestream (HLS)
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: interactive-livestream
---

# Interactive Livestream (HLS) - Javascript

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can participate in various activities, such as live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

<center>

![VideoSDK-HLS](/img/VideoSDK-HLS.png)

</center>

VideoSDK enables you to configure the interactive livestream layout in various ways, either by setting different prebuilt layouts in the configuration or by providing your own custom template for livestreaming according to your layout choice.

This guide provides an overview of how to implement starting and stopping Interactive Live Streaming (HLS).

:::important

To initiate automatic Interactive live streaming (HLS) at the beginning of a `session`, simply provide the `autoStartConfig` feature `hls` during `room` creation. For more information on configuring the `autoStartConfig`, please refer to the provided documentation **[<u>here</u>](/api-reference/realtime-communication/create-room#autoStartConfig)**.

:::

### `startHls()`

The `startHls()` method, accesible from the `meeting` object, is used to initiate interactive livestream of a meeting. This method accepts the following parameter:

- `config (optional)`: This parameter defines how the interactive livestream layout should look like.
 
  ```js
  const config = {
    // highlight-next-line
    // Layout Configuration
    layout: {
      type: "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
      priority: "SPEAKER", // "PIN", Default : "SPEAKER"
      gridSize: 4, // MAX : 25
    },

    // highlight-next-line
    // Theme of livestream
    theme: "DARK", //  "LIGHT" | "DEFAULT"

    // highlight-next-line
    // `mode` is used to either interactive livestream video & audio both or only audio.
    mode: "video-and-audio", // "audio", Default : "video-and-audio"

    // highlight-next-line
    // Quality of livestream and is only applicable to `video-and-audio` type mode.
    quality: "high", // "low" | "med",  Default : "med"

    //highlight-start
    // This mode refers to orientation of recording.
    // landscape : Livestream the meeting in horizontally
    // portrait : Livestream the meeting in vertically (Best for mobile view)
    //highlight-end
    orientation: "landscape", // "portrait",  Default : "landscape"
  };

  startHls(config);
  ```

### `stopHls()`

- The `stopHls()` method, accesible from the `meeting` object, is used to stop the interactive livestream of a meeting.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const startHlsBtn = document.getElementById("startHlsBtn");
startHlsBtn.addEventListener("click", () => {
  // Start HLS
  meeting?.startHls({
    layout: {
      type: "GRID",
      priority: "SPEAKER",
      gridSize: 4,
    },
    theme: "DARK",
    mode: "video-and-audio",
    quality: "high",
    orientation: "landscape",
  });
});

const stopHlsBtn = document.getElementById("stopHlsBtn");
stopHlsBtn.addEventListener("click", () => {
  // Stop HLS
  meeting?.stopHls();
});
```

### Event associated with HLS

- **hls-state-changed** - The `hls-state-changed` event is triggered whenever the state of meeting HLS changes.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `Constants.hlsEvents.HLS_STARTED`

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

### Custom Template

With VideoSDK, you have the option to employ your own custom-designed layout template for meeting recordings. To use a custom template, [follow this guide](/javascript/guide/interactive-live-streaming/custom-template) to create and set up the template. Once the template is configured, you can initiate recording using the [REST API](/api-reference/realtime-communication/start-livestream), specifying the `templateURL` parameter.

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls()](/javascript/api/sdk-reference/meeting-class/methods#starthls)
- [stopHls()](/javascript/api/sdk-reference/meeting-class/methods#stophls)
- [hls-state-changed](/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)
- [autoStartConfig](/api-reference/realtime-communication/create-room#autoStartConfig)
