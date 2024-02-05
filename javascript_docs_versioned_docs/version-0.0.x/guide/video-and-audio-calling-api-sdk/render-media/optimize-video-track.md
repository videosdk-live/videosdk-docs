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

# Optimize Video Tracks - Javascript

To optimize the viewing experience, it's essential to fine-tune the video tracks used during calls. 

For an enhanced fine-tuning experience, we've introduced the capability to provide a custom video track for a participant's media before and during the meeting.

1. [Custom Video Track](#custom-video-track)
2. [Custom Screen Share Track](#custom-screen-share-track)

## Custom Video Track

This feature allows you to incorporate custom video encoder configurations, choose optimization modes (focusing on **motion**, **text** or **detail** of the video), and apply background removal and video filters from external libraries (e.g., [videosdk-media-processor](https://www.npmjs.com/package/@videosdk.live/videosdk-media-processor-web)), then send these modifications to other participants.

### `How to Create a Custom Video Track ?`

- You can create a Custom Video Track using `createCameraVideoTrack()`.
- This method enables the creation of a video track with various encoding parameters, camera facing modes, and optimization modes, ultimately returning a `MediaStream`.

#### Example

```javascript
let customTrack = await VideoSDK.createCameraVideoTrack({
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
  // For Mobile browser It will specify whether to use front or back camera for the video track.
  facingMode: "environment", // "front",  Default : "environment"

  // highlight-next-line
  // We will discuss this parameter in next step.
  multiStream:true // false,  Default : true

});
```

:::caution
The behavior of custom track configurations is influenced by the capabilities of the device. For example, if you set the encoder configuration to 1080p but the webcam only supports 720p, the encoder configuration will automatically adjust to the highest resolution that the device can handle, which in this case is 720p.
:::

##### What is `optimizationMode`?

- This parameter specifies the optimization mode for the video track being generated.

- `motion` : This type of track focuses more on motion video such as webcam video, movies or video games.

  - It will degrade `resolution` in order to maintain `frame rate`.

- `text` : This type of track focuses on significant sharp edges and areas of consistent color that can change frequently such as presentations or web pages with text content.

  - It will degrade `frame rate` in order to maintain `resolution`.

- `detail` : This type of track focuses more on the details of the video such as, presentations, painting or line art.

  - It will degrade `frame rate` in order to maintain `resolution`.

##### What is `multiStream`?

- This parameter specifies whether the stream should send multiple resolution layers or a single resolution layer.

The **`multiStream : true`** configuration indicates that VideoSDK, by default, sends multiple resolution video streams to the server. For example, if a user's device capability is 720p, VideoSDK sends streams in 720p, 640p, and 480p resolution. This enables VideoSDK to deliver the appropriate stream to each participant based on their network bandwidth.

<center>

![Multi Stream False](/img/multistream_true.png)

</center>

Setting **`multiStream : false`** restricts VideoSDK to send only one stream, helping to maintain quality by focusing on a single resolution.

<center>

![Multi Stream False](/img/multistream_false.png)

</center>

:::danger
The `setQuality` parameter will not have any effect if multiStream is set to `false`.
:::

### `How to Setup a Custom Video Track ?`

The custom track can be configured both before and after the meeting is initialized. Following are the methods that help in doing so:

1. [Setting up a Custom Track during the initialization of a meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setting up a Custom Track with methods](#2-setup-custom-track-with-methods)

##### 1. Setting up a Custom Track during the initialization of a meeting

If you are enabling the webcam (`webcamEnabled: true`) in the `config` of the `initMeeting` method and wish to use custom tracks from the start of the meeting, you can pass a custom track in the `config` as demonstrated below.

:::caution
Custom Track will not apply on `webcamEnabled: false` configuration.
:::

##### Example

```javascript
let customVideoTrack = await VideoSDK.createCameraVideoTrack({
  optimizationMode: "motion",
  encoderConfig: "h540p_w960p",
  facingMode: "environment",
});

// Meeting Init
meeting = VideoSDK.initMeeting({
  meetingId: meetingId, // required
  name: name, // required
  //highlight-start
  //If true, it will use the passed custom track to turn webcam on
  webcamEnabled: true,
  //Pass the custom video track here
  customCameraVideoTrack: customVideoTrack,
  //highlight-end
});
```

#### 2. Setting up a Custom Track with methods

To switch tracks during the meeting, you need to pass the `MediaStream` in the `enableWebcam()` method of the `meeting` object.

:::tip
Make sure to call the `disableWebcam()` method before you create a new track as it may lead to unexpected behavior.
:::

##### Example

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const enableWebcamBtn = document.getElementById("enableWebcamBtn");
enableWebcamBtn.addEventListener("click", async () => {
  let customVideoTrack = await VideoSDK.createCameraVideoTrack({
    optimizationMode: "motion",
    encoderConfig: "h720p_w960p",
    facingMode: "environment",
    multiStream: false,
  });

  // Enable Webcam in Meeting
  meeting?.enableWebcam(customVideoTrack);
});
```

:::info
Using custom video tracks is not just limited to the video tracks created using the `createCameraVideoTrack` method. You can use any `MediaStream` object as a replacement which can include a [custom canvas track created by you](https://developer.chrome.com/blog/capture-stream/).
:::

### `Which Configuration is suitable for me ?`

In this section, the focus is on understanding participant size and platform-wise `encoder(Resolution)` and `multiStream` configuration.

##### 1. For Desktop Browser

![web_browser](/img/web_browser.png)

##### 2. For Mobile Browser

![web_browser](/img/mobile_browser.png)

##### 3. For Desktop + Mobile Browser

![web_browser](/img/mobile+web.png)

## Custom Screen Share Track

This feature enables the customization of screenshare streams with enhanced optimization modes and predefined encoder configuration (resolution + FPS) for specific use cases, which can then be sent to other participants.

### `How to Create a Custom Screen Share Track ?`

- You can create a Video Track using the `createScreenShareVideoTrack()` method.
- This method enables the creation of a video track with different encoding parameters and optimization modes.

#### Example

```javascript
let customShareTrack = await VideoSDK.createScreenShareVideoTrack({
  optimizationMode: "motion", // "text" | "detail",  Default : "motion"

  // This will accept the  height & FPS of video you want to capture.
  encoderConfig: "h720p_15fps", //  `h360p_30fps` | `h1080p_30fps` // Default : `h720p_15fps`
});
```

You can learn about `optimizationMode` from here [What is optimizationMode ?](#what-is-optimizationmode)

### `How to Setup a Custom Screen Share Track ?`

In order to switch tracks during the meeting, you have to pass the `MediaStream` in the \*\*`enableScreenShare()` method of the `meeting` object.

:::note

Make sure to call `disableScreenShare()` before you create a new track as it may lead to unexpected behavior.

:::

##### Example

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const enableScreenShareBtn = document.getElementById("enableScreenShareBtn");
enableScreenShareBtn.addEventListener("click", async () => {
  let customShareTrack = await VideoSDK.createScreenShareVideoTrack({
    optimizationMode: "motion",
    encoderConfig: "h720p_15fps",
  });

  meeting?.enableScreenShare(customShareTrack);
});
```
