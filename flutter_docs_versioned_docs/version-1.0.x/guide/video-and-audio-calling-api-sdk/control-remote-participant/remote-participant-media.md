---
title: Toggle Remote Participant Media | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Toggle Remote Participant Media
pagination_label: Toggle Remote Participant Media
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remote-participant-media
---

# Toggle Remote Participant Media

When hosting a meeting, it's important that the host of the meeting should be able to request someone's Mic or Camera to be turned on or should be able to turn them off.

:::note
Participant who will be controlling other participant's mic and camera should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/flutter/guide/video-and-audio-calling-api-sdk/authentication-and-tokens).
:::

Before we discuss the methods and events associated with this functionality, here is how the flow would look like.

![img1](/img/toggle-remote-media.png)

## Methods

### `unmuteMic()`

- If you wish to turn **on** the microphone of a participant, you will be calling the `unmuteMic()` on the `Participant` object.

- When this method is called, the participant whose microphone is requested will receive the `Events.micRequested` event with the `participantId` of the participant who requested it and two callback functions `accept` and `reject` which should be called based on decision made by the user.

- **Example:** Meeting is running with **Participant A** and **Participant B**. Now **Participant A** wants to unmute Mic of **Participant B**, so **Participant A** will use `unmuteMic()` function to request **Participant B**, after that **Participant B** recieve the `Events.micRequested` event, from there user can either accept or reject the incoming request.

### `enableCam()`

- If you wish to turn **on** the camera of a participant, you will be calling the `enableCam()` from the `useParticipant` hook.

- When this method is called, the participant whose camera is requested will receive the `Events.cameraRequested` event with the `participantId` of the participant who requested it and two callback functions `accept` and `reject` which should be called based on decision made by the user.

- **Example:** Meeting is running with **Participant A** and **Participant B**. Now **Participant A** wants to Enable Cam of **Participant B**, so **Participant A** will use `enableCam()` function to request **Participant B**, after that **Participant B** recieve the `Events.cameraRequested` event, from there user can either accept or reject the incoming request.

### `muteMic()`

- If you wish to turn **off** the microphone of a participant, you will be calling the `muteMic()` on the `Participant` object.
- This will disable the microphone of the participant.

### `disableCam()`

- If you wish to turn **off** the camera of a participant, you will be calling the `disableCam()` on the `Participant` object.
- This will disable the camera of the participant.

#### Example

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  const ParticipantTile({super.key, required this.participant});

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
          child: Text("Enable Mic"),
          onPressed: () => {
            widget.participant.unmuteMic();
        }),
        ElevatedButton(
          child: Text("Disable Mic"),
          onPressed: () => {
            widget.participant.muteMic();
        }),
        ElevatedButton(
          child: Text("Enable Cam"),
          onPressed: () => {
            widget.participant.enableCam();
        }),
        ElevatedButton(
          child: Text("Disable Cam"),
          onPressed: () => {
            widget.participant.disableCam();
        }),
      ],
    );
  }
}
```

## Events

### `camemaRequested`

This event will be emitted to the `Participant B` when any other `Participant A` requests to enable webcam of that participant (`Participant B`). This event handler will receieve following three arguments in the `Map<String, dynamic>`:

- `accept()` - Callback function to accept the request.
- `reject()` - Callback function to reject the request.
- `participantId` - ParticipantId of the requesting participant

### `micRequested`

This event will be emitted to the `Participant B` when any other `Participant A` requests to enable mic of that participant (`Participant B`). This event handler will receieve following three arguments in the `Map<String, dynamic>`:

- `accept()` - Callback function to accept the request.
- `reject()` - Callback function to reject the request.
- `participantId` - ParticipantId of the requesting participant

###### Usage

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
    //Event for mic request
    room.on(Events.micRequested, (_data_) {
      log("_data => $_data");
      dynamic accept = _data['accept'];
      dynamic reject = _data['reject'];

      log("accept => $accept reject => $reject");

      // Mic Request Dialog
      showDialog(
        context: navigatorKey.currentContext!,
        builder: (context) => AlertDialog(
          title: const Text("Mic requested?"),
          content: const Text("Do you want to turn on your mic? "),
          actions: [
            TextButton(
              onPressed: () {
                reject();

                Navigator.of(context).pop();
              },
              child: const Text("Reject"),
            ),
            TextButton(
              onPressed: () {
                accept();

                Navigator.of(context).pop();
              },
              child: const Text("Accept"),
            ),
          ],
        ),
      );
    });

    // Called when camera is requested
    room.on(Events.cameraRequested, (_data) {
      log("_data => $_data");
      dynamic accept = _data['accept'];
      dynamic reject = _data['reject'];

      log("accept => $accept reject => $reject");

      // camera Request Dialog
      showDialog(
        context: navigatorKey.currentContext!,
        builder: (context) => AlertDialog(
          title: const Text("Camera requested?"),
          content: const Text("Do you want to turn on your Camera? "),
          actions: [
            TextButton(
              onPressed: () {
                reject();

                Navigator.of(context).pop();
              },
              child: const Text("Reject"),
            ),
            TextButton(
              onPressed: () {
                accept();

                Navigator.of(context).pop();
              },
              child: const Text("Accept"),
            ),
          ],
        ),
      );
    });
  }
  //highlight-end
}
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/toggle-media.mp4' width={"100%"}/>

</div>

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [unmuteMic()](/flutter/api/sdk-reference/participant-class/methods#unmutemic)
- [muteMic()](/flutter/api/sdk-reference/participant-class/methods#mutemic)
- [enableCam()](/flutter/api/sdk-reference/participant-class/methods#enablecam)
- [disableCam()](/flutter/api/sdk-reference/participant-class/methods#disablecam)
- [Events.cameraRequested](/flutter/api/sdk-reference/use-meeting/events#camerarequested)
- [Events.micRequested](/flutter/api/sdk-reference/use-meeting/events#micrequested)
