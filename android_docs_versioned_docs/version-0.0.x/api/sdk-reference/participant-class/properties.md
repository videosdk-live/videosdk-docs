---
title: Participant Class Properties
sidebar_position: 1
sidebar_label: Properties
pagination_label: Participant Class Properties
---

<div class="sdk-api-ref-only-h4">

### getId()

- type: `String`

- `getId` will return unique id of the participant who has joined the meeting.

---

### getDisplayName()

- type: `String`

- It will return the `displayName` of the participant who has joined the meeting.

---

### getQuality()

- type: `String`

- `getQuality()` will return quality of participant's stream. Stream could be `audio` , `video` or `share`.

---

### isLocal()

- type: `boolean`

- `isLocal()` will return `true` if participant is Local,`false` otherwise.

---

### getStreams()

- type: `Map<String,name>`

- It will represents the stream for that particular participant who has joined the meeting. Streams could be `audio` , `video` or `share`.

</div>
