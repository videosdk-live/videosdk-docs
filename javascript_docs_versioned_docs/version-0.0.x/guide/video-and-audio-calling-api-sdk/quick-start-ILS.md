---
title: Quick Start With Interactive Live Streaming
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start With Interactive Live Streaming
pagination_label: Quick Start With Interactive Live Streaming
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-ILS
---

# Quick Start for Interactive Live Streaming in React

VideoSDK enables you to embed the video calling feature into your Javascript application in minutes.

In this quickstart, we are going to explore interactive live streaming feature of Video SDK. We will go through step by step guide of integrating video calling with Javascript Video SDK

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

Follow the steps to create the environment necessary to add video calls into your app.Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/js-hls).

### Install Video SDK

You can import VideoSDK using `<script>` tag or you can install the VideoSDK using the below-mentioned npm command. Make sure you are in your app directory before you run this command.

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

## Structure of the project

Your project structure should look like this.

```jsx title="Project Structure"
  root
   ├── index.html
   ├── config.js
   ├── index.js
```

We are going to work on two files:

- index.html: Responsible to create basic UI.
- config.js: Responsible to store token.
- index.js: Responsible to render meeting view and join the meeting.

### Step 1 : Create UI

In this step, we are going to create HTML file which will have two screens `join-screen` and `grid-screen`.

```js title="index.html"
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
        <button id="joinHostBtn">Join As Host</button>
        <button id="joinViewerBtn">Join As Viewer</button>
    </div>

    <!-- for Managing meeting status -->
    <div id="textDiv"></div>

    <div id="grid-screen" style="display: none">
        <!-- To Display MeetingId -->
        <h3 id="meetingIdHeading"></h3>
        <h3 id="hlsStatusHeading"></h3>

        <div id="speakerView" style="display: none">
            <!-- Controllers -->
            <button id="leaveBtn">Leave</button>
            <button id="toggleMicBtn">Toggle Mic</button>
            <button id="toggleWebCamBtn">Toggle WebCam</button>
            <button id="startHlsBtn">Start HLS</button>
            <button id="stopHlsBtn">Stop HLS</button>
        </div>

        <!-- render Video -->
        <div id="videoContainer"></div>
    </div>
    <script src="https://sdk.videosdk.live/js-sdk/0.0.63/videosdk.js"></script>
    <script src="config.js"></script>
    <script src="index.js"></script>

    <!-- hls lib script  -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
</body>

</html>
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_join_screen.png' />

</center>

### Step 2: Implement Join Screen

Set token in `config.js` file which is generated from [here](https://app.videosdk.live/login).

```js title="config.js"
// Auth token we will use to generate a meeting and connect to it
TOKEN = "Your_Token_Here";
```

Now get all elements from DOM and declare following variables in `index.js` file and then add Event Listener to the join and create meeting buttons.

Join screen will work as medium to either schedule new meeting or to join existing meeting as a host or as a viewer.

These will have 3 buttons:

`1. Join as Host:` When this button is clicked, the person will join the entered `meetingId` as `HOST`.

`2. Join as Viewer:` When this button is clicked, the person will join the entered `meetingId` as `VIEWER`.

`3. New Meeting:` When this button is clicked, the person will join a new meeting as `HOST`.

```js title="index.js"
// getting Elements from Dom
const joinHostButton = document.getElementById("joinHostBtn");
const joinViewerButton = document.getElementById("joinViewerBtn");
const leaveButton = document.getElementById("leaveBtn");
const startHlsButton = document.getElementById("startHlsBtn");
const stopHlsButton = document.getElementById("stopHlsBtn");
const toggleMicButton = document.getElementById("toggleMicBtn");
const toggleWebCamButton = document.getElementById("toggleWebCamBtn");
const createButton = document.getElementById("createMeetingBtn");
const videoContainer = document.getElementById("videoContainer");
const textDiv = document.getElementById("textDiv");
const hlsStatusHeading = document.getElementById("hlsStatusHeading");

// declare Variables
let meeting = null;
let meetingId = "";
let isMicOn = false;
let isWebCamOn = false;

const Constants = VideoSDK.Constants;

async function initializeMeeting() {}

function createLocalParticipant() {}

function createVideoElement() {}

function createAudioElement() {}

function setTrack() {}

// Join Meeting As Host Button Event Listener
joinHostButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Joining the meeting...";

  roomId = document.getElementById("meetingIdTxt").value;
  meetingId = roomId;

  await initializeMeeting(Constants.modes.CONFERENCE);
});

// Join Meeting As Viewer Button Event Listener
joinViewerButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Joining the meeting...";

  roomId = document.getElementById("meetingIdTxt").value;
  meetingId = roomId;

  await initializeMeeting(Constants.modes.VIEWER);
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

  await initializeMeeting(Constants.modes.CONFERENCE);
});
```

### Step 3: Initialize meeting

Initialise the meeting by mode passed to the function and only create a local participant stream when mode is "CONFERENCE".

```js title="index.s"
// Initialize meeting
async function initializeMeeting(mode) {
  window.VideoSDK.config(TOKEN);

  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId, // required
    name: "Tirth", // required
    mode: mode,
  });

  meeting.join();

  meeting.on("meeting-joined", () => {
    textDiv.textContent = null;

    document.getElementById("grid-screen").style.display = "block";
    document.getElementById(
      "meetingIdHeading"
    ).textContent = `Meeting Id: ${meetingId}`;

    if (meeting.hlsState === Constants.hlsEvents.HLS_STOPPED) {
      hlsStatusHeading.textContent = "HLS Not Stared Yet";
    } else {
      hlsStatusHeading.textContent = `HLS Status: ${meeting.hlsState}`;
    }

    if (mode === Constants.modes.CONFERENCE) {
      document.getElementById("speakerView").style.display = "block";
    }
  });

  meeting.on("meeting-left", () => {
    videoContainer.innerHTML = "";
  });

  meeting.on("hls-state-changed", (data) => {
    //
  });

  if (mode === Constants.modes.CONFERENCE) {
    // creating local participant
    createLocalParticipant();

    // setting local participant stream
    meeting.localParticipant.on("stream-enabled", (stream) => {
      setTrack(stream, null, meeting.localParticipant, true);
    });

    //  participant joined
    meeting.on("participant-joined", (participant) => {
      if (participant.mode === Constants.modes.CONFERENCE) {
        participant.pin();

        let videoElement = createVideoElement(
          participant.id,
          participant.displayName
        );

        participant.on("stream-enabled", (stream) => {
          setTrack(stream, audioElement, participant, false);
        });

        let audioElement = createAudioElement(participant.id);
        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(audioElement);
      }
    });

    // participants left
    meeting.on("participant-left", (participant) => {
      let vElement = document.getElementById(`f-${participant.id}`);
      vElement.remove(vElement);

      let aElement = document.getElementById(`a-${participant.id}`);
      aElement.remove(aElement);
    });
  }
}
```

### Step 4: Speaker Controls

Next step is to create `SpeakerView` and `Controls` componenets to manage features such as join, leave, mute and unmute.

We will get all the `participants` from `meeting` object and filter them for the mode set to `CONFERENCE` so only Speakers are shown on the screen.

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

// Start Hls Button Event Listener
startHlsButton.addEventListener("click", async () => {
  meeting?.startHls({
    layout: {
      type: "SPOTLIGHT",
      priority: "PIN",
      gridSize: "20",
    },
    theme: "LIGHT",
    mode: "video-and-audio",
    quality: "high",
    orientation: "landscape",
  });
});

// Stop Hls Button Event Listener
stopHlsButton.addEventListener("click", async () => {
  meeting?.stopHls();
});
```

### Step 5: Speaker Media Elements

In this step, we will create a function that helps us to create audio and video elements for displaying local and remote participants for speaker. We will also set the appropriate media track based on whether it's a video or audio.

```js title="index.js"
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

### Step 6: Implement ViewerView

When host start the live streaming, viewer will be able to see the live streaming.

To implement player view, we are going to use `hls.js`. It will be helpful to play hls stream.We have already added script of `hls.js` in `index.html` file.

Now on the `hls-state-changed` event, when participant mode is set to `VIEWER` and the status of hls is `HLS_PLAYABLE`, we will pass the downstreamUrl to the hls.js and play it.

```js title="index.js"
meeting.on("hls-state-changed", (data) => {
  const { status } = data;

  hlsStatusHeading.textContent = `HLS Status: ${status}`;

  if (mode === Constants.modes.VIEWER) {
    if (status === Constants.hlsEvents.HLS_PLAYABLE) {
      const { downstreamUrl } = data;
      let video = document.createElement("video");
      video.setAttribute("width", "100%");

      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(downstreamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = downstreamUrl;
        video.addEventListener("canplay", function () {
          video.play();
        });
      }

      videoContainer.appendChild(video);
    }

    if (status === Constants.hlsEvents.HLS_STOPPING) {
      videoContainer.innerHTML = "";
    }
  }
});
```

#### Output of ViewerView

![VideoSDK React Interactive Live Streaming Quick Start Meeting Container Component](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_viewer.png)

#### Final Output

We are done with implementation of customised video calling app in Javascript using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_video.mp4" height="500px" width={"100%"} />

</div>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/js-hls).
:::
