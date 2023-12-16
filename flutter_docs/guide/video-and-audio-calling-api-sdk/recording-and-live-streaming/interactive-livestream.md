---
title: Interactive Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Interactive Livestream (HLS)
pagination_label: Interactive Livestream (HLS)
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: interactive-livestream
---

# Interactive Livestream (HLS)

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can take part in a variety of activities like live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

<center>

![Screen Share with Audio](https://cdn.videosdk.live/website-resources/docs-resources/mobile_hls.png)

</center>

VideoSDK also allows you to configure the interactive livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop Livestreaming.

### `startHls()`

`startHls()` can be used to start a interactive livestream of the meeting which can be accessed from the `Room` object. This method accepts one parameter:

- `config (optional)`: This parameter will define how the livestream layout should look like.

  ```js
  Map<String, dynamic> config = {
    // highlight-next-line
    // Layout Configuration
    "layout": {
      "type": "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
      "priority": "SPEAKER", // "PIN", Default : "SPEAKER"
      "gridSize": 4, // MAX : 4
    },

    // highlight-next-line
    // Theme of recording
    "theme": "DARK", //  "LIGHT" | "DEFAULT"

    // highlight-next-line
    // `mode` is used to either record video & audio both or only audio.
    "mode": "video-and-audio", // "audio", Default : "video-and-audio"

    // highlight-next-line
    // Quality of recording and is only applicable to `video-and-audio` type mode.
    "quality": "high", // "low" | "med",  Default : "med"

    //highlight-start
    // This mode refers to orientation of recording.
    // landscape : Record the meeting in horizontally
    // portrait : Record the meeting in vertically (Best for mobile view)
    //highlight-end
    "orientation": "landscape", // "portrait",  Default : "landscape"
  };

  room.startHls(config: config);
  ```

### `stopHls()`

- `stopHls()` is used to stop the meeting livestream which can be accessed from the `Room` object.

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
            Map<String, dynamic> config = {
              "layout": {
                "type": "GRID",
                "priority": "SPEAKER",
                "gridSize": 4,
              },
              "theme": "DARK",
              "mode": "video-and-audio",
              "quality": "high",
              "orientation": "portrait",
            };
            _room.startHls(config: config);
          },
          child: const Text("Start HLS"),
        ),
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

:::tip
If you want to learn more about the Interactive Livestream and how you can implement it in your own platform, you can checkout this [guide](/flutter/guide/interactive-live-streaming/integrate-hls/overview).
:::

### Event associated with HLS

- **hlsStateChanged** - Whenever meeting HLS state changes, then `hlsStateChanged` event will trigger.

- You can get the `playbackHlsUrl` and `livestreamUrl` of the HLS to play it on the Viewer side when the state changes to `HLS_PLAYABLE`
  - `playbackHlsUrl` - Live HLS with playback support
  - `livestreamUrl` - Live HLS without playback support

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
        log("PLAYBACKHLS URL -- " + data['playbackHlsUrl']);
    });
  }
  //highlight-end
}
```

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/flutter/api/sdk-reference/room-class/methods#starthls)
- [stopHls](/flutter/api/sdk-reference/room-class/methods#stophls)
- [Events.hlsStateChanged](/flutter/api/sdk-reference/room-class/events#hlsstatechanged)
