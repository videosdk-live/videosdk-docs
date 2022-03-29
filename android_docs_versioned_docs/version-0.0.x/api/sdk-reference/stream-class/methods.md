---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### resume()

- `resume()` is used to resume the stream.

#### Events associated with `resume()` :

- Local Participant and Remote Participant will receive a [`streamEnabled`](../participant-class/participant-event-listener-class.md#onstreamenabled) event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### pause()

- `pause()` is used to pause the stream.

#### Events associated with `pause()`:

- Local Participant and Remote Participant will receive a [`streamDisabled`](../participant-class/participant-event-listener-class.md#onstreamdisabled) event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

</div>
