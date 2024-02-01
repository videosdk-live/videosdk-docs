---
title: Optimize Video Tracks | VideoSDK Docs
hide_title: false
hide_table_of_contents: false
description: Optimize Video Tracks features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Optimize Video Tracks
pagination_label: Optimize Video Tracks
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

# Optimize Video Tracks

While optimizing for the best viewing experience, it is necessary to fine-tune the video tracks that are being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom video track for the participant's media before and during the meeting.

## Custom Video Track

This feature can be used to add custom video encoder configurations and background removal & video filter from external libraries and send it to other participants.

### `How to Create Custom Video Track ?`

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class.

- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode and return `Future<CustomTrack>`.

#### Example

```javascript
import 'package:videosdk/videosdk.dart';

CustomTrack customTrack = await VideoSDK.createCameraVideoTrack({
  // highlight-next-line
  // It will be the id of the camera from which the video should be captured.
  cameraId:"camera-id" // OPTIONAL

  // highlight-next-line
  // This will accept the resolution (height x width) of video you want to capture.
  encoderConfig: "h480p_w640p", // "h540p_w960p" | "h720p_w1280p" ... // Default : "h360p_w640p"

  // highlight-next-line
  // For Mobile browser It will specify whether to use front or back camera for the video track.
  facingMode: "environment", // "user",  Default : "environment"

  // highlight-next-line
  // We will discuss this parameter in next step.
  multiStream:true // false,  Default : true

});
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
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  final String meetingId;
  final String token;

  const MeetingScreen(
      {super.key, required this.meetingId, required this.token});

  @override
  State<MeetingScreen> createState() => _MeetingScreenState();
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    initRoom();
    super.initState();
  }

  void initRoom() {
    //highlight-start
    //Creating Custom Video Track
    CustomTrack videoTrack = await VideoSDK.createCameraVideoTrack(
      encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
      multiStream: false,
    );

    //Creating a new Room with custom audio track
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: true,
      camEnabled: true,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
      customCameraVideoTrack: videoTrack, // custom video track :: optional
    );
    //highlight-end
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }
}
```

#### 2. Setup Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `CustomTrack` in the **`enableCam()`** method of `Room`.

:::tip
Make sure to call `disableCam()` before you create a new track as it may lead to unexpected behavior.
:::

##### Example

```javascript
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  final String meetingId;
  final String token;

  const MeetingScreen(
      {super.key, required this.meetingId, required this.token});

  @override
  State<MeetingScreen> createState() => _MeetingScreenState();
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    initRoom();
    super.initState();
  }

  void initRoom() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      childern: [
        ElevatedButton(
          onPressed: ()async{
            //highlight-start
            //Creating Custom Video Track
            CustomTrack videoTrack = await VideoSDK.createCameraVideoTrack(
              encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
              multiStream: false,
            );

            _room.enableCam(videoTrack);
            //higlight-end
          },
          child: const Text("Enable Cam with Custom Track"),
        ),
      ]
    )
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
