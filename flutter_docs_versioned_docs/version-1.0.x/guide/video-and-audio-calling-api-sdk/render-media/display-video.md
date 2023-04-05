---
title: Display Video | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Display Video
pagination_label: Display Video
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-video
---

# Display Video

In this guide we will take a look at how to render the participant's audio and video on the screen.

## Rendering Participant

The two steps are involve to achieve this process.

1. [Get Mic and Webcam Status](#1-get-mic-and-webcam-status)
2. [Rendering Video](#2-rendering-video)

### `1. Get Mic and Webcam Status`

We must determine whether the participant's audio or video is on or off before rendering him or her. Hence, if the webcam is not turned on, we will begin by rendering the participant's frames with their name in them; otherwise, we will render the video.

**`Step 1:`** Let's get every `participants` from `Room` by listenting to the `participantJoined` as well as `participantLeft` event.

```js title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './participant_tile.dart';

class MeetingScreen extends StatefulWidget {
  final String meetingId;
  final String token;

  const MeetingScreen(
      {super.key, required this.meetingId, required this.token});

  @override
  State<MeetingScreen> createState() => _MeetingScreenState();
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;
  var micEnabled = true;
  var camEnabled = true;
  String? _presenterId;

  Map<String, Participant> participants = {};

  @override
  void initState() {
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: micEnabled,
      camEnabled: camEnabled,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
    );

    setMeetingEventListener();

    // Join room
    _room.join();

    super.initState();
  }

  //highlight-start
  // listening to meeting events
  void setMeetingEventListener() {
    _room.on(Events.roomJoined, () {
      setState(() {
        participants.putIfAbsent(
            _room.localParticipant.id, () => _room.localParticipant);
      });
    });

    _room.on(
      Events.participantJoined,
      (Participant participant) {
        setState(
          () => participants.putIfAbsent(participant.id, () => participant),
        );
      },
    );

    _room.on(Events.participantLeft, (String participantId) {
      if (participants.containsKey(participantId)) {
        setState(
          () => participants.remove(participantId),
        );
      }
    });

    _room.on(Events.roomLeft, () {
      participants.clear();
      Navigator.popUntil(context, ModalRoute.withName('/'));
    });
  }
  //highlight-end

  // onbackButton pressed leave the room
  Future<bool> _onWillPop() async {
    _room.leave();
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () => _onWillPop(),
      child: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [],
          ),
        ),
      ),
    );
  }
}
```

**`Step 2:`** WIth participant list ready, let render a list of participants with create a straightforward box with each person's name.

```js title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './participant_tile.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;
  var micEnabled = true;
  var camEnabled = true;

  Map<String, Participant> participants = {};

  @override
  void initState() {
    // create room
    ...
  }

  // listening to meeting events
  void setMeetingEventListener() {
    ...
  }

  // onbackButton pressed leave the room
  Future<bool> _onWillPop() async {
    _room.leave();
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () => _onWillPop(),
      child: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              //highlight-start
              //render all participant
              Expanded(
                child: GridView.builder(
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 1,
                  ),
                  itemBuilder: (context, index) {
                    return ParticipantTile(
                        participant: participants.values.elementAt(index));
                  },
                  itemCount: participants.length,
                ),
              ),
              //highlight-end
            ],
          ),
        ),
      ),
    );
  }
}
```

```js title="participant_tile.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  const ParticipantTile({super.key, required this.participant});

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black54,
      child: Stack(
        children: [
          //highlight-start
          Positioned(
            top: 10,
            left: 10,
            child: Text(
              "Name: ${widget.participant.displayName}",
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16.0,
              ),
            ),
          ),
          //highlight-end
        ],
      ),
    );
  }
}
```

**`Step 3:`** To display the status of each participant's microphone and webcam in the list, we will create the local state of audio and video streams of the participant fromt he `streams` property and also add the event listener to get notified on status change.

Here's a code code snippet of rendering mic and webcam status:

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
  //highlight-start
  //declare stream state
  Stream? videoStream;
  Stream? audioStream;
  //highlight-end

  @override
  void initState() {
    //highlight-start
    // initial video stream for the participant
    widget.participant.streams.forEach((key, Stream stream) {
      setState(() {
        if (stream.kind == 'video') {
          videoStream = stream;
        }
      });
    });
    _initStreamListeners();
    //highlight-end
    super.initState();
  }

  //highlight-start
  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == 'video') {
        setState(() => videoStream = stream);
      } else if (stream.kind == 'audio') {
        setState(() => audioStream = stream);
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'video') {
        setState(() => videoStream = null);
      } else if (stream.kind == 'audio') {
        setState(() => audioStream = null);
      }
    });
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black54,
      child: Stack(
        children: [
          Positioned(
            top: 10,
            left: 10,
            //highlight-start
            //Update the text
            child: Text(
              "Name : ${widget.participant.displayName}" +
                  "\nMic :${audioStream == null ? "Off" : "On"}" +
                  "\nCam :${audioStream == null ? "Off" : "On"}",
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16.0,
              ),
            ),
            //highlight-end
          ),
        ],
      ),
    );
  }
}
```

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/display_video_empty_participant_list.png' style={{height: '600px'}}/>

</center>

### `2. Rendering Video`

The status of the `webcam` and `mic` is now displayed. If the webcam is turned `on`, we will use the `videoStream` we declared earlier and display the participant's video.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  //highlight-next-line
  ...
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? videoStream;
  Stream? audioStream;

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  _initStreamListeners() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black54,
      child: Stack(
        children: [
          //highlight-start
          if (videoStream != null)
            RTCVideoView(
              videoStream?.renderer as RTCVideoRenderer,
              objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
            ),
          //highlight-end
          Positioned(
            top: 10,
            left: 10,
            child: Text(
              "Name : ${widget.participant.displayName}" +
                  "\nWebcam :${videoStream == null ? "Off" : "On"}",
                  " Mic :${audioStream == null ? "Off" : "On"}" +
              style: const TextStyle(
                color: Colors.black,
                fontSize: 16.0,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

:::caution

Unlike before, you don't need to render audio separately because RTCView is a component that handles audio stream automatically.
:::

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/display_video_participant_with_video.png' style={{height: '600px'}}/>

</center>

#### `2.1 Mirror Local Video View`

If you wish to show the mirror view of the local participant, you can pass boolean value to `mirror` property of RTCView.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  //highlight-next-line
  ...
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? videoStream;
  Stream? audioStream;

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  _initStreamListeners() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black54,
      child: Stack(
        children: [
          if (videoStream != null)
            RTCVideoView(
              videoStream?.renderer as RTCVideoRenderer,
              objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
              //highlight-next-line
              mirror: true,
            ),
        ],
      ),
    );
  }
}
```

##### Sample of mirror view video

![mirror view](/img/mirror-view.jpg)

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Participant](/flutter/api/sdk-reference/participant-class/introduction)
