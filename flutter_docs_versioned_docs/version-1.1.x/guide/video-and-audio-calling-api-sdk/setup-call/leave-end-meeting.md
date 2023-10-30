---
title: Leave or End Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Leave or End Meeting
pagination_label: Leave or End Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting
---

# Leave or End Meeting - Flutter

Participant can choose to leave the meeting without removing all the other participants. This is typically done by `Leave Meeting`.

Alternatively, if the participant is the host or the last person remaining in the session, they can choose `End Meeting` by removing all other participants, which will end the session for everyone.

### `leave()`

To leave the meeting without removing all the participant you need to call `leave()` on the `Room` object.

### `end()`

To leave the meeting by removing all the participant you need to call `end()` on the `Room` object.

#### Example

```jsx
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
        //highlight-start
        ElevatedButton(
          onPressed:(){
            _room.leave();
          },
          child: const Text("Leave Meeting"),
        ),
        ElevatedButton(
          onPressed:(){
            _room.end();
          },
          child: const Text("End Meeting"),
        ),
    //highlight-end
      ]
    );
  }
}
```

:::tip
You should call the `leave()` method on the unmount of your main meeting widget so that meeting is left once the widget is unmounted.
:::

### Events associated with Leave

Following callbacks are received when a participant leaves the meeting.

- [Local Participant](../concept-and-architecture#2-participant) will receive a callback on [`Events.roomLeft`](/flutter/api/sdk-reference/room-class/events#roomleft).
- All [remote participants](../concept-and-architecture#2-participant) will receive a callback [`Events.participantLeft`](/flutter/api/sdk-reference/room-class/events#participantleft) with `participantId`.

### Events associated with End

Following callbacks are received when a participant ends the meeting.

- All [remote participants](../concept-and-architecture#2-participant) and local participant will receive a callback on [`Events.roomLeft`](/flutter/api/sdk-reference/room-class/events#participantleft).

```jsx
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
    room.on(Events.roomLeft, (){
      // Room/Meeting left
    });
    room.on(Events.participantLeft, (String participantId){
      // Participant left the meeting
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [leave()](/flutter/api/sdk-reference/room-class/methods#leave)
- [end()](/flutter/api/sdk-reference/room-class/methods#end)
- [roomLeft](/flutter/api/sdk-reference/room-class/events#roomleft)
- [participantLeft](/flutter/api/sdk-reference/room-class/events#participantleft)
