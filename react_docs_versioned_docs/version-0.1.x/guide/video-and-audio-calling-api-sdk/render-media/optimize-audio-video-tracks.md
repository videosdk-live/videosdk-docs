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

While optimizing for the for the best vieweing experience it is necessary to fine-tune the audio and video tracks that are being used during the calls.

For the best fine-tuning experience we have introduced the ability to pass a custom video and audio track for the participant's media before and during the meeting.

1. [Custom Video Track](#custom-video-track)
2. [Custom Audio Track](#custom-audio-track)
3. [Custom Screen Share Track](#custom-screen-share-track)

## Custom Video Track

This feature can be used to add custom video encoder configurations, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and background removal & video filter from external libraries(e.g., [videosdk-media-processor](https://www.npmjs.com/package/@videosdk.live/videosdk-media-processor-web)) and send it to other participants.

### `How to Create Custom Video Track ?`

- You can create a Video Track using `createCameraVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode and return `MediaStream`.

#### Example

```javascript
import { createCameraVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createCameraVideoTrack({
  // highlight-next-line
  // It will be the id of the camera from which the video should be captured.
  cameraId:"camera-id" // OPTIONAL

  // highlight-next-line
  // It will specifiy the optimization mode for the video track being generated.
  optimizationMode: "motion", // "text" | "detail",  Default : "motion"

  // highlight-next-line
  // This will accept the resolution (heigt x width) of video yo want to capture.
  encoderConfig: "h480p_w640p", // "h540p_w960p" | "h720p_w1280p" ... // Default : "h360p_w640p"

  // highlight-next-line
  // For Mobile browser It will specifiy whether to use front or back camera for the video track.
  facingMode: "environment", // "front",  Default : "environment"

  // highlight-next-line
  // We can discuss this parameter in next step.
  multiStream:true // false,  Default : true

});
```

##### What is `multiStream`?

- It will specifiy if the stream should send multiple resolution layers or single resolution layer.

**`multiStream : true`** By default, VideoSDK sends multiple resolution video streams to the server (whether you are using custom video track or not), For instance, user device capabilty is 720p, so VideoSDK sends 720p along with 640p and 480p streams. This allows VideoSDK to deliver the appropriate stream to each participant based on their network bandwidth.

<center>

![Multi Stream False](/img/multistream_true.png)

</center>

**`multiStream : false`** If you want to restric the VideoSDK to to send only one stream to maintain quality, you can set `multiStream` to `false`.

<center>

![Multi Stream False](/img/multistream_false.png)

</center>

:::caution
The behavior of the Custom track would depend on the specific device and its capabilities. If the device's hardware and software can support a 1080p `encoderConfig`, then it may be able to use it, even if its maximum capabilities are 720p. However, if the device is not capable of supporting a 1080p `encoderConfig`, it may default to a lower resolution `encoderConfig`, such as 640p.
:::

<!-- #### Parameters

- **cameraId**:

  - type: `String`
  - required: `false`
  - It will be the id of the camera from which the video should be captured.

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h360p_w640p`
  - Allowed values : `h90p_w160p` | `h180p_w320p` | `h216p_w384p` | `h360p_w640p` | `h540p_w960p` | `h720p_w1280p` | `h1080p_w1920p` | `h1440p_w2560p` | `h2160p_w3840p` | `h120p_w160p` | `h180p_w240p` | `h240p_w320p` | `h360p_w480p` | `h480p_w640p` | `h540p_w720p` | `h720p_w960p` | `h1080p_w1440p` | `h1440p_w1920p`

  - Allowed values : `h180p_w320p` | `h360p_w640p` | `h540p_w960p` | `h720p_w1280p` | `h1080p_w1920p` | `h1440p_w2560p` | `h2160p_w3840p` | `h180p_w240p` | `h360p_w480p` | `h540p_w720p` | `h720p_w960p` | `h1080p_w1440p` | `h1440p_w1920p`
  - These parameter will allow you to change the resolution of the video tracks that are created along with the coresponding frame rate.
  - Each encoder configuration can influences several factors including the desired output quality, resolution, frame rate, and bit rate. The appropriate combination of these parameters will depend on the specific use case and requirements of the application.

  - In general, higher resolutions and frame rates will require higher bit rates in order to maintain a desirable level of video quality. Similarly, lower resolutions and frame rates may be adequately served by lower bit rates. However, this is not always the case and other factors such as the complexity of the video content, encoding algorithm, and the available network bandwidth should also be considered when choosing the appropriate combination of parameters.

  - Take a [look at the recommended settings](#recommended-video-settings) to know better which configuration suites your use-case.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `false`
  - Allowed values : `front` | `environment`
  - It will specifiy whether to use front or back camera for the video track.

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
``` -->

### `How to Setup Custom Video Track ?`

The custom track can be set up both before and after the initializatio of the meeting.

1. [Setup Custom Track while initialization of the meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setup Cutom Track with with methods](#2-setup-cutom-track-with-methods)

##### 1. Setup Custom Track while initialization of the meeting

If you are passing `webcamEnabled: true` in the `config` of `MeetingProvider` and want to use custom tracks from start of the meeting, you can pass custom track in the `config` as shown below.

:::caution
Custom Track will not apply on `webcamEnabled: false` configuration.
:::

##### Example

```javascript
import {
  createCameraVideoTrack,
  MeetingProvider,
} from "@videosdk.live/react-sdk";

function App() {
  const getTrack = async () => {
    const track = await createCameraVideoTrack({
      optimizationMode: "motion",
      encoderConfig: "h720p_w960p",
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
          //highlight-start
          //If true, it will use the passed custom track to turn webcam on
          webcamEnabled: true,
          //Pass the custom video track here
          customCameraVideoTrack: customTrack,
          //highlight-end
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

#### 2. Setup Cutom Track with methods

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the **`enableWebcam()` or `toggleWebcam()`** method of `useMeeting`.

:::caution
Make sure to call `disableWebcam()` befor you create a new track as it may lead to unexpected behaviour.
:::

##### Example

```javascript
import { createCameraVideoTrack, useMeeting } from "@videosdk.live/react-sdk";

const MeetingControls = () => {
  const { localWebcamOn, enableWebcam, disableWebcam, toggleWebcam } =
    useMeeting();

  const handleToggleWebcam = async () => {
    if (localWebcamOn) {
      toggleWebcam();
    } else {
      //highlight-start
      let customTrack = await createCameraVideoTrack({
        optimizationMode: "motion",
        encoderConfig: "h720p_w960p",
        facingMode: "environment",
        multiStream: false,
      });

      toggleWebcam(customTrack);
      //highlight-end
    }
  };

  const handleEnableWebcam = async () => {
    if (localWebcamOn) {
      disableWebcam();
    } else {
      //highlight-start
      let customTrack = await createCameraVideoTrack({
        optimizationMode: "motion",
        encoderConfig: "h720p_w960p",
        facingMode: "environment",
        multiStream: false,
      });

      enableWebcam(customTrack);
      //highlight-end
    }
  };

  return (
    <>
      <button onClick={handleToggleWebcam}>Toggle Webcam</button>
      <button onClick={handleEnableWebcam}>Enable Webcam</button>
    </>
  );
};
```

:::note
Using custom video tracks is not just limited to the video tracks created using the `createCameraVideoTrack` method. You can use any `MediaStream` object as a replacement which can include a custom canvas track created by you.
:::

### `Understand use-case wise custom video track`

Before jumping to the use case lets first understand `multiStream` in Custom Video Track

1. One to One call
1. Conference Call (More than 2 Participant)

#### One to One call

First of all lets undertand the

<!-- ### Recommended Video Settings

Let us discuss a few recommended video settings you should use based on your use case.

1. If you are having **one to one calls** or group calls **upto 3 participants** where the users are in a confined environment i.e. they are usually taking the calls from the offices or any place with a **consistent network connection**, we would recommend you to use `h720p_w1280p` as your encoder config and `multiStream:false`.

2. If you are having **one to one calls** or group calls **upto 4 participants** where the users are in a not in confined environment i.e. they are usually taking the **calls on the go** with a **fluctuating network connection**, we would recommend you to use `h720p_w1280p` as your encoder config and `multiStream:true`.

3. If you are having group calls where the **participant count is more than 4**, then we recommend you to use `h360p_w640p` as encoder config and `multiStream:true`.

4. If your target audience **inclues majority of mobile users** only, you should consider using `h540p_w960p` as encoder config and `multiStream:true`.

5. If your target audience **a mix of mobile and desktop users**, you should set `h540p_w960` as encoder config for the desktop users and `h720p_w1280p` as encoder config for mobile users with `multiStream:true` in both the cases. -->

<!-- ## Custom Audio Track

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
          //highlight-next-line
          micEnabled: true, //If true, it will use the passed custom track to turn mic on
          webcamEnabled: true,
          //highlight-start
          //Pass the custom audio track here
          customMicrophoneAudioTrack: customTrack,
          //highlight-end
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

#### Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the **`unmuteMic()` or `toggleMic()`** method of `useMeeting`.

:::note

Make sure to call `muteMic()` befor you create a new track as it may lead to unexpected behaviour.

:::

```javascript
import {
  createMicrophoneAudioTrack,
  useMeeting,
} from "@videosdk.live/react-sdk";

const MeetingControls = () => {

  const { localMicOn, unmuteMic, muteMic, toggleMic } = useMeeting();

  const handleToggleMic = () =>{
    if(localMicOn){
      toggleMic();
    }else{
      let customTrack = await createMicrophoneAudioTrack({
        encoderConfig: "speech_standard",
        noiseConfig: {
          noiseSuppression: true,
          echoCancellation: true,
          autoGainControl: true,
        },
      });

      toggleMic(customTrack);
    }
  }

  const handleUnmuteMic = () =>{
    if(localMicOn){
      muteMic();
    }

    let customTrack = await createMicrophoneAudioTrack({
      encoderConfig: "speech_standard",
      noiseConfig: {
        noiseSuppression: true,
        echoCancellation: true,
        autoGainControl: true,
      },
    });

    unmuteMic(customTrack);
  }

  return <>
    <button onClick={handleToggleMic}>Toggle Mic</button>
    <button onClick={handleUnmuteMic}>Unmute Mic</button>
  </>
}
```

### Recommended Audio Settings

Let us discuss a few recommended audio settings you should use based on your use case.

1. If you are having **normal video calls**, we would recommend you to use `speech_standard` encorder config with **no additional parameters** of `noiseConfig`.

2. If you are having video calls where the participants might be playing and sharing the music, you should consider using `music_standard` as encoder config.

## Custom Screen Share Track

This feature can be used to custom resolution screenshare streams with enhanced optimization mode for specific use-case and send it to other participants.

### Creating a Custom Screen Share Track

- You can create a Video Track using `createScreenShareVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters and optimization mode.

#### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h720p_15fps`
  - Allowed values : `h360p_30fps` | `h720p_5fps` | `h720p_15fps` | `h1080p_15fps` | `h1080p_30fps`
  - It will be the encoderConfigs you can want to use for the Video Track.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **optimizationMode**
  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

##### Returns

- `MediaStream`

#### Example

```javascript
import { createScreenShareVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});
```

### Using Custom Screen Share Track

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the **`enableScreenShare()` or `toggleScreenShare()`** method of `useMeeting`.

:::note

Make sure to call `disableScreenShare()` befor you create a new track as it may lead to unexpected behaviour.

:::

```javascript
import {
  createScreenShareVideoTrack,
  useMeeting,
} from "@videosdk.live/react-sdk";

const MeetingControls = () => {

  const { localScreenShareOn, enableScreenShare,disableScreenShare, toggleScreenShare } = useMeeting();

  const handleToggleScreenShare = () =>{
    if(localScreenShareOn){
      toggleScreenShare();
    }else{
      let customTrack = await createScreenShareVideoTrack({
        optimizationMode: "motion",
        encoderConfig: "h720p_15fps",
      });

      toggleScreenShare(customTrack);
    }
  }

  const handleEnableScreenShare = () =>{
    if(localScreenShareOn){
      disableScreenShare();
    }

    let customTrack = await createScreenShareVideoTrack({
      optimizationMode: "motion",
      encoderConfig: "h720p_15fps",
    });

    enableScreenShare(customTrack);
  }

  return <>
    <button onClick={handleToggleScreenShare}>Toggle ScreenShare</button>
    <button onClick={handleEnableScreenShare}>Enable ScreenShare</button>
  </>
}
```

### Recommended Screen Share Settings

Let us discuss a few recommended screen share settings you should use based on your use case.

1. If you want to do screeen share where there is high motion involved like screen share of video, you should use `optimizationMode` as `motion`.

2. If you want to do screeen share where there is high amount of text and low motion like screen share of presentation, you should use `optimizationMode` as `text`. -->
