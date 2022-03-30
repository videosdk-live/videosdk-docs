---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### resume()

- By using `resume()`, a participant can resume the stream of Remote Participant.

#### Events associated with `resume()` :

- Every Participant will receive a [`streamEnabled`](../participant-class/participant-event-listener-class.md#onstreamenabled) event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

---

### pause()

- By using `pause()`, a participant can pause the stream of Remote Participant.

#### Events associated with `pause()`:

- Every Participant will receive a [`streamDisabled`](../participant-class/participant-event-listener-class.md#onstreamdisabled) event of `ParticipantEventListener` Class with `stream` object.

#### Returns

- `void`

</div>
