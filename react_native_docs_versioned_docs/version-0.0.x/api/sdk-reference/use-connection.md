---
sidebar_position: 1
title: "useConnection Hook"
---

# useConnection Hook - React Native

`useConnection` hook abstracts connection class and takes all the properties and events as parameters and returns all the properties and methods to work connection instance.

## useConnection example

```jsx title="useConnection react hook"
import {
    useConnection,
} from "@videosdk.live/react-native-sdk";

function onParticipantJoined(participant) {
    console.log("Participant Joined", participant);
}

function onParticipantLeft() {
    console.log("Participant left");
}

function onChatMessage(message) {
    console.log("Chat Message: ", message)
}

const {
    connection
} = useConnection({
    connectionId,
    onMeeting: {
        {
            onParticipantJoined,
            onParticipantLeft,
            onChatMessage
        }
    }
});
```

## Parameters

### connectionId

- type : `String`
- `REQUIRED`

- `connectionId` represents the `meetingId` you had passed in [`connectTo()`](./use-meeting/methods#connectto).

---

### onMeeting

- type : `Object`
- `OPTIONAL`

- `onMeeting` is a object of `onParticipantJoined`, `onParticipantLeft` and `onChatMessage` callbacks for the meeting you are connected to.

- #### onParticipantJoined()

  - This event callback is trigger when a new participant joins the connected meeting.

- #### onParticipantLeft()

  - This event callback is trigger when a participant leaves the connected meeting.

- #### onChatMessage()

  - This event callback is trigger when a new message is received in the connected meeting.

---

## Returns

- `useConnection` returns an object of `Connection` which has following properties and methods.

### id

- type : `String`
- It represents the meetingId of the meeting you have established a connection with.

---

### payload

- type : `String`
- Any arbitrary payload you define during the connection.

---

### participants

- type : `[Participant]`
- Represents Participants of connected meeting.

---

### meeting

- `meeting` will be of type `object` which will have `id`, `sendChatMessage()`, `end()` and `participants`.

- ### id

  - `id` will have `meetingId` for the meeting you are connected to.

- ### sendChatMessage()

  - If you want to communicate participants of connected meetings, it can be achieved by `sendChatMessage`.

  - **Paramaters** - message : `String`

  - When any participant of Meeting A sends a chat message to Meeting B, then [`onChatMessage`](#onchatmessage) event will be emitted to all participants of Meeting B.

#### Example

```js
connection.meeting.sendChatMessage("Hi there, from MARS!");
```

- ### end()

  - `end()` is used to end the connected meeting.
  - After executing this method, all participants of that meeting will leave automatically.

#### Example

```js
connection.meeting.end();
```

---

## Method

### close()

- `close()` is used to close the connection with meeting.

- [`onConnectionClose`](./use-meeting/events#onconnectionclose) event of meeting class is triggered to all participant whenever `connection.close()` being called.

#### Example

```js
connection.close();
```
