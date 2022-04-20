---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableWebcam()

- `enableWebcam()` is used to enable participant's camera.

#### Events associated with `enableWebcam()`:

- First the participant will get a callback on [webcamRequested](../meeting-class/events#webcamrequested) and once the participant accepts the request, webcam will be enabled.
- Every Participant will receive a `streamEnabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.enableWebcam();
```

---

### disableWebcam()

- `disableWebcam()` is used to disable participant camera.

#### Events associated with `disableWebcam()`:

- Every Participant will receive a `streamDisabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.disableWebcam();
```

---

### enableMic()

- `enableMic()` is used to enable participant microphone.

#### Events associated with `enableMic()`:

- First the participant will get a callback on [micRequested](../meeting-class/events#micrequested) and once the participant accepts the request, mic will be enabled.
- Every Participant will receive a `streamEnabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.enableMic();
```

---

### disableMic()

- `disableMic()` is used to disable participant microphone.

#### Events associated with `disableMic()`:

- Every Participant will receive a `streamDisabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.disableMic();
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

### remove()

- It is used to remove participant from the meeting.

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
