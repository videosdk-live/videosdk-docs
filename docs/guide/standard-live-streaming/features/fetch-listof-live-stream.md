---
title: Fetch List of Live Stream
hide_title: false
hide_table_of_contents: false
description: Live Streaming architecture helps you to understand how to implement scalable live broadcasting applications.
sidebar_label: Fetch List of Live Stream
pagination_label: Fetch List of Live Stream
keywords:
  - live streaming
  - live broadcasting
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: fetch-listof-live-stream
---

This guide will provide an overview of how to list all live streams that you created by passing `userId` as query parameter.

### Query Params

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| userId        | string | Unique id of user. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESPONSE', value: 'response'}
]}>
<TabItem value="curl">

```js
curl --request GET \
  --url 'https://api.zujonow.com/v1/livestreams?userId=<Your unique id>' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/livestreams?userId=<Your unique id>";
const options = {
  method: "GET",
  headers: { Accept: "application/json", Authorization: `jwt token goes here` },
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

url = "https://api.zujonow.com/v1/livestreams"

querystring = {"userId":"Your unique id"}

headers = {"Accept": "application/json", "Authorization": "jwt token goes here"}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.zujonow.com/v1/livestreams?userId=<Your unique id>")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'jwt token goes here'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="response">

```js
{
  "data": [
    {
      "record": true,
      "id": "60348faca9cedd724c20cf66",
      "userId": "5fa671e77b80d58c11cbca95",
      "name": "Nickname for livestream",
      "streamKey": "0893a39c-0f3f-4ac8-8700-06151a1f68ed",
      "upstreamUrl": "rtmp://live.zujonow.com/live/...",
      "downstreamUrl": "https://live.zujonow.com/live/.../index.m3u8",
      "recordingUrl": "https://live.zujonow.com/live/.../storage/index.m3u8",
    },
    ...
  ]
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
      <MethodListItemLabel name="userId"  type={"string"}  description="Unique identifier of user." />
      <MethodListItemLabel name="name"  type={"string"}  description="Provided name of the live stream." />
      <MethodListItemLabel name="record"  type={"boolean"}  description="Flag for live stream recording, which you have provided while creating live stream." />
      <MethodListItemLabel name="streamKey"  type={"string"}  description="Stream keys are like your live stream’s password and address" />
      <MethodListItemLabel name="upstreamUrl"  type={"string"}  description="where a RTMP stream is used to send video between an encoder and server." />
      <MethodListItemLabel name="downstreamUrl"  type={"string"}  description="It's URL, Where you can play live stream in video player (Support HLS format)." />
      <MethodListItemLabel name="recordingUrl"  type={"string"}  description="It's URL, Where live stream recording is stored." />
      <MethodListItemLabel name="restream"  type={"array"}  description="This property contains object of RTMP url and streamKey, which you have provided in body params." />
    </MethodListGroup>

  </MethodListItemLabel>
</MethodListGroup>

## Dashboard

You can find list of live stream on Your [Dashboard](https://app.videosdk.live/live-streams/all-live-streams).

![Video SDK Home Dashboard](/img/live-stream-list.png)
