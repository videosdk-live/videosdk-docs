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

- `onStreamEnabled()` will be emitted when any partcipant consumes or produces stream of any type.

#### Event callback parameters

- **stream**: Stream

---

### onStreamDisabled()

- `onStreamDisabled()` will be emitted when any partcipant stops consuming or producing stream of any type.

#### Event callback parameters

- **stream**: Stream

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
