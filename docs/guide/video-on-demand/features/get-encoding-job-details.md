---
title: Get Encoding Job Details
hide_title: false
hide_table_of_contents: false
description: This guide will explain get encoding job details.
sidebar_label: Get Encoding Job Details
pagination_label: Get Encoding Job Details
keywords:
  - Get Encoding Job Details
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: get-encoding-job-details
---

# Get Encoding Job Details

In this guide, you will get to know about how to get details of particular encoding job by passing jobId as path parameter.

If you wish you will also see the job details in your [dashboard](https://app.videosdk.live/vod/videos).

### Path Params

| Property Name | Type   | Description                |
| ------------- | ------ | -------------------------- |
| jobId         | string | unique id of encoding job. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESPONSE', value: 'response'},
]}>
<TabItem value="curl">

```js
curl --request GET \
  --url 'https://api.zujonow.com/v1/encoder/jobs/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.zujonow.com/v1/encoder/jobs/${id}";
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

url = "https://api.zujonow.com/v1/encoder/jobs/${id}"

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

url = URI("https://api.zujonow.com/v1/encoder/jobs/${id}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'jwt token goes here'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="response">

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
      "fileUrl": "https://cdn.zujonow.com/files/videos/604efc189036d077e3bd03bd.mp4",
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
      "fileUrl": "https://cdn.zujonow.com/files/videos/605311d9bba24b4d700c8c4d/index.m3u8",
      "id": "605311d9bba24b4d700c8c4e"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311d9bba24b4d700c8c4f.jpg",
      "size": 24155,
      "type": "image",
      "fileUrl": "https://cdn.zujonow.com/files/images/605311d9bba24b4d700c8c4f.jpg",
      "id": "605311d9bba24b4d700c8c50"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311dabba24b4d700c8c51.jpg",
      "size": 3647,
      "type": "image",
      "fileUrl": "https://cdn.zujonow.com/files/images/605311dabba24b4d700c8c51.jpg",
      "id": "605311dabba24b4d700c8c52"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311dabba24b4d700c8c53.webp",
      "size": 14976,
      "type": "image",
      "fileUrl": "https://cdn.zujonow.com/files/images/605311dabba24b4d700c8c53.webp",
      "id": "605311dabba24b4d700c8c54"
    },
    {
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/images/605311dabba24b4d700c8c55.webp",
      "size": 1296,
      "type": "image",
      "fileUrl": "https://cdn.zujonow.com/files/images/605311dabba24b4d700c8c55.webp",
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

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"String"}  description="Unique identifier of encoded job." />
      <MethodListItemLabel name="status"  type={"String"}  description="status of encoding job either queued, processing, completed, failed." />
      <MethodListItemLabel name="videoId"  type={"String"}  description="unique identifier of video file." />
      <MethodListItemLabel name="videoUrl"  type={"String"}  description="Url of video where the video is stored." />
        <MethodListItemLabel name="presets"  type={"Array"}  description="It contains an array of object that you provided in body params." />
        <MethodListItemLabel name="thumbnails" type={"Array"} description="It contains an array of object that you provided in body params."/> 
        <MethodListItemLabel name="files" type={"Array"} description="It contains an array of object with the properties of meta information about file, jobId, size, fileUrl, type and id of the file."/>
        <MethodListItemLabel name="user" type={"Object"} description="User information such as id of that user, name and email."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
