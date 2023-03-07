---
title: Optimize Video Tracks | VideoSDK Docs
hide_title: false
hide_table_of_contents: false
description: Optimize Video Tracks features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Optimize Video Tracks
pagination_label: Optimize Video Tracks
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

# Optimize Video Tracks

While optimizing for the best viewing experience, it is necessary to fine-tune the video tracks that are being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom video track for the participant's media before and during the meeting.

1. [Custom Video Track](#custom-video-track)
2. [Custom Screen Share Track](#custom-screen-share-track)

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
  // We will discuss this parameter in next step.
  optimizationMode: "motion", // "text" | "detail",  Default : "motion"

  // highlight-next-line
  // This will accept the resolution (height x width) of video you want to capture.
  encoderConfig: "h480p_w640p", // "h540p_w960p" | "h720p_w1280p" ... // Default : "h360p_w640p"

  // highlight-next-line
  // For Mobile browser It will specifiy whether to use front or back camera for the video track.
  facingMode: "environment", // "front",  Default : "environment"

  // highlight-next-line
  // We will discuss this parameter in next step.
  multiStream:true // false,  Default : true

});
```

##### What is `optimizationMode`?

- It will specifiy the optimization mode for the video track being generated.

- `motion` : This type of track should more fcous on motion video. For example, webcam video, movies or video games.

  - This type of track will degrade `resolution` in order to maintain `frame rate`.

- `text` : This type of track should more fcous on significant sharp edges and areas of consistent color that can change frequently. For example, presentations or web pages with text content.

  - This type of track will degrade `frame rate` in order to maintain `resolution`.

- `detail` : This type of track should more fcous on details of the video. For example, presentations, painting or line art.

  - This type of track will degrade `frame rate` in order to maintain `resolution`.

##### What is `multiStream`?

- It will specifiy if the stream should send multiple resolution layers or single resolution layer.

**`multiStream : true`** By default, VideoSDK sends multiple resolution video streams to the server (whether you are using custom video track or not), For instance, user device capabilty is 720p, so VideoSDK sends 720p along with 640p and 480p streams. This allows VideoSDK to deliver the appropriate stream to each participant based on their network bandwidth.

<center>

![Multi Stream False](/img/multistream_true.png)

</center>

**`multiStream : false`** If you want to restrict the VideoSDK to send only one stream to maintain quality, you can set `multiStream` to `false`.

<center>

![Multi Stream False](/img/multistream_false.png)

</center>

:::caution
The capabilities of the device have a significant impact on how custom track configurations behave. Assuming a case where you set encoder configuration to 1080p but the webcam only supports 720p, then encoder configuration will automatically switch to the highest resolution that the device can handle, which is 720p.
:::

### `How to Setup Custom Video Track ?`

The custom track can be set up both before and after the initialization of the meeting.

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

### `Which Configuration is suitable for me ?`

In this section, we will understand participant size and platform wise `encoder(Resolution)` and `multiStream` configuration.

##### 1. For Desktop Browser

![web_browser](/img/web_browser.png)

##### 2. For Mobile Browser

![web_browser](/img/mobile_browser.png)

##### 3. For Dektop + Mobile Browser

![web_browser](/img/mobile+web.png)

## Custom Screen Share Track

This feature can be used to customise screenshare streams with enhanced optimization mode and predefined encoderConfig(Resolution + FPS) for specific use-case and send it to other participants.

### `How to Create Custom Screen Share Track ?`

- You can create a Video Track using `createScreenShareVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters and optimization mode.

#### Example

```javascript
import { createScreenShareVideoTrack } from "@videosdk.live/react-sdk";

let customShareTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion", // "text" | "detail",  Default : "motion"

  // This will accept the  height & FPS of video you want to capture.
  encoderConfig: "h720p_15fps", //  `h360p_30fps` | `h1080p_30fps` // Default : `h720p_15fps`
});
```

You can learn about `optimizationMode` from here [What is optimizationMode ?](#what-is-optimizationmode)

### `How to Setup Custom Screen Share Track ?`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the **`enableScreenShare()` or `toggleScreenShare()`** method of `useMeeting`.

:::note

Make sure to call `disableScreenShare()` befor you create a new track as it may lead to unexpected behaviour.

:::

##### Example

```javascript
import {
  createScreenShareVideoTrack,
  useMeeting,
} from "@videosdk.live/react-sdk";

const MeetingControls = () => {
  const {
    localScreenShareOn,
    enableScreenShare,
    disableScreenShare,
    toggleScreenShare,
  } = useMeeting();

  const handleToggleScreenShare = async () => {
    if (localScreenShareOn) {
      toggleScreenShare();
    } else {
      let customTrack = await createScreenShareVideoTrack({
        optimizationMode: "motion",
        encoderConfig: "h720p_15fps",
      });

      toggleScreenShare(customTrack);
    }
  };

  const handleEnableScreenShare = async () => {
    if (localScreenShareOn) {
      disableScreenShare();
    }

    let customTrack = await createScreenShareVideoTrack({
      optimizationMode: "motion",
      encoderConfig: "h720p_15fps",
    });

    enableScreenShare(customTrack);
  };

  return (
    <>
      <button onClick={handleToggleScreenShare}>Toggle ScreenShare</button>
      <button onClick={handleEnableScreenShare}>Enable ScreenShare</button>
    </>
  );
};
```

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

2. If you are having video calls where the participants might be playing and sharing the music, you should consider using `music_standard` as encoder config. -->
