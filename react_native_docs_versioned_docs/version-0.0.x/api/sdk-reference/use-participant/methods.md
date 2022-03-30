---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Methods returned by useParticipant Hook
title: Methods returned by useParticipant Hook
---

<div class="sdk-api-ref-only-h4">

### enableMic()

- `enableMic()` is used to enable mic of participant.

#### Events associated with `enableMic()`:

- First the participant will get a callback on [`onMicRequested()`](../use-meeting/events#onmicrequested) and once the participant accepts the request mic will be enabled.

- Every Participant will receive a callback on [`onStreamEnabled()`](./events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

---

### disableMic()

- `disableMic()` is used to disable mic of participant.

#### Events associated with `disableMic()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](./events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

---

### enableWebcam()

- `enableWebcam()` is used to enable webcam of participant.

#### Events associated with `enableWebcam()`:

- First the participant will get a callback on [`onWebcamRequested()`](../use-meeting/events#onwebcamrequested) and once the participant accepts the request webcam will be enabled.

- Every Participant will receive a callback on [`onStreamEnabled()`](./events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

---

### disableWebcam()

- `disableWebcam()` is used to disable webcam of participant.

#### Events associated with `disableWebcam()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](./events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

---

### setQuality()

- `setQuality()` is used to set the quality of participants video.

#### Parameter

- **quality** : _"low"_ | _"med"_ | _"high"_

---

### switchTo()

- If you want a participant from a connected meeting to be switched from one meeting to another meeting, `switchTo()` method is used. This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the joined meeting.

#### Events associated with `switchTo()`:

- [`onSwitchMeeting()`](../use-meeting/events#onswitchmeeting) event will be triggered for the participant who will switching the meeting.

#### Example

**Meeting_A** is connected with **Meeting_B**, there are participants `P1` in **Meeting_A** and `P2` in **Meeting_B**, now **Meeting_A** participant `P1` wants to switch `P2` participant from **Meeting_B** to **Meeting_A**, then participant `P1` will call:

`connectionParticipant.switchTo({ meetingId, token, payload })`

after that `P2` from **Meeting_B** will receive an event `onSwitchMeeting()`.

```js
// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Get participant of meeting B
const connectionParticipant =
  connection.meeting.participants.get("<participant-id>");

// Here participant from meeting A requests to switch particpant from meeting B to A
const onClick = () => {
  const meetingId = "<meeting-A-id>";
  const token = "JWT";
  const payload = "payload";

  connectionParticipant.switchTo({ meetingId, token, payload });
};

useMeeting({
  onSwitchMeeting: ({
    meetingId,
    payload,
    token,
    connectionParticipantId,
    connectionMeetingId,
  }) => {
    // Resetting token and meetingId at participant side
    setToken(token);
    setMeetingId(meetingId);
  },
});
```

</div>
