---
sidebar_position: 1
sidebar_label: Get Session Details
---

# Get Session Details

Use the following Rest API to list session details.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL request', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js

curl -L -X GET 'https://api.videosdk.live/v1/meeting-sessions/:id' \
-H 'Authorization: $YOUR_JWT_TOKEN'

```

</TabItem>
<TabItem value="node">

```js
var request = require("request");
var options = {
  method: "GET",
  url: "https://api.videosdk.live/v1/meeting-sessions/:id",
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

url = "https://api.videosdk.live/v1/meeting-sessions/:id"

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

url = URI("https://api.videosdk.live/v1/meeting-sessions/:id")

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
    "id": "616e79f7ba68c7768bfd18bf",
    "meetingId": "ywnm-eicr-d55x",
    "start": "2021-10-19T07:55:35.807Z",
    "end": "2021-10-19T07:55:39.941Z",
    "activeDuration": 0,
    "participants": [
        {
            "participantId": "wcrkkrf4",
            "name": "Chintan Rajpara",
            "timelog": [
                {
                    "start": "2021-10-19T07:55:36.316Z",
                    "end": "2021-10-19T07:55:39.937Z"
                }
            ]
        }
    ]
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
          <MethodListItemLabel name="id"  type={"string"} />
          <MethodListItemLabel name="meetingId"  type={"string"} />
          <MethodListItemLabel name="chatLink" type={"string"} />
          <MethodListItemLabel name="start"  type={"date"} />
          <MethodListItemLabel name="end"  type={"date"} />
          <MethodListItemLabel name="activeDuration" type={"number"} >
          <MethodListItemLabel name="participants" type={"Array<object>"} />
            <MethodListGroup>
              <MethodListItemLabel name="participantId"  type={"string"} />
              <MethodListItemLabel name="name"  type={"string"} />
               <MethodListItemLabel name="timelog" type={"Array<object>"} />
               <MethodListGroup>
                    <MethodListItemLabel name="start"  type={"date"} />
                    <MethodListItemLabel name="end"  type={"date"} />
                </MethodListGroup>
            </MethodListGroup>
          </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
