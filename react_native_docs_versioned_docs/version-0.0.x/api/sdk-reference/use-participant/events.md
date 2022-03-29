---
title: useParticipant Hook Event Callbacks
sidebar_position: 1
sidebar_label: Event Callbacks
pagination_label: useParticipant Hook Event Callbacks
---

<div class="sdk-api-ref-only-h4">

### onStreamEnabled()

- `onStreamEnabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.

#### Example

```js
function onStreamEnabled(stream) {
  console.log(" onStreamEnabled", stream);
}

const {
  displayName
  ...
} = useParticipant(participantId,{
  onStreamEnabled,
  ...
});
```

---

### onStreamDisabled()

- `onStreamDisabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.

#### Example

```js
function onStreamDisabled(stream) {
  console.log(" onStreamDisabled", stream);
}

const {
  displayName
  ...
} = useParticipant(participantId,{
  onStreamDisabled,
  ...
});
```

---


</div>