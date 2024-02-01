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

# Optimize Audio Track - React Native

To optimize the listening experience, it's essential to fine-tune the audio tracks used during calls. 

For an enhanced fine-tuning experience, we've introduced the capability to provide a custom audio track for a participant's media before and during the meeting.

## Custom Audio Track

This feature allows you to incorporate custom layers like background noise removal, echo cancellation, etc. and send these modifications to other participants.

### `How to Create Custom Audio Track ?`

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `@videosdk.live/react-native-sdk`.

- This method enables the creation of a audio track with various encoding parameters and noise cancellation configuration, ultimately returning a MediaStream.

#### Example

```javascript
import { createMicrophoneAudioTrack } from "@videosdk.live/react-native-sdk";

let customTrack = await createMicrophoneAudioTrack({
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
Here are different configurations for customizing audio tracks based on specific use cases:

- `speech_standard` : This config is optimised for normal voice communication.

- `high_quality` : This config is used for obtaining RAW audio, allowing you to apply your `noiseConfig`.

- `music_standard` : This config is optimised for communication scenarios, where the sharing of musical elements, such as songs or instrumental sounds, is crucial.

### `How to Setup Custom Audio Track ?`

The custom track can be configured both before and after the meeting is initialized. Following are the methods that help in doing so:

1. [Setup Custom Track while initialization of the meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setup Custom Track with methods](#2-setup-custom-track-with-methods)

##### 1. Setup Custom Track while initialization of the meeting

If you are enabling the mic (`micEnabled: true`) in the `config` of `MeetingProvider` and wish to use custom tracks from the start of the meeting, you can pass a custom track in the `config` as demonstrated below.

:::caution
Custom Track will not apply on `micEnabled: false` configuration.
:::

##### Example

```javascript
import {
  createMicrophoneAudioTrack,
  MeetingProvider,
} from "@videosdk.live/react-native-sdk";

function App() {
  const getTrack = async () => {
    const track = await createMicrophoneAudioTrack({
      encoderConfig: "speech_standard",
      noiseConfig: {
        noiseSuppression: true,
        echoCancellation: true,
        autoGainControl: true,
      },
    });
    setCustomTrack(track);
  };

  let [customTrack, setCustomTrack] = useState();

  useEffect(() => {
    getTrack();
  }, []);

  return (
    customTrack && (
      <MeetingProvider
        config={{
          meetingId,
          //highlight-next-line
          micEnabled: true, //If true, it will use the passed custom track to turn mic on
          webcamEnabled: true,
          //highlight-start
          //Pass the custom audio track here
          customMicrophoneAudioTrack: customTrack,
          //highlight-end
        }}
        token={token}
      >
        <MeetingView />
      </MeetingProvider>
    )
  );
}
```

#### 2. Setup Custom Track with methods

To switch tracks during the meeting, you need to pass the `MediaStream` in the **`unmuteMic()` or `toggleMic()`** method of `useMeeting`.

:::tip
Make sure to call the `muteMic()` method before you create a new track as it may lead to unexpected behavior.
:::

##### Example

```javascript
import {
  createMicrophoneAudioTrack,
  useMeeting,
} from "@videosdk.live/react-native-sdk";

const MeetingControls = () => {
  const { localMicOn, unmuteMic, muteMic, toggleMic } = useMeeting();

  const handleToggleMic = async () => {
    if (localMicOn) {
      toggleMic();
    } else {
      //highlight-start
      let customTrack = await createMicrophoneAudioTrack({
        encoderConfig: "speech_standard",
        noiseConfig: {
          noiseSuppression: true,
          echoCancellation: true,
          autoGainControl: true,
        },
      });

      toggleMic(customTrack);
      //highlight-end
    }
  };

  const handleUnmuteMic = async () => {
    if (localMicOn) {
      muteMic();
    } else {
      //highlight-start
      let customTrack = await createMicrophoneAudioTrack({
        encoderConfig: "speech_standard",
        noiseConfig: {
          noiseSuppression: true,
          echoCancellation: true,
          autoGainControl: true,
        },
      });

      unmuteMic(customTrack);
      //highlight-end
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleToggleMic();
        }}
      >
        <Text>Toggle Mic</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleUnmuteMic();
        }}
      >
        <Text>Unmute Mic</Text>
      </TouchableOpacity>
    </>
  );
};
```

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Custom Audio Track](/react-native/api/sdk-reference/custom-tracks#custom-audio-track)
