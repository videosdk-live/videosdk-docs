---
sidebar_position: 1
---

# Create New URL

## Using create new url API

Create new URL API will create new reference of url on our server where you can upload video further.

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
curl --L --X POST 'https://api.videosdk.live/v1/files' \
--header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
var fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/files";
var options = {
  method: "POST",
  headers: {
    Authorization: `${YOUR_JWT_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
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

url = "https://api.videosdk.live/v1/files"

headers = {
    "Authorization": `${YOUR_JWT_TOKEN}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.videosdk.live/v1/files")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/json'
request["Content-Type"] = 'application/json'
request["Authorization"] = `${YOUR_JWT_TOKEN}`

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```json
{
  "url": "https://storage-api.videosdk.live/v1/files"
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
      <MethodListItemLabel name="url"  type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
