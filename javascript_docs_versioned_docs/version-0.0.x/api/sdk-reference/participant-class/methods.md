---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

### enableWebcam()

- Return Type : `void`
- `enableWebcam()` is used to enable self camera.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

---

### disableWebcam()

- Return Type : `void`
- `disableWebcam()` is used to disable self camera.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

---

### enableMic()

- Return Type : `void`
- `enableMic()` is used to enable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

---

### disableMic()

- Return Type : `void`
- `disableMic()` is used to disable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

---

### setQuality (quality: low | med | high)

- Return Type : `void`
- `setQuality()` is used to set the quality of the participant's video stream.

---

### pin (SHARE_AND_CAM | CAM | SHARE | null)

- Return Type : `void`
- `pin()` is used to pin the participant.
- Local Participant and Remote Participant will receive an `Events.pin-state-changed` event with `meeting` object.

---

### unpin (SHARE_AND_CAM | CAM | SHARE | null)

- Return Type : `void`
- `unpin()` is used to pin the participant.
- Local Participant and Remote Participant will receive an `Events.pin-state-changed` event with `meeting` object.
