---
sidebar_position: 0
---

# Beginner Tutorial JavaScript

## Terminology

Let's start with the terms used in VideoSDK meeting Client SDK.

### Meeting

A Meeting represents real-time audio, video, and/or screen-share session, and is the basic building block for media sharing among participants. Supports upto 5,000 participants.

### Participants

Participants are the client applications that are connected to a Meeting and shares video & audio media with one another.

### Local Participant

Participant producing audio or video stream from the local client's media sources

### Streams

Streams are indiviual video & audio streams produced by the participants in the meeting

### Active Speaker

Active speaker represents the participant who is currently producing highest decibels audio stream (in other words speaking)

### Active presenter

Active presenter is the participant who is currently sharing his/her screen as a video stream

### Main participant

Main participant represents the client who shall be displayed on the main screen indicating that he/she is either presenting or speaking

---

## Installation

### Get an API key

Signup on the VideoSDK website to get a key pair for SDK authentication. Your **API Key** and **Secret** will be visible on the console dashboard.

### Integrate

Include this in your HTML file

```html title="index.html"
<script src="https://sdk.videosdk.live/js-sdk/0.0.18/videosdk.js"></script>
```

---

## Step 0: Access token generation (server-side code)

An access token is required to authenticate with the VideoSDK and make any API calls. You can generate one with the `API key` and `secret` mentioned in your developer portal at VideoSDK console.

## Generate access token (NodeJS)

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
  const API_KEY = process.env.VIDEOSDK_API_KEY;
  const SECRET_KEY = process.env.VIDEOSDK_SECRET_KEY;
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

OR

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

## Step 2: Initialize meeting

To initialize meeting you need to provide the following parameters:

- `meetingId: string` from the previous step to specify which meeting to join in.
- `name: string` which will be displayed as username of participant in the meeting.
- `micEnabled: boolean` option to indicate if mic should be on while joining.
- `webcamEnabled: boolean` option to indicate if webcam should be on while joining.
- `maxResolution: "sd" | "hd"` defines the maximum available resolution for webcam video.

```javascript title="Intialize meeting instance"
const meeting = ZujoSDK.initMeeting({
  meetingId, // required
  name, // required
  micEnabled, // optional, default: true
  webcamEnabled, // optional, default: true
  maxResolution, // optional, default: "hd"
});
```

The `meeting` object consists of:

- Properties:

  - `id: string`
  - `activeSpeakerId: string`
  - `activePresenterId: string`
  - `mainParticipantId: string`
  - `localParticipant: Participant`
  - `participants: Map<string, Participant>`
  - `messages: Array<{senderId: string, text: string, timestamp: number}>`

- Events:

  - `participant-joined`, `participant-left`
  - `speaker-changed`, `presenter-changed`
  - `main-participant-changed`
  - `entry-requested`, `entry-responded`
  - `recording-started`, `recording-stopped`
  - `stream-enabled`, `stream-disabled`
  - `chat-message`

- Methods:
  - `join()`, `leave()`
  - `muteMic()`, `unmuteMic()`
  - `disableWebcam()`, `enableWebcam()`
  - `disableScreenShare()`, `enableScreenShare()`
  - `on(eventType: string)`, `off(eventType: string)`
  - `respondEntry(participantId: string, decision: "allowed" | "denied")`
  - `startRecording(webhookUrl: string, , awsDirPath: string)`, `stopRecording()`
  - `sendChatMessage(text: string)`

## Step 3: Get local and remote participants

You can get the local streams and participant meta from `meeting.localParticipant`. And a `Map` of joined participants is always available via `meeting.participants`.

```javascript title="Access meeting participants"
const localParticipant = meeting.localParticipant;
const participants = meeting.participants;
```

Each `participant` object consists of:

- Properties:

  - `id: string`
  - `displayName: string`
  - `streams: Map<string, Stream>`

- Events:

  - `stream-enabled`
  - `stream-disabled`

- Methods:
  - `setQuality(quality: "low" | "med" | "high")`
  - `enableMic()`, `disableMic()`
  - `enableWebcam()`, `disableWebcam()`
  - `on(eventType: string)`, `off(eventType: string)`

## Step 4: Listen for entry request events

When participant asks for entry in a meeting that you are connected to, you will be notified via `entry-requested` and when you or any other participant's entry is responded, `entry-responded` will be fired.

```javascript title="Get request from user"
meeting.on("entry-requested", (participantId, name) => {
  setEntryRequests([...entryRequestsRef.current, { id: participantId, name }]);

  // you can open a dialog to respond with
  // decision "allowed" or "denied" with the following method
  meeting.respondEntry(participantId, decision);
});

meeting.on("entry-responded", (participantId, decision) => {
  // decision parameter will be: "allowed" or "denied"

  setEntryRequests(
    entryRequestsRef.current.filter((r) => r.id !== participantId)
  );
});
```

## Step 5: Listen for new & leaving participant events

When participant joins or leaves a meeting that you are connected to, you will be notified via `participant-joined` and `participant-left` events respectively.

```javascript "Listen on participant joined and left"
meeting.on("participant-joined", (participant) => {
  setParticipants(new Map(meeting.participants));
});

meeting.on("participant-left", (participant) => {
  setParticipants(new Map(meeting.participants));
});
```

## Step 6: Listen for audio/video stream events

When a participant from meeting enables or diables a audio/video stream, you will be notified via `stream-enabled` and `stream-disabled` events from the participant object.

```javascript title="Listen on stream enabled and disabled"
participant.on("stream-enabled", (stream) => {
  if (stream.kind === "video") {
    // play video track on a <video /> element
  } else if (stream.kind === "audio") {
    // play audio track on a <audio /> element
  } else if (stream.kind === "share") {
    // play screen sharing video track on a <video /> element
  }
});

participant.on("stream-disabled", (stream) => {
  if (stream.kind === "video") {
    // remove video track or the <video /> element
  } else if (stream.kind === "audio") {
    // remove audio track or the <audio /> element
  } else if (stream.kind === "share") {
    // remove screen sharing video track or the <video /> element
  }
});
```

Each `stream` object consists of:

- Properties:

  - `id: string`
  - `kind: string`
  - `codec: string`
  - `track: MediaStreamTrack`

- Methods:
  - `pause()`
  - `resume()`

### Note: Chrome Autoplay policy workaround

Chrome's autoplay policy does not allow audio autoplay unless user has interacted with the domain (click, tap, etc.) or the user's <a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#mei">Media engagement Index</a> threshold has been crossed. Thus, as a workaround before starting the meeting, user can either create a meeting join page or create a join meeting confirmation dialog by which we can perform a user click interaction to enable audio autoplay in chrome's newer versions.

## Step 7: Main screen video (optional)

When a participant who is currently presenting or speaking is changed in the meeting, you will be notified via `main-participant-changed` event.

```javascript title="Listen on main participant changed"
meeting.on("main-participant-changed", (participant) => {
  // show participant video stream on main screen
});
```

## Step 8: Join the meeting

After we set local participant, main-screen participant, other participants, participant event handlers and stream event handlers from the meeting, next step is to join the meeting by calling `meeting.join()`. This will trigger `participant-joined` event for all other participants.

```javascript title="Leave meeting"
meeting.join();
```

## Step 9: Utility methods & events (optional)

### Mute/Unmute mic

Toggle own mic with the `unmuteMic()` and `muteMic()` methods. Toggling mic will trigger `stream-enabled` and `stream-disabled` events for all other participants when enabling and disabling mic.

```javascript title="Mic methods"
// unmute/mute your own mic
meeting.unmuteMic();
meeting.muteMic();

// unmute/mute other participant's mic
participant.unmuteMic();
participant.muteMic();
```

### Enable/Disable Webcam

Toggle own webcam with the `enableWebcam()` and `disableWebcam()` methods. Toggling webcam will trigger `stream-enabled` and `stream-disabled` events for all other participants when enabling and disabling webcam.

```javascript title="Webcam methods"
// disable/enable your own webcam
meeting.enableWebcam();
meeting.disableWebcam();

// disable/enable other participant's webcam
participant.enableWebcam();
participant.disableWebcam();
```

### Enable/Disable Screen share

Share your screen with the `enableScreenShare()` method and stop sharing with `disableScreenShare()`. Toggling screen-share will trigger `stream-enabled` and `stream-disabled` events for all other participants when enabling and disabling screen-share.

```javascript title="Screen share methods"
meeting.enableScreenShare();
meeting.disableScreenShare();
```

### Start/Stop recording

Record the meeting session with `startRecording(webhookUrl, awsDirPath)` method and stop recording with `stopRecording()`. Toggling recording will trigger `recording-started` and `recording-stopped` events for all participants when starting and stopping recording respectively.

```javascript title="Start and stop recordings methods"
// The webhook will be called with the fileUrl as a POST request when the recording is processed.
meeting.startRecording(
  "https://your-app-server.com/api/recordings",
  "meetings/meeting-id"
);
meeting.stopRecording();

// ...

meeting.on("recording-started", () => {
  setRecordStatus("active");

  // 🔴 notify all users of recording start
});

meeting.on("recording-stopped", () => {
  setRecordStatus("inactive");

  // ⚫ notify all users of recording end
});
```

### In-meeting Chat

Send messages with the `sendChatMessage(text)` method and all other participants will be notified via `chat-message` event.

```javascript title="Send and receive chat message"
meeting.sendChatMessage("Hello world!");

// ...

meeting.on("chat-message", (data) => {
  setChatMessages([...meeting.messages]);

  const { senderId, text, timestamp } = data;

  // 📢 notify user or show in the chat window
});
```

### Active speaker event

The `speaker-changed` event will be fired whenever the loudest speaking participant changes.

```javascript title="Listen on active speaker changed"
meeting.on("speaker-changed", (participant) => {
  // indicate participant as speaking
});
```

### Active presenter event

The `presenter-changed` event will be fired whenever someone enables screen sharing.

```javascript title="Listen on presenter changed"
meeting.on("presenter-changed", (participant) => {
  // indicate participant as presenting screen
});
```

### Set participant video quality

Update the participant video quality based on use case to `"low" | "med" | "high"`.

```javascript title="Set quelity of receiving stream"
participant.setQuality("low");
```

### Start/Stop video

Share video link to play with `startVideo({ link })` method and stop video with `stopVideo()`. Toggling video will trigger `video-started` and `video-stopped` events for all participants when starting and stopping video respectively.
​

```javascript
// The webhook will be called with the fileUrl as a POST request when the video is processed.
meeting.startVideo({ link: "https://your-app-server.com/video/demo.mp4" });
meeting.stopVideo();
​
​
// Listening on start of the video stream.
meeting.on("video-started", ({ link, currentTime }) => {
  videoRef.current.src = link;
  videoRef.current.currentTime = currentTime;
});

// Listening to the stopped video stream.
meeting.on("video-stopped", () => {
  videoRef.current.pause();
  videoRef.current.src = null;
});
```

### Restream meeting on social media

Restream meeting on your favorate social media channels using RTMP key and url.

```javascript
// start livestreaming
meeting.startLivestream([
  {
    url: "rtmp://x.rtmp.youtube.com/live2/",
    streamKey: "abcd-h6a2-pqrs-vusv-prpf",
  },
]);
​
// stop livestreaming
meeting.stopLivestream();
```

## Leave the meeting

You can disconnect from the meeting with `meeting.leave()` method. This will trigger `participant-left` event for all other participants.

```javascript title="Leave meeting"
meeting.leave();
```
