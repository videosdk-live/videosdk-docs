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
function publish(topic: String, message: String, { persist : Boolean });
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| topic          | String | This should be the topic for which you are publishing a message.                                                          |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is an object, which provides an option, such as `persist`, which persists message history for upcoming participants. |


#### Example


```js
function sendMessage() {
  meeting?.pubSub?.publish(topic: "CHAT", message: "Hello Everyone!", { persist: true })
}
```

<br />

### subscribe()

This method is used to subscribe for particular topic. This method returns a list of messages which were sent earlier.

#### Syntax


```js
function subscribe(topic: String, onMessageReceived: function);
```

| Parameter Name    | Type     | Description                                                                   |
| ----------------- | -------- | ----------------------------------------------------------------------------- |
| topic             | String   | This should be the topic to be subscribed.                                    |
| onMessageReceived | function | This is a callback function, which will be called, when new message received. |

#### Example


```js
// Callback function
function onMessageReceived(data) {
  console.log(`New message received: ${data.message}`);
}

function subscribe() {
  // Subscribe 'CHAT' topic
  meeting?.pubSub?.subscribe("CHAT", onMessageReceived);
}
```

### unsubscribe()

This method is used to unsubscribe the message topic.

#### Syntax


```js
function unsubscribe(topic:String, onMessageReceived: function);
```

| Parameter Name    | Type     | Description                                                     |
| ----------------- | -------- | --------------------------------------------------------------- |
| topic             | String   | This should be the topic to be unsubscribed.                    |
| onMessageReceived | function | This is a callback function, which was passed in `subscribe()`. |

#### Example


```js
function subscribe() {
  // Unsubscribe 'CHAT' topic
  meeting?.pubSub?.unsubscribe("CHAT", onMessageReceived);
}
```

## Sample Code


```js
// Coming Soon
```
