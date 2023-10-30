---
sidebar_label: Switch Audio Output (BETA)
pagination_label: Switch Audio Output (BETA)
---

# Switch Audio Output (BETA) - React Native

This feature will help yout to switch audio output device during the session.

## Get Connected Device List

This method will help you to list down all possible connected audio devices.

#### Supported Audio Output Devices :

- **SPEAKER_PHONE** - Switch audio to device speaker

- **EARPIECE** - Switch audio to device earpiece

- **WIRED_HEADSET** - Switch audio to connected wired device

- **BLUETOOTH** - Switch audio to connected bluetooth device

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

## Switch Audio to Another Device

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

`EARPIECE` is not supported whenever `WIRED_HEADSET` or `BLUETOOTH` device is connected
:::
