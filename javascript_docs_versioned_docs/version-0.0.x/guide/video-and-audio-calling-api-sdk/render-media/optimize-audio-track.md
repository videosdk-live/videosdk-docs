---
title: Optimize Audio Track | VideoSDK Docs
hide_title: false
hide_table_of_contents: false
description: Optimize Audio  Tracks features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Optimize Audio Track
pagination_label: Optimize Audio Track
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

# Optimize Audio Track - Javascript

While optimizing for the best listening experience, it is necessary to fine-tune the audio track that is being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom audio track for the participant's media before and during the meeting.

## Custom Audio Track

This feature can be used to add custom layers like background noise removal, echo cancellation, etc. on audio and send it to other participants.

### `How to Create Custom Audio Track ?`

- You can create a Audio Track using `createMicrophoneAudioTrack()` method.

- This method can be used to create audio track using different encoding parameters and noise cancellation configuration.

#### Example

```javascript
let customTrack = await VideoSDK.createMicrophoneAudioTrack({
  // highlight-next-line
  // It will be the id of the mic from which the voice should be captured.
  microphoneId : 'mic-id' // OPTIONAL

  // highlight-next-line
  // This will accept the voice profile you want to capture.
  encoderConfig: "speech_standard", // `high_quality` | `music_standard`,  Default : `speech_standard`

  noiseConfig: {
  // highlight-start
  // It is used to improve the quality of audio by removing background noise
  // that can interfere with the clarity of speech.
  // highlight-end
    noiseSuppression: true,

  // highlight-next-line
  // It is used to remove unwanted echoes from voice.
    echoCancellation: true,

 // highlight-next-line
  // It is used to maintain a consistent level of loudness or amplitude in a voice.
    autoGainControl: true,
  },
});
```

- `speech_standard` : This config is optimised for normal voice communication.

- `high_quality` : This config is used for getting RAW audio, where you can apply your `noiseConfig`.

- `music_standard` : This config is optimised for communication, where sharing of musical notes such as songs or instrumental sounds, is important.

### `How to Setup Custom Audio Track ?`

The custom track can be set up both before and after the initialization of the meeting.

1. [Setup Custom Track while initialization of the meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setup Custom Track with methods](#2-setup-custom-track-with-methods)

##### 1. Setup Custom Track while initialization of the meeting

If you are passing `micEnabled: true` in the config of `initMeeting` method and want to use custom tracks from start of the meeting, you can pass custom track in the config as shown below.

:::caution
Custom Track will not apply on `micEnabled: false` configuration.
:::

##### Example

```javascript
let customAudioTrack = await VideoSDK.createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppresion: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});

// Meeting Init
meeting = window.VideoSDK.initMeeting({
  meetingId: meetingId, // required
  name: name, // required
  //highlight-next-line
  micEnabled: true, //If true, it will use the passed custom track to turn mic on
  webcamEnabled: true,
  //highlight-start
  //Pass the custom audio track here
  customMicrophoneAudioTrack: customAudioTrack,
  //highlight-end
});
```

#### 2. Setup Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the **`unmuteMic()`** method of `meeting` object.

:::tip
Make sure to call `muteMic()` before you create a new track as it may lead to unexpected behavior.
:::

##### Example

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const unmuteMicBtn = document.getElementById("unmuteMicBtn");
unmuteMicBtn.addEventListener("click", async () => {
  let customAudioTrack = await VideoSDK.createMicrophoneAudioTrack({
    encoderConfig: "high_quality",
    noiseConfig: {
      noiseSuppresion: true,
      echoCancellation: true,
      autoGainControl: true,
    },
  });

  meeting?.unmuteMic(customAudioTrack);
});
```
