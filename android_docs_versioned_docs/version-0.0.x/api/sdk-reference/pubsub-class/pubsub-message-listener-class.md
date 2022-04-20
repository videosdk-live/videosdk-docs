---
sidebar_position: 1
sidebar_label: PubSubMessageListener Class
pagination_label: PubSubMessageListener Class
title: PubSubMessageListener Class
---

<div class="sdk-api-ref-only-h4">

---

#### onMessageReceived()

- This event will be emitted whenever any pubsub message received.

#### Example

```javascript
PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage message) {
        Log.d("#message", "onMessageReceived: " + message.getMessage());
    }
};
```

</div>
