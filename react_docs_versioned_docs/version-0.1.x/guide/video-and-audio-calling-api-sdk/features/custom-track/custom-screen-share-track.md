---
title: Custom Screen Share Track
hide_title: false
hide_table_of_contents: false
description: Custom Screen Share Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Screen Share Track
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

# Custom Screen Share Track - React

We have introduced the ability to pass a custom Screen Share track while sharing the screen of participants. This feature can be used to add custom video encoder config, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and background removal & video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) and send it to other participants.

## Creating a Custom Screen Share Track

- You can create a Video Track using `createScreenShareVideoTrack()` method of `@videosdk.live/react-sdk`.
- This method can be used to create video track using different encoding parameters and optimization mode.

### Parameters

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
  - It will specify the optimization mode for the video track being generated.

#### Returns

- `MediaStream`

### Example

```javascript
import { createScreenShareVideoTrack } from "@videosdk.live/react-sdk";

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});
```

## Using Custom Screen Share Track

### Custom Track with `enableScreenShare()`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the `enableScreenShare()` method of `useMeeting`.

You can also pass custom track in `toggleScreenShare()` method of `useMeeting`.

:::note

Make sure to call `disableScreenShare()` before you create a new track as it may lead to unexpected behavior.

:::

```javascript
import {
  createScreenShareVideoTrack,
  useMeeting,
} from "@videosdk.live/react-sdk";

let customTrack = await createScreenShareVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h720p_15fps",
});

const { enableScreenShare, toggleScreenShare } = useMeeting();

enableScreenShare(customTrack);

//or

toggleScreenShare(customTrack);
```
