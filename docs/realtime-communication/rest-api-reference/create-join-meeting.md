---
sidebar_position: 1
sidebar_label: Create Meeting using API
---

# Create/Join Meeting using API

### Create meeting

Use the following Rest API to create new meeting.

:::note
You can take advantage of regional API to decrease latency in video calling.

To achieve region based meetings, just pass `region : REGION_CODE` parameter in `create-meeting` request Body.

Currently the below regions are supported:

- `sg001` Region Code for Singapore, SG.
- `sg002` Region Code for Singapore, SG. (Another region in Sindapore)
- `in002` Region Code for Bangalore, IN.
- `us001` Region Code for Fremont, CA.
- `eu001` Region Code for Frankfurt, DE.

In case you are not providing any region code, the default region will be `sg001`.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
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
     -d '{ "region": "us001", "userMeetingId": "unicorn" }' \
     -XPOST \
     https://api.videosdk.live/v1/meetings
```

</TabItem>
<TabItem value="node">

```js
var request = require("node-fetch");

var options = {
  method: "POST",
  url: "https://api.videosdk.live/v1/meetings",
  headers: {
    authorization: `${YOUR_JWT_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ region: "sg001", userMeetingId: "unicorn" }), // region: sg001 || uk001 || us001
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

url = "https://api.videosdk.live/v1/meetings"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

response = requests.request("GET", url, headers=headers,json={"region": "sg001", "userMeetingId": "unicorn"}) # region: sg001 || uk001 || us001

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.videosdk.live/v1/meetings")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url, 'Content-Type' => 'application/json')
request.authorization = "Bearer #{YOUR_JWT_TOKEN}"
request.body = {region: 'sg001', userMeetingId: 'unicorn'}.to_json # region: sg001 || uk001 || us001
response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "meetingId": "87i6-bvw8-dtn1",
  "userMeetingId": "unicorn",
  "userId": "5fa671e77b80d58c11cbca95",
  "region": "us001",
  "createdAt": "2022-01-05T06:41:16.018Z",
  "updatedAt": "2022-01-05T06:41:16.018Z",
  "id": "61d53d8c964704379e7d927a"
}
```

</TabItem>
</Tabs>

### Validate existing meeting id

To validate existing meeting id, before joining use following API.
<Tabs
defaultValue="curl"
groupId={"server-group-id"}
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
     https://api.videosdk.live/v1/meetings/${meetingId}
```

</TabItem>
<TabItem value="node">

```js
var request = require("request");

var options = {
  method: "POST",
  url: "https://api.videosdk.live/v1/meetings/${meetingId}",
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

url = "https://api.videosdk.live/v1/meetings/${meetingId}"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.videosdk.live/v1/meetings/${meetingId}")

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
  "meetingId": "87i6-bvw8-dtn1",
  "userMeetingId": "unicorn",
  "userId": "5fa671e77b80d58c11cbca95",
  "region": "us001",
  "createdAt": "2022-01-05T06:41:16.018Z",
  "updatedAt": "2022-01-05T06:41:16.018Z",
  "id": "61d53d8c964704379e7d927a"
}
```

</TabItem>
</Tabs>
