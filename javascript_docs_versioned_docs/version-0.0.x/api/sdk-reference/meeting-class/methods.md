---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

<div class="sdk-api-ref">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](./) it returns a new instance of [Meeting](./). However by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()` method:

- Local Participant will receive a [`meeting-joined`](./) event, when successfully joined.
- Remote Participant will receive a [`participant-joined`](./) event with the newly joined [`Participant`](./) object inside the event callback.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`entry-requested`](./).

- After the decision from the remote participant, an event will be emitted to participant called [`entry-responded`](./). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the parmission `allow_join`, then the participant will join the meeting derectly after calling `join()`.

#### Parameters

- `null`

#### Returns

- `null`

---

### leave()

- Return Type : `void`
- `leave()` is used to leave current meeting.
- Events associated with `leave()` method :
  - Local Participant will receive a `Events.meetingLeft` event.
  - Remote Participant will receive a `Events.participantLeft` event with `participantId`.

---

### end()

---

### muteMic()

- Return Type : `void`
- `muteMic()` is used to disable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

---

### unmuteMic()

- Return Type : `void`
- `unmuteMic()` is used to enable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

---

### disableWebcam()

- Return Type : `void`
- `disableWebcam()` is used to disable self camera.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

---

### enableWebcam()

- Return Type : `void`
- `enableWebcam()` is used to enable self camera.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

---

### disableScreenShare()

- Return Type : `void`
- `disableScreenShare()` is used to disable screen-sharing.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

---

### enableScreenShare()

- Return Type : `void`
- `enableScreenShare()` is used to enable screen-sharing.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

---

### startRecording()

- Return Type : `void`
- `startRecording()` is used to start meeting recording.
- Local Participant and Remote Participant will receive `Events.recordingStarted` event.

---

### stopRecording()

- Return Type : `void`
- `stopRecording()` is used to stop meeting recording.
- Local Participant and Remote Participant will receive `Events.recordingStopped` event.

---

### startLivestream()

- Return Type : `void`
- `startLivestream()` is used to start meeting livestreaming.
- Local Participant and Remote Participant will receive `Events.liveStreamStarted` event.

---

### stopLivestream()

- Return Type : `void`
- `stopLivestream()` is used to stop meeting livestreaming.
- Local Participant and Remote Participant will receive `Events.liveStreamStopped` event.

---

### startHls()

---

### stopHls()

---

### getMics()

---

### getWebcams()

---

### changeMic()

---

### changeWebcam()

- Return Type : `void`
- `changeWebcam` is used to change self camera.
- Local Participant and Remote Participant will receive `Events.streamEnabled` event with `stream` object and `Events.streamDisabled` event with `stream` object.

---

### setWebcamQuality()

---

### startWhiteboard()

---

### stopWhiteboard()

---

### startVideo()

- Return Type : `void`
- `startVideo()` triggers video-state-changed event with status "started"

---

### stopVideo()

---

### resumeVideo()

---

### pauseVideo()

---

### seekVideo()

---

### on()

---

### off()

</div>
