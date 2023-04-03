---
title: Participant Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Participant Events
pagination_label: Participant Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-events
---

# Participant Events

VideoSDK provides multiple types of events which can be listened to know the about the participants in the room.

Here are the events which specifically relate to the participants.

### Events.participantJoined

- This event is triggered when someone joins the meeting and return the `Participant` object as parameter.
- This event can be subscribed from the `Room` object.

### Events.participantLeft

- This event is triggered when the someone leaves the meeting.
- This event can be subscribed from the `Room` object.

### Events.cameraRequested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.
- This event can be subscribed from the `Room` object.

### Events.micRequested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.
- This event can be subscribed from the `Room` object.

### Example

Here is the usage of all the events mentioned in this page.

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
    room.on(Events.participantJoined, (Participant participant) {
      // New Participant joined the room
    });

    room.on(Events.participantLeft, (String participantId) {
      // Participant left the room
    });

    room.on(Events.cameraRequested, (data) {
      String? participantId = data["participantId"];

      Function accept = data["accept"];
      Function reject = data["deny"];

      // participantId, will be the id of participant who requested to enable camera

      // if accept request
      accept();

      // if reject request
      reject();
    });

    room.on(Events.micRequested, (data) {
      String participantId = data["participantId"];

      Function accept = data["accept"];
      Function reject = data["reject"];

      // participantId, will be the id of participant who requested to enable camera

      // if accept request
      accept();

      // if reject request
      reject();
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [Events.participantJoined](/flutter/api/sdk-reference/room-class/events#participantjoined)
- [Events.participantLeft](/flutter/api/sdk-reference/room-class/events#participantleft)
- [Events.cameraRequested](/flutter/api/sdk-reference/room-class/events#camerarequested)
- [Events.micRequested](/flutter/api/sdk-reference/room-class/events#micrequested)
