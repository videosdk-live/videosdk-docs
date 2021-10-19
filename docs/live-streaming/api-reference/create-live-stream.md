---
sidebar_position: 1
---

# Create Live Stream

## Using create live stream API

A live stream create api will help you to connect your RTMP stream to videosdk.live.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
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
<TabItem value="result">

```json
{
  "record": false,
  "userId": "607adacdaeba2c4d217d5fea443d",
  "name": "zujo",
  "streamKey": "e83fb175-5606-4ee5-b960-aacfce300ba6",
  "upstreamUrl": "rtmp://live.zujonow.com/live/e83fb175-5606-4ee5-b960-aacfce300ba6",
  "downstreamUrl": "https://live.zujonow.com/live/e83fb175-5606-4ee5-b960-aacfce300ba6/index.m3u8",
  "recordingUrl": "https://live.zujonow.com/live/e83fb175-5606-4ee5-b960-aacfce300ba6/storage/index.m3u8",
  "restream": [
    {
      "_id": "60e2fed0135c9810f490f3b6",
      "url": "rtmp://x.rtmp.youtube.com/live2",
      "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
    }
  ],
  "createdAt": "2021-07-05T12:43:52.921Z",
  "updatedAt": "2021-07-05T12:45:04.379Z",
  "user": {
    "name": "Demo user 01",
    "id": "607adacdaeba2c4d217d5fea"
  },
  "id": "60e2fe88135c9810f490f3b4"
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Request

<MethodListGroup>
  <MethodListItemLabel name="__request" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="name" option={"required"} type={"string"} />
      <MethodListItemLabel name="record" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="restream"  type={"Array<object>"} description="Restream video stream on other social media or other live streaming service" >
        <MethodListGroup>
          <MethodListItemLabel name="url"  type={"string"} option={"required"} />
          <MethodListItemLabel name="streamKey" option={"required"}  type={"string"} />
        </MethodListGroup>
      </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="record"  type={"boolean"} />
      <MethodListItemLabel name="id"  type={"string"} />
      <MethodListItemLabel name="name"  type={"string"} />
      <MethodListItemLabel name="streamKey"  type={"string"} />
      <MethodListItemLabel name="upstreamUrl"  type={"string"} />
      <MethodListItemLabel name="downstreamUrl"  type={"string"} />
      <MethodListItemLabel name="recordingUrl"  type={"string"} />
    <MethodListItemLabel name="restream"    type={"Array<object>"} >
        <MethodListGroup>
          <MethodListItemLabel name="url"  type={"string"}  />
          <MethodListItemLabel name="streamKey" type={"string"} />
          <MethodListItemLabel name="id"   type={"string"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="createdAt"  type={"date"} />
      <MethodListItemLabel name="updatedAt"  type={"date"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
