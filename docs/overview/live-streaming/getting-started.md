---
title: Getting Started with Live Streaming
hide_title: false
hide_table_of_contents: false
description: Live streaming sdk will help you to integrate live streaming in your application.
sidebar_label: Getting Started
pagination_label: Getting Started Live Streaming
keywords:
  - live streaming
  - interactive live streaming
  - live broadcasting
  - hls streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';

# Explore live streaming

This guide will get you running with the VideoSDK Live Streaming in minutes.

## Overview

At it's core, VideoSDK Live Streaming is a media server. It eanbles high quality live streaming experience.

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

## Create unique live stream

You can replace `${VIDEOSDK_TOKEN_ID}` with your own access token details or make sure to export those environment variables with the correct values first.

[Detailed API Reference](/docs/live-streaming/api-reference/create-live-stream)

<Tabs
defaultValue="curl"
groupId={"server-group-id"}
values={[
{label: 'cURL', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
]}>
<TabItem value="curl">

```js
curl -L -X POST 'https://api.videosdk.live/v1/livestreams' \
--header 'Authorization: `${VIDEOSDK_TOKEN_ID}`' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nickname for livestream",
    "record": true,
    "restream": [
      {
          "url": "rtmp://x.rtmp.youtube.com/live2",
          "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
      }
    ]
}'
```

</TabItem>
<TabItem value="node">

```js
var fetch = require("node-fetch");

const url = "https://api.videosdk.live/v1/livestreams";
var options = {
  method: "POST",
  headers: {
    Authorization: `${YOUR_JWT_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nickname for livestream", record: true
    restream: [
      {
          "url": "rtmp://x.rtmp.youtube.com/live2",
          "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
      }
    ]
    }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
```

</TabItem>
<TabItem value="python">

```js
import requests

url = "https://api.videosdk.live/v1/livestreams"

payload = {
  "name": "Nickname for livestream", "record": True,
  "restream": [
      {
          "url": "rtmp://x.rtmp.youtube.com/live2",
          "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
      }
    ]
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

```js
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.videosdk.live/v1/livestreams")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Accept"] = 'application/json'
request["Content-Type"] = 'application/json'
request["Authorization"] = `${YOUR_JWT_TOKEN}`
request.body = "{\"record\":false,\"name\":\"Nickname for livestream\",\"restream\": [ { \"url\": \"rtmp://x.rtmp.youtube.com/live2\", \"streamKey\": \"0tjp-h6a2-8c9d-vusv-01uu\" } ]}"

response = http.request(request)
puts response.read_body
```

</TabItem>

</Tabs>

The response will include a `Upstream URL` and a `Stream Key`.

- **Upstream URL**: It will be used to push RTMP stream from your client to our server.
- **Stream Key**: It is a secret that can be used along with VideoSDK's RTMP Server URL to configure RTMP streaming software.

:::caution

The Stream Key should be treated as a private key for live streaming. Anyone with the key can use it to stream video to the Live Stream it belongs to, so make sure your users know to keep it safe.

:::

```json
{
  "record": false,
  "name": "zujo",
  "streamKey": "e83fb175-5606-4ee5-b960-aacfce300ba6",
  "upstreamUrl": "rtmp://live.videosdk.live/live/.......",
  "downstreamUrl": "https://live.videosdk.live/live/.......",
  "recordingUrl": "https://live.videosdk.live/live/......",
  "restream": [
    {
      "url": "rtmp://x.rtmp.youtube.com/live2",
      "streamKey": "0tjp-h6a2-8c9d-vusv-01uu"
    }
  ]
}
```

You can find more details about the options on the [Create Live Stream](/docs/live-streaming/api-reference/create-live-stream/)

## Start Broadcasting

VideoSDK supports live streaming using the RTMP protocol, which is supported by most broadcast software/hardware as well as open source software for mobile applications.

Your users or your client app will need software that can push an RTMP stream. That software will be configured using the Stream Key from the prior step along with VideoSDK's RTMP Server URL

| RTMP Server URL                | Description                                                                                           | Common Applications                 |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- | ----------------------------------- |
| rtmp://live.videosdk.live/live | Mux's standard RTMP entry point. Compatible with the majority of streaming applications and services. | OBS, Wirecast, Streamaxia RTMP SDKs |

If you want to live stream with a protocol other than RTMP, let us know!

![Go live with VideoSDK](/img/tutorial/go-live-with-rtmp.jpeg)

## Play live stream

To play back a live stream, use the `downstreamUrl` that was returned when you created the Live Stream.

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
    src="https://live.videosdk.live/live/cae23d5b-0c34-4429-a70b-0d597e5e0e96/index.m3u8"
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
    "https://live.videosdk.live/live/cae23d5b-0c34-4429-a70b-0d597e5e0e96/index.m3u8";

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
player.setMediaItem(MediaItem.fromUri("https://live.videosdk.live/live/cae23d5b-0c34-4429-a70b-0d597e5e0e96/index.m3u8"));
// Prepare the player.
player.prepare();
```

</TabItem>
<TabItem value="swift">

```js
import SwiftUI
import AVKit

struct ContentView: View {
    private let player = AVPlayer(url: URL(string: "https://live.videosdk.live/live/cae23d5b-0c34-4429-a70b-0d597e5e0e96/index.m3u8")!)

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

## Stop broadcast

When the Streamer is finished they will stop the broadcast software/hardware, which will disconnect from the VideoSDK servers.

## What Next

Explore guide, tutorials and code samples to implement custom features using Live Streaming SDK.
