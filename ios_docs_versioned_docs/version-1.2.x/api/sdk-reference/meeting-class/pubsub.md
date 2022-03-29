---
sidebar_position: 1
sidebar_label: PubSub
pagination_label: PubSub
title: PubSub
---

- `PubSub` one of the properties of a [Meeting Class](../meeting-class/introduction.md) is used for messaging purpose for an ongoing meeting

<div class="sdk-api-ref-only-h4">

## Properties

### id

- type : `String`

- Unique id of the message.

### topic

- type : `String`

- topic name on which message has been published.

### message

- type : `String`

- Message that has been published on this topic currently

### senderId

- type : `String`

- id of a sender who has bublished this message.

### senderName

- type : `String`

- name of a sender who has bublished this message.

### timesatmp

- type : `DateTime`

- timestamp of when a message has been published.

---

## Methods

### Publish()

- `publish()` is used to publish messages on a specified topic in the meeting.

#### Parameters

- topic :

  - type : `String`
  - Participants can deliver messages to that particular topic.

- message :

  - type: `String`
  - Any arbitrary message you want to publish.

- options :
  - type : `[String:Any]`
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
  - in this listener, you will get `callback` for subscribe the topic, which contains [pubsub properties](#properties)

#### Returns

- `array of persisted message object`

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
  - Participants can listen to messages on that particular topic.

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

- `getMessagesForTopic()` is used to retrieve messages for specified topic.

#### Parameters

- topic :

  - type : `String`
  - Participants can listen to messages on that particular topic.

#### Returns

- `[PubSubMessage]`

#### Example

```swift
//getting all the messages of topic CHAT
let messages = meeting.pubSub.getMessagesForTopic("CHAT");
```

</div>
