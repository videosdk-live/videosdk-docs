---
sidebar_label: Switch Participant
pagination_label: Switch Participant
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Switch Participant

If you are running more than one meeting concurrently and want to switch particular participant over meetings, VideoSDK Provide `switchTo` method to achieve this kind of setup.

### Method

- **switchTo** - This method is used for switching participant of one meeting to another meeting.
  This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the joined meeting.

### Event

- **switch-meeting** - This event will emit at participant side who is going to be switch with arguments `meetingId`, `payload` and `token`.

:::note

- While calling `switchTo()`, you need to pass a pre-generated token so that participant can reinitialize and join that meeting with the latest token on `switch-meeting` event.
- `switch-meeting` event will not switch that participant without any action.

:::

### Example

**Meeting_A** and **Meeting_B** are running paralleley, there are participants `P1`, `P2` in **Meeting_A** and `P3` in **Meeting_B**, now **Meeting_A** participant `P1` wants to switch `P2` participant from **Meeting_A** to **Meeting_B** or other meeting, then participant `P1` will call:

`switchTo({ meetingId, token, payload })`

after that `P2` from **Meeting_A** will receive an event `switch-meeting` with **Meeting_B** Id .

### **Method and Event Code**

```js
// Get participant of meeting A
const Participant = meeting.participants.get("<participant-id>");

const onClick = () => {
  const meetingId = "<meeting-B-id>"; // <meeting-B-id> || <other-meeting-id>
  const token = "JWT";
  const payload = "payload";

  Participant.switchTo({ meetingId, token, payload });
};

// This event will be emitted to participant P2 of Meeting A.
meeting.on("switch-meeting", ({ meetingId, payload, token }) => {});
```
