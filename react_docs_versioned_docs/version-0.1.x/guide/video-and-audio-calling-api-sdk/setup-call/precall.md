---
title: Precall | Video SDK
hide_title: true
hide_table_of_contents: false
description: The precall feature allows users to configure their audio and video settings, test their devices, and view network statistics before starting a video call, ensuring a smooth and tailored communication experience.
sidebar_label: Precall
pagination_label: Precall
keywords:
  - audio calling
  - video calling
  - real-time communication
  - precall
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: Precall
---

# What is a Precall Experience?

Picture this: before diving into the depths of a video call, imagine giving your setup a quick check-up, like a tech-savvy doctor ensuring all systems are a go. That's essentially what a precall experience does- it’s like your extensive debug session before the main code execution—a crucial step in ensuring your app's performance is top-notch. 

## **Why is it necessary?**

Why invest time and effort into crafting a precall experience, you wonder? Well, picture this scenario: your users eagerly join a video call, only to encounter a myriad of technical difficulties—muted microphones, pixelated cameras, and laggy connections. Not exactly the smooth user experience you had in mind, right? 

By integrating a robust precall process into your app, developers become the unsung heroes, preemptively addressing potential pitfalls and ensuring that users step into their video calls with confidence.


## **Step-by-Step Guide: Integrating Precall Feature**

### **Step 1: Check Permissions**

- Begin by ensuring that your application has the necessary permissions to access user devices such as cameras, microphones, and speakers.
- Utilize the `checkPermissions()` method of the `useMediaDevice` hook to verify if permissions are granted.

```js
import { useMediaDevice } from "@videosdk.live/react-sdk";

const { checkPermissions } = useMediaDevice();

const checkMediaPermission = async () => {
    //These methods return a Promise that resolve to a Map<string, boolean> object.
    const checkAudioPermission = await checkPermissions("audio"); //For getting audio permission
    const checkVideoPermission = await checkPermissions("video"); //For getting video permission
    const checkAudioVideoPermission = await checkPermissions("audio_video"); //For getting both audio and video permissions
    // Output: Map object for both audio and video permission:
    /*
        Map(2)
        0 : {"audio" => true}
            key: "audio"
            value: true
        1 : {"video" => true}
            key: "video"
            value: true
    */
};
```
- When microphone and camera permissions are blocked, rendering device lists is not possible:

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/precall_no_permissions.mp4' width={"100%"} />

### **Step 2: Request Permissions (if necessary)**

- If permissions are not granted, use the `requestPermission()` method of the `useMediaDevice` hook to prompt users to grant access to their devices.

:::note

In case permissions are blocked by the user, the browser's permission request dialogue cannot be re-rendered programmatically. In such cases, consider providing guidance to users on manually adjusting their browser settings.

:::

```js
const requestAudioVideoPermission = async () => {
    try {
        //These methods return a Promise that resolve to a Map<string, boolean> object.
        const requestAudioPermission = await requestPermission("audio"); //For Requesting Audio Permission
        const requestVideoPermission = await requestPermission("video"); //For Requesting Video Permission
        const requestAudioVideoPermission = await requestPermission("audio_video"); //For Requesting Audio and Video Permissions
    } catch (ex) {
        console.log("Error in requestPermission ", ex);
    }
}
```
- Requesting permissions if not already granted:

![Request Permissions](https://cdn.videosdk.live/website-resources/docs-resources/precall_requesting_permissions.png)

### **Step 3: Render Device Lists**

- Once you have the necessary permissions, Fetch and render lists of available camera, microphone, and speaker devices using the `getCameras()`, `getMicrophones()`, and `getPlaybackDevices()` methods of the `useMediaDevice` hook respectively.
- Enable users to select their preferred devices from these lists.

```js
const getMediaDevices = async () => {
    try {
        //Method to get all available webcams.It returns a Promise that is resolved with an array of CameraDeviceInfo objects describing the video input devices.
        let webcams = await getCameras();
        //Method to get all available Microphones.It returns a Promise that is resolved with an array of MicrophoneDeviceInfo objects describing the audio input devices.
        let mics = await getMicrophones();
        //Method to get all available speakers.It returns a Promise that is resolved with an array of PlaybackDeviceInfo objects describing the playback devices.
        let speakers = await getPlaybackDevices();
    } catch (err) {
        console.log("Error in getting audio or video devices", err);
    }
}
```
- Displaying device lists once permissions are granted:

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/precall_render_device_list.mp4' width={"100%"} />

### **Step 4: Handle Device Changes**

- Implement the `OnDeviceChanged` callback of the `useMediaDevice` hook to dynamically re-render device lists whenever new devices are attached or removed from the system.
- Ensure that users can seamlessly interact with newly connected devices without disruptions.

```js
const {
    ...
  } = useMediaDevice({ onDeviceChanged });

//Fetch camera, mic and speaker devices again using this function.
function onDeviceChanged(devices) {
    console.log("Device Changed", devices)
}
```
- Dynamically updating device lists when new devices are connected or disconnected:

<ReactPlayer controls autoplay loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/precall_on_device_change.mp4' width={"100%"} />

### **Step 5: Create Media Tracks**

- Upon user selection of devices, create media tracks for the selected microphone and camera using the `createMicrophoneAudioTrack()` and `createCameraVideoTrack()` methods.
- Ensure that these tracks originate from the user-selected devices for accurate testing.

```js
import { createCameraVideoTrack, createMicrophoneAudioTrack } from "@videosdk.live/react-sdk";

//For Getting Audio Tracks
const getMediaTracks = async () => {
    try {
        //Returns a MediaStream object, containing the Audio Stream from the selected Mic Device.
        const customAudioStream = await createMicrophoneAudioTrack({
            // Here, selectedMicId should be the microphone id of the device selected by the user.
            microphoneId: selectedMicId
        });
        //To retrive audio tracks that will be displayed to the user from the stream.
        const audioTracks = stream?.getAudioTracks();
        const audioTrack = audioTracks.length ? audioTracks[0] : null;
    } catch (error) {
        console.log("Error in getting Audio Track", error);
    }

    //For Getting Video Tracks
    try {
        //Returns a MediaStream object, containing the Video Stream from the selected Webcam Device.
        const customVideoStream = await createCameraVideoTrack({
            // Here, selectedWebcamId should be the webcam id of the device selected by the user.
            cameraId: selectedWebcamId,
            encoderConfig: encoderConfig ? encoderConfig : "h540p_w960p",
            optimizationMode: "motion",
            multiStream: false,
        });
        //To retrive video tracks that will be displayed to the user from the stream.
        const videoTracks = stream?.getVideoTracks();
        const videoTrack = videoTracks.length ? videoTracks[0] : null;
    } catch (error) {
        console.log("Error in getting Video Track", error);
    }
}
```
- Rendering Media Tracks when necessary permissions are available:

![Media Tracks](https://cdn.videosdk.live/website-resources/docs-resources/precall_render_media_tracks.png)

### **Step 6: Testing Microphone**

- The process of testing microphone device provides valuable insights into microphone quality and ensures users can optimize their audio setup for clear communication.
- To facilitate this functionality, incorporate a recording feature that enables users to capture audio for a specified duration. After recording, users can playback the audio to evaluate microphone performance accurately.
- For implementing this functionality, you can refer to the official guide of [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) for comprehensive instructions and best practices.

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/precall_test_mic.mp4' width={"100%"} />

### **Step 7: Testing Speakers**

- Testing the speaker device allows users to assess audio playback clarity and fidelity, enabling them to fine-tune settings for optimal sound quality in calls and meetings.
- To facilitate effective speaker testing, integrate sound playback functionality into your application.
- This functionality empowers users to play a predefined audio sample, providing a precise evaluation of their speaker output quality.

```js
const testSpeakers = () => {
    //Here, you have to path of your desired test sound.
    const test_sound_path = "test_sound_path";
    //Create an audio tag using a test sound of your choice.
    const audio = new Audio(test_sound_path);
    try {
        //Set the sinkId of the audio to the speaker's device Id, as selected by the user.
        audio.setSinkId(selectedSpeakerDeviceId)
            .then(() => {
                audio.play();
            })
    } catch (error) {
        console.log(error);
    };
}
```
<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/precall_test_speaker.mp4' width={"100%"} />

### **Step 8: Network Quality Assessment**

- Utilize the `getNetworkStats()` method to provide users with insights into their network upload and download speeds.
- Handle potential errors gracefully, such as offline status or poor connection, to maintain a smooth user experience.

```js
import { getNetworkStats } from "@videosdk.live/react-sdk";

const getNetworkStatistics = async () => {
    try {
        // The timeOutDuration is a set time, after which the method stops fetching stats and throws a timeout error.
        const options = { timeoutDuration: 45000 }; 
        //This method returns a Promise that resolves with an object, containing network speed statistics or rejects with an error message.
        const networkStats = await getNetworkStats(options);
        const downloadSpeed = networkStats["downloadSpeed"];
        const uploadSpeed = networkStats["uploadSpeed"];
    } catch (ex) {
        console.log("Error in networkStats: ", ex);
    }
}
```
- Displaying the Upload and Download speeds of the network:

![Network Stats](https://cdn.videosdk.live/website-resources/docs-resources/precall_network_stats.png)

- Error Handling when user is offline:

![Offline](https://cdn.videosdk.live/website-resources/docs-resources/precall_networ_stats_offline.png)

### **Step 9: Passing States to Meeting**

- Ensure that all relevant states, such as microphone and camera status (on/off), and selected devices, are passed into the meeting from the precall screen.
- This can be accomplished by passing these crucial states and media streams onto the VideoSDK `MeetingProvider`.
- By ensuring this integration, users can seamlessly transition from the precall setup to the actual meeting while preserving their preferred settings.

```js
<MeetingProvider
    config={
        {
            ...
            //Status of Mircophone Device as selected by the user (On/Off).
            micEnabled: micOn,
            //Status of Webcam Device as selected by the user (On/Off).
            webcamEnabled: webcamOn,
            //customVideoStream has to be the Video Stream of the user's selected Webcam device as created in Step-5.
            customCameraVideoTrack: customVideoStream,
            //customAudioStream has to be the Audio Stream of the user's selected Microphone device as created in Step-5.
            customMicrophoneAudioTrack: customAudioStream
        }
    } >
</MeetingProvider>

```



By following these step-by-step instructions, you can seamlessly integrate a precall feature into your application, empowering users to optimize their audio and video setup for a superior communication experience.

:::note

You can explore the complete implementation of the Precall feature in the official React JS SDK example [available here.](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example)

:::

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useMediaDevice](/react/api/sdk-reference/use-mediaDevice/introduction)
- [getNetworkStats()](/react/api/sdk-reference/network-statistics#getnetworkstats)
- [createMicrophoneAudioTrack()](/react/api/sdk-reference/custom-tracks#custom-audio-track---react)
- [createCameraVideoTrack()](/react/api/sdk-reference/custom-tracks#custom-video-track---react)







