---
title: Participant Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Participant Class Events
---

<div class="sdk-api-ref-only-h4">

---

### streamEnabled

- This event will be emitted when any [participant](introduction) starts consuming or producing stream of any type.

#### Example

```javascript
meeting.localParticipant.on(Events.streamEnabled, (Stream stream){
  // do something
});
```

---

### streamDisabled

- This event will be emitted when any [participant](introduction) stops consuming or producing stream of any type.

#### Example

```javascript
meeting.localParticipant.on(Events.streamDisabled, (Stream stream){
  // do something
});
```

---

### streamPaused

- This event will be emitted when any [participant](introduction) pauses consuming or producing stream of any type.

#### Example

```javascript
meeting.localParticipant.on(Events.streamPaused, (Stream stream){
  // do something
});
```

---

### streamResumed

- This event will be emitted when any [participant](introduction) resumes consuming or producing stream of any type.

#### Example

```javascript
meeting.localParticipant.on(Events.streamResumed, (Stream stream){
  // do something
});
```

</div>
