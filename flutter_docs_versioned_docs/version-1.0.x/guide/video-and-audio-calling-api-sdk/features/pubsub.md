---
sidebar_label: PubSub (BETA)
pagination_label: PubSub (BETA)
---

# PubSub (BETA)

PubSub feature allows the participant to send and receive messages of the topics which he has subscribed.

## Methods

### publish()

This method is use for publishing message of specific topic.

#### Syntax

```js
  Future<void> publish(
    String topic,
    String message,
    [PubSubPublishOptions options]
  )
```

| Parameter Name | Type                 | Description                                                                                                                                       |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| topic          | String               | This should be the topic for which you are publishing a message.                                                                                  |
| message        | String               | This is the actual message, which will be published to participants, who had subscribed to a particular topic.                                    |
| options        | PubSubPublishOptions | This is an object of PubSubPublishOptions, which provides an option, such as `persist`, which persists message history for upcoming participants. |

#### Example

```js
  // publish()
  ElevatedButton(
    onPressed: () async {
      // Publish a message
      await room.pubSub.publish(
        "CHAT", // Topic
        "Hello from Flutter!", // Message Content
        const PubSubPublishOptions(
          "persist": true // Stores the message in server for future participants
        ),
      );

      print("Message published");
    },
    child: Text("Publish"),
  ),
```

<br />

### subscribe()

This method is used to subscribe for particular topic. This method returns a list of messages which were sent earlier.

#### Syntax

```js
  Future<PubSubMessages> subscribe(
    String topic,
    Function(PubSubMessage) messageHandler,
  )
```

| Parameter Name | Type   | Description                                                                 |
| -------------- | ------ | --------------------------------------------------------------------------- |
| topic          | String | This should be the topic to be subscribed.                                  |
| messageHandler | String | This is a handler function, which will be called when new message received. |

#### Example

```js
  // subscribe()
  ElevatedButton(
    onPressed: () async {
      // Subscribe 'CHAT' topic and get persisted messages
      var messages = await room.pubSub.subscribe("CHAT", messageHandler);

      // Printing message list
      print("Messages: ${messages.messages.map((msg) => msg.message).join(" ")}");
    },
    child: Text("Subscribe"),
  ),

  // Message Handler
  void messageHandler(msg){
    // Do something
    print("New message received: $msg");
  }
```

### unsubscribe()

This method is used to unsubscribe the message topic.

#### Syntax

```js
  Future<void> unsubscribe(
    String topic,
    Function(PubSubMessage) messageHandler,
  )
```

| Parameter Name | Type   | Description                                                    |
| -------------- | ------ | -------------------------------------------------------------- |
| topic          | String | This should be the topic to be unsubscribed.                   |
| messageHandler | String | This is a handler function, which was passed in `subscribe()`. |

#### Example

```js
  // unsubscribe
  ElevatedButton(
    onPressed: () {
      // Unsubscribe 'CHAT' topic
      await room.pubSub.unSubscribe("CHAT", messageHandler);
    },
    child: Text("UnSubscribe"),
  ),
```

## Sample Code

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

// ChatScreen
class ChatScreen extends StatefulWidget {
  final Room room;
  const ChatScreen({required this.room});

  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  @override
  void initState() {
    super.initState();

    widget.room.pubSub.subscribe("CHAT", messageHandler)
      .then((messages) =>
          print("Subscribed to chat: ${messages.messages.map((msg) => msg.message).join(" ")}"));
  }

  @override
  Widget build(BuildContext context) {
    final room = widget.room;
    return Scaffold(
      appBar: AppBar(title: const Text("PubSub Sample Code")),
      body: Center(
        child: ElevatedButton(
          child: const Text("Send Hello !"),
          // Publish Hello message
          onPressed: () => room.pubSub.publish(
            "CHAT",
            "Hello",
            const PubSubPublishOptions(persist: true),
          ),
        ),
      ),
    );
  }

  // Handle incoming messages
  void messageHandler(PubSubMessage message) {
    print("New message: ${message.message}");
  }

  @override
  void dispose() {
    // Unsubscribe
    widget.room.pubSub.unsubscribe("CHAT", messageHandler);
    super.dispose();
  }
}

```
