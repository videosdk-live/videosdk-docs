---
sidebar_label: Switch Participant
pagination_label: Switch Participant
---

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
import { useParticipant, useMeeting } from "@videosdk.live/react-sdk";

const { switchTo } = useParticipant("<participant-id>");

const onClick = () => {
  const meetingId = "<meeting-B-id>"; // <meeting-B-id> || <other-meeting-id>
  const token = "JWT";
  const payload = "payload";

  switchTo({ meetingId, token, payload });
};

useMeeting({
  onSwitchMeeting: ({ meetingId, payload, token }) => {
    // Resetting token and meetingId at participant side
    setToken(token);
    setMeetingId(meetingId);
  },
});
```

For **React** Developer, you need to slightly modify in [Initialization](/react/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization) config props.

```js
const App = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: "<Id-on-meeting>",
        name: "<Name-of-participant>",
        micEnabled: "<Flag-to-enable-mic>",
        webcamEnabled: "<Flag-to-enable-webcam>",
        reInitialiseMeetingOnConfigChange: true, // Add This Line
      }}
      token={"<Authentication-token>"}
    >
      <>...</>
    </MeetingProvider>
  );
};
```

`reInitialiseMeetingOnConfigChange` prop help you to update token and meeting id at run time, you don't have to rejoin or reinitialize the meeting.

The reason we are using this props is we are resetting meetingId and token at participant side [switch-meeting](/react/video-and-audio-calling-api-sdk/features/switch-participant#event) event.

If you not specify this props, MeetingProvider will not able to reset meetingId and token at run time.
