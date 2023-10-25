---
sidebar_position: 1
title: "Get Recording Details"
---

# Get Recording Details - API

Use the following Rest API to get recording details.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL request', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js

curl -L -X GET 'https://api.videosdk.live/v1/meeting-recordings/:id' \
-H 'Authorization: $YOUR_JWT_TOKEN'

```

</TabItem>
<TabItem value="node">

```js
var request = require("request");
var options = {
  method: "GET",
  url: "https://api.videosdk.live/v1/meeting-recordings/:id",
  headers: {
    Authorization: "$YOUR_JWT_TOKEN",
  },
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.videosdk.live/v1/meeting-recordings/:id"

headers = {
  'Authorization': '$YOUR_JWT_TOKEN'
}

response = requests.request("GET", url, headers=headers)

print(response.text)

```

</TabItem>
<TabItem value="ruby">

```ruby
require "uri"
require "net/http"

url = URI("https://api.videosdk.live/v1/meeting-recordings/:id")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "$YOUR_JWT_TOKEN"

response = https.request(request)
puts response.read_body

```

</TabItem>
<TabItem value="result">

```js
{
  "userId": "5f7edbb14c938bcd42944517",
  "meetingId": "hv6a-uwrj-8jbd",
  "origFileId": "60df15dc1b5d6a3205573786",
  "jobId": "60df15df7433b02e7d06853a",
  "createdAt": "2021-07-02T13:34:23.768Z",
  "updatedAt": "2021-07-02T13:34:30.616Z",
  "fileId": "60df15e61b5d6a3205533289",
  "file": {
      "meta": {
          "resolution": {
              "width": 1280,
              "height": 720
          },
          "format": "mov,mp4,m4a,3gp,3g2,mj2",
          "duration": 3.561
      },
      "jobId": "60df15df7433b02e1d06653a",
      "filePath": "encoded/videos/60df15dc1b5d6a8205573286/720.mp4",
      "size": 613596,
      "type": "video",
      "createdAt": "2021-07-02T13:34:30.566Z",
      "updatedAt": "2021-07-02T13:34:30.566Z",
      "fileUrl": "https://cdn.videosdk.live/encoded/videos/60df15dc1b5d6a8205573286/720.mp4",
      "id": "60df15e61b5d6a3805573289"
  },
  "id": "60df15df7433b02e3d06653c"
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Request

<MethodListGroup>
    <MethodListGroup>
      <MethodListHeading heading="Path Parameters" />
      <MethodListItemLabel name="id" option={"optional"} type={"string"} />
    </MethodListGroup>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
          <MethodListItemLabel name="userId"  type={"string"} />
          <MethodListItemLabel name="meetingId"  type={"string"} />
          <MethodListItemLabel name="sessionId"  type={"string"} />
          <MethodListItemLabel name="origFileId"  type={"string"} />
          <MethodListItemLabel name="jobId"  type={"string"} />
          <MethodListItemLabel name="fileId"  type={"string"} />
          <MethodListItemLabel name="file" type={"object"} >
            <MethodListGroup>
                <MethodListItemLabel name="meta" type={"object"} >
                  <MethodListGroup>
                          <MethodListItemLabel name="resolution" type={"object"} >
                            <MethodListGroup>
                                <MethodListItemLabel name="width"  type={"number"} />
                                <MethodListItemLabel name="height"  type={"number"} />
                            </MethodListGroup>
                          </MethodListItemLabel>
                      <MethodListItemLabel name="format"  type={"string"} />
                      <MethodListItemLabel name="duration"  type={"number"} />
                  </MethodListGroup>
                </MethodListItemLabel>
              <MethodListItemLabel name="jobId"  type={"string"} />
              <MethodListItemLabel name="filePath"  type={"string"} />
              <MethodListItemLabel name="size"  type={"number"} />
              <MethodListItemLabel name="type"  type={"string"} />
              <MethodListItemLabel name="fileUrl"  type={"string"} />
              <MethodListItemLabel name="updatedAt"  type={"date"} />
              <MethodListItemLabel name="createdAt"  type={"date"} />
              <MethodListItemLabel name="id"  type={"string"} />
            </MethodListGroup>
          </MethodListItemLabel>
          <MethodListItemLabel name="createdAt"  type={"date"} />
          <MethodListItemLabel name="updatedAt"  type={"date"} />
          <MethodListItemLabel name="id"  type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
