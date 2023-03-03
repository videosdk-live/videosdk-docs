---
title: Customize Audio/Video
hide_title: false
hide_table_of_contents: false
description: Customize Audio/Video  features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Customize Audio/Video
pagination_label: Customize Audio/Video
keywords:
  - audio calling
  - video calling
  - real-time communication
  - live on HLS
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: customize-audio-video
---

We now have the option to customize the audio, video and screen sharing. This feature is used to pass resolution, optimization mode for associated audio, video, and screen sharing configuration.

Three different configurations will be covered in this guide.

1. [Custom Video Config](/prebuilt/guide/prebuilt-video-and-audio-calling/features/customize-audio-video#custom-video-config)
2. [Custom Audio Config](/prebuilt/guide/prebuilt-video-and-audio-calling/features/customize-audio-video#custom-audio-config)
3. [Custom Screen Share Config](/prebuilt/guide/prebuilt-video-and-audio-calling/features/customize-audio-video#custom-screen-share-config)

## Custom Video Config

This feature can be used to add custom video resolution, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video).

![Custom Video Resolution](/img/prebuilt/in-meeting-quality-stats.png)

### Custom Video Attributes

- `videoConfig.resolution`- You can set `resolution` value to `h360p_w640p`, `h540p_w960p`, `h720p_w1280p`, or `h1080p_w1920p`, by default the resolution is set to `h360p_w640p`. If you want to know more values of resolution then checkout this [Prebuilt SDK Referenece](/prebuilt/api/sdk-reference/parameters/advance-parameters/customize-audio-video#resolution).

- `videoConfig.optimizationMode` - You can focus on optimization by providing specific mode of the video (i.e. text, motion, etc.) to the `optimizationMode`, by default is set to `motion`.
- `videoConfig.multiStream` - If it is true, multiple resolution layers are send in single video stream. If it is false, then only single resolution layer is send in video stream, by default is set to true.

:::info

- For meetings with fewer than or equal to four participants, setting `multiStream:false` is regarded as best practice.
- This parameter is only available from v0.3.29.

:::

```js title="index.html"
const config = {
  // ...
  videoConfig: {
    resolution: "h720p_w1280p", //h360p_w640p, h540p_w960p, h1080p_w1920p
    optimizationMode: "motion", // text , detail
    multiStream: true,
  },
  // ...
};
```

### How it works ?

- The network icon of the user video tile, as seen below, will display the video resolution configuration that you have specified.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay loop muted playing controls url="/img/prebuilt/video_resolution.mp4" height="400px" width={"100%"}/>

</div>

## Custom Audio Config

This feature can be used to set the quality of audio and send it to other participants.

### Custom Audio Attributes

- `audioConfig.quality`- You can set `quality` value to `speech_low_quality` , `speech_standard` or `high_quality` , by default quality is set to `speech_standard`.
  If you want to know more values of quality then checkout this [Prebuilt SDK Referenece](/prebuilt/api/sdk-reference/parameters/advance-parameters/customize-audio-video#quality).

```js title="index.html"
const config = {
  // ...
  audioConfig: {
    quality: "speech_standard", //speech_low_quality , high_quality
  },
  // ...
};
```

## Custom Screen Share Config

This feature can be used to add custom screen sharing resolution, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and send it to other participants.

### Custom Screen Share Attributes

- `screenShareConfig.resolution`- You can set `resolution` value to `h360p_30fps` , `h720p_5fps` or `h1080p_15fps` of screen shared video , by default resolution is set to `h720p_15fps`. If you want to know more values of resolution then checkout this [Prebuilt SDK Referenece](/prebuilt/api/sdk-reference/parameters/advance-parameters/customize-audio-video#resolution-1).

- `screenShareConfig.optimizationMode` - You can focus on optimization by providing specific mode of the video (i.e. text, motion, etc.) to the `optimizationMode`, by default is set to `motion`.

```js title="index.html"
const config = {
  // ...
  screenShareConfig: {
    resolution: "h720p_15fps", // h360p_30fps , h720p_5fps, h1080p_15fps
    optimizationMode: "text", // motion , detail
  },
  // ...
};
```
