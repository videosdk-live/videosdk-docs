---
title: List Encoding Jobs
hide_title: false
hide_table_of_contents: false
description: This guide will explain List Encoding Jobs.
sidebar_label: List Encoding Jobs
pagination_label: List Encoding Jobs
keywords:
  - List Encoding Jobs
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: list-encoding-jobs
---

# List Encoding Jobs

This guide will provide an overview of how to list all encoding jobs that you created by passing userId as query parameter.

You can list same encoding job and original file information in [dashboard](https://app.videosdk.live/vod/videos).

![List Encoding Job](/img/tutorial/create_encoding_job.png)

### Query Params

| Property Name | Type   | Description       |
| ------------- | ------ | ----------------- |
| userId        | string | unique id of user |

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
  --url 'https://api.zujonow.com/v1/encoder/jobs?userId=<Your unique id>&page=1&perPage=20' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url =
  "https://api.zujonow.com/v1/encoder/jobs?userId=<Your unique id>&page=1&perPage=20";
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

url = "https://api.zujonow.com/v1/encoder/jobs"

querystring = {"userId":"Your unique id","page":"1","perPage":"25"}

headers = {"Accept": "application/json", "Authorization": "jwt token goes here"}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.zujonow.com/v1/encoder/jobs?userId=<Your unique id>&page=1&perPage=20")

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
  "pageInfo": {
    "currentPage": 1,
    "perPage": 20,
    "lastPage": 11
  },
  "data": [
    {
      "status": "completed",
      "videoId": "604efc059036d077e3bd03bc",
      "presets": [
        {
          "resolutions": ["240", "360", "480"],
          "id": "604efc0bf2bfa894b27133a0",
          "format": "hls"
        },
        {
          "resolutions": ["360"],
          "id": "604efc0bf2bfa894b27133a1",
          "format": "mp4"
        }
      ],
      "webhookUrl": "https://<your-website-address>/<path>",
      "thumbnails": [
        {
          "resolutions": ["360"],
          "formats": ["jpg", "webp"],
          "filters": ["none", "blur"],
          "id": "604efc0bf2bfa894b27133a2",
          "timestamp": "00:00:03"
        }
      ],
      "createdAt": "2021-03-15T06:17:47.622Z",
      "updatedAt": "2021-03-15T06:18:06.873Z",
      "startedAt": "2021-03-15T06:17:50.626Z",
      "finishedAt": "2021-03-15T06:18:06.871Z",
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
          "jobId": "604efc0bf2bfa894b271339f",
          "filePath": "files/videos/604efc189036d077e3bd03bd.mp4",
          "size": 1572953,
          "type": "video",
          "createdAt": "2021-03-15T06:18:00.306Z",
          "updatedAt": "2021-03-15T06:18:00.306Z",
          "fileUrl": "https://cdn.zujonow.com/files/videos/604efc189036d077e3bd03bd.mp4",
          "id": "604efc189036d077e3bd03be"
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
          "jobId": "604efc0bf2bfa894b271339f",
          "filePath": "files/videos/604efc199036d077e3bd03c0",
          "size": 5755392,
          "type": "x-tar",
          "createdAt": "2021-03-15T06:18:01.455Z",
          "updatedAt": "2021-03-15T06:18:01.455Z",
          "fileUrl": "https://cdn.zujonow.com/files/videos/604efc199036d077e3bd03c0/index.m3u8",
          "id": "604efc199036d077e3bd03c1"
        },
        {
          "jobId": "604efc0bf2bfa894b271339f",
          "filePath": "files/images/604efc1a9036d077e3bd03c2.jpg",
          "size": 24155,
          "type": "image",
          "createdAt": "2021-03-15T06:18:02.966Z",
          "updatedAt": "2021-03-15T06:18:02.966Z",
          "fileUrl": "https://cdn.zujonow.com/files/images/604efc1a9036d077e3bd03c2.jpg",
          "id": "604efc1a9036d077e3bd03c3"
        },
        {
          "jobId": "604efc0bf2bfa894b271339f",
          "filePath": "files/images/604efc1b9036d077e3bd03c4.jpg",
          "size": 3647,
          "type": "image",
          "createdAt": "2021-03-15T06:18:03.810Z",
          "updatedAt": "2021-03-15T06:18:03.810Z",
          "fileUrl": "https://cdn.zujonow.com/files/images/604efc1b9036d077e3bd03c4.jpg",
          "id": "604efc1b9036d077e3bd03c5"
        },
        {
          "jobId": "604efc0bf2bfa894b271339f",
          "filePath": "files/images/604efc1d9036d077e3bd03c6.webp",
          "size": 14976,
          "type": "image",
          "createdAt": "2021-03-15T06:18:05.896Z",
          "updatedAt": "2021-03-15T06:18:05.896Z",
          "fileUrl": "https://cdn.zujonow.com/files/images/604efc1d9036d077e3bd03c6.webp",
          "id": "604efc1d9036d077e3bd03c7"
        },
        {
          "jobId": "604efc0bf2bfa894b271339f",
          "filePath": "files/images/604efc1e9036d077e3bd03c8.webp",
          "size": 1296,
          "type": "image",
          "createdAt": "2021-03-15T06:18:06.711Z",
          "updatedAt": "2021-03-15T06:18:06.711Z",
          "fileUrl": "https://cdn.zujonow.com/files/images/604efc1e9036d077e3bd03c8.webp",
          "id": "604efc1e9036d077e3bd03c9"
        }
      ],
      "id": "604efc0bf2bfa894b271339f"
    }
    ...
  ]
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
      <MethodListItemLabel name="videoId"  type={"Number"}  description="Unique identifier of video file." />
      <MethodListItemLabel name="videoUrl"  type={"Object"}  description="Url of video where the video is stored." />
        <MethodListItemLabel name="presets"  type={"Array"}  description="It contains an array of object that you provided in body params. " />
        <MethodListItemLabel name="thumbnails" type={"Array"} description="It contains an array of object that you provided in body params."/>
        <MethodListItemLabel name="files" type={"Array"} description="It contains an array of object with the properties of meta information about file, jobId, size, fileUrl, type and id of the file."/>
        <MethodListItemLabel name="webhookUrl" type={"String"} description="It's Url, where we notify once encoding is complete."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
