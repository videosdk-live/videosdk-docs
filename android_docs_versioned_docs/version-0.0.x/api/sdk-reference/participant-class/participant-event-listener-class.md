---
title: ParticipantEventListener Class
sidebar_position: 1
sidebar_label: ParticipantEventListener
pagination_label: ParticipantEventListener Class
---

<div class="sdk-api-ref-only-h4">

### implementation

- You can implement all the methods of `ParticipantEventListener` abstract Class and add the listener to `Participant` class using the `addEventListener()` method of `Participant` Class.

---

### onStreamEnabled()

- `onStreamEnabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.

#### Event callback parameters

- **stream**: [Stream](../stream-class/introduction.md)

---

### onStreamDisabled()

- `onStreamDisabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.

#### Event callback parameters

- **stream**: [Stream](../stream-class/introduction.md)

---

### Example

```js
  participant.addEventListener(new ParticipantEventListener() {
    @Override
    public void onStreamEnabled(Stream stream) {
        //
    }

    @Override
    public void onStreamDisabled(Stream stream) {
        //
    }
  });

```

</div>
