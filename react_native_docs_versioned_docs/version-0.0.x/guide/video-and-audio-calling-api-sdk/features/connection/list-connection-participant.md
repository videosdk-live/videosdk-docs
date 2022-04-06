---
sidebar_label: List Connection Participant
pagination_label: List Connection Participant
---

# List out Participants of Connected Meeting

After getting a single meeting connection, all joined participants of that meeting can be fetched using `connection.meeting.participants`.

### Events

- **participant-joined** - Whenever a new participant joined that connected meeting, this event will be emitted. For example, **Meeting_A** is connected with **Meeting_B**, there are participants `M1P1` and `M1P2` in **Meeting_A** and participant `M2P1` in **Meeting_B**, now a new participant `M2P2` joined **Meeting_B**, then `connection.meeting.on("participant-joined")` will be emitted to all participants of **Meeting_A**.

- **participant-left** - Whenever any participant left that connected meeting, this event will be emitted. For example, **Meeting_A** is connected with **Meeting_B**, there are participants `M1P1` and `M1P2` in **Meeting_A** and participants `M2P1` and `M2P2` in **Meeting_B**, now a participant `M2P2` left **Meeting_B**, then `connection.meeting.on("participant-left")` will be emitted to all participants of **Meeting_A**.

### **Method and Event Code**

```js
import { useConnection } from "@videosdk.live/react-native-sdk";

const { connection } = useConnection("<connection-id>", {
  onMeeting: {
    onParticipantJoined: (participant) => {
      console.log(participant); // Joined participant of that connected meeting
    },
    onParticipantLeft: (participantId) => {
      console.log(participantId); // participantId who left that connected meeting
    },
  },
});

console.log(connection.meeting.participants);
// Here you will get all joined participants of that connected meeting
```

:::info
Participant you get from `connection.meeting.participants`, will only contain `id` and `displayName`. Any video, audio or share streams will not be provided.
:::
