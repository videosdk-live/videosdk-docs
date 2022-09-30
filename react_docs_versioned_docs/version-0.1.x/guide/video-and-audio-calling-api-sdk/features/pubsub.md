---
sidebar_label: PubSub
pagination_label: PubSub
---

# PubSub

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
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

// destructure publish method from usePubSub hook
const { publish } = usePubSub("CHAT");

// publish message
const message = "Hello Everyone!";
publish(message, { persist: true });
```

## Sample Code

```js
import { usePubSub } from "@videosdk.live/react-sdk";

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
