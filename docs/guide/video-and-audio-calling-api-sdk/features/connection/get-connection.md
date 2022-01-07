---
sidebar_label: Get Connection
pagination_label: Get Connection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Connection

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
