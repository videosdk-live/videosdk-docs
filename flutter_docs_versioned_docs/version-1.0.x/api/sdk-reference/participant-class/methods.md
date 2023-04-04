---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableCam()

- `enableCam()` is used to enable participant's camera.

#### Events associated with `enableCam()`:

- First the participant will get a callback on [cameraRequested](../room-class/events#camerarequested) and once the participant accepts the request, camera device will be enabled.
- Every Participant will receive a `streamEnabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.enableCam();
```

---

### disableCam()

- `disableCam()` is used to disable participant camera.

#### Events associated with `disableCam()`:

- Every Participant will receive a `streamDisabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.disableCam();
```

---

### unmuteMic()

- `unmuteMic()` is used to enable participant microphone.

#### Events associated with `unmuteMic()`:

- First the participant will get a callback on [micRequested](../room-class/events#micrequested) and once the participant accepts the request, mic will be enabled.
- Every Participant will receive a `streamEnabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.unmuteMic();
```

---

### muteMic()

- `muteMic()` is used to disable participant microphone.

#### Events associated with `muteMic()`:

- Every Participant will receive a `streamDisabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.muteMic();
```

---

### setQuality()

- It is used to set the quality of the participant's video stream.

#### Parameters

- **quality**: `"low"`|| `"med"` | `"high"`

#### Returns

- _`void`_

#### Example

```js
participant.setQuality("high");
```

---

### pin()

- It is used to set pin state of the participant. You can use it to pin the screen share, camera or both of the participant. It accepts a optional paramter of type `PinType`. Default PinType is `SHARE_AND_CAM`

#### Parameters

- **pinType**: `PinType.SHARE_AND_CAM` | `PinType.CAM` | `PinType.SHARE`

#### Returns

- _`void`_

#### Example

```js
participant.pin(PinType.CAM);
```

---

### unpin()

- It is used to unpin participant. You can use it to unpin the screen share, camera or both of the participant. It accepts a optional paramter of type `PinType`. Default PinType is `SHARE_AND_CAM`

#### Parameters

- **pinType**: `PinType.SHARE_AND_CAM` | `PinType.CAM` | `PinType.SHARE`

#### Returns

- _`void`_

#### Example

```js
participant.unpin(PinType.CAM);
```

---

### setViewPort()

- `setViewPort()` is used to set the quality of the participant's video stream based on the viewport height and width.

#### Parameters

- **width**: int
- **height**: int

#### Returns

- `void`

#### Example

```js
participant.setViewPort(480, 360);
```

---

### remove()

- It is used to remove participant from the room.

#### Returns

- _`void`_

#### Example

```js
participant.remove();
```

---

### on()

- It is used to listen [`Participant`](introduction) related events.

#### Parameters

- event

  - type: [`Events`](events)
  - This will specify the event to be listened.

- eventHandler
  - type: [`Function`](https://api.dart.dev/stable/2.15.1/dart-core/Function-class.html)
  - This will be invoked whenever, specified event occurred.

#### Returns

- _`void`_

#### Example

```js
participant.on(Events.streamEnabled, (Stream stream){
    // do something
});
```

### getVideoStats()

- `getVideoStats()` will return an `List<dynamic>?` which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss** etc.

#### Returns

- `object`
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

If you are getting `rtt` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

If you are getting high packet loss, try using the `setViewport()` for better experience. To know more about setViewport() [visit here](/javascript/guide/video-and-audio-calling-api-sdk/features/set-viewport)

:::

---

### getAudioStats()

- `getAudioStats()` will return an `List<dynamic>?` which will contain details regarding the participant's critical audio metrics such as **Jitter**, **Packet Loss** etc.

#### Returns

- `List`
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

If you are getting `rtt` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::

### getShareStats()

- `getShareStats()` will return an `List<dynamic>?` which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss** etc.

#### Returns

- `List`
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

If you are getting `rtt` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::

</div>
