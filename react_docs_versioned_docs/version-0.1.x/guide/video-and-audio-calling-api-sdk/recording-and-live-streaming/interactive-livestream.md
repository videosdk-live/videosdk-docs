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

# Interactive Livestream (HLS) - React

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can participate in various activities, such as live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

<center>

![VideoSDK-HLS](/img/VideoSDK-HLS.png)

</center>

VideoSDK enables you to configure the interactive livestream layout in various ways, either by setting different prebuilt layouts in the configuration or by providing your own custom template for livestreaming according to your layout choice.

This guide provides an overview of how to implement starting and stopping Interactive Live Streaming (HLS).

:::important
To initiate automatic Interactive live streaming (HLS) at the beginning of a `session`, simply provide the `autoStartConfig` feature, `hls` during `room` creation. For more information on configuring the `autoStartConfig`, please refer to the provided documentation **[<u>here</u>](/api-reference/realtime-communication/create-room#autoStartConfig)**.

:::

### `startHls()`

The `startHls()` method, accesible from the `useMeeting` hook, is used to initiate interactive livestream of a meeting. This method accepts the following parameter:

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

- The `stopHls()` method, accesible from the `useMeeting` hook, is used to stop the interactive livestream of a meeting.


#### Example

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { startHls, stopHls } = useMeeting();

  const handleStartHls = () => {
    // Start Hls
    startHls({
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
  };

  const handleStopHls = () => {
    // Stop Hls
    stopHls();
  };

  return (
    <>
      <button onClick={handleStartHls}>Start Hls</button>
      <button onClick={handleStopHls}>Stop Hls</button>
    </>
  );
};
```

:::tip
If you want to learn more about the Interactive Livestream and how to implement it on your own platform, you can checkout this [guide](/react/guide/interactive-live-streaming/integrate-hls/overview).
:::

### Event associated with HLS

- **onHlsStateChanged** - The `onHlsStateChanged()` event is triggered whenever the state of meeting HLS changes.

- You can get the `downstreamUrl` of the HLS to play on the Viewer side when the state changes to `Constants.hlsEvents.HLS_STARTED`.

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

function onHlsStateChanged(data) {
   const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    console.log("Meeting Hls is started");
  } else if (status === Constants.hlsEvents.HLS_PLAYABLE) {
    //highlight-start
    // on hlsStateChanged you will receive downstreamUrl
    const { downstreamUrl } = data;
    //highlight-end
    console.log("Meeting Hls is now playable");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
 }

const {
  meetingId
  ...
} = useMeeting({
  onHlsStateChanged,
  ...
});

```

### Custom Template

With VideoSDK, you have the option to employ your own custom-designed layout template for meeting recordings. To use a custom template, [follow this guide](/react/guide/interactive-live-streaming/custom-template) to create and set up the template. Once the template is configured, you can initiate recording using the [REST API](/api-reference/realtime-communication/start-livestream), specifying the `templateURL` parameter.

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/react/api/sdk-reference/use-meeting/methods#starthls)
- [stopHls](/react/api/sdk-reference/use-meeting/methods#stophls)
- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
- [autoStartConfig](/api-reference/realtime-communication/create-room#autoStartConfig)
