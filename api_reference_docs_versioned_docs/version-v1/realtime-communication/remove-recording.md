---
sidebar_position: 1
sidebar_label: Delete Recordings
---

# Delete Recordings

Use the following Rest API to delete recordings.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL request', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js

curl -L -X DELETE 'https://api.videosdk.live/v1/meeting-recordings/:id' \
-H 'Authorization: $YOUR_JWT_TOKEN'

```

</TabItem>
<TabItem value="node">

```js
var request = require("request");
var options = {
  method: "DELETE",
  url: "https://api.videosdk.live/v1/meeting-recordings/:id",
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

url = "https://api.videosdk.live/v1/meeting-recordings/:id"

headers = {
  'Authorization': '$YOUR_JWT_TOKEN'
}

response = requests.request("DELETE", url, headers=headers)

print(response.text)

```

</TabItem>
<TabItem value="ruby">

```ruby
require "uri"
require "net/http"

url = URI("https://api.videosdk.live/v1/meeting-recordings/:id")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = "$YOUR_JWT_TOKEN"

response = https.request(request)
puts response.read_body

```

</TabItem>
<TabItem value="result">

```
"Room Recording deleted successfully"
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Request

<MethodListGroup>
    <MethodListGroup>
      <MethodListHeading heading="Path Parameters" />
      <MethodListItemLabel name="id" option={"optional"} type={"string"} />
    </MethodListGroup>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
  </MethodListItemLabel>
</MethodListGroup>
