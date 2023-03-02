---
title: Audio/Video Config
hide_title: false
hide_table_of_contents: false
description: Audio/Video config features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Audio/Video Config
pagination_label: Audio/Video Config
keywords:
  - audio calling
  - video calling
  - real-time communication
  - live on HLS
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: audio-video-config
---

## Custom Video Config

This feature can be used to add custom video resolution, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and multiStream.

### How it works ?

- You have to choose your desired resolution from the [custom video attribute](/prebuilt/guide/prebuilt-video-and-audio-calling/features/audio-video-config#custom-video-attributes) and pass that value into `videoConfig.resolution`. You can confirm applied resolution from network icon of user video tile as shown below.

![Custom Video Config](/img/prebuilt/in-meeting-quality-stats.png)

### Custom Video Attributes

- `videoConfig.resolution`- You can set any `resolution` value from allowed values given below, by default the resolution is set to `h360p_w640p`.

  - Allowed values : `h90p_w160p` | `h180p_w320p` | `h216p_w384p` | `h360p_w640p` | `h540p_w960p` | `h720p_w1280p` | `h1080p_w1920p` | `h1440p_w2560p` | `h2160p_w3840p` | `h120p_w160p` | `h180p_w240p` | `h240p_w320p` | `h360p_w480p` | `h480p_w640p` | `h540p_w720p` | `h720p_w960p` | `h1080p_w1440p` | `h1440p_w1920p`

- `videoConfig.optimizationMode` - You can focus on optimizing a specific mode of the video (i.e. text, motion, etc.) by setting the `optimizationMode`, by default is set to `motion`.
- `videoConfig.multiStream` - If it is true, multiple resolution layers are send in single video stream. If it is false, then only single resolution layer is send in video stream, by default is set to true.

:::info

- For meetings with fewer than or equal to four participants, setting `multiStream:false` is regarded as best practice.

:::

```js title="index.html"
const config = {
  // ...
  videoConfig: {
    resolution: "h720p_w1280p",
    optimizationMode: "motion",
    multiStream: false,
  },
  // ...
};
```

## Custom Audio Config

This feature can be used to set the quality of audio and send it to other participants.

### Custom Audio Attributes

- `audioConfig.quality`- You can set any `quality` value from allowed values given below, by default quality is set to `speech_standard`.

  - Allowed values : `speech_low_quality` | `speech_standard` | `music_standard` | `standard_stereo` | `high_quality` | `high_quality_stereo`

```js title="index.html"
const config = {
  // ...
  audioConfig: {
    quality: "high_quality",
  },
  // ...
};
```

## Custom Screen Share Config

This feature can be used to add custom video resolution, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and send it to other participants.

### Custom Screen Share Attributes

- `screenShareConfig.resolution`- You can set any `resolution` value of screen shared video from allowed values given below, by default resolution is set to `h720p_15fps`.

  - Allowed values : `h360p_30fps` | `h720p_5fps` | `h720p_15fps` | `h1080p_15fps` | `h1080p_30fps`

- `screenShareConfig.optimizationMode` - You can focus on optimizing a specific mode of the screen shared video (i.e. text, motion, etc.) by setting the `optimizationMode`, by default is set to `motion`.

```js title="index.html"
const config = {
  // ...
  screenShareConfig: {
    resolution: "h720p_5fps",
    optimizationMode: "text",
  },
  // ...
};
```
