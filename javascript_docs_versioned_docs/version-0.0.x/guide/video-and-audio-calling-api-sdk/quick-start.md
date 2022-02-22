---
title: Get Started with Video & Audio Calling Using Javascript
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start WIth JS
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

## Quick Start

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.
This guide will get you running with the VideoSDK video & audio calling in minutes.

## Sample Project

This quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example). Once you are done with the tutorial given below your app should look like this.

## Screenshots

![VideoSDK JS Quick Start Join Screen](/img/quick-start/js-join-screen.png) ![VideoSDK JS Quick Start Meeting Screen](/img/quick-start/js-grid-screen.png)

## Prerequisite

#### Software Requirements

- Node.js v12+
- NPM v6+ (comes pre-installed with newer Node versions)

#### VideoSDK Account

- If you haven't yet a user of VideoSDK you can [click this link](https://app.videosdk.live/login) and be a user of VideoSDK.
- If you are already a user to videoSDK then [follow this link](/javascript/guide/video-and-audio-calling-api-sdk/signup-and-create-api) for generating token for the further usage

## Create Project

1. Create one empty project using **mkdir folder_name** on your preferable location.
2. Set up the structure of your project shown in the directory structure below:

```jsx title="Directory Structure"
   root-Folder Name
   ├── index.html
   ├── assets
   │    ├── css
   |    |    ├── index.css
   │    ├── js
   |        ├── index.js
   |        ├── config.js
```

3. To run your project; install live-server using the following command.

```bash
npm install -g live-server
```

## Integrate SDK

There are two ways to install JavaScript SDK.

### 1. Install via using `<script>` tag

You can import this library using `<script>` tag. The easiest way to get started is to load this library from CDN, and add a couple of lines of code to your web page or app.

```html title="Install via <script>"
<html>
  <head>
    ....
  </head>
  <body>
    .....
    <script src="https://sdk.videosdk.live/js-sdk/0.0.20/videosdk.js"></script>
  </body>
</html>
```

### 2 .Install using package manager

Another interesting option is to install the library in your app and bundle it using webpack or rollup.

#### Npm

```bash
npm install @videosdk.live/js-sdk
```

#### Yarn

```bash
yarn add @videosdk.live/js-sdk
```

## Implementation

### User Interface

In this sample code, we have made use of bootstrap for the very basic effects. One can customize according to their requirements by using either external CSS (index.css file which has been created in the assets folder) techniques or inline-css

```html title="join-screen"
<html>
  <head>
    <!--favicon-->
    <link
      rel="shortcut icon"
      href="https://videosdk.live/favicon/favicon.ico"
    />
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./assets/css/index.css" />
  </head>
  <body class="bg-secondary">
    <!--join-screen-->
    <div
      id="join-screen"
      class="flex flex-column align-items-center justify-content-center h-100"
    >
      <div class="mb-4">
        <button
          class="btn btn-primary"
          id="btnCreateMeeting"
          onclick="meetingHandler(true)"
        >
          Create Meeting
        </button>
      </div>
      <h4 class="text-white">OR</h4>
      <div class="d-flex flex-row">
        <input
          type="text"
          id="txtMeetingCode"
          placeholder="Enter Meeting Code .."
        />
        <button
          id="btnJoinMeeting"
          onclick="meetingHandler(false)"
          class="btn btn-primary"
        >
          Join
        </button>
      </div>
    </div>
    //grid-screen ... //scripts
    <script src="./assets/js/config.js"></script>
    <script src="./assets/js/index.js"></script>
    <script src="https://sdk.videosdk.live/js-sdk/0.0.20/videosdk.js"></script>
  </body>
</html>
```

```html title="grid-screen"
//join-screen ... //grid-screen
<div id="grid-screen">
  <div>
    <input
      type="text"
      class="form-control navbar-brand"
      id="lblMeetingId"
      readonly
    />
    <button class="btn btn-dark" id="btnToggleMic">Unmute Mic</button>
    <button class="btn btn-dark" id="btnToggleWebCam">Disable Webcam</button>
    <button class="btn btn-dark" id="btnLeaveMeeting">Leave Meeting</button>
  </div>
  <br />
  <div id="videoContainer"></div>
  <div
    style="
          position: absolute;
          top: 10px;
          right: 0px;
          height: 50%;
          overflow-y: scroll;
        "
  >
    <h3>Participants List</h3>
    <div id="participantsList"></div>
  </div>
</div>
//scripts ...
```

### SDK Implementation

- **config.js file** : set token in this file which is generated from [here](https://app.videosdk.live/login).

```js title="config.js"
TOKEN = "";
```

- Now you have your token; to create a meeting and to validate it make use of API_BASE_URL mentioned below in index.js file

```jsx title="setting up API_BASE_URL index.js"
const API_BASE_URL = "https://api.videosdk.live";
```

- Now you have to validate your token, whether it is empty or not

```js title="token validation index.js"
//variables
let token = "";

//handlers
async function tokenGeneration() {
  if (TOKEN != "") {
    token = TOKEN;
    console.log("token : ", token);
  } else {
    alert("Please Provide Your Token First");
  }
}
```

- After checking your token now it's time to create a meeting that will generate one meeting object made up of multiple parameters. From those parameters, we will make use of meetingId and token to validate the meeting
- The code below in the code block says that if **newMeeting parameter of a meetingHandler set to true, meeting would be created** and **if you have meetingId then you can set newMeeting to false and validate meeting would be initiated.**

```js title="create and validate meeting index.js"
//variables
let meetingId = "";

async function meetingHandler(newMeeting) {
  let joinMeetingName = "JS-SDK";
  console.log(newMeeting);
  tokenGeneration();
  if (newMeeting) {
    const url = `${API_BASE_URL}/api/meetings`;
    const options = {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
    };

    const { meetingId } = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => alert("error", error));
    document.getElementById("lblMeetingId").value = meetingId;
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("grid-screen").style.display = "inline-block";
    startMeeting(token, meetingId, joinMeetingName);
  } else {
    meetingId = await validateMeeting();
    document.getElementById("lblMeetingId").value = meetingId;
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("grid-screen").style.display = "inline-block";
    startMeeting(token, meetingId, joinMeetingName);
  }
}

async function validateMeeting() {
  meetingId = document.getElementById("txtMeetingCode").value;
  const url = `${API_BASE_URL}/api/meetings/${meetingId}`;
  const options = {
    method: "POST",
    headers: { Authorization: token },
  };

  const result = await fetch(url, options)
    .then((response) => response.json()) //result will have meeting id
    .catch((error) => {
      console.error("error", error);
      alert("Invalid Meeting Id");
      window.location.href = "/";
      return;
    });
  if (result.meetingId === meetingId) {
    return meetingId;
  }
}
```

- so far you have created a meeting, and if meetingId exists then you have validated it. But to start a meeting;startMeeting handler is there.

```js title="startMeeting index.js"
//DOM elements
let btnCreateMeeting = document.getElementById("btnCreateMeeting");
let btnJoinMeeting = document.getElementById("btnJoinMeeting");
let videoContainer = document.getElementById("videoContainer");
let participantsList = document.getElementById("participantsList");
let btnToggleMic = document.getElementById("btnToggleMic");
let btnToggleWebCam = document.getElementById("btnToggleWebCam");

//variables
let totalParticipant = 0;
let participants = [];

function startMeeting(token, meetingId, name) {
  // Meeting config
  window.ZujoSDK.config(token);

  // Meeting Init
  meeting = window.ZujoSDK.initMeeting({
    meetingId: meetingId, // required
    name: name, // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
    maxResolution: "hd", // optional, default: "hd"
  });

  //join meeting
  meeting.join();

  //all remote participants
  participants = meeting.participants;

  //create Local Participant
  if (totalParticipant == 0) {
    createLocalParticipant();
  }

  //remote participant joined
  meeting.on("participant-joined", (participant) => {
    let videoElement = createVideoElement(participant.id);
    let audioElement = createAudioElement(participant.id);

    participant.on("stream-enabled", (stream) => {
      setTrack(stream, videoElement, audioElement, participant.id);
    });
    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(audioElement);
    addParticipantToList({
      id: participant.id,
      displayName: participant.displayName,
    });
  });

  //remote participants left
  meeting.on("participant-left", (participant) => {
    let vElement = document.getElementById(`v-${participant.id}`);
    vElement.parentNode.removeChild(vElement);
    let aElement = document.getElementById(`a-${participant.id}`);
    aElement.parentNode.removeChild(aElement);
    participants = new Map(meeting.participants);
    //remove it from participant list participantId;
    document.getElementById(`p-${participant.id}`).remove();
  });

  //local participant stream-enabled
  meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(
      stream,
      localParticipant,
      localParticipantAudio,
      meeting.localParticipant.id
    );
  });

  addDomEvents();
}

//createLocalParticipant
function createLocalParticipant() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      // audio: true,
    })
    .then((stream) => {
      joinPageWebcam.srcObject = stream;
      joinPageWebcam.play();
    });

  localParticipant = createVideoElement(meeting.localParticipant.id);
  localParticipantAudio = createAudioElement(meeting.localParticipant.id);
  addParticipantToList({
    id: meeting.localParticipant.id,
    displayName: meeting.localParticipant.displayName,
  });
  videoContainer.appendChild(localParticipant);
}

// creating video element
function createVideoElement(pId) {
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  return videoElement;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  return audioElement;
}

//add participant to list
function addParticipantToList({ id, displayName }) {
  totalParticipant++;
  let participantTemplate = document.createElement("div");
  participantTemplate.className = "row";
  participantTemplate.style.padding = "4px";
  participantTemplate.style.marginTop = "1px";
  participantTemplate.style.marginLeft = "7px";
  participantTemplate.style.marginRight = "7px";
  participantTemplate.style.borderRadius = "3px";
  participantTemplate.style.border = "1px solid rgb(61, 60, 78)";
  participantTemplate.style.backgroundColor = "rgb(61, 60, 78)";

  //icon
  let colIcon = document.createElement("div");
  colIcon.className = "col-2";
  colIcon.innerHTML = "Icon";
  participantTemplate.appendChild(colIcon);

  //name
  let content = document.createElement("div");
  colIcon.className = "col-3";
  colIcon.innerHTML = `${displayName}`;
  participantTemplate.appendChild(content);
  // participants.push({ id, displayName });

  participantsList.appendChild(participantTemplate);
  participantsList.appendChild(document.createElement("br"));
}

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

//events of DOM elements
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
    document.getElementById("home-screen").style.display = "inline-block";
    document.getElementById("grid-screen").style.display = "none";
  });
}
```

## Run your code

Once you are all set with the steps mentioned above run your application as mentioned in the code-block below.

```bash
live-server --port=8000
```

:::caution
For this tutorial purpose, we used a static token to initialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server that will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/javascript/guide/video-and-audio-calling-api-sdk/server-setup).
:::
