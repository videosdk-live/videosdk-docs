---
title: Mute All Participants | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Mute All Participants
pagination_label: Mute All Participants
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-all-participants
---

# Mute All Participants

If you are the host or moderator of a video conference, you may want to mute all the participants at once. This can be useful in various scenarios, such as when you want to deliver a presentation or when there is background noise that is causing distractions.

- To achieve this, you have to iterate over the list of participants from the `Room` object and call `muteMic` method on each `Participant` object.

```javascript
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        ElevatedButton(
          child: Text("Mute all participants"),
          onPressed: () => {
            _room.participants.values.forEach((participant) {
              participant.muteMic();
            });
        }),
      ]
    );
  }
}
```

:::note
Participant who will be muting other participants should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/react-native/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [muteMic()](/flutter/api/sdk-reference/participant-class/methods#mutemic)
