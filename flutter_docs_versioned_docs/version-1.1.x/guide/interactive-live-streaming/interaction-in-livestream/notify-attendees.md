---
title: Notify Attendees with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Notify Attendees in Realtime
pagination_label: Notify Attendees in Realtime
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: notify-attendees
---

# Notify Attendees in Realtime

When doing livestream, you may want to broadcast message to all the viewers at once.

Let us see, how we can use PubSub to implement this functionality. If you are not familiary with the PubSub mechanism you can [follow this guide](/flutter/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Notifying Attendees

1. We will be creating a button and text input to take the message input and we will publish a message to the topic `NOTIFY_ATTENDEES`

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
        Row(
          children: [
            Expanded(
              child: TextField(
                style: TextStyle(
                  fontSize:16,
                  fontWeight: FontWeight.w500,
                ),
                controller: msgTextController,
                onChanged: (value) => setState(() {
                  msgTextController.text;
                }),
                decoration: const InputDecoration(
                  hintText: "Write your message",
                  border: InputBorder.none,
                ),
              ),
            ),
            ElevatedButton(
              onPressed:(){
                if(!msgTextController.text.trim().isEmpty){
                  widget.room.pubSub
                        .publish(
                          "NOTIFY_ATTENDEES",
                          msgTextController.text,
                          const PubSubPublishOptions(
                              persist: true),
                        )
                        .then(
                            (value) => msgTextController.clear())
                }
              },
              child: const Text("Notify Attendees"),
            ),
          ],
        ),
    //highlight-end
      ]
    );
  }

}
```

2. Now let us show an alert to all the viewers displaying the message posted by the speaker.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ViewerView extends StatefulWidget {
  final Room room;
  ...
}

class _ViewerViewState extends State<ViewerView> {

  @override
  void initState() {
    //highlight-next-line
    ...

    //highlight-start
    // Subscribing 'NOTIFY_ATTENDEES' Topic
    widget.meeting.pubSub
      .subscribe("NOTIFY_ATTENDEES", messageHandler);
    //highlight-end
  }

  //highlight-start
  //Handler which will be called when new mesasge is
  //These is where we will show the message
  void messageHandler(PubSubMessage message) {
    if(context.mounted && widget.room.localParticipant.mode == MOde.VIEWER){
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(
          message.message,
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
    widget.room.pubSub.unsubscribe("NOTIFY_ATTENDEES", messageHandler);
    //highlight-end
    super.dispose();
  }
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [PubSub](/flutter/api/sdk-reference/pubsub-class/introduction)
