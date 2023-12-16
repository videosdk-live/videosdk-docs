---
sidebar_position: 1
sidebar_label: Properties
pagination_label: useMeeting Hook Properties
title: useMeeting Hook Properties
---

# useMeeting Hook Properties - React Native

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
- It will be the instance of [`Participant`](../use-participant/introduction.md) object for the local participant (You).

---

### activeSpeakerId

- type : `string`
- `activeSpeakerId` will be the `id` of the participant who is actively speaking in the meeting. If no participant is speaking, at that time value of `activeSpeakerId` will be `null`.

---

### participants

- type : `Map` of `Participant`
  - `Map<participantId, Participant>`
- Contains all the connected participants of the meeting.

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

### hlsUrls

- type : `Object`
  - **playbackHlsUrl**: `String`
  - **livestreamUrl**: `String`
- `hlsUrls` will proide all the URLs for the ongoing meeting HLS.

---

### hlsState

- type : `string`
- `hlsState` will be the current state of the meeting HLS.

---

### livestreamState

- type : `string`
- `livestreamState` will be the current state of the meeting Livestream.

---

### recordingState

- type : `string`
- `recordingState` will be the current state of the meeting recording.

---

### isRecording

- type : `boolean`
- `isRecording` will be `true` if the meeting is being recorded else `false`.

---

### isLiveStreaming

- type : `boolean`
- `isLiveStreaming` will be `true` if live stream is on else `false`.

---

### isHls

- type : `boolean`
- `isHls` will be `true` if the HLS streaming is being running else `false`.

---

### localScreenShareOn

- type : `boolean`
- `localScreenShareOn` will be `true` if the local participants screen share is on else `false`.

---

### connections

- type : `Map<string, Connection>`
- Whenever any connection is being made with other meeting using [`connectTo`](./methods.md#connectto) , it will get stored to connections property of a meeting class.

</div>
