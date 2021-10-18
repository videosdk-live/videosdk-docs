---
title: List All Files
hide_title: false
hide_table_of_contents: false
description: This guide will explain list of all files.
sidebar_label: List All Files
pagination_label: List All Files
keywords:
  - list all files
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: list-all-files
---

# List All Files

This guide will provide an overview of how to list all files that you created by passing userId as query parameter.

### Query Params

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| userId        | string | Unique id of user. |

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
  --url 'https://api.zujonow.com/v1/files?userId=<Your unique id>&page=1&perPage=20' \
  --header 'Authorization: `jwt token goes here`'
```

</TabItem>
<TabItem value="node">

```js
const fetch = require("node-fetch");

const url =
  "https://api.zujonow.com/v1/files?userId=<Your unique id>&page=1&perPage=20";
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

url = "https://api.zujonow.com/v1/files"

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

url = URI("https://api.zujonow.com/v1/files?userId=<Your unique id>&page=1&perPage=20")

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
  "pageInfo": {
    "currentPage": 1,
    "perPage": 20,
    "lastPage": 1
  },
  "data": [
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
        "filePath": "files/videos/6052e0064b442a2f16018373.mp4",
        "size": 3965342,
        "type": "video",
        "fileUrl": "https://cdn.zujonow.com/files/videos/6052e0064b442a2f16018373.mp4",
        "id": "6052e0064b442a2f16018374"
    },
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
      <MethodListItemLabel name="id"  type={"string"}  description="Unique identifier of video file." />
      <MethodListItemLabel name="type"  type={"string"}  description="type of file uploaded video or image." />
      <MethodListItemLabel name="size"  type={"number"}  description="size of uploaded file(in bytes)." />
      <MethodListItemLabel name="meta"  type={"object"}  description="information about uploaded file such as resolution, format, etc." />
        <MethodListItemLabel name="fileUrl"  type={"string"}  description="The url where the file is stored." />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
