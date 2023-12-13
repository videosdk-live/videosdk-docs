---
title: Change Audio Output Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Change Audio Output Device features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
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

# Change Audio Output Device - React Native

During the meeting at any point a participant wishes to switch his/her output audio like from headphones to speaker, it can be done using the below mentioned methods.

### Getting Output Device

`getAudioDeviceList()` method will help you to list down all possible connected audio devices.

##### Supported Audio Output Devices :

**SPEAKER_PHONE** - Switch audio to device speaker

**EARPIECE** - Switch audio to device earpiece

**WIRED_HEADSET** - Switch audio to connected wired device

**BLUETOOTH** - Switch audio to connected bluetooth device

```js
import { getAudioDeviceList } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  const onPress = async () => {
    const device = await getAudioDeviceList();
    console.log("Device :", device); // ["SPEAKER_PHONE","WIRED_HEADSET"]
  };

  return <>...</>;
};
```

### Changing Output Device

This method will help you to switch specific audio output device.

```js
import { switchAudioDevice } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  const onPress = () => {
    switchAudioDevice("SPEAKER_PHONE"); // for device speaker

    switchAudioDevice("EARPIECE"); // for device earpiece

    switchAudioDevice("WIRED_HEADSET"); // for wired headset

    switchAudioDevice("BLUETOOTH"); // for bluetooth device
  };

  return <>...</>;
};
```

:::note

`EARPIECE` is not supported whenever `WIRED_HEADSET` or `BLUETOOTH` device is connected.

:::
