---
title: PubSub class for android SDK.
hide_title: false
hide_table_of_contents: false
description: PubSub Class
sidebar_label: PubSub Class
pagination_label: PubSub Class
keywords:
  - RTC Android
  - Publisher-Subscriber
  - PubSub
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pubsub-class
---

# PubSub Class

## using PubSub Class

The `PubSub` includes methods for pubsub.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel name="publish(String topic, String message, PubSubPublishOptions options)"  type={"void"} />
      <MethodListItemLabel name="subscribe(String topic, PubSubMessageListener listener)"  type={"List<PubSubMessage>"} />
      <MethodListItemLabel name="unsubscribe(String topic, PubSubMessageListener listener)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>