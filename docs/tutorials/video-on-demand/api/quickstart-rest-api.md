---
title: Quickstart Video On Demand with REST API
hide_title: false
hide_table_of_contents: false
description: This tutorial will help you to integrate video on demand using REST API. it includes features such as adaptive video streaming and encoding of videos in multiple resolutions.
sidebar_label: with REST API
pagination_label: Quickstart Video On Demand with REST API
keywords:
  - video api
  - quickstart rest api
  - video on demand api
  - tutorials
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quickstart-rest-api
---

# Quickstart video on demand using REST API

## Step by step guide to integrate video on demand api in your app

This tutorial explains steps to integrate video streaming in your app.

### Step 1: Generate access token

An access token is required to call the ZujoNow APIs. You can generate one with the API key and secret mentioned in the developer portal at ZujoNow console.

Note: Please note that this code is meant to be written on your backend server. Do not reveal your secret key to anyone. This sample is in Node.js but you can write the same in any other programming language with the help of a JWT library. Please check <a href="https://jwt.io/">jwt.io</a> website for more details.

```js {19} title="server.js"
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const request = require("request");

const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-token", (req, res) => {
  const API_KEY = process.env.ZUJONOW_API_KEY;
  const SECRET_KEY = process.env.ZUJONOW_SECRET_KEY;
  const options = { expiresIn: "10m", algorithm: "HS256" };
  const payload = {
    apikey: API_KEY,
  };
  const token = jwt.sign(payload, SECRET_KEY, options);
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### Step 2: Create URL to upload video file

To upload your video on our servers, you first have to create signed URL.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
curl --L --X POST 'https://api.zujonow.com/v1/files' \
--header 'Authorization: `jwt token goes here`'
```

</TabItem>

<TabItem value="result">

```json
{
  "url": "https://storage-api.zujonow.com/v1/files"
}
```

</TabItem>
</Tabs>

### Step 3: Upload video file to signed URL

After creating signed URL, next step is to upload file on our server.

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
curl --L --X POST 'https://storage-api.zujonow.com/v1/files' \
--header 'Authorization: `jwt token goes here`' \
--header 'Content-Type: multipart/form-data'
--form 'file=mock-video.mp4"'
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
  "fileUrl": "https://cdn.zujonow.com/files/videos/6052e0064b442a2f16018373.mp4",
  "id": "6052e0064b442a2f16018374"
}
```

</TabItem>
</Tabs>

### Step 4: Submit encoding job

Encoding API converts source video into compressed version in multiple resolutions up to 4K resolutions.

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
curl --L --X POST 'https://api.zujonow.com/api/encoder/jobs' \
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

<TabItem value="result" >

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
  "createdAt": "2021-03-18T08:39:36.764Z",
  "updatedAt": "2021-03-18T08:39:36.764Z",
  "id": "605311c86efd284e474c5c76"
}
```

</TabItem>
</Tabs>

### Step 5: Wait until encoding webhook triggers

As soon as you submit encoding job, We will download file on our server and start encoding video in multiple resolutions.

When the video is ready for playback, the asset "status" changes to "completed".

The best way to get notified is to use `webhooks`. We will send you notification as soon as video will be ready to play.

### Step 6: Watch video

To play video, fetch `fileUrl` of video either from webhook or from the details API.

```js {11}
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

<video
  id="my-player"
  controls
  style="width: 100%; max-width: 500px;"
/>

<script>
  const video = document.querySelector('#my-player');
  const src = 'https://cdn.zujonow.com/files/videos/605311d9bba24b4d700c8c4d/index.m3u8';
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Some browers (safari and ie edge) support HLS natively
    video.src = src;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src)
    hls.attachMedia(video);
  } else {
    console.error("This is a legacy browser that doesn't support MSE");
  }
</script>
```
