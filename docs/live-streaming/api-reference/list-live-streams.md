---
sidebar_position: 1
---

# List Live Streams

This will return all the livestreams.

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
  --url 'https://api.zujonow.com/v1/livestreams/?page=1&perPage=20' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/livestreams/?page=1&perPage=20";
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

url = URI("https://api.zujonow.com/v1/livestreams/?page=1&perPage=20")

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
      "upstreamUrl": "rtmp://live.zujonow.com/live/...",
      "downstreamUrl": "https://live.zujonow.com/live/.../index.m3u8",
      "recordingUrl": "https://live.zujonow.com/live/.../storage/index.m3u8",
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
      <MethodListItemLabel name="page" option={"required"} type={"number"} />
      <MethodListItemLabel name="perPage" option={"required"} type={"number"} />
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
