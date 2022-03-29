---
title: useMeeting Hook Events Callbacks
sidebar_position: 1
sidebar_label: Event Callbacks
pagination_label: useMeeting Hook Event Callbacks
---

<div class="sdk-api-ref-only-h4">

---

### onParticipantJoined()

- This event callback is triggered when a new participant joins the meeting.

#### Example

```js
function onParticipantJoined(participant) {
  console.log(" onParticipantJoined", participant);
}

const {
  meetingId
  ...
} = useMeeting({
  onParticipantJoined,
  ...
});
```

---

### onParticipantLeft()

- This event callback is triggered when a participant leaves the meeting.

#### Example

```js
function onParticipantLeft(participant) {
  console.log(" onParticipantLeft", participant);
}

const {
  meetingId
  ...
} = useMeeting({
  onParticipantLeft,
  ...
});
```

---

### onSpeakerChanged()

- This event callback is triggered when active speaker of the meeting is changed.

#### Example

```js
function onSpeakerChanged(activeSpeakerId) {
  console.log(" onSpeakerChanged", activeSpeakerId);
}

const {
  meetingId
  ...
} = useMeeting({
  onSpeakerChanged,
  ...
});
```

---

### onPresenterChanged()

- This event callback is triggered when screen share presenter changes for the meeting.

#### Example

```js
function onPresenterChanged(presenterId) {
  console.log(" onPresenterChanged", presenterId);
}

const {
  meetingId
  ...
} = useMeeting({
  onPresenterChanged,
  ...
});
```

---

### onMainParticipantChanged()

- This event callback is triggered when main participant of the meeting changes.

#### Example

```js
function onMainParticipantChanged(participant) {
  console.log(" onMainParticipantChanged", participant);
}

const {
  meetingId
  ...
} = useMeeting({
  onMainParticipantChanged,
  ...
});
```

---

### onEntryRequested()

- This event will be triggered when a new [participant](../use-participant/introduction.md) who is trying to join the meeting, is having permission **`ask_join`** in token.
- This event will only be triggered to the [participants](../use-participant/introduction.md) in the meeting, who is having the permission **`allow_join`** in token.
- This event will pass following parameters as an event parameters, `participantId` and `name` of the new participant who is trying to join the meeting, `allow()` and `deny()` to take required actions.

#### Event callback parameters

- **data**: { **allow**: Function; **deny**: Function; **name**: String; **participantId**: String }
  - **allow**: Function
  - **deny**: Function
  - **name**: String
  - **participantId**: String

#### Example

```js
function onEntryRequested(data) {
  const { participantId, name, allow, deny } = data;

  console.log(`${name} requested to join the meeting.`);

  // If you want to allow the entry request
  allow();

  // if you want to deny the entry request
  deny();
}

const {
  meetingId
  ...
} = useMeeting({
  onEntryRequested,
  ...
});
```

---

### onEntryResponded()

- This event will be triggered when the `join()` request is responded.
- This event will be triggered to the [participants](../use-participant/introduction.md) in the meeting, who is having the permission **`allow_join`** in token.
- This event will be also triggered to the [participant](../use-participant/introduction.md) who requested to join the meeting.

#### Event callback parameters

- **participantId**: _String_
- **decision**: _"allowed"_ | _"denied"_

#### Example

```js
function onEntryResponded(participantId, decision) {
  // participantId will be id of participant who requested to join meeting

  if (decision === "allowed") {
    // entry allowed
  } else {
    // entry denied
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onEntryResponded,
  ...
});
```

---

### onRecordingStarted()

- This event callback is triggered when meeting recording is started.

#### Example

```js
function onRecordingStarted() {
  console.log(" onRecordingStarted");
}

const {
  meetingId
  ...
} = useMeeting({
  onRecordingStarted,
  ...
});
```

---

### onRecordingStopped()

- This event callback is triggered when meeting recording is stopped.

#### Example

```js
function onRecordingStopped() {
  console.log(" onRecordingStopped");
}

const {
  meetingId
  ...
} = useMeeting({
  onRecordingStopped,
  ...
});
```

---

### onMeetingJoined()

- This event callback is triggered when a local participant joins the meeting.

#### Example

```js
function onMeetingJoined() {
  console.log("onMeetingJoined");
}

const {
  meetingId
  ...
} = useMeeting({
  onMeetingJoined,
  ...
});
```

---

### onMeetingLeft()

- This event callback is triggered when local participant leaves the meeting.

#### Example

```js
function onMeetingLeft() {
  console.log("onMeetingLeft");
}

const {
  meetingId
  ...
} = useMeeting({
  onMeetingLeft,
  ...
});
```

---

### onLiveStreamStarted()

- This event callback is triggered when meeting live stream is started.

#### Example

```js
function onLiveStreamStarted(data){
  console.log("onLiveStreamStarted example", data);
}

const {
  meetingId
  ...
} = useMeeting({
  onLiveStreamStarted,
  ...
});
```

---

### onLiveStreamStopped()

- This event callback is triggered when meeting live stream is stopped.

#### Example

```js
function onLiveStreamStopped(data){
  console.log("onLiveStreamStopped example", data);
}

const {
  meetingId
  ...
} = useMeeting({
  onLiveStreamStopped,
  ...
});
```

---

### onHlsStarted()

- This event callback is triggered when meeting `HLS` is started.

#### Example

```js
function onHlsStarted(){
  console.log("onHlsStarted");
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStarted,
  ...
});
```

---

### onHlsStopped()

- This event callback is triggered when meeting `HLS` is stopped.

#### Example

```js
function onHlsStopped(){
  console.log("onHlsStopped");
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStopped,
  ...
});
```

---

### onVideoStateChanged()

- This event callback is triggered when state of the video playing the meeting is changed.

#### Example

```js
function onVideoStateChanged(data){
  console.log("onVideoStateChanged", data);
}

const {
  meetingId
  ...
} = useMeeting({
  onVideoStateChanged,
  ...
});
```

---

### onVideoSeeked()

- This event callback is triggered when video playing the meeting is seeked to a particular time interval.

#### Example

```js
function onVideoSeeked(data){
  console.log("onVideoSeeked", data);
}

const {
  meetingId
  ...
} = useMeeting({
  onVideoSeeked,
  ...
});
```

---

### onPinStateChanged()

- This event callback is triggered when the pin state of participant is changed in the meeting.

#### Example

```js
function onPinStateChanged (data) {
  console.log("onPinStateChanged", data);
}

const {
  meetingId
  ...
} = useMeeting({
  onPinStateChanged,
  ...
});
```

---

### onWebcamRequested()

- This event will be triggered to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

#### Event callback parameters

- **data**: { **accept**: Function; **participantId**: String; **reject**: Function }
  - **accept**: Function
  - **participantId**: String
  - **reject**: Function

#### Example

```javascript
function onWebcamRequested(data) {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable webcam

  // if accept request
  accept();

  // if reject request
  reject();
}

const {
  meetingId
  ...
} = useMeeting({
  onWebcamRequested,
  ...
});
```

---

### onMicRequested()

- This event will be triggered to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event callback parameters

- **data**: { **accept**: Function; **participantId**: String; **reject**: Function }
  - **accept**: Function
  - **participantId**: String
  - **reject**: Function

#### Example

```javascript
function onMicRequested(data) {
  const { participantId, accept, reject } = data;

  // participantId, will be the id of participant who requested to enable mic

  // if accept request
  accept();

  // if reject request
  reject();
}

const {
  meetingId
  ...
} = useMeeting({
  onMicRequested,
  ...
});
```

---

### onSwitchMeeting()

- This event will be triggered when participant is requested to switch to another meeting.

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
function onSwitchMeeting(data) {
  const {
    connectionMeetingId, // if requested from another meeting requested to switch meeting
    connectionParticipantId, // if participant from the connection meeting requested to switch meeting
    meetingId, // new meeting Id to switch to
    participantId, // participant Id who requested to switch meeting
    payload,
    token, // new token used for new meeting initialization
  } = data;

  //
}

const {
  meetingId
  ...
} = useMeeting({
  onSwitchMeeting,
  ...
});
```

---

### onConnectionOpen()

- This event will be triggered when a new connection is open with another meeting.

#### Event callback parameters

- **connection**: [Connection](../use-connection.md)

#### Example

```javascript
function onConnectionOpen(connection){
  console.log("onConnectionOpen", connection);
}

const {
  meetingId
  ...
} = useMeeting({
  onConnectionOpen,
  ...
});
```

---

### onConnectionClose()

- This event will be triggered when a connection is closed with another meeting.

#### Event callback parameters

- **connectionId**: String

#### Example

```javascript
function onConnectionClose(connectionId){
  console.log("onConnectionClose", connectionId);
}

const {
  meetingId
  ...
} = useMeeting({
  onConnectionClose,
  ...
});
```

---

### onError()

- This event will be triggered when any error occured.
- It will pass **`code`** and **`message`**, as an event callback parameter.
- To see all available error codes from SDK. [Meeting Error Codes](../error-codes)

#### Event callback parameters

- **data**: { **code**: Number; **message**: String }
  - **code**: Number
  - **message**: String

#### Example

```javascript
function onError(data) {
  const { code, message } = data;
}

const {
  meetingId
  ...
} = useMeeting({
  onError,
  ...
});
```

</div>
