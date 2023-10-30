---
title: Participant Class Properties
sidebar_position: 1
sidebar_label: Properties
pagination_label: Participant Class Properties
---

# Participant Class Properties - Javascript

<div class="sdk-api-ref-only-h4">

### id

- type: `String`

- Unique id of the participant who has joined the meeting.

---

### displayName

- type: `String`

- It will be the `displayName` of the participant.

---

### isLocal

- type: `boolean`

- It will represents whether the participant is [`LocalParticipant`](../meeting-class/properties#localparticipant)(You) or not. If it is true, then participant is [`LocalParticipant`](../meeting-class/properties#localparticipant) otherwise RemoteParticipant.

---

### streams

- type: `Map<String,name>`

- It will represents the stream for that particular participant who has joined the meeting. Streams could be `audio` , `video` or `share`.

---

### metaData

- type: `Object`

- It will represents the additional information, that you have passed in `initMeeting()`.

</div>
