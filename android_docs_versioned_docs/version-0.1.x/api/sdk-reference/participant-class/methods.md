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

:::info

MultiStream is not supported by the Android SDK. Use `customTrack` rather than `setQuality()` and `setViewPort()` if you want to change participant's quality who joined using our Android SDK.

To know more about customTrack visit [here](/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

:::

### remove()

- `remove()` is used to remove the participant from the meeting.

#### Events associated with `remove()` :

- Local participant will receive a [`onMeetingLeft`](../meeting-class/meeting-event-listener-class.md#onmeetingleft) event.
- All remote participants will receive a [`onParticipantLeft`](../meeting-class/meeting-event-listener-class.md#onparticipantleft) event with `participantId`.

#### Returns

- `void`

---

### getVideoStats()

- `getVideoStats()` will return an JSONObject which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `JSONObject`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPackets` : It represents the total packet count which were transmitted for that particiular stream.
  - `packetsLost` : It represents the total packets lost during the transimission of the stream.
  - `rtt` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `codec`: It represents the codec used for the stream.
  - `network`: It represents the network used to transmit the stream
  - `size`: It is object containing the height, width and frame rate of the stream.

:::note

getVideoStats() will return the metrics for the participant at that given point of time and not average data of the complete meeting.

To view the metrics for the complete meeting using the stats API documented [here](/api-reference/realtime-communication/fetch-session-quality-stats).

:::

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

If you are getting high packet loss, try using the `customTrack` for better experience. To know more about customTrack [visit here](/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

:::

---

### getAudioStats()

- `getAudioStats()` will return an JSONObject which will contain details regarding the participant's critical audio metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `JSONObject`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPackets` : It represents the total packet count which were transmitted for that particiular stream.
  - `packetsLost` : It represents the total packets lost during the transimission of the stream.
  - `rtt` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `codec`: It represents the codec used for the stream.
  - `network`: It represents the network used to transmit the stream

:::note

getAudioStats() will return the metrics for the participant at that given point of time and not average data of the complete meeting.

To view the metrics for the complete meeting using the stats API documented [here](/api-reference/realtime-communication/fetch-session-quality-stats).

:::

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::

### getShareStats()

- `getShareStats()` will return an JSONObject which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `JSONObject`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPackets` : It represents the total packet count which were transmitted for that particiular stream.
  - `packetsLost` : It represents the total packets lost during the transimission of the stream.
  - `rtt` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `codec`: It represents the codec used for the stream.
  - `network`: It represents the network used to transmit the stream
  - `size`: It is object containing the height, width and frame rate of the stream.

:::note

getShareStats() will return the metrics for the participant at that given point of time and not average data of the complete meeting.

To view the metrics for the complete meeting using the stats API documented [here](/api-reference/realtime-communication/fetch-session-quality-stats).

:::

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::


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
