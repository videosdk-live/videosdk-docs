---
title: Chat messages with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Chat using PubSub
pagination_label: Chat using PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: chat-using-pubsub
---

# Chat using PubSub - Flutter

For the communication or any kind of messaging in between the participants, VideoSDK provides `pubSub` which use Publish-Subsciribe mechanism and can be used to develope wide varitey of functionalities. For example, participants could use it to send chat messages to each other, share files or other media, or even trigger actions like muting or unmuting audio or video.

Now we will see, how we can use PubSub to implement Chat functionality. If you are not familiar with the PubSub mechanism, you can [follow this guide](/flutter/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

## Implementing Chat

1. First step in creating a group chat is choosing the topic which all the participants will publish and subscribe to send and receive the messages. We will be using `CHAT` as the topic for this one. So let us lets create a message input and send button to publish the messages using the `pubSub` from the `Room` object.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ChatView extends StatefulWidget {
  final Room room;
  ...
}

class _ChatViewState extends State<ChatView> {

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
                          "CHAT",
                          msgTextController.text,
                          const PubSubPublishOptions(
                              persist: true),
                        )
                        .then(
                            (value) => msgTextController.clear())
                }
              },
              child: const Text("Send Message"),
            ),
          ],
        ),
    //highlight-end
      ]
    );
  }

}
```

2. Final step in the group chat would be to display the messages others send. For this will use the `messages` and display all the messages by subscribing to the topic `CHAT`.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ChatView extends StatefulWidget {
  final Room room;
  ...
}

class _ChatViewState extends State<ChatView> {

  // PubSubMessages
  PubSubMessages? messages;

  @override
  void initState() {
    //highlight-next-line
    ...

    //highlight-start
    // Subscribing 'CHAT' Topic
    widget.meeting.pubSub
      .subscribe("CHAT", messageHandler)
      .then((value) => setState((() => messages = value)));
    //highlight-end
  }

  //highlight-start
  //Handler which will be called when new mesasge is received
  void messageHandler(PubSubMessage message) {
    setState(() => messages!.messages.add(message));
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        //highlight-start
        Expanded(
          child: messages == null
              ? const Center(child: CircularProgressIndicator())
              : SingleChildScrollView(
                  reverse: true,
                  child: Column(
                    children: messages!.messages
                        .map(
                          (message) => Text(
                            message.message
                          ),
                        )
                        .toList(),
                  ),
                ),
        ),

        ...
        //Send Message code Here
    //highlight-end
      ]
    );
  }

  @override
  void dispose() {
    //highlight-start
    // Unsubscribe
    widget.room.pubSub.unsubscribe("CHAT", messageHandler);
    //highlight-end
    super.dispose();
  }
}
```

### Displaying Latest Message Notificaiton

You may want to show the notification to the user when new message arrives. So lets continue our example and add alert for the new images.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ChatView extends StatefulWidget {
  final Room room;
  ...
}

class _ChatViewState extends State<ChatView> {

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  //highlight-start
  //Handler which will be called when new mesasge is received
  void messageHandler(PubSubMessage message) {
    //Show snackbar on new message
    if(context.mounted){
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(
          message.message,
          overflow: TextOverflow.fade,
        ),
      ));
    }
    setState(() => messages!.messages.add(message));
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        //highlight-start
        ...
         //highlight-end
      ]
    );
  }

  @override
  void dispose() {
    //highlight-next-line
    ...
  }
}
```

## Downloading Chat Messages

All the messages from the PubSub which where published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub](/flutter/api/sdk-reference/pubsub-class/introduction)
