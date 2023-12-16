---
title: Start HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Start HLS
pagination_label: Start HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-hls
---

# Start HLS - Flutter

Before starting the HLS, the prequisite steps require you to have a VideoSDK Meeting running which you want to use for interactive livestream. To learn more about setting up a interactive live streaming, you can follow the steps [here in the quick start guide.](/flutter/guide/video-and-audio-calling-api-sdk/quick-start-ils)

## Starting HLS

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

:::note
If you want only the conference participants to be seen in the livestream, you can `pin` all the participants in the conference mode and start the livestream with the `SPOTLIGHT` layout and `PIN` as the `PRIORITY`.
:::

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
    //highlight-end
      ]
    );
  }
}
```

## Understanding Layouts

##### 1. GRID Layout

This layout is default layout if no participants are pinned, it will look same as a normal meeting grid layout, when any participant is pinned that participant will be moved on top of the main screen grid above all non pinned participants

While screenshare as well the main view will contain only screenshare media but the side panel view of participant grid will maintain same order of pinned and unpinned participants.

|                       Grid                        |                     Grid with Screenshare                     |
| :-----------------------------------------------: | :-----------------------------------------------------------: |
| ![prebuilt-grid](/img/prebuilt/prebuilt-grid.png) | ![prebuilt-grid-share](/img/prebuilt/prebuilt-grid-share.png) |

##### 2. SIDEBAR Layout

This layout will have one main screen view and other sidebar grid layout. Only pinned participant will be visible in this layout, all unpinned participants will not be visible in this layout. If more than one participant is pinned then the first participant who was pinned will appear in main screen layout and all other remaining pinned particiapants will be visible in sidebar.

If any pinned participant started screenshare then the screenshare media will be visible in main screen layout and all other pinned participants webcam view will be visible in sidebar

|                         Sidebar                         |                      Sidebar with Screenshare                       |
| :-----------------------------------------------------: | :-----------------------------------------------------------------: |
| ![prebuilt-sidebar](/img/prebuilt/prebuilt-sidebar.png) | ![prebuilt-sidebar-share](/img/prebuilt/prebuilt-sidebar-share.png) |

##### 3. SPOTLIGHT Layout

This layout will only contain main screen layout, multiple pinned participants will be visible in main screen view. Same as `SIDEBAR` layout only pinned participants will be visible in main screen.

If any pinned participant started screenshare then only screenshare view will be visible in main screen, no webcam view will be visible when any pinned participant started screenshare.

|                          Spotlight                          |                       Spotlight with Screenshare                        |
| :---------------------------------------------------------: | :---------------------------------------------------------------------: |
| ![prebuilt-spotlight](/img/prebuilt/prebuilt-spotlight.png) | ![prebuilt-spotlight-share](/img/prebuilt/prebuilt-spotlight-share.png) |

## Event associated with HLS

- **hlsStateChanged** - Whenever meeting HLS state changes, then `hlsStateChanged` event will trigger.

- You can get the `playbackHlsUrl` and ` livestreamUrl` of the HLS to play it on the Viewer side when the state changes to `HLS_PLAYABLE`
  - `playbackHlsUrl` - Live HLS with playback support
  - `livestreamUrl` - Live HLS without playback support

:::note
`downstreamUrl` is now depecated. Use `playbackHlsUrl` or `livestreamUrl` in place of `downstreamUrl`
:::

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

## Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/flutter/api/sdk-reference/room-class/methods#starthls)
- [stopHls](/flutter/api/sdk-reference/room-class/methods#stophls)
- [Events.hlsStateChanged](/flutter/api/sdk-reference/room-class/events#hlsstatechanged)
