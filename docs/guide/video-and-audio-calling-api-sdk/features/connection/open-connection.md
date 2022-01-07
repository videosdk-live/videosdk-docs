---
title: Open Connection - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Open Connection
pagination_label: Open Connection
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: open-connection
---

## Connection Break Down

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

- [How to Establish Connection with meetings ?](/docs/guide/video-and-audio-calling-api-sdk/features/connection/open-connection#how-to-establish-connection-with-meetings-)

- How to disconnect Room?

- How to Switch Participants between rooms ?

- How to Send Message to connected rooms ?

## Establish Connection with meetings

### Methods

- **connectTo** - This method is used for establishing connection between rooms.
  This method accept `meetingId` and `payload` as an object.

### Event

- **connection-open** - Whenever connection between two rooms established successfully, this event will trigger and return `connection` list

### Example

Let's understand it with example, **Meeting_A** wants to connect with **Meeting_B**, now in this case **Meeting_A** will use `connectTo` method and pass `meeintgId` and `payload`.

`connectTo({ meetingId: "Meeting_B_ID", payload: "Hello Everyone." });`

After using this method, `connection-open` event will be emitted at both meetings and then **Meeting_A** & **Meeting_B** gets connected to each other.

#### **Method and Event Code**

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
// Create Connection to Meeting B
meeting.connectTo({ meetingId: "Meeting_B_ID", payload: "Hello Everyone." });

//  This event will be emitted to participants of both meetings, Meeting A & Meeting B
meeting.on("connection-open", (connection) => {
  console.log("Connection", connection);
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const { connectTo } = useMeeting({
  // This event will be emitted to participants of both meetings, Meeting A & Meeting B
  onConnectionOpen: (connection) => {
    console.log("Connection", connection);
  },
});

// Create Connection to Meeting B
const onClick = () => {
  connectTo({ meetingId: "Meeting_B_ID", payload: "Hello Everyone." });
};
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const { connectTo } = useMeeting({
  // This event will be emitted to participants of both meetings, Meeting A & Meeting B
  onConnectionOpen: (connection) => {
    console.log("Connection", connection);
  },
});

// Create Connection to Meeting B
const onPress = () => {
  connectTo({ meetingId: "Meeting_B_ID", payload: "Hello Everyone." });
};
```

</TabItem>
</Tabs>

## Get all Connection meetings

After successfully established connections, you will be able to get all the connected meetings from `Meeting` class parameter called `connections`.

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
console.log(meeting.connections);
// In response, you will get Map of all connected meetings
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const { connections } = useMeeting();

console.log(connections);
// In response, you will get Map of all connected meetings
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const { connections } = useMeeting();

console.log(connections);
// In response, you will get Map of all connected meetings
```

</TabItem>
</Tabs>

## Get single connection meeting

You can get single meeting connection object by passing `id`.
However, you can also consider connected `meetingId` as a `connectionId`.

:::note
For React and ReactNative developer, videosdk.live introduce new hook called `useConnection`, which can handle single connected meeting by passing id.
:::

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
const connection = meeting.connections.get("<connection-id>"); // <meeting-id> || <connection-id>

console.log(connection);
// In response, you will get single meeting connection
```

</TabItem>
<TabItem value="react">

```js
import { useConnection } from "@videosdk.live/react-sdk";

const { connection } = useConnection("<connection-id>"); // <meeting-id> || <connection-id>

console.log(connection);
// In response, you will get single meeting connection
```

</TabItem>
<TabItem value="reactnative">

```js
import { useConnection } from "@videosdk.live/react-native-sdk";

const { connection } = useConnection("<connection-id>"); // <meeting-id> || <connection-id>

console.log(connection);
// In response, you will get single meeting connection
```

</TabItem>
</Tabs>

## List out participants of connected meeting

After getting a single meeting connection, all joined participants of that meeting can be fetched using `connection.meeting.participants`.

### Events

- **participant-joined** - Whenever a new participant joined that connected meeting, this event will be emitted. For example, **Meeting A** is connected with **Meeting B**, there are participants `M1P1` and `M1P2` in **Meeting A** and participant `M2P1` in **Meeting B**, now a new participant `M2P2` joined **Meeting B**, then `connection.meeting.on("participant-joined")` will be emitted to all participants of **Meeting A**.

- **participant-left** - Whenever any participant left that connected meeting, this event will be emitted. For example, **Meeting A** is connected with **Meeting B**, there are participants `M1P1` and `M1P2` in **Meeting A** and participants `M2P1` and `M2P2` in **Meeting B**, now a participant `M2P2` left **Meeting B**, then `connection.meeting.on("participant-left")` will be emitted to all participants of **Meeting A**.

### **Method and Event Code**

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
const connection = meeting.connections.get("<connection-id>");

console.log(connection.meeting.participants);
// Here you will get all joined participants of that connected meeting

connection.meeting.on("participant-joined", (participant) => {
  console.log(participant); // Joined participant of that connected meeting
});
connection.meeting.on("participant-left", (participantId) => {
  console.log(participantId); // participantId who left that connected meeting
});
```

</TabItem>
<TabItem value="react">

```js
import { useConnection } from "@videosdk.live/react-sdk";

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

</TabItem>
<TabItem value="reactnative">

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

</TabItem>
</Tabs>

:::info
Participant you get from `connection.meeting.participants`, will only contain `id` and `displayName`. Any video, audio or share streams will not be provided.
:::

## Send message to connected meetings

### Method

- **sendChatMessage** - If you want to communicate participants of connected meetings, it can be achieved by this. This method accepts **messageText** as an argument.

### Event

- **chat-message** - When any participant of **Meeting A** sends a chat message to **Meeting B**, then this event will be emitted to all participants of **Meeting B**.

### **Method and Event Code**

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
const connection = meeting.connections.get("<connection-id>");

// This will be called from Meeting A
const onClick = () => {
  connection.meeting.sendChatMessage("Hi there, from MARS!");
};

// This event will be emitted to all participants of Meeting B
connection.meeting.on("chat-message", ({ message, participantId }) => {
  alert(`${participantId} says: ${message}`);
});
```

</TabItem>
<TabItem value="react">

```js
import { useConnection } from "@videosdk.live/react-sdk";

const { connection } = useConnection("<connection-id>", {
  onMeeting: {
    // This event will be emitted to all participants of Meeting B
    onChatMessage: ({ message, participantId }) => {
      alert(`${participantId} says: ${message}`);
    },
  },
});

// This will be called from Meeting A
const onClick = () => {
  connection.meeting.sendChatMessage("Hi there, from MARS!");
};
```

</TabItem>
<TabItem value="reactnative">

```js
import { Alert } from "react-native";
import { useConnection } from "@videosdk.live/react-native-sdk";

const { connection } = useConnection("<connection-id>", {
  onMeeting: {
    // This event will be emitted to all participants of Meeting B
    onChatMessage: ({ message, participantId }) => {
      Alert.alert(`${participantId} says: ${message}`);
    },
  },
});

// This will be called from Meeting A
const onPress = () => {
  connection.meeting.sendChatMessage("Hi there, from MARS!");
};
```

</TabItem>
</Tabs>

## Switch particpant of connected meetings

### Method

- **switchTo** - If you want a participant from a connected meeting to be switched from one meeting to another meeting, `switchTo` method is used.
  This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the meeting where he/she is currently joined.

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

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

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

// This event will be emitted to all participants of Meeting B
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

</TabItem>
<TabItem value="react">

```js
import { useMeeting, useConnection } from "@videosdk.live/react-sdk";

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

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting, useConnection } from "@videosdk.live/react-native-sdk";

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

</TabItem>
</Tabs>

## End meeting of connection

### Method

- **end** - If you want to end connected meetings, `connection.meeting.end` method is used. After executing this method, all participants of that meeting will leave automatically.

### Example

**Meeting_A** is connected with **Meeting_B**, participant of **Meeting_A** wants to end **Meeting_B**, now **Meeting_A** participant will use `connection.meeting.end` to end **Meeting_B** and all the participants joined in **Meeting_B** will leave.

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
// Get meeting B connection
const connection = meeting.connections.get("<meeting-B-id>");

// End Meeting B
const onClick = () => {
  connection.meeting.end();
};
```

</TabItem>
<TabItem value="react">

```js
import { useConnection } from "@videosdk.live/react-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// End Meeting B
const onClick = () => {
  connection.meeting.end();
};
```

</TabItem>
<TabItem value="reactnative">

```js
import { useConnection } from "@videosdk.live/react-native-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// End Meeting B
const onClick = () => {
  connection.meeting.end();
};
```

</TabItem>
</Tabs>

## Close connection

### Method

- **close** - If you want to disconnect connections with meeting, `connection.close` method is used. This method will not end the connected meetings.

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'}
]}>
<TabItem value="js">

```js
// Get meeting B connection
const connection = meeting.connections.get("<meeting-B-id>");

// Close Connection with Meeting B
const onClick = () => {
  connection.close();
};
```

</TabItem>
<TabItem value="react">

```js
import { useConnection } from "@videosdk.live/react-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Close Connection with Meeting B
const onClick = () => {
  connection.close();
};
```

</TabItem>
<TabItem value="reactnative">

```js
import { useConnection } from "@videosdk.live/react-native-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Close Connection with Meeting B
const onClick = () => {
  connection.close();
};
```

</TabItem>
</Tabs>
