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

We have introduced the ability to pass a custom video track for the video of the participants. This feature can be used to add custom video encoder config, and background removal & video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) and send it to other participants.

## Creating a Custom Video Track

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

### Parameters

- **cameraId**:

  - type: `String`
  - required: `false`
  - It will be the id of the camera from which the video should be captured.

- **encoderConfig**:

  - type: `CustomVideoTrackConfig`
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
  - Allowed values : `user` | `environment`
  - It will specifiy whether to use front or back camera for the video track.

- **multiStream**

  - type: `boolean`
  - required: `false`
  - default: true
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

  :::info

  - For meetings with fewer than or equal to four participants, setting `multiStream:false` is regarded as best practice.
  - This parameter is only available from `v1.0.9`.

  :::

#### Returns

- `Future<CustomTrack>`

### Example

```javascript
CustomTrack videoTrack = await VideoSDK.createCameraVideoTrack(
      encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
      multiStream: false,
      facingMode:"user",
    );
```

## Using Custom Video Track

### Custom Track while initializing the meeting

If you are passing `webcamEnabled: true` in the `createRoom` and want to use custom tracks from start of the meeting, you can pass custom track in the `createRoom` params as shown below.

```javascript
CustomTrack videoTrack = await VideoSDK.createCameraVideoTrack(
      encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
      multiStream: false,
      facingMode:"user",
    );

Room room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: widget.displayName,
      micEnabled: widget.micEnabled,
      camEnabled: widget.camEnabled,
      maxResolution: 'hd',
      defaultCameraIndex: 1,
      multiStream: false,

      // Pass the custom track here
      customCameraVideoTrack: videoTrack, // custom video track :: optional
      notification: const NotificationInfo(
        title: "Video SDK",
        message: "Video SDK is sharing screen in the meeting",
        icon: "notification_share", // drawable icon name
      ),
    );
```

### Custom Track with `enableCam()`

In order to switch tracks during the meeting, you have to pass the `CustomTrack` in the `room.enableCam()` method.

:::note

Make sure to call `disableCam()` before you create a new track as it may lead to unexpected behavior.

:::

```javascript
CustomTrack track = await VideoSDK.createCameraVideoTrack(
  facingMode: "environment",
  encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
  multiStream: true,
);
room.enableCam(track);
```
