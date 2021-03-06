---
sidebar_position: 1
---

# List Live Streams

## Using list live stream API

This will return all the livestreams.

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
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
curl --request GET \
  --url 'https://api.videosdk.live/v1/livestreams/?page=1&perPage=20' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/livestreams/?page=1&perPage=20";
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

url = "https://api.videosdk.live/v1/livestreams"

querystring = {"page":"1","perPage":"25"}

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

url = URI("https://api.videosdk.live/v1/livestreams/?page=1&perPage=20")

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
  "pageInfo": {
    "currentPage": 1,
    "perPage": 20,
    "lastPage": 1
  },
  "data": [
    {
      "record": true,
      "id": "60348faca9cedd724c20cf66",
      "userId": "5fa671e77b80d58c11cbca95",
      "name": "Nickname for livestream",
      "streamKey": "0893a39c-0f3f-4ac8-8700-06151a1f68ed",
      "upstreamUrl": "rtmp://live.videosdk.live/live/...",
      "downstreamUrl": "https://live.videosdk.live/live/.../index.m3u8",
      "recordingUrl": "https://live.videosdk.live/live/.../storage/index.m3u8",
      "createdAt": "2021-02-23T05:16:28.219Z",
      "updatedAt": "2021-02-23T05:16:28.219Z"
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

### Request

<MethodListGroup>
  <MethodListItemLabel name="__request" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="page" option={"optional"} type={"number"} defaultValue="1" />
      <MethodListItemLabel name="perPage" option={"optional"} type={"number"} defaultValue="20" />
      <MethodListItemLabel name="perPage" option={"optional"} type={"number"} defaultValue="search by name" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="pageInfo" type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="currentPage"  type={"number"} />
          <MethodListItemLabel name="perPage"  type={"number"} />
          <MethodListItemLabel name="lastPage" type={"number"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="data" type={"Array<object>"} >
        <MethodListGroup>
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
  </MethodListItemLabel>
</MethodListGroup>
