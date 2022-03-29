---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Stream Class Methods
title: Stream Class Methods
---

<div class="sdk-api-ref-only-h4">

### pause()

- It is used to pause the stream.
- All participants will receive a [`streamPaused`](../participant-class/events#streampaused) event with [`stream`](introduction) object

#### Returns

- _`void`_

#### Example

```js
stream.pause();
```

---

### resume()

- It is used to resume the stream.
- All participants will receive a [`streamResumed`](../participant-class/events#streamresumed) event with [`stream`](introduction) object

#### Returns

- _`void`_

#### Example

```js
stream.resume();
```

</div>
