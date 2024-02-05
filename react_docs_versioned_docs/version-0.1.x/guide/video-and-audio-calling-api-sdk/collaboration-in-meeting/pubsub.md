---
title: PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: PubSub
pagination_label: PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pubsub
---

# PubSub - React

PubSub is a concise acronym for the Publish-Subscribe mechanism. This mechanism is employed to send and receive messages within a specified topic. As the name implies, to send a message, one must specify the topic and the message to be published. Similarly, to receive a message, a subscriber must be connected to that particular topic.

Here is a visual to better understand the publish-subscribe mechanism.

![pubsub](/img/pubsub.png)

## usePubSub

To utilize PubSub in a meeting, VideoSDK provides a hook called usePubSub. This hook enables you to subscribe to any topic and publish to any topic, facilitating the exchange of messages and instructions seamlessly during the meeting.

### `publish()`

- This method is used for publishing a message for a specific topic.
- It can be accessed from the `usePubSub` hook by specifying the `topic` for which `publish()` will be used.
- It will accept following parameters as input:
  - `message`: This parameter represents the actual message to be published and should be in `String` format.
  - `options`: This object specifies the options for publishing. You can set following properties :
    - `persist` : When set to true, this option retains the message for the duration of the session. If persist is true, the message will be available for upcoming participants and can be accessed in the [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions) in CSV format after the session is completed.
    - `sendOnly`: If you want to send a message to specific participants, you can pass their respective `participantId` here. If you don't provide any IDs, the message will be sent to all participants by default.
  - `payload`: If you need to include additional information along with a message, you can pass it here as an `object`.
  
```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("CHAT");

  const handlePublishMessage = () => {
    // publish message
    const message = "Hello Everyone!";
    publish(message, { persist: true });
  };

  return (
    <>
      <button onClick={handlePublishMessage}>Publish Message</button>
    </>
  );
}
```

## Receiving the messages

- The `messages` property of the `usePubSub` hook will store all the past and upcoming messages for a particular topic.

- `messages` is an array of Objects containing all the messages.

This object contains following properties:

- `senderId`: Represents the `participantId` of the participant who sent the message.
- `senderName`: Represents the `displayName` of the participant who sent the message.
- `message`: The acatual message that was sent.
- `timestamp`: The timestamp for when the message was published.
- `topic`: The name of the topic the message was published to.
- `payload`: The data that was sent along with message.

## Example

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function ChatView() {
  // destructure publish method and messages from usePubSub hook
  //highlight-next-line
  const { publish, messages } = usePubSub("CHAT");

  const handlePublishMessage = () => {
    // publish message
    const message = "Hello Everyone!";
    //highlight-next-line
    publish(message, { persist: true });
  };

  return (
    <>
      <button onClick={handlePublishMessage}>Publish Message</button>
      <p>Messages: </p>
      //highlight-start
      {messages.map((message) => {
        return (
          <p>
            {messsage.senderName} says {message.message}
          </p>
        );
      })}
      //highlight-end
    </>
  );
}
```

## Events associated with PubSub

### onMessageReceived

- This event callback is triggered when a new message is received on the subscribed topic.

### onOldMessagesReceived

- This event callback is triggered when you subscribe to the topic, and it contains all the past messages from that topic that were published with `persist : true`.

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("CHAT", {
    //highlight-start
    onMessageReceived: (message) => {
      console.log("New Message Recieved", message);
    },
    onOldMessagesReceived: (messages) => {
      console.log("Old Message publsihed with persist:true Recieved", messages);
    },
    //highlight-end
  });

  const handlePublishMessage = () => {
    // publish message
    const message = "Hello Everyone!";
    publish(message, { persist: true });
  };

  return (
    <>
      <button onClick={handlePublishMessage}>Publish Message</button>
    </>
  );
}
```

## Applications of usePubSub

PubSub is a powerful mechanism that can be employed to enhance the interactive aspects of your meeting experience. Some common use cases for PubSub during a meeting include:

1. [`Chat`](./chat-using-pubsub): You can utilise this to develop features, like Private Chat or Group Chat. You can follow our chat [integration guide here](./chat-using-pubsub).
2. `Raise Hand`: You can allow attendees to raise their hands at any point during the meeting, informing everyone else that someone has a question or input.
3. `Layout Switching`: You can change the meeting's layout for every participant at once during the meeting, such as from Grid layout to Spotlight or from Grid Layout to Sideba, etc.
4. [`Whiteboard`](./canvas-drawing-using-pubsub): You can develop an interactive whiteboard functionality that is completely functional. You can follow our canvas drawing [guide here](./canvas-drawing-using-pubsub).
5. `Poll`: You can make polls, let users respond to them, and display the results at the end of a poll.
6. `Question Answer Session`: You can also design interactive features based on a question-and-answer format.

## Downloading PubSub Messages

All the messages from PubSub published with `persist : true` can be downloaded as an `.csv` file. This file will be accessible in the VideoSDK dashboard and through the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
