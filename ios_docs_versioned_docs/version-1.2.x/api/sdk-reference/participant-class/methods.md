---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableWebcam()

- `enableWebcam()` is used to enable webcam of participant.

#### Events associated with `enableWebcam()`:

- First the participant will get a callback on [`onWebcamRequested()`](../meeting-class/events#onwebcamrequested) and once the participant accepts the request, webcam will be enabled.

- Every Participant will receive a [`onStreamEnabled()`](./events#onstreamenabled) event with stream object.

#### Returns

- `void`

---

### disableWebcam()

- `disableWebcam()` is used to disable webcam of participant.

#### Events associated with `disableWebcam()`:

- Every Participant will receive a [`onStreamDisabled()`](./events#onstreamdisabled) event with stream object.

#### Returns

- `void`

---

### enableMic()

- `enableMic()` is used to enable mic of participant.

#### Events associated with `enableMic()`:

- First the participant will get a callback on [`onMicRequested()`](../meeting-class/events#onmicrequested) and once the participant accepts the request, mic will be enabled.

- Every Participant will receive a [`onStreamEnabled()`](./events#onstreamenabled) event with stream object.

#### Returns

- `void`

---

### disableMic()

- `disableMic()` is used to disable mic of participant.

#### Events associated with `disableMic()`:

- Every Participant will receive a [`onStreamDisabled()`](./events#onstreamdisabled) event with stream object.

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
