---
sidebar_label: Switch Connection Participant
pagination_label: Switch Connection Participant
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Switch Particpant from Connected Meeting - Javascript

### Method

- **switchTo** - If you want a participant from a connected meeting to be switched from one meeting to another meeting, `switchTo` method is used.
  This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the joined meeting.

### Event

- **switch-meeting** - This event will emit at participant side who is going to be switch with arguments `meetingId`, `payload`, `token`, `connectionParticipantId` and `connectionMeetingId`

:::note

- While calling `switchTo()`, you need to pass a pre-generated token so that participant can reinitialize and join that meeting with the latest token on `switch-meeting` event.
- `switch-meeting` event will not switch that participant without any action.

:::

### Example

**Meeting_A** is connected with **Meeting_B**, there are participants `P1` in **Meeting_A** and `P2` in **Meeting_B**, now **Meeting_A** participant `P1` wants to switch `P2` participant from **Meeting_B** to **Meeting_A**, then participant `P1` will call:

`connectionParticipant.switchTo({ meetingId, token, payload })`

after that `P2` from **Meeting_B** will receive an event `switch-meeting`.

### **Method and Event Code**

```js
// Get meeting B connection
const connection = meeting.connections.get("<meeting-B-id>");

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

// This event will be emitted to participant of Meeting B
meeting.on(
  "switch-meeting",
  ({
    meetingId,
    payload,
    token,
    connectionParticipantId,
    connectionMeetingId,
  }) => {}
);
```

`reInitialiseMeetingOnConfigChange` prop help you to update token and meeting id at run time, you don't have to rejoin or reinitialize the meeting.

The reason we are using this props is we are resetting meetingId and token at participant side [switch-meeting](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/switch-connection-participant#event) event.

If you not specify this props, MeetingProvider will not able to reset meetingId and token at run time.
