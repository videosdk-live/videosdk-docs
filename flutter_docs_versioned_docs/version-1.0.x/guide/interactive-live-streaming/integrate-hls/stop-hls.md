---
title: Stop HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Stop HLS
pagination_label: Stop HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: stop-hls
---

# Stop HLS

This could refer to stopping the transmission of an ongoing HLS stream, which would mean the stream is no longer available to viewers.

## Stopping HLS

`stopHls()` can be used to stop a interactive livestream of the meeting which can be accessed from the `Room` object.

### Example

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
        //highlight-start
        ElevatedButton(
          onPressed:(){
            _room.stopHls();
          },
          child: const Text("Stop HLS"),
        ),
    //highlight-end
      ]
    );
  }
}
```

## Event associated with HLS

- **hlsStateChanged** - Whenever meeting HLS state changes, then `hlsStateChanged` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `HLS_PLAYABLE`

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
    room.on(Events.hlsStateChanged, (Map<String, dynamic> data) {
      //Status can be :: HLS_STARTING
      //Status can be :: HLS_STARTED
      //Status can be :: HLS_PLAYABLE
      //Status can be :: HLS_STOPPING
      //Status can be :: HLS_STOPPED
      log("Meeting HLS status : ${data['status']}");
      if (data['status'] == "HLS_PLAYABLE")
        log("DOWNSTREAM URL -- " + data['downstreamUrl']);
    });
  }
  //highlight-end
}
```

## Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/docs/tutorials/customized-layout). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/flutter/api/sdk-reference/room-class/methods#starthls)
- [stopHls](/flutter/api/sdk-reference/room-class/methods#stophls)
- [Events.hlsStateChanged](/flutter/api/sdk-reference/room-class/events#hlsstatechanged)
