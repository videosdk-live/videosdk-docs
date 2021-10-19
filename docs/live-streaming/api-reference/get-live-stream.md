---
sidebar_position: 1
---

# Get Live Stream

## Using get live stream API

Get all the details of one single live stream.

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
curl --request GET \
  --url 'https://api.videosdk.live/v1/livestreams/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/livestreams/${id}";
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

url = "https://api.videosdk.live/v1/livestreams/${id}"

headers = {"Accept": "application/json", "Authorization": "jwt token goes here"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.videosdk.live/v1/livestreams/${id}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'jwt token goes here'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "record": true,
  "id": "6034a7dfa9cedd724c20cf67",
  "name": "Nickname for livestream",
  "streamKey": "d492a9ed-84ce-448c-84dd-718bdea724a5",
  "upstreamUrl": "rtmp://live.videosdk.live/live/...",
  "downstreamUrl": "https://live.videosdk.live/live/.../index.m3u8",
  "recordingUrl": "https://live.videosdk.live/live/.../storage/index.m3u8",
  "createdAt": "2021-02-23T06:59:43.049Z",
  "updatedAt": "2021-02-23T06:59:43.049Z"
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

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
