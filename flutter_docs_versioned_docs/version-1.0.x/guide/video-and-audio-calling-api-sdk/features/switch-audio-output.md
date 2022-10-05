---
sidebar_label: Switch Audio Output (BETA)
pagination_label: Switch Audio Output (BETA)
---

# Switch Audio Output (BETA)

This feature will help yout to switch audio output device during the session.

## Get Connected Device List

This method will help you to list down all possible connected audio devices.

To get the list of all available audio output devices, use the `getAudioOutputDevices()`, which will return a list of `MediaDeviceInfo`.

`MediaDeviceInfo` will contain the `deviceId` and `label` of the particular audio output device.

```js

ElevatedButton(
  child: Text("Get Output Device"),
  onPressed: () => {
    List<MediaDeviceInfo> outputDevice = meeting.getAudioOutputDevices()
    log(outputDevice);
  }),
```

## Switch Audio to Another Device

This method will help you to switch specific audio output device.

```js
// Pass the MediaDeviceInfo object to which the audio is to be switched.
meeting.switchAudioOutput(mediaDeviceInfo);
```

:::note

`EARPIECE` is not supported whenever `WIRED_HEADSET` or `BLUETOOTH` device is connected
:::

To check the implementation of switch audio device in detail, check out the [Flutter Code Sample](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example)
