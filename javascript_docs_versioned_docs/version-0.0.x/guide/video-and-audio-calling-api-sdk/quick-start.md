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
  - collabration
  - Javascript SDK implemntation
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

import Mermaid from '@theme/Mermaid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.
This guide will get you running with the VideoSDK video & audio calling in minutes.

<!-- ## Sample Project

This quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example). Once you are done with the tutorial given below your app should look like this.

## Screenshots

![VideoSDK JS Quick Start Join Screen](/img/quick-start/js-join-screen.png) ![VideoSDK JS Quick Start Meeting Screen](/img/quick-start/js-grid-screen.png) -->

## Prerequisite

#### Software Requirements

- Node.js v12+
- NPM v6+ (comes pre-installed with newer Node versions)

:::important

One should have a videoSDK account to generate token.
Visit videoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Project Structure

1. Create one empty project using `mkdir folder_name` on your preferable location.
2. Set up the structure of your project shown in the directory structure below:

```jsx title="Directory Structure"
   root-Folder Name
   ├── index.html
   ├── assets
   │    ├── css
   |    |    ├── index.css
   │    ├── js
   |         ├── index.js
   |         ├── config.js
```

3. To run your project; install live-server using the following command.

```bash
npm install -g live-server
```

4. SDK Integration

<Tabs>
<TabItem value="<script>" label="<script>" default>

```html
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

## Start Writing Your Code

### Step 1 : Create UI

For this tutorial, we have made use of bootstrap and `assests/index.css` file for making UI a bit responsive.
Refer assets/index.css file from [here](/) for basic css effects

```html title="index.html"
<html>
  <head>
    <!--favicon-->
    <link
      rel="shortcut icon"
      href="https://videosdk.live/favicon/favicon.ico"
    />
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./assets/css/index.css" />
    <!--add necessary bootstrap links here -->
    ...
  </head>
  <body class="bg-secondary">
    <!--join-screen-->
    <div
      id="join-screen"
      class="flex flex-row align-items-center justify-content-center h-100"
    >
      <button
        class="btn btn-primary"
        id="btnCreateMeeting"
        onclick="joinMeeting(true)"
      >
        New Meeting
      </button>

      <input
        type="text"
        id="txtMeetingCode"
        placeholder="Enter Meeting Code .."
      />
      <button
        id="btnJoinMeeting"
        onclick="joinMeeting(false)"
        class="btn btn-primary"
      >
        Join
      </button>
    </div>
    <!--grid-screen-->
    ...
    <!--scripts-->
    <script src="./assets/js/config.js"></script>
    <script src="./assets/js/index.js"></script>
    <script src="https://sdk.videosdk.live/js-sdk/0.0.20/videosdk.js"></script>
  </body>
</html>
```

- An outcome of the above code block will be same as shown in an image below.

![JS-Join Screen](/img/quick-start/js-join-screen.png)

- Now to create grid of participants you will require one main container (`div`) which will dynamically contain sub container (`div`) for each participant.

```html title="index.html"
<!--grid screen-->
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
  <!-- main container where partcipant's grid will be formed dynamically -->
  <div id="videoContainer"></div>
</div>
```

### Step 2 : Meeting Initialisation

- **config.js file** : Set token of videoSDK in `config.js` file which you can generate from [VideoSDK Dashboard](https://app.videosdk.live/login).

```js title="config.js"
TOKEN = "";
```

- After setting up token you have access to videoSDK's endpoints by setting the URL mentioned below to your `index.js` file

```jsx title="setting up API_BASE_URL in index.js"
const API_BASE_URL = "https://api.videosdk.live";
```

- The next step is to validate token whether it is empty or not in order to minimize risk of getting error while passing token to videoSDK's endpoints.

```js title="token validation index.js"
//variables
let token = "";

//handlers
async function tokenValidation() {
  if (TOKEN != "") {
    token = TOKEN;
  } else {
    alert("Please Provide Your Token First");
  }
}
```

- After checking your token now it's time to create a meeting that will generate one meeting object made up of multiple parameters. To refer more about meeting object refer [meeting class](../../api/sdk-reference/meeting-class/)
- The code below in the code block says that if **newMeeting parameter of a joinMeeting set to true, meeting will be created** and **if you have meetingId then you can set newMeeting to false and join operation will be performed.**

```js title="create and validate meeting index.js"
//variables
let meetingId = "";
let joinMeetingName = "";
let stream = {};

async function create() {
  //...
}
async function join() {
  //...
}
async function startMeeting(token, meetingId, name) {
  //...
}

async function joinMeeting(newMeeting) {
  joinMeetingName = "JS-SDK";

  //request permission for accessing media(mic/webcam)
  stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  //token validation
  tokenValidation();
  if (newMeeting) {
    create();
  } else {
    join();
  }
}
```

- Have a look to code block below that depict how you can create a meeting using VideoSDK

```js title="create()"
async function create() {
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
}
```

- If meeting object exist then to join a meeting you need to set following

```js title="join()"
async function join() {
  meetingId = document.getElementById("txtMeetingCode").value;
  document.getElementById("lblMeetingId").value = meetingId;
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("grid-screen").style.display = "inline-block";
  startMeeting(token, meetingId, joinMeetingName);
}
```

- so far you have created a meetingId by using VideoSDK endpoint ; now to start a meeting you have to initialize meeting object of [meeting-class](../../api/sdk-reference/meeting-class/) to gain advantage of VideoSDK [meeting-class](../../api/sdk-reference/meeting-class/)
- For that you need to have a function `startMeeting`as shown in code block below.

```js title="startMeeting index.js"
//DOM elements
let btnCreateMeeting = document.getElementById("btnCreateMeeting");
let btnJoinMeeting = document.getElementById("btnJoinMeeting");
let videoContainer = document.getElementById("videoContainer");
let btnLeaveMeeting = document.getElementById("btnLeaveMeeting");
let btnToggleMic = document.getElementById("btnToggleMic");
let btnToggleWebCam = document.getElementById("btnToggleWebCam");

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

  //for Local Participant join
  meeting.on("meeting-joined",()=>{
    createParticipant(meeting.localParticipant);

    //local participant stream-enabled
    meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(
      stream,
      localParticipant,
      localParticipantAudio,
      meeting.localParticipant.id
    );
    });
    //local participant stream-disabled
    meeting.localParticipant.on("stream-disabled", (stream) => {
      console.log("local participant stream disabled");
      setTrack(
        stream,
        document.getElementById(`v-${meeting.localParticipant.id}`),
        document.getElementById(`a-${meeting.localParticipant.id}`),
        meeting.localParticipant.id
      );
    });
  });

  //for remote participant join
  meeting.on("participant-joined", (participant) => {
    createParticipant(participant);
    participant.on("stream-enabled", (stream) => {
      console.log("Stream ENable : ", stream);
      setTrack(
        stream,
        document.querySelector(`#v-${participant.id}`),
        document.getElementById(`a-${participant.id}`),
        participant.id
      );
    });
  });

  //for any participant left
  meeting.on("participant-left", (participant) => {
    let vElement = document.querySelector(`#v-${participant.id}`);
    vElement.parentNode.removeChild(vElement);
    let aElement = document.getElementById(`a-${participant.id}`);
    aElement.parentNode.removeChild(aElement);
    participants = new Map(meeting.participants);
    //remove it from participant list participantId;
    document.getElementById(`p-${participant.id}`).remove();
  });

  //remote participant joined

  addDomEvents();
}

function setTrack(stream, videoElem, audioElement, id) {...}
```

- Write a method createParticipant which will create video and audio element dynamically when any participant joins the meeting.

```js title=index.js
...
//createParticipant
function createParticipant(participant) {

  //create videoElem of participant
  let participantVideo = createVideoElement(
    participant.id,
    participant.displayName
  );

  //create audioEle of participant
  let participantAudio = createAudioElement(participant.id);

  //append video and audio of participant to videoContainer div
  videoContainer.appendChild(participantVideo);
  videoContainer.appendChild(participantAudio);
}

// creating video element
function createVideoElement(id, name) {
  let videoFrame = document.createElement("div");
  videoFrame.classList.add("video-frame");

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video");
  videoElement.setAttribute("id", `v-${id}`);
  videoElement.setAttribute("autoplay", true);
  videoFrame.appendChild(videoElement);

  //add overlay
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.innerHTML = `Name : ${name}`;

  videoFrame.appendChild(overlay);
  return videoFrame;
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

- To manage streams (audio/video) of any participant , create `setTrack handler`.

```js title="index.js"
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

- To manage some common functionalities such as toggleMic and toggleWebcam add dom element events as shown below.

```js title="index.js"
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

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example) on GitHub

:::

## Run your code

Once you are all set with the steps mentioned above run your application as mentioned in the code-block below.

```bash
live-server --port=8000
```

#### **It's outcome will look like this**

![JS-Grid Screen](/img/quick-start/js-grid-screen.png)

:::caution
For this tutorial purpose, we used a static token to initialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server that will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/javascript/guide/video-and-audio-calling-api-sdk/server-setup).
:::
