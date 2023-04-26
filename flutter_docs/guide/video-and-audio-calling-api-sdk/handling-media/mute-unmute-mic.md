---
title: Mute / Unmute Mic | Video SDK
hide_title: true
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mute / Unmute Mic
pagination_label: Mute / Unmute Mic
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-unmute-mic
---

# Mute / Unmute Mic

Muting and Unmuting your microphone refers to turning your microphone off and on, respectively.

When you mute your microphone, you prevent any sound from your microphone from being transmitted to other meeting participants, while unmuting it allows others to hear you.

### `unmuteMic()`

- By using `unmuteMic()` function of `Room` object, local participant can publish audio to other participants.

  - You can call this method when the local participant is not broadcasting any audio to others.

- You can pass customised audio track in `unmuteMic()` by using [Custom Audio Track](/flutter/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `streams` property of `Participant` object.

### `muteMic()`

- By using `muteMic()` function of `Room` object, local participant can stop publish audio to other participants.

- You can call this method when the local participant is broadcasting any audio to others.

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
            _room.unmuteMic();
          },
          child: const Text("Unmute Mic"),
        ),
        ElevatedButton(
          onPressed:(){
            _room.muteMic();
          },
          child: const Text("Mute Mic"),
        ),
    //highlight-end
      ]
    );
  }
}
```

### Getting Participant Mic Status

- You can get the **local participant's** media status by going through the `stream` Map of the `Participant` object.
- If `stream` contains a value where `kind` is `audio` then the participant's microphone is active else it is disabled.

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
  Stream? audioStream;

  @override
  void initState() {
    //highlight-start
    // initial video stream for the participant
    //Check if camera stream is already present
    widget.participant.streams.forEach((key, Stream stream) {
      setState(() {
        if (stream.kind == 'audio') {
          audioStream = stream;
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
      if (stream.kind == 'audio') {
        setState(() => audioStream = stream);
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'audio') {
        setState(() => audioStream = null);
      }
    });
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text("Current Mic status of ${widget.participant.displayName} is ${audioStream !=null ? "Active": "Disable"}")
    );
  }
}
```

### Events associated with unmuteMic

- Every Participant will receive a callback on [`Events.streamEnabled`](/flutter/api/sdk-reference/participant-class/events#streamenabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

### Events associated with muteMic

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
      if (stream.kind == 'audio') {
        //Mic Turned On
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'audio') {
        //Mic Turned Off
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

- [unmuteMic()](/flutter/api/sdk-reference/room-class/methods#unmutemic)
- [muteMic()](/flutter/api/sdk-reference/room-class/methods#mutemic)
- [Events.streamEnabled](/flutter/api/sdk-reference/participant-class/events#streamenabled)
- [Events.streamDisabled](/flutter/api/sdk-reference/participant-class/events#streamdisabled)
