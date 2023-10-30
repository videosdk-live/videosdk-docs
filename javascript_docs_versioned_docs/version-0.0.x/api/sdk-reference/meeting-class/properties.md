---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

# Meeting Class Properties - Javascript

<div class="sdk-api-ref-only-h4">

### id

- type: `String`

- Unique id of the meeting where the participant has joined.

---

### activeSpeakerId

- type: `String`

- It will be the `id` of the participant who is actively speaking in the meeting. If no participant is speaking, at that time value of `activeSpeakerId` will be `null`.

---

### activePresenterId

- type: `String`

- It will be the `id` of the participant who started `Presenting` / `Screen sharing` in the meeting. If no participant is sharing the screen, at that time value of `activePresenterId` will be `null`.

---

### hlsUrls

- type : `Object`
  - **downstreamUrl**: `String`
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

### localParticipant

- type: [Participant](../participant-class/introduction.md)

- It will be the instance of [Participant](../participant-class/introduction.md) class for the local participant(You) who joined the meeting.

---

### participants

- type: [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) of [Participant](../participant-class/introduction.md)

- `Map<String, Participant>`

  - Map<`participantId`, [Participant](../participant-class/introduction.md)>

- It will contain all joined participants in the meeting except the [`localParticipant`](../participant-class/introduction.md).

- This will be the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) what will container all participants attached with the key as id of that participant.

```javascript
const remoteParticipantId = "ajf897";

const remoteParticipant = participants.get(remoteParticipantId);
```

---

### connections

- type : `Map<String,Connection>`

- Whenever any connection is being made with other meeting using [`meeting.connectTo`](./methods.md#connectto) , it will get stored to connections property of a meeting class.

---

### pubSub

- It is used to enable Publisher-Subscriber feature in [`meeting`](introduction) class.

Learn more about `PubSub`, [here](./pubsub)

</div>
