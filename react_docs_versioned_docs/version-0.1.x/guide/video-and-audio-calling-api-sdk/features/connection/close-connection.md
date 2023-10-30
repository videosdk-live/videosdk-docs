---
sidebar_label: Close Connection
pagination_label: Close Connection
---

# Close Connection - React

### Method

- **close** - If you want to close connections with meeting, `connection.close` method is used. This method will not end the connected meetings.

### Event

- **connection-close** - Whenever connection is close between two rooms successfully, this event will trigger in both meeting participants and return `connectionId`.

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
