---
title: Optimize Audio and Video Tracks | VideoSDK Docs
hide_title: false
hide_table_of_contents: false
description: Optimize Audio and Video Tracks features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Optimize Audio and Video Tracks
pagination_label: Optimize Audio and Video Tracks
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

# Optimize Audio and Video Tracks

While optimizing for the quality it is necessary to fine-tune the audio and video tracks that are being used during the calls.

For the best fine-tuning experience have introduced the ability to pass a custom video and audio track for the participant's media.

## Custom Video Tracks

This feature can be used to add custom video encoder configurations, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and background removal & video filter from external SDK(e.g., [videosdk-media-processor](https://www.npmjs.com/package/@videosdk.live/videosdk-media-processor-web)) and send it to other participants.

### Creating a Custom Video Track

- You can create a Video Track using `createCameraVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

#### Parameters

- **cameraId**:

  - type: `String`
  - required: `false`
  - It will be the id of the camera from which the video should be captured.

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h360p_w640p`
  - Allowed values : `h90p_w160p` | `h180p_w320p` | `h216p_w384p` | `h360p_w640p` | `h540p_w960p` | `h720p_w1280p` | `h1080p_w1920p` | `h1440p_w2560p` | `h2160p_w3840p` | `h120p_w160p` | `h180p_w240p` | `h240p_w320p` | `h360p_w480p` | `h480p_w640p` | `h540p_w720p` | `h720p_w960p` | `h1080p_w1440p` | `h1440p_w1920p`
  - It will be the encoderConfigs you can want to use for the Video Track.
  - Each encoder configuration takes into consideration the best suited framerates and bitrate combination based upon the resolution specified.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `false`
  - Allowed values : `front` | `environment`
  - It will specifiy whether to use fron or back camera for the video track.

- **optimizationMode**

  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

- **multiStream**

  - type: `boolean`
  - required: `false`
  - default: true
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

    :::info

    - For meetings with fewer than or equal to three participants, setting `multiStream:false` is regarded as best practice.
    - This parameter is only available from `v0.1.53`.

    :::

##### Returns

- `MediaStream`

#### Example

```javascript
import { createCameraVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});
```

### Using Custom Video Track

#### Custom Track while initializing the meeting

If you are passing `webcamEnabled: true` in the `config` of `MeetingProvider` and want to use custom tracks from start of the meeting, you can pass custom track in the `config` as shown below.

```javascript
import {
  createCameraVideoTrack,
  MeetingProvider,
} from "@videosdk.live/react-sdk";

function App() {
  const getTrack = async () => {
    const track = await createCameraVideoTrack({
      optimizationMode: "motion",
      encoderConfig: "h720p_w1280p",
      facingMode: "environment",
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
          micEnabled: true,
          webcamEnabled: true, //If true, it will use the passed custom track to turn webcam on

          //Pass the custom video track here
          customCameraVideoTrack: customTrack,
        }}
        token={token}
        reinitialiseMeetingOnConfigChange={true}
        joinWithoutUserInteraction={true}
      >
        <MeetingView />
      </MeetingProvider>
    )
  );
}
```

#### Custom Track with `enableWebcam()`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the `enableWebcam()` method of `useMeeting`.

:::note

Make sure to call `disableWebcam()` befor you create a new track as it may lead to unexpected behaviour.

:::

```javascript
import { createCameraVideoTrack, useMeeting } from "@videosdk.live/react-sdk";

let customTrack = await createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});

const { enableWebcam, toggleWebcam } = useMeeting();

enableWebcam(customTrack);

//or

toggleWebcam(customTrack);
```

:::note
Using custom video tracks is not just limited to the video tracks created using the `createCameraVideoTrack` method. You can use any `MediaStream` object as a replacement which can include a custom canvas track created by you.
:::

### Recommended Video Settings

Let us discuss a few recommended video settings you should use based on your use case.

1. If you are having **one to one calls** or group calls **upto 3 participants** where the users are in a confined environment i.e. they are usually taking the calls from the offices or any place with a **consistent network connection**, we would recommend you to use `h720p_w1280p` as your encoder config and `multiStream:false`.

2. If you are having **one to one calls** or group calls **upto 4 participants** where the users are in a not in confined environment i.e. they are usually taking the **calls on the go** with a **fluctuating network connection**, we would recommend you to use `h720p_w1280p` as your encoder config and `multiStream:true`.

3. If you are having group calls where the **participant count is more than 4**, then we recommend you to use `h360p_w640p` as encoder config and `multiStream:true`.

4. If your target audience **inclues majority of mobile users** only, you should consider using `h540p_w960p` as encoder config and `multiStream:true`.

5. If your target audience **a mix of mobile and desktop users**, you should set `h540p_w960` as encoder config for the desktop users and `h720p_w1280p` as encoder config for mobile users with `multiStream:true` in both the cases.

## Custom Audio Track

This feature can be used to add custom layers like background noise removal, echo cancellation, etc. on audio and send it to other participants.

### Creating a Custom Audio Track

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create audio track using different encoding parameters and noise cancellation configration.

#### Parameters

- **microphoneId**:

  - type: `String`
  - required: `false`
  - It will be the id of the mic from which the audio should be captured.

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `speech_standard`
  - Allowed values : `speech_low_quality` | `speech_standard` | `music_standard` | `standard_stereo` | `high_quality` | `high_quality_stereo`
  - It will be the encoder configuration you want to use for Audio Track.

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

##### Returns

- `MediaStream`

#### Example

```javascript
import { createMicrophoneAudioTrack } from "@videosdk.live/react-sdk";

let customTrack = await createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});
```

### Using Custom Audio Track

#### Custom Track while initializing the meeting

If you are passing `micEnabled: true` in the `config` of `MeetingProvider` and want to use custom tracks from start of the meeting, you can pass custom track in the `config` as shown below.

```javascript
import {
  createMicrophoneAudioTrack,
  MeetingProvider,
} from "@videosdk.live/react-sdk";

function App() {
  const getTrack = async () => {
    const track = await await createMicrophoneAudioTrack({
      encoderConfig: "high_quality",
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
          micEnabled: true, //If true, it will use the passed custom track to turn mic on
          webcamEnabled: true,

          //Pass the custom audio track here
          customMicrophoneAudioTrack: customTrack,
        }}
        token={token}
        reinitialiseMeetingOnConfigChange={true}
        joinWithoutUserInteraction={true}
      >
        <MeetingView />
      </MeetingProvider>
    )
  );
}
```

#### Custom Track with `unmuteMic()`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the `unmuteMic()` method of `useMeeting`.

You can also pass custom track in `toggleMic()` method of `useMeeting`.

:::note

Make sure to call `muteMic()` befor you create a new track as it may lead to unexpected behaviour.

:::

```javascript
import {
  createMicrophoneAudioTrack,
  useMeeting,
} from "@videosdk.live/react-sdk";

let customTrack = await createMicrophoneAudioTrack({
  encoderConfig: "high_quality",
  noiseConfig: {
    noiseSuppression: true,
    echoCancellation: true,
    autoGainControl: true,
  },
});

const { unmuteMic, toggleMic } = useMeeting();

unmuteMic(customTrack);

//or

toggleMic(customTrack);
```

### Recommended Audio Settings

Let us discuss a few recommended audio settings you should use based on your use case.

1. If you are having **normal video calls**, we would recommend you to use `speech_standard` encorder config with **no additional parameters** of `noiseConfig`.

2. If you are having video calls where the participants might be playing and sharing the music, you should consider using `music_standard` as encoder config.
