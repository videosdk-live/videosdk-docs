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

- Unique id of the participant, who has joined the meeting.

---

### displayName

- type: [`String`](https://api.flutter.dev/flutter/dart-core/String-class.html)

- It will be the `displayName` of the participant, who has joined the meeting.

---

### isLocal

- type: [`bool`](https://api.flutter.dev/flutter/dart-core/bool-class.html)

- It will represents whether the participant is [`LocalParticipant`](../meeting-class/properties#localparticipant)(You) or not. If it is true, then participant is [`LocalParticipant`](../meeting-class/properties#localparticipant) otherwise RemoteParticipant.

---

### streams

- type: [`Map<String, Stream>`](https://api.flutter.dev/flutter/dart-core/Map-class.html)

- It will represents the stream for that particular participant who has joined the meeting. Stream could be `audio` , `video` or `share`.

---

</div>
