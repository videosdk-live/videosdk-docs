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

We have introduced the ability to pass a custom video track for the video of the participants. This feature can be used to add custom video encoder config, video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) and send it to other participants.

## Creating a Custom Video Track

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK`.
- This method can be used to create video track using different encoding parameters & camera facing mode.

### Parameters

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
  - Allowed values : `front` | `back`
  - It will specifiy wheater to use front or back camera for the video track.

- **context**

  - type: `Context`
  - required: `true`
  - Pass the Android Context for this parameter.

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
val videoCustomTrack: CustomStreamTrack = VideoSDK.createCameraVideoTrack("h720p_w1280p", "front", this)                
```

</TabItem>

<TabItem value="Java">

```javascript
CustomStreamTrack customStreamTrack = VideoSDK.createCameraVideoTrack("h720p_w960p", "front",this);                
```

</TabItem>

</Tabs>

## Using Custom Video Track

### Custom Track while initializing the meeting

If you are passing `webcamEnabled: true` in the `initMeeting` of `VideoSDK` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.


<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
    //..

    val customTracks: MutableMap<String, CustomStreamTrack> = HashMap()
    val videoCustomTrack: CustomStreamTrack =
    VideoSDK.createCameraVideoTrack("h720p_w1280p", "back", this)
    customTracks["video"] = videoCustomTrack

     // create a new meeting instance
    val meeting = VideoSDK.initMeeting(
      this@MainActivity, meetingId, participantName, 
      //MicEnabled 
      true,  
      //WebcamEnabled , If true, it will use the passed custom track to turn webcam on
      true,  
      // ParticipantId
      null,
      //Pass the custom tracks here
      customTracks
    )
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
protected void onCreate(Bundle savedInstanceState) {
    //..

    Map<String, CustomStreamTrack> customTracks = new HashMap<>();

    CustomStreamTrack videoCustomTrack = VideoSDK.createCameraVideoTrack("h720p_w1280p", "back",this);
    customTracks.put("video", videoCustomTrack);

    // create a new meeting instance
    Meeting meeting = VideoSDK.initMeeting(
        MainActivity.this, meetingId, participantName,
       //MicEnabled
        true,
        //WebcamEnabled , If true, it will use the passed custom track to turn webcam on
        true,
        // ParticipantId
        null,
        //Pass the custom tracks here
        customTracks
        );
}
```

</TabItem>

</Tabs>

### Custom Track with `enableWebcam()`

In order to switch tracks during the meeting, you have to pass the `CustomStreamTrack` in the `enableWebcam()` method of `Meeting`.

:::note

Make sure to call `disableWebcam()` before you create a new track as it may lead to unexpected behaviour.

:::

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val customStreamTrack: CustomStreamTrack = VideoSDK.createCameraVideoTrack("h720p_w1280p", "back", this)
meeting!!.enableWebcam(customStreamTrack)
```

</TabItem>

<TabItem value="Java">

```javascript
CustomStreamTrack customStreamTrack=VideoSDK.createCameraVideoTrack("h720p_w1280p", "back",this);
meeting.enableWebcam(customStreamTrack);
```

</TabItem>

</Tabs>
