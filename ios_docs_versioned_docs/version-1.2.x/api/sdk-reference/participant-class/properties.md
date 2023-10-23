---
title: Participant Class Properties
sidebar_position: 1
sidebar_label: Properties
pagination_label: Participant Class Properties
---

# Participant Class Properties - iOS

<div class="sdk-api-ref-only-h4">

### id

- type: `String`

- Unique id of the participant who has joined the meeting.

---

### displayName

- type: `String`

- It will be the `displayName` of the participant..

---

### videoQuality

- type: enum `VideoQuality`

- It will be the `videoQuality` of the participant.

---

### isLocal

- type: `Bool`

- It is the `status` of participant (is it remote or local?) who has the meeting.
- It will represents whether the participant is [`LocalParticipant`](../meeting-class/properties#localparticipant)(You) or not. If it is true, then participant is [`LocalParticipant`](../meeting-class/properties#localparticipant) otherwise RemoteParticipant.

---

### streams

- type: `[String: MediaStream]`

- It will represents the stream for that particular participant who has joined the meeting. Streams could be `audio` , `video` or `share`.

</div>
