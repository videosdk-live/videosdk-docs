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

## Custom Video Track - React Native

- You can create a Video Track using `createCameraVideoTrack()` method of `@videosdk.live/react-native-sdk`.
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
  - You can chose from the below mentioned list of values for the encoder config.

| Encoder Config | Resolution | Frame Rate |   Bitrate    |
| -------------- | :--------: | :--------: | :----------: |
| h90p_w160p     |   160x90   |   15 fps   |  60000 kbps  |
| h180p_w320p    |  320x180   |   15 fps   | 120000 kbps  |
| h216p_w384p    |  384x216   |   15 fps   | 180000 kbps  |
| h360p_w640p    |  640x360   |   20 fps   | 300000 kbps  |
| h540p_w960p    |  960x540   |   25 fps   | 600000 kbps  |
| h720p_w1280p   |  1280x720  |   30 fps   | 2000000 kbps |
| h1080p_w1920p  | 1920x1080  |   30 fps   | 3000000 kbps |
| h1440p_w2560p  | 2560x1440  |   30 fps   | 5000000 kbps |
| h2160p_w3840p  | 3840x2160  |   30 fps   | 8000000 kbps |
| h120p_w160p    |  160x120   |   15 fps   |  80000 kbps  |
| h180p_w240p    |  240x180   |   15 fps   | 100000 kbps  |
| h240p_w320p    |  320x240   |   15 fps   | 150000 kbps  |
| h360p_w480p    |  480x360   |   20 fps   | 225000 kbps  |
| h480p_w640p    |  640x480   |   25 fps   | 300000 kbps  |
| h540p_w720p    |  720x540   |   30 fps   | 450000 kbps  |
| h720p_w960p    |  960x720   |   30 fps   | 1500000 kbps |
| h1080p_w1440p  | 1440x1080  |   30 fps   | 2500000 kbps |
| h1440p_w1920p  | 1920x1440  |   30 fps   | 3500000 kbps |

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `false`
  - Allowed values : `user` | `environment`
  - It will specifiy whether to use front or back camera for the video track.

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

- To learn more about optimizations and best practices for using custom video tracks, [follow this guide](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).
- This parameter is only available from `v0.0.26`.

:::

#### Returns

- `MediaStream`

### Example

```javascript
import { createCameraVideoTrack } from "@videosdk.live/react-native-sdk";

let customTrack = await createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "user",
});
```

## Custom Audio Track - React Native

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `@videosdk.live/react-native-sdk`.
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
  - You can chose from the below mentioned list of values for the encoder config.

| Encoder Config      | Bitrate  | Auto Gain | Echo Cancellation | Noise Suppression |
| ------------------- | :------: | :-------: | :---------------: | :---------------: |
| speech_low_quality  | 16 kbps  |   TRUE    |       TRUE        |       TRUE        |
| speech_standard     | 24 kbps  |   TRUE    |       TRUE        |       TRUE        |
| music_standard      | 32 kbps  |   FALSE   |       FALSE       |       FALSE       |
| standard_stereo     | 64 kbps  |   FALSE   |       FALSE       |       FALSE       |
| high_quality        | 128 kbps |   FALSE   |       FALSE       |       FALSE       |
| high_quality_stereo | 192 kbps |   FALSE   |       FALSE       |       FALSE       |

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
import { createMicrophoneAudioTrack } from "@videosdk.live/react-native-sdk";

let customTrack = await createMicrophoneAudioTrack({
  encoderConfig: "speech_standard",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});
```

## Custom Screen Share Track - React Native

- You can create a Video Track using `createScreenShareVideoTrack()` method of `@videosdk.live/react-native-sdk`.
- This method can be used to create video track using different encoding parameters and optimization mode.

### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h720p_15fps`
  - You can chose from the below mentioned list of values for the encoder config.

| Encoder Config | Resolution | Frame Rate |   Bitrate    |
| -------------- | :--------: | :--------: | :----------: |
| h360p_30fps    |  640x360   |   3 fps    | 200000 kbps  |
| h720p_5fps     |  1280x720  |   5 fps    | 400000 kbps  |
| h720p_15fps    |  1280x720  |   15 fps   | 1000000 kbps |
| h1080p_15fps   | 1920x1080  |   15 fps   | 1500000 kbps |
| h1080p_30fps   | 1920x1080  |   15 fps   | 1000000 kbps |

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
import { createScreenShareVideoTrack } from "@videosdk.live/react-native-sdk";

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});
```
