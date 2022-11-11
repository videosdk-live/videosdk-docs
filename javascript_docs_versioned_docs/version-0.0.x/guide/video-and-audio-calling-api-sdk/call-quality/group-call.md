---
title: Manage VideoSDK Quality in Conference Call
hide_title: false
hide_table_of_contents: false
description: This guide will explain maintaining quality in conference call using Video SDK.
sidebar_label: Conference Call Quality
pagination_label: Conference Call Quality
keywords:
  - audio calling quality
  - video calling quality
  - real-time communication quality
  - quality
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: conference-call-quality
---

## setQuality

VideoSDK provides you the ability to `setQuality` of the participant coming from VideoSDK.

#### Grid Layout

The best practice is to use `setQuality("high")` if the number of participants in the meeting are **less than 4**. If the number of participants in the meeting are in **between 4 and 9**, you should use `setQuality("med")` and if the participants in the meeting are **more than 9**, you should use `setQuality("low")`. These practice will help for a smooth video experience in the meeting and avoid lags when the number of participants increase.

#### Sidebar Layout

The best practice is to use `setQuality("high")` for the participant who is in the spotlight or in the center spot and `setQuality("med")` for the participants who are in small view in the side panel. You should pause the streams of all the participants you are not present on the screen by calling `stream.pause()`.

#### Spotlight Layout

The best practice is to use `setQuality("high")` for the participant who is in the spotlight or in the center spot. You should also pause the streams of all other participants who are currently not on the screen by calling `stream.pause()`.

## Multi Stream Mode

By defualt, VideoSDK sends multi resolution video streams to the servers so that if a user in the meeting is having trouble fetching a high resolution video stream due to network limitations he can downgrade to a lower resolution video for a better viewing experience.

When you are doing a conference call with 3-4 participants, there is no major network issues,and to get the best experience, we recommend you to send single stream of `540p` by setting `multiStream` as `false`, saving on network bandwith and at the same time maintain the call quality to the maximum.

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

By default, VideoSDK will use a `720p` or `540p` video during the video call basis the device capabilites but you can customize these setting according to your need or use case.

You can choose the resolution of video you want to send based on your use case and pass it to VideoSDK during intialization of the meeting and also while enabling the webcam.

You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class where you can pass different parameters which can be found [here](../features/custom-track/custom-video-track.md#parameters).

#### Example

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
  multiStream: false, //default: true
});
```

## Pause Video Streams

You might have observed that if there are to many participants on the screen and netowrk is not so good, participant videos keep frezzing. To solve these issue, you can listen to `video-quality-changed` event of all participants and if the quality stays `low` for a long duration, you can pause the stream for that particular participant and resume it after a set interval of time.

These will help recover other participants video who are on much priority like the host or a presenter and reduce the overload on the network.
