---
title: Quick Start with React JS
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start with React JS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables you to embed the video calling feature into your React application in minutes.

In this quickstart, we are going to explore group calling feature of Video SDK. We will go through step by step guide of integrating video calling with React Video SDK

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Basic understanding of React
- **[React Video SDK](https://www.npmjs.com/package/@videosdk.live/react-sdk)**
- Have Node and NPM installed on your device.
- The basic understanding of Hooks (useState, useRef, useEffect)
- React Context API (optional)

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app.

### Create new react app

Create a new React App using the below command.

```bash
$ npx create-react-app videosdk-rtc-react-app
```

### Install Video SDK

Install the VideoSDK using the below-mentioned npm command. Make sure you are in your react app directory before you run this command.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"server-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
$ npm install "@videosdk.live/react-sdk"

//For the Participants Video
$ npm install "react-player"
```

</TabItem>
<TabItem value="yarn">

```bash
$ yarn add "@videosdk.live/react-sdk"

//For the Participants Video
$ yarn add "react-player"
```

</TabItem>
</Tabs>

### Structure of the project

Your project structure should look like this.

```jsx title="Project Structure"
   root
   ├── node_modules
   ├── public
   ├── src
   │    ├── API.js
   │    ├── App.js
   │    ├── index.js
   .    .
```

We are going to use functional components to leverage react's reusable component architecture. There will be components for users, videos and controls (mic, camera, leave) over the video.

### App Architecture

App will contain a `MeetingView` component which includes `ParticipantView` which will render the participant's name, video, audio, etc. We will also have a `Controls` component which will allow user to perform operations like leave and toggle media.

![VideoSDK React JS Quick Start Architecture](/img/react-quick-start.png)

We are going to work on two files:

- API.js: Responsible to handle API calls such as generating unique meetingId and token
- App.js: Responsible to render `MeetingView` and join the meeting.

### Step 1: Get started with API.js

Prior to moving on, we must create an API request to generate unique meetingId. You will need an authentication token, which you can create either through the [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or directly from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for developers.

```js title="API.js"
//Auth token we will use to generate a meeting and connect to it
//highlight-next-line
export const authToken = "<Generated-from-dashbaord>";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  //highlight-next-line
  const { roomId } = await res.json();
  return roomId;
};
```

### Step 2: Wireframe App.js with all the components

To build up wireframe of App.js, we are going to use Video SDK Hooks and Context Providers. Video SDK provideos MeetingProvider, MeetingConsumer, useMeeting and useParticipant hooks. Let's understand each of them.

First we will explore Context Provider and Consumer. Context is primarily used when some data needs to be accessible by many components at different nesting levels.

- **MeetingProvider**: It is Context Provider. It accepts value `config` and `token` as props. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- **MeetingConsumer**: It is Context Consumer. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- **useMeeting**: It is meeting react hook API for meeting. It includes all the information related to meeting such as join, leave, enable/disable mic or webcam etc.
- **useParticipant**: It is participant hook API. useParticipant hook is responsible to handle all the events and props related to one particular participant such as name, webcamStream, micStream etc.

Meeting Context helps to listen on all the changes when participant joines meeting or changes mic or camera etc.

Let's get started with change couple of lines of code in App.js

```js title="App.js"
import "./App.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
import ReactPlayer from "react-player";

function JoinScreen() {
  return null;
}

function ParticipantView(props) {
  return null;
}

function Controls(props) {
  return null;
}

function MeetingView(props) {
  return null;
}

function App() {
  const [meetingId, setMeetingId] = useState(null);

  //Getting the meeting id by calling the api we just wrote
  //highlight-start
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };
  //highlight-end

  //These will set Meeting Id to null when meeting is left or ended
  //highlight-start
  const onMeetingLeave = () => {
    setMeetingId(null);
  };
  //highlight-end

  return authToken && meetingId ? (
    <MeetingProvider
      //highlight-start
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
      //highlight-end
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default App;
```

### Step 3: Implement Join Screen

Join screen will work as medium to either schedule new meeting or to join existing meeting.

```js title="JoinScreen Component"
function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button onClick={onClick}>Join</button>
      {" or "}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  );
}
```

#### Output

![VideoSDK React JS Quick Start Join Screen](/img/quick-start/react-join-screen.jpeg)

### Step 4: Implement MeetingView and Controls

Next step is to create `MeetingView` and `Controls` componenets to manage features such as join, leave, mute and unmute.

```js title="MeetingView"
function MeetingView(props) {
  const [joined, setJoined] = useState(null);
  //highlight-start
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  //highlight-end
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {props.meetingId}</h3>
      {joined && joined == "JOINED" ? (
        <div>
          //highlight-start
          <Controls />
          //For rendering all the participants in the meeting
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
          //highlight-end
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}
```

```js title="Controls Component"
function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div>
      <button onClick={() => leave()}>Leave</button>
      <button onClick={() => toggleMic()}>toggleMic</button>
      <button onClick={() => toggleWebcam()}>toggleWebcam</button>
    </div>
  );
}
```

##### Output of Controls Component

![VideoSDK React JS Quick Start  Controls Component](/img/quick-start/react-container-controls.jpeg)

### Step 5: Implement Participant View

Before implementing participant view, We need to understand couple of concepts.

###### 1. Forwarding Ref for mic and camera

We will be using the React `useRef` to reference our audio and video components which will be used to play and stop the audio and video of the participant

```js title="Forwarding Ref for mic and camera"
const webcamRef = useRef(null);
const micRef = useRef(null);
```

###### 2. useParticipant Hook

useParticipant hook is responsible to handle all the properties and events of one particular participant joined in the meeting. It will take participantId as argument.

```js title="useParticipant Hook"
const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
  props.participantId
);
```

###### 3. MediaStream API

MediaStream is useful to add MediaTrack to the audio / video tag to play the audio or video.

```js title="MediaStream API"
const webcamRef = useRef(null);
const mediaStream = new MediaStream();
mediaStream.addTrack(webcamStream.track);

webcamRef.current.srcObject = mediaStream;
webcamRef.current
  .play()
  .catch((error) => console.error("videoElem.current.play() failed", error));
```

#### 4. Implemeting `ParticipantView`

Now let's use all this API to create `ParticipantView`

```js title="ParticipantView"
function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
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

  return (
    <div>
      <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}
```

#### Final Output

We are done with implementation of customised video calling app in reeact js using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='/video/react-quick-start.mp4' width={"100%"} />
