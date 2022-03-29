---
sidebar_position: 1
sidebar_label: Properties
pagination_label: useMeeting Hook Properties
title: useMeeting Hook Properties
---

<div class="sdk-api-ref-only-h4">

### meetingId

- type : `string`
- `meetingId` represents the meeting id for the meeting

---

### meeting

- type : `Meeting`
- `meeting` is the object for the meeting

---

### localParticipant

- type : `Participant`
- `localParticipant` represents [`Participant`](../use-participant/introduction.md) object for the local participant

---

### activeSpeakerId

- type : `string`
- `activeSpeakerId` will be the `id` of the participant who is actively speaking in the meeting. If no participant is speaking, at that time value of `activeSpeakerId` will be `null`.

---

### participants

- type : `Map` of `Participant`
  - `Map<participantId, Participant>`
- `participants` will `Map<Participant>` containing all the participants of the meeting.

---

### pinnedParticipants

- type : `Map<string, { cam: bool, share: bool }}>`
- `pinnedParticipants` will return a `Map` which maps `participantId` of all the pinned participants with a object represting their camera and screen share status.

---

### presenterId

- type : `string`
- `presenterId` will be the `id` of the participant who started `Presenting` / `Screen sharing` in the meeting. If no participant is sharing the screen, at that time value of `presenterId` will be `null`.

---

### localMicOn

- type : `boolean`
- `localMicOn` will be `true` if the local participants mic is on else `false`.

---

### localWebcamOn

- type : `boolean`
- `localWebcamOn` will be `true` if the local participants webcam is on else `false`.

---

### isRecording

- type : `boolean`
- `isRecording` will be `true` if the meeting is being recorded else `false`.

---

### isLiveStreaming

- type : `boolean`
- `isLiveStreaming` will be `true` if live stream is on else `false`.

---

### localScreenShareOn

- type : `boolean`
- `localScreenShareOn` will be `true` if the local participants screen share is on else `false`.

---

### connections

- type : `Map<string, Connection>`
- `connection` will be map of Connections which will have all the connections for the connected meeting.
