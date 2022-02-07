---
sidebar_label: Close Connection
pagination_label: Close Connection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Close Connection

### Method

- **close** - If you want to close connections with meeting, `connection.close` method is used. This method will not end the connected meetings.

### Event

- **connection-close** - Whenever connection is close between two rooms successfully, this event will trigger in both meeting participants and return `connectionId`.

<Tabs
defaultValue="js"
groupId={"client-group-id"}
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

//  This event will be emitted to participants of both meetings.
meeting.on("connection-close", (connectionId) => {
  console.log("ConnectionId", connectionId);
});
```

</TabItem>
<TabItem value="react">

```js
import { useConnection, useMeeting } from "@videosdk.live/react-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Close Connection with Meeting B
const onClick = () => {
  connection.close();
};

const {} = useMeeting({
  // This event will be emitted to participants of both meetings.
  onConnectionClose: (connectionId) => {
    console.log("ConnectionId", connectionId);
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useConnection, useMeeting } from "@videosdk.live/react-native-sdk";

// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Close Connection with Meeting B
const onClick = () => {
  connection.close();
};

const {} = useMeeting({
  // This event will be emitted to participants of both meetings.
  onConnectionClose: (connectionId) => {
    console.log("ConnectionId", connectionId);
  },
});
```

</TabItem>
</Tabs>
