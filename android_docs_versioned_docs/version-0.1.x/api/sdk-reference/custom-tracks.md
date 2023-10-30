---
title: Custom Tracks
hide_title: true
hide_table_of_contents: false
description: Custom Video Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Tracks
pagination_label: Custom Tracks
keywords:
  - custom Track
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

## Custom Video Track - Android

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK`.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `true`
  - default: `h480p_w720p`
  - You can chose from the below mentioned list of values for the encoder config.

| Encoder Config | Resolution | Frame Rate |   Bitrate    |
| -------------- | :--------: | :--------: | :----------: |
| h144p_w176p    |  176x144   |   15 fps   | 120000 kbps  |
| h240p_w320p    |  320x240   |   15 fps   | 150000 kbps  |
| h480p_w640p    |  640x480   |   25 fps   | 300000 kbps  |
| h480p_w720p    |  720x480   |   30 fps   | 450000 kbps  |
| h720p_w960p    |  720x960   |   30 fps   | 1500000 kbps |
| h1080p_w1440p  | 1080x1440  |   30 fps   | 2500000 kbps |
| h720p_w1280p   |  720x1280  |   30 fps   | 2000000 kbps |

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `true`
  - Allowed values : `front` | `back`
  - It will specifiy wheater to use front or back camera for the video track.

- **optimizationMode**

  - type: `CustomStreamTrack.VideoMode`
  - required: `true`
  - Allowed values: `motion` | `text` | `detail`
  - It will specifiy the optimization mode for the video track being generated.

- **multiStream**:

  - type: `boolean`
  - required: `true`
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

- **context**:

  - type: `Context`
  - required: `true`
  - Pass the Android Context for this parameter.

- **observer**:

  - type: `CapturerObserver`
  - required: `false`
  - If you want to use video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) then pass instance of `CapturerObserver` in this parameter.

:::note

For Banuba integraion with VideoSDK, please visit [Banuba Intergation with VideoSDK](/android/guide/video-and-audio-calling-api-sdk/plugins/banuba-integration)

:::

:::info

- To learn more about optimizations and best practices for using custom video tracks, [follow this guide](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

:::

#### Returns

- `CustomStreamTrack`

### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val videoCustomTrack: CustomStreamTrack = VideoSDK.createCameraVideoTrack("h720p_w960p", "front", CustomStreamTrack.VideoMode.MOTION, false, this)
```

</TabItem>

<TabItem value="Java">

```javascript
CustomStreamTrack customStreamTrack = VideoSDK.createCameraVideoTrack("h720p_w960p", "front", CustomStreamTrack.VideoMode.MOTION, false, this);
```

</TabItem>

</Tabs>

## Custom Audio Track - Android

- You can create a Audio Track using `createAudioTrack()` method of `VideoSDK`.
- This method can be used to create audio track using different encoding parameters.

### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `true`
  - default: `speech_standard`
  - You can chose from the below mentioned list of values for the encoder config.

| Encoder Config      | Bitrate  | Auto Gain | Echo Cancellation | Noise Suppression |
| ------------------- | :------: | :-------: | :---------------: | :---------------: |
| speech_low_quality  | 16 kbps  |   TRUE    |       TRUE        |       TRUE        |
| speech_standard     | 24 kbps  |   TRUE    |       TRUE        |       TRUE        |
| music_standard      | 32 kbps  |   FALSE   |       FALSE       |       FALSE       |
| standard_stereo     | 64 kbps  |   FALSE   |       FALSE       |       FALSE       |
| high_quality        | 128 kbps |   FALSE   |       FALSE       |       FALSE       |
| high_quality_stereo | 192 kbps |   FALSE   |       FALSE       |       FALSE       |

- **context**

  - type: `Context`
  - required: `true`
  - Pass the Android Context for this parameter.

#### Returns

- `CustomStreamTrack`

### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
val audioCustomTrack: CustomStreamTrack = VideoSDK.createAudioTrack("speech_standard",this)
```

</TabItem>

<TabItem value="Java">

```js
CustomStreamTrack audioCustomTrack=VideoSDK.createAudioTrack("speech_standard", this);
```

</TabItem>

</Tabs>

## Custom Screen Share Track - Android

- You can create a Screen Share track using `createScreenShareVideoTrack()` method of `VideoSDK`.
- This method can be used to create screen share track using different encoding parameters.

### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `true`
  - default: `h720p_15fps`
  - You can chose from the below mentioned list of values for the encoder config.

| Encoder Config | Resolution | Frame Rate |   Bitrate    |
| -------------- | :--------: | :--------: | :----------: |
| h360p_30fps    |  640x360   |   3 fps    | 200000 kbps  |
| h720p_5fps     |  1280x720  |   5 fps    | 400000 kbps  |
| h720p_15fps    |  1280x720  |   15 fps   | 1000000 kbps |
| h1080p_15fps   | 1920x1080  |   15 fps   | 1500000 kbps |
| h1080p_30fps   | 1920x1080  |   15 fps   | 1000000 kbps |

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **data**

  - type: `Intent`
  - required: `true`
  - It is Intent received from onActivityResult when user provide permission for ScreenShare.

- **context**

  - type: `Context`
  - required: `true`
  - Pass the Android Context for this parameter.

- **listener**
  - type: `CustomTrackListener`
  - required: `true`
  - Callback to this listener will be made when track is ready with CustomTrack as parameter.

### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
// data is received from onActivityResult method.
VideoSDK.createScreenShareVideoTrack("h720p_15fps", data, this) { track ->
    meeting!!.enableScreenShare(track)
}
```

</TabItem>

<TabItem value="Java">

```javascript
// data is received from onActivityResult method.
VideoSDK.createScreenShareVideoTrack("h720p_15fps", data, this, (track)->{
    meeting.enableScreenShare(track);
});
```

</TabItem>

</Tabs>
