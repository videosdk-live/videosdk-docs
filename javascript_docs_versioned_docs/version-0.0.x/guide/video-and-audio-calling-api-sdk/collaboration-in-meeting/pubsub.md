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
image: img/videosdklive-thumbnail.jpg2
sidebar_position: 1
slug: pubsub
---

# PubSub - Javascript

PubSub is a concise acronym for the Publish-Subscribe mechanism. This mechanism is employed to send and receive messages within a specified topic. As the name implies, to send a message, one must specify the topic and the message to be published. Similarly, to receive a message, a subscriber must be connected to that particular topic.

Here is a visual to better understand the publish-subscribe mechanism.

![pubsub](/img/pubsub.png)

To utilize PubSub in a meeting, VideoSDK provides a property called `pubSub`. This enables you to subscribe to any topic and publish to any topic, facilitating the exchange of messages and instructions seamlessly during the meeting.

### `publish()`

- This method is used for publishing a message for a specific topic.
- It can be accessed from the `pubSub` property by specifying the `topic` for which `publish()` will be used.
- It will accept following parameters as input:
  - `message`: This parameter represents the actual message to be published and should be in `String` format.
  - `options`: This object specifies the options for publishing. You can set following properties :
    - `persist` : When set to true, this option retains the message for the duration of the session. If persist is true, the message will be available for upcoming participants and can be accessed in the [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions) in CSV format after the session is completed.
    - `sendOnly`: If you want to send a message to specific participants, you can pass their respective `participantId` in the form of `Array<String>` here. If you don't provide any IDs, the message will be sent to all participants by default.
  - `payload`: If you need to include additional information along with a message, you can pass it here as an `object`.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const topic = "CHAT";

const publishChat = (message) => {
  //
  meeting?.pubSub.publish(topic, message, { persist: true });
};

publishChat("Hello world!");
```

### `subscribe()`

- This method serves a dual purpose. Firstly, it is employed to retrieve all previously sent messages associated with a particular `topic`. Additionally, it can be used to subscribe to a particular `topic`.

- By providing the topic to be subscribed to and a callback function, it ensures that all future messages related to the subscribed topic are received and processed when they arrive.

- The callback function will contain the following properties:
- `senderId`: Represents the `participantId` of the participant who sent the message.
- `senderName`: Represents the `displayName` of the participant who sent the message.
- `message`: The actual message that was sent.
- `timestamp`: The timestamp for when the message was published.
- `topic`: The name of the topic the message was published to.
- `payload`: The data that was sent along with message.

## Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Callback function
function onMessageReceived(data) {
  let { message, senderId, senderName, timestamp } = data;
  console.log(`New message received: ${message}`);
}

async function subscribe() {
  // Subscribe 'CHAT' topic
  let oldMessages = await meeting?.pubSub?.subscribe("CHAT", onMessageReceived);

// Getting Old messages for upcoming participant
  console.log(oldMessages);

```

## Applications of PubSub

PubSub is a very powerful mechanism which can be used to do a lot of things which can make your meeting experience much more interactive. Some of the most common usecase that we have come across for the PubSub during a meeting are listed below:

1. [`Chat`](./chat-using-pubsub): You can utilise this to develop features, like Private Chat or Group Chat. You can follow our chat [integration guide here](./chat-using-pubsub).
2. `Raise Hand`: You can allow attendees to raise their hands at any point during the meeting, informing everyone else that someone has a question or input.
3. `Layout Switching`: You can change the meeting's layout for every participant at once during the meeting, such as from Grid layout to Spotlight or from Grid Layout to Sidebar, etc.
4. [`Whiteboard`](./canvas-drawing-using-pubsub): You can develop an interactive whiteboard functionality that is completely functional. You can follow our canvas drawing [guide here](./canvas-drawing-using-pubsub).
5. `Poll`: You can make polls, let users respond to them, and display the results at the end of a poll.
6. `Question Answer Session`: You can also design interactive features based on a question-and-answer format.


## Downloading PubSub Messages

All the messages from PubSub published with `persist : true` can be downloaded as an `.csv` file. This file will be accessible in the VideoSDK dashboard and through the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [PubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
