---
sidebar_position: 1
sidebar_label: PubSub
pagination_label: PubSub
title: PubSub
---

- `PubSub` one of the property of a [Meeting Class](../meeting-class/introduction.md) is used for messaging purpose for an ongoing meeting

<div class="sdk-api-ref-only-h4">

## Methods

### publish()

- `publish()` is used to publish messages on a specified topic in the meeting.

- While publishing message, if you provide `persist` as `true`, then it will persist the message throughout the meeting and newly joined partcipant will get all old messages of a meeting, otherwise not.

#### Parameters

- topic :

  - type : `String`

- message :

  - type: `String`

- persist :
  - type : `Boolean`

#### Returns

- `void`

#### Example

```js
const topic = "CHAT";

const _handlePublishChat = (message) => {
  //
  meeting.pubSub.publish(topic, message, { persist: true });
};

_handlePublishChat("Hello world!");
```

---

### subscribe()

- `subscribe()` is used to subscribe a particular topic to get all the messages of that particular topic in the meeting. While `publish()` subscribe callback will be invoked.

#### Parameters

- topic :

  - type : `String`
  - Participants can listen to messages on that particular topic.

- callback :
  - type : `function`
  - in callback you will get `newMessage` object which contains [Pubsub message data](#pubsub-message-data)

#### Returns

- This will return old messages for this topic, if you passed `persist` to `true` while [publish](#publish)

- Array<[message](#pubsub-message-data)>

#### Example

```js
const topic = "CHAT";

const _handleChat = (newMessage) => {
  //
  console.log(newMessage);
};

const _handleSubscribePubSub = async () => {
  let oldMessages = await meeting.pubSub.subscribe("CHAT", _handleChat);

  console.log(oldMessages);
};
```

---

### unsubscribe()

- `unsubscribe()` is used to unsubscribe a particular topic on which you have subscribed priviously.

#### Parameters

- topic :

  - type : `String`
  - callback : `function`

- listener : `function`

#### Returns

- `void`

#### Example

```js
const topic = "CHAT";

// same handler used for meeting.pubSub.subscribe()
const _handleChat = (newMessage) => {
  //
  console.log(newMessage);
};

const _handleUnsubscribePubSub = async () => {
  meeting.pubSub.unsubscribe("CHAT", _handleChat);
};
```

---

## Pubsub message data

### message

- type : `String`

- Message that has been published on the specific topic.

### senderId

- type : `String`

- id of a sender who has published this message.

### senderName

- type : `String`

- Name of a sender who has published this message.

### timesatmp

- type : `DateTime`

- Timestamp of when a message has been published.

### topic

- type : `String`

- Name of the topic.

</div>
