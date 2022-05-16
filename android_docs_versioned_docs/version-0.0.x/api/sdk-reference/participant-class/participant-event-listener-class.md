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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  meeting!!.localParticipant.addEventListener(object : ParticipantEventListener() {
    override fun onStreamEnabled(stream: Stream) {
        //
    }

    override fun onStreamDisabled(stream: Stream) {
        //
    }
  });
```

</TabItem>

<TabItem value="Java">

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

</TabItem>

</Tabs>

</div>
