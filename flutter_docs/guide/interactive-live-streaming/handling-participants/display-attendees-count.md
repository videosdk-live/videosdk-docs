---
title: Display Attendees Count - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Display Attendees Count
pagination_label: Display Attendees Count
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-attendees-count
---

# Display Attendees Count

In this guide, we will see how you can display the number of attendees in realtime.

:::note
Before going forward in this guide, do make sure all the attendees join the meeting with mode as `VIEWER`
:::

**`Step 1:`** We will get the `participants` from the `Room` object. and filter the `VIEWER` participants from it. We will also added the `participantJoined`, `participantLeft` and `participantModeChanged` listerners to keep the list of attendees updated.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ViewerScreen extends StatefulWidget {
  ...
}

class _ViewerScreenState extends State<ViewerScreen> {
  late Room room;

  Map<String, Participant> _attendees = {};

  @override
  void initState() {
    //highlight-next-line
    ...

    updateAttendees();

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }

  //highlight-start
  void updateAttendees(){
    Map<String, Participant> attendees = {};
    if(room.localParticipant.mode == Mode.VIEWER);
    attendees.putIfAbsent(
        room.localParticipant.id, () => room.localParticipant);
    room.participants.values.forEach((participant) {
      if (participant.mode == Mode.VIEWER) {
        attendees.putIfAbsent(participant.id, () => participant);
      }
    });
    setState(()=>_attendees = attendees);
  }
  //highlight-end

  void setupRoomEventListener() {
    room.on(Events.roomJoined, () {
      //highlight-start
      updateAttendees();
      //highlight-end
    });

    room.on(Events.participantModeChanged, (Map<String, dynamic> data){
      //highlight-start
      updateAttendees()
      //highlight-end
    });

    room.on(Events.participantJoined, (Participant participant) {
      //highlight-start
      updateAttendees();
      //highlight-end
    });


    room.on(Events.participantLeft, (String participantId) {
      //highlight-start
      updateAttendees();
      //highlight-end
    });
  }
}
```

**`Step 2:`** With all the participants, we will filter out participants who have joined as a `VIEWER` and then display that count.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ViewerScreen extends StatefulWidget {
  ...
}

class _ViewerScreenState extends State<ViewerScreen> {
  late Room room;

  Map<String, Participant> attendees = {};

  @override
  void initState() {
    //highlight-next-line
    ...

    attendees.putIfAbsent(
        room.localParticipant.id, () => room.localParticipant);
    room.participants.values.forEach((participant) {
      if (participant.mode == Mode.VIEWER) {
        attendees.putIfAbsent(participant.id, () => participant);
      }
    });

    setupRoomEventListener();
  }

  //higlight-start
  @override
  Widget build(BuildContext context) {
    return Text("Total attendees :: ${attendees.length}");
  }
  //higlight-end

  void setupRoomEventListener() {
    //highlight-next-line
    ...
  }
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [participants](/flutter/api/sdk-reference/room-class/properties#participants)
