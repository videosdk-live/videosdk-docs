---
title: Meeting Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Meeting Class Events
---

<div class="sdk-api-ref-only-h4">

---

### onMeetingJoined

- This event will be emitted when a [localParticipant](./properties#localparticipant) successfully joined the meeting.

#### Example

```swift
  meeting.listeners.onMeetingJoined()
```

---

### onMeetingLeft

- This event will be emitted when a [localParticipant](./properties#localparticipant) left the meeting.

#### Example

```swift
meeting.listeners.onMeetingLeft()
```

---

### onParticipantJoined

- This event will be emitted when a new [participant](../participant-class/introduction) joined the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

```swift
meeting.listeners.onParticipantJoined(participant)
```

---

### onParticipantLeft

- This event will be emitted when a joined [participant](../participant-class/introduction) left the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

```swift
meeting.listeners.onParticipantLeft(participant)
```
---

### onSpeakerChanged

- This event will be emitted when a active speaker changed.
- If you want to know which participant is actively speaking, then this event will be used.
- If no participant is actively speaking, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **participantId**: String?

#### Example

```swift
meeting.listeners.onSpeackerChanged(participantId: participantId)
```

---

### onMicRequested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String?
- **accept**: Closure
- **reject**: Closure

#### Example

```swift
meeting.listeners.onMicRequested(participantId: participantId) {
    // request accepted 
} reject: {
    // request rejected
}
```

---

### onWebcamRequested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String?
- **accept**: Closure
- **reject**: Closure

#### Example

```swift
meeting.listeners.onWebcamRequested(participantId: participantId) {
    // request accepted 
} reject: {
    // request rejected
}
```

---

### onRecordingStarted

- This event will be emitted when recording of the meeting is started.

#### Example

```swift
meeting.listeners.onRecordingStarted()
```

---

### onRecordingStopped

- This event will be emitted when recording of the meeting is stopped.

#### Example

```swift
meeting.listeners.onRecordingStopped()
```

---

### onLivestreamStarted

- This event will be emitted when `RTMP` live stream of the meeting is started.

#### Example

```swift
meeting.listeners.onLivestreamStarted()
```

---

### onLivestreamStopped

- This event will be emitted when `RTMP` live stream of the meeting is stopped.

#### Example

```swift
meeting.listeners.onLivestreamStopped()
```

</div>
