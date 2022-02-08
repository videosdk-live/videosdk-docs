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