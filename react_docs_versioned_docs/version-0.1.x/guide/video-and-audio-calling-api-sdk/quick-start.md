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
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Build a Video Calling App Using VideoSDK in a React Project

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

One should have a videoSDK account to generate token.
Visit videoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

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
   │    ├── api.js
   │    ├── App.js
   │    ├── App.css
   │    ├── index.js
   │    ├── index.js
   .    .
```

We are going to use functional components to leverage react's reusable component architecture. There will be components for users, videos and controls (mic, camera, leave) over the video. 

### App Architecture 
App will contain a container component which includes user component with videos. Each video component will have conrols button for mic, camera and leave meeting button. 

![VideoSDK React JS Quick Start Architecture](/img/quick-start/react-component-structure.jpg)


We are goting to work on two files:
- API.js: Responsible to handle API calls such as generating unique meetingId and token
- App.js: Responsible to render container and meeting join.


### Step 1: Get started with API.js
Before jumping to anything else, we have write API to generate unique meetingId. You will require auth token, you can generate it using either by using [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or generate it from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for developer.

```js title="API.js"
export const authToken = "<Generated-from-dashbaord>";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: { 
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};
```

### Step 2: Wireframe App.js with all the components
To build up wireframe of App.js, we are going to use Video SDK Hooks and Context Providers. Video SDK provideos MeetingProvider, MeetingConsumer, useMeeting and useParticipant hooks. Let's understand each of them.

First we will explore Context Provider and Consumer. Context is primarily used when some data needs to be accessible by many components at different nesting levels. 
- **MeetingProvider**: It is Context Provider. It accepts value `config` and `token` as props. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- **MeetingConsumer**: It is Context Consumer. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- **useMeeting**: It is meeting react hook API for meeting. It includes all the information related to meeting such as participants, streams etc.
- **useParticipant**: It is participant hook API. useParticipant hook is responsible to handle all the events and props related to one particular participant such as join, leave, mute etc.

Meeting Context helps to listen on all the changes when participant joines meeting or changes mic or camera etc.

Let's get started with change couple of lines of code in App.js

```js title="App.js"
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API"

function JoinScreen() {return null}

function VideoComponent(props) {return null}

function Controls(props) {return null}

function Container(props) {return null}

function App() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const meetingId = id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: false,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => <Container meetingId={meetingId} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default App;
```

### Step 3: Implment Join Screen
Join screen will work as medium to either schedule new meeting or to join existing meeting. 
```js title="JoinScreen Component" 
function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId)
  }
   return (
    <div>
      <input type="text" 
        placeholder="Enter Meeting Id" 
        onChange={(e) => {setMeetingId(e.target.value)}}  />
      <button onClick={onClick}>
        Join
      </button>
      {" or "}
      <button  onClick={onClick}>
        Create Meeting
      </button>
    </div>
  )
}
```
#### Output

![VideoSDK React JS Quick Start Join Screen](/img/quick-start/react-join-screen.jpeg)

### Step 4: Implement Container and Controls
Next step is to create a container and controls to manage features such as join, leave, mute and unmute.

```js title="Container Component"
function Container(props) {
  const [joined, setJoined] = useState(false)
  const { join } = useMeeting()
  const { participants } = useMeeting();
  const joinMeeting = () => {
    setJoined(true)
    join()
  }

  return (
    <div className='container'>
      <h3>Meeting Id: {props.meetingId}</h3>
      {joined ? 
      (
        <div>
          <Controls />
          {[...participants.keys()].map(participantId => (
               <VideoComponent participantId={participantId}   />
          ))}
        </div>
      ) 
      :(<button  onClick={joinMeeting}>
        Join
      </button>)}
    </div>
  )
}
```
```js title="Controls Component"
function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting()
  return (
    <div >
      <button  onClick={leave}>
        Leave
      </button>
      <button  onClick={toggleMic}>
        toggleMic
      </button>
      <button  onClick={toggleWebcam}>
        toggleWebcam
      </button>
    </div>
  )
}
```

#### Output of Container Component
![VideoSDK React JS Quick Start  Container Component](/img/quick-start/react-container.jpeg)

#### Output of Controls Component
![VideoSDK React JS Quick Start  Container Component](/img/quick-start/react-container-controls.jpeg)


### Step 5: Implement Video Componenty
Before implementing video component, We need to understand couple of concepts.

#### 1. Forwarding Ref for mic and camera
Ref forwarding is a technique for automatically passing a ref through a component to one of its children. 
We are going to use Refs to attach audio and video tracks with components.
```js title="Forwarding Ref for mic and camera"
const webcamRef = useRef(null);
const micRef = useRef(null);
```

#### 2. useParticipant Hook
useParticipant hook is responsible to handle all the properties and events of one participar participant joined in the meeting. It will take participantId as argument.

```js title="useParticipant Hook"
  const {
    webcamStream,
    micStream,
    webcamOn,
    micOn,
  } = useParticipant(props.participantId);
```

#### 3. MediaStream API
MediaStream is useful to add MediaTrack to the audio / video tag to play the audio or video. 

```js title="MediaStream API"
  const webcamRef = useRef(null);
  const mediaStream = new MediaStream();
  mediaStream.addTrack(webcamStream.track);

  webcamRef.current.srcObject = mediaStream;
  webcamRef.current
    .play()
    .catch((error) =>
      console.error("videoElem.current.play() failed", error));
```
#### 4. Implemeting Video Component
Now let's use all this API to create Video Component
```js title="Video Component"
function VideoComponent(props) {
  const micRef = useRef(null);
  const {
    webcamStream,
    micStream,
    webcamOn,
    micOn,
  } = useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
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

  return (
    <div key={props.participantId}>
      {micOn && micRef && <audio ref={micRef} autoPlay />}
      {webcamOn && 
        <ReactPlayer
          //
          playsinline // very very imp prop
          
          pip={false}
          light={false}
          controls={true}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"100px"}
          width={"100px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />}
    </div>
  )
}
```

#### Final Output
We are done with implementation of customised video calling app in reeact js using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<ReactPlayer controls url='/img/quick-start/react-final-video.mp4' width={"100%"} />