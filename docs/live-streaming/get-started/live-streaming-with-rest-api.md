---
sidebar_position: 1
---

# Live Streaming with REST API

## Using Live Streaming REST API

You can use REST API to create and manage live streams. You will require API key and Secret to access API routes.

## Generate your API Key and Secret

You can generate API Key and Secret using "API Keys" section. Refer authentication section for more information about generating token.
![Generate API keys from console](/img/api-key.jpg)

## Sample request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL', value: 'curl'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
curl -L -X POST 'https://api.videosdk.live/v1/livestreams' \
--header 'Authorization: `jwt token goes here`' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nickname for livestream",
    "record": true
}'
```

</TabItem>
<TabItem value="result">

```js
{
  "record": true,
  "id": "6034a7dfa9cedd724c20cf67",
  "name": "Nickname for livestream",
  "streamKey": "d492a9ed-84ce-448c-84dd-718bdea724a5",
  "streamUrl": "rtmp://live.videosdk.live/live",
  "upstreamUrl": "rtmp://live.videosdk.live/live/...",
  "downstreamUrl": "https://live.videosdk.live/live/.../index.m3u8",
  "recordingUrl": "https://live.videosdk.live/live/.../storage/index.m3u8",
  "createdAt": "2021-02-23T06:59:43.049Z",
  "updatedAt": "2021-02-23T06:59:43.049Z"
}
```

</TabItem>
</Tabs>

Click the Results tab to see the room object created in response to the request.

There are many other API's available to manage live streamings.
