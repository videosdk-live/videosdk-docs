---
sidebar_position: 1
---

# Create Encoding Job

### Using create encoding job API

Encoding API converts source video into compressed version in multiple resolutions up to 1080p resolutions.

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
curl --L --X POST 'https://api.zujonow.com/api/encoder/jobs' \
--header 'Authorization: `your token goes here`' \
--header 'Content-Type: application/json' \
--data-raw '
{
    "videoId": "6053115ebba24b4d700c8c49",
    "presets": [
        {
            "resolutions": ["240", "360", "480"],
            "format": "hls"
        }, {
            "resolutions": ["360"],
            "format": "mp4"
        }
    ],
    "thumbnails": [
        {
            "timestamp": "00:00:03",
            "resolutions": ["360"],
            "formats": ["jpg", "webp"],
            "filters": ["none", "blur"]
        }
    ],
    "webhookUrl":"https://<your-website-address>/<path>"
}'
```

</TabItem>
<TabItem value="node">

```js
var fetch = require("node-fetch");

const url = "https://api.zujonow.com/api/encoder/jobs";
var options = {
  method: "POST",
  headers: {
    Authorization: `${YOUR_JWT_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    videoId: "6053115ebba24b4d700c8c49",
    presets: [
      {
        resolutions: ["240", "360", "480"],
        format: "hls",
      },
      {
        resolutions: ["360"],
        format: "mp4",
      },
    ],
    thumbnails: [
      {
        timestamp: "00:00:03",
        resolutions: ["360"],
        formats: ["jpg", "webp"],
        filters: ["none", "blur"],
      },
    ],
    webhookUrl: "https://<your-website-address>/<path>",
  }),
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

payload = {
  videoId: "6053115ebba24b4d700c8c49",
  presets: [
    {
      resolutions: ["240", "360", "480"],
      format: "hls",
    },
    {
      resolutions: ["360"],
      format: "mp4",
    },
  ],
  thumbnails: [
    {
      timestamp: "00:00:03",
      resolutions: ["360"],
      formats: ["jpg", "webp"],
      filters: ["none", "blur"],
    },
  ],
  webhookUrl: "https://<your-website-address>/<path>",
}

headers = {
    "Authorization": `${YOUR_JWT_TOKEN}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.zujonow.com/v1/livestreams")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/json'
request["Content-Type"] = 'application/json'
request["Authorization"] = `${YOUR_JWT_TOKEN}`
request.body = {\"videoId\": \"6053115ebba24b4d700c8c49\",
    \"presets\": [
      {
        \"resolutions\": [\"240\", \"360\", \"480\"],
        \"format\": \"hls\",
      },
      {
        \"resolutions\": [\"360\"],
        \"format\": \"mp4\",
      },
    ],
    \"thumbnails\": [
      {
        \"timestamp\": \"00:00:03\",
        \"resolutions\": [\"360\"],
        \"formats\": [\"jpg\", \"webp\"],
        \"filters\": ["none", "blur"],
      },
    ],
    \"webhookUrl\": \"https://<your-website-address>/<path>",
  }

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result" >

```json
{
  "status": "queued",
  "videoId": "6053115ebba24b4d700c8c49",
  "presets": [
    {
      "resolutions": ["240", "360", "480"],
      "id": "605311c86efd284e474c5c77",
      "format": "hls"
    },
    {
      "resolutions": ["360"],
      "id": "605311c86efd284e474c5c78",
      "format": "mp4"
    }
  ],
  "webhookUrl": "https://<your-website-address>/<path>",
  "thumbnails": [
    {
      "resolutions": ["360"],
      "formats": ["jpg", "webp"],
      "filters": ["none", "blur"],
      "id": "605311c86efd284e474c5c79",
      "timestamp": "00:00:03"
    }
  ],
  "createdAt": "2021-03-18T08:39:36.764Z",
  "updatedAt": "2021-03-18T08:39:36.764Z",
  "id": "605311c86efd284e474c5c76"
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
      <MethodListItemLabel name="videoId" option={"required"}  type={"string"} />
      <MethodListItemLabel name="presets" option={"required"} type={"Array<object>"} >
        <MethodListItemLabel name="resolutions" option={"required"} description={"Possible values are 240, 360, 720, 1080 and 4k"}  type={"Array<string>"}  >
          </MethodListItemLabel>
        <MethodListItemLabel name="format" option={"required"} description={"Possible values are hls and mp4"}  type={"string"} />
      </MethodListItemLabel>
      <MethodListItemLabel name="thumbnails" option={"optional"} type={"Array<object>"} >
        <MethodListGroup>
          <MethodListItemLabel name="timestamp" option={"required if thumbnails"}  description={"Timestamp format would be 'HH:MM:SS' i.e. '00:00:03'"}  type={"string"} />
          <MethodListItemLabel name="resolutions"  option={"required if thumbnails"}description={"Possible values are '240', '360', '720', '1080' and '4K'"}  type={"Array<string>"}  >
          </MethodListItemLabel>
          <MethodListItemLabel name="formats" option={"required if thumbnails"} description={"Possible values are 'jpg' and 'webp'"}  type={"Array<string>"}  >
          </MethodListItemLabel>
          <MethodListItemLabel name="filters" option={"optional"} description={"Possible values are 'none' and 'blue'"}  type={"Array<string>"}  >
          </MethodListItemLabel>
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="webhookUrl" option={"required"}  type={"string"} /> 
      <MethodListItemLabel name="userData" option={"required"}  type={"object"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

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
