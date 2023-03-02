---
sidebar_position: 1
sidebar_label: Audio/Video Config Parameters
pagination_label: Audio/Video Config Parameters
title: Audio/Video Config Parameters
---

<div class="sdk-api-ref-only-h4">

## Custom Video Config

### videoConfig

- type: `object`

### resolution

- type: `String`

- `videoConfig.resolution` represents the resolution of your video which can be `h90p_w160p` , `h180p_w320p` , `h216p_w384p` , `h360p_w640p` , `h540p_w960p` , `h720p_w1280p` , `h1080p_w1920p` , `h1440p_w2560p` , `h2160p_w3840p` , `h120p_w160p` , `h180p_w240p` , `h240p_w320p` , `h360p_w480p` , `h480p_w640p` , `h540p_w720p` , `h720p_w960p` , `h1080p_w1440p` or `h1440p_w1920p`.

### optimizationMode

- type: `String`

- `videoConfig.optimizationMode` represents the specific mode of your video which can be `motion` , `text` or `deatil`.

### multiStream

- type: `Boolean`

- If it is `true`, multiple resolution layers are send in single video stream. If it is `false`, then only single resolution layer is send in video stream.

```js
meeting.init({
  // other params
  videoConfig: {
    resolution: "h720p_w1280p",
    optimizationMode: "motion",
    multiStream: false,
  },
  // other params
});
```

## Custom Audio Config

### audioConfig

- type: `object`

### quality

- type: `String`

- `audioConfig.quality` represents the quality of your audio which can be `speech_low_quality` , `speech_standard` , `music_standard` , `standard_stereo` , `high_quality` or `high_quality_stereo`.

```js
meeting.init({
  // other params
  audioConfig: {
    quality: "high_quality",
  },
  // other params
});
```

## Custom Screen Share Config

### screenShareConfig

- type: `object`

### resolution

- type: `String`

- `screenShareConfig.resolution` represents the resolution of your screen shared video which can be `h90p_w160p` , `h180p_w320p` , `h216p_w384p` , `h360p_w640p` , `h540p_w960p` , `h720p_w1280p` , `h1080p_w1920p` , `h1440p_w2560p` , `h2160p_w3840p` , `h120p_w160p` , `h180p_w240p` , `h240p_w320p` , `h360p_w480p` , `h480p_w640p` , `h540p_w720p` , `h720p_w960p` , `h1080p_w1440p` or `h1440p_w1920p`.

### optimizationMode

- type: `String`

- `screenShareConfig.optimizationMode` represents the specific mode of your screen shared video which can be `motion` , `text` or `deatil`.

```js
meeting.init({
  // other params
  screenShareConfig: {
    resolution: "h720p_5fps",
    optimizationMode: "text",
  },
  // other params
});
```

</div>
