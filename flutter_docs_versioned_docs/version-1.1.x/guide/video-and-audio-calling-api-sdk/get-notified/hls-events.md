---
title: HLS Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: HLS Events
pagination_label: HLS Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: hls-events
---

# HLS Events - Flutter

VideoSDK provides `hlsStateChanged` event which will notify you of the current state of HLS for the meeting.

### Events.hlsStateChanged

- This event will be triggered when the meeting's HLS status changed.
- This event can be subscribed from `Room` Object.

:::note
`downstreamUrl` is now depecated. Use `playbackHlsUrl` or `livestreamUrl` in place of `downstreamUrl`
:::

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
    room.on(Events.hlsStateChanged, (Map<String, dynamic> data) {
      //Status can be :: HLS_STARTING
      //Status can be :: HLS_STARTED
      //Status can be :: HLS_PLAYABLE
      //Status can be :: HLS_STOPPING
      //Status can be :: HLS_STOPPED
      log("Meeting HLS status : ${data['status']}");
      if (data['status'] == "HLS_PLAYABLE")
        log("PLAYBACKHLS URL -- " + data['playbackHlsUrl']);
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [Events.hlsStateChanged](/flutter/api/sdk-reference/room-class/events#hlsstatechanged)
