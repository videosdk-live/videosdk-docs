---
title: Setup HLS Player | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Setup HLS Player
pagination_label: Setup HLS Player
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: setup-hls-player
---

# Setup HLS Player - Flutter

In this guide, we will create a new Component which will be responsible for playing the HLS stream.
Before starting this guide, make sure you have a VideoSDK meetings setup allowing you to join the room. To learn more about setting up a VideoSDK meeting, follow this quick start guide.

To play the HLS stream we will be using the [flutter_vlc_player](https://pub.dev/packages/flutter_vlc_player) library.

### `1. Setup Component with HLS events`

**`Step 1:`** Let us first start by creating the new `StatefulWidget` named `HlsScreen` which will listen to all the HLS related events and play the HLS stream whenever available.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class HlsScreen extends StatefulWidget {
  final Room room;
  const HlsScreen({super.key, required this.room});

  @override
  State<HlsScreen> createState() => _HlsScreenState();
}

class _HlsScreenState extends State<HlsScreen> {
  //highlight-start
  //Declare state of the HLS and the downstreamUrl
  String hlsState = "HLS_STOPPED";
  String? downstreamUrl;
  //highlight-end

  @override
  void initState() {
    super.initState();
    //highlight-start
    //initialize the state from the room object
    hlsState = widget.room.hlsState;
    downstreamUrl = widget.room.hlsDownstreamUrl;
    //highlight-end

    //setup hlsStateChanged event listener
    setMeetingEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
      ],
    );
  }

  //highlight-start
  // listening to meeting events
  void setMeetingEventListener() {
    widget.room.on(
      Events.hlsStateChanged,
      (Map<String, dynamic> data) {
        String status = data['status'];
        if (mounted) {
          setState(() {
            hlsState = status;
            //we will update the downstream URL if the HLS state is HLS_PLAYABLE and HLS_STOPPED
            if (status == "HLS_PLAYABLE" || status == "HLS_STOPPED") {
              downstreamUrl = data['downstreamUrl'];
            }
          });
        }
      },
    );
  }
  //highlight-end
}
```

**`Step 2:`** Now let's add the placeholder that will be shown when there is no active HLS. For these, we will use the `downstreamUrl` identify if there is an active HLS.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './livestream_player.dart';

class HlsScreen extends StatefulWidget {
  final Room room;
  //highlight-next-line
  ...
}

class _HlsScreenState extends State<HlsScreen> {
  String hlsState = "HLS_STOPPED";
  String? downstreamUrl;

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        //Render the text placeholder if downstream url is null
        downstreamUrl != null
              ? LivestreamPlayer(downstreamUrl: downstreamUrl!)
              : const Text("Host has not started the HLS"),
      ],
    );
  }

  // listening to meeting events
  void setMeetingEventListener() {
    //highlight-next-line
    ...
  }
}
```

### `2. Playing HLS stream`

**`Step 1:`** We will be using the [flutter_vlc_player](https://pub.dev/packages/flutter_vlc_player) library to play the HLS stream. So let's start by installing the library.

```bash
flutter pub add flutter_vlc_player
```

**`Step 2:`** Next we will be `StatefulWidget` named `LivestreamPlayer` which will play our livestream from the provided `downstreamUrl`.

```js
import 'package:flutter/material.dart';
import 'package:flutter_vlc_player/flutter_vlc_player.dart';

class LivestreamPlayer extends StatefulWidget {
  final String downstreamUrl;
  const LivestreamPlayer({
    Key? key,
    required this.downstreamUrl,
  }) : super(key: key);

  @override
  LivestreamPlayerState createState() => LivestreamPlayerState();
}

class LivestreamPlayerState extends State<LivestreamPlayer>
    with AutomaticKeepAliveClientMixin {
  late VlcPlayerController _controller;

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    //highlight-start
    //initialize the player with downstreamUrl
    _controller = VlcPlayerController.network(widget.downstreamUrl,
        options: VlcPlayerOptions());
    //highlight-end
  }

  @override
  void dispose() async {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    //highlight-start
    //return the VlcPlayer Widget
    return VlcPlayer(
      controller: _controller,
      aspectRatio: 9 / 16,
      placeholder: const Center(child: CircularProgressIndicator()),
    );
    //highlight-end
  }
}

```

With this, the player is setup to play the HLS.

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_viewer_view.png" width="250"/>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/flutter/api/sdk-reference/room-class/methods#starthls)
- [stopHls](/flutter/api/sdk-reference/room-class/methods#stophls)
- [Events.hlsStateChanged](/flutter/api/sdk-reference/room-class/events#hlsstatechanged)
