---
title: RTMP Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: RTMP Events
pagination_label: RTMP Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: rtmp-events
---

# RTMP Events - Flutter

VideoSDK provides `livestreamStateChanged` event which will notify you of the current state of livestream for the meeting.

### Events.livestreamStateChanged

- This event will be triggered when the meeting's livestream status changed.
- This event can be subscribed from the `Room` object.

### Example

Here is the usage of the event mentioned in this page.

```javascript
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
    room.on(Events.livestreamStateChanged, (String status) {
      //Status can be :: LIVESTREAM_STARTING
      //Status can be :: LIVESTREAM_STARTED
      //Status can be :: LIVESTREAM_STOPPING
      //Status can be :: LIVESTREAM_STOPPED
      log("Meeting Livestream status : $status");
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [Events.livestreamStateChanged](/flutter/api/sdk-reference/room-class/events#livestreamstatechanged)
