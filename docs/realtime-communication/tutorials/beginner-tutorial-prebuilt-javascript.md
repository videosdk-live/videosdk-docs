---
sidebar_position: 0
---

# Beginner Tutorial of Prebuilt JS

Prebuilt SDK enables opportunity to integrate real-time communication SDK witout writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular.

## Using prebuilt sdk

## Step 0: Access token generation (server-side code)

An access token is required to authenticate with the Zujo SDK and make any API calls. You can generate one with the `API key` and `secret` mentioned in your developer portal at ZujoNow console.

### Generate access token (NodeJS)

```js {20} title="server.js"
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
    permissions: ["allow_join", "allow_mod", "ask_join"], // Trigger permission.
  };
  const token = jwt.sign(payload, SECRET_KEY, options);
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Available permissions are:

- `allow_join`: The participant will be permitted entry without request.
- `ask_join`: The participant will not be permitted entry without request.
- `allow_mod`: Allow participant to enable/disable other participant's mic/webcam.

This generated token must be sent in the `Authorization` header for all API calls. <br/>
And it should also be used with the `ZujoSDK.config(token)` method.

## Step 1: Create or join meeting

Get a meeting id for new meeting or validate an existing meeting id to join a meeting.

### Create new meeting ID

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL request creates meeting', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
cURL -H "Content-Type: application/json" \
     -H "Authorization: $YOUR_JWT_TOKEN" \
     -XPOST \
     https://api.videosdk.live/v1/meetings
```

</TabItem>
<TabItem value="node">

```js
var request = require("request");

var options = {
  method: "POST",
  url: "https://api.videosdk.live/v1/meetings",
  headers: { authorization: `${YOUR_JWT_TOKEN}` },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.videosdk.live/v1/meetings"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.videosdk.live/v1/meetings")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["authorization"] = "Bearer #{YOUR_JWT_TOKEN}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "meetingId":"jpkf-iool-64ox"
}
```

</TabItem>
</Tabs>

### OR

### Validate existing meeting ID for joining

<Tabs
defaultValue="curl"
values={[
{label: 'cURL request creates meeting', value: 'curl'},
{label: 'NodeJS/JS', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'RESULT', value: 'result'},
]}>
<TabItem value="curl">

```js
cURL -H "Content-Type: application/json" \
     -H "Authorization: $YOUR_JWT_TOKEN" \
     -XPOST \
     https://api.videosdk.live/v1/meetings/${meetingId}
```

</TabItem>
<TabItem value="node">

```js
var request = require("request");

var options = {
  method: "POST",
  url: "https://api.videosdk.live/v1/meetings/${meetingId}",
  headers: { authorization: `${YOUR_JWT_TOKEN}` },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

</TabItem>
<TabItem value="python">

```python
import requests

url = "https://api.videosdk.live/v1/meetings/${meetingId}"

headers = {'authorization': f'Bearer {YOUR_JWT_TOKEN}'}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.videosdk.live/v1/meetings/${meetingId}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["authorization"] = "Bearer #{YOUR_JWT_TOKEN}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="result">

```js
{
  "meetingId":"jpkf-iool-64ox"
}
```

</TabItem>
</Tabs>

## Step 3: Install prebuilt SDK in your app

### Setting up prebuilt sdk using `<script>`

The easiest way to get started is by just adding our prebuilt script in your website.

```js
<script src="https://sdk.videosdk.live/embedded/index.js"></script>
```

### OR

### Setting up prebuilt sdk using NPM package manager

Another way is by installing `@videosdk.live/js-prebuilt` in your app.

<Tabs
defaultValue="npm"
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install @videosdk.live/js-prebuilt
```

</TabItem>
<TabItem value="yarn">

```js
yarn add @videosdk.live/js-prebuilt
```

</TabItem>
</Tabs>

### Step 3: Add script into your application.

Intialize `VideoSDKMeeting` on the page where you want to start meeting.

```js
const videoMeeting = new VideoSDKMeeting();

const videoMeetingSpecs = {
  micEnabled: true,
  webcamEnabled: true,
  name,
  meetingId: "/* MEETING ID */",
  redirectOnLeave: "/* REDIRECT ON LEAVE */",
  chatEnabled: true,
  screenShareEnabled: true,
  pollEnabled: true,
  whiteBoardEnabled: true,
  participantCanToggleSelfWebcam: true,
  participantCanToggleSelfMic: true,
  raiseHandEnabled: true,
  token: "/* YOUR TOKEN */",
  containerId: null,
};
videoMeeting.init(videoMeetingSpecs);
```

### Step 4: Run the application.

Once you will have call `init` and run the application, you will be able to see the meeting screen.

![Prebuilt SDK Example to add video call widget in your web application](/img/tutorial/integrate-it-anywhere.jpg)
