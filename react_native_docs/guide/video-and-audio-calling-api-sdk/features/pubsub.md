---
sidebar_label: PubSub (BETA)
pagination_label: PubSub (BETA)
---

# PubSub (BETA)

PubSub feature allows the participant to send and receive messages of the topics which he has subscribed.

## Methods

### publish()

This method is use for publishing message of specific topic.

#### Syntax


```js
function publish(message: String, { persist : Boolean });
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is an object, which provides an option, such as `persist`, which persists message history for upcoming participants. |


#### Example


```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";

// destructure publish method from usePubSub hook
const { publish } = usePubSub("CHAT");

// publish message
const message = "Hello Everyone!";
publish(message, { persist: true });
```
<br />

### subscribe()

This method is used to subscribe for particular topic. This method returns a list of messages which were sent earlier.

#### Syntax


```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/react-native/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

#### Example


```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/react-native/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

### unsubscribe()

This method is used to unsubscribe the message topic.

#### Syntax


```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/react-native/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

#### Example


```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

## Sample Code

```js
import { usePubSub } from "@videosdk.live/react-native-sdk";

const MyComponent = () => {
  // CHAT Topic
  const { publish, messages } = usePubSub("CHAT");

  // publish message
  const sendMessage = () => {
    const message = "Hello People!";
    publish(message, { persist: true });
  };

  // get latest messages
  console.log("Messages : ", messages);
};
export default MyComponent;
```
