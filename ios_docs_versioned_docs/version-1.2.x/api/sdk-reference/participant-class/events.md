---
title: Participant Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Participant Class Events
---

<div class="sdk-api-ref-only-h4">

### onStreamEnabled

- `onStreamEnabled` will be emitted when any partcipant consumes or produces stream of any type

#### Example

```swift
participantListener.onStreamEnabled(stream: `MediaStream`, forParticipant: `Participant`) {
  //
}
```

---

### onStreamDisabled

- `onStreamDisabled` will be emitted when any partcipant stops consuming or producing stream of any type

#### Example

```swift
participantListener.onStreamDisabled  (stream: `MediaStream`, forParticipant: `Participant`) {
  //
}
```

</div>
