---
sidebar_position: 1
sidebar_label: PubSub
pagination_label: PubSub
title: PubSub
---

- `PubSub` one of the properties of a [Meeting Class](../meeting-class/introduction.md) is used for messaging purpose for an ongoing meeting

<div class="sdk-api-ref-only-h4">

## Properties

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

### topic

- type : `String`

- topic name on which message has been published.

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

- persist :
  - type : `Boolean`
  - If provided true, it will persist the message throughout the meeting and one will get all old messages of a meeting, otherwise not.

#### Returns

- `void`

#### Example

```js
//write this block on btnClick event
meeting.pubSub.publish("CHAT", message, { persist: true });
```

---

### subscribe()

- `subscribe()` is used to subscribe a particular topic to get all the messages of that particular topic in the meeting.

#### Parameters

- topic :

  - type : `String`
  - Participants can listen to messages on that particular topic.

- callback :
  - type : `function`
  - in callback you will get `newMessage` object which contains [pubsub properties](#properties)

#### Returns

- `array of persisted message object`

#### Example

```js

//subscribing messages on topic CHAT
let oldMessages=await meeting.pubSub.subscribe("CHAT", (newMessage) => {
    console.log(newMessage);
}
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
//unsubscribing messages on topic CHAT
meeting.pubSub.unsubscribe("CHAT", callback);
```

</div>
