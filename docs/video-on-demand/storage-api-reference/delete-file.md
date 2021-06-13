---
sidebar_position: 1
---

# Delete File

## Using delete file API

Delete file reference from the videosdk.live

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
  --url 'https://api.zujonow.com/v1/files/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/files/${id}";
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

url = "https://api.zujonow.com/v1/files/${id}"

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

url = URI("https://api.zujonow.com/v1/files/${id}")

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
{
  "meta": {
    "resolution": {
      "width": 720,
      "height": 1280
    },
    "format": "mov,mp4,m4a,3gp,3g2,mj2",
    "duration": 20.032
  },
  "jobId": null,
  "filePath": "files/videos/6052ea0f2dbbd93351b7bdf5.mp4",
  "size": 3965342,
  "type": "video",
  "createdAt": "2021-03-18T05:50:11.677Z",
  "updatedAt": "2021-03-18T05:50:11.677Z",
  "fileUrl": "https://cdn.zujonow.com/files/videos/6052ea0f2dbbd93351b7bdf5.mp4",
  "id": "6052ea132dbbd93351b7bdf6"
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
      <MethodListItemLabel name="meta" type={"object"} >
        <MethodListGroup>
        <MethodListGroup>
          <MethodListItemLabel name="resolution"  type={"object"} >
            <MethodListItemLabel name="width"  type={"number"} />
            <MethodListItemLabel name="height"  type={"number"} />
          </MethodListItemLabel>
        </MethodListGroup>
        <MethodListItemLabel name="format"  type={"string"} />
        <MethodListItemLabel name="duration"  type={"number"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="jobId"  type={"string"} />
      <MethodListItemLabel name="filePath"  type={"string"} />
      <MethodListItemLabel name="size"  type={"number"} />
      <MethodListItemLabel name="type"  type={"string"} />
      <MethodListItemLabel name="createdAt"  type={"date"} />
      <MethodListItemLabel name="updatedAt"  type={"date"} />
      <MethodListItemLabel name="fileUrl"  type={"string"} />
      <MethodListItemLabel name="id"  type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
