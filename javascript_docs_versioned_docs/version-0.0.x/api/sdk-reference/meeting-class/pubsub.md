---
sidebar_position: 1
sidebar_label: PubSub
pagination_label: PubSub
title: PubSub
---

- `PubSub` one of the properties of a `Meeting Class` is used for messaging purpose for an ongoing meeting
- You can make use of pubsub for messaging purpose using `meeting.purpose`

<div class="sdk-api-ref-only-h4">

## Methods

### Publish()

- `publish()` is used to publish messages in the meeting.

#### Parameters

- topic :

  - type : `String`
  - participants can deliever and get messages with the help of topic name.

- message :

  - type: `String`
  - Any arbuitrary message you want to publish.

- persist :
  - type : `Boolean`
  - Keeping it true will help getting old messages of an ongoing meeting

#### Returns

- `void`

#### Example

```js
//write this block on btnClick event
meeting.pubSub.publish("CHAT", message, { persist: true });
```

---

### subscribe()

- `publish()` is used to subscribe a particular topic to get all messages of that topic in the meeting

#### Parameters

- topic :

  - type : `String`
  - participants can deliever and get messages with the help of topic name.

- listener : `function`

#### Returns

- `void`

#### Example

```js

//subscribing messages on topic CHAT
let oldMessages=await meeting.pubSub.subscribe("CHAT", (newMessage) => {
    console.log(newMessage);
}
```

</div>
