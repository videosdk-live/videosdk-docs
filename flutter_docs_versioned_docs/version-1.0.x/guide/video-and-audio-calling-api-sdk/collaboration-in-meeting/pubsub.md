---
title: PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: PubSub
pagination_label: PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pubsub
---

# PubSub

PubSub is a short acronym for Publish-Subscribe mechanism. This mechanism is used to send and recieve messages from a particular topic. As the name suggests, for someone to send a message, they have to specify the topic and the message which should be published and for someone to receive a message, they should be subscribed to that topic.

Here is a visual to better understand publish-subscribe mechanism.

![pubsub](/img/pubsub.png)

## usePubSub

In order to use PubSub in meeting, VideoSDK provides a hook `usePubSub` which allows you to subscribe to any topic and publish to any topic allowing to pass on messages and instructions during the meeting easily.

### `publish()`

- This method is used for publishing message of specific topic.
- This method can be accessed from the `pubSub` from the `Room`.
- This method will accept thre parameters as input:
  - `topic`: This will be the topic where the message will be published.
  - `message`: This will be the actual message to be published. It has to be in `String` format.
  - `options`: This object offered the option of keeping the message around for the duration of the session. When `persist` is set to `true`, that message will be retained for upcoming participants and will be available in [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions) with `.CSV` format after completion of session.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

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
        //These will publish "Hello World!" on the "CHAT" topic
        ElevatedButton(
          onPressed:(){
            _room.pubSub.publish("CHAT", "Hello World!")
          },
          child: const Text("Send Message"),
        ),
    //highlight-end
      ]
    );
  }
}
```

## Receiving the messages

- All the previous messages for the particular topic can be recieved by subscribing to the topic.
- To subscribe to a specific topic, use can use the `subscribe()` method which will return the `Future<PubSubMessages>` and accepts the `topic` to be subscribed and a `callback function` which will be called when ever any new message is received.

- `PubSubMessages` contains the `messages` as a list of `PubSubMessage` which will contain following properties:
  - `senderId`: This represents the `participantId` of the participant who send the message.
  - `senderName`: This represents the `displayName` of the participant who send the message.
  - `message`: This will be the acatual message that was send.
  - `timestamp`: This wil the timestamp for when the message was published.
  - `topic`: This will be the name of the topic message was published to.

## Example

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

## Applications of usePubSub

PubSub is a very powerful mechanism which can be used to do alot of things which can make your meeting experience much more interactive. Some of the most common usecase that we have come across for the PubSub during a meeting are listed below:

1. [`Chat`](./chat-using-pubsub): You can utilise this to develop various Chat features, such as Private Chat and Group Chat. You can follow our chat [integration guide here](./chat-using-pubsub).
2. `Raise Hand`: You can allow attendees to raise their hands at any time during the meeting, informing everyone else that someone has done so.
3. `Layout Switching`: You can change the meeting's layout for every participant at once during the meeting, such as from Grid layout to Spotlight or Grid Layout to Sidebar Layout, etc.
4. `Whiteboard`: You can develop an interactive whiteboard functionality that is completely functional.
5. `Poll`: You may make polls, let users respond to them, and display the results at the end of a poll.
6. `Question Answer Session`: You can also design interactive functionality that is question-and-answer based.

## Downloading PubSub Messages

All the messages from the PubSub which were published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub](/flutter/api/pubsub-class/introduction)
