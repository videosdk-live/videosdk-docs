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

</div>
