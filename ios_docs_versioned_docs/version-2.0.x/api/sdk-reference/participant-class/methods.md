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

---

### pin()

- `pin()` is used to pin this participant.

#### Parameters

- `peerId`: `String`
- `pinType`: `PinType`

#### Returns

- `void`

---

### unpin()

- `unpin()` is used to unpin this participant.

#### Parameters

- `pinType`: `PinType`

#### Returns

- `void`

---

### getAudioStats()

- `getAudioStats()` will return an Dictionary which will contain details regarding the participant's critical audio metrics such as **Jitter**, **Packet Loss** etc.

#### Returns

- `Dictionary`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPackets` : It represents the total packet count which were transmitted for that particiular stream.
  - `packetsLost` : It represents the total packets lost during the transimission of the stream.
  - `rtt` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `codec`: It represents the codec used for the stream.
  - `network`: It represents the network used to transmit the stream

#### Returns

- `[String:Any]`

---

### getVideoStats()

- `getVideoStats()` will return an Dictionary which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss** etc.

#### Returns

- `Dictionary`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPackets` : It represents the total packet count which were transmitted for that particiular stream.
  - `packetsLost` : It represents the total packets lost during the transimission of the stream.
  - `rtt` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `codec`: It represents the codec used for the stream.
  - `network`: It represents the network used to transmit the stream
  - `size`: It is object containing the height, width and frame rate of the stream.

#### Returns

- `[String:Any]`

</div>
