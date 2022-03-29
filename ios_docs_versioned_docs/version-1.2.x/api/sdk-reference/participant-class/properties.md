---
title: Participant Class Properties
sidebar_position: 1
sidebar_label: Properties
pagination_label: Participant Class Properties
---

<div class="sdk-api-ref-only-h4">

### id

- type: `String`

- Unique id of the participant who has joined the meeting.

---

### displayName

- type: `String`

- It will be the `displayName` of the participant who has the meeting.

---

### videoQuality

- type: enum `VideoQuality`

- It will be the `videoQuality` of the participant who has the meeting.

---

### isLocal

- type: `Bool`

- It is the `status` of participant (is it remote or local?) who has the meeting.

---

### streams

- type: `[String: MediaStream]`

- It will represents the stream for that particular participant who has joined the meeting. Steams could be `audio` , `video` or `share`.

</div>
