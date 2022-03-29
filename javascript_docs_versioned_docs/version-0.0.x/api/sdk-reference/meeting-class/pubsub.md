---
sidebar_position: 1
sidebar_label: PubSub
pagination_label: PubSub
title: PubSub
---

- `PubSub` one of the properties of a [Meeting Class](../meeting-class/introduction.md) is used for messaging purpose for an ongoing meeting

<div class="sdk-api-ref-only-h4">

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
  - If provided true, it will persist the message throughout the meeting, otherwise it will not.

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
