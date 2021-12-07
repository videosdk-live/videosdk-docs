---
title: Video Upload File (VOD) | Video SDK Documentation
hide_title: false
hide_table_of_contents: false
description: Video on demand (VOD) video upload file documents how to interact with the video encoding API It's our go-to reference whether you're just getting started.
sidebar_label: Upload File
pagination_label: Upload File
keywords:
  - upload file
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: upload-file
---

# Upload File

This guide will provide an overview of how to upload video/image using generated token , for token generation you can follow [Authentication](/docs/guide/video-on-demand/authentication).

Upload file API provides end-to-end secure way to upload your file directly to our servers from your client app.

### Body Params

| Property Name | Type            | Description                          |
| ------------- | --------------- | ------------------------------------ |
| file          | form-data/ file | Video file you would like to upload. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'RESPONSE', value: 'response'},
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

<TabItem value="response">

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
  "fileUrl": "https://cdn.zujonow.com/files/videos/6052e0064b442a2f16018373.mp4",
  "id": "6052e0064b442a2f16018374"
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
        <MethodListItemLabel name="fileUrl"  type={"string"}  description="The url where the file is stored." />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
