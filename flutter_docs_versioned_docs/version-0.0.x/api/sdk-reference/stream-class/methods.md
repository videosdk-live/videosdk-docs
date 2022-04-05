---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Stream Class Methods
title: Stream Class Methods
---

<div class="sdk-api-ref-only-h4">

### resume()

- By using `resume()`, a participant can resume the stream of Remote Participant.

#### Events associated with `resume()` :

- All participants will receive a [`streamResumed`](../participant-class/events#streamresumed) event with [`stream`](introduction) object

#### Returns

- _`void`_

#### Example

```js
stream.resume();
```

---

### pause()

- By using `pause()`, a participant can pause the stream of Remote Participant.

#### Events associated with `pause()` :

- All participants will receive a [`streamPaused`](../participant-class/events#streampaused) event with [`stream`](introduction) object

#### Returns

- _`void`_

#### Example

```js
stream.pause();
```

</div>
