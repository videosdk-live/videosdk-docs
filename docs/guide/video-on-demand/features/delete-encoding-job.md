---
title: Delete Encoding Job (VOD) | Video SDK Documentation
hide_title: false
hide_table_of_contents: false
description: Video on demand (VOD) delete encoding documents job how to interact with the video encoding API It's our go-to reference whether you're just getting started.
sidebar_label: Delete Encoding Job
pagination_label: Delete Encoding Job
keywords:
  - Delete Encoding Job
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: delete-encoding-job
---

# Delete Encoding Job

This guide will provide an overview of how we can delete encoded job using VideoSDK API.

**NOTE**: You can delete only those encoding job whose current status is **queued**.

### Path Params

| Property Name | Type   | Description                |
| ------------- | ------ | -------------------------- |
| jobId         | string | unique id of encoding job. |

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
curl --request DELETE \
  --url 'https://api.videosdk.live/v1/encoder/jobs/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/encoder/jobs/${id}";
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

url = "https://api.videosdk.live/v1/encoder/jobs/${id}"

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

url = URI("https://api.videosdk.live/v1/encoder/jobs/${id}")

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

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"string"}  description="Unique identifier of encoded job." />
      <MethodListItemLabel name="status"  type={"string"}  description="status of encoding job either queued, processing, completed, failed." />
      <MethodListItemLabel name="videoId"  type={"string"}  description="unique identifier of video file." />
      <MethodListItemLabel name="videoUrl"  type={"string"}  description="Url of video where the video is stored." />
        <MethodListItemLabel name="presets"  type={"array"}  description="It contains an array of object that you provided in body params." />
        <MethodListItemLabel name="thumbnails" type={"array"} description="It contains an array of object that you provided in body params."/>
        <MethodListItemLabel name="user" type={"object"} description="User information such as id of that user, name and email."/>
    </MethodListGroup>

  </MethodListItemLabel>
</MethodListGroup>
