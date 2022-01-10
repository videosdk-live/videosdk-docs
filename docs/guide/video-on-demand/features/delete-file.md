---
title: Delete file (VOD) | Video SDK Documentation
hide_title: false
hide_table_of_contents: false
description: Video on demand (VOD) delete file documents how to interact with the video encoding API It's our go-to reference whether you're just getting started.
sidebar_label: Delete file
pagination_label: Delete file
keywords:
  - Delete file
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: delete-file
---

# Delete File

This guide will provide an overview of delete particular file by passing file id in path params.

### Path Params

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id of file. |

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
curl --request DELETE \
  --url 'https://api.videosdk.live/v1/files/${id}' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/files/${id}";
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

url = "https://api.videosdk.live/v1/files/${id}"

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

url = URI("https://api.videosdk.live/v1/files/${id}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Accept"] = 'application/json'
request["Authorization"] = 'jwt token goes here'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="response">

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
  "fileUrl": "https://cdn.videosdk.live/uploads/videos/6052ea0f2dbbd93351b7bdf5.mp4",
  "id": "6052ea132dbbd93351b7bdf6"
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
      <MethodListItemLabel name="id"  type={"string"}  description="Unique identifier of file." />
      <MethodListItemLabel name="type"  type={"string"}  description="type of file uploaded video or image." />
      <MethodListItemLabel name="size"  type={"number"}  description="size of uploaded file(in bytes)." />
      <MethodListItemLabel name="meta"  type={"object"}  description="information about uploaded file such as resolution, format, etc." />
        <MethodListItemLabel name="fileUrl"  type={"string"}  description="The url where the video is stored." />
        <MethodListItemLabel name="user" type={"object"} description="user info such as email, name and id of the user."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
