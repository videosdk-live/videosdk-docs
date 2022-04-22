---
title: Custom Video Track
hide_title: false
hide_table_of_contents: false
description: Custom Video Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Video Track (BETA)
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

We have introduced the ability to pass custom video track for the video of the participants. These feature can be used to add custom layers like filters or background removal on video and then send to other particiapnts.

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
  - Allowed values : [Check all the allowed values here.](./encoding-profiles#encoding-profiles-for-camera-video-track)
  - It will be the encoderConfigs you can want to use for this Video Track. 

- **facingMode**:
  - type: `String`
  - required: `false`
  - Allowed values : `front` | `environment`
  - It will specifiy wheater to use fron or back camera for the video track.

- **optimizationMode**
  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

#### Returns

- `MediaStreamTrack`

### Example

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});
```

:::note

Make sure to call `disableWebcam()` befor you create a new track as it may lead to unexpected behaviour.

:::

## Using Custom Video Track

### Custom Track with enableWebcam()

In order to use the custom tracks you create, you have to pass the `MediaStreamTrack` in the `meeting.enableWebcam()` method.

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});

meeting.enableWebcam(customTrack);
```

### Custom Track while initializing the meeting

If you are by default turning the webcam on, by passing the `webcamEnabled: true` in the `initMeeting` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.

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