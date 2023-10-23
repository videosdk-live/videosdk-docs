---
title: Initialise Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Initialise Meeting
pagination_label: Initialise Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: initialise-meeting
---

# Initialise Meeting - Flutter

To configure a VideoSDK meeting you require two things, first the `token` which will be used for **Authentication** purpose and a `meetingId` which will be used to specify where a participant will join. Let's see each of the steps closely.

### Generating Token

You can generate a `token` in two ways:

1. **`Temporary Token`** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate the temporary token from there.

2. **`Server`** : You can setup **JWT** in backend and make an API call to get the token from your server.

To learn more about **Authentication** and token in detail you can follow [this guide](../authentication-and-tokens).

```js
// With Temporary Token
Future<String> getToken() async {
  // Update the token here from the VideoSDK dashboard
  // highlight-next-line
  let token = "YOUR_TOKEN";
  return token;
};

// Server
// API call to create meeting
Future<String> getToken(String token) async {
  final http.Response httpResponse = await http.post(
    //highlight-start
    //Using the VideoSDK API Endpoint
    Uri.parse('http://localhost:8080/get-token'),
    //highlight-end
  );

  //Destructuring the roomId from the response
  return json.decode(httpResponse.body)['token'];
}
```

### Generating Meeting Id

With the token ready, we can get the `meetingId` from the [VideoSDK's rooms API](/api-reference/realtime-communication/create-room).

```js
// API call to create meeting
Future<String> createMeeting(String token) async {
  final http.Response httpResponse = await http.post(
    //highlight-start
    //Using the VideoSDK API Endpoint
    Uri.parse('https://api.videosdk.live/v2/rooms'),
    //Passing the token in headers
    headers: {'Authorization': token},
    //highlight-end
  );

  //Destructuring the roomId from the response
  return json.decode(httpResponse.body)['roomId'];
}
```

### Initialization of Meeting

We can initialize a new meeting using the `createRoom` method of the `VideoSDK` class. `createRoom` method returns a `Room` object, which will be configured using the provided `token`, `meetingId`, `participantId` and other paramters.

#### createRoom()

Let's take a deeper look at the available configuration options first.

```js
Room room = VideoSDK.createRoom(
  roomId: "Meeting-d",
  token: "Token",
  displayName: "<Name-of-participant>",
  micEnabled: "<Flag-to-enable-mic>",,
  camEnabled: "<Flag-to-enable-webcam>",
  participantId: "Id-of-participant", // optional, default: SDK will generate
);
```

- **`roomId`** :

  - roomId is unique identifiers that allow participants to join a specific meeting or room.
  - It will be in the format of `xxx-yyy-zzz` and will be generated using the [VideoSDK's Room API](/api-reference/realtime-communication/create-room).

- **`displayName`**:

  - This will represent the name of the participant in the meeting.
  - It will accept `String`type value.

- **`micEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's microphone will be automatically enabled when they join a meeting.

- **`camEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's webcam will be automatically enabled when they join a meeting.

- **`participantId`**:

  - This will be the unique identifier for the participant inside the meeting.

    - It can be used to specify the **unique identifier** which can be linked with **your own database** service.
    - It has to be of `String` type.
    - This is an `OPTIONAL` parameter. By default VideoSDK will generate unique id for each participant.

:::caution
You must ensure that the `participantId` is not repeated in the same meeting or room, It will enable VideoSDK to eliminate any participant respect to that `participantId`.
:::

To know more about other properties, you can follow [our API Reference](/react/api/sdk-reference/meeting-provider).

With all the configuration options explained, here is how you will be using the `MeetingProvider`.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  final String meetingId;
  final String token;

  const MeetingScreen(
      {super.key, required this.meetingId, required this.token});

  @override
  State<MeetingScreen> createState() => _MeetingScreenState();
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    //highlight-start
    //Creating a new Room based on the passed meetingId and token from the Joining Screen
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: true,
      camEnabled: true,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
    );
    //highlight-end
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }
}

```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [createRoom](/flutter/api/sdk-reference/videosdk-class/methods#createroom)
