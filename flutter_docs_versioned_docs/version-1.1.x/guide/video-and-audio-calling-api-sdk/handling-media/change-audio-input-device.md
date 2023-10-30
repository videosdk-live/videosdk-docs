---
title: Change Input Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Change Input Device features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Audio Input Device
pagination_label: Change Audio Input Device
keywords:
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-audio-input-device
---

# Change Audio Input Device - Flutter

During the meeting at any point a participant wishes to switch his/her input audio device, it can be done using the below mentioned methods.

:::important
This feature is only available on the **Web** and **Desktop**; if you want to use it on **Mobile**, please refer [this guide](./change-audio-output-device.md).
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

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [getMics()](/flutter/api/sdk-reference/room-class/methods#getmics)
- [changeMic()](/flutter/api/sdk-reference/room-class/methods#changemic)
