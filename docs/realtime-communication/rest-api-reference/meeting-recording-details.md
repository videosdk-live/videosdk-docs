---
sidebar_position: 1
---

# Meeting recording details

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

curl -L -X GET 'https://api.zujonow.com/v1/meeting-recordings/:id' \
-H 'Authorization: $YOUR_JWT_TOKEN'

```

</TabItem>
<TabItem value="node">

```js
var request = require("request");
var options = {
  method: "GET",
  url: "https://api.zujonow.com/v1/meeting-recordings/:id",
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

url = "https://api.zujonow.com/v1/meeting-recordings/:id"

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

url = URI("https://api.zujonow.com/v1/meeting-recordings/:id")

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
...
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
