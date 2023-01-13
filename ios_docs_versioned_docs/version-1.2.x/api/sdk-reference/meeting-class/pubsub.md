---
sidebar_position: 1
sidebar_label: Send Message using PubSub
pagination_label: PubSub
title: PubSub
---

- `PubSub` one of the properties of a [Meeting Class](../meeting-class/introduction.md) is used for messaging purpose for an ongoing meeting

<div class="sdk-api-ref-only-h4">

## Methods

### Publish()

- `publish()` is used to publish messages on a specified topic in the meeting.
- While publishing message, if you provide `persist` as `true`, then it will persist the message throughout the meeting and newly joined partcipant will get all old messages of a meeting, otherwise not.

#### Parameters

- topic :

  - type : `String`
  - Participants can deliver messages to that particular topic.

- message :

  - type: `String`
  - Any arbitrary message you want to publish.

- options :
  - type : `[Object:Any]`
  - specifies the options for the message.

#### Returns

- `void`

#### Example

```swift
//write this block on btnClick event
meeting.pubSub.publish(topic: "CHAT", message: message, options: { persist: true })
```

---

### subscribe()

- `subscribe()` is used to subscribe a particular topic to get all the messages of that particular topic in the meeting.

#### Parameters

- topic :

  - type : `String`
  - Participants can listen to messages on that particular topic.

- forListener :
  - type : `PubSubMessageListener`
  - in this listener, you will get `callback` for subscribe the topic, which contains [Pubsub message data](#pubsub-message-data)

#### Returns

- This will return old messages for this topic, if you passed `persist` to `true` while [publish](#publish)

- Array<[message](#pubsub-message-data)>

#### Example

```swift

//subscribing messages on topic CHAT
meeting.pubsub.subscribe(topic: "CHAT", forListener: self)
```

---

### unsubscribe()

- `unsubscribe()` is used to unsubscribe a particular topic on which you have subscribed priviously.

#### Parameters

- topic :

  - type : `String`

- forListener :
  - type : `PubSubMessageListener`
  - in this listener, you will get `callback` for unsubscribe the topic.

#### Returns

- `void`

#### Example

```swift
//unsubscribing messages on topic CHAT
meeting.pubSub.unsubscribe("CHAT");
```

---

### getMessagesForTopic()

- `getMessagesForTopic()` is used to retrieve messages for specified topic which are `persisted`.

#### Parameters

- topic :

  - type : `String`

#### Returns

- `[PubSubMessage]`

#### Example

```swift
//getting all the messages of topic CHAT
let messages = meeting.pubSub.getMessagesForTopic("CHAT");
```

## Pubsub message data

### id

- type : `String`

- Unique id of the message.

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

---

</div>
