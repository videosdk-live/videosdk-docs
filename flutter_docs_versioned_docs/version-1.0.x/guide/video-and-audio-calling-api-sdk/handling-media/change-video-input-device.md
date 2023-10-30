---
title: Change Video Input Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Change Video Input Device features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Video Input Device
pagination_label: Change Video Input Device
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-video-input-device
---

# Change Video Input Device - Flutter

During the meeting at any point a participant wishes to switch his/her input video device, it can be done using the below mentioned methods.

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

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [getWebcams()](/react-native/api/sdk-reference/use-meeting/methods#getwebcams)
- [changeWebcam()](/react-native/api/sdk-reference/use-meeting/methods#changewebcam)
