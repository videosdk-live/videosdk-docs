---
sidebar_position: 1
sidebar_label: usePubSub
pagination_label: Intro to Video SDK usePubSub Hook
title: Video SDK usePubSub Hook
---

# Video SDK usePubsub Hook - React Native

## usePubSub Hook

`usePubSub` takes all the properties and events as parameters and returns all the properties and methods to work pubsub instance.

## usePubSub example

```jsx title="usePubSub react hook"
import { usePubSub } from "@videosdk.live/react-native-sdk";

var topic = "CHAT";

function onMessageReceived(message) {
  console.log("New Message:", message);
}

function onOldMessagesReceived(messages) {
  console.log("Old Messages:", messages);
}

const { publish, messages } = usePubSub(topic, {
  onMessageReceived,
  onOldMessagesReceived,
});
```

## Parameters

### topic

- type : `String`

- Represents the topic for which you are publishing and getting a message.

---

### onMessageReceived

- `onMessageReceived()` will be triggered when a new message is published for the subscribed topic with the message object.

---

### onOldMessagesReceived

- `onOldMessagesReceived()` will be triggered once when you subscribe to the topic and will receive all the old messages present for that topic as an array of message object.

- `message` published with `persist` as `true` will only be available through this callback.

---

## Returns

### publish()

- `publish()` is used to publish the the message for the the particular `topic`.

#### Parameters

##### message

- type : `String`

- Message that has been published on the specific topic.

---

##### options

- type : `Object`

- This is an object, which provides an option, such as persist, which persists message history for upcoming participants if provide `persist: true`.

---

#### Example

```js
const { publish, messages } = usePubSub("CHAT");

const sendMessage = (message) => {
  publish(message, { persist: true });
};

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
