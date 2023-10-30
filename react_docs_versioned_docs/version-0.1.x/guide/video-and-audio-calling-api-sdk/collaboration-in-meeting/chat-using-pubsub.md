---
title: Chat messages with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Chat using PubSub
pagination_label: Chat using PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: chat-using-pubsub
---

# Chat using PubSub

For the communication or any kind of messaging in between the participants, VideoSDK provides `usePubSub` hook which use Publish-Subscribe mechanism and can be used to develope wide varitey of functionalities. For example, participants could use it to send chat messages to each other, share files or other media, or even trigger actions like muting or unmuting audio or video.

Now we will see, how we can use PubSub to implement Chat functionality. If you are not familiar with the PubSub mechanism and `usePubSub`hook, you can [follow this guide](./pubsub).

## Implementing Chat

### `Group Chat`

1. First step in creating a group chat is choosing the topic which all the participants will publish and subscribe to send and receive the messages. We will be using `CHAT` as the topic for this one. So let us get the `publish()` and `messages` from the `usePubSub`hook.

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  return <>...</>;
}
```

2. Now lets create a message input and send button to publish the messages.

```js
function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  // State to store the user typed message
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Sending the Message using the publish method
    publish(message, { persist: true });
    // Clearing the message input
    setMessage("");
  };

  return (
    <>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </>
  );
}
```

3. Final step in the group chat would be to display the messages others send. For this will use the `messages` and display all the messages.

```js
function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    //highlight-next-line
    ...
  };

  return (
    <>
      //highlight-start
      <div>
      <p>Messages: </p>
      {messages.map((message) => {
        return (
          <p>
            {messsage.senderName} says {message.message}
          </p>
        );
      })}
      //highlight-end
      </div>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </>
  );
}
```

### `Private Chat`

In the above example, if you want to convert into the private chat between two participants, then all you have to do is set `sendOnly` property.

```js
function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  // State to store the user typed message
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Sending the Message using the publish method
    // Pass the participantId of the participant to whom you want to send the message.
    //highlight-next-line
    publish(message, { persist: true , sendOnly: ['XYZ'] });
    // Clearing the message input
    setMessage("");
  };

  //...
}
```

### Display Latest Message Notificaiton

You may want to show the notification to the user when new message arrives. So lets continue our example and add alert for the new images.

```js
function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT", {
    //highlight-start
    onMessageReceived: (message)=>{
      window.alert(message.senderName + "says" + message.message);
    }
    //highlight-end
  });
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    //highlight-next-line
    ...
  };
  return <>...</>;
}
```

## Downloading Chat Messages

All the messages from the PubSub which where published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
