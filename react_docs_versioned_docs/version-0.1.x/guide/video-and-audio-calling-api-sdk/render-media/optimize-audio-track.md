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

# Optimize Audio Track

While optimizing for the best listening experience, it is necessary to fine-tune the audio track that is being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom audio track for the participant's media before and during the meeting.

## Custom Audio Track

This feature can be used to add custom layers like background noise removal, echo cancellation, etc. on audio and send it to other participants.

### `How to Create Custom Audio Track ?`

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `@videosdk.live/react-sdk`.

- This method can be used to create audio track using different encoding parameters and noise cancellation configration.

#### Example

```javascript
import { createMicrophoneAudioTrack } from "@videosdk.live/react-sdk";

let customTrack = await createMicrophoneAudioTrack({
  // highlight-next-line
  // It will be the id of the camera from which the video should be captured.
  microphoneId : 'mic-id' // OPTIONAL

  // highlight-next-line
  encoderConfig: "high_quality",

  // highlight-next-line
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});
```
