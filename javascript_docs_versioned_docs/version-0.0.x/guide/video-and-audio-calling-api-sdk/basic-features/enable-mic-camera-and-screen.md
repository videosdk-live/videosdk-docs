---
title: Enable Mic, Camera and Screen - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This guide helps to control camera and mic with customised 
sidebar_label: Enable Mic, Camera and Screen
pagination_label: Enable Mic, Camera and Screen
keywords:
  - Enable Mic
  - Enable Camera
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: enable-mic-camera-and-screen
---

# Enable Mic, Camera and Screen
In this guide, we will understand how to use audio and video tracks to enable mic and camera in particular meeting. 

Video SDK enables factory methods to create [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object.

## Creating a Custom Audio Track
Call `VideoSDK.createMicrophoneAudioTrack` to create `MediaStreamTrack` object for microphone. it supports encoder configurations and audio quality.

```js
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppresion: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});

meeting.unmuteMic(customTrack);
meeting.muteMic();
```
### API Reference
- [createMicrophoneAudioTrack](/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)
- [unmuteMic](/javascript/api/sdk-reference/meeting-class/methods#unmutemic)
- [muteMic](/javascript/api/sdk-reference/meeting-class/methods#mutemic)

## Creating a Custom Video Track
Call `VideoSDK.createCameraVideoTrack` to create `MediaStreamTrack` object to video. it supports, selection of camera, encoder configurations and optimizations for text / motion.

```js
let customTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});

meeting.enableWebcam(customTrack);
meeting.disableWebcam();
```
### API Reference
- [createCameraVideoTrack](/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track#using-custom-video-track)
- [enableWebcam](/javascript/api/sdk-reference/meeting-class/methods#enablewebcam)
- [disableWebcam](/javascript/api/sdk-reference/meeting-class/methods#disablewebcam)

## Creating a Custom Screen Share Track
Call `VideoSDK.createScreenShareVideoTrack` to create `MediaStreamTrack` object to video. it supports encoder configurations and optimizations for text / motion.

```js
let customTrack = await VideoSDK.createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});

meeting.enableScreenShare(customTrack);
meeting.disableScreenShare();
```
### API Reference
- [createScreenShareVideoTrack](/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)
- [enableScreenShare](/javascript/api/sdk-reference/meeting-class/methods#enablescreenshare)
- [disableScreenShare](/javascript/api/sdk-reference/meeting-class/methods#disablescreenshare)

## Dealing with multiple Mics and Camera
With use of couple of functions, you can fetch mics, cameras and also be able to change it as required. 
```js
// Returns list of available microphones
meeting.getMics();

// Change mic from the list
meeting.changeMic(deviceId);

// Return list of available cameras
meeting.getWebcams();

// Select one of the camera
meeting.changeWebcam(deviceId);
```
### API Reference
- [getMics](/javascript/api/sdk-reference/meeting-class/methods#getmics)
- [changeMic](/javascript/api/sdk-reference/meeting-class/methods#changemic)
- [getWebcams](/javascript/api/sdk-reference/meeting-class/methods#getwebcams)
- [changeWebcam](/javascript/api/sdk-reference/meeting-class/methods#changewebcam)



