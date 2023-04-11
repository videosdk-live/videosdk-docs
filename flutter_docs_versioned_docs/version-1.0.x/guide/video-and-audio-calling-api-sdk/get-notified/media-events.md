---
title: Media Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Media Events
pagination_label: Media Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: media-events
---

# Media Events

VideoSDK provides multiple types of events which can be listened to know the about the participant's media status in the meeting.

Here are the events which specifically relate to the stream.

### Events.streamEnabled

- This event is triggered whenever a participant's video, audio or screen share stream is enabled.
- This event can be subscribed from the `Participant` object.

### Events.streamDisabled

- This event is triggered whenever a participant's video, audio or screen share stream is disabled.
- This event can be subscribed from the `Participant` object.

### Events.streamPause

- This event is triggered whenever a participant's video, audio or screen share stream is paused.
- This event can be subscribed from the `Participant` object.

### Events.streamResumed

- This event is triggered whenever a participant's video, audio or screen share stream is resumed.
- This event can be subscribed from the `Participant` object.

### Example

Here is the usage of all the events mentioned in this page.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  ...
}

class _ParticipantTileState extends State<ParticipantTile> {
  @override
  void initState() {
    //highlight-next-line
    ...

    setupParticipantEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourParticipantTileWidget();
  }

  //highlight-start
  void setupParticipantEventListener() {
    widget.participant.on(Events.streamEnabled, (Stream stream){
      if(stream.kind == "video"){
        // Participant turned on video
      }else if(stream.kind == "audio"){
        // Participant turned on audio
      }else if(stream.kind == "share"){
        // Participant started screenshare
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream){
      if(stream.kind == "video"){
        // Participant turned off video
      }else if(stream.kind == "audio"){
        // Participant turned off audio
      }else if(stream.kind == "share"){
        // Participant stopped screenshare
      }
    });

    widget.participant.on(Events.streamPaused, (Stream stream){
      if(stream.kind == "video"){
        // Participant video pause
      }else if(stream.kind == "audio"){
        // Participant audio pause
      }else if(stream.kind == "share"){
        // Participant screenshare paused
      }
    });

    widget.participant.on(Events.streamResumed, (Stream stream){
      if(stream.kind == "video"){
        // Participant video resume
      }else if(stream.kind == "audio"){
        // Participant audio resume
      }else if(stream.kind == "share"){
        // Participant screenshare resumed
      }
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [Events.streamEnabled](/flutter/api/sdk-reference/participant-class/events#streamenabled)
- [Events.streamDisabled](/flutter/api/sdk-reference/participant-class/events#streamdisabled)
- [Events.streamPaused](/flutter/api/sdk-reference/participant-class/events#streampaused)
- [Events.streamResumed](/flutter/api/sdk-reference/participant-class/events#streamresumed)
