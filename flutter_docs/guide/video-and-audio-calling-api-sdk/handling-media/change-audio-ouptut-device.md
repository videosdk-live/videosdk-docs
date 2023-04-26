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
slug: change-audio-output-device
---

# Change Audio Output Device

During the meeting at any point a participant wishes to switch his/her output audio like from headphones to speaker, it can be done using the below mentioned methods.

### Getting Output Device

`getAudioOutputDevices()` method will help you to list down all possible connected audio devices which will return a list of `MediaDeviceInfo` objects.

`MediaDeviceInfo` will contain the `deviceId` and `label` for the device.

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
        //highlight-start
        ElevatedButton(
          child: Text("Get Output Device"),
          onPressed: () => {
            List<MediaDeviceInfo> outputDevice = _room.getAudioOutputDevices()
            log(outputDevice);
        }),
    //highlight-end
      ]
    );
  }
}
```

### Switching Audio Device

You can switch the audio output device by using the `switchAudioOutput()` which will take the `MediaDeviceInfo` object as parameter to which you want to switch the audio output.

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
          child: Text("Change Output Device"),
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
                            .getAudioOutputDevices()
                            .map(
                              (device) => ElevatedButton(
                                child: Text(device.label),
                                onPressed: () => {
                                  _room.switchAudioDevice(device),
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

:::note

`EARPIECE` is not supported whenever `WIRED_HEADSET` or `BLUETOOTH` device is connected.

:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [getAudioOutputDevice()](/flutter/api/sdk-reference/room-class/methods#getaudiooutputdevice)
- [switchAudioDevice()](/flutter/api/sdk-reference/room-class/methods#switchAudioDevice)
