---
title: Participant Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Participant Class Events
---

<div class="sdk-api-ref-only-h4">

### stream-enabled

- `stream-enabled` will be emitted when any partcipant consumes or produces stream of any type

#### Example

```js
participant.on("stream-enabled", () => {
  //
});
```

---

### stream-disabled

- `stream-disabled` will be emitted when any partcipant stops consuming or producing stream of any type

#### Example

```js
participant.on("stream-disabled", () => {
  //
});
```

</div>
