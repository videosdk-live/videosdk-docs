---
title: Custom Audio Track
hide_title: false
hide_table_of_contents: false
description: Custom Audio Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Audio Track (BETA)
pagination_label: Custom Audio Track
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

# Custom Audio Track

We have introduced the ability to pass custom Audio track for the Audio of the participants. These feature can be used to add custom layers like background noise removal, echo cancellation etc. on audio and then send to other particiapnts.

## Creating a Custom Audio Track

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `VideoSDK` class.
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
  - Allowed values : [Check all the allowed values here.](./encoding-profiles#encoding-profiles-for-audio-track)
  - It will be the encoder configuration you want to use for this Audio Track. 

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

- `MediaStreamTrack`

### Example

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig:{
    noiseSuppresion: true,
    echoCancellation: true,
    autoGainControl: true,
  }
});
```

:::note

Make sure to call `muteMic()` befor you create a new track as it may lead to unexpected behaviour.

:::

## Using Custom Audio Track

### Custom Track with unmuteMic()

In order to use the custom tracks you create, you have to pass the `MediaStreamTrack` in the `meeting.unmuteMic()` method.

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig:{
    noiseSuppresion: true,
    echoCancellation: true,
    autoGainControl: true,
  }
});

meeting.unmuteMic(customTrack);
```

### Custom Track while initializing the meeting

If you are by default turning the mic on, by passing the `micEnabled: true` in the `initMeeting` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig:{
    noiseSuppresion: true,
    echoCancellation: true,
    autoGainControl: true,
  }
});

meeting = VideoSDK.initMeeting({
  meetingId: meetingId, // required
  name: name, // required
  micEnabled: true, // optional, default: true
  webcamEnabled: true, // optional, default: true

  // Pass the custom track here which will be used to mic is auto started
  customMicrophoneAudioTrack: customTrack, 
});
```