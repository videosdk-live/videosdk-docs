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

- type : `MediaTrackStream`
- `webcamStream` represents stream for participant's webcam

---

### micStream

- type : `MediaTrackStream`
- `micStream` represents stream for participant's mic.

---

### screenShareStream

- type : `MediaTrackStream`
- `screenShareStream` represents stream for participant's screen share

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

### isMainParticipant

- type : `boolean`
- `isMainParticipant` is true if the participant is main participant fo rthe meeting else false

---

### pinState

- type : `{ cam: bool, share: bool }`
- `pinState` represent the current pin state for the participant.
  - `cam` will be true if the participants video is pinned.
  - `share` will be true if the participants screen share is pinned. 

</div>