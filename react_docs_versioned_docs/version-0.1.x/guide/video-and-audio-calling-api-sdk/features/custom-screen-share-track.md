---
title: Custom Screen Share Track
hide_title: false
hide_table_of_contents: false
description: Custom Screen Share Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Screen Share Track (BETA)
pagination_label: Custom Screen Share Track
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

# Custom Screen Share Track

We have introduced the ability to pass custom Screen Share track while sharing the screen of participants. These feature can be used to add custom layers like filters or background removal on video and then send to other particiapnts.

## Creating a Custom Screen Share Track

- You can create a Video Track using `createScreenShareVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters and optimization mode.

### Parameters

- **encoderConfig**:
  - `type`: `String`
  - `required`: `false`
  - `default`: `h360p_w640p`
  - It will be the encoderConfigs you can want to use for this Video Track. 

- **optimizationMode**
  - `type`: `String`
  - `required`: `false`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

#### Returns

- `MediaStreamTrack`

### Example

```javascript
import { createScreenShareVideoTrack } from "@videosdk.live/react-sdk"

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});
```

## Using Custom Video Track

In order to use the custom tracks you create, you have to pass the `MediaStreamTrack` in the `enableScreenShare()` method of `useMeeting`. You can also pass custom track in `toggleScreenShare()` method of `useMeeting` , so if the this operation turns the screen share on it will use the provided custom track.

```javascript
import { createScreenShareVideoTrack, useMeeting } from "@videosdk.live/react-sdk"

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});

const { enableScreenShare, toggleScreenShare }  = useMeeting();

enableScreenShare(customTrack);

//or

toggleScreenShare(customTrack);
```