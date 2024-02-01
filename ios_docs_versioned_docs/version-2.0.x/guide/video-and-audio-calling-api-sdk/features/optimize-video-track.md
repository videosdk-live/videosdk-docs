---
title: Optimize Video Track | VideoSDK Docs
hide_title: false
hide_table_of_contents: false
description: Optimize Video Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Optimize Video Track
pagination_label: Optimize Video Track
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

# Optimize Video Track - iOS

While optimizing for the best viewing experience, it is necessary to fine-tune the video tracks that are being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom video track for the participant's media before and during the meeting.

## Custom Video Track

This feature can be used to add custom video encoder configurations and background removal & video filter from external libraries and send it to other participants.

### `How to Create Custom Video Track ?`

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class.

- This method can be used to create video track using different encoding parameters and camera facing mode, it return `RTCVideoTrack?`.

#### Example

```javascript
import WebRTC
guard let videoMediaTrack = try? VideoSDK.createCameraVideoTrack(
  // highlight-next-line
  // This will accept the enum value of CustomVideoTrackConfig which contains resolution (height x width) of video you want to capture.
  encoderConfig: .h720p_w1280p, // .h540p_w960p | .h720p_w1280p ... // Default : .h360p_w640p

  // highlight-next-line
  // It will specify whether to use front or back camera for the video track.
  facingMode: .front, // .back,  Default : .front

  // highlight-next-line
  // We will discuss this parameter in next step.
  multiStream:true // false,  Default : true

) else { return}
```

:::caution
The capabilities of the device have a significant impact on how custom track configurations behave. Assuming a case where you set encoder configuration to 1080p but the webcam only supports 720p, then encoder configuration will automatically switch to the highest resolution that the device can handle, which is 720p.
:::

##### What is `multiStream`?

- It will specify if the stream should send multiple resolution layers or single resolution layer.

**`multiStream : true`** By default, VideoSDK sends multiple resolution video streams to the server (whether you are using custom video track or not), For instance, user device capabilty is 720p, so VideoSDK sends 720p along with 640p and 480p streams. This allows VideoSDK to deliver the appropriate stream to each participant based on their network bandwidth.

<center>

![Multi Stream False](/img/multistream_true.png)

</center>

**`multiStream : false`** If you want to restrict the VideoSDK to send only one stream to maintain quality, you can set `multiStream` to `false`.

<center>

![Multi Stream False](/img/multistream_false.png)

</center>

:::danger
`setQuality` would not have any effect if multiStream is set to `false`.
:::

### `How to Setup Custom Video Track ?`

The custom track can be set up both before and after the initialization of the meeting.

1. [Setup Custom Track while initialization of the meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setup Custom Track with methods](#2-setup-custom-track-with-methods)

##### 1. Setup Custom Track while initialization of the meeting

If you are passing `webcamEnabled: true` in the `createRoom` and want to use custom tracks from start of the meeting, you can pass custom track in the `customCameraVideoTrack` as shown below.

:::caution
Custom Track will not apply on `webcamEnabled: false` configuration.
:::

##### Example

```javascript
import VideoSDKRTC

guard let videoMediaTrack = try? VideoSDK.createCameraVideoTrack(
 		encoderConfig: .h720p_w1280p,
		facingMode: .front,
		multiStream:true
) else { return}

let meeting = VideoSDK.initMeeting(
      meetingId: meetingId,
      participantName: name,
      micEnabled: micEnabled, // optional, default: true
      webcamEnabled: cameraEnabled, // optional, default: true

      // Pass the custom track here which will be used to when webcam is auto started
      customCameraVideoStream: customVideoStream,
)

```

#### 2. Setup Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `CustomTrack` in the **`enableWebCam()`** method of `Room`.

:::tip
Make sure to call `disableCam()` before you create a new track as it may lead to unexpected behavior.
:::

##### Example

```javascript
import VideoSDKRTC

@IBAction func videoButtonTapped(_ sender: Any) {
if !on {
  guard let videoMediaTrack = try? VideoSDK.createCameraVideoTrack(encoderConfig: .h360p_w480p, facingMode: .front, multiStream: false) else { return}
  self.meeting?.enableWebcam(customVideoStream: videoMediaTrack)
      } else {
  self.meeting?.disableWebcam()
      }
}

```

### `Which Configuration is suitable for Device ?`

In this section, we will understand participant size wise `encoder(Resolution)` and `multiStream` configuration.

<center>
<img src='https://cdn.videosdk.live/website-resources/docs-resources/mobile_device_config.png' />
</center>

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Custom Video Track](/flutter/api/sdk-reference/custom-tracks#custom-video-track)
