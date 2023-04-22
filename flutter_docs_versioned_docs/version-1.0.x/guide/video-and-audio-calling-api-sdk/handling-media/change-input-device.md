---
title: Change Input Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Change Input Device features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Input Device
pagination_label: Change Input Device
keywords:
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

:::tip
`getMics()` and `changeMic()` methods are supported in Web and Desktop apps (MacOs,Windows).

If you want to switch the input audio device in Android or IOS use [`getAudioOutputDevices()`](./change-audio-ouptut-device#getting-output-device) and [`switchAudioOutput()`](/change-audio-ouptut-device#switching-audio-device) methods.
:::

### `getMics()`

- `getMics()` method will help you to list down all possible connected audio devices which will return a list of `MediaDeviceInfo` objects.

- `MediaDeviceInfo` will contain the `deviceId` and `label` for the device.

### `changeMic()`

- You can switch the audio input device by using the `changeMic()` which will take the `MediaDeviceInfo` object as parameter to which you want to switch the audio input.

#### Example

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        ElevatedButton(
          child: Text("Change Input Device"),
          onPressed: () => {
            showDialog(
              context: context,
              builder: (context) => AlertDialog(
                title: const Text("Select Audio Device"),
                content: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    SingleChildScrollView(
                      reverse: true,
                      //highlight-start
                      child: Column(
                        children: _room
                            .getMics()
                            .map(
                              (device) => ElevatedButton(
                                child: Text(device.label),
                                onPressed: () => {
                                  _room.changeMic(device),
                                  Navigator.pop(context)
                                },
                              ),
                            )
                            .toList(),
                      ),
                      //highlight-end
                    )
                  ],
                ),
              ),
            );
        }),
      ]
    );
  }
}
```

## Changing Camera Input Device

### `getCameras()`

- This method of the `Room` object will give you the list of all the available cameras which can be shown in a list.

- This method will return an array of `MediaDeviceInfo` which will contain the `deviceId` and `label` of the camera input device.

### `changeCam()`

- Once you know which device you want to switch camera input to, you can pass the `deviceId` to this method to change the camera input device.

#### Example

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        ElevatedButton(
          child: Text("Change Camera"),
          onPressed: () => {
            showDialog(
              context: context,
              builder: (context) => AlertDialog(
                title: const Text("Select Camera Device"),
                content: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    SingleChildScrollView(
                      reverse: true,
                      //highlight-start
                      child: Column(
                        children: _room
                            .getCameras()
                            .map(
                              (device) => ElevatedButton(
                                child: Text(device.label),
                                onPressed: () => {
                                  _room.changeCam(device.id),
                                  Navigator.pop(context)
                                },
                              ),
                            )
                            .toList(),
                      ),
                      //highlight-end
                    )
                  ],
                ),
              ),
            );
        }),
      ]
    );
  }
}
```

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [getMics()](/react-native/api/sdk-reference/use-meeting/methods#getmics)
- [changeMic()](/react-native/api/sdk-reference/use-meeting/methods#changemic)
- [getWebcams()](/react-native/api/sdk-reference/use-meeting/methods#getwebcams)
- [changeWebcam()](/react-native/api/sdk-reference/use-meeting/methods#changewebcam)
