---
title: Room Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Room Events
pagination_label: Room Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: room-events
---

# Room Events

VideoSDK provides multiple types of events which can be listened to know the current state of the room.

Here are the events which specifically relate to the meeting.

### Events.roomJoined

- This event is triggered when the room is successfully joined.
- This event can be subscribed from the `Room` object.

### Events.roomLeft

- This event is triggered when the room is left.
- This event can be subscribed from the `Room` object.

### Events.speakerChanged

- This event is triggered when the active speaker in the room gets changed.
- This event can be subscribed from the `Room` object.

### Events.presenterChanged

- This event is triggered when the presenter in the room gets changed.
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
      //Room Joined successfully
    });

    room.on(Events.roomLeft, (String? error) {
      //Room Left

      if(error != null) {
        // Room left with error
      }
    });

    room.on(Events.speakerChanged, (String? activeSpeakerId) {
      //Room active speaker has changed
      //Participant ID of current active speaker is activeSpeakerId
    });

    room.on(Events.presenterChanged, (String? presenterId) {
      //Room screen presenter has changed
      //Participant ID of current presenter is presenterId
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [Events.roomJoined](/flutter/api/sdk-reference/room-class/events#roomjoined)
- [Events.roomLeft](/flutter/api/sdk-reference/room-class/events#roomleft)
- [Events.speakerChanged](/flutter/api/sdk-reference/room-class/events#speakerchanged)
- [Events.presenterChanged](/flutter/api/sdk-reference/room-class/events#presenterchanged)
