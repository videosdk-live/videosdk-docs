---
sidebar_position: 1
sidebar_label: PubSubMessageListener Class
pagination_label: PubSubMessageListener Class
title: PubSubMessageListener Class
---

# PubSubMessageListener Class - Android

<div class="sdk-api-ref-only-h4">

---

#### onMessageReceived()

- This event will be emitted whenever any pubsub message received.

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
var pubSubMessageListener = PubSubMessageListener { message ->
    Log.d("#message", "onMessageReceived: " + message.message)
}
```

</TabItem>

<TabItem value="Java">

```javascript
PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage message) {
        Log.d("#message", "onMessageReceived: " + message.getMessage());
    }
};
```

</TabItem>

</Tabs>

</div>
