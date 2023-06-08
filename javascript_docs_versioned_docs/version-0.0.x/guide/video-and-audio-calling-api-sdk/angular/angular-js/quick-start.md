---
title: Quick Start
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call With Angular JS
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

# Quick Start for Conference in Angular JS

VideoSDK enables you to embed the video calling feature into your Angular JS application in minutes.

In this quickstart, we are going to explore group calling feature of Video SDK. We will go through step by step guide of integrating video calling with Angular JS Video SDK.

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

Follow the steps to create the environment necessary to add video calls into your app. Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/angular-rtc/videosdk_angular_js_quickstart).

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
   ├── app
   │    ├── lib
   │        ├── angular.min.js
   │    ├── app.js
   ├── content
   │    ├── css
   │        ├── styles.css
   ├── views
   │     ├── joinScreen.html
   │     ├── meetingContainer.html
   │     ├── topBar.html
   ├── config.js
   ├── index.js
```

We are going to work on following files:

- joinScreen.html: Responsible to create basic UI for joinScreen.
- meetingContainer.html: Responsible to create simple grid-screen
- topBar.html: Responsible to create basic topbar with webcam, mic and leave meeting button.
- config.js: Responsible to store token.
- app.js: Responsible to render meeting view, joinscreen and topbar.

### Step 1 : Create UI

In this step, we are going to create HTML file which will render `join-screen`, `top-bar` and `meeting-container`.

1.1 Let's create `joinScreen` UI.

```html title="joinScreen.html"
<div
  id="joinPage"
  class="main-bg"
  style="display: flex"
  ng-controller="myController"
>
  <div style="display: flex; flex-direction: column; margin-left: 8px">
    <h3>AngularJS quickstart with Videosdk</h3>
    <form name="myForm" style="display: flex">
      <div style="margin-right: 8px">
        <button
          class="btn secondary text-white"
          id="meetingStartButton"
          ng-click="createMeeting()"
        >
          Create Meeting
        </button>
      </div>
      <p>OR</p>
      <div style="margin-left: 10px; margin-right: 16px">
        <input
          class="text-input"
          type="text"
          ng-model="meetingId"
          placeholder="Enter meeting id"
        />
        <p ng-show="showMeetingIdError" class="input-err">
          Please enter valid meeting Id
        </p>
      </div>
      <div>
        <button
          class="btn secondary text-white"
          id="meetingJoinButton"
          ng-click="validateMeeting()"
        >
          Join Meeting
        </button>
      </div>
    </form>
  </div>
</div>
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/angular/joinscreen.png' />

</center>

1.2 Next step is to create `topBar` UI.

```html title="topBar.html"
<div
  style="height: 70px; background-color: lightgray"
  ng-controller="myController"
  ng-show="showMeetingScreen"
  id="top-bar"
>
  <div class="top-bar-div">
    <div>
      <p style="margin-top: 0px; margin-bottom: 0px; font-weight: 700">
        MeetingId: {{meetingId}}
      </p>
    </div>
    <div style="display: flex; align-items: center; margin-top: 8px">
      <button style="cursor: pointer" ng-click="toggleWebcam()">
        Toggle Webcam
      </button>
      <button style="margin-left: 4px; cursor: pointer" ng-click="toggleMic()">
        Toggle Mic
      </button>
      <button class="leave-btn" ng-click="leaveMeeting()">Leave Meeting</button>
    </div>
  </div>
</div>
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/angular/topbar.png' />

</center>

1.3 Now, we will create `meetingContainer.html` file.

```html ="meetingContainer.html"
<div
  style=" display: flex; flex-direction: column; overflow-y: auto; max-height: calc(100vh - 90px);
  "
  ng-controller="myController"
>
  <div class="container">
    <div id="participant-grid-container" class="row"></div>
  </div>
</div>
```

The final step is to place each component in the `index.html` file after creating it.

```html ="index.html"
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
  <head>
    <base href="/" />
    <title>Angular JS - Videosdk</title>
    <link href="content/css/styles.css" rel="stylesheet" type="text/css" />
    <script src="app/lib/angular.min.js"></script>
    <script src="config.js"></script>
    <script src="app/app.js"></script>
  </head>

  <body>
    //highlight-start
    <top-bar />
    //highlight-end
    <div ng-show="showJoinScreen">
      //highlight-start
      <join-screen />
      //highlight-end
    </div>
    <div ng-show="showMeetingScreen">
      //highlight-start
      <meeting-container />
      //highlight-end
    </div>
    <script src="https://sdk.videosdk.live/js-sdk/0.0.67/videosdk.js"></script>
  </body>
</html>
```

### Step 2 : Implement Join Screen

Set the token in `config.js` file which is generated from [VideoSDK Dashbord](https://app.videosdk.live/login).

```js title="config.js"
// Auth token we will use to generate a meeting and connect to it
"use strict";
angular.module("config", []).constant("ENV", {
  token: "YOUR_TOKEN", // Add token here
});
```

Now, get all the elements from DOM and declare following variables in `app.js` file and then add Event Listener to the join and create meeting buttons.

```js title="app.js"
var myApp = angular.module("myApp", ["config"]);

myApp.config(function () {});

myApp.run(function () {});

// create directives of component
myApp.directive("joinScreen", [
  function () {
    return {
      restrict: "E",
      templateUrl: "views/joinScreen.html",
      transclude: true,
      controller: "myController",
      replace: true,
    };
  },
]);

myApp.directive("topBar", [
  function () {
    return {
      restrict: "E",
      templateUrl: "views/topBar.html",
      transclude: true,
      controller: "myController",
      replace: true,
    };
  },
]);

myApp.directive("meetingContainer", [
  function () {
    return {
      restrict: "E",
      templateUrl: "views/meetingContainer.html",
      transclude: true,
      controller: "myController",
      replace: true,
    };
  },
]);

myApp.controller("myController", function ($scope, ENV) {
  // variable initialization
  $scope.name = "Homi J. Bhabha";
  $scope.meetingId = "";
  $scope.showMeetingIdError = false;
  $scope.showMeetingScreen = false;
  $scope.showJoinScreen = true;
  $scope.meeting = null;

  // Getting Elements from DOM
  $scope.participantGridContainer = document.getElementById(
    "participant-grid-container"
  );

  // API request for create meeting
  $scope.createMeeting = function () {
    const url = "https://api.videosdk.live/v2/rooms";
    const config = {
      headers: {
        Authorization: ENV.token,
        "Content-Type": "application/json",
      },
    };

    $http
      .post(url, { name: $scope.name }, config)
      .then(function (response) {
        const { roomId } = response.data;
        $scope.meetingId = roomId;
        $scope.initMeeting();
      })
      .catch(function (error) {
        alert("error", error);
      });
  };

  // API request for validate meeting
  $scope.validateMeeting = function () {
    const url = `https://api.videosdk.live/v2/rooms/validate/${$scope.meetingId}`;
    const config = {
      headers: {
        Authorization: ENV.token,
        "Content-Type": "application/json",
      },
    };

    $http
      .get(url, config)
      .then(function (response) {
        if (response.data.roomId === $scope.meetingId) {
          $scope.showMeetingIdError = false;
          $scope.initMeeting();
        }
      })
      .catch(function (error) {
        $scope.showMeetingIdError = true;
        console.log("error", error);
      });
  };
});
```

### Step 3 : Initialize meeting

In this step, we will initialize meeting through `initMeeting()` function and join that meeting.

```js title="app.js"
// Initialize meeting
$scope.initMeeting = function () {
  window.VideoSDK.config(ENV.token); // required;

  var meeting = window.VideoSDK.initMeeting({
    meetingId: $scope.meetingId, // required
    name: $scope.name, // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
  });
  meeting.join();
  $scope.meeting = meeting;

  if ($scope.meeting) {
    $scope.handleMeetingEvents($scope.meeting);
    var showJoinScreenMessage = document.createElement("div");
    var topBar = document.getElementById("top-bar");
    topBar.style.display = "none";

    showJoinScreenMessage.setAttribute("id", "show-join-screen-message");
    showJoinScreenMessage.innerHTML = "Please wait to join meeting...";
    showJoinScreenMessage.style.color = "black";
    showJoinScreenMessage.style.fontSize = "20px";
    showJoinScreenMessage.style.fontWeight = "bold";
    showJoinScreenMessage.style.marginTop = "20px";
    showJoinScreenMessage.style.marginLeft = "20px";
    $scope.participantGridContainer.appendChild(showJoinScreenMessage);
  }
};
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/angular/initMeeting.png' />

</center>

### Step 4 : Handle Meeting Events

In this step, we will create participant grid and handle events like `meeting-joined`, `meeting-left` and participant events.

```js ="app.js"
// variable initialization
$scope.localParticipant = null;
$scope.participants = [];

// creating Name Element
$scope.createNameElement = function (participant) {
  var nameElement = document.createElement("div");
  nameElement.setAttribute("id", `name-container-${participant.id}`);
  nameElement.innerHTML = participant.displayName.charAt(0).toUpperCase();
  nameElement.style.backgroundColor = "black";
  nameElement.style.color = "white";
  nameElement.style.textAlign = "center";
  nameElement.style.padding = "32px";
  nameElement.style.borderRadius = "100%";
  nameElement.style.fontSize = "20px";
  return nameElement;
};

// for handle meeting events
$scope.handleMeetingEvents = function (meeting) {
  $scope.localParticipant = meeting.localParticipant;
  $scope.participants = meeting.participants;

  // creating participant Grid
  $scope.participantGridGenerator = function ({ participant }) {
    var participantGridItem = document.createElement("div");
    participantGridItem.style.backgroundColor = "lightgrey";
    participantGridItem.style.borderRadius = "10px";
    participantGridItem.style.height = "300px";
    participantGridItem.style.width = "320px";
    participantGridItem.style.marginTop = "8px";
    participantGridItem.style.display = "flex";
    participantGridItem.style.alignItems = "center";
    participantGridItem.style.justifyContent = "center";
    participantGridItem.style.position = "relative";
    participantGridItem.setAttribute(
      "id",
      `participant-grid-item-${participant.id}`
    );
    participantGridItem.setAttribute("class", "col-4");
    var participantMediaElement1 = document.createElement("div");
    participantMediaElement1.setAttribute(
      "id",
      `participant-media-container-${participant.id}`
    );
    var nameElement = $scope.createNameElement(participant);
    $scope.participantGridContainer.appendChild(participantGridItem);
    participantGridItem.appendChild(participantMediaElement1);
    participantMediaElement1.appendChild(nameElement);

    var participantMediaElement = document.getElementById(
      `participant-media-container-${participant.id}`
    );

    return {
      participantMediaElement,
    };
  };

  if (meeting) {
    $scope.showJoinScreen = false;
    $scope.showMeetingScreen = true;
  }

  // meeting joined event
  meeting.on("meeting-joined", function () {
    var showJoinScreenMessage = document.getElementById(
      "show-join-screen-message"
    );
    var topBar = document.getElementById("top-bar");
    showJoinScreenMessage.style.display = "none";
    topBar.style.display = "block";

    const { participantMediaElement } = $scope.participantGridGenerator({
      participant: meeting.localParticipant,
    });

    meeting.localParticipant.on("stream-enabled", (stream) => {
      $scope.handleStreamEnabled(
        stream,
        meeting.localParticipant,
        true,
        participantMediaElement
      );
    });
    meeting.localParticipant.on("stream-disabled", (stream) => {
      $scope.handleStreamDisabled(
        stream,
        meeting.localParticipant,
        true,
        participantMediaElement
      );
    });
  });

  // meeting left event
  meeting.on("meeting-left", () => {
    // remove all children nodes from participant grid container
    while ($scope.participantGridContainer.firstChild) {
      $scope.participantGridContainer.removeChild(
        $scope.participantGridContainer.firstChild
      );
    }
    $scope.showMeetingScreen = false;
    $scope.showJoinScreen = true;
  });

  //remote participant events
  // participant joined
  meeting.on("participant-joined", (participant) => {
    console.log("New Participant Joined: ", participant.id);

    participant.on("stream-enabled", (stream) => {
      //...
    });
    participant.on("stream-disabled", (stream) => {
      //...
    });
  });

  // participant left
  meeting.on("participant-left", (participant) => {
    //...
  });
};
```

### Step 5 : Create Media Elements

In this step, we will create a function that helps us to create audio and video elements for displaying local and remote participants. We will also set the appropriate media track based on whether it's a video or audio.

```js title=app.js
myApp.controller("myController", function ($scope, $http, ENV) {
  // creating video element
  $scope.createVideoElement = function (
    stream,
    participant,
    participantMediaElement
  ) {
    var video = document.createElement("video");
    var mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    video.srcObject = mediaStream;
    video.autoplay = true;
    video.id = `v-${participant.id}`;
    video.style.marginTop = "6px";
    video.style.marginLeft = "4px";
    video.style.marginRight = "4px";
    video.style.width = "320px";
    video.style.height = "300px";
    video.style.objectFit = "cover";
    video.style.transform = "rotate('90')";
    video.style.borderRadius = "10px";
    video.setAttribute("playsinline", true);
    var videoElement = document.createElement("div");
    videoElement.setAttribute("id", `video-container-${participant.id}`);
    participantMediaElement.appendChild(videoElement);
    videoElement.appendChild(video);

    var cornerDisplayName = document.createElement("div");
    cornerDisplayName.setAttribute("id", `name-container-${participant.id}`);
    cornerDisplayName.style.position = "absolute";
    cornerDisplayName.style.bottom = "16px";
    cornerDisplayName.style.left = "16px";
    cornerDisplayName.style.color = "white";
    cornerDisplayName.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    cornerDisplayName.style.padding = "2px";
    cornerDisplayName.style.borderRadius = "2px";
    cornerDisplayName.style.fontSize = "12px";
    cornerDisplayName.style.fontWeight = "bold";
    cornerDisplayName.style.zIndex = "1";
    cornerDisplayName.style.padding = "4px";
    cornerDisplayName.innerHTML =
      participant.displayName.length > 15
        ? participant.displayName.substring(0, 15) + "..."
        : participant.displayName;
    videoElement.appendChild(cornerDisplayName);
  };

  // creating audio element
  $scope.createAudioElement = function (
    stream,
    participant,
    participantMediaElement
  ) {
    var audio = document.createElement("audio");
    var mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    audio.srcObject = mediaStream;
    audio.autoplay = true;
    audio.muted;
    audio.id = `audio-${participant.id}`;
    var audioElement = document.createElement("div");
    audioElement.setAttribute("id", `audio-container-${participant.id}`);
    participantMediaElement.appendChild(audioElement);
    audioElement.appendChild(audio);
  };

  // handle streams
  $scope.handleStreamEnabled = function (
    stream,
    participant,
    isLocal,
    participantMediaElement
  ) {
    if (stream.kind == "video") {
      var nameElement = document.getElementById(
        `name-container-${participant.id}`
      );
      participantMediaElement.removeChild(nameElement);
      $scope.createVideoElement(stream, participant, participantMediaElement);
    }
    if (!isLocal) {
      if (stream.kind == "audio") {
        $scope.createAudioElement(stream, participant, participantMediaElement);
      }
    }
  };

  $scope.handleStreamDisabled = function (
    stream,
    participant,
    isLocal,
    participantMediaElement
  ) {
    if (stream.kind == "video") {
      var videoElement = document.getElementById(
        `video-container-${participant.id}`
      );
      var nameElement = $scope.createNameElement(participant);
      participantMediaElement.removeChild(videoElement);
      participantMediaElement.appendChild(nameElement);
    }
    if (!isLocal) {
      if (stream.kind == "audio") {
        var audioElement = document.getElementById(
          `audio-container-${participant.id}`
        );
        participantMediaElement.removeChild(audioElement);
      }
    }
  };
});
```

### Step 6 : Handle participant events

In this step, we will implement four events `participant-joined`, `participant-left` , `stream-enabled` and `stream-disabled`.

Let's understand the use of that events.

1. `participant-joined`: When a remote participant joins, this event will trigger. In event callback will create video and audio elements which we had define in previous steps for rendering their video and audio streams.

2. `participant-left`: When a remote participant leaves, this event will trigger. In event callback will remove the corresponding video and audio elements.

3. `stream-enabled`: It Handle the media track of a specific participant by associating it with the appropriate video or audio element.

4. `stream-disabled`: It Handle the media track of a specific participant when participant toogle video or audio by associating it with the appropriate video or audio element.

```js title="index.js"
$scope.handleMeetingEvents = function (meeting) {
  //...
  // participant joined
  meeting.on("participant-joined", (participant) => {
    console.log("New Participant Joined: ", participant.id);

    var { participantMediaElement } = $scope.participantGridGenerator({
      participant: participant,
    });
    participant.setQuality("high");
    participant.on("stream-enabled", (stream) => {
      $scope.handleStreamEnabled(
        stream,
        participant,
        false,
        participantMediaElement
      );
    });
    participant.on("stream-disabled", (stream) => {
      $scope.handleStreamDisabled(
        stream,
        participant,
        false,
        participantMediaElement
      );
    });
  });

  // participants left
  meeting.on("participant-left", (participant) => {
    var participantGridItem = document.getElementById(
      `participant-grid-item-${participant.id}`
    );
    $scope.participantGridContainer.removeChild(participantGridItem);
  });
};
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/js_grid_screen.png' />

</center>

### Step 7 : Implement Controls

In this step, we will implement meeting functionalities such as toggleMic, toggleWebcam and leave meeting

```js title="app.js"
myApp.controller("myController", function ($scope, $http, ENV) {
  //...
  $scope.isWebcamOn = false;
  $scope.isMicOn = false;

  $scope.handleMeetingEvents = function (meeting) {
    //..
    // Toggle Webcam in Meeting
    $scope.toggleWebcam = function () {
      if ($scope.isWebcamOn) {
        $scope.meeting.disableWebcam();
      } else {
        $scope.meeting.enableWebcam();
      }
    };

    // Toggle Webcam in Meeting
    $scope.toggleMic = function () {
      if ($scope.isMicOn) {
        $scope.meeting.muteMic();
      } else {
        $scope.meeting.unmuteMic();
      }
    };

    // leave meeting
    $scope.leaveMeeting = function () {
      $scope.meeting.leave();
      $scope.showMeetingScreen = false;
      $scope.showJoinScreen = true;
    };
  };
});
```

## Run your code

Once you are all set with the steps mentioned above run your application as mentioned in the code-block below.

```bash
live-server --port=8000
```

## Final Output

We are done with implementation of customised video calling app in Angular JS using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/js_quickstart_output.mp4' width={"100%"} />

<br/>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/angular-rtc).
:::
