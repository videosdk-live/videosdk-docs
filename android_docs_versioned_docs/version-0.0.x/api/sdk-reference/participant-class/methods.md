---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableWebcam()

- `enableWebcam()` is used to enable self camera.

#### Events associated with `enableWebcam()` :

- Every Participant will receive a `streamEnabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### disableWebcam()

- `disableWebcam()` is used to disable self camera.

#### Events associated with `disableWebcam()` :

- Every Participant will receive a `streamDisabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### enableMic()

- `enableMic()` is used to enable self microphone.

#### Events associated with `enableMic()` :

- Every Participant will receive a `streamEnabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### disableMic()

- `disableMic()` is used to disable self microphone.

#### Events associated with `disableMic()`:

- Every Participant will receive a `streamDisabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### setQuality()

- `setQuality()` is used to set the quality of the participant's video stream.

#### Parameters

- `quality`: low | med | high

#### Returns

- `void`

---

### remove()

- `remove()` is used to remove the participant from the meeting.

#### Events associated with `remove()` :

- Local participant will receive a [`onMeetingLeft`](../meeting-class/meeting-event-listener-class.md#onmeetingleft) event.
- All remote participants will receive a [`onParticipantLeft`](../meeting-class/meeting-event-listener-class.md#onparticipantleft) event with `participantId` string from the event callback.

#### Returns

- `void`

---

### addEventListener()

#### Parameters

- **listener**: ParticipantEventListener

#### Returns

- _`void`_

---

### removeEventListener()

#### Parameters

- **listener**: ParticipantEventListener

#### Returns

- _`void`_

---

### removeAllListeners()

#### Returns

- _`void`_

</div>
