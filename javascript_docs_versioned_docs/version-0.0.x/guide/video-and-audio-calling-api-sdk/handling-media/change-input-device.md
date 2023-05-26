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

# Change Input Device

During the meeting at any point a participant wishes to switch his/her input audio or video device, it can be done using the below mentioned methods.

## Changing Audio Input Device

### `getMics()`

- This method of the **Meeting** class will give you the list of all the available mics which can be shown in a dropdown list.

- This method will return an array of objects which will contain the `deviceId` and `label` of the audio input device.

### `changeMic()`

- Once you know which device you want to switch audio input to, you can pass the `deviceId` to this method to change the audio input device.

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

## Changing Camera Input Device

### `getWebcams()`

- This method of the `meeting` object will give you the list of all the available cameras which can be shown in a dropdown list.

- This method will return an array of objects which will contain the `deviceId` and `label` of the camera input device.

### `changeWebcam()`

- Once you know which device you want to switch camera input to, you can pass the `deviceId` to this method to change the camera input device.

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

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [getMics()](/javascript/api/sdk-reference/meeting-class/methods#getmics)
- [getWebcams()](/javascript/api/sdk-reference/meeting-class/methods#getwebcams)
- [changeMic()](/javascript/api/sdk-reference/meeting-class/methods#changemic)
- [changeWebcam()](/javascript/api/sdk-reference/meeting-class/methods#changewebcam)
