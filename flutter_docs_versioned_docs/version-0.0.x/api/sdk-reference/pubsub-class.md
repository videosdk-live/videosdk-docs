---
title: PubSub class for Flutter SDK.
hide_title: false
hide_table_of_contents: false
description: PubSub Class
sidebar_label: PubSub Class
pagination_label: PubSub Class
keywords:
  - RTC Flutter
  - Publisher-Subscriber
  - PubSub
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pubsub-class
---

# PubSub Class

## using PubSub Class

The `PubSub class` includes methods of PubSub.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__methods"  >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel description={"publish the pubsub message"} type={"Future<void>"} name="publish()" />
      <MethodListItemLabel description={"subscribe the pubsub topic"} type={"Future<PubSubMessages>"} name="subscribe()" />
      <MethodListItemLabel description={"unsubscribe the pubsub topic"} type={"Future<void>"} name="unsubscribe()" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Play with PubSub instance"
// Subscribing 'CHAT' Topic
meeting.pubSub
    .subscribe("CHAT", (message) => print(message))
    .then((value) => print(messages));

// Publishing message
meeting.pubSub
    .publish(
      "CHAT",
      "Hii",
      const PubSubPublishOptions(persist: true),
    );

// Unsubscribing 'CHAT' topic
meeting.pubSub
  .unsubscribe("CHAT", (message) => print(message));

```
