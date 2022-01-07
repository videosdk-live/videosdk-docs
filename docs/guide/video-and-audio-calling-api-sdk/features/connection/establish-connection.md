---
sidebar_label: Establish Connection
pagination_label: Establish Connection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Establish Connection with Meetings

### Methods

- **connectTo** - This method is used for establishing connection between rooms.
  This method accept `meetingId` and `payload` as an object.

### Event

- **connection-open** - Whenever connection between two rooms established successfully, this event will trigger and return `connection` list

### Example

**Meeting_A** wants to connect with **Meeting_B**, now in this case **Meeting_A** will use `connectTo` method and pass `meeintgId` and `payload`.

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
