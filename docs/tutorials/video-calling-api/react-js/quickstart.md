---
title: Quickstart for React Hooks
hide_title: false
hide_table_of_contents: false
description: This tutorial will help you to integrate meetings in using react hooks. it supports almost 98% browsers.
sidebar_label: with React Hooks
pagination_label: Quickstart for React Hooks
keywords:
  - video calling api
  - quickstart-react-js
  - react-js
  - tutorials
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quickstart-react-hooks
---

## Index

1. Create account on Video SDK
2. Setup Server
3. Structure of the Project
4. Start Writing the Code

## 1. Create account on Video SDK

Start Project at [videosdk.live](https://videosdk.live/)
![Create account on Video SDK](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/648g857v1ctd5cxtyhxa.png)

Navigate to the the start project button and register yourself either using Google Account or Github.

### Prerequisites

- [Node >= 10.16](https://nodejs.org/en/)
- [Npm >= 5.6](https://nodejs.org/en/)
- [React ≥ 16.8](https://reactjs.org/)

## 2. Setup Server

A server will require to perform authentication via JWT token. We are going to use official [Node JS](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) server example.

- Clone following repository and run the server.

```js
$ git clone https://github.com/videosdk-live/videosdk-rtc-nodejs-sdk-example
$ cd nodejs
```

Note: You can also find other backend language examples in the same repo.

Follow the [Node JS Server Setup Guide](https://github.com/videosdk-live/videosdk-rtc-api-server-examples/tree/main/nodejs) to run the server.

## 3. Structure of the Project

You can use [react-scripts](https://www.npmjs.com/package/react-scripts) to generate project template or any other react boilerplate.

### Create new project using create-react-app

```js
npx create-react-app videosdk-react-app-v1
```

This is how your project directory should look like

```js
.
├── node_modules
├── public
├── .env
├── src
│ └── api.js
│ └── App.jsx
│ └── index.css
│ └── index.jsx
├── package.json
...
.
```

### Configure Environment Variables

Before writing the code, configure `.env` variables.

.env

```js
REACT_APP_SERVER_URL = "http://localhost:9000";
```

Note: For production environment, you have to host this server and need to change URL.

### Install the official React JS package

Before jumping to anything else, install videosdk react js sdk.

```js
yarn add @videosdk.live/react-sdk
```

## 4.Start Writing the Code

We will first setup API calls then after jump to writing the code.

### Calling API to generate auth `token` and `meetingId`

We will start writing the code with `api.js`. Before starting any meeting, you have to generate authentication `token` and `meetingId`

api.js

```js
const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

// API call to generate authentication token
export const getToken = async () => {
  const res = await fetch(`${API_BASE_URL}/get-token`, {
    method: "GET",
  });

  const { token } = await res.json();
  return token;
};

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`${API_BASE_URL}/create-meeting`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};
```

### Start with `App.jsx`

First of all, Let's setup token generation and meetingId logic before working on video calling view.

App Component

```js
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { getToken, validateMeeting, createMeeting } from "./api";

function MeetingGrid() {
  return <h1>Meeting Grid</h1>;
}

function JoinScreen() {
  return <h1>Join Screen</h1>;
}

function ParticipantView(props) {
  return <h1>Participant View</h1>;
}

function App() {
  const [token, setToken] = useState(null);
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async () => {
    const token = await getToken();
    const meetingId = await createMeeting({ token });

    setToken(token);
    setMeetingId(meetingId);
  };

  useEffect(getMeetingAndToken, []);
  return token && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: false,
        name: "Participant Name",
      }}
      token={token}
    >
      <MeetingConsumer>{() => <MeetingGrid />}</MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen />
  );
}

export default App;
```

React JS SDK provides two important hooks API:

- useMeeting: Responsible to handle meeting environment.
- useParticipant: Responsible to handle

Also, React Provider and Consumer to listen changes in meeting environment.

- MeetingProvider: Meeting Provider is [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes.
- MeetingConsumer: Meeting Consumer is [Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer) that subscribes to meeting changes.

### Implement Join Screen

We will start with join screen where user can either create meeting or can join using meetingId.

It contains two simple features:

1. Create New Meeting
2. Join the meeting

JoinScreen Component

```js
function JoinScreen() {
  <div>
    <input
      type="text"
      placeholder="Enter Meeting Id"
      onChange={(e) => {
        setMeetingId(e.target.value);
      }}
    />
    <button onClick={getMeetingAndToken}>Join</button>
    <button onClick={getMeetingAndToken}>Create Meeting</button>
  </div>;
}
```

### Implementing Meeting Grid

Meeting grid will include whole meeting interface. It will be responsible for:

1. Turn On and Off Mic
2. Turn On and Off WebCam
3. Participant View

```js
const { join, leave, toggleMic, toggleWebcam, toggleScreenShare } =
  useMeeting();
```

Let's get started and implement it one by one. `useMeeting` hook will help you to perform `join`, `leave`, `toggleMic` etc.

Meeting Grid Component

```js
// Helper function for participant loop.
const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

function MeetingGrid(props) {
  const [joined, setJoined] = useState(false);
  const { join, leave, toggleMic, toggleWebcam, toggleScreenShare } =
    useMeeting();
  const { participants } = useMeeting();
  const joinMeeting = () => {
    setJoined(true);
    join();
  };
  return (
    <div>
      <header>Meeting Id: {props.meetingId}</header>
      {joined ? (
        <div>
          <button onClick={leave}>Leave</button>
          <button onClick={toggleMic}>toggleMic</button>
          <button onClick={toggleWebcam}>toggleWebcam</button>
          <button onClick={toggleScreenShare}>toggleScreenShare</button>
        </div>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
      <div className="wrapper">
        {chunk([...participants.keys()]).map((k) => (
          <div className="box" key={k} style={{ display: "flex" }}>
            {k.map((l) => (
              <ParticipantView key={l} participantId={l} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Implementing Participant View

To implement participant grid, we are going to use `react-simple-flex-grid`. It will be helpful to maintain video grid.

Let's first add this package.

```js
yarn add react-simple-flex-grid
```

Import react-simple-flex-grid in App Component

```js
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
```

Participant view will include three major features:

1. Enable/Disable WebCam
2. Enable/Disable Mic
3. Share your screen.

Let's explore each of it. Before starting it, we have to understand `useRef` of audio, video and screen share element

```js
const webcamRef = useRef(null);
const micRef = useRef(null);
const screenShareRef = useRef(null);
```

Apart from that, `useParticipant` hook will help you to handle mic, webcam and screen share.

```js
const {
  displayName,
  webcamStream,
  micStream,
  screenShareStream,
  webcamOn,
  micOn,
  screenShareOn,
} = useParticipant(props.participantId);
```

After getting the stream, you can add track to using `MediaStream` API. For example, check out below code to add reference of webCam

```js
const mediaStream = new MediaStream();
mediaStream.addTrack(webcamStream.track);

webcamRef.current.srcObject = mediaStream;
webcamRef.current
  .play()
  .catch((error) => console.error("videoElem.current.play() failed", error));
```

After adding the reference in on loading state of component, you can

ParticipantView Component

```js
function ParticipantView(props) {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const {
    displayName,
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn,
  } = useParticipant(props.participantId);

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  useEffect(() => {
    if (screenShareRef.current) {
      if (screenShareOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);

        screenShareRef.current.srcObject = mediaStream;
        screenShareRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        screenShareRef.current.srcObject = null;
      }
    }
  }, [screenShareStream, screenShareOn]);

  return (
    <div key={props.participantId}>
      <audio ref={micRef} autoPlay />
      {webcamRef || micOn ? (
        <div>
          <h2>{displayName}</h2>
          <video height={"100%"} width={"100%"} ref={webcamRef} autoPlay />
        </div>
      ) : null}
      {screenShareOn ? (
        <div>
          <h2>Screen Shared</h2>
          <video height={"100%"} width={"100%"} ref={screenShareRef} autoPlay />
        </div>
      ) : null}
      <br />
      <span>
        Mic:{micOn ? "Yes" : "No"}, Camera: {webcamOn ? "Yes" : "No"}, Screen
        Share: {screenShareOn ? "Yes" : "No"}
      </span>
    </div>
  );
}
```

You can implement further features like cloud recording, chat, whiteboard, social media live etc by refereeing official guide of [Video SDK](/react/guide/video-and-audio-calling-api-sdk/getting-started)

For more information, visit our official [Guide](/react/guide/video-and-audio-calling-api-sdk/getting-started)
