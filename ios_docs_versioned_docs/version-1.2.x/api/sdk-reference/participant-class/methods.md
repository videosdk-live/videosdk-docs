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

- Local Participant and Remote Participant will receive a `Events.onStreamEnabled` event with `stream` object.

#### Returns

- `void`

---

### disableWebcam()

- `disableWebcam()` is used to disable self camera.

#### Events associated with `disableWebcam()` :

- Local Participant and Remote Participant will receive a `Events.onStreamDisabled` event with `stream` object.

#### Returns

- `void`

---

### enableMic()

- `enableMic()` is used to enable self microphone.

#### Events associated with `enableMic()` :

- Local Participant and Remote Participant will receive a `Events.onStreamEnabled` event with `stream` object.

#### Returns

- `void`

---

### disableMic()

- `disableMic()` is used to disable self microphone.

#### Events associated with `disableMic()`:

- Local Participant and Remote Participant will receive a `Events.onStreamDisabled` event with `stream` object.

#### Returns

- `void`

---

### setQuality()

- `setQuality()` is used to set the quality of the participant's video stream.

#### Parameters

- `quality`: VideoQuality ( low | medium | high )

#### Returns

- `void`

---

### remove()

- `remove()` is used to remove this participant.

#### Parameters

- `id`: `String`

#### Returns

- `void`

</div>
