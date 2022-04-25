---
title: Custom Video Track
hide_title: false
hide_table_of_contents: false
description: Custom Video Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Video Track
pagination_label: Custom Video Track
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

# Custom Video Track

We have introduced the ability to pass a custom video track for the video of the participants. This feature can be used to add custom video encoder config, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and background removal & video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) and send it to other participants.

## Creating a Custom Video Track

- You can create a Video Track using `createCameraVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

### Parameters

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

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `false`
  - Allowed values : `front` | `environment`
  - It will specifiy wheater to use fron or back camera for the video track.

- **optimizationMode**
  - type: `String`
  - required: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

#### Returns

- `MediaStreamTrack`

### Example

```javascript
import { createCameraVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_w1280p",
  facingMode: "environment",
});
```

## Using Custom Video Track

### Custom Track while initializing the meeting

If you are passing `webcamEnabled: true` in the `config` of `MeetingProvider` and want to use custom tracks from start of the meeting, you can pass custom track in the `config` as shown below.

```javascript
import { createCameraVideoTrack, MeetingProvider } from "@videosdk.live/react-sdk"

function App(){
  let customTrack = await createCameraVideoTrack({
    optimizationMode: "motion",
    encoderConfig: "h720p_w1280p",
    facingMode: "environment",
  });

  return (
    <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true, //If true, it will use the passed custom track to turn webcam on

          //Pass the custom video track here
          customCameraVideoTrack: customTrack
        }}
        token={token}
        reinitialiseMeetingOnConfigChange={true}
        joinWithoutUserInteraction={true}
      >
        <MeetingView/>
      </MeetingProvider>
  );
}
```

### Custom Track with `enableWebcam()`

In order to switch tracks during the meeting, you have to pass the `MediaStreamTrack` in the `enableWebcam()` method of `useMeeting`.

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
