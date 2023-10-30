---
sidebar_position: 1
sidebar_label: PubSubPublishOptions Class
pagination_label: PubSubPublishOptions Class
title: PubSubPublishOptions Class
---

# PubSubPublishOptions Class - Flutter

<div class="sdk-api-ref-only-h4">

## Properties

### persist

- type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)

- defaultValue: `false`

- This property specifies whether to store messages on server for upcoming participants.

- If the value of this property is true, then server will store pubsub messages for the upcoming participants.

---

### sendOnly

- type: `List<String>`

- If you want to send a message to specific participants, you can pass their respective `participantId` here. If you don't provide any IDs, the message will be sent to all participants by default.

:::note
Make sure that participantId present in the array must be subscribe to that specific topic.
:::

</div>
