---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

# Meeting Class Properties - Flutter

<div class="sdk-api-ref-only-h4">

### id

- type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)

- Unique id of the meeting where the participant has joined.

---

### activeSpeakerId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)

- It will be the `id` of the participant who is actively speaking in the meeting. If no participant is speaking, at that time value of `activeSpeakerId` will be `null`.

---

### activePresenterId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)

- It will be the `id` of the participant who started `Presenting` / `Screen sharing` in the meeting. If no participant is sharing the screen, at that time value of `activePresenterId` will be `null`.

---

### selectedWebcamId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
- It will be the `id` of webcam, which is currently selected. If no webcam is selected, at that time, value of `selectedWebCamId` will be `null`.

---

### selectedMicId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
- It will be the `id` of microphone, which is currently selected. If no microphone is selected, at that time, value of `selectedMicId` will be `null`.

---

### localParticipant

- type: [Participant](../participant-class/introduction)

- It will be the instance of [Participant](../participant-class/introduction) class for the local participant(You) who joined the meeting.

---

### participants

- type: [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) of [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html) and [Participant](../participant-class/introduction)

- `Map<String, Participant>`

  - Map<`participantId`, [Participant](../participant-class/introduction)>

- It will contain all joined participants in the meeting except the `localParticipant`.

- This will be the [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) what will container all participants attached with the key as id of that participant.

```javascript
String remoteParticipantId = "ajf897";

Participant? remoteParticipant = meeting.participants[remoteParticipantId];
```

---

### pubSub

- type: [`PubSub`](../pubsub-class/introduction)
- It is used to enable Publisher-Subscriber feature in [`meeting`](introduction) class.

Learn more about `PubSub`, [here](../pubsub-class/introduction)

</div>
