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

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

### Parameters

- **encoderConfig**:

  - type: CustomVideoTrackConfig
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
  - Allowed values : .front | .back
  - It will specifiy whether to use front or back camera for the video track.

- **multiStream**

  - type: `boolean`
  - required: `false`
  - default: `true`
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

:::info

- To learn more about optimizations and best practices for using custom video tracks, [follow this guide](/ios/guide/video-and-audio-calling-api-sdk/features/optimize-video-track).
- This parameter is only available from `v2.0.6`.

:::

#### Returns

- `RTCVideoTrack`

### Example

```javascript
guard let videoMediaTrack = try? VideoSDK.createCameraVideoTrack(
 		encoderConfig: .h720p_w1280p,
		facingMode: .front,
		multiStream:true
) else { return}
```
