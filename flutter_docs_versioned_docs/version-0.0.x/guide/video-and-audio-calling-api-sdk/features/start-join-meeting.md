---
title: Start join Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Start or join Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Start or Join Meeting
pagination_label: Start or Join Meeting
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-join-meeting
---

# Start or Join Meeting

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After the successful installation of VideoSDK, the next step is to integrate VideoSDK features with your webApp/MobileApp.</p>

<p>To Communicate with other participant's audio or video call, you will need to join the meeting.</p>

<p>This guide will provide an overview of how to configure, initialize and join a VideoSDK meeting.</p>

</div>
<div>
<img src="/img/gif/new-meeting.gif"/>
</div>

</div>

## 1. Configuration

To configure a meeting, you will need [generated token](/flutter/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis) and [meetingId](/api-reference/v1/realtime-communication/create-join-meeting#create-meeting), we had discussed in [Server Setup](/flutter/guide/video-and-audio-calling-api-sdk/server-setup).
This code snippet calls API from local server

**Scenario 1** - Suppose you **don't have** any meetingId, you can simply generate meetingId by invoking `create-meeting` API.

**Scenario 2** - Suppose you **have** meetingId, now you don't have to call `create-meeting` API to generate meetingId, instead you can call `validate-meeting` API to validate meetingId.

**Token generation API is necessary for both scenario.**

:::note
You can take advantage of regional API to decrease latency in video calling.

To achieve region based meetings, just pass `region : REGION_CODE` parameter in `create-meeting` request Body.

Currently the below regions are supported:

- `sg001` Region Code for Singapore, SG.
<!-- - `sg002` Region Code for Singapore, SG. (Another region in Sindapore) -->
- `in002` Region Code for Bangalore, IN.
- `us001` Region Code for Fremont, CA.
- `eu001` Region Code for Frankfurt, DE.

In case you are not providing any region code, the default region will be `sg001`.
:::

```js
import 'dart:convert';
import 'package:http/http.dart' as http; // For API Calling, you need to add third party package "http"
import 'package:videosdk/rtc.dart';

// States Defined in Stateful Component.
String? meetingId;
String? token;

void _getMeetingIdAndToken() async {
    final LOCAL_SERVER_URL = dotenv.env['LOCAL_SERVER_URL'];

    // Calling get-token API.
    final Uri tokenUrl = Uri.parse('$LOCAL_SERVER_URL/get-token');
    final http.Response tokenResponse = await http.get(tokenUrl);

    final dynamic _token = json.decode(tokenResponse.body)['token'];

    // Calling create-meeting API.
    final Uri meetingIdUrl =
        Uri.parse('$LOCAL_SERVER_URL/create-meeting/');

    final http.Response meetingIdResponse =
        await http.post(meetingIdUrl, body: {"token": _token,"region": "sg001"});

    final _meetingId = json.decode(meetingIdResponse.body)['meetingId'];

    // Setting into states of stateful widget
    setState(() {
      token = _token;
      meetingId = _meetingId;
    });
  }

  // This API is for validate the meeting id
  // Not require to call this API after create meeting API

dynamic validateMeeting(token, meetingId) async {
    final String LOCAL_SERVER_URL = dotenv.env['LOCAL_SERVER_URL'];
    final Uri validateMeetingUrl =
        Uri.parse('$LOCAL_SERVER_URL/validate-meeting/$meetingId');
    final http.Response validateMeetingResponse =
        await http.post(validateMeetingUrl, body: {"token": token});
    final _meetingId = json.decode(validateMeetingResponse.body)['meetingId'];
    if (_meetingId != null) {
      return _meetingId;
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
meeting by providing name, meetingId, micEnabled, webcamEnabled & maxResolution.
</p>
</p>

</div>
<div>
<img src="/img/gif/add-participant.gif"/>
</div>

</div>

```js
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';

class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MeetingBuilder(
            meetingId: "<Id-on-meeting>",
            displayName: "<Name-of-participant>",
            micEnabled: "<Flag-to-enable-mic>",
            webcamEnabled: "<Flag-to-enable-webcam>",
            token: "<Authentication-token>",
            builder: (Meeting: meeting) {
                // Do Something
                return Container(); // Returning widget
            }
        );
    }
}
```

## 3. Join

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration & initialization, the third step is to call join() to join a meeting.
</p>

<p>
After joining, you will be able to Manage Participant in a meeting.
</p>

</div>
<div>
<img src="/img/gif/join-meeting.gif"/>
</div>

</div>

```js
// Join the meeting
meeting?.join();
```
