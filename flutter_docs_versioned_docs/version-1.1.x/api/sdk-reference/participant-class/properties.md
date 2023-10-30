---
title: Participant Class Properties
sidebar_position: 1
sidebar_label: Properties
pagination_label: Participant Class Properties
---

# Participant Class Properties - Flutter

<div class="sdk-api-ref-only-h4">

### id

- type: [`String`](https://api.flutter.dev/flutter/dart-core/String-class.html)

- Unique id of the participant, who has joined the room.

---

### displayName

- type: [`String`](https://api.flutter.dev/flutter/dart-core/String-class.html)

- It will be the `displayName` of the participant, who has joined the room.

---

### isLocal

- type: [`bool`](https://api.flutter.dev/flutter/dart-core/bool-class.html)

- It will represents whether the participant is [`LocalParticipant`](../room-class/properties#localparticipant)(You) or not. If it is true, then participant is [`LocalParticipant`](../room-class/properties#localparticipant) otherwise RemoteParticipant.

---

### streams

- type: [`Map<String, Stream>`](https://api.flutter.dev/flutter/dart-core/Map-class.html)

- It will represents the stream for that particular participant who has joined the room. Stream could be `audio` , `video` or `share`.

---

### pinState

- type: `ParticipantPinState`

- It will represents the current pin state of the participant. It has properties `cam` and `share` of type boolean.

---

### mode

- type: `Mode`

- It will represents the participants current mode.

---

### metaData

- type: `Map<String,dynamic>`

- It will represents the additional information, that you have passed in [`createRoom()`](../videosdk-class/methods.md).

</div>
