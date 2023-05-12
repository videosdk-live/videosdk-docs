---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

<div class="sdk-api-ref-only-h4">

### id

- type: `String`

- Unique id of the meeting where the participant has joined.

---

### localParticipant

- type: [Participant](../participant-class/introduction)

- It will be the instance of [Participant](../participant-class/introduction) class for the local participant(You) who joined the meeting.

---

### participants

- type: [`[Dictionary]`](https://developer.apple.com/documentation/swift/dictionary) of [Participant](../participant-class/introduction)

- [`String`: `Participant`]

  - [`participantId`, `Participant`]

- It will contain all joined participants in the meeting except the `localParticipant`.

- This will be the [`[Dictionary]`](https://developer.apple.com/documentation/swift/dictionary) what will container all participants attached with the key as id of that participant.

```js
let remoteParticipantId = "ajf897";

let remoteParticipant = participants[remoteParticipantId];
```

---

### listeners

- type: `MeetingMulticastDelegate`

- It will listens the events of [Meeting](./introduction) class for the local participant who joined the meeting.

</div>
