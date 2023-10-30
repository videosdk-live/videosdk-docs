---
title: Meeting Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Meeting Class Events
---

<div class="sdk-api-ref-only-h4">

---

### meeting-joined

- This event will be emitted when a [localParticipant](../participant-class/introduction.md) successfully joined the meeting.

#### Example

```javascript
meeting.on("meeting-joined", () => {
  //
});
```

---

### meeting-left

- This event will be emitted when a [localParticipant](../participant-class/introduction.md) left the meeting.

#### Example

```javascript
meeting.on("meeting-left", () => {
  //
});
```

---

### participant-joined

- This event will be emitted when a new [participant](../participant-class/introduction.md) joined the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction.md)

#### Example

```javascript
meeting.on("participant-joined", (participant) => {
  //
});
```

---

### participant-left

- This event will be emitted when a joined [participant](../participant-class/introduction.md) left the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction.md)

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

- This event will be emitted when any [participant](../participant-class/introduction.md) starts or stops screen sharing.
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

- This event will be emitted when a new [participant](../participant-class/introduction.md) who is trying to join the meeting, is having permission **`ask_join`** in token.
- This event will only be emitted to the [participants](../participant-class/introduction.md) in the meeting, who is having the permission **`allow_join`** in token.
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
- This event will be emitted to the [participants](../participant-class/introduction.md) in the meeting, who is having the permission **`allow_join`** in token.
- This event will be also emitted to the [participant](../participant-class/introduction.md) who requested to join the meeting.

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

### recording-state-changed

- This event will be emitted when the meeting's recording status changed.

#### Event callback parameters

- **data**: { **status**: String }

  - **status**: String

`status` has following values

- `RECORDING_STARTING` - Recording is in starting phase and hasn't started yet.
- `RECORDING_STARTED` - Recording has started successfully.
- `RECORDING_STOPPING` - Recording is in stopping phase and hasn't stopped yet.
- `RECORDING_STOPPED` - Recording has stopped successfully.

#### Example

```javascript
import { VideoSDK } from "@videosdk.live/js-sdk";

const Constants = VideoSDK.Constants;

meeting.on("recording-state-changed", (data) => {
  const { status } = data;

  if (status === Constants.recordingEvents.RECORDING_STARTING) {
    console.log("Meeting recording is starting");
  } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
    console.log("Meeting recording is started");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
    console.log("Meeting recording is stopping");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
    console.log("Meeting recording is stopped");
  } else {
    //
  }
});
```

---

### recording-started

_`This event will be deprecated soon`_

- This event will be emitted when recording of the meeting is started.

#### Example

```javascript
meeting.on("recording-started", () => {
  //
});
```

---

### recording-stopped

_`This event will be deprecated soon`_

- This event will be emitted when recording of the meeting is stopped.

#### Example

```javascript
meeting.on("recording-stopped", () => {
  //
});
```

---

### livestream-state-changed

- This event will be emitted when the meeting's livestream status changed.

#### Event callback parameters

- **data**: { **status**: String }

  - **status**: String

`status` has following values

- `LIVESTREAM_STARTING` - Livestream is in starting phase and hasn't started yet.
- `LIVESTREAM_STARTED` - Livestream has started successfully.
- `LIVESTREAM_STOPPING` - Livestream is in stopping phase and hasn't stopped yet.
- `LIVESTREAM_STOPPED` - Livestream has stopped successfully.

#### Example

```javascript
import { VideoSDK } from "@videosdk.live/js-sdk";

const Constants = VideoSDK.Constants;

meeting.on("livestream-state-changed", (data) => {
  const { status } = data;

  if (status === Constants.livestreamEvents.LIVESTREAM_STARTING) {
    console.log("Meeting livestream is starting");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STARTED) {
    console.log("Meeting livestream is started");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STOPPING) {
    console.log("Meeting livestream is stopping");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STOPPED) {
    console.log("Meeting livestream is stopped");
  } else {
    //
  }
});
```

---

### livestream-started

_`This event will be deprecated soon`_

- This event will be emitted when `RTMP` live stream of the meeting is started.

#### Example

```javascript
meeting.on("livestream-started", () => {
  //
});
```

---

### livestream-stopped

_`This event will be deprecated soon`_

- This event will be emitted when `RTMP` live stream of the meeting is stopped.

#### Example

```javascript
meeting.on("livestream-stopped", () => {
  //
});
```

---

### hls-state-changed

- This event will be emitted when the meeting's HLS(Http Livestreaming) status changed.

#### Event callback parameters

- **data**: { **status**: String , **downstreamUrl**: String }
  - **status**: String
  - **downstreamUrl**: String _`will receive this property only in HLS_STARTED status`_

`status` has following values

- `HLS_STARTING` - Hls is in starting phase and hasn't started yet.
- `HLS_STARTED` - Hls has started successfully will return `downstreamUrl`.
- `HLS_PLAYABLE` - Hls has started and the `downstreamUrl` is noy playable.
- `HLS_STOPPING` - Hls is in stopping phase and hasn't stopped yet.
- `HLS_STOPPED` - Hls has stopped successfully.

#### Example

```javascript
import { VideoSDK } from "@videosdk.live/js-sdk";

const Constants = VideoSDK.Constants;

meeting.on("hls-state-changed", (data) => {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    // when hls is started you will receive downstreamUrl
    const { downstreamUrl } = data;

    console.log("Meeting Hls is started");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
});
```

---

---

### hls-started

_`This event will be deprecated soon`_

- This event will be emitted when `HLS` of the meeting is started.

#### Event callback parameters

- **data**: { **downstreamUrl**: String; }
  - **downstreamUrl**: String

#### Example

```javascript
meeting.on("hls-started", ({ downstreamUrl }) => {
  //
});
```

---

### hls-stopped

_`This event will be deprecated soon`_

- This event will be emitted when `HLS` of the meeting is stopped.

#### Example

```javascript
meeting.on("hls-stopped", () => {
  //
});
```

---

### connection-open

- This event will be emitted when a new connection is open with other meeting.

#### Event callback parameters

- **connection**: [Connection](../connection/connection-class.md)

#### Example

```javascript
meeting.on("connection-open", (connection) => {
  //
});
```

---

### connection-close

- This event will be emitted when a connection is closed with other meeting.

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

- This event will emit at participant side who is going to be switch with arguments `meetingId`, `payload` and `token`.

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

---

### meeting-state-changed

- This event will be triggered when state of meeting changes.
- It will pass **`state`** as an event callback parameter which will indicate current state of the meeting.
- All available states are `CONNECTING`, `CONNECTED`, `FAILED`, `DISCONNECTED`, `CLOSING`, `CLOSED`.

#### Event callback parameters

- **data**: { **state**: String }
  - **state**: String

#### Example

```javascript
meeting.on("meeting-state-changed", (data) => {
  const { state } = data;

  switch(state){
    case 'CONNECTING':
      console.log("Meeting is Connecting" );
      break;
    case 'CONNECTED':
      console.log("Meeting is Connected" );
      break;
    case 'FAILED':
      console.log("Meeting connection failed" );
      break;
    case 'DISCONNECTED':
      console.log("Meeting connection disconnected abruptly" );
      break;
    case 'CLOSING':
      console.log("Meeting is closing" );
      break;
    case 'CLOSED':
      console.log("Meeting connection closed" );
      break;
  }
  //
});
```

</div>
