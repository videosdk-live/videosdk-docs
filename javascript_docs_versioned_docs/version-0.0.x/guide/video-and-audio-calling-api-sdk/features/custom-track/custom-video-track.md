---
title: Custom Video Track
hide_title: false
hide_table_of_contents: false
description: Custom Video Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Video Track
pagination_label: Custom Video Track
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

# Custom Video Track

We have introduced the ability to pass a custom video track for the video of the participants. This feature can be used to add custom video encoder config, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and background removal & video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) and send it to other participants.

## Creating a Custom Video Track

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class.
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
  - It will specifiy whether to use front or back camera for the video track.

- **optimizationMode**

  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

- **multiStream**

  - type: `boolean`
  - required: `false`
  - default: true
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

  :::info

  - For meetings with fewer than or equal to four participants, setting `multiStream:false` is regarded as best practice.
  - This parameter is only available from `v0.0.53`.

  :::

#### Returns

- `MediaStream`

### Example

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});
```

## Using Custom Video Track

### Custom Track while initializing the meeting

If you are passing `webcamEnabled: true` in the `initMeeting` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` params as shown below.

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});

meeting = VideoSDK.initMeeting({
  meetingId: meetingId, // required
  name: name, // required
  micEnabled: micOn, // optional, default: true
  webcamEnabled: webcamOn, // optional, default: true

  // Pass the custom track here which will be used to when webcam is auto started
  customCameraVideoTrack: customTrack,
});
```

### Custom Track with `enableWebcam()`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the `meeting.enableWebcam()` method.

:::note

Make sure to call `disableWebcam()` before you create a new track as it may lead to unexpected behavior.

:::

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});

meeting.enableWebcam(customTrack);
```
