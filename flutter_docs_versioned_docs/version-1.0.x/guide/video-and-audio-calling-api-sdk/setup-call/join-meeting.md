---
title: Join Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Join Meeting
pagination_label: Join Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-meeting
---

# Join Meeting - Flutter

### Overview

Before joining the meeting, it has to be initialized. If you have not initialized a meeting/room yet, you can [follow the guide here.](./initialise-meeting)

### `join()`

- To join the meeting you can call the `join()` on the created `Room` object.

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
    );

    //highlight-start
    //Calling Join after the room object is created
    _room.join()
    //highlight-end

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }
}

```

### Events associated with Join

Following callbacks are received when a participant is successfully joined.

- [Local Participant](../concept-and-architecture#2-participant) will receive a [`Events.roomJoined`](/flutter/api/sdk-reference/room-class/events#roomjoined) event, when successfully joined.
- [Remote Participant](../concept-and-architecture#2-participant) will receive a [`Events.participantJoined`](/flutter/api/sdk-reference/room-class/events#participantjoined) event with the newly joined `Participant` object from the event callback.

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

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }

  //highlight-start
  void setupRoomEventListener() {
    room.on(Events.roomJoined, (){
      // Room/Meeting joined Successfully
    });
    room.on(Events.participantJoined, (Participant participant){
      // New Participant joined the meeting
    });
  }
  //highlight-end
}
```

#### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [join()](/react/api/sdk-reference/use-meeting/methods#join)
- [roomJoined](/flutter/api/sdk-reference/room-class/events#roomjoined)
- [participantJoined](/flutter/api/sdk-reference/room-class/events#participantjoined)
