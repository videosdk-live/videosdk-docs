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

- type: [Participant](./)

- It will the instance of [Participant](./) class for the local participant who joined the meeting.

---

### participants

- type: [`[Dictionary]`](https://developer.apple.com/documentation/swift/dictionary) of [Participant](./)

- [`String`: `Participant`]

  - [`participantId`, `Participant`]

- It will contain all joined participants in the meeting except the `localParticipant`.

- This will be the [`[Dictionary]`](https://developer.apple.com/documentation/swift/dictionary) what will container all participants attached with the key as id of that participant.

```swift
let remoteParticipantId = "ajf897";

let remoteParticipant = participants[remoteParticipantId];
```

---

### listeners

- type: `MeetingMulticastDelegate`

- It will listens the events of [Meeting](./) class for the local participant who joined the meeting.

</div>
