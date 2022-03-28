---
sidebar_position: 1
sidebar_label: usePubSub
pagination_label: Intro to Video SDK usePubSub Hook
title: Video SDK usePubSub Hook
---

## usePubSub Hook

`usePubSub` hook abstracts pubsub class and takes all the properties and events as parameters and returns all the properties and methods to work pubsub instance.

## usePubSub example

```jsx title="usePubSub react hook"
import { usePubSub } from "@videosdk.live/react-sdk";

var topic = "CHAT";

function onMessageReceived(message) {
  console.log("New Message:", message);
}

function onOldMessagesReceived(messages) {
  console.log("Old Messages:", messages);
}

const { publish, messages } = usePubSub(topic, { onMessageReceived, onOldMessagesReceived });
```

## Parameters

### topic

- `topic` is a required parameter of `string` type.

- `topic` represents the topic for which the pub-sub topic for which the `publish()` and `subscribe()` should be called.

---

### onMessageReceived

- `onMessageReceived()` will be triggered when a new message is published for the subscribed topic with the message object.

---

### onOldMessagesReceived

- `onOldMessagesReceived()` will be triggered once when you subscribe to the topic and will receive all the old messages present for that topic as an array of message object.

- `message` published with `persist` as `true` will only be available for thorugh this callback. 

---

## Returns

### publish()

- `publish()` is used to publish the the message for the the particular `topic`.

- `message` will be the message to be send for the particular topic.

- `options` is an object, which provides an option, such as `persist`, which persists message for upcoming participants.

#### Parameters

- **message** : String
- **options** 
  - **persist** : boolean

#### Example

```js
const { publish, messages } = usePubSub("CHAT");

const sendMessage = (message) =>{
  publish(message, {persist : true});
}

sendMessage("Hello");
```

---

### messages

- `messages` is an array of message objects which will hold all the persisted messages.

```js title="Message Object"
{
  id: String,
  message: String,
  senderId: String,
  senderName: String,
  timestamp: String,
  topic: String
}
```