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

# Quick Start for Interactive Live Streaming in Javascript

VideoSDK empowers you to seamlessly integrate the interactive live streaming feature into your Javascript application within minutes.

In this quickstart, you'll explore this feature of VideoSDK. Follow the step-by-step guide to integrate it within your application.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Have Node and NPM installed on your device.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. You can also find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/js-hls).

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
    <script src="https://sdk.videosdk.live/js-sdk/0.0.78/videosdk.js"></script>
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
      <button id="createMeetingBtn">Create Meeting</button>
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
    <script src="https://sdk.videosdk.live/js-sdk/0.0.78/videosdk.js"></script>
    <script src="config.js"></script>
    <script src="index.js"></script>

    <!-- hls lib script  -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
  </body>
</html>
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_ils_join_screen.png' />

</center>

### Step 2: Implement Join Screen

Configure the token in the `config.js` file, which you can obtain from the [VideoSDK Dashbord](https://app.videosdk.live/login).

```js title="config.js"
// Auth token will be used to generate a meeting and connect to it
TOKEN = "Your_Token_Here";
```

Next, retrieve all the elements from the DOM and declare the following variables in the `index.js` file. Then, add an event listener to the join and create meeting buttons.

Join screen will serve as a medium to either schedule a new meeting or join an existing one as a host or a viewer.

This functionality will have 3 buttons:

`1. Join as Host:` When this button is clicked, the person will join the meeting with the entered `meetingId` as `HOST`.

`2. Join as Viewer:` When this button is clicked, the person will join the meeting with the entered `meetingId` as `VIEWER`.

`3. Create Meeting:` When this button is clicked, the person will join a new meeting as `HOST`.

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

function initializeMeeting() {}

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

  initializeMeeting(Constants.modes.CONFERENCE);
});

// Join Meeting As Viewer Button Event Listener
joinViewerButton.addEventListener("click", async () => {
  document.getElementById("join-screen").style.display = "none";
  textDiv.textContent = "Joining the meeting...";

  roomId = document.getElementById("meetingIdTxt").value;
  meetingId = roomId;

  initializeMeeting(Constants.modes.VIEWER);
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

  initializeMeeting(Constants.modes.CONFERENCE);
});
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_ils_waiting.png' />

</center>

### Step 3: Initialize meeting

Initialize the meeting based on the mode passed to the function and only create a local participant stream when the mode is `CONFERENCE`.

```js title="index.s"
// Initialize meeting
function initializeMeeting(mode) {
  window.VideoSDK.config(TOKEN);

  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId, // required
    name: "Thomas Edison", // required
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
      hlsStatusHeading.textContent = "HLS has not stared yet";
    } else {
      hlsStatusHeading.textContent = `HLS Status: ${meeting.hlsState}`;
    }

    if (mode === Constants.modes.CONFERENCE) {
      // highlight-start
      // Pin the local participant if he joins in `CONFERENCE` mode
      meeting.localParticipant.pin();
      // highlight-end

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

    // participant joined
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

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_ils_controls.png' />

</center>

### Step 4: Speaker Controls

Next step is to create `SpeakerView` and `Controls` components to manage features such as join, leave, mute and unmute.

You have to retrieve all the `participants` using the `meeting` object and filter them based on the mode set to `CONFERENCE` ensuring that only Speakers are displayed on the screen.

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

In this step, Create a function to generate audio and video elements for displaying both local and remote participants for the speaker. Set the corresponding media track based on whether it's a video or audio stream.

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

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_ils_speaker_view.png' />

</center>

### Step 6: Implement ViewerView

When the host initiates the live streaming, viewers will be able to watch it.

To implement the player view, you have to use `hls.js`. It will be helpful for playing the HLS stream. The script of `hls.js` file already added in the `index.html` file.

Now on the `hls-state-changed` event, when participant mode is set to `VIEWER` and the status of hls is `HLS_PLAYABLE`, pass the downstreamUrl to the hls.js and play it.

```js title="index.js"
// Initialize meeting
function initializeMeeting() {
  // ...

  // hls-state-chnaged event
  meeting.on("hls-state-changed", (data) => {
    const { status } = data;

    hlsStatusHeading.textContent = `HLS Status: ${status}`;

    if (mode === Constants.modes.VIEWER) {
      if (status === Constants.hlsEvents.HLS_PLAYABLE) {
        const { downstreamUrl } = data;
        let video = document.createElement("video");
        video.setAttribute("width", "100%");
        video.setAttribute("muted", "false");
        // highlight-start
        // enableAutoPlay for browser autoplay policy
        video.setAttribute("autoplay", "true");
        // highlight-end

        if (Hls.isSupported()) {
          var hls = new Hls({
            maxLoadingDelay: 1, // max video loading delay used in automatic start level selection
            defaultAudioCodec: "mp4a.40.2", // default audio codec
            maxBufferLength: 0, // If buffer length is/become less than this value, a new fragment will be loaded
            maxMaxBufferLength: 1, // Hls.js will never exceed this value
            startLevel: 0, // Start playback at the lowest quality level
            startPosition: -1, // set -1 playback will start from intialtime = 0
            maxBufferHole: 0.001, // 'Maximum' inter-fragment buffer hole tolerance that hls.js can cope with when searching for the next fragment to load.
            highBufferWatchdogPeriod: 0, // if media element is expected to play and if currentTime has not moved for more than highBufferWatchdogPeriod and if there are more than maxBufferHole seconds buffered upfront, hls.js will jump buffer gaps, or try to nudge playhead to recover playback.
            nudgeOffset: 0.05, // In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback. media.currentTime += (nb nudge retry -1)*nudgeOffset
            nudgeMaxRetry: 1, // Max nb of nudge retries before hls.js raise a fatal BUFFER_STALLED_ERROR
            maxFragLookUpTolerance: .1, // This tolerance factor is used during fragment lookup. 
            liveSyncDurationCount: 1, // if set to 3, playback will start from fragment N-3, N being the last fragment of the live playlist
            abrEwmaFastLive: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
            abrEwmaSlowLive: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
            abrEwmaFastVoD: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
            abrEwmaSlowVoD: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
            maxStarvationDelay: 1, // ABR algorithm will always try to choose a quality level that should avoid rebuffering
          });
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
}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_ils_viewer_view.png' />

</center>

#### Final Output

You have completed the implementation of a customised live streaming app in Javascript using VideoSDK. To explore more features, go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/js_ils_quick_start.mp4" height="500px" width={"100%"} />

</div>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/js-hls).
:::
