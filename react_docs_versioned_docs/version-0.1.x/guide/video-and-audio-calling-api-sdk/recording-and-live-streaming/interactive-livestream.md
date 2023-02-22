---
title: Interactive Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Interactive Livestream
pagination_label: Interactive Livestream
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

# Interactive Livestream

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can take part in a variety of activities like live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

// Explain VIdeosdk+HLS

VideoSDK also allows you to configure the interactive livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop RTMP LIvestreaming.

### `startHls()`

`startHls()` can be used to start a interactive livestream of the meeting which can be accessed from the `useMeeting` hook. These method accepts one parameters:

- `config`: This parameter will define how the livestream layout should look like.

  - `config: mode` is used to either start hls streaming of video-and-audio both or only audio. And by default it will be video-and-audio.

  - `config: quality` is only applicable to video-and-audio.
  - Here is the complete available configuration options.
    - **config**:
      - **layout**:
        - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
        - **priority**: _"SPEAKER"_ | _"PIN"_
        - **gridSize**: Number _`max 25`_
      - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
      - **mode**: _"video-and-audio"_ | _"audio"_
      - **quality**: _"low"_ | _"med"_ | _"high"_
      - **orientation**: _"landscape"_ | _"portrait"_
  - These parameter can be `null`.

### `stopHls()`

- `stopLivestream()` is used to stop the meeting livestream which can be accessed from the `useMeeting` hook.

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
    // Start Hls
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

:::note
If you want to learn more about the Interactive Livestream and how you can implement it in your own platform, you can checkout these guide.
:::

### Event associated with HLS

- **onHlsStateChanged** - Whenever meeting HLS state changes, then `onHlsStateChanged` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `Constants.hlsEvents.HLS_STARTED`

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

const Constants = VideoSDK.Constants;

function onHlsStateChanged(data) {
   const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    // on hlsStateChanged started you will receive downstreamUrl
    const {downstreamUrl}=data;
    console.log("Meeting Hls is started");
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

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow these guide](/docs/tutorials/customized-layout). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.