---
title: Getting Started with Video On Demand
hide_title: false
hide_table_of_contents: false
description: Video On demand sdk will help you to integrate video streaming in your application.
sidebar_label: Getting Started
pagination_label: Getting Started Live Streaming
keywords:
  - video on demand
  - video streaming
  - video encoding
  - video hosting
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';

# Explore video on demand

This guide will get you running with the VideoSDK Video On Demand in minutes.

## Overview

At it's core, VideoSDK Video On Demand is a sclable API for video encoding and streaming. It eanbles high quality video streaming experience.

VideoSDK uses access tokens for authentication. Using our dashboard ([app.videosdk.live](https://app.videosdk.live/)), anyone can generate access tokens tokens with an API key and secret pair.

- Your backend server will generate access tokens using API Key and secret.
- Your client obtains token from your backend server.
- Your client will pass the token to VideoSDK server.
- VideoSDK client sdk will conncts to the VideoSDK server with available token.
- VideoSDK server will validate the token and accpets your incoming connection.

Here is the simple sequence diagram represents the authentication.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request for token; activate Your App Server; Note left of Your App Server: Generate token; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to establish connection; activate VideoSDK Server; Note left of VideoSDK Server: Validates Token; VideoSDK Server-->>Your App Client: Connection established; deactivate VideoSDK Server;`}/>

## Generate API Key and Secret

Visit, [app.videosdk.live](https://app.videosdk.live/) to gererate API Key and secret.

![Generate API Key from Dashboard](/img/tutorial/generate-api-key.jpg)

## Generate Accees Token

For security, every participant that connects to meeting needs a access token. By substituting `apikey` and `permissions` in it.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="node"
groupId={"server-group-id"}
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Java', value: 'java'},
{label: 'Ruby', value: 'ruby'},
{label: 'PHP', value: 'php'},
]}>
<TabItem value="node">

```js
var jwt = require("jsonwebtoken");
var uuid4 = require("uuid4");

// Need to generate from app.videosdk.live
const API_KEY = "API_KEY_GENERATED";
const SECRET_KEY = "API_SECRET_KEY_GENERATED";

jwt.sign(
  {
    apikey: API_KEY,
  },
  SECRET_KEY,
  {
    algorithm: "HS256",
    expiresIn: "24h",
    jwtid: uuid4(),
  },
  function (err, token) {
    console.log(token);
  }
);
```

</TabItem>
<TabItem value="python">

```python
#!/usr/bin/env python3
import jwt
import uuid
import datetime

api_key = 'api_key_generated'
secret_key = 'secret_key_generated'


def generateToken():
    expires = 24 * 3600
    now = datetime.datetime.utcnow()
    exp = now + datetime.timedelta(seconds=expires)
    return jwt.encode(payload={
        'apikey': api_key
        }, key=secret_key).decode('utf-8')

if __name__ == '__main__':
    print(generateToken())
```

</TabItem>
<TabItem value="java">

```js
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

private void generateManagementToken() {
    Map<String, Object> payload = new HashMap<>();
    payload.put("apikey", "<api_key_generated>");
    String token = Jwts.builder().setClaims(payload).setId(UUID.randomUUID().toString())
        .setExpiration(new Date(System.currentTimeMillis() + 86400 * 1000))
        .setIssuedAt(Date.from(Instant.ofEpochMilli(System.currentTimeMillis() - 60000)))
        .setNotBefore(new Date(System.currentTimeMillis()))
        .signWith(SignatureAlgorithm.HS256, "<secret_key_generated>".getBytes()).compact();
  }
```

</TabItem>
<TabItem value="ruby">

```js
require 'jwt'
require 'securerandom'

$api_key = "api_key_generated"
$secret_key = "secret_key_generated"

def generateToken()
    payload = {
      apikey: $api_key
    }
token = JWT.encode(payload, $secret_key, 'HS256')
return token
end

puts generateToken
```

</TabItem>
<TabItem value="php">

```js
<?php

use Firebase\JWT\JWT;
use Ramsey\Uuid\Uuid;

$api_key = "api_key_generated";
$secret_key = "secret_key_generated"

$payload = [
    'apikey' => api_key
];

$token = JWT::encode($payload, $secret_key, 'HS256');
?>
```

</TabItem>
</Tabs>

## Create a signed URL to upload video file

Before starting uploading video, you have generate a signed upload URL using CREATE UPLOAD URL API.

```js title="Create a signed URL"
curl --L --X POST 'https://api.videosdk.live/v1/files' \
--header 'Authorization: `${VIDEOSDK_API_TOKEN}`'
```

The response will include URL

- **URL**: You can upload video on this URL using POST a video API

```js title="Response"
{
  "url": "https://storage-api.videosdk.live/v1/files"
}
```

## Post a video via signed URL

To start uploading video, you have to parse video file in formdata.

```js title="Upload via signed URL"
curl --L --X POST 'https://storage-api.videosdk.live/v1/files' \
--header 'Authorization: `jwt token goes here`' \
--header 'Content-Type: multipart/form-data'
--form 'file=mock-video.mp4"'
```

The reponse will include `meta` and `fileURL`:

- **meta**: Meta data will include technical information about Video.
- **fileUrl**: URL of file uploaded on our cloud from where you can play video.

```json title="Response"
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
  "fileUrl": "https://cdn.videosdk.live/uploads/videos/{FILE_ID}.mp4",
  "id": "6052e0064b442a2f16018374"
}
```

## Encode a video

This API helps you to customise all the encoding needs. It will reflect as per parameters you provide such as `presets` and `thumbnails`.

The request parameters will be:

- **videoId**: Id of video uploaded using Post a video API.
- **presets**: Type of videos you want to convert in such as mp4, hls etc. with resolution specified.
- **thumbnails**: Configuration to generate thumbnails of video
- **webhookUrl**: Get notified on this URL when encoding job completes.

```js title="Encode a video request"
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

The response will include `status` and `videoId` of job.

- **status**: It represents processing status of the video
- **videoId**: Id of the video processing.

## Wait for "ready"

As soon as you POST a video, VideoSDK begins downloading and processing the video.

When the video is ready for playback, the asset "status" changes to "completed".

The best way to get notified is to use webhooks. We will send you notification as soon as video will be ready to play. Once video is processed it will includes array of `files` which could be fetched via API.

```js title="Request for job details"
curl --request GET \
  --url 'https://api.videosdk.live/v1/encoder/jobs/${id}' \
  --header 'Authorization: `${VIDEOSDK_JWT_TOKEN}`'
```

```js title="Get job details in Response"
{
  "status": "completed",
  "videoId": "6053115ebba24b4d700c8c49",
  "files": [
    {
      "meta": {
        ...
      },
      "jobId": "605311c86efd284e474c5c76",
      "filePath": "files/videos/605311d9bba24b4d700c8c4d",
      "fileUrl": "https://cdn.videosdk.live/uploads/videos/605311d9bba24b4d700c8c4d/index.m3u8",
      "size": 1572953,
      "type": "video",
      .....
    },
  ]
}
```

## Watch your Video

To play back a video, use `fileUrl` from the response of video.

<Tabs
defaultValue="html"
groupId={"client-group-id"}
values={[
{label: 'HTML', value: 'html'},
{label: 'React.js', value: 'react'},
{label: 'Android', value: 'android'},
{label: 'Swift', value: 'swift'},
]}>
<TabItem value="html">

```js
<link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />

<video
  id="my-video"
  class="video-js"
  controls
  preload="auto"
  width="640"
  height="264"
  data-setup="{}"
>
  <source
    src="https://cdn.videosdk.live/uploads/videos/605311d9bba24b4d700c8c4d/index.m3u8"
    type="application/x-mpegURL"
  />
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank"
      >supports HTML5 video</a
    >
  </p>
</video>
<script src="https://vjs.zencdn.net/7.10.2/video.min.js"></script>
<script>
  videojs.Hls.xhr.beforeRequest = (options) => {
    options.headers = {
      ...options.headers,
      Authorization: "`token` generated in step 1",
    };
    return options;
  };
</script>
```

</TabItem>
<TabItem value="react">

```js
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const src =
    "https://cdn.videosdk.live/uploads/videos/605311d9bba24b4d700c8c4d/index.m3u8";

  useEffect(() => {
    let hls;
    if (videoRef.current) {
      const video = videoRef.current;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Some browers (safari and ie edge) support HLS natively
        video.src = src;
      } else if (Hls.isSupported()) {
        // This will run in all other modern browsers
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      style={{ width: "100%", maxWidth: "500px" }}
    />
  );
}
```

</TabItem>
<TabItem value="android">

```js
implementation 'com.google.android.exoplayer:exoplayer-hls:2.X.X'

// Create a player instance.
SimpleExoPlayer player = new SimpleExoPlayer.Builder(context).build();
// Set the media item to be played.
player.setMediaItem(MediaItem.fromUri("https://cdn.videosdk.live/uploads/videos/605311d9bba24b4d700c8c4d/index.m3u8"));
// Prepare the player.
player.prepare();
```

</TabItem>
<TabItem value="swift">

```js
import SwiftUI
import AVKit

struct ContentView: View {
    private let player = AVPlayer(url: URL(string: "https://cdn.videosdk.live/uploads/videos/605311d9bba24b4d700c8c4d/index.m3u8")!)

    var body: some View {
        //  VideoPlayer comes from SwiftUI
        //  Alternatively, you can use AVPlayerLayer or AVPlayerViewController
        VideoPlayer(player: player)
            .onAppear() {
                player.play()
            }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

</TabItem>

</Tabs>
