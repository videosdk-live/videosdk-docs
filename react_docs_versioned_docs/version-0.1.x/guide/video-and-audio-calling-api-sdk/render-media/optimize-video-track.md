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

:::caution
The capabilities of the device have a significant impact on how custom track configurations behave. Assuming a case where you set encoder configuration to 1080p but the webcam only supports 720p, then encoder configuration will automatically switch to the highest resolution that the device can handle, which is 720p.
:::

##### What is `optimizationMode`?

- It will specifiy the optimization mode for the video track being generated.

- `motion` : This type of track should more focus on motion video. For example, webcam video, movies or video games.

  - This type of track will degrade `resolution` in order to maintain `frame rate`.

- `text` : This type of track should more focus on significant sharp edges and areas of consistent color that can change frequently. For example, presentations or web pages with text content.

  - This type of track will degrade `frame rate` in order to maintain `resolution`.

- `detail` : This type of track should more focus on details of the video. For example, presentations, painting or line art.

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

:::danger
`setQuality` would not have any effect if multiStream is set to `false`.
:::

### `How to Setup Custom Video Track ?`

The custom track can be set up both before and after the initialization of the meeting.

1. [Setup Custom Track while initialization of the meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setup Custom Track with methods](#2-setup-custom-track-with-methods)

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
      >
        <MeetingView />
      </MeetingProvider>
    )
  );
}
```

#### 2. Setup Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the **`enableWebcam()` or `toggleWebcam()`** method of `useMeeting`.

:::tip
Make sure to call `disableWebcam()` before you create a new track as it may lead to unexpected behavior.
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

:::info
Using custom video tracks is not just limited to the video tracks created using the `createCameraVideoTrack` method. You can use any `MediaStream` object as a replacement which can include a [custom canvas track created by you](https://developer.chrome.com/blog/capture-stream/).
:::

### `Which Configuration is suitable for me ?`

In this section, we will understand participant size and platform wise `encoder(Resolution)` and `multiStream` configuration.

##### 1. For Desktop Browser

![web_browser](/img/web_browser.png)

##### 2. For Mobile Browser

![web_browser](/img/mobile_browser.png)

##### 3. For Desktop + Mobile Browser

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

Make sure to call `disableScreenShare()` before you create a new track as it may lead to unexpected behavior.

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

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Custom Video Track](/react/api/sdk-reference/custom-tracks#custom-video-track)
- [Custom Screen Share Track](/react/api/sdk-reference/custom-tracks#custom-screen-share-track)
