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

PubSub is a short acronym for Publish-Subscribe mechanism. This mechanism is used to send and recieve messages from a particular topic. As the name suggests, for someone to send a message, they have to specify the topic and the message which should be published and for someone to receive a message, they should be subscribed to that topic.

Here is a visual to better understand publish-subscribe mechanism.

![pubsub](/img/pubsub.png)

In order to use PubSub in meeting, VideoSDK provides a `pubSub` property in meeting object which allows you to subscribe to any topic and publish to any topic allowing to pass on messages and instructions during the meeting easily.

### `publish()`

- This method is used for publishing message of specific topic.
- This method can be accessed from the `pubSub` property of meeting object by mentioning the `topic` for which the `publish()` will be used.
- This method will accept following parameters as input:
  - `message`: This will be the actual message to be published. It has to be in `String` format.
  - `options`: This object specifies the options for publish. You can set following properties :
    - `persist` : `persist` offered the option of keeping the message around for the duration of the session. When `persist` is set to `true`, that message will be retained for upcoming participants and will be available in [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions) with `.CSV` format after completion of session.
    - `sendOnly`: If you want to send a message to specific participants, you can pass their respective `participantId` in form of `Array<String>`. If you don't provide any IDs, the message will be sent to all participants by default.
  - `payload`: If you need to include additional information along with a message, you can pass here as `Object`.

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

- All the previous messages for the particular topic can be recieved by subscribing to the topic.

- To subscribe to a specific topic, use can use the `subscribe()` method which will accepts the `topic` to be subscribed and a `callback function` which will be called when ever any new message is received.

- this callback function will contain following properties:
  - `senderId`: This represents the `participantId` of the participant who send the message.
  - `senderName`: This represents the `displayName` of the participant who send the message.
  - `message`: This will be the acatual message that was send.
  - `timestamp`: This wil the timestamp for when the message was published.
  - `topic`: This will be the name of the topic message was published to.
  - `payload`: This will be the data that you have send with message.

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

1. [`Chat`](./chat-using-pubsub): You can utilise this to develop various Chat features, such as Private Chat and Group Chat. You can follow our chat [integration guide here](./chat-using-pubsub).
2. `Raise Hand`: You can allow attendees to raise their hands at any time during the meeting, informing everyone else that someone has done so.
3. `Layout Switching`: You can change the meeting's layout for every participant at once during the meeting, such as from Grid layout to Spotlight or Grid Layout to Sidebar Layout, etc.
4. `Whiteboard`: You can develop an interactive whiteboard functionality that is completely functional. You can follow our canvas drawing.
5. `Poll`: You may make polls, let users respond to them, and display the results at the end of a poll.
6. `Question Answer Session`: You can also design interactive functionality that is question-and-answer based.

## Downloading PubSub Messages

All the messages from the PubSub which were published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [PubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
