---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref">

### resume()

- Return Type : `void`
- `resume()` is used to resume the stream.
- Local Participant and Remote Participant will receive a `Events.stream-enabled` event with `stream` object.

---

### pause()

- Return Type : `void`
- `pause()` is used to pause the stream.
- Local Participant and Remote Participant will receive a `Events.stream-disabled` event with `stream` object.

</div>
