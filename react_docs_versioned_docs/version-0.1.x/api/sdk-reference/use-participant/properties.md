---
sidebar_position: 1
sidebar_label: Properties
pagination_label: userPatricipant Hook Properties
title: userPatricipant Hook Properties
---

<div class="sdk-api-ref-only-h4">

### displayName

- type : `string`
- `displayName` represents the name of the Participant

---

### participant

- type : `Participant`
- `participant` represents object for the `Participant`

---

### webcamStream

- type : [`Stream`](../stream-class/introduction)
- `webcamStream` represents stream of participant's webcam

---

### micStream

- type : [`Stream`](../stream-class/introduction)
- `micStream` represents stream for participant's mic.

---

### screenShareStream

- type : [`Stream`](../stream-class/introduction)
- `screenShareStream` represents stream of participant's screen share

---

### webcamOn

- type : `boolean`
- `webcamOn` is true if the participant's video is on else false

---

### micOn

- type : `boolean`
- `micOn` is true if the participant's mic is on else false

---

### screenShareOn

- type : `boolean`
- `screenShareOn` is true if the participant is presenting screen else false

---

### isLocal

- type : `boolean`
- `isLocal` is true if the participant is local participant else false.

---

### isActiveSpeaker

- type : `boolean`
- `isActiveSpeaker` is true if the participant is active speaker else false.

---

### mode

- type : `string`
- `mode` represents the mode of the Participant

---

### metaData

- type: `Object`

- It will represents the additional information, that you have passed in `MeetingProvider`.

</div>
