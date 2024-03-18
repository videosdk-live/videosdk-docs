---
title: Quick Start
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Audio / Video Call
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

# Quick Start for Conference in Javascript

VideoSDK empowers you to seamlessly integrate the video calling feature into your Javascript application within minutes.

In this quickstart, you'll explore the group calling feature of VideoSDK. Follow the step-by-step guide to integrate it within your application.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Have Node and NPM installed on your device.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. You can also find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/js-rtc).

First create one empty project using `mkdir folder_name` on your preferable location.

### Install Video SDK

Import VideoSDK using the `<script>` tag or Install it using the following npm command. Make sure you are in your app directory before you run this command.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="<script>" label="<script>" default>

```html
<html>
  <head>
    <!--.....-->
  </head>
  <body>
    <!--.....-->
    <script src="https://sdk.videosdk.live/js-sdk/0.0.82/videosdk.js"></script>
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

You will be working on the following files:

- index.html: Responsible for creating a basic UI.
- config.js: Responsible for storing the token.
- index.js: Responsible for rendering the meeting view and the join meeting functionality.

### Step 1 : Design the user interface (UI)

Create an HTML file containing the screens, `join-screen` and `grid-screen`.

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

    <!-- Add VideoSDK script -->
    //highlight-next-line
    <script src="https://sdk.videosdk.live/js-sdk/0.0.82/videosdk.js"></script>
    <script src="config.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_join_screen.png' />

</center>

### Step 2 : Implement Join Screen

Configure the token in the `config.js` file, which you can obtain from the [VideoSDK Dashbord](https://app.videosdk.live/login).

```js title="config.js"
// Auth token will be used to generate a meeting and connect to it
TOKEN = "Your_Token_Here";
```

Next, retrieve all the elements from the DOM and declare the following variables in the `index.js` file. Then, add an event listener to the join and create meeting buttons.

```js title="index.js"
// Getting Elements from DOM
const joinButton = document.getElementById("joinBtn");
const leaveButton = document.getElementById("leaveBtn");
const toggleMicButton = document.getElementById("toggleMicBtn");
const toggleWebCamButton = document.getElementById("toggleWebCamBtn");
const createButton = document.getElementById("createMeetingBtn");
const videoContainer = document.getElementById("videoContainer");
const textDiv = document.getElementById("textDiv");

// Declare Variables
let meeting = null;
let meetingId = "";
let isMicOn = false;
let isWebCamOn = false;

function initializeMeeting() {}

function createLocalParticipant() {}

function createVideoElement() {}

function createAudioElement() {}

function setTrack() {}

// Join Meeting Button Event Listener
joinButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Joining the meeting...";

  roomId = document.getElementById("meetingIdTxt").value;
  meetingId = roomId;

  initializeMeeting();
});

// Create Meeting Button Event Listener
createButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Please wait, we are joining the meeting";

  //highlight-start
  // API call to create meeting
  const url = `https://api.videosdk.live/v2/rooms`;
  const options = {
    method: "POST",
    headers: { Authorization: TOKEN, "Content-Type": "application/json" },
  };

  const { roomId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => alert("error", error));
  meetingId = roomId;
  //highlight-end

  initializeMeeting();
});
```

### Step 3 : Initialize meeting

Following that, initialize the meeting using the `initMeeting()` function and proceed to join the meeting.

```js title="index.js"
// Initialize meeting
function initializeMeeting() {
  window.VideoSDK.config(TOKEN);

  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId, // required
    name: "Thomas Edison", // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
  });

  meeting.join();

  // Creating local participant
  createLocalParticipant();

  // Setting local participant stream
  meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(stream, null, meeting.localParticipant, true);
  });

  // meeting joined event
  meeting.on("meeting-joined", () => {
    textDiv.style.display = "none";
    document.getElementById("grid-screen").style.display = "block";
    document.getElementById(
      "meetingIdHeading"
    ).textContent = `Meeting Id: ${meetingId}`;
  });

  // meeting left event
  meeting.on("meeting-left", () => {
    videoContainer.innerHTML = "";
  });

  // Remote participants Event
  // participant joined
  meeting.on("participant-joined", (participant) => {
    //  ...
  });

  // participant left
  meeting.on("participant-left", (participant) => {
    //  ...
  });
}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_init_meeting.png' />

</center>

### Step 4 : Create the Media Elements

In this step, Create a function to generate audio and video elements for displaying both local and remote participants. Set the corresponding media track based on whether it's a video or audio stream.

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

Thereafter, implement the events related to the participants and the stream.

Following are the events to be executed in this step:

1. `participant-joined`: When a remote participant joins, this event will trigger. In the event callback, create video and audio elements previously defined for rendering their video and audio streams.

2. `participant-left`: When a remote participant leaves, this event will trigger. In the event callback, remove the corresponding video and audio elements.

3. `stream-enabled`: This event manages the media track of a specific participant by associating it with the appropriate video or audio element.

```js title="index.js"
// Initialize meeting
function initializeMeeting() {
  // ...

  // participant joined
  meeting.on("participant-joined", (participant) => {
    let videoElement = createVideoElement(
      participant.id,
      participant.displayName
    );
    let audioElement = createAudioElement(participant.id);
    // stream-enabled
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

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_grid_screen.png' />

</center>

### Step 6 : Implement Controls

Next, implement the meeting controls such as toggleMic, toggleWebcam and leave meeting.

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

## Run your code

Once you have completed all the steps mentioned above, run your application using the code block below.

```bash
live-server --port=8000
```

## Final Output

You have completed the implementation of a customized video calling app in Javascript using VideoSDK. To explore more features, go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/js_quickstart_output.mp4' width={"100%"} />

<br/>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/js-rtc).
:::
