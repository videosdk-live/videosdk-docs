---
title: Build a Video Calling App Using VideoSDK in a JavaScript Project
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
  - Javascript SDK implemntation
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

import Mermaid from '@theme/Mermaid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**VideoSDK enables you to embed the video calling feature into your JavaScript application in minutes.**

**In this quickstart, we are going to explore group calling feature of Video SDK. We will go through step by step guide of integrating video calling with JavaScript Video SDK**

**This guide will get you running with the VideoSDK video & audio calling in minutes.**

## Prerequisite

- Node.js v12+
- NPM v6+ (comes pre-installed with newer Node versions)
- Video SDK token

:::important

One should have a videoSDK account to generate token.
Visit videoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Get started with your code!

### Create new javascript app

One can create a javascript app by writing following command to terminal

```js
mkdir appName
```

### Install Video SDK

To install javascript SDK provided by Video SDK , use following command

<Tabs>
<TabItem value="<script> in index.html" label="<script> in index.html" default>

```html
<html>
  <head>
    ....
  </head>
  <body>
    .....
    <script src="https://sdk.videosdk.live/js-sdk/0.0.20/videosdk.js"></script>
    <script src="./js/index.js"></script>
    <script src="./js/api.js"></script>
  </body>
</html>
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install @videosdk.live/js-sdk
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @videosdk.live/js-sdk
```

</TabItem>
</Tabs>

### Project structure

Set up the directory structure as shown below:

```jsx title="Directory Structure"
   root-Folder Name
   ├── index.html
   ├── assets
   │    ├── css
   |    |    ├── index.css
   │    ├── js
   |         ├── index.js
   |         ├── api.js
```

### Configure proect

To configure token generated from video SDK create `api.js` file and replace `TOKEN` in it as shown below

```js
let TOKEN = "<Your Video SDK Token>";
```

:::important

Before moving ahead in this quick start , implement bootstrap setting from **[bootstrap guide](https://getbootstrap.com/docs/5.1/getting-started/introduction/)** in index.html <head></head> section.

And refer custom css from [assets/index.css](https://gist.githubusercontent.com/bhavi1017/2f6f0c22d363dcf6a64bed5230b42202/raw/c97b2ccf3eeca6e4b09240cb51b2d9ee174b8c46/index.css)

:::

### Step 1 : Get started with api.js

After setting up your token the next step is to `createMeeting using Video SDK` endpoint which will provide us a meetingId.

Update your `api.js` file as shown below

```js
const getToken = async () => {
  TOKEN != "" ? TOKEN : "";
};

const getMeetingId = async (token) => {
  const url = `${API_BASE_URL}/api/meetings`;
  const options = {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
  };
  const { meetingId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => alert("error", error));
  return meetingId;
};
```

### Step 2 : Create join screen

Now we will be focusing on creation of UI part.For that go to `index.html` file and copy the content of block shown below ; paste it to `<body> </body>` tag

```html
<!--join-screen-->
<div
  id="join-screen"
  class="flex align-items-center justify-content-center h-100"
>
  <button
    class="btn btn-primary"
    id="btnCreateMeeting"
    onclick="meetingHandler(true)"
  >
    Create New Meeting
  </button>

  <input type="text" id="txtMeetingCode" placeholder="Enter Meeting Code .." />
  <button
    id="btnJoinMeeting"
    onclick="meetingHandler(false)"
    class="btn btn-primary"
  >
    Join
  </button>
</div>
<!--Grid-screen portion will be creating in Step 3-->
```

output will look like an image shown below

![JavaScript-Join-Screen!](/img/quick-start/javascript-join-screen.jpg)

### Step 3 : Create grid screen

```html
<!--Join screen portion as shown in Step 2-->
<div id="grid-screen">
  <div>
    <input
      type="text"
      class="form-control navbar-brand"
      id="lblMeetingId"
      readonly
    />
    <button class="btn btn-dark" id="btnToggleMic">Mute Mic</button>
    <button class="btn btn-dark" id="btnToggleWebCam">Disable Webcam</button>
    <button class="btn btn-dark" id="btnLeaveMeeting">Leave Meeting</button>
  </div>
  <br />

  <!--videoContainer will hold participants-->
  <div id="videoContainer" class="d-flex flex-row"></div>
</div>
```

![JavaScript-Grid-Screen!](/img/quick-start/javascript-grid-screen.jpg)

### Step 4 : Work with index.js

Declare require variables as shown below to manage video/audio call

```js
// Constants
const API_BASE_URL = "https://api.videosdk.live";

//DOM elements
let btnCreateMeeting = document.getElementById("btnCreateMeeting");
let btnJoinMeeting = document.getElementById("btnJoinMeeting");
let videoContainer = document.getElementById("videoContainer");
let btnToggleMic = document.getElementById("btnToggleMic");
let btnToggleWebCam = document.getElementById("btnToggleWebCam");

//variables
let meetingId = "";
let token = "";
let totalParticipant = 0;
let stream = {};
let localParticipantVideo = "";
let localParticipantAudio = "";
let webcamOn = true;
let micOn = true;
let participants = {};
```

Whenever someone clicks on `join meeting` or `create meeting` button of `index.html` MeetingHandler() will be called

- **MeetingHandler(boolean)** : if parameter pass to MeetingHandler set to true will create a new meeting by using `getMeetingId` of `api.js` and calls `startMeeting()` function else it directly calls `startMeeting()`
- **startMeeting()** : This function create meeting instance using Video SDK where we are configuring our token and passing required parameters to initialize meeting instance.

To better understand this have a look of a code block below

```js
async function meetingHandler(newMeeting) {
  let joinMeetingName = "JS-SDK";

  token = await getToken();

  //if newMeeting=true then create meeting else join meeting
  if (newMeeting) {
    meetingId = await getMeetingId(token);
    document.getElementById("lblMeetingId").value = "Meeting ID : " + meetingId;
    document.getElementById("join-screen").style.display = "none";
    document.getElementById("grid-screen").style.display = "inline-block";
    startMeeting(token, meetingId, joinMeetingName);
  } else {
    meetingId = document.getElementById("txtMeetingCode").value;
    document.getElementById("lblMeetingId").value = "Meeting ID : " + meetingId;
    document.getElementById("join-screen").style.display = "none";
    document.getElementById("grid-screen").style.display = "inline-block";
    startMeeting(token, meetingId, joinMeetingName);
  }
}

function startMeeting(token, meetingId, name) {
  window.ZujoSDK.config(token);

  meeting = window.ZujoSDK.initMeeting({
    meetingId: meetingId, // required
    name: name, // required
    micEnabled: micOn, // optional, default: true
    webcamEnabled: webcamOn, // optional, default: true
    maxResolution: "hd", // optional, default: "hd"
  });

  meeting.join(); //will start meeting

  //all remote participants
  participants = meeting.participants;

  //this event will trigger for localParticipant join
  meeting.on("meeting-joined", () => {});

  //this event will trigger for remote participant join
  meeting.on("participant-joined", (participant) => {});

  //this event will trigger when any participant left the meeting
  meeting.on("participant-left", () => {});

  addDomElements(); //to manage dom elements
}

function addDomEvents() {}
```

Let's elaborate events `meeting-joined` and `participant-joined` for better understanding of participants and their actions such as `stream-enabled` and `stream-disbled`

```js
meeting.on("meeting-joined", () => {
  createParticipant(meeting.localParticipant);
  meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(
      stream,
      document.getElementById(`v-${meeting.localParticipant.id}`),
      document.getElementById(`a-${meeting.localParticipant.id}`),
      meeting.localParticipant.id
    );
  });

  meeting.localParticipant.on("stream-disabled", (stream) => {
    console.log("local participant stream disabled");
  });
});

//for remote participant join
meeting.on("participant-joined", (participant) => {
  createParticipant(participant);
  participant.on("stream-enabled", (stream) => {
    setTrack(
      stream,
      document.getElementById(`v-${participant.id}`),
      document.getElementById(`a-${participant.id}`),
      participant.id
    );
  });
  participant.on("stream-disabled", (stream) => {
    console.log("participant stream disabled");
  });
});

function createParticipant(participant) {}

function setTrack(stream, videoElem, audioElement, id) {}
```

- **createPartcipant()** : will create video and audio dom element for each participant joins the meeting

Better understand this by the codeblock mention below

```js
function createParticipant(participant) {
  let participantVideo = createVideoElement(
    participant.id,
    participant.displayName
  );
  let participantAudio = createAudioElement(participant.id);
  videoContainer.appendChild(participantVideo);
  videoContainer.appendChild(participantAudio);
}

//creating video element
function createVideoElement(id, name) {
  let videoElement = document.createElement("video");
  videoElement.classList.add("video");
  videoElement.classList.add("col-4");
  videoElement.setAttribute("id", `v-${id}`);
  return videoElement;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", false);
  audioElement.setAttribute("playsInline", "false");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  audioElement.style.display = "none";
  return audioElement;
}
```

- **setTrack()** : will set streams for each participant of meeting whenever any participant tries to toggle their streams

```js
function setTrack(stream, videoElem, audioElement, id) {
  if (stream.kind == "video") {
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    videoElem.srcObject = mediaStream;
    videoElem
      .play()
      .catch((error) =>
        console.error("videoElem.current.play() failed", error)
      );
  }
  if (stream.kind == "audio") {
    if (id == meeting.localParticipant.id) return;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    audioElement.srcObject = mediaStream;
    audioElement
      .play()
      .catch((error) => console.error("audioElem.play() failed", error));
  }
}
```

We have provided button controls using index.html for toggling mic,webcam and to leave meeting.This actions will be handled using `addDomElements()`.

Let's have a look of what it does by following code block

```js
function addDomEvents() {
  btnToggleMic.addEventListener("click", () => {
    if (btnToggleMic.innerText == "Unmute Mic") {
      meeting.unmuteMic();
      btnToggleMic.innerText = "Mute Mic";
    } else {
      meeting.muteMic();
      btnToggleMic.innerText = "Unmute Mic";
    }
  });

  btnToggleWebCam.addEventListener("click", () => {
    if (btnToggleWebCam.innerText == "Disable Webcam") {
      meeting.disableWebcam();
      btnToggleWebCam.innerText = "Enable Webcam";
    } else {
      meeting.enableWebcam();
      btnToggleWebCam.innerText = "Disable Webcam";
    }
  });

  btnLeaveMeeting.addEventListener("click", async () => {
    // leavemeeting
    meeting.leave();
    document.getElementById("join-screen").style.display = "inline-block";
    document.getElementById("grid-screen").style.display = "none";
  });
}
```

## Run and Test

Install live-server

```js
npm install -g live-server
```

Run your application using following command

```
live-server
```

#### Final Output

We are done with implementation of customised video calling app in reeact js using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer controls url="/img/quick-start/js-quick-start.webm" height="500px" width={"100%"} />

</div>
