---
title: Participant Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Participant Class Events
---

<div class="sdk-api-ref-only-h4">

### stream-enabled

- `stream-enabled` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.

#### Example

```js
participant.on("stream-enabled", () => {
  //
});
```

---

### stream-disabled

- `stream-disabled` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.

#### Example

```js
participant.on("stream-disabled", () => {
  //
});
```

### media-status-changed

- `media-status-changed` is a callback which gets triggered whenever a participant's video, audio is disabled or enabled.

#### Example

```js
participant.on("media-status-changed", (data) => {
  const { kind, newStatus } = data;
  //
});
```

---

### video-quality-changed

- `video-quality-changed` is a callback which gets triggered whenever a participant's video quality changes.

- `currentQuality` and `prevQuality` can have values `HIGH` | `MEDIUM` | `LOW`.

#### Example

```js
participant.on("video-quality-changed", (data) => {
  const { currentQuality, prevQuality } = data;
  //
});
```

---

</div>
