---
title: Meeting Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Meeting Class Events
---

<div class="sdk-api-ref-only-h4">

---

### meeting-joined

- This event will be emitted when a [localParticipant](./) successfully joined the meeting.

#### Example

```javascript
meeting.on("meeting-joined", () => {
  //
});
```

---

### meeting-left

- This event will be emitted when a [localParticipant](./) left the meeting.

#### Example

```javascript
meeting.on("meeting-left", () => {
  //
});
```

---

### participant-joined

- This event will be emitted when a new [participant](./) joined the meeting.

#### Event callback parameters

- **participant**: [Participant](./)

#### Example

```javascript
meeting.on("participant-joined", (participant) => {
  //
});
```

---

### participant-left

- This event will be emitted when a joined [participant](./) left the meeting.

#### Event callback parameters

- **participant**: [Participant](./)

#### Example

```javascript
meeting.on("participant-left", (participant) => {
  //
});
```

---

### speaker-changed

- This event will be emitted when a active speaker changed.
- If you want to know which participant is actively speaking, then this event will be used.
- If no participant is actively speaking, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **activeSpeakerId**: String?

#### Example

```javascript
meeting.on("speaker-changed", (activeSpeakerId) => {
  //
});
```

---

### presenter-changed

- This event will be emitted when any [participant](./) starts or stops screen sharing.
- It will pass `participantId` as an event callback parameter.
- If a participant stops screensharing, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **activePresenterId**: String?

#### Example

```javascript
meeting.on("presenter-changed", (activePresenterId) => {
  //
});
```

---

### error

- This event will be emitted when any error occured.
- It will pass **`code`** and **`message`**, as an event callback parameter.
- To see all available error codes from SDK. [Meeting Error Codes](../error-codes)

#### Event callback parameters

- **data**: { **code**: Number; **message**: String }
  - **code**: Number
  - **message**: String

#### Example

```javascript
meeting.on("error", (data) => {
  const { code, message } = data;
});
```

---

### entry-requested

- This event will be emitted when a new [participant](./) who is trying to join the meeting, is having permission **`ask_join`** in token.
- This event will only be emitted to the [participants](./) in the meeting, who is having the permission **`allow_join`** in token.
- This event will pass following parameters as an event parameters, `participantId` and `name` of the new participant who is trying to join the meeting, `allow()` and `deny()` to take required actions.

#### Event callback parameters

- **data**: { **allow**: Function; **deny**: Function; **name**: String; **participantId**: String }
  - **allow**: Function
  - **deny**: Function
  - **name**: String
  - **participantId**: String

#### Example

```javascript
meeting.on("entry-requested", (data) => {
  const { participantId, name, allow, deny } = data;

  console.log(`${name} requested to join the meeting.`);

  // If you want to allow the entry request
  allow();

  // if you want to deny the entry request
  deny();
});
```

---

### entry-responded

- This event will be emitted when the `join()` request is responded.
- This event will be emitted to the [participants](./) in the meeting, who is having the permission **`allow_join`** in token.
- This event will be also emitted to the [participant](./) who requested to join the meeting.

#### Event callback parameters

- **participantId**: _String_
- **decision**: _"allowed"_ | _"denied"_

#### Example

```javascript
meeting.on("entry-responded", (participantId, decision) => {
  // participantId will be id of participant who requested to join meeting

  if (decision === "allowed") {
    // entry allowed
  } else {
    // entry denied
  }
});
```

---

### webcam-requested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

#### Event callback parameters

- **data**: { **accept**: Function; **participantId**: String; **reject**: Function }
  - **accept**: Function
  - **participantId**: String
  - **reject**: Function

#### Example

```javascript
meeting.on("webcam-requested", (data) => {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
});
```

### mic-requested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event callback parameters

- **data**: { **accept**: Function; **participantId**: String; **reject**: Function }
  - **accept**: Function
  - **participantId**: String
  - **reject**: Function

#### Example

```javascript
meeting.on("mic-requested", (data) => {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
});
```

---

### recording-started

- This event will be emitted when recording of the meeting is started.

#### Example

```javascript
meeting.on("recording-started", () => {
  //
});
```

---

### recording-stopped

- This event will be emitted when recording of the meeting is stopped.

#### Example

```javascript
meeting.on("recording-stopped", () => {
  //
});
```

---

### livestream-started

- This event will be emitted when `RTMP` live stream of the meeting is started.

#### Example

```javascript
meeting.on("livestream-started", () => {
  //
});
```

---

### livestream-stopped

- This event will be emitted when `RTMP` live stream of the meeting is stopped.

#### Example

```javascript
meeting.on("livestream-stopped", () => {
  //
});
```

---

### hls-started

- This event will be emitted when `HLS` of the meeting is started.

#### Example

```javascript
meeting.on("hls-started", () => {
  //
});
```

---

### hls-stopped

- This event will be emitted when `HLS` of the meeting is started.

#### Example

```javascript
meeting.on("hls-stopped", () => {
  //
});
```

---

### connection-open

- This event will be emitted when a new connection is open with another meeting.

#### Event callback parameters

- **connection**: [Connection](./)

#### Example

```javascript
meeting.on("connection-open", (connection) => {
  //
});
```

---

### connection-close

- This event will be emitted when a connection is closed with another meeting.

#### Event callback parameters

- **connectionId**: String

#### Example

```javascript
meeting.on("connection-close", (connectionId) => {
  //
});
```

---

### switch-meeting

- This event will be emitted when participant is requested to switch to another meeting.

#### Event callback parameters

- **data**: { **connectionMeetingId**: String; **connectionParticipantId**: String; **meetingId**: String; **payload**: String; **token**: String }
  - **connectionMeetingId**: String?
  - **connectionParticipantId**: String?
  - **meetingId**: String
  - **participantId**: String?
  - **payload**: String
  - **token**: String

#### Example

```javascript
meeting.on("switch-meeting", (data) => {
  const {
    connectionMeetingId, // if requested from another meeting requested to switch meeting
    connectionParticipantId, // if participant from the connection meeting requested to switch meeting
    meetingId, // new meeting Id to switch to
    participantId, // participant Id who requested to switch meeting
    payload,
    token, // new token used for new meeting initialization
  } = data;

  //
});
```

</div>
