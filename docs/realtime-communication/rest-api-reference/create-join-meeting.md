---
sidebar_position: 1
---

# Create/Join Meeting using API

## Using create/join meeting API

### Create meeting

You have to call simple API to create meeting room.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL request creates meeting', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
cURL -H "Content-Type: application/json" \
     -H "Authorization: $YOUR_JWT_TOKEN" \
     -XPOST \
     https://api.zujonow.com/v1/meetings
```

</TabItem>
<TabItem value="node">

```js
var request = require("node-fetch");

var options = {
  method: "POST",
  url: "https://api.zujonow.com/v1/meetings",
  headers: { authorization: `${YOUR_JWT_TOKEN}` },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.zujonow.com/v1/meetings"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.zujonow.com/v1/meetings")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["authorization"] = "Bearer #{YOUR_JWT_TOKEN}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "meetingId":"jpkf-iool-64ox"
}
```

</TabItem>
</Tabs>

### Validate existing meeting id

To validate existing meeting id, before joining use following API.
<Tabs
defaultValue="curl"
values={[
{label: 'cURL request creates meeting', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
cURL -H "Content-Type: application/json" \
     -H "Authorization: $YOUR_JWT_TOKEN" \
     -XPOST \
     https://api.zujonow.com/v1/meetings/${meetingId}
```

</TabItem>
<TabItem value="node">

```js
var request = require("request");

var options = {
  method: "POST",
  url: "https://api.zujonow.com/v1/meetings/${meetingId}",
  headers: { authorization: `${YOUR_JWT_TOKEN}` },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.zujonow.com/v1/meetings/${meetingId}"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.zujonow.com/v1/meetings/${meetingId}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["authorization"] = "Bearer #{YOUR_JWT_TOKEN}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "meetingId":"jpkf-iool-64ox"
}
```

</TabItem>
</Tabs>
