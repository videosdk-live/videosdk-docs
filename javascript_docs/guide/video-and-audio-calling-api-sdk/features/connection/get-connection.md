---
sidebar_label: Get Connection
pagination_label: Get Connection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Connection

## Get all Connection meetings

After successfully established connections, you will be able to get all the connected meetings from `Meeting` class parameter called `connections`.

```js
console.log(meeting.connections);
// In response, you will get Map of all connected meetings
```

## Get single connection meeting

You can get single meeting connection object by passing `id`.
However, you can also consider connected `meetingId` as a `connectionId`.

:::note
For React and ReactNative developer, videosdk.live introduce new hook called `useConnection`, which can handle single connected meeting by passing id.
:::

```js
const connection = meeting.connections.get("<connection-id>"); // <meeting-id> || <connection-id>

console.log(connection);
// In response, you will get single meeting connection
```
