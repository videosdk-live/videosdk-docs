---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Room Class Properties
title: Room Class Properties
---

<div class="sdk-api-ref-only-h4">

### id

- type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)

- Unique id of the room where the participant has joined.

---

### activeSpeakerId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)

- It will be the `id` of the participant who is actively speaking in the room. If no participant is speaking, at that time value of `activeSpeakerId` will be `null`.

---

### activePresenterId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)

- It will be the `id` of the participant who started `Presenting` / `Screen sharing` in the room. If no participant is sharing the screen, at that time value of `activePresenterId` will be `null`.

---

### camEnabled

- type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
- It indicates if camera device is enabled or not.

---

### selectedCamId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
- It will be the `id` of camera device, which is currently selected. If camera device is disabled, at that time, value of `selectedCamId` will be `null`.

---

### micEnabled

- type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
- It indicates if microphone device is enabled or not.

---

### selectedMicId

- type: [`String?`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
- It will be the `id` of microphone, which is currently selected. If no microphone is selected, at that time, value of `selectedMicId` will be `null`.

---

### localParticipant

- type: [Participant](../participant-class/introduction)

- It will be the instance of [Participant](../participant-class/introduction) class for the local participant(You) who joined the room.

---

### participants

- type: [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) of [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html) and [Participant](../participant-class/introduction)

- `Map<String, Participant>`

  - Map<`participantId`, [Participant](../participant-class/introduction)>

- It will contain all joined participants in the room except the `localParticipant`.

- This will be the [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) what will container all participants attached with the key as id of that participant.

```javascript
String remoteParticipantId = "ajf897";

Participant? remoteParticipant = room.participants[remoteParticipantId];
```

---

### pinnedParticipants

- type: [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) of [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html) and `ParticipantPinState`

- `Map<String, ParticipantPinState>`

  - Map<`participantId`, `ParticipantPinState`>

- It will contain all participants who are pinned in the room.

- This will be the [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) which will contain all participant who are currently pinned's pin state attached with the key as id of that

---

### hlsState

- type: String

- It will return the state of HLS for the room.

---

### liveStreamState

- type: String

- It will return the state of Live stream for the room.

---

### recordingState

- type: String

- It will return the state of Recording for the room.

---

### hlsDownstreamUrl

- type: String?

- It will return the downstream URL for the ongoing HLS of the room if any.

---

### pubSub

- type: [`PubSub`](../pubsub-class/introduction)
- It is used to enable Publisher-Subscriber feature in [`room`](introduction) class.

Learn more about `PubSub`, [here](../pubsub-class/introduction)

</div>
