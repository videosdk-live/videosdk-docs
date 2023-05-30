---
title: Quick Start
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
  - Javascript SDK implemntation
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start for Conference in React

VideoSDK enables you to embed the video calling feature into your Javascript application in minutes.

In this quickstart, we are going to explore group calling feature of Video SDK. We will go through step by step guide of integrating video calling with Javascript Video SDK.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Have Node and NPM installed on your device.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/js-rtc).

First create one empty project using `mkdir folder_name` on your preferable location.

### Install Video SDK

You can import VideoSDK using `<script>` tag or you can install the VideoSDK using the below-mentioned npm command. Make sure you are in your react app directory before you run this command.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="<script>" label="<script>" default>

```html
<html>
  <head>
    ....
  </head>
  <body>
    .....
    <script src="https://sdk.videosdk.live/js-sdk/0.0.67/videosdk.js"></script>
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

## Run Project

To run your project; install live-server using the following command.

```bash
npm install -g live-server
```

## Structure of the project

Your project structure should look like this.

```jsx title="Project Structure"
   root-Folder Name
   ├── index.html
   ├── config.html
   ├── index.js
```

We are going to work on two files:

- index.html: Responsible to create basic UI.
- config.js: Responsible to store token.
- index.js: Responsible to render meeting view and join the meeting.

### Step 1 : Create UI

- create basic UI using following html file. where we have two screens `join-screen` and `grid-screen`

```html title="index.html"
<!DOCTYPE html>
<html>
  <head> </head>

  <body>
    <div id="join-screen">
      <!-- Create new Meeting Button -->
      <button id="createMeetingBtn">New Meeting</button>
      OR
      <!-- Join existing Meeting -->
      <input type="text" id="meetingIdTxt" placeholder="Enter Meeting id" />
      <button id="joinBtn">Join Meeting</button>
    </div>

    <!-- for Managing meeting status -->
    <div id="textDiv"></div>

    <div id="grid-screen" style="display: none">
      <!-- To Display MeetingId -->
      <h3 id="meetingIdHeading"></h3>

      <!-- Controllers -->
      <button id="leaveBtn">Leave</button>
      <button id="toggleMicBtn">Toggle Mic</button>
      <button id="toggleWebCamBtn">Toggle WebCam</button>

      <!-- render Video -->
      <div class="row" id="videoContainer"></div>
    </div>
    <script src="https://sdk.videosdk.live/js-sdk/0.0.63/videosdk.js"></script>
    <script src="config.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

### Step 2 : Implement Join Screen

- set token in `config.js` file which is generated from [here](https://app.videosdk.live/login).

```js title="index.js"
TOKEN = "Your_Token_Here";
```

- Now get all elements from Dom and declare following variables in `index.js` file and then add Event Listener to the join and create meeting buttons.

```js title="index.js"
// getting Elements from Dom
const joinButton = document.getElementById("joinBtn");
const leaveButton = document.getElementById("leaveBtn");
const toggleMicButton = document.getElementById("toggleMicBtn");
const toggleWebCamButton = document.getElementById("toggleWebCamBtn");
const createButton = document.getElementById("createMeetingBtn");
const videoContainer = document.getElementById("videoContainer");
const textDiv = document.getElementById("textDiv");

// declare Variables
let meeting = null;
let meetingId = "";
let isMicOn = false;
let isWebCamOn = false;

// Join Meeting Button Event Listener
joinButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Joining the meeting...";

  roomId = document.getElementById("meetingIdTxt").value;
  meetingId = roomId;

  await initializeMeeting();
});

// Create Meeting Button Event Listener
createButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Please wait, we are joining the meeting";

  const url = `https://api.videosdk.live/v2/rooms`;
  const options = {
    method: "POST",
    headers: { Authorization: TOKEN, "Content-Type": "application/json" },
  };

  const { roomId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => alert("error", error));
  meetingId = roomId;

  await initializeMeeting();
});
```

### Step 3 : Initialize meeting

- so far you have created a meeting and to join a meeting, now initialize meeting through `initializeMeeting()` function.

```js title="startMeeting index.js"
// Initialize meeting
async function initializeMeeting() {
  window.VideoSDK.config(token);

  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId, // required
    name: "Tirth", // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
  });

  meeting.join();

  // creating local participant
  createLocalParticipant();

  // setting local participant stream
  meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(stream, null, meeting.localParticipant, true);
  });

  meeting.on("meeting-joined", () => {
    textDiv.style.display = "none";
    document.getElementById("grid-screen").style.display = "block";
    document.getElementById(
      "meetingIdHeading"
    ).textContent = `Meeting Id: ${meetingId}`;
  });

  meeting.on("meeting-left", () => {
    videoContainer.innerHTML = "";
  });

  // other participants
  meeting.on("participant-joined", (participant) => {
    //  ...
  });

  // participants left
  meeting.on("participant-left", (participant) => {
    //  ...
  });
}
```

### Step 4 : Create Element

- Write the following methods to create audio and video element to create both local and remote participants.

```js title=index.js
// creating video element
function createVideoElement(pId, name) {
  let videoFrame = document.createElement("div");
  videoFrame.setAttribute("id", `f-${pId}`);

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  videoElement.setAttribute("playsinline", true);
  videoElement.setAttribute("width", "300");
  videoFrame.appendChild(videoElement);

  let displayName = document.createElement("div");
  displayName.innerHTML = `Name : ${name}`;

  videoFrame.appendChild(displayName);
  return videoFrame;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  audioElement.style.display = "none";
  return audioElement;
}

// creating local participant
function createLocalParticipant() {
  let localParticipant = createVideoElement(
    meeting.localParticipant.id,
    meeting.localParticipant.displayName
  );
  videoContainer.appendChild(localParticipant);
}

// setting media track
function setTrack(stream, audioElement, participant, isLocal) {
  if (stream.kind == "video") {
    isWebCamOn = true;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    let videoElm = document.getElementById(`v-${participant.id}`);
    videoElm.srcObject = mediaStream;
    videoElm
      .play()
      .catch((error) =>
        console.error("videoElem.current.play() failed", error)
      );
  }
  if (stream.kind == "audio") {
    if (isLocal) {
      isMicOn = true;
    } else {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(stream.track);
      audioElement.srcObject = mediaStream;
      audioElement
        .play()
        .catch((error) => console.error("audioElem.play() failed", error));
    }
  }
}
```

### Step 5 : Handle participant events

- `participant-joined` event is called when other participants join the meeting and `participant-left` event is called when participants leave the meeting.

```js title="index.js"
// Initialize meeting
async function initializeMeeting() {
  // ...

  //  participant joined
  meeting.on("participant-joined", (participant) => {
    let videoElement = createVideoElement(
      participant.id,
      participant.displayName
    );
    let audioElement = createAudioElement(participant.id);

    participant.on("stream-enabled", (stream) => {
      setTrack(stream, audioElement, participant, false);
    });
    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(audioElement);
  });

  // participants left
  meeting.on("participant-left", (participant) => {
    let vElement = document.getElementById(`f-${participant.id}`);
    vElement.remove(vElement);

    let aElement = document.getElementById(`a-${participant.id}`);
    aElement.remove(aElement);
  });
}
```

### Step 6 : Common Functionalities

- To manage some common functionalities such as leave Meeting, toggleMic and toggleWebcam add event listener as shown below.

```js title="index.js"
// leave Meeting Button Event Listener
leaveButton.addEventListener("click", async () => {
  meeting?.leave();
  document.getElementById("grid-screen").style.display = "none";
  document.getElementById("join-screen").style.display = "block";
});

// Toggle Mic Button Event Listener
toggleMicButton.addEventListener("click", async () => {
  if (isMicOn) {
    // Disable Mic in Meeting
    meeting?.muteMic();
  } else {
    // Enable Mic in Meeting
    meeting?.unmuteMic();
  }
  isMicOn = !isMicOn;
});

// Toggle Web Cam Button Event Listener
toggleWebCamButton.addEventListener("click", async () => {
  if (isWebCamOn) {
    // Disable Webcam in Meeting
    meeting?.disableWebcam();

    let vElement = document.getElementById(`f-${meeting.localParticipant.id}`);
    vElement.style.display = "none";
  } else {
    // Enable Webcam in Meeting
    meeting?.enableWebcam();

    let vElement = document.getElementById(`f-${meeting.localParticipant.id}`);
    vElement.style.display = "inline";
  }
  isWebCamOn = !isWebCamOn;
});
```

:::tip

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example) on GitHub

:::

## Run your code

Once you are all set with the steps mentioned above run your application as mentioned in the code-block below.

```bash
live-server --port=8000
```

#### **It's outcome will look like this**

![JS-Join Screen](/img/quick-start/js-join-screen.png)
![JS-Grid Screen](/img/quick-start/js-grid-screen.png)

:::caution
For this tutorial purpose, we used a static token to initialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server that will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/javascript/guide/video-and-audio-calling-api-sdk/server-setup).
:::
