---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableWebcam()

- It is used to enable self camera.
- Local Participant and Remote Participant will receive a `streamEnabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.enableWebcam();
```

---

### disableWebcam()

- It is used to disable self camera.
- Local Participant and Remote Participant will receive a `streamDisabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.disableWebcam();
```

---

### enableMic()

- It is used to enable self microphone.
- Local Participant and Remote Participant will receive a `streamEnabled` event with `stream` object.

#### Returns

- _`void`_

#### Example

```js
participant.enableMic();
```

---

### disableMic()

- It is used to disable self microphone.
- Local Participant and Remote Participant will receive a `streamDisabled` event with `stream` object.

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
