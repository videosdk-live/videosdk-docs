---
title: Live Streaming Create New Live Stream | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Live Streaming Create New documentation offers the most flexibility and control over your live viewing experience, build a custom integration with your live streaming web & app.
sidebar_label: Create New Live Stream
pagination_label: Create New Live Stream
keywords:
  - live streaming
  - live broadcasting
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: create-new-live-stream
---

# Live Stream - Create New Live Stream

This guide will provide an overview of how to create live stream using generated token in previous step [Authentication](/docs/guide/standard-live-streaming-api-sdk/authentication).

### Body Params

| Property Name           | Type    | Description                                                                                                                                                                                                           |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                    | string  | Name of your live stream.                                                                                                                                                                                             |
| record                  | boolean | Whether you are recording or not. `true` for record, `false` for not record. For more info you can follow [Recording Guide](/docs/guide/standard-live-streaming-api-sdk/features/record-live-stream).                 |
| restream **[Optional]** | Array   | RTMP url and stream key from the provided platforms such as Youtube or Facebook. For more info you can follow [Restream on Social Media](/docs/guide/standard-live-streaming-api-sdk/features/restream-social-media). |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESPONSE', value: 'response'},
]}>
<TabItem value="curl">

```js
curl -L -X POST 'https://api.videosdk.live/v1/livestreams' \
--header 'Authorization: `jwt token goes here`' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nickname for livestream",
    "record": true,
    "restream": [
      {
          "url": "rtmp://x.rtmp.youtube.com/live2",
          "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
      }
    ]
}'
```

</TabItem>
<TabItem value="node">

```js
var fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/livestreams";
var options = {
  method: "POST",
  headers: {
    Authorization: `${YOUR_JWT_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nickname for livestream", record: true
    restream: [
      {
          "url": "rtmp://x.rtmp.youtube.com/live2",
          "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
      }
    ]
    }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.videosdk.live/v1/livestreams"

payload = {
  "name": "Nickname for livestream", "record": True,
  "restream": [
      {
          "url": "rtmp://x.rtmp.youtube.com/live2",
          "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
      }
    ]
}
headers = {
    "Authorization": `${YOUR_JWT_TOKEN}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.videosdk.live/v1/livestreams")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/json'
request["Content-Type"] = 'application/json'
request["Authorization"] = `${YOUR_JWT_TOKEN}`
request.body = "{\"record\":false,\"name\":\"Nickname for livestream\",\"restream\": [ { \"url\": \"rtmp://x.rtmp.youtube.com/live2\", \"streamKey\": \"0tjp-h6a2-8c9d-vusv-01uu\" } ]}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="response">

```json
{
  "record": false,
  "name": "zujo",
  "streamKey": "eb175-5-4e5-60-aacfce300b",
  "upstreamUrl": "rtmp://live.videosdk.live/live/...",
  "downstreamUrl": "https://live.videosdk.live/live/.../index.m3u8",
  "recordingUrl": "https://live.videosdk.live/live/.../storage/index.m3u8",
  "restream": [
    {
      "_id": "60e2fed0135c9810f490f3b6",
      "url": "rtmp://x.rtmp.youtube.com/live2",
      "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
    }
  ],
  "id": "60e2fe88135c9810f490f3b4"
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"string"}  description="Unique identifier of live stream." />
      <MethodListItemLabel name="name"  type={"string"}  description="Provided name of the live stream." />
      <MethodListItemLabel name="record"  type={"boolean"}  description="Flag for live stream recording, which you have provided while creating live stream." />
      <MethodListItemLabel name="streamKey"  type={"string"}  description="Stream keys are like your live stream’s password and address." />
      <MethodListItemLabel name="upstreamUrl"  type={"string"}  description="where a RTMP stream is used to send video between an encoder and server." />
      <MethodListItemLabel name="downstreamUrl"  type={"string"}  description="It's URL, Where you can play live stream in video player (Support HLS format)." />
      <MethodListItemLabel name="recordingUrl"  type={"string"}  description="It's URL, Where live stream recording is stored. 
       NOTE: This property is only visible, if you set `record : true` in body params." />
      <MethodListItemLabel name="restream"  type={"array"}  description="This property contains object of RTMP url and streamKey, which you have provided in body params." />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
