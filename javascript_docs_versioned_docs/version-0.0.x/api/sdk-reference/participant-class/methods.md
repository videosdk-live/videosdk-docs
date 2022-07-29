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

- First the participant will get a callback on [`webcam-requested`](../meeting-class/events#webcam-requested) and once the participant accepts the request, webcam will be enabled.

- Every Participant will receive a `stream-enabled` event with `stream` object.

#### Returns

- `void`

---

### disableWebcam()

- `disableWebcam()` is used to disable participant camera.

#### Events associated with `disableWebcam()` :

- Every Participant will receive a `stream-disabled` event with `stream` object.

#### Returns

- `void`

---

### enableMic()

- `enableMic()` is used to enable participant microphone.

#### Events associated with `enableMic()` :

- First the participant will get a callback on [`mic-requested`](../meeting-class/events#mic-requested) and once the participant accepts the request, mic will be enabled.

- Every Participant will receive a `stream-enabled` event with `stream` object.

#### Returns

- `void`

---

### disableMic()

- `disableMic()` is used to disable participant microphone.

#### Events associated with `disableMic()`:

- Every Participant will receive a `stream-disabled` event with `stream` object.

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

### getVideoStats()

- `getVideoStats()` will return an object which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `object`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPacketCount` : It represents the total packet count which were transmitted for that particiular stream
  - `totalPacketsLost` : It represents the total packets lost during the transimission of the stream.
  - `roundTripTime` : It represents the time between the stream being reached to client from the server in milliseconds(ms)
  - `score` : It represents the overall quality of the stream of the participant scored from 0 to 10.

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to you. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

If you are getting high packet loss, try using the `setViewport()` for better experience. To know more about setViewport() [visit here](/javascript/guide/video-and-audio-calling-api-sdk/features/set-viewport)

:::

---

### getAudioStats()

- `getAudioStats()` will return an object which will contain details regarding the participant's critical audio metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `object`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPacketCount` : It represents the total packet count which were transmitted for that particiular stream
  - `totalPacketsLost` : It represents the total packets lost during the transimission of the stream.
  - `roundTripTime` : It represents the time between the stream being reached to client from the server in milliseconds(ms)
  - `score` : It represents the overall quality of the stream of the participant scored from 0 to 10.

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to you. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::

</div>
