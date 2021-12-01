---
title: Flutter
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in Flutter SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Flutter"
pagination_label: "Flutter"
keywords:
  - flutter sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: flutter
---

## Contents

- [How to Access Single Participant?](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/flutter#how-to-access-single-participant)
- [How to Render Remote Participant?](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/flutter#how-to-render-participant)

## How to Access Single Participant?

You can get single participant object by passing id.

```js title="participant.dart"
import 'package:videosdk/participant.dart';

// Access single participant using id
Participant participant = meeting.participants["<participant-id>"];
```

## How to Render Participant?

### 1. Get participants from meeting and iterating over it

We will get participants from meeting object, participants is always in the form of [Map](https://api.dart.dev/stable/2.14.4/dart-core/Map-class.html).

```js title="list_remote_participants.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/participant.dart';

class ListRemoteParticipants extends StatelessWidget {
  final Map<String, Participant> participants;
  const ListRemoteParticipants({
    Key? key,
    required this.participants,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        for (Participant perticipant in participants.values)
        RemoteParticipant(
          key: ValueKey(perticipant.id),
          participant: participants[perticipant.id]!,
        ),
      ],
    );
  }
}
```

### 2. Create Widget for Handling Streams

In this step, we will create `RemoteParticipant` widget which accepts `participant` as props and responsible for handling video and audio streams for particular participant.

```js title="remote_participant.dart"

class RemoteParticipant extends StatefulWidget {
  final Participant participant;

  RemoteParticipant({Key? key, required this.participant}) : super(key: key);

  @override
  RemoteParticipantState createState() => RemoteParticipantState();
}


class RemoteParticipantState extends State<RemoteParticipant> {
  late final Participant participant;

  Stream? shareStream;
  Stream? videoStream;
  Stream? audioStream;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: AspectRatio(
        aspectRatio: 3 / 2,
        child: Container(
          padding: const EdgeInsets.all(4.0),
          child: Row(
            children: [
              if (videoStream != null)
                Expanded(
                  child: RTCVideoView(
                    videoStream?.renderer as RTCVideoRenderer,
                    objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                  ),
                ),
              if (shareStream != null)
                Expanded(
                  child: RTCVideoView(
                    shareStream?.renderer as RTCVideoRenderer,
                    objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                  ),
                )
            ],
          ),
        ),
      ),
    );
  }
}

```

### 3. Set Video, Share Stream from streams

In this step we will set streams into state from particiapnt object

```js title="remote_participant.dart"

class RemoteParticipantState extends State<RemoteParticipant> {
  late final Participant participant;

  Stream? shareStream;
  Stream? videoStream;
  Stream? audioStream;

  @override
  initState() {
    _initStreamListners(); // explained in next step

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
    return Container(
      child: AspectRatio(
        aspectRatio: 3 / 2,
        child: Container(
          padding: const EdgeInsets.all(4.0),
          child: Row(
            children: [
              if (videoStream != null)
                Expanded(
                  child: RTCVideoView(
                    videoStream?.renderer as RTCVideoRenderer,
                    objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                  ),
                ),
              if (shareStream != null)
                Expanded(
                  child: RTCVideoView(
                    shareStream?.renderer as RTCVideoRenderer,
                    objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                  ),
                )
            ],
          ),
        ),
      ),
    );
  }
}

```

### 4.Listning to participant events

In this step we will initialize participant event listners for that participant audio, video adn share stream.

```js title="remote_participant.dart"

class RemoteParticipantState extends State<RemoteParticipant> {
  late final Participant participant;

  Stream? shareStream;
  Stream? videoStream;
  Stream? audioStream;

  @override
  initState() {
    _initStreamListners(); // explained in next step

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

  _initStreamListners() {
    widget.participant.on("stream-enabled", (Stream stream) {
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

    widget.participant.on("stream-disabled", (Stream stream) {
      setState(() {
        if (stream.kind == 'video' && videoStream?.id == stream.id) {
          videoStream = null;
        } else if (stream.kind == 'audio' && audioStream?.id == stream.id) {
          audioStream = null;
        } else if (stream.kind == 'share' && shareStream?.id == stream.id) {
          shareStream = null;
        }
      });
    });

    widget.participant.on("stream-paused", (Stream stream) {
      setState(() {
        if (stream.kind == 'video' && videoStream?.id == stream.id) {
          videoStream = stream;
        } else if (stream.kind == 'audio' && audioStream?.id == stream.id) {
          audioStream = stream;
        } else if (stream.kind == 'share' && shareStream?.id == stream.id) {
          shareStream = stream;
        }
      });
    });

    widget.participant.on("stream-resumed", (Stream stream) {
      setState(() {
        if (stream.kind == 'video' && videoStream?.id == stream.id) {
          videoStream = stream;
        } else if (stream.kind == 'audio' && audioStream?.id == stream.id) {
          audioStream = stream;
        } else if (stream.kind == 'share' && shareStream?.id == stream.id) {
          shareStream = stream;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: AspectRatio(
        aspectRatio: 3 / 2,
        child: Container(
          padding: const EdgeInsets.all(4.0),
          child: Row(
            children: [
              if (videoStream != null)
                Expanded(
                  child: RTCVideoView(
                    videoStream?.renderer as RTCVideoRenderer,
                    objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                  ),
                ),
              if (shareStream != null)
                Expanded(
                  child: RTCVideoView(
                    shareStream?.renderer as RTCVideoRenderer,
                    objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                  ),
                )
            ],
          ),
        ),
      ),
    );
  }
}

```
