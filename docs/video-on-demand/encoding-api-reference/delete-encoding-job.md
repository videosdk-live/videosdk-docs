---
sidebar_position: 1
---

# Delete Encoding Job

## Using delete encoding job API

Delete encoding job reference from the videosdk.live

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
curl --request DELETE \
  --url 'https://api.zujonow.com/v1/encoder/jobs/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/encoder/jobs/${id}";
const options = {
  method: "DELETE",
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

url = "https://api.zujonow.com/v1/encoder/jobs/${id}"

headers = {"Accept": "application/json", "Authorization": "jwt token goes here"}

response = requests.request("DELETE", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.zujonow.com/v1/encoder/jobs/${id}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'jwt token goes here'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{{
  "status": "queued",
  "videoId": "6053115ebba24b4d700c8c49",
  "presets": [
    {
      "resolutions": ["240", "360", "480"],
      "id": "60531471e32e8e4eaea094ff",
      "format": "hls"
    },
    {
      "resolutions": ["360"],
      "id": "60531471e32e8e4eaea09500",
      "format": "mp4"
    }
  ],
  "webhookUrl": "https://<your-website-address>/<path>",
  "thumbnails": [
    {
      "resolutions": ["360"],
      "formats": ["jpg", "webp"],
      "filters": ["none", "blur"],
      "id": "60531471e32e8e4eaea09501",
      "timestamp": "00:00:03"
    }
  ],
  "createdAt": "2021-03-18T08:50:57.438Z",
  "updatedAt": "2021-03-18T08:50:57.438Z",
  "id": "60531471e32e8e4eaea094fe"
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
      <MethodListHeading heading="Response" />
      <MethodListItemLabel name="status"  type={"string"} />
      <MethodListItemLabel name="videoId"  type={"string"} />
      <MethodListItemLabel name="presets" type={"Array<object>"} >
        <MethodListGroup>
          <MethodListItemLabel name="resolutions" description={"Possible values are 240, 360, 720, 1080 and 4k"}  type={"Array<string>"}  >
          </MethodListItemLabel>
          <MethodListItemLabel name="format" description={"Possible values are hls and mp4"}  type={"string"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="thumbnails"  type={"Array<object>"} >
        <MethodListGroup>
          <MethodListItemLabel name="timestamp" type={"string"} />
          <MethodListItemLabel name="resolutions" type={"Array<string>"}  >
          </MethodListItemLabel>
          <MethodListItemLabel name="formats" type={"Array<string>"}  >
          </MethodListItemLabel>
          <MethodListItemLabel name="filters" type={"Array<string>"}  >
          </MethodListItemLabel>
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="webhookUrl" type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
