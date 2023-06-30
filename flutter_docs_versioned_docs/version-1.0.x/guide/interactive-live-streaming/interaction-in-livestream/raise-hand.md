---
title: Raise Hand with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Raise Hand
pagination_label: Raise Hand
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: raise-hand
---

# Raise Hand

Let us see, how we can use PubSub to implement Raise hand functionality. If you are not familiar with the PubSub mechanism you can [follow this guide](/flutter/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Implementing Raise Hand

1. We will be creating a button when clicked, we will publish a message it the topic `RAISE_HAND`

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class NotifyView extends StatefulWidget {
  final Room room;
  ...
}

class _NotifyViewState extends State<NotifyView> {

  final msgTextController = TextEditingController();


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
            widget.room.pubSub
                  .publish(
                    "RAISE_HAND",
                    "Raised Hand",
                    const PubSubPublishOptions(
                        persist: true),
                  );
          },
          child: const Text("Raise Hand"),
        ),
    //highlight-end
      ],
    );
  }

}
```

2. Now let us show an alert to all the speakers showing who raised the hand.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class SpeakerView extends StatefulWidget {
  final Room room;
  ...
}

class _SpeakerViewState extends State<SpeakerView> {

  @override
  void initState() {
    //highlight-next-line
    ...

    //highlight-start
    // Subscribing 'RAISE_HAND' Topic
    widget.meeting.pubSub
      .subscribe("RAISE_HAND", messageHandler);
    //highlight-end
  }

  //highlight-start
  //Handler which will be called when new mesasge is
  //These is where we will show the message
  void messageHandler(PubSubMessage message) {
    if(context.mounted && widget.room.localParticipant.mode == Mode.CONFERENCE){
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(
          "${message.senderName} raised hand",
          overflow: TextOverflow.fade,
        ),
      ));
    }
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        //highlight-next-line
        ...
      ]
    );
  }

  @override
  void dispose() {
    //highlight-start
    // Unsubscribe
    widget.room.pubSub.unsubscribe("RAISE_HAND", messageHandler);
    //highlight-end
    super.dispose();
  }

}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [PubSub](/flutter/api/sdk-reference/pubsub-class/introduction)
