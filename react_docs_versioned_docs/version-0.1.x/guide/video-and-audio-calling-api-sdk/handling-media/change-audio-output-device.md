---
title: Change Audio Output Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Audio Output Device
pagination_label: Change Audio Output Device
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-audio-ouptut-device
---
 
# Change Audio Output Device - React

During the meeting, at any point, a participant wishing to switch their output audio device, such as from headphones to speakers, can do so using the below-mentioned methods.

#### Getting Output device

- To get all the available audio output devices, you can use the `navigator.mediaDevices`, and then filter it based on the device kind as `audiooutput`.

```js
const getAudioOutputDevice = () => {
  const audioOutputDevice = new Map();
  const devices = await navigator.mediaDevices.enumerateDevices();
  for (const device of devices) {
    if (device.kind == "audiooutput") audioOutputDevice.set(device.deviceId, device);
  }
  return audioOutputDevice;
}
```

#### Changing Output Device

- To change the output audio device, you need to set the `sinkId` for each `<audio>` element used to render the audio in the meeting.

```js
const setAudioOutputDevice = (deviceId) => {
  const audioTags = document.getElementsByTagName("audio");
  audioTags.forEach((tag) => {
    tag.setSinkId(deviceId);
  });
};
```

:::note
To learn more about changing the audio output device [check this documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId).
:::

### Setting Audio Volume

- To set the audio volume for the meeting, you need to adjust the volume property for each `<audio>` element used to render the paricipant audio.

- Value for the `volume` property for the `<audio>` can be between `0` and `1`.

```js
const setAudioVolume = (volume) => {
  const audioTags = document.getElementsByTagName("audio");
  audioTags.forEach((tag) => {
    tag.volume = volume;
  });
};
```

:::note
To learn more about adjusting the audio volume [check this documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume).
:::
