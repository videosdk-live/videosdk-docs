---
title: Manage VideoSDK Quality in One to One Call
hide_title: false
hide_table_of_contents: false
description: This guide will explain maintaining quality in one to one call using Video SDK.
sidebar_label: One to One Call Quality
pagination_label: One to One Call Quality
keywords:
  - audio calling quality
  - video calling quality
  - real-time communication quality
  - quality
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: one-to-one-call-quality
---

These guide will help you improve the video quality of your one to one call using VideoSDK.

## Multi Stream Mode

By defualt, VideoSDK sends multi resolution video streams to the servers so that if a user in the meeting is having trouble fetching a high resolution video stream due to network limitations he can downgrade to a lower resolution video for a better viewing experience.

On the other hand, when you are doing a one to one call, there would be only two person in the call and hence ther is no major network issues so you can choose to send single stream saving on netowrk bandwith and at the same time, maintaining the call quality to the maximum.

You can pass `multiStream` as `false` inside the `initMeeting` to stop sending multi resolution video stream or you can also use custom tracks to define wheather to use `multiStream` for that particular participant.

```js
import { VideoSDK } from "@videosdk.live/js-sdk";

// Configure authentication token
VideoSDK.config("<Authentication-token>");

// Initilize meeting
const meeting = VideoSDK.initMeeting({
  meetingId: "<Id-on-meeting>", // required
  name: "<Name-of-participant>", // required
  participantId:'Id-of-participant' // optional, default: SDK will generate
  micEnabled: "<Flag-to-enable-mic>", // optional, default: true
  webcamEnabled: "<Flag-to-enable-webcam>", // optional, default: true
  maxResolution: "<Maximum-resolution>", // optional, default: "hd"
  customCameraVideoTrack: "<Video-track>", // optional
  customMicrophoneAudioTrack: "<Microphone-track>", // optional
  multiStream: false // set this parameter as false
});
```

:::note

`multiStream` mode is available for version 0.0.53 and above only.

:::

## Custom Video Track

By default, VideoSDK will use a `720p` or `540p` video during the video call basis the device capabilites but you can customizes these setting according to your needs.

You can choose the resolution of video you can to send and pass it to VideoSDK during intialization of the meeting and also while enableing the webcam.

You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class where you can pass different parameters which can be found [here](../features/custom-track/custom-video-track.md#parameters).

### Example

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});
```
