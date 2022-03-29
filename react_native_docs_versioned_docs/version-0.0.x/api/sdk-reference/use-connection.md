---
sidebar_position: 1
---

# useConnection Hook

`useConnection` hook abstracts connection class and takes all the properties and events as parameters and returns all the properties and methods to work connection instance.

## useConnection example

```jsx title="useConnection react hook"
import {
  useConnection,
} from "@videosdk.live/react-sdk";

function onParticipantJoined(participant) {
  console.log("Participant Joined", participant);
}

function onParticipantLeft(){
  console.log("Participant left");
}

function onChatMessage(message) {
  console.log("Chat Message: ", message)
}

const {connection} = useConnection({
  connectionId,
  {
    onParticipantJoined,
    onParticipantLeft,
    onChatMessage
  }
});
```

## Parameters

### connectionId

- type : `String`
- `REQUIRED`

- `connectionId` represents the `meetingId` you are connected to.

---

### onMeeting

- type : `Object`
- `OPTIONAL`

- `onMeeting` is a object of `onParticipantJoined`, `onParticipantLeft` and `onChatMessage` callbacks for the meeting you are connected to.

- #### onParticipantJoined()

  - This event callback is triggered when a new participant joins the connected meeting.

- #### onParticipantLeft()

  - This event callback is triggered when a participant leaves the connected meeting.

- #### onChatMessage()

  - This event callback is triggered when a new message is received in the connected meeting.

---

## Returns

- `useConnection` returns an object of `Connection` which has following properties and methods.

### id

- type : `String`
- It represents the meetingId of the meeting you have established a connection with.

---

### payload

- type : `Object`
- It will hold all the payload details you send when the connection was opened.

---

### participants

- type : `[Participant]` 
- It will have all the participants present in the meeting.

---


### meeting

- `meeting` will be of type `object` which will have `id`, `sendChatMessage()`, `end()` and `participants`.

- ### id

  - `id` will have `meetingId` for the meeting you are connected to.

- ### sendChatMessage()

  - `sendChatMessage()` is used to send chat mesasge to the meeting you are connected to.

  - `onChatMessage()` will be triggered for all the participants.

- ### end()

  - `end()` is used to end the meeting with whic hyou are connected.

---

## Method

### close()

- `close()` is used to close the connection to a meeting.

- `onConnectionClose` is triggered when the connection gets closed for each participant.