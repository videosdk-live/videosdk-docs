---
title: Manage Participants Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Manage Participants features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Participants
pagination_label: Manage Participants
keywords:
  - Exit Room
  - Leave Room
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-participants
---

# Manage Participants

## 1. Local Participant (self)

Local participant is used to consume your video & audio streams.
it contains information about local participant such as displayName, id, quality and streams Map.

You can access localParticipant from the [room object](./start-join-room#2-initialization).

### Participant object properties

| Property Name | Type          | Description                                         |
| ------------- | ------------- | --------------------------------------------------- |
| id            | string        | Unique id of the participant.                       |
| displayName   | string        | The name you define during the room initialization. |
| local         | boolean       | Indicates the participant is local or not.          |
| quality       | string        | Indicates the participant streams quality.          |
| Streams       | Map of Stream | Returns Video & Audio Streams.                      |

### Stream Object properties

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id          |
| codec         | string | Video/Audio codec. |
| kind          | string | Stream Kind.       |
| track         | string | MediaStreamTrack   |

## 2. Other Participants (Except You)

Other participants Map is used to get all the participants (except you) in the room at any given time.

Other participants Map contains same properties as [LocalParticipant](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### ParticipantTile

```js title=participant_tile.dart
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import '../../utils/toast.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  final bool isLocalParticipant;
  const ParticipantTile({
    Key? key,
    required this.participant,
    this.isLocalParticipant = false,
    }): super(key: key);

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? shareStream;
  Stream? videoStream;
  Stream? audioStream;
  String? quality;

  @override
  void initState() {
    _initStreamListeners();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.all(4.0),
        decoration: BoxDecoration(
          color: Theme.of(context).backgroundColor.withOpacity(1),
          border: Border.all(color: Colors.white38),
        ),
        child: AspectRatio(
          aspectRatio: 1,
          child: Padding(
            padding: const EdgeInsets.all(4.0),
            child: Stack(
              children: [
                videoStream != null
                    ? RTCVideoView(
                        videoStream?.renderer as RTCVideoRenderer,
                        objectFit:
                            RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                      )
                    : const Center(
                        child: Icon(
                          Icons.person,
                          size: 180.0,
                          color: Color.fromARGB(140, 255, 255, 255),
                        ),
                      ),
                Positioned(
                  bottom: 0,
                  left: 0,
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Container(
                      padding: const EdgeInsets.all(2.0),
                      decoration: BoxDecoration(
                        color: Theme.of(context).backgroundColor.withOpacity(0.2),
                        border: Border.all(color: Colors.white24),
                        borderRadius: BorderRadius.circular(4.0),
                      ),
                      child: Text(
                        widget.participant.displayName,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 10.0,
                        ),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: 0,
                  left: 0,
                  child: InkWell(
                    child: Container(
                      padding: const EdgeInsets.all(4),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: audioStream != null
                            ? Theme.of(context).backgroundColor
                            : Colors.red,
                      ),
                      child: Icon(
                        audioStream != null ? Icons.mic : Icons.mic_off,
                        size: 16,
                      ),
                    ),
                    onTap: widget.isLocalParticipant
                        ? null
                        : () => audioStream != null
                              ? widget.participant.unmuteMic()
                              : widget.participant.muteMic(),
                  ),
                ),
                Positioned(
                  top: 0,
                  right: 0,
                  child: InkWell(
                    child: Container(
                      padding: const EdgeInsets.all(4),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: videoStream != null
                            ? Theme.of(context).backgroundColor
                            : Colors.red,
                      ),
                      child: Icon(
                        videoStream != null
                            ? Icons.videocam
                            : Icons.videocam_off,
                        size: 16,
                      ),
                    ),
                    onTap: widget.isLocalParticipant
                        ? null
                        : () => videoStream != null
                                  ? widget.participant.disableCam()
                                  : widget.participant.enableCam(),
                  ),
                ),
                if (!widget.isLocalParticipant)
                  Positioned(
                    bottom: 0,
                    right: 0,
                    child: InkWell(
                      child: Container(
                        padding: const EdgeInsets.all(4),
                        decoration: const BoxDecoration(
                          shape: BoxShape.circle,
                          color: Colors.red,
                        ),
                        child: const Icon(
                          Icons.logout,
                          size: 16,
                        ),
                      ),
                      onTap: () {
                        showDialog(
                            context: context,
                            builder: (context) => AlertDialog(
                                  title: const Text("Are you sure ?"),
                                  actions: [
                                    TextButton(
                                      child: const Text("Yes"),
                                      onPressed: () {
                                        widget.participant.remove();
                                        toastMsg("Participant removed");
                                        Navigator.of(context).pop();
                                      },
                                    ),
                                    TextButton(
                                      child: const Text("No"),
                                      onPressed: () => Navigator.of(context).pop(),
                                    )
                                  ],
                                ));
                      },
                    ),
                  ),
              ],
            ),
          ),
        ),
    );
  }

  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video') {
          videoStream = _stream;
        } else if (_stream.kind == 'audio') {
          audioStream = _stream;
        } else if (_stream.kind == 'share') {
          shareStream = _stream;
        }
      });
    });

    widget.participant.on(Events.streamDisabled, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
          videoStream = null;
        } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
          audioStream = null;
        } else if (_stream.kind == 'share' && shareStream?.id == _stream.id) {
          shareStream = null;
        }
      });
    });
  }
}
```

```js title=participant_grid_view.dart
import 'dart:developer';
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import 'participant_tile.dart';

class ParticipantGridView extends StatefulWidget {
  final Room room;
  const ParticipantGridView({
    Key? key,
    required this.room,
  }) : super(key: key);

  @override
  State<ParticipantGridView> createState() => _ParticipantGridViewState();
}

class _ParticipantGridViewState extends State<ParticipantGridView> {
  String? activeSpeakerId;
  Participant? localParticipant;
  Map<String, Participant> participants = {};

  @override
  void initState() {
    // Initialize participants
    localParticipant = widget.room.localParticipant;
    participants = widget.room.participants;

    // Setting room event listeners
    setRoomListeners(widget.room);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,
      children: [
        ParticipantTile(
          participant: localParticipant!,
          isLocalParticipant: true,
        ),
        ...participants.values
            .map((participant) => ParticipantTile(participant: participant))
            .toList()
      ],
    );
  }

  void setRoomListeners(Room _room_) {
    // Called when participant joined room
    _room.on(
      Events.participantJoined,
      (Participant participant) {
        final newParticipants = participants;
        newParticipants[participant.id] = participant;
        setState(() {
          participants = newParticipants;
        });
      },
    );

    // Called when participant left room
    _room.on(
      Events.participantLeft,
      (participantId) {
        final newParticipants = participants;

        newParticipants.remove(participantId);
        setState(() {
          participants = newParticipants;
        });
      },
    );

    // Called when speaker is changed
    _room.on(Events.speakerChanged, (_activeSpeakerId) {
      setState(() {
        activeSpeakerId = _activeSpeakerId;
      });
    });
  }
}
```

## 3. Participant Related Events

1. **participantJoined** - Whenever any new participant join the room, `participantJoined` event will trigger. For example, the room is running with **Alice** and **Bob**, then **Eve** join that room, after that `participantJoined` event trigger and return the [participant object](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **participantLeft** - Whenever any participant leave/exit the room, `participantLeft` event will trigger.For example, the room is running with **Alice** and **Bob**, then **Bob** leave that room, after that `participantLeft` event trigger and return the [participant object](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **speakerChanged** - Whenever any participant starts actively speaking in room, `speakerChanged` event will trigger and return the speaker `participantId`.

4. **presenterChanged** - Whenever any participant present/screenshare their screen/window in room, `presenterChanged` event will trigger and return the presenter `participantId`.

5. **streamEnabled** - Whenever any participant enabled mic/camera in room, `streamEnabled` event will trigger and return `Stream Map`.

6. **streamDisabled** - Whenever any participant disabled mic/camera in room, `streamDisabled` event will trigger and return `Stream Map`.

```js
// Adding event listner
room.on(Events.participantJoined, (Participant participant) {
  print("new participant => $participant");
  },
);

room.on(Events.participantLeft, (Participant participant) {
  print("new participant => $participant");
  },
);
```
