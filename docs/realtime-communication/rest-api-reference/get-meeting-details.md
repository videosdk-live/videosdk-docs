---
sidebar_position: 1
---

# Get Meeting Details

Use the following Rest API to get meeting details.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL request', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js

curl -L -X GET 'https://api.videosdk.live/v1/meetings/:id' \
-H 'Authorization: $YOUR_JWT_TOKEN'

```

</TabItem>
<TabItem value="node">

```js
var request = require("request");
var options = {
  method: "GET",
  url: "https://api.videosdk.live/v1/meetings/:id",
  headers: {
    Authorization: "$YOUR_JWT_TOKEN",
  },
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.videosdk.live/v1/meetings/:id"

headers = {
  'Authorization': '$YOUR_JWT_TOKEN'
}

response = requests.request("GET", url, headers=headers)

print(response.text)

```

</TabItem>
<TabItem value="ruby">

```ruby
require "uri"
require "net/http"

url = URI("https://api.videosdk.live/v1/meetings/:id")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "$YOUR_JWT_TOKEN"

response = https.request(request)
puts response.read_body

```

</TabItem>
<TabItem value="result">

```js
{
    "meetingId": "yw3w-nfzh-9jl0",
    "userId": "5fa671e77b80d58c11cbca95",
    "createdAt": "2021-06-18T08:10:46.683Z",
    "updatedAt": "2021-06-18T08:10:46.683Z",
    "id": "60cc550656592b6a03d7a2d0"
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Request

<MethodListGroup>
    <MethodListGroup>
      <MethodListHeading heading="Query Parameters" />
      <MethodListItemLabel name="id" option={"optional"} type={"string"} />
    </MethodListGroup>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="meetingId"  type={"string"} />
      <MethodListItemLabel name="userId"  type={"string"} />
      <MethodListItemLabel name="user" type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="name"  type={"string"} />
          <MethodListItemLabel name="id"  type={"string"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="createdAt"  type={"date"} />
      <MethodListItemLabel name="updatedAt"  type={"date"} />
      <MethodListItemLabel name="id"  type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
