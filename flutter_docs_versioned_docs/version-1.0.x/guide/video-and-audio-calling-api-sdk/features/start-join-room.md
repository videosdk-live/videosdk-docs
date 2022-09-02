---
title: Start join Room Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Start or join Room features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Start or Join Room
pagination_label: Start or Join Room
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-join-room
---

# Start or Join Room

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After the successful installation of VideoSDK, the next step is to integrate VideoSDK features with your webApp/MobileApp.</p>

<p>To Communicate with other participant's audio or video call, you will need to join the room.</p>

<p>This guide will provide an overview of how to configure, initialize and join a VideoSDK room.</p>

</div>
<div>
<img src="/img/gif/new-meeting.gif"/>
</div>

</div>

## 1. Configuration

To configure a room, you will need [generated token](/flutter/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis) and [roomId](/api-reference/realtime-communication/create-room#create-room), we had discussed in [Server Setup](/flutter/guide/video-and-audio-calling-api-sdk/server-setup).
This code snippet calls API from local server

**Scenario 1** - Suppose you **don't have** any roomId, you can simply generate roomId by invoking `create-room` API.

**Scenario 2** - Suppose you **have** roomId, now you don't have to call `create-room` API to generate roomId, instead you can call `validate-room` API to validate roomId.

**Token generation API is necessary for both scenario.**

:::note
You can take advantage of regional API to decrease latency in video calling.

To achieve region based rooms, just pass `region : REGION_CODE` parameter in `create-room` request Body.

Currently the below regions are supported:

- `sg001` Region Code for Singapore, SG.
<!-- - `sg002` Region Code for Singapore, SG. (Another region in Singapore) -->
- `in002` Region Code for Bangalore, IN.
- `us001` Region Code for Fremont, CA.
- `eu001` Region Code for Frankfurt, DE.

In case you are not providing any region code, the default region will be `sg001`.
:::

```js
import 'dart:convert';
import 'package:http/http.dart' as http; // For API Calling, you need to add third party package "http"
import 'package:videosdk/videosdk.dart';

// States Defined in Stateful Component.
String? roomId;
String? token;

void _getRoomIdAndToken() async {
    final LOCAL_SERVER_URL = dotenv.env['LOCAL_SERVER_URL'];

    // Calling get-token API.
    final Uri tokenUrl = Uri.parse('$LOCAL_SERVER_URL/get-token');
    final http.Response tokenResponse = await http.get(tokenUrl);

    final dynamic _token = json.decode(tokenResponse.body)['token'];

    // Calling create-room API.
    final Uri roomIdUrl =
        Uri.parse('$LOCAL_SERVER_URL/create-room/');

    final http.Response roomIdResponse =
        await http.post(roomIdUrl, body: {"token": _token,"region": "sg001"});

    final _roomId = json.decode(roomIdResponse.body)['roomId'];

    // Setting into states of stateful widget
    setState(() {
      token = _token;
      roomId = _roomId;
    });
  }

  // This API is for validate the room id
  // Not require to call this API after create room API

dynamic validateRoom(token, roomId) async {
    final String LOCAL_SERVER_URL = dotenv.env['LOCAL_SERVER_URL'];
    final Uri validateRoomUrl =
        Uri.parse('$LOCAL_SERVER_URL/validate-room/$roomId');
    final http.Response validateRoomResponse =
        await http.post(validateRoomUrl, body: {"token": token});
    final _roomId = json.decode(validateRoomResponse.body)['roomId'];
    if (_roomId != null) {
      return _roomId;
    } else {
      return null;
    }
  }

```

## 2. Initialization

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration, you will have to Initialize 
<p>
room by providing name, roomId, micEnabled, camEnabled & maxResolution.
</p>
</p>

</div>
<div>
<img src="/img/gif/add-participant.gif"/>
</div>

</div>

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MyApp extends StatelessWidget {
  final Room = VideoSDK.createRoom(
    roomId: "<Id-of-Room>",
    displayName: "<Name-of-participant>",
    micEnabled: "<Flag-to-enable-mic>",
    camEnabled: "<Flag-to-enable-cam>",
    token: "<Authentication-token>",
    notification: const NotificationInfo(
      title: "Video SDK",
      message: "Video SDK is sharing screen",
      icon: "notification_share",
    ),
  );
    @override
    Widget build(BuildContext context) {
        return return Container(); // Returning widget
    }
}
```

## 3. Join

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration & initialization, the third step is to call join() to join a room.
</p>

<p>
After joining, you will be able to Manage Participant in a room.
</p>

</div>
<div>
<img src="/img/gif/join-meeting.gif"/>
</div>

</div>

```js
// Join the room
room?.join();
```
