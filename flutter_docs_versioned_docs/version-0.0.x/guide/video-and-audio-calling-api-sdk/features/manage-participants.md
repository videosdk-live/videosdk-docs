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

You can acces localParticipant from the [meeting object](/flutter/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

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

Other participants Map contains same properties as [LocalParticipant](/flutter/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### Local And Other Participants

```js title="LocalParticipant.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/meeting.dart';
import 'package:videosdk/participant.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';
import 'package:videosdk/stream.dart';

class LocalParticipant extends StatefulWidget {
  final Participant localParticipant;
  final Meeting meeting;
  LocalParticipant({
    Key? key,
    required this.localParticipant,
    required this.meeting,
  }) : super(key: key);
  @override
  LocalParticipantState createState() => LocalParticipantState();
}
class LocalParticipantState extends State<LocalParticipant> {
  Stream? videoStream;
  Stream? audioStream;
  @override
  initState() {
    _initStreamListners();
    super.initState();
  }
  _initStreamListners() {
   // Participant `stream-enabled` event, discussed in next section "Participant Related Events"
    widget.localParticipant.on(
      "stream-enabled",
      (Stream _stream) {
        setState(
          () {
            if (_stream.kind == 'video') {
              videoStream = _stream;
            } else if (_stream.kind == 'audio') {
              audioStream = _stream;
            }
          },
        );
      },
    );
    // Participant `stream-disabled` event, discussed in next section "Participant Related Events"
    widget.localParticipant.on(
      "stream-disabled",
      (Stream _stream) {
        if (_stream.kind == 'video') {
          if (videoStream?.id == _stream.id) {
            setState(
              () {
                videoStream = null;
              },
            );
          }
        } else if (_stream.kind == 'audio') {
          if (audioStream?.id == _stream.id) {
            setState(
              () {
                audioStream = null;
              },
            );
          }
        }
      },
    );
  }
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          child: Column(
            children: [
              Text(
                'Name: ${widget.localParticipant.displayName}',
                overflow: TextOverflow.fade,
              ),
              Text(
                'Video On: ${videoStream != null ? "Yes" : "No"}',
                overflow: TextOverflow.fade,
              ),
              Text(
                'Audio On: ${audioStream != null ? "Yes" : "No"}',
                overflow: TextOverflow.fade,
              ),
            ],
          ),
        ),
        Container(
          height: 240.0,
          width: 240.0,
          child: videoStream?.renderer != null && videoStream?.track != null
              ? RTCVideoView(
                  videoStream?.renderer as RTCVideoRenderer,
                  objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                )
              : FittedBox(
                  fit: BoxFit.contain,
                  child: Icon(Icons.person),
                ),
        ),
        Wrap(
          children: [
            ElevatedButton(
              onPressed: widget.meeting.disableWebcam,
              child: Text("disableWebcam"),
            ),
            ElevatedButton(
              onPressed: widget.meeting.enableWebcam,
              child: Text("enableWebcam"),
            ),
            ElevatedButton(
              onPressed: widget.meeting.muteMic,
              child: Text("muteMic"),
            ),
            ElevatedButton(
              onPressed: widget.meeting.unmuteMic,
              child: Text("unmuteMic"),
            ),
            ElevatedButton(
              onPressed: widget.meeting.join,
              child: Text("join"),
            ),
            ElevatedButton(
              onPressed: widget.meeting.leave,
              child: Text("leave"),
            ),
          ],
        ),
      ],
    );
  }
}

```

```js title="ListParticipants.dart"
import 'package:flutter/material.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';
import 'package:videosdk/participant.dart';
import 'package:videosdk/stream.dart';

class ListParticipants extends StatelessWidget {
  final Map<String, Participant> participants;
  const ListParticipants({
    Key? key,
    required this.participants,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: [
        for (dynamic participant in participants.values)
          Container(
            key: ValueKey('${participant.id}_container'),
            width: 240.0,
            height: 240.0,
            child: RemoteParticipant(
              key: ValueKey(participant.id),
              participant: participants[participant.id]!,
            ),
          ),
      ],
    );
  }
}
```

```js title="RemoteParticipant.dart"

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';
import 'package:videosdk/participant.dart';
import 'package:videosdk/stream.dart';

class RemoteParticipant extends StatefulWidget {
  final Participant participant;
  RemoteParticipant({Key? key, required this.participant}) : super(key: key);
  @override
  RemoteParticipantState createState() => RemoteParticipantState();
}
class RemoteParticipantState extends State<RemoteParticipant> {
  Stream? videoStream;
  Stream? audioStream;
  @override
  initState() {
    _initStreamListners();
    super.initState();
  }
  _initStreamListners() {
    // Participant `stream-enabled` event, discussed in next section "Participant Related Events"
    widget.participant.on("stream-enabled", (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video') {
          videoStream = _stream;
        } else if (_stream.kind == 'audio') {
          audioStream = _stream;
        }
      });
    });

    // Participant `stream-disabled` event, discussed in next section "Participant Related Events"
    widget.participant.on("stream-disabled", (Stream _stream) {
      if (_stream.kind == 'video') {
        if (videoStream?.id == _stream.id) {
          setState(() {
            videoStream = null;
          });
        }
      } else if (_stream.kind == 'audio') {
        if (audioStream?.id == _stream.id) {
          setState(() {
            audioStream = null;
          });
        }
      }
    });
  }
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 240.0,
      width: 240.0,
      child: Stack(
        fit: StackFit.expand,
        children: [
          if (videoStream?.renderer != null && videoStream?.track != null)
            RTCVideoView(
              videoStream?.renderer as RTCVideoRenderer,
              objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
            )
          else
            Container(
              child: FittedBox(
                fit: BoxFit.contain,
                child: Icon(
                  Icons.person,
                ),
              ),
            ),
        ],
      ),
    );
  }
}

```

## 3. Participant Related Events

1. **participant-joined** - Whenever any new participant join the meeting, `participant-joined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participant-joined` event trigger and return the [participant object](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **participant-left** - Whenever any participant leave/exit the meeting, `participant-left` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `participant-left` event trigger and return the [participant object](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **presenter-changed** - Whenever any participant present/screenshare their screen/window in meeting, `presenter-changed` event will trigger and return the presenter `participantId`.

4. **stream-enabled** - Whenever any participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return [Stream Map](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).

5. **stream-disabled** - Whenever any participant disabled mic/webcam in meeting, `stream-disabled` event will trigger and return [Stream Map](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).


```js
// Adding event listner
meeting.on("participant-joined", (Participant participant) {
  print("new participant => $participant");
  },
);

meeting.on("participant-left", (Participant participant) {
  print("new participant => $participant");
  },
);
```
