---
sidebar_label: PubSub
pagination_label: PubSub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PubSub

PubSub feature allows the participant to receive messages of the topics which he has subscribed and send messages to other participants.

### Methods

- **publish()** - This method is used for publishing message of specific topic.
  This method accepts `topic`, `message` and `options` as an Object.

  - `topic` - This should be the topic for which you are publishing message.
  - `message` - This is the actual message which will be published to other participant.
  - `options` - This is the object which provides additional options to publish().

- **subscribe()** - This method is used to subscribe message topic.
  This method accepts `topic`, and `callback` as a Function. This method returns list of messages which were sent earlier.

  - `topic` - This should be the topic to be subscribed.
  - `callback` - This is a callback function, which will be called when new message received.

- **unSubscribe()** - This method is used to unsubscribe the message topic.
  This method accepts `topic`, and `callback` as a Function.

  - `topic` - This should be the topic to be unsubscribed.
  - `callback` - This is a callback function, which was passed in `subscribe()`.

:::

### Example

`subscribe({topic, callback })`

`unSubscribe({topic, callback })`

`publish({topic, message, options})`

### **Methods Code**

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
// Coming Soon
```

</TabItem>

<TabItem value="react">

```js
// Coming Soon
```

</TabItem>
<TabItem value="reactnative">

```js
// Coming Soon
```

</TabItem>

<TabItem value="flutter">

```js
// subscribe()
ElevatedButton(
  onPressed: () async {
    // Subscribe 'CHAT' topic and get earlier messages
    var messages = await meeting.pubsub.subscribe(topic: "CHAT", callback: messageCallback);

    // Printing message list
    print("Messages: ${messages.messages.map((msg) => msg.message).join(" ")}");
  },
  child: Text("Subscribe"),
),

// publish()
ElevatedButton(
  onPressed: () async {
    // Publish a message
    await meeting.pubsub.publish(
      topic: "CHAT", // Topic
      message: "Hello", // Message Content
      options: <String, dynamic>{
        "persist": true // Stores the message in server for future participants
      },
    );

    print("Message published");
  },
  child: Text("Publish"),
),


// unSubscribe
ElevatedButton(
  onPressed: () {
    // Unsubscribe 'CHAT' topic
    await meeting.pubsub.unSubscribe(topic: "CHAT", messageCallback);

  },
  child: Text("UnSubscribe"),
),

// Message Callback
void messageCallback(msg){
  // Do something
  print("New message received: $msg");
}
```

</TabItem>
</Tabs>
