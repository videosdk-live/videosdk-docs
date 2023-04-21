---
title: RTMP Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: RTMP Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: RTMP Livestream
pagination_label: RTMP Livestream
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: rtmp-livestream
---

# RTMP Livestream

RTMP is a popular protocol for live streaming video content from a VideoSDK to platforms such as YouTube, Twitch, Facebook, and others.

By providing the platform-specific stream key and stream URL, the VideoSDK can connect to the platform's RTMP server and transmit the live video stream.

VideoSDK allows you to livestream your meeting to platform which support RTMP ingestion just by providing the platform-specific stream key and stream URL, we can connect to the platform's RTMP server and transmit the live video stream.

VideoSDK also allows you to configure the livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop RTMP Livestreaming.

### `startLivestream()`

`startLivestream()` can be used to start a RTMP livestream of the meeting which can be accessed from the `Room` object. This method accepts two parameters:

- `1. outputs`: This parameter accepts an array of objects which contains the RTMP `url` and `streamKey` of the platforms you want to start the livestream.

- `2. config (optional)`: This parameter will define how the livestream layout should look like.

  ```js
  var outputs = [
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "<STREAM_KEY>",
    },
    {
      url: "rtmps://",
      streamKey: "<STREAM_KEY>",
    },
  ];
  Map<String, dynamic> config = {
    // highlight-next-line
    // Layout Configuration
    layout: {
      type: "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
      priority: "SPEAKER", // "PIN", Default : "SPEAKER"
      gridSize: 4, // MAX : 4
    },

    // highlight-next-line
    // Theme of livestream
    theme: "DARK", //  "LIGHT" | "DEFAULT"
  };

  room.startLivestream(outputs,config:config);
  ```

### `stopLivestream()`

- `stopLivestream()` is used to stop the meeting livestream which can be accessed from the `Room` object.

#### Example

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
            var outputs = [
              {
                url: "rtmp://a.rtmp.youtube.com/live2",
                streamKey: "<STREAM_KEY>",
              },
              {
                url: "rtmps://",
                streamKey: "<STREAM_KEY>",
              },
            ];
            var liveStreamConfig =  {
              'layout': {
                'type': 'GRID',
                'priority': 'SPEAKER',
                'gridSize': 4,
              },
              'theme': "LIGHT",
            };
            room.startLivestream(outputs, config: livestreamConfig);
          },
          child: const Text("Start Livestream"),
        ),
        ElevatedButton(
          onPressed:(){
            _room.stopLivestream();
          },
          child: const Text("Stop Livestream"),
        ),
    //highlight-end
      ]
    );
  }
}
```

### Event associated with Livestream

- **livestreamStateChanged** - Whenever meeting livestream state changes, then `livestreamStateChanged` event will trigger.

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

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startLivestream](/flutter/api/sdk-reference/room-class/methods#startlivestream)
- [stopLivestream](/flutter/api/sdk-reference/room-class/methods#stoplivestream)
- [Events.livestreamStateChanged](/flutter/api/sdk-reference/room-class/events#livestreamstatechanged)
