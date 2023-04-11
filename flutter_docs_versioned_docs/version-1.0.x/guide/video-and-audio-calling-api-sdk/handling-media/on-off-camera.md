---
title: On / Off Camera | Video SDK
hide_title: true
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: On / Off Camera
pagination_label: On / Off Camera
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: on-off-camera
---

# On / Off Camera

Any participant can turn on or off his camera in the meeting using below methods.

### `enableCam()`

- By using `enableCam()` function of `Room` object, local participant can publish video to other participants.

- You can call this method when the local participant is not broadcasting any video to others.

- You can pass customised video track in `enableCam()` by using [Custom Video Track](/flutter/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track).

- Video stream of the participant can be accessed from the `streams` property of `Participant` object.

### `disableCam()`

- By using `disableCam()` function of `Room` object, local participant can stop publish video to other participants.

- You can call this method when the local participant is broadcasting any video to others.

#### Example

```jsx
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
          onPressed:(){
            _room.enableCam();
          },
          child: const Text("Enable Camera"),
        ),
        ElevatedButton(
          onPressed:(){
            _room.disableCam();
          },
          child: const Text("Disable Camera"),
        ),
    //highlight-end
      ]
    );
  }
}
```

:::note
To learn, how to render video in the meeting, follow this detailed [guide](/flutter/guide/video-and-audio-calling-api-sdk/render-media/display-video#2-rendering-video).
:::

### Getting Participant Camera Status

- You can get the **local participant's** media status by going through the `stream` Map of the `Participant` object.
- If `stream` contains a value where `kind` is `video` then the participant's camera is active else it is disabled.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  const ParticipantTile({super.key, required this.participant});

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? videoStream;

  @override
  void initState() {
    //highlight-start
    // initial video stream for the participant
    //Check if camera stream is already present
    widget.participant.streams.forEach((key, Stream stream) {
      setState(() {
        if (stream.kind == 'video') {
          videoStream = stream;
        }
      });
    });
    //highlight-end

    _initStreamListeners();
    super.initState();
  }

  //highlight-start
  //Change state according to the events received
  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == 'video') {
        setState(() => videoStream = stream);
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'video') {
        setState(() => videoStream = null);
      }
    });
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text("Current Camera status of ${widget.participant.displayName} is ${videoStream !=null ? "Active": "Disable"}")
    );
  }
}
```

### Events associated with enableCam

- Every Participant will receive a callback on [`Events.streamEnabled`](/flutter/api/sdk-reference/participant-class/events#streamenabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

### Events associated with disableCam

- Every Participant will receive a callback on [`Events.streamDisabled`](/flutter/api/sdk-reference/participant-class/events#streamdisabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  ...
}

class _ParticipantTileState extends State<ParticipantTile> {

  @override
  void initState() {
    ...

    //highlight-next-line
    _initStreamListeners();
    super.initState();
  }

  //highlight-start
  //Change state according to the events received
  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == 'video') {
        //Camera Turned On
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'video') {
        //Camera Turned Off
      }
    });
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return YourParticipantWidget();
  }
}
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [enableCam()](/flutter/api/sdk-reference/room-class/methods#enablecam)
- [disableCam()](/flutter/api/sdk-reference/room-class/methods#disablecam)
- [Events.streamEnabled](/flutter/api/sdk-reference/participant-class/events#streamenabled)
- [Events.streamDisabled](/flutter/api/sdk-reference/participant-class/events#streamdisabled)
