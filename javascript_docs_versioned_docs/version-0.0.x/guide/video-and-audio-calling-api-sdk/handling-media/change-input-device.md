---
title: Change Input Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Input Device
pagination_label: Change Input Device
keywords: 
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-input-device
---

# Change Input Device - Javascript

During the meeting, at any point, a participant wishing to switch their input audio or video device, can do so using the below-mentioned methods.

## Changing Audio Input Device

### `getMics()`

- This method of the **Meeting** class will provide you with a list of all the available mics, which can be displayed in a dropdown list.

- It will return an array of objects, which will contain the `deviceId` and  the `label` of the audio input device.

### `changeMic()`

- Once you know which device you want to switch the audio input to, you can pass the `deviceId` to this method to change the audio input device.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const mics = await meeting?.getMics();

const { deviceId, label } = mics[0];

meeting?.changeMic(deviceId);
```

## Getting the Audio Input Device currently in use.

- You can get the audio device that is currently in use in the meeting,using the `selectedMicrophoneDevice` property of the `Meeting` class.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// ...

console.log("Currently used Audio Input Device : ", meeting?.selectedMicrophoneDevice);
```

## Changing Camera Input Device

### `getWebcams()`

- This method of the **Meeting** class will provide you with a list of all the available cameras, which can be displayed in a dropdown list.

- This method will return an array of objects which will contain the `deviceId` and `label` of the camera input device.

### `changeWebcam()`

- Once you know which device you want to switch the camera input to, you can pass the `deviceId` to this method to change the camera input device.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const webcams = await meeting?.getWebcams();

const { deviceId, label } = webcams[0];

meeting?.changeWebcam(deviceId);
```

## Getting the Camera Device currently in use.

- You can get the camera device that is currently in use in the meeting, using the `selectedCameraDevice` property of the `Meeting` class.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// ...

console.log("Currently used Webcam : ", meeting?.selectedCameraDevice);
```

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [getMics()](/javascript/api/sdk-reference/meeting-class/methods#getmics)
- [getWebcams()](/javascript/api/sdk-reference/meeting-class/methods#getwebcams)
- [changeMic()](/javascript/api/sdk-reference/meeting-class/methods#changemic)
- [changeWebcam()](/javascript/api/sdk-reference/meeting-class/methods#changewebcam)
