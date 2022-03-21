---
title: Manage Participants Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Manage Participants features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Participants
pagination_label: Manage Participants
keywords:
  - Exit Meeting
  - Leave Meeting
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

You can access localParticipant from the [meeting object](/flutter/guide/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

### Participant object properties

| Property Name | Type          | Description                                            |
| ------------- | ------------- | ------------------------------------------------------ |
| id            | string        | Unique id of the participant.                          |
| displayName   | string        | The name you define during the meeting initialization. |
| local         | boolean       | Indicates the participant is local or not.             |
| quality       | string        | Indicates the participant streams quality.             |
| Streams       | Map of Stream | Returns Video & Audio Streams.                         |

### Stream Object properties

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id          |
| codec         | string | Video/Audio codec. |
| kind          | string | Stream Kind.       |
| track         | string | MediaStreamTrack   |

## 2. Other Participants (Except You)

Other participants Map is used to get all the participants (except you) in the meeting at any given time.

Other participants Map contains same properties as [LocalParticipant](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### ParticipantTile

```js title=participant_tile.dart
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';
import 'package:visibility_detector/visibility_detector.dart';

import '../../utils/toast.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  final bool isLocalParticipant;
  const ParticipantTile(
      {Key? key, required this.participant, this.isLocalParticipant = false})
      : super(key: key);

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? shareStream;
  Stream? videoStream;
  Stream? audioStream;
  String? quality;

  bool shouldRenderVideo = true;

  @override
  void initState() {
    _initStreamListeners();
    super.initState();

    widget.participant.streams.forEach((key, Stream stream) {
      setState(() {
        if (stream.kind == 'video') {
          videoStream = stream;
        } else if (stream.kind == 'audio') {
          audioStream = stream;
        } else if (stream.kind == 'share') {
          shareStream = stream;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return VisibilityDetector(
      key: Key("tile_${widget.participant.id}"),
      onVisibilityChanged: (visibilityInfo) {
        if (visibilityInfo.visibleFraction > 0 && !shouldRenderVideo) {
          if (videoStream?.track.paused ?? true) {
            videoStream?.track.resume();
          }
          setState(() => shouldRenderVideo = true);
        } else if (visibilityInfo.visibleFraction == 0 && shouldRenderVideo) {
          videoStream?.track.pause();
          setState(() => shouldRenderVideo = false);
        }
      },
      child: Container(
        margin: const EdgeInsets.all(4.0),
        decoration: BoxDecoration(
          color: Theme.of(context).backgroundColor.withOpacity(1),
          border: Border.all(
            color: Colors.white38,
          ),
        ),
        child: AspectRatio(
          aspectRatio: 1,
          child: Padding(
            padding: const EdgeInsets.all(4.0),
            child: Stack(
              children: [
                videoStream != null && shouldRenderVideo
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
                        color:
                            Theme.of(context).backgroundColor.withOpacity(0.2),
                        border: Border.all(
                          color: Colors.white24,
                        ),
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
                        : () {
                            if (audioStream != null) {
                              widget.participant.disableMic();
                            } else {
                              toastMsg("Mic requested");
                              widget.participant.enableMic();
                            }
                          },
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
                        : () {
                            if (videoStream != null) {
                              widget.participant.disableWebcam();
                            } else {
                              toastMsg("Webcam requested");
                              widget.participant.enableWebcam();
                            }
                          },
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
                                      onPressed: () {
                                        Navigator.of(context).pop();
                                      },
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

    widget.participant.on(Events.streamPaused, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
          videoStream = _stream;
        } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
          audioStream = _stream;
        } else if (_stream.kind == 'share' && shareStream?.id == _stream.id) {
          shareStream = _stream;
        }
      });
    });

    widget.participant.on(Events.streamResumed, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
          videoStream = _stream;
        } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
          audioStream = _stream;
        } else if (_stream.kind == 'share' && shareStream?.id == _stream.id) {
          shareStream = _stream;
        }
      });
    });
  }
}
```

```js title=participant_grid_view.dart
import 'dart:developer';
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';
import 'participant_tile.dart';

class ParticipantGridView extends StatefulWidget {
  final Meeting meeting;
  const ParticipantGridView({
    Key? key,
    required this.meeting,
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
    localParticipant = widget.meeting.localParticipant;
    participants = widget.meeting.participants;

    // Setting meeting event listeners
    setMeetingListeners(widget.meeting);
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

  void setMeetingListeners(Meeting _meeting) {
    // Called when participant joined meeting
    _meeting.on(
      Events.participantJoined,
      (Participant participant) {
        final newParticipants = participants;
        newParticipants[participant.id] = participant;
        setState(() {
          participants = newParticipants;
        });
      },
    );

    // Called when participant left meeting
    _meeting.on(
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
    _meeting.on(Events.speakerChanged, (_activeSpeakerId) {
      setState(() {
        activeSpeakerId = _activeSpeakerId;
      });

      log("meeting speaker-changed => $_activeSpeakerId");
    });
  }
}
```

## 3. Participant Related Events

1. **participantJoined** - Whenever any new participant join the meeting, `participantJoined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participantJoined` event trigger and return the [participant object](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **participantLeft** - Whenever any participant leave/exit the meeting, `participantLeft` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `participantLeft` event trigger and return the [participant object](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **presenterChanged** - Whenever any participant present/screenshare their screen/window in meeting, `presenterChanged` event will trigger and return the presenter `participantId`.

4. **streamEnabled** - Whenever any participant enabled mic/webcam in meeting, `streamEnabled` event will trigger and return [Stream Map](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).

5. **streamDisabled** - Whenever any participant disabled mic/webcam in meeting, `streamDisabled` event will trigger and return [Stream Map](/flutter/guide/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).

```js
// Adding event listner
meeting.on(Events.participantJoined, (Participant participant) {
  print("new participant => $participant");
  },
);

meeting.on(Events.participantLeft, (Participant participant) {
  print("new participant => $participant");
  },
);
```
