---
title: Custom Tracks
hide_title: true
hide_table_of_contents: false
description: Custom Video Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Tracks
pagination_label: Custom Tracks
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

## Custom Video Track

- You can create a Video Track using `createCameraVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

### Parameters

- **cameraId**:

  - type: `String`
  - required: `false`
  - It will be the id of the camera from which the video should be captured.

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h360p_w640p`
  - Allowed values : `h90p_w160p` | `h180p_w320p` | `h216p_w384p` | `h360p_w640p` | `h540p_w960p` | `h720p_w1280p` | `h1080p_w1920p` | `h1440p_w2560p` | `h2160p_w3840p` | `h120p_w160p` | `h180p_w240p` | `h240p_w320p` | `h360p_w480p` | `h480p_w640p` | `h540p_w720p` | `h720p_w960p` | `h1080p_w1440p` | `h1440p_w1920p`
  - It will be the encoderConfigs you can want to use for the Video Track.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `false`
  - Allowed values : `front` | `environment`
  - It will specifiy whether to use fron or back camera for the video track.

- **optimizationMode**

  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

- **multiStream**

  - type: `boolean`
  - required: `false`
  - default: `true`
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

:::info

- For meetings with fewer than or equal to four participants, setting `multiStream:false` is regarded as best practice.
- This parameter is only available from `v0.1.53`.
- To learn more about optimizations, [follow these guide](/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-tracks).

:::

#### Returns

- `MediaStream`

### Example

```javascript
import { createCameraVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});
```

## Custom Audio Track

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create audio track using different encoding parameters and noise cancellation configration.

### Parameters

- **microphoneId**:

  - type: `String`
  - required: `false`
  - It will be the id of the mic from which the audio should be captured.

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `speech_standard`
  - Allowed values : `speech_low_quality` | `speech_standard` | `music_standard` | `standard_stereo` | `high_quality` | `high_quality_stereo`
  - It will be the encoder configuration you want to use for Audio Track.

- **noiseConfig**

  - **echoCancellation**

    - type: `boolean`
    - required: `false`
    - If `true` echo cancellation will turned on else it would be turned off.

  - **autoGainControl**

    - type: `boolean`
    - required: `false`
    - If `true` auto gain will turned on else it would be turned off.

  - **noiseSuppression**
    - type: `boolean`
    - required: `false`
    - If `true` noise suppression will turned on else it would be turned off.

#### Returns

- `MediaStream`

### Example

```javascript
import { createMicrophoneAudioTrack } from "@videosdk.live/react-sdk";

let customTrack = await createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});
```

## Custom Screen Share Track

- You can create a Video Track using `createScreenShareVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters and optimization mode.

### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h720p_15fps`
  - Allowed values : `h360p_30fps` | `h720p_5fps` | `h720p_15fps` | `h1080p_15fps` | `h1080p_30fps`
  - It will be the encoderConfigs you can want to use for the Video Track.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **optimizationMode**
  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

#### Returns

- `MediaStream`

### Example

```javascript
import { createScreenShareVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});
```
