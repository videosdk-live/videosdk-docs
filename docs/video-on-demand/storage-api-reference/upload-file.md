---
sidebar_position: 1
---

# Upload File

## Using upload file API

Upload file API provides end-to-end secure way to upload your file directly to our servers from your client app.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
curl --L --X POST 'https://storage-api.videosdk.live/v1/files' \
--header 'Authorization: `jwt token goes here`' \
--header 'Content-Type: multipart/form-data'
--form 'file=mock-video.mp4"'
```

</TabItem>
<TabItem value="node">

```js
var fetch = require("node-fetch");
let fs = require("fs");

const formData = new FormData();
formData.append("file", fs.createReadStream("mock-video.mp4"));

const url = "https://storage-api.videosdk.live/v1/files";
var options = {
  method: "POST",
  headers: {
    Authorization: `${YOUR_JWT_TOKEN}`,
  },
  body: formData,
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
```

</TabItem>

<TabItem value="result">

```json
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
  "createdAt": "2021-03-18T05:07:18.771Z",
  "updatedAt": "2021-03-18T05:07:18.771Z",
  "fileUrl": "https://cdn.videosdk.live/uploads/videos/6052e0064b442a2f16018373.mp4",
  "id": "6052e0064b442a2f16018374"
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
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="url"  type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Response

<MethodListGroup>
  <MethodListItemLabel name="__response"  type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Response" />
      <MethodListItemLabel name="meta" type={"object"} >
        <MethodListGroup>
        <MethodListGroup>
          <MethodListItemLabel name="resolution"  type={"object"} >
            <MethodListItemLabel name="width"  type={"number"} />
            <MethodListItemLabel name="height"  type={"number"} />
          </MethodListItemLabel>
        </MethodListGroup>
        <MethodListItemLabel name="format"  type={"string"} />
        <MethodListItemLabel name="duration"  type={"number"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="jobId"  type={"string"} />
      <MethodListItemLabel name="filePath"  type={"string"} />
      <MethodListItemLabel name="size"  type={"number"} />
      <MethodListItemLabel name="type"  type={"string"} />
      <MethodListItemLabel name="createdAt"  type={"date"} />
      <MethodListItemLabel name="updatedAt"  type={"date"} />
      <MethodListItemLabel name="fileUrl"  type={"string"} />
      <MethodListItemLabel name="id"  type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
