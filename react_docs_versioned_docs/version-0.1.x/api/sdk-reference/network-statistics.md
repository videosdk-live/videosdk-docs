---
sidebar_position: 1
sidebar_label: Network Statistics
pagination_label: Intro to Video SDK Network Statistics
title: Video SDK Network Statistics
---

# Video SDK Network Statistics - React

### getNetworkStats()

-  The `getNetworkStats()` method will return a `Promise` that resolves with an object, containing network speed statistics or rejects with an error message, if the operation fails or exceeds the specified timeout.
- The result object will include the `downloadSpeed` and `uploadSpeed`, expressed in megabytes per second (MB/s).

#### Parameters

- `timeoutDuration`
   - It helps prevent the method from getting stuck indefinitely when fetching network statistics. It lets you set a maximum time for the operation, and if it takes longer than that, the method stops gracefully. 
   - You can specify `timeoutDuration` in milliseconds. If it is not provided or is not an integer, the default timeout is set to `60,000` milliseconds (1 minute).
   - `Optional`

#### Returns

- `Promise<{downloadSpeed: number,uploadSpeed: number}>`

#### Example

```js

import { getNetworkStats } from "@videosdk.live/react-sdk";

try {
  const options = { timeoutDuration: 45000 }; // Set a custom timeout of 45 seconds
  const networkStats = await getNetworkStats(options);
  console.log("Download Speed: ", networkStats["downloadSpeed"]);  // will return value in Mb/s
  console.log("Upload Speed: ", networkStats["uploadSpeed"]); // will return value in Mb/s
} catch(ex)
{
  console.log("Error in networkStats: ", ex);
}

```

---