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

# Optimize Audio Track - Flutter

While optimizing for the best listening experience, it is necessary to fine-tune the audio track that is being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom audio track for the participant's media before and during the meeting.

## Custom Audio Track

This feature can be used to add custom layers like background noise removal, echo cancellation, etc. on audio and send it to other participants.

### `How to Create Custom Audio Track ?`

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `VideoSDK`.

- This method can be used to create audio track using different encoding parameters and noise cancellation configuration.

#### Example

```javascript
import 'package:videosdk/videosdk.dart';

CustomTrack customTrack = await VideoSDK.createMicrophoneAudioTrack({
  // highlight-next-line
  // It will be the id of the mic from which the voice should be captured.
  microphoneId : 'mic-id' // OPTIONAL

  // highlight-next-line
  // This will accept the voice profile you want to capture.
  encoderConfig: CustomAudioTrackConfig.speech_standard, // `high_quality` | `music_standard`,  Default : `speech_standard`

  noiseConfig: {
  // highlight-start
  // It is used to improve the quality of audio by removing background noise
  // that can interfere with the clarity of speech.
  // highlight-end
    "noiseSuppression": true,

  // highlight-next-line
  // It is used to remove unwanted echoes from voice.
    "echoCancellation": true,

 // highlight-next-line
  // It is used to maintain a consistent level of loudness or amplitude in a voice.
    "autoGainControl": true,
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

If you are passing `micEnabled: true` in the `createRoom` and want to use custom tracks from start of the meeting, you can pass custom track in the `customMicrophoneAudioTrack` as shown below.

:::caution
Custom Track will not apply on `micEnabled: false` configuration.
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
    //Creating Custom Audio Track
    CustomTrack audioTrack = await VideoSDK.createMicrophoneAudioTrack(
        encoderConfig: CustomAudioTrackConfig.speech_standard);

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
      customMicrophoneAudioTrack: audioTrack, // custom audio track :: optional
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

In order to switch tracks during the meeting, you have to pass the `CustomTrack` in the **`unmuteMic()`** method of `Room`.

:::tip
Make sure to call `muteMic()` before you create a new track as it may lead to unexpected behavior.
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
            //Creating Custom Audio Track
            CustomTrack audioTrack = await VideoSDK.createMicrophoneAudioTrack(
                encoderConfig: CustomAudioTrackConfig.speech_standard);

            _room.unmuteMic(audioTrack);
            //highlight-end
          },
          child: const Text("Unmute with Custom Track"),
        ),
      ]
    )
  }
}
```

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Custom Audio Track](/flutter/api/sdk-reference/custom-tracks#custom-audio-track)
