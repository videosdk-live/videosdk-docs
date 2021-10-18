---
title: Update Live Stream
hide_title: false
hide_table_of_contents: false
description: Live Streaming architecture helps you to understand how to implement scalable live broadcasting applications.
sidebar_label: Update Live Stream
pagination_label: Update Live Stream
keywords:
  - live streaming
  - live broadcasting
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: update-live-stream
---

This guide will provide an overview of how we can update name of the live stream,change the recording status to on/off and also change the restream platforms with LiveStream id.

### Query Params

| Property Name | Type   | Description               |
| ------------- | ------ | ------------------------- |
| id            | string | unique id of live stream. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESPONSE', value: 'response'},
]}>
<TabItem value="curl">

```js
curl --request GET \
  --url 'https://api.zujonow.com/v1/livestreams/${id}' \
  --header 'Authorization: `jwt token goes here`'
  --data-raw '{
    "name": "Nickname for livestream",
    "record": true
  }'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/livestreams/${id}";
const options = {
  method: "POST",
  headers: { Accept: "application/json", Authorization: `jwt token goes here` },
  body: JSON.stringify({ name: "Nickname for livestream", record: true }),
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

url = "https://api.zujonow.com/v1/livestreams/${id}"

payload = {name: "Nickname for livestream", record: True }
headers = {"Accept": "application/json", "Authorization": "jwt token goes here"}

response = requests.request("POST", url,json=payload, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.zujonow.com/v1/livestreams/{id}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/json'
request["Content-Type"] = 'application/json'
request["Authorization"] = `${YOUR_JWT_TOKEN}`
request.body = "{\"record\":false,\"name\":\"Nickname for livestream\"}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="response">

```js
{
  "record": true,
  "id": "6034a7dfa9cedd724c20cf67",
  "name": "Nickname for livestream",
  "streamKey": "d492a9ed-84ce-448c-84dd-718bdea724a5",
  "upstreamUrl": "rtmp://live.zujonow.com/live/...",
  "downstreamUrl": "https://live.zujonow.com/live/.../index.m3u8",
  "recordingUrl": "https://live.zujonow.com/live/.../storage/index.m3u8",
  "restream": [
    {
      "_id": "60e2fed0135c9810f490f3b6",
      "url": "rtmp://x.rtmp.youtube.com/live2",
      "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
    }
  ],
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
      <MethodListItemLabel name="id"  type={"String"}  description="Unique identifier of live stream." />
      <MethodListItemLabel name="name"  type={"String"}  description="Provided name of the live stream." />
      <MethodListItemLabel name="record"  type={"Boolean"}  description="Flag for live stream recording, which you have provided while creating live stream." />
      <MethodListItemLabel name="streamKey"  type={"String"}  description="Stream keys are like your live stream’s password and address." />
      <MethodListItemLabel name="upstreamUrl"  type={"String"}  description="where a RTMP stream is used to send video between an encoder and server." />
      <MethodListItemLabel name="downstreamUrl"  type={"String"}  description="It's URL, Where you can play live stream in video player (Support HLS format)." />
      <MethodListItemLabel name="recordingUrl"  type={"String"}  description="It's URL, Where live stream recording is stored. 
       NOTE: This property is only visible, if you set `record : true` in body params." />
      <MethodListItemLabel name="restream"  type={"Array"}  description="This property contains object of RTMP url and streamKey, which you have provided in body params." />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
