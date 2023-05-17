---
title: Screen Share | Video SDK
hide_title: true
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Screen Share
pagination_label: Screen Share
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screen-share
---

# Screen Share

Screen sharing in a meeting is the process of sharing your device screen with other participants in the meeting. It allows everyone in the meeting to see exactly what you are seeing on your screen, which can be helpful for presentations, demonstrations, or collaborations.

### Screen Share feature Compatibility

| Android and iOS app    | Web                  | MacOS desktop app    | Windows desktop app | Safari browser |
|----------------------|----------------------|----------------------|---------------------|--------|
|  <center> :white_check_mark: </center>  | <center>  :white_check_mark: </center>  |  <center> :white_check_mark: </center>  | <center>  :x:   </center>               |  <center> :x: </center>   |


### `enableScreenShare()`

- By using `enableScreenShare()` function of `Room` object, local participant can share his/her mobile screen to other participants.

- Screen Share stream of the participant can be accessed from the `streams` property of `Participant` object.

### `disableScreenShare()`

- By using `disableScreenShare()` function of `Room` object, local participant can stop sharing his/her mobile screen to other participants.

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
            _room.enableScreenShare();
          },
          child: const Text("Enable Screen Share"),
        ),
        ElevatedButton(
          onPressed:(){
            _room.disableScreenShare();
          },
          child: const Text("Disable Screen Share"),
        ),
    //highlight-end
      ]
    );
  }
}
```

### iOS Setup

:::note

For Flutter iOS Screen Share feature, you need to follow this guide [Flutter iOS Screen Share](/flutter/guide/video-and-audio-calling-api-sdk/extras/flutter-ios-screen-share)

:::

### Rendering Screen Share Stream

1. To render the screenshare, you will need the `participantId` who is presenting the screen, which can be found from the `presenterId` property of `Room` object.

We will listen for the `Events.presenterChanged` on `Room` object to check if some other participant starts screen share, `Events.streamEnabled` and `Events.streamDisabled` on the `localParticipant`'s object to identify if the local participant is presenting or not.

```js title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './screen_share_view.dart';

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
  String? _presenterId;


  @override
  void initState() {
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: true,
      camEnabled: true,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
    );

    setMeetingEventListener();

    // Join room
    _room.join();

    super.initState();
  }

  // listening to meeting events
  void setMeetingEventListener() {
    _room.on(Events.roomLeft, () {
      participants.clear();
      Navigator.popUntil(context, ModalRoute.withName('/'));
    });
    //highlight-start
    //Listening if remote participant starts presenting
    _room.on(Events.presenterChanged, (String? presenterId) {
      setState(() => {_presenterId = presenterId});
    });

    //Listening if local participant starts presenting
    _room.localParticipant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == "share") {
        setState(() => {_presenterId = _room.localParticipant.id});
      }
    });

    _room.localParticipant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == "share") {
        setState(() => {_presenterId = null});
      }
    });
    //highlight-end
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
        appBar: AppBar(
          title: const Text('VideoSDK QuickStart'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Text(widget.meetingId),
              //highlight-start
              //we will render the screenshare view if the presenterId is not null
              if (_presenterId != null)
                ScreenShareView(
                  participant: _presenterId == _room.localParticipant.id
                      ? _room.localParticipant
                      : _room.participants[_presenterId],
                ),
                //highlight-end
              ElevatedButton(
                  onPressed: () {
                    if (_presenterId != null) {
                      _room.disableScreenShare();
                    } else {
                      _room.enableScreenShare();
                    }
                  },
                  child: const Text('Toggle Screnshare')),
            ],
          ),
        ),
      ),
    );
  }
}

```

2. Now that we know if there is an active presenter, let us get the screen share stream from the `Participant` object and render it.

```js title="screen_share_view.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ScreenShareView extends StatelessWidget {
  final Participant? participant;

  ScreenShareView({super.key, required this.participant}) {
    //highlight-start
  //intialize the shareStream
    participant?.streams.forEach((key, value) {
      if (value.kind == "share") {
        shareStream = value;
      }
    });
    //highlight-end
  }
  Stream? shareStream;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.grey.shade800,
      height: 300,
      width: 200,
      //highlight-start
      //show the screen share stream
      child: shareStream != null
          ? RTCVideoView(
              shareStream?.renderer as RTCVideoRenderer,
              objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
            )
          : null,
          //highlight-end
    );
  }
}
```

### Events associated with enableScreenShare

- Every Participant will receive a callback on [`Events.streamEnabled`](/flutter/api/sdk-reference/participant-class/events#streamenabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Remote Participant will receive [`Events.presenterChanged`](/flutter/api/sdk-reference/room-class/events#presenterchanged) callback on the [`Room`](/flutter/api/sdk-reference/room-class/introduction) object with the participantId as `presenterId` who started the screen share.

### Events associated with disableScreenShare

- Every Participant will receive a callback on [`Events.streamDisabled`](/flutter/api/sdk-reference/participant-class/events#streamdisabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Remote Participant will receive [`Events.presenterChanged`](/flutter/api/sdk-reference/room-class/events#presenterchanged) callback on the [`Room`](/flutter/api/sdk-reference/room-class/introduction) object with the `presenterId` as `null`.

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
      if (stream.kind == 'share') {
        //Screen share Turned On
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'share') {
        //Screen Share Turned Off
      }
    });
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return YourParticipantWidget();
  }
}

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room room;

  @override
  void initState() {
    //highlight-next-line
    ...

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }

  //highlight-start
  void setupRoomEventListener() {

    room.on(Events.presenterChanged, (String? presenterId) {
      //Room screen presenter has changed
      //Participant ID of current presenter is presenterId
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [enableScreenShare()](/flutter/api/sdk-reference/room-class/methods#enablescreenshare)
- [disableScreenShare()](/flutter/api/sdk-reference/room-class/methods#disablescreenshare)
- [Events.streamEnabled](/flutter/api/sdk-reference/participant-class/events#streamenabled)
- [Events.streamDisabled](/flutter/api/sdk-reference/participant-class/events#streamdisabled)
