---
title: Connection Participant Class
sidebar_label: Connection Participant Class
pagination_label: Connection Participant Class
---

<div class="sdk-api-ref-only-h4">

`ConnectionParticipant` class is used to represent participants of the connected meeting.

## Properties

### id

- type : `String`

- Unique id of the participant.

### displayName

- type : `String`

- Displayname of the participant.

---

## Methods

### switchTo()

- `switchTo()` method is used to switch participants between different rooms of a meeting

#### Parameters

- meetingId : `String`
- token : `String`
- payload : `String`

#### Events associated with `switchTo()`

- `meeting.switch-meeting` event will be emitted whenever `switchTo()` method is called.

#### Returns

- `void`

</div>
