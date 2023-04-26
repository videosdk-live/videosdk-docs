---
title: Manage On-Screen Participants - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage On-Screen Participants
pagination_label: Manage On-Screen Participants
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-on-screen-participants
---

# Manage On-Screen Participants

It is important that only the necessary person are present on the screen when livestream is on. To handle these, we will be using the `pin` and `unpin` methods of the `Participant` object.

:::note
To ensure only the hosts/speakers are shown in the grid, you should use the `SPOTLIGHT` layout and `pin` as the priority when starting the interactive livestream.
:::

Let us first explore two methods that we will be using to manage on-screen participats.

### `pin()`

With these method you can pin any participant's Camera, Screen Share or both. These can be usefull to identify the participants based on which you can perform rendering participant grid.

### `unpin()`

With these methods you can unpin any participant's Camera, Screen Share or both. These can be usefull to reset pin state of the participant.

### Managing On-Screen Participants

1. If you want to pin all the hosts/speakers automatically, you can do it by listenting to the `Events.roomJoined` callback and `Events.participantModeChanged`, where you can `pin` and `unpin` based on the mode.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

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
    room.on(Events.roomJoined, () {
      //highlight-start
      //We will pin the participant if mode is conference
      if(room.localParticipant.mode == Mode.CONFERENCE){
        room.localParticipant.pin();
      }
      //highlight-end
    });

    room.on(Events.participantModeChanged, (Map<String, dynamic> data){
      //highlight-start
      //We will pin the participant if mode is conference else unpin him
      if (data['participantId'] == room.localParticipant.id) {
        if (room.localParticipant.mode == Constants.modes.CONFERENCE) {
          room.localParticipant.pin();
        } else {
          room.localParticipant.unpin();
        }
      }
      //highlight-end
    });
  }
  //highlight-end
}
```

2. When rendering the participant grid on the Speaker side, make sure to show only the participants who are in `CONFERENCE` mode. You can filter the participants as shown in below examples.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room room;

  Map<String, Participant> _speakers = {};

  @override
  void initState() {
    //highlight-next-line
    ...

    updateSpekers();

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }

  //highlight-start
  void updateSpeakers(){
    Map<String, Participant> speakers = {};
    if(room.localParticipant.mode == Mode.CONFERENCE);
    speakers.putIfAbsent(
        room.localParticipant.id, () => room.localParticipant);
    room.participants.values.forEach((participant) {
      if (participant.mode == Mode.CONFERENCE) {
        speakers.putIfAbsent(participant.id, () => participant);
      }
    });
    setState(()=>_speakers = speakers);
  }
  //highlight-end

  void setupRoomEventListener() {
    room.on(Events.roomJoined, () {
      //highlight-start
      updateSpeakers();
      //highlight-end
    });

    room.on(Events.participantModeChanged, (Map<String, dynamic> data){
      //highlight-start
      updateSpeakers()
      //highlight-end
    });

    room.on(Events.participantJoined, (Participant participant) {
      //highlight-start
      updateSpeakers();
      //highlight-end
    });


    room.on(Events.participantLeft, (String participantId) {
      //highlight-start
      updateSpeakers();
      //highlight-end
    });
  }
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [pin](/flutter/api/sdk-reference/participant-class/methods#pin)
- [unpin](/flutter/api/sdk-reference/participant-class/methods#unpin)
- [participants](/flutter/api/sdk-reference/room-class/properties#participants)
