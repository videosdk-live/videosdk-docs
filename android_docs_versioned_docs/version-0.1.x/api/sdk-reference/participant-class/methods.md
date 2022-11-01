---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableWebcam()

- `enableWebcam()` is used to enable participant's camera.

#### Events associated with `enableWebcam()` :

- First the participant will get a callback on [onWebcamRequested()](../meeting-class/meeting-event-listener-class#onwebcamrequested) and once the participant accepts the request, webcam will be enabled.

- Every Participant will receive a `streamEnabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### disableWebcam()

- `disableWebcam()` is used to disable participant camera.

#### Events associated with `disableWebcam()` :

- Every Participant will receive a `streamDisabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### enableMic()

- `enableMic()` is used to enable participant microphone.

#### Events associated with `enableMic()` :

- First the participant will get a callback on [onMicRequested()](../meeting-class/meeting-event-listener-class#onmicrequested) and once the participant accepts the request, mic will be enabled.

- Every Participant will receive a `streamEnabled` event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### disableMic()

- `disableMic()` is used to disable participant microphone.

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
### setViewPort()

- `setViewPort()` is used to set the quality of the participant's video stream based on the viewport height and width.

#### Parameters

- **width**: int
- **height**: int

#### Returns

- `void`

---

### remove()

- `remove()` is used to remove the participant from the meeting.

#### Events associated with `remove()` :

- Local participant will receive a [`onMeetingLeft`](../meeting-class/meeting-event-listener-class.md#onmeetingleft) event.
- All remote participants will receive a [`onParticipantLeft`](../meeting-class/meeting-event-listener-class.md#onparticipantleft) event with `participantId`.

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
