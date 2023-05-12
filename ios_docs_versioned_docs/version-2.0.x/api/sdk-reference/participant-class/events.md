---
title: Participant Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Participant Class Events
---

<div class="sdk-api-ref-only-h4">

### onStreamEnabled

- `onStreamEnabled` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.

#### Example

```swift
participantListener.onStreamEnabled(stream: `MediaStream`, forParticipant: `Participant`) {
  //
}
```

---

### onStreamDisabled

- `onStreamDisabled` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.

#### Example

```swift
participantListener.onStreamDisabled  (stream: `MediaStream`, forParticipant: `Participant`) {
  //
}
```

</div>
