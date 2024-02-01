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

# Chat using PubSub - React Native

For communication or any kind of messaging between participants, VideoSDK provides the `usePubSub` hook, which utilizes the Publish-Subscribe mechanism. It can be employed to develop a wide variety of functionalities. For example, participants could use it to send chat messages to each other, share files or other media, or even trigger actions like muting or unmuting audio or video.

This guide focuses on using PubSub to implement Chat functionality. If you are not familiar with the PubSub mechanism and `usePubSub` hook, you can [follow this guide](./pubsub).

## Implementing Chat

### `Group Chat`

1. The initial step in setting up a group chat involves selecting a topic to which all participants will publish and subscribe, facilitating the exchange of messages. In the following example, `CHAT` is used as the topic. Next obtain the `publish()` and `messages` from the `usePubSub`hook.

```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";

function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  return <>...</>;
}
```

2. Next create a message input and a send button to publish the messages.

```js
import { SafeAreaView, TouchableOpacity, TextInput, Text } from "react-native";

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
    <SafeAreaView>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setMessage}
        value={message}
      />

      <TouchableOpacity
        onPress={() => {
          handleSendMessage();
        }}
      >
        <Text>Send Message</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
```

3. The final step in the group chat is to display the messages sent by others. For this use the `messages` and display all the messages.

```js
import { SafeAreaView, TouchableOpacity, TextInput, Text } from "react-native";

function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    //highlight-next-line
    ...
  };

  return (
    <SafeAreaView>
      //highlight-start
      {messages.map((message) => {
        return (
          <Text style={{ fontSize: 12 }}>
            {messsage.senderName} says {message.message}
          </Text>
        );
      })}
      //highlight-end
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setMessage}
        value={message}
      />
      <TouchableOpacity
        onPress={() => {
          handleSendMessage();
        }}
      >
        <Text>Send Message</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

```

### `Private Chat`

In the above example, to convert the chat into a private one between two participants, set the `sendOnly` property.

```js
import { SafeAreaView, TouchableOpacity, TextInput, Text } from "react-native";

function ChatView() {
  // destructure publish method from usePubSub hook
  const { publish, messages } = usePubSub("CHAT");

  // State to store the user typed message
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Sending the Message using the publish method
    // Pass the participantId of the participant to whom you want to send the message.
    // hightlight-next-line
    publish(message, { persist: true, sendOnly: ['XYZ'] });
    // Clearing the message input
    setMessage("");
  };

 //...
}
```


### Displaying Latest Message Notificaiton

To show the notification to the user when a new message arrives, following code snippet has to be followed.

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

All the messages from PubSub published with `persist : true` can be downloaded as an `.csv` file. This file will be accessible in the VideoSDK dashboard and through the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [usePubSub()](/react-native/api/sdk-reference/use-pubsub)
