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

- options :
  - type : `[String: Any]`
  - Any options related to your message or channel specific information.

#### Returns

- `void`

#### Example

```swift

//write this block on btnClick event
meeting.pubSub.publish(topic: "CHAT", message: message, options: { persist: true });
```

---

### subscribe()

- `subscribe()` is used to subscribe a particular topic to get all messages of that topic in the meeting.

#### Parameters

- topic :

  - type : `String`
  - participants can deliever and get messages with the help of topic name.

- listener : `PubSubMessageListener`

#### Returns

- `void`

#### Example

```swift

//subscribing messages on topic CHAT
meeting.pubSub.subscribe(topic: "CHAT")
```

</div>
