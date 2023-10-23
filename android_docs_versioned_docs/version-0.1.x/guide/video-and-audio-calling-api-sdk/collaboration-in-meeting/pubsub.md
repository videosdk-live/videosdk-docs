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

# PubSub - Android

PubSub is a short acronym for Publish-Subscribe mechanism. This mechanism is used to send and recieve messages from a particular topic. As the name suggests, for someone to send a message, they have to specify the topic and the message which should be published and for someone to receive a message, they should be subscribed to that topic.

Here is a visual to better understand publish-subscribe mechanism.

![pubsub](/img/pubsub.png)

## pubSub

In order to use PubSub in meeting, VideoSDK provides a class `pubSub` which allows you to subscribe to any topic and publish to any topic allowing to pass on messages and instructions during the meeting easily.

### `publish()`

- This method is used for publishing message of specific topic.
- This method can be accessed from the `pubSub` class, which is subclass of `Meeting` class.
- This method will accept three parameters as input:
  - `topic`: This will be the topic for which you are publishing a message.
  - `message`: This will be the actual message to be published. It has to be in `String` format.
  - `options`: This is an object of `PubSubPublishOptions` which offered the option of keeping the message around for the duration of the session. When `persist` is set to `true`, that message will be retained for upcoming participants and will be available in [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions) with `.CSV` format after completion of session.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun sendMessage() {
  // publish message
  val options = PubSubPublishOptions()
  options.isPersist = true
  //highlight-next-line
  meeting!!.pubSub.publish("CHAT", "Hello Everyone!", options)
}
```

</TabItem>

<TabItem value="Java">

```js
protected void sendMessage() {
  // publish message
  PubSubPublishOptions options = new PubSubPublishOptions();
  options.setPersist(true);
  //highlight-next-line
  meeting.pubSub.publish("CHAT", "Hello Everyone!", options);
}
```

</TabItem>

</Tabs>

### `subscribe()`

- This method is used to subscribe for particular topic.
- This method will accept two parameters as input:

  - `topic`: This will be the topic to be subscribed.
  - `listener`: This is an object of `PubSubMessageListener`, which listens for upcoming messages and calls `onMessageReceived` function, when new message received.

- This method will return `List<PubSubMessage>` which is a list of messages which were sent earlier.

The object of `PubSubMessage` contains following properties:

- `senderId`: This represents the `participantId` of the participant who send the message.
- `senderName`: This represents the `displayName` of the participant who send the message.
- `message`: This will be the actual message that was send.
- `timestamp`: This wil the timestamp for when the message was published.
- `topic`: This will be the name of the topic message was published to.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
//highlight-start
var pubSubMessageListener =
  PubSubMessageListener { message ->
    // New message
    Log.v("New Message Received", message.senderName + " says : " + message.message)
  }
//highlight-end

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // Subscribe for 'CHAT' topic
  //highlight-next-line
  val pubSubMessageList = meeting!!.pubSub.subscribe("CHAT", pubSubMessageListener)

  // Persisted message list
  for (message in pubSubMessageList) {
    Log.v("Message List: ", message.senderName + " says : " + message.message)
  }
}
```

</TabItem>

<TabItem value="Java">

```js
//highlight-start
PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
  @Override
  public void onMessageReceived(PubSubMessage message) {
    // New message
    Log.v("New Message Received", message.senderName + " says : " + message.getMessage());
  }
};
//highlight-end

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // Subscribe for 'CHAT' topic
  //highlight-next-line
  List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("CHAT",pubSubMessageListener);

  // Persisted message list
  for(PubSubMessage message : pubSubMessageList){
    Log.v("Message List: ", message.senderName + " says : " + message.getMessage());
  }
}
```

</TabItem>

</Tabs>

### `unsubscribe()`

- This method is used to unsubscribe for particular topic.
- This method will accept two parameters as input:

  - `topic`: This will be the topic to be unsubscribed.
  - `listener`: This is an object of `PubSubMessageListener`, which was passed in `subscribe()`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
fun unsubscribe() {
  // Unsubscribe 'CHAT' topic
  meeting!!.pubSub.unsubscribe("CHAT", pubSubMessageListener)
}
```

</TabItem>

<TabItem value="Java">

```js
public void unsubscribe(){
  // Unsubscribe 'CHAT' topic
  meeting.pubSub.unsubscribe("CHAT", pubSubMessageListener);
}
```

</TabItem>

</Tabs>

## Applications of usePubSub

PubSub is a very powerful mechanism which can be used to do alot of things which can make your meeting experience much more interactive. Some of the most common usecase that we have come across for the PubSub during a meeting are listed below:

1. [`Chat`](./chat-using-pubsub): You can utilise this to develop various Chat features, such as Private Chat and Group Chat. You can follow our chat [integration guide here](./chat-using-pubsub).
2. `Raise Hand`: You can allow attendees to raise their hands at any time during the meeting, informing everyone else that someone has done so.
3. `Poll`: You may make polls, let users respond to them, and display the results at the end of a poll.
4. `Question Answer Session`: You can also design interactive functionality that is question-and-answer based.

### Downloading PubSub Messages

All the messages from the PubSub which were published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub()](/android/api/sdk-reference/pubsub-class/introduction)
