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

  - type: `String`
  - This is the name of the topic, for which message will be published.

- message

  - type: `String`
  - This is the actual message.

- options
  - type: [`PubSubPublishOptions`](pubsub-publish-options-class)
  - This specifies the options for publish.

#### Returns

- _`void`_

#### Example

```js
// Publish message for 'CHAT' topic
PubSubPublishOptions publishOptions = new PubSubPublishOptions();
publishOptions.setPersist(true);

meeting.pubSub.publish("CHAT", "Hello from Android", publishOptions);
```

---

### subscribe()

- `subscribe()` is used to subscribe a particular topic to get all the messages of that particular topic in the meeting.

#### Parameters

- topic:

  - type: `String`
  - Participants can listen to messages on that particular topic.

- listener:

  - type: [`PubSubMessageListener`](pubsub-message-listener-class)

#### Returns

- [_`List<PubSubMessage>`_](pubsub-message-class)

#### Example

```js
PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage message) {
        Log.d("#message", "onMessageReceived: " + message.getMessage());
    }
};

 // Subscribe for 'CHAT' topic
 List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("CHAT", pubSubMessageListener);
```

---

### unsubscribe()

- `unsubscribe()` is used to unsubscribe a particular topic on which you have subscribed priviously.

#### Parameters

- topic:

  - type: `String`
  - This is the name of the topic to be unsubscribed.

- listener:

  - type: [`PubSubMessageListener`](pubsub-message-listener-class)

#### Returns

- _`void`_

#### Example

```js
// Unsubscribe for 'CHAT' topic
meeting.pubSub.unsubscribe("CHAT", pubSubMessageListener);
```

</div>
