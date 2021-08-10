---
sidebar_position: 1
---

# Live Streaming Tutorial

## Step by step tutorial of integrating live stream api in you app

This tutorial explains steps to integrate live video streaming in your app.

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

### Step 2: Create live stream

Use the "Create live stream" Rest API to create a new live stream. It will return the upstream and downstream URLs in response.

```js title="Live streaming api"
app.get("/live", async (req, res) => {
  const token = req.headers.authorization;
  const options = {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Nickname for livestream", // nickname for livestream
      record: true, // use false to disable recording
    }),
  };
  const response = await request(
    "https://api.zujonow.com/v1/livestreams",
    options
  );
  const json = await response.json();
  return res.json(json);
});
```

### Step 3: Start broadcasting

Use any RTMP supported broadcasting software like OBS studio, to publish the video. Following are the steps for <a href="https://obsproject.com/">OBS studio</a> or <a href="https://streamlabs.com/">Streamlabs</a>.

1. Download and install OBS Studio on your platform.
2. Add media source: In the sources section, choose a video feed to share.
   ![Add media source: In the sources section, choose a video feed to share](/img/obs-media-source.png)
3. Set streaming URL and key.
   ![Set streaming URL and key](/img/obs-streaming-config.png)
4. Start streaming!

   ![Start streaming!](/img/obs-start-streaming.png)

5. Hurray! You are live now.

### Step 4: Start streaming

Use any HLS supported video player like <a href="https://videojs.com/">video.js</a>, to play the video. Create and html file, paste the below code and replace the url with the downstreamUrl received in response of step 2.

```jsx title="Host live video"
<head>
  <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />
</head>
<body>
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
      src="https://live.zujonow.com/live/cae23d5b-0c34-4429-a70b-0d597e5e0e96/index.m3u8"
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
</body>
```
