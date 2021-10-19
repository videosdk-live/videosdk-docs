---
sidebar_position: 1
---

# Get Encoding Job Details

## Using encoding job details API

Get all the details of encoding job in one request.

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
curl --request GET \
  --url 'https://api.videosdk.live/v1/encoder/jobs/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/encoder/jobs/${id}";
const options = {
  method: "GET",
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

url = "https://api.videosdk.live/v1/encoder/jobs/${id}"

headers = {"Accept": "application/json", "Authorization": "jwt token goes here"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.videosdk.live/v1/encoder/jobs/${id}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'jwt token goes here'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "status": "completed",
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
  "updatedAt": "2021-03-18T08:39:55.069Z",
  "startedAt": "2021-03-18T08:39:38.147Z",
  "finishedAt": "2021-03-18T08:39:55.057Z",
  "files": [
    {
      "meta": {
        "resolution": {
          "width": 360,
          "height": 640
        },
        "format": "mov,mp4,m4a,3gp,3g2,mj2",
        "duration": 20.04
      },
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/videos/605311d8bba24b4d700c8c4a.mp4",
      "size": 1572953,
      "type": "video",
      "createdAt": "2021-03-18T08:39:52.743Z",
      "updatedAt": "2021-03-18T08:39:52.743Z",
      "fileUrl": "https://cdn.videosdk.live/files/videos/604efc189036d077e3bd03bd.mp4",
      "id": "605311d8bba24b4d700c8c4b"
    },
    {
      "meta": {
        "resolution": {
          "width": 480,
          "height": 854
        },
        "format": "hls",
        "duration": 20.04
      },
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/videos/605311d9bba24b4d700c8c4d",
      "size": 5755392,
      "type": "x-tar",
      "createdAt": "2021-03-18T08:39:53.446Z",
      "updatedAt": "2021-03-18T08:39:53.446Z",
      "fileUrl": "https://cdn.videosdk.live/files/videos/605311d9bba24b4d700c8c4d/index.m3u8",
      "id": "605311d9bba24b4d700c8c4e"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311d9bba24b4d700c8c4f.jpg",
      "size": 24155,
      "type": "image",
      "createdAt": "2021-03-18T08:39:53.830Z",
      "updatedAt": "2021-03-18T08:39:53.830Z",
      "fileUrl": "https://cdn.videosdk.live/files/images/605311d9bba24b4d700c8c4f.jpg",
      "id": "605311d9bba24b4d700c8c50"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311dabba24b4d700c8c51.jpg",
      "size": 3647,
      "type": "image",
      "createdAt": "2021-03-18T08:39:54.140Z",
      "updatedAt": "2021-03-18T08:39:54.140Z",
      "fileUrl": "https://cdn.videosdk.live/files/images/605311dabba24b4d700c8c51.jpg",
      "id": "605311dabba24b4d700c8c52"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311dabba24b4d700c8c53.webp",
      "size": 14976,
      "type": "image",
      "createdAt": "2021-03-18T08:39:54.455Z",
      "updatedAt": "2021-03-18T08:39:54.455Z",
      "fileUrl": "https://cdn.videosdk.live/files/images/605311dabba24b4d700c8c53.webp",
      "id": "605311dabba24b4d700c8c54"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311dabba24b4d700c8c55.webp",
      "size": 1296,
      "type": "image",
      "createdAt": "2021-03-18T08:39:54.868Z",
      "updatedAt": "2021-03-18T08:39:54.868Z",
      "fileUrl": "https://cdn.videosdk.live/files/images/605311dabba24b4d700c8c55.webp",
      "id": "605311dabba24b4d700c8c56"
    }
  ],
  "id": "605311c86efd284e474c5c76"
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
        <MethodListItemLabel name="id" type={"string"} />
        <MethodListItemLabel name="status"  type={"string"} />
        <MethodListItemLabel name="videoId"  type={"string"} />
        <MethodListItemLabel name="presets" type={"Array<object>"} >
          <MethodListGroup>
            <MethodListItemLabel name="resolutions" description={"Possible values are 240, 360, 720, 1080 and 4k"}  type={"Array<string>"}  >
            </MethodListItemLabel>
            <MethodListItemLabel name="format"  type={"string"} />
            <MethodListItemLabel name="id"  type={"string"} />
          </MethodListGroup>
        </MethodListItemLabel>
        <MethodListItemLabel name="thumbnails" option={"optional"} type={"Array<object>"} >
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
        <MethodListItemLabel name="files" type={"Array<object>"} >
          <MethodListGroup>
            <MethodListItemLabel name="meta" type={"object"}>
              <MethodListItemLabel name="resolution" type={"object"} >
                <MethodListItemLabel name="width" type={"number"} />
                <MethodListItemLabel name="height" type={"number"} />
              </MethodListItemLabel>
            </MethodListItemLabel>
            <MethodListItemLabel name="format" type={"string"} />
            <MethodListItemLabel name="duration" type={"number"} />
          </MethodListGroup>
          <MethodListItemLabel name="jobId" type={"string"} />
          <MethodListItemLabel name="filePath" type={"string"} />
          <MethodListItemLabel name="size" type={"number"} />
          <MethodListItemLabel name="type" type={"string"} />
          <MethodListItemLabel name="createdAt" type={"date"} />
          <MethodListItemLabel name="updatedAt" type={"date"} />
          <MethodListItemLabel name="fileUrl" type={"string"} />
          <MethodListItemLabel name="id" type={"string"} />
        </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
