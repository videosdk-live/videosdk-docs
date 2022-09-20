---
sidebar_label: Switch Audio Output (BETA)
pagination_label: Switch Audio Output (BETA)
---

# Switch Audio Output (BETA) (Android)

This feature will help yout to switch audio output device during the session.

## Get Connected Device List

This method will help you to list down all possible connected audio devices.

#### Supported Audio Output Devices :

- **AudioOutputDevice.SPEAKER** - Switch audio to device speaker

- **AudioOutputDevice.EARPIECE** - Switch audio to device earpiece

- **AudioOutputDevice.WIRED_HEADSET** - Switch audio to connected wired device

- **AudioOutputDevice.BLUETOOTH** - Switch audio to connected bluetooth device

```js

ElevatedButton(
  child: Text("Get Output Device"),
  onPressed: () => {
    meeting.getAudioOutputDevices().then((value)=>{
      //value is of type List<AudioOutputDevice>
      log(value);
    })
  }),
```

## Switch Audio to Another Device

This method will help you to switch specific audio output device.

```js
meeting.setOutputDevice(AudioOutputDevice.SPEAKER); // for device speaker
meeting.setOutputDevice(AudioOutputDevice.EARPIECE); // for device earpiece
meeting.setOutputDevice(AudioOutputDevice.WIRED_HEADSET); // for wired headset
meeting.setOutputDevice(AudioOutputDevice.BLUETOOTH); // for bluetooth device
```
