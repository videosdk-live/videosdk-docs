---
title: Quick Start Interactive Live Streaming
hide_title: false
hide_table_of_contents: false
description: Add Interactive Live Streaming in your web application using JavaScript Interactive Live Streaming SDK.
sidebar_label: Start a Interactive Live Streaming
pagination_label: Quick Start Interactive Live Streaming
keywords:
  - Interactive Live Streaming
  - real-time Interactive Live Streaming
  - Large audience support
  - Javascript SDK
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-interactive-live-streaming
---

import VideoSDKIntro from '/mdx/guide/_get-started-introduction.md'

<VideoSDKIntro progLang="JavaScript" title="Interactive Live Streaming" />

# Prerequisites
In order to follow the procedure in this page, you must have:
- A valid [Video SDK Account](https://app.videosdk.live/signup)
- A project with API Key and a temporary token
- A Windows or macOS computer
- [Node js and NPM installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

# Create a Web Project
Create a new directory named `videosdk-rtc-js-quickstart`. For simple web application, create following files into the directory. 
- `index.html`: The interface to access video call for speakers.
- `viewers.html`: The interface to access live streaming as viewers.
- `initMeeting.js`: The programmable js file to implement the client logic. 
- `package.json`: Install and manage dependecies of your project. you can also use `npm init` command in `videosdk-rtc-js-quickstart` directory to create `package.json` file.

# Implement a client for Video Call
Follow the steps ahead to use Video SDK for Web to add Video Call into your Web app. 

## 1. Integrate the SDK
To integrate Video SDK in your project, create `package.json` file under directory `videosdk-rtc-js-quickstart`. After adding this you can use `npm install` to install the dependecies.

```js title="package.json"
{
  "name": "videosdk-rtc-js-quickstart",
  "version": "1.0.0",
  "description": "",
  "main": "initMeeting.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "dependencies": {
    "@videosdk.live/js-sdk": "latest",
    "hls.js": "^1.1.5",
  },
  "author": "Galileo Galilei",
  "license": "ISC"
}
```

To import `VideoSDK` in your application, copy and paste following code into `initMeeting.js`

```js title="initMeeting.js"
import { VideoSDK } from "@videosdk.live/js-sdk";
import Hls from "hls.js"
```

# 2. Implement User Interface
To implement the user interface, copy this following code into `index.html`:

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Video SDK Web SDK Quickstart</title>
        <!--
        This line is used to refer to the bundle.js file packaged by 
        webpack. A sample webpack configuration is shown in the later step 
        of running your app.
        -->
        <script src="/bundle.js"></script>
    </head>
    <body>
        <h2 class="left-align">Video SDK Web SDK Quickstart</h2>
        <h3 class="left-align">Meeting Id: <input type="text" id="meetingId"></span></h2>
        <div class="row">
            <div>
                <button type="button" id="getMeetingId">GET MEETING ID</button>
                <button type="button" id="join_as_speaker">JOIN AS SPEAKER</button>
                <button type="button" id="join_as_viewer">JOIN AS VIEWER</button>
                <button type="button" id="leave">LEAVE</button>
            </div>
            <div id="videoContainer" ></div>
        </div>
    </body>
</html>
```

# 3. Implement the client logic
To implement the client logic of Video Call, we need to do the following things:
1. Configure token using `config` method.
2. Call `createCameraVideoTrack` to create local video track from the video captured by a camera and `createMicrophoneAudioTrack` to create a local audio track from the audio sampled by a microphone.
3. Publish audio and video tracks by calling `initMeeting` to intilize meeting object with microphone and camera.
4. When a remote participant join the meeting and publish tracks. Listen to `meeting.on("participant-joined")` event. When the SDK triggers this event, get an `Participant` object from this event.
5. Play the audio track using `participant.on("stream-enabled")` map which represents value pairs with ids such as audio, video or share.
6. call `meeting.startHls()` to start interactive live streaming.
7. Join as a viewer using active HLS API. 


Copy the following code into `initMeeting.js` and replace `token` with values from the [Video SDK Project](https://app.videosdk.live/signup)

```js title="initMeeting.js"
import { VideoSDK } from "@videosdk.live/js-sdk";
import Hls from "hls.js"

let rtc = {
    audioTrack: null,
    videoTrack: null,
    meeting: null,
    broadcastURL: null
}

let options = {
    token: "YOUR_TOKEN", // Generate from dashboard.
    meetingId: "",
    participantId: "12345"
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Authorization': options.token,
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
    return response.json(); 
}

async function getData(url = '', data = {}){
    const response = await fetch(url + new URLSearchParams(data), {
        method: 'GET', 
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Authorization': options.token,
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return response.json(); 
}

async function getMeetingId () {
    if(document.getElementById("meetingId").value == ''){
        const meetingInfo = await postData("https://api.videosdk.live/v2/rooms");
        VideoSDK.config(options.token)
        options.meetingId = meetingInfo && meetingInfo.roomId;
        document.getElementById("meetingId").value = options.meetingId;
    }
}

async function join(){
    options.meetingId = document.getElementById("meetingId").value;
    VideoSDK.config(options.token)
    rtc.audioTrack = await VideoSDK.createMicrophoneAudioTrack({
        encoderConfig: "high_quality",
        noiseConfig: {
            noiseSuppresion: true,
            echoCancellation: true,
            autoGainControl: true,
        },
    });
    rtc.videoTrack = await VideoSDK.createCameraVideoTrack({
        optimizationMode: "motion",
        encoderConfig: "h720p_w1280p",
        facingMode: "user",
    });
    rtc.meeting = VideoSDK.initMeeting({
        meetingId: options.meetingId, // required
        name: "Arjun Kava", // required
        micEnabled: true, // optional, default: true
        webcamEnabled: true, // optional, default: true
        
        customMicrophoneAudioTrack: rtc.audioTrack,
        customCameraVideoTrack: rtc.videoTrack,
        maxResolution: "hd"
    });

    rtc.meeting.join();
    rtc.meeting.on("meeting-joined", () => {
        rtc.meeting.startHls();
    })

    rtc.meeting.on("hls-started", (data) => {
        // can be used to trigger link or notification that 
        // streaming has been started
    })

    rtc.meeting.on("participant-joined", (participant) => {
        participant.setQuality("med")
        participant.on("stream-enabled", (stream) => {
            if(stream.kind == "audio"){
                let audioElement = document.createElement("audio");
                audioElement.setAttribute("autoPlay", "false");
                audioElement.setAttribute("playsInline", "true");
                audioElement.setAttribute("controls", "false");
                audioElement.setAttribute("id", `a-${participant.id}`);
                const mediaStream = new MediaStream();
                mediaStream.addTrack(stream.track);
                audioElement.srcObject = mediaStream;
                audioElement
                    .play()
                    .catch((error) => 
                        console.error("audioElem.play() failed", error)
                    );
                document.getElementById("videoContainer").append(audioElement)
            }
            if(stream.kind == "video"){
                let videoElement = document.createElement("video");
                videoElement.setAttribute("id", `v-${participant.id}`);
                const mediaStream = new MediaStream();
                mediaStream.addTrack(stream.track);
                videoElement.srcObject = mediaStream;
                videoElement
                    .play()
                    .catch((error) =>
                        console.error("videoElem.current.play() failed", error)
                    );
                document.getElementById("videoContainer").append(videoElement)
            }
        });
    })

}

async function joinAsViewer(){
    options.meetingId = document.getElementById("meetingId").value;
    const hlsInfo = await getData(`https://api.videosdk.live/v2/hls/${options.meetingId}/active`)
    rtc.broadcastURL = hlsInfo.data && hlsInfo.data.downstreamUrl;
    let videoElement = document.createElement("video");
    videoElement.setAttribute("id", `v-${options.meetingId}`);
    videoElement.setAttribute("controls", `true`);
    videoElement.setAttribute("autoplay", `true`);
    videoElement.setAttribute("width", `500px`);
    if(Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(rtc.broadcastURL);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
            videoElement.play();
        });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = rtc.broadcastURL;
        videoElement.addEventListener('canplay',function() {
            videoElement.play();
        });
    }
    document.getElementById("videoContainer").append(videoElement)
}

async function leave(){
    rtc.meeting.leave();
}

window.onload = function () {
    document.getElementById("getMeetingId").onclick = async function () {
       await getMeetingId();
    }
    document.getElementById("join_as_speaker").onclick = async function () {
        join()
    }
    document.getElementById("join_as_viewer").onclick = async function () {
        joinAsViewer()
    }
    document.getElementById("leave").onclick = async function () {
        leave();
    }
}
```

# Test your app
The quickstart uses [webpack](https://webpack.js.org/) to package the project and `webpack-dev-server` to run the project. 

### Setup webpack dev server
In package.json, add `webpack`, `webpack-cli`, and `webpack-dev-server` to the dependencies field, and the build and start:dev commands to the scripts field.

```js title="package.json"
{
    "name": "videosdk-rtc-js-quickstart",
    "version": "1.0.0",
    "description": "",
    "main": "initMeeting.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --config webpack.config.js",
        "start:dev": "webpack serve --open --config webpack.config.js"
    },
    "dependencies": {
        "@videosdk.live/js-sdk": "latest",
        "hls.js": "^1.1.5",
        "webpack": "5.28.0",
        "webpack-cli": "4.9.0",
        "webpack-dev-server": "3.11.2"
    },
    "author": "",
    "license": "ISC"
 }
```

### Create webpack config
Create a file named `webpack.config.js` in the project directory to configure webpack, with the following code:

```js title="webpack.config.js"
const path = require("path");

module.exports = {
    entry: "./initMeeting.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        writeToDisk: true,
        compress: false,
        port: 9000,
    },
};
```

### Install dependecies
To install dependencies, run the following command:

```js
npm install
```

### Build the project
To build and run the project using webpack, run the following command:
```js 
# Use webpack to package the project
npm run build
```

### Run the project
Use webpack-dev-server to run the project:
```js
npm run start:dev
```
A local web server automatically opens in your browser. You see the following page:

![Video SDK JS Quick Start Outpu](/img/quick-start/rtc-js-interactive-live-streaming-quickstart.jpeg)

Click on **GET MEETING ID** first fetch unique meeting Id. Thenafter, Click on **JOIN AS SPEAKER** to start a video call. Bring your friends and ask them to **JOIN AS VIEWER**.

:::note

- Running the web app through a local server (localhost) is for testing purposes only. In production, ensure that you use the HTTPS protocol when deploying your project.
- Due to security limits on HTTP addresses except 127.0.0.1, the Web SDK only supports HTTPS or http://localhost (http://127.0.0.1). If you deploy your project over HTTP, you can only visit your project at http://localhost (http://127.0.0.1).

:::

# Next steps
Setup server side authentication to secure your applications in the production. [Authentication and Tokens](/javascript/guide/video-and-audio-calling-api-sdk/server-setup) describes how to retrive token from server using secure API Key and Secret combination.

## See Also
In addition to integrating the Video SDK Web into your project through npm, you can also choose either of the following methods to integrate the Video SDK Web into your project:

import JSImportVersion from '/mdx/sdk-imports/_js-version.md'

<JSImportVersion />








