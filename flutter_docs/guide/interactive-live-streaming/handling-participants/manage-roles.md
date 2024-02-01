---
title: Manage Roles - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Roles
pagination_label: Manage Roles
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-roles
---

# Manage Roles

## Roles with VideoSDK

When doing interactive live streaming maintaining the role of users is quite important. To help manage these roles better, VideoSDK allows a participant with two types of modes:

**`1. CONFERENCE`** When a participant is joining with mode set to `CONFERENCE`, we will be able to **publish and consume the media** of other participants and also interact with them using the features like chat, poll etc.

**`2. VIEWER`** When a participant is joining with mode set to `VIEWER`, that participant is **not allowed to publish or consume any media** from other participants. Although they can interact with other participants using chat, polls etc.

![manage-roles](https://cdn.videosdk.live/website-resources/docs-resources/meeting_modes.jpg)

## When to use the Roles?

##### 1. Simple Adaptive Streaming

- Simple Adaptive Streaming (SAS) is a type of livestreaming that requires minimal interaction between the host and viewers.

- It is particularly useful for events with a large number of viewers who prefer not to engage with the host.

- In SAS, each speaker attends a VideoSDK meeting in `CONFERENCE` mode, while viewers can simply watch the livestream using the `downstreamUrl`. Unlike the speakers, viewers do not need to join the meeting in `CONFERENCE` or `VIEWER` mode. This allows for a seamless streaming experience without any unnecessary interruptions or distractions.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_simple_ils.mp4" height="500px" width={"100%"} />

</div>

##### 2. Adaptive Streaming with increased engagement

- If you're looking to increase engagement with your audience during a live streaming event, consider using Adaptive Streaming technology. With this approach, you can incorporate interactive features such as polls and conversations, and give viewers the ability to join and leave the livestream as the host decides.

- To set this up, have all speakers join as `CONFERENCE` mode participants, while the audience joins as `VIEWER` mode participants. This way, everyone can participate in the interactive elements of the live stream and create a more dynamic and engaging experience for all.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_livestream_interaction_1.mp4" height="500px" width={"100%"} />

</div>

## Using roles

The mode of the participants is set during the creating the room.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

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

  Mode? localParticipantMode;

  @override
  void initState() {
    //Creating a new Room based on the passed meetingId and token from the Joining Screen
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: true,
      camEnabled: true,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
      //highlight-next-line
      mode: Mode.CONFERENCE, // or Mode.VIEWER
    );

    _room.join();

    setRoomEventListener();

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return  SafeArea(
      child: Scaffold(
        backgroundColor: Colors.black,
        //highlight-start
        //Show Speaker view if mode is Conference else show Viewer View
        body: localParticipantMode != null
            ? localParticipantMode == Mode.CONFERENCE
                ? ILSSpeakerView(room: _room)
                : localParticipantMode == Mode.VIEWER
                    ? ILSViewerView(room: _room)
                    : null
            : const Center(
                child: Text("Joining...")),
                //highlight-end
      ),
    );
  }

  void setRoomEventListener(){
    _room.on(Events.roomJoined, (){
      setState(()=>localParticipantMode = _room.localParticipant.mode);
    });

    _room.on(Events.participantModeChanged, (Map<String, dynamic> data){
      if(data['participantId']){
        setState(()=>localParticipantMode = _room.localParticipant.mode);
      }
    });
  }
}
```

## Getting Participant Mode

You can identify the participants role by using `mode` property from `Participant` object.

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

  @override
  Widget build(BuildContext context) {
    //highlight-next-line
    return Text("${widget.participant.displayName} is in ${widget.participant.mode.name}");
  }
}
```

## Changing Participant's Mode

Let's say you are hosting a livestream and you want one of your viewer to join the livestream with you. In this case you can change the mode of the participant using the `changeMode()` of the `Room` object.

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
          onPressed:(){
            //highlight-next-line
            _room.changeMode(Mode.VIEWER);
          },
          child: const Text("Change Mode to Viewer"),
        ),
        ElevatedButton(
          onPressed:(){
            //highlight-next-line
            _room.changeMode(Mode.CONFERENCE);
          },
          child: const Text("Change Mode to Speaker"),
        ),
      ]
    );
  }
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [createRoom](/flutter/api/sdk-reference/videosdk-class/methods#createroom)
- [Room](/flutter/api/sdk-reference/room-class/introduction)
- [Participant](/flutter/api/sdk-reference/participant-class/introduction)
- [changeMode](/flutter/api/sdk-reference/room-class/methods#changemode)
