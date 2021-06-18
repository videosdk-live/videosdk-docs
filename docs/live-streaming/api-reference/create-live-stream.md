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
curl -L -X POST 'https://api.zujonow.com/v1/livestreams' \
--header 'Authorization: `jwt token goes here`' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nickname for livestream",
    "record": true
}'
```

</TabItem>
<TabItem value="node">

```js
var fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/livestreams";
var options = {
  method: "POST",
  headers: {
    Authorization: `${YOUR_JWT_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
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

url = "https://api.zujonow.com/v1/livestreams"

payload = {"name": "Nickname for livestream", "record": True}
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

url = URI("https://api.zujonow.com/v1/livestreams")

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
<TabItem value="result">

```json
{
  "record": true,
  "id": "6034a7dfa9cedd724c20cf67",
  "name": "Nickname for livestream",
  "streamKey": "d492a9ed-84ce-448c-84dd-718bdea724a5",
  "upstreamUrl": "rtmp://live.zujonow.com/live/...",
  "downstreamUrl": "https://live.zujonow.com/live/.../index.m3u8",
  "recordingUrl": "https://live.zujonow.com/live/.../storage/index.m3u8",
  "createdAt": "2021-02-23T06:59:43.049Z",
  "updatedAt": "2021-02-23T06:59:43.049Z"
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
      <MethodListItemLabel name="createdAt"  type={"date"} />
      <MethodListItemLabel name="updatedAt"  type={"date"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
