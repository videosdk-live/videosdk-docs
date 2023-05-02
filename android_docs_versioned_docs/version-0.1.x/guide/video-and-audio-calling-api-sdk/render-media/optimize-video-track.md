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

This feature can be used to add custom video encoder configurations, optimization mode (whether you want to focus on **motion**, **text** or **detail** of the video) and background removal & video filter from external SDK(e.g., [Banuba](https://www.banuba.com/))and send it to other participants.

### `How to Create Custom Video Track ?`

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK`.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode and return `CustomStreamTrack`.

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val videoCustomTrack: CustomStreamTrack = VideoSDK.createCameraVideoTrack(
  
  // highlight-next-line
  // This will accept the resolution (height x width) of video you want to capture.
  "h480p_w640p", // "h720p_w960p" | "h720p_w1280p" ... // Default : "h480p_w640p"

  // highlight-next-line
  // It will specifiy whether to use front or back camera for the video track.
  "front", "back",  Default : "front"

  // highlight-next-line
  // We will discuss this parameter in next step.
  CustomStreamTrack.VideoMode.MOTION, // CustomStreamTrack.VideoMode.TEXT, CustomStreamTrack.VideoMode.DETAIL ,  Default : CustomStreamTrack.VideoMode.MOTION

  // highlight-next-line
  // multiStream - we will discuss this parameter in next step.
  true, // false

  // highlight-next-line
  // Pass Context
  this,
  
  // highlight-next-line
  // This is Optional parameter. We will discuss this parameter in next step.
  observer)
```

</TabItem>

<TabItem value="Java">

```javascript
CustomStreamTrack customStreamTrack = VideoSDK.createCameraVideoTrack(

  // highlight-next-line
  // This will accept the resolution (height x width) of video you want to capture.
  "h480p_w640p", // "h720p_w960p" | "h720p_w1280p" ... // Default : "h480p_w640p"

  // highlight-next-line
  // It will specifiy whether to use front or back camera for the video track.
  "front", // "back,  Default : "front""

  // highlight-next-line
  // We will discuss this parameter in next step.
  CustomStreamTrack.VideoMode.MOTION, // CustomStreamTrack.VideoMode.TEXT, CustomStreamTrack.VideoMode.DETAIL ,  Default : CustomStreamTrack.VideoMode.MOTION

  // highlight-next-line
  // multiStream - we will discuss this parameter in next step.
  true, // false

  // highlight-next-line
  // Pass Context
  this
  
  // highlight-next-line
  // This is Optional parameter. We will discuss this parameter in next step.
  observer);
```

</TabItem>

</Tabs>

:::caution
The capabilities of the device have a significant impact on how custom track configurations behave. Assuming a case where you set encoder configuration to 1080p but the camera only supports 720p, then encoder configuration will automatically switch to the highest resolution that the device can handle, which is 720p.
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

##### What is `observer`?

- If you want to use video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) then pass instance of `CapturerObserver` in this parameter. 

:::note

For Banuba integraion with VideoSDK, please visit [Banuba Intergation with VideoSDK](../plugins/banuba-integration)

:::

### `How to Setup Custom Video Track ?`

The custom track can be set up both before and after the initialization of the meeting.

1. [Setup Custom Track while initialization of the meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setup Custom Track with methods](#2-setup-custom-track-with-methods)

##### 1. Setup Custom Track while initialization of the meeting

If you are passing `webcamEnabled: true` in the `initMeeting` of `VideoSDK` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.

:::caution
Custom Track will not apply on `webcamEnabled: false` configuration.
:::

##### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
  //..

  //highlight-start
  val customTracks: MutableMap<String, CustomStreamTrack> = HashMap()
  val videoCustomTrack: CustomStreamTrack =
  VideoSDK.createCameraVideoTrack("h720p_w960p", "front", CustomStreamTrack.VideoMode.MOTION, false, this)
  customTracks["video"] = videoCustomTrack  //Key must be "video"
  //highlight-end

  // create a new meeting instance
  val meeting = VideoSDK.initMeeting(
    this@MainActivity, meetingId, participantName,
    //MicEnabled
    true,
    //WebcamEnabled , If true, it will use the passed custom track to turn webcam on
    true,
    // ParticipantId
    null,
    // Mode
    null,
    // MultiStream
    false,
    //Pass the custom tracks here
    //highlight-next-line
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

  //highlight-start
  Map<String, CustomStreamTrack> customTracks = new HashMap<>();
  CustomStreamTrack videoCustomTrack = VideoSDK.createCameraVideoTrack("h720p_w960p", "front", CustomStreamTrack.VideoMode.MOTION, false, this);
  customTracks.put("video", videoCustomTrack);  //Key must be "video"
  //highlight-end

  // create a new meeting instance
  Meeting meeting = VideoSDK.initMeeting(
    MainActivity.this, meetingId, participantName,
    //MicEnabled
    true,
    //WebcamEnabled , If true, it will use the passed custom track to turn webcam on
    true,
    // ParticipantId
    null,
    // Mode
    null,
    // MultiStream
    false,
    //Pass the custom tracks here
    //highlight-next-line
    customTracks
    );
}
```

</TabItem>

</Tabs>

#### 2. Setup Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `CustomStreamTrack` in the `enableWebcam()` method of `Meeting`.

:::tip
Make sure to call `disableWebcam()` before you create a new track as it may lead to unexpected behavior.
:::

##### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val customStreamTrack: CustomStreamTrack = VideoSDK.createCameraVideoTrack("h720p_w960p", "back", CustomStreamTrack.VideoMode.MOTION, false, this)
meeting!!.enableWebcam(customStreamTrack)
```

</TabItem>

<TabItem value="Java">

```javascript
CustomStreamTrack customStreamTrack=VideoSDK.createCameraVideoTrack("h720p_w960p", "back", CustomStreamTrack.VideoMode.MOTION, false, this);
meeting.enableWebcam(customStreamTrack);
```

</TabItem>

</Tabs>

### `Which Configuration is suitable for Device ?`

In this section, we will understand participant size wise `encoder(Resolution)` and `multiStream` configuration.

<center>
<img src='https://cdn.videosdk.live/website-resources/docs-resources/mobile_device_config.png' />
</center>

## Custom Screen Share Track

This feature can be used to customise screenshare streams with enhanced optimization mode and predefined encoderConfig(Resolution + FPS) for specific use-case and send it to other participants.

### `How to Create Custom Screen Share Track ?`

- You can create a Screen Share track using `createScreenShareVideoTrack()` method of `VideoSDK`.
- This method can be used to create video track using different encoding parameters and optimization mode.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
// data is received from onActivityResult method.
VideoSDK.createScreenShareVideoTrack(

  //highlight-next-line
  // This will accept the  height & FPS of video you want to capture.
  "h720p_15fps", //  `h360p_30fps` | `h1080p_30fps` // Default : `h720p_15fps`

  //highlight-next-line
  // It is Intent received from onActivityResult when user provide permission for ScreenShare.
  data, 

  //highlight-next-line
  // Pass Conext
  this) 

  //highlight-next-line
  //Callback to this listener will be made when track is ready with CustomTrack as parameter
  { 
    track ->
    meeting!!.enableScreenShare(track)
  }
```

</TabItem>

<TabItem value="Java">

```javascript
// data is received from onActivityResult method.
VideoSDK.createScreenShareVideoTrack(
  //highlight-next-line
  // This will accept the  height & FPS of video you want to capture.
  "h720p_15fps", //  `h360p_30fps` | `h1080p_30fps` // Default : `h720p_15fps`

  /highlight-next-line
  // It is Intent received from onActivityResult when user provide permission for ScreenShare
  data, 

  //highlight-next-line
  // Pass Conext
  this, 

  //highlight-next-line
  //Callback to this listener will be made when track is ready with CustomTrack as parameter
  (track)->{meeting.enableScreenShare(track);}
);
```

</TabItem>

</Tabs>

### `How to Setup Custom Screen Share Track ?`

In order to switch tracks during the meeting, you have to pass the `CustomStreamTrack` in the `enableScreenShare()` method of `Meeting`.

:::note

Make sure to call `disableScreenShare()` before you create a new track as it may lead to unexpected behavior.

:::

##### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
@TargetApi(21)
private fun askPermissionForScreenShare() {
  val mediaProjectionManager = application.getSystemService<Any>(
      Context.MEDIA_PROJECTION_SERVICE
  ) as MediaProjectionManager
  startActivityForResult(
      mediaProjectionManager.createScreenCaptureIntent(), CAPTURE_PERMISSION_REQUEST_CODE
  )
}

@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
  super.onActivityResult(requestCode, resultCode, data)
  if (requestCode != CAPTURE_PERMISSION_REQUEST_CODE) return
  if (resultCode == RESULT_OK) {
    //highlight-start
    VideoSDK.createScreenShareVideoTrack("h720p_15fps", data, this) { track ->
        meeting!!.enableScreenShare(track)
    }
    //highlight-end
  }
}

```

</TabItem>

<TabItem value="Java">

```javascript
@TargetApi(21)
private void askPermissionForScreenShare() {
  MediaProjectionManager mediaProjectionManager =
      (MediaProjectionManager) getApplication().getSystemService(
          Context.MEDIA_PROJECTION_SERVICE);
  startActivityForResult(
      mediaProjectionManager.createScreenCaptureIntent(), CAPTURE_PERMISSION_REQUEST_CODE);
}

@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
  super.onActivityResult(requestCode, resultCode, data);
  if (requestCode != CAPTURE_PERMISSION_REQUEST_CODE)
      return;
  if (resultCode == Activity.RESULT_OK) {
    //highlight-start
    VideoSDK.createScreenShareVideoTrack("h720p_15fps", data, this, (track)->{
        meeting.enableScreenShare(track);
    });
    //highlight-end
  }
}

```

</TabItem>

</Tabs>

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Custom Video Track](/react/api/sdk-reference/custom-tracks#custom-video-track)
- [Custom Screen Share Track](/react/api/sdk-reference/custom-tracks#custom-screen-share-track)
