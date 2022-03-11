---
sidebar_label: Establish Connection
pagination_label: Establish Connection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Establish Connection between Meetings

### Methods

- **connectTo** - This method is used for establishing connection between rooms.
  This method accept `meetingId` and `payload` as an object.

### Event

- **connection-open** - Whenever connection between two rooms established successfully, this event will trigger and return [Connection](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview#1-connection) list.

### Example

**Meeting_A** wants to connect with **Meeting_B**, now in this case **Meeting_A** will use `connectTo` method and pass `meeintgId` and `payload`.

`connectTo({ meetingId: "Meeting_B_ID", payload: "Hello Everyone." });`

After using this method, `connection-open` event will be emitted at both meetings and then **Meeting_A** & **Meeting_B** gets connected to each other.

#### **Method and Event Code**

```js
// Create Connection to Meeting B
meeting.connectTo({ meetingId: "Meeting_B_ID", payload: "Hello Everyone." });

//  This event will be emitted to participants of both meetings, Meeting A & Meeting B
meeting.on("connection-open", (connection) => {
  console.log("Connection", connection);
});
```
