---
title: Create encoding Job (VOD) | Video SDK Documentation
hide_title: false
hide_table_of_contents: false
description: Video on demand (VOD) Create encoding job documents how to interact with the video encoding API It's our go-to reference whether you're just getting started.
sidebar_label: Create Encoding Job
pagination_label: Create Encoding Job
keywords:
  - Create Encoding Job
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: create-encoding-job
---

# Create Encoding Job

Encoding API converts source video into compressed version in multiple formats and resolutions up to 1080ps.

Once you create the encoding job, then you will be able to see the status of encoding job and also more details about encoding jobs in your [dashboard](https://app.videosdk.live/vod/videos).

![Create Encoding Job](/img/tutorial/create_encoding_job.png)

### Body Params

| Property Name | Type   | Description                                                                               |
| ------------- | ------ | ----------------------------------------------------------------------------------------- |
| videoId       | string | unique id of video file.                                                                  |
| videoUrl      | string | Url of video where the video is stored.                                                   |
| presets       | array  | It contains an object with the properties of resolutions and format.                      |
| thumbnails    | array  | It contains an object with the properties of timestamp, resolutions, formats and filters. |
| webhookUrl    | string | It's URL, where we notify, once encoding is complete.                                     |

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
{label: 'RESPONSE', value: 'response'},
]}>
<TabItem value="curl">

```js
curl --L --X POST 'https://api.videosdk.live/v1/encoder/jobs' \
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

const url = "https://api.videosdk.live/v1/encoder/jobs";
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

url = "https://api.videosdk.live/v1/encoder/jobs"

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

url = URI("https://api.videosdk.live/v1/encoder/jobs")

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
<TabItem value="response" >

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
      <MethodListItemLabel name="id"  type={"string"}  description="Unique identifier of encoded job." />
      <MethodListItemLabel name="status"  type={"string"}  description="status of encoding job either queued, processing, completed, failed." />
      <MethodListItemLabel name="videoId"  type={"number"}  description="Unique identifier of video file." />
      <MethodListItemLabel name="videoUrl"  type={"object"}  description="Url of video where the video is stored." />
        <MethodListItemLabel name="presets"  type={"array"}  description="It contains an array of object that you provided in body params. " />
        <MethodListItemLabel name="thumbnails" type={"array"} description="It contains an array of object that you provided in body params."/>
        <MethodListItemLabel name="webhookUrl" type={"string"} description="It's Url, where we notify once encoding is complete."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
