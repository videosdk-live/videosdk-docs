---
sidebar_position: 1
sidebar_label: Methods
pagination_label: PubSub Class Methods
title: PubSub Class Methods
---

<div class="sdk-api-ref-only-h4">

### publish()

- `publish()` is used to publish messages on a specified topic in the meeting.

#### Parameters

- topic

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - This is the name of the topic, for which message will be published.

- message

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - This is the actual message.

- options
  - type: [`PubSubPublishOptions`](pubsub-publish-options-class)
  - This specifies the options for publish.

#### Returns

- _`Future<void>`_

#### Example

```js
// Publishing message
meeting.pubSub
    .publish(
      "CHAT",
      "Hii",
      const PubSubPublishOptions(persist: true),
    );
```

---

### subscribe()

- `subscribe()` is used to subscribe a particular topic to get all the messages of that particular topic in the meeting.

#### Parameters

- topic:

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Participants can listen to messages on that particular topic.

- messageHandler:

  - type: [`Function(PubSubMessage)`](pubsub-message-class)
  - This function will be called, whenever pubsub message received.

#### Returns

- [_`Future<PubSubMessages>`_](pubsub-message-class)

#### Example

```js
// Subscribing 'CHAT' Topic

void handleMessage(PubSubMessage pubsubMessage) {
  print(pubsubMessage.message);
}

void subscribePubSubTopic() async {
  PubSubMessages pubsubMessages =
      meeting.pubSub.subscribe("CHAT", handleMessage);

  // do something
}

subscribePubSubTopic();
```

---

### unsubscribe()

- `unsubscribe()` is used to unsubscribe a particular topic on which you have subscribed priviously.

#### Parameters

- topic:

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - This is the name of the topic to be unsubscribed.

- messageHandler:

  - type: [`Function(PubSubMessage)`](https://api.dart.dev/stable/2.15.1/dart-core/Function-class.html)
  - This is the message handler to be unsubscribed.

#### Returns

- _`Future<void>`_

#### Example

```js
// Unsubscribing 'CHAT' topic
meeting.pubSub.unsubscribe("CHAT", handleMessage);
```

</div>
