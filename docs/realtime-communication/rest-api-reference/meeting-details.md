---
sidebar_position: 1
---

# Meeting details

You have to call simple API to list meeting details.

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

curl -L -X GET 'https://api.zujonow.com/v1/meetings/:id' \
-H 'Authorization: $YOUR_JWT_TOKEN'

```

</TabItem>
<TabItem value="node">

```js
var request = require("request");
var options = {
  method: "GET",
  url: "https://api.zujonow.com/v1/meetings/:id",
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

url = "https://api.zujonow.com/v1/meetings/:id"

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

url = URI("https://api.zujonow.com/v1/meetings/:id")

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
    "user": {
        "name": "DND - Zujo test account",
        "id": "5fa671e77b80d58c11cbca95"
    },
    "id": "60cc550656592b6a03d7a2d0"
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
    <MethodListGroup>
      <MethodListHeading heading="Query Parameters" />
      <MethodListItemLabel name="id" option={"optional"} type={"string"} />
    </MethodListGroup>
</MethodListGroup>
