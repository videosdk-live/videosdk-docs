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

# Build a Video Calling App With Interactive Live Streaming Using VideoSDK in a React Project

VideoSDK enables you to embed the video calling feature into your React application in minutes.

In this quickstart, we are going to explore interactive live streaming feature of Video SDK. We will go through step by step guide of integrating video calling with React Video SDK

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

Follow the steps to create the environment necessary to add video calls into your app.Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/react-hls).

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
```

</TabItem>
<TabItem value="yarn">

```bash
$ yarn add "@videosdk.live/react-sdk"
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
   ├── package.json
   .    .
```

We are going to use functional components to leverage react's reusable component architecture. There will be components for users, videos and controls (mic, camera, leave) over the video.

### App Architecture

App will contain a container component which includes user component with videos. Each video component will have conrols button for mic, camera , leave meeting and HLS button.

We are goting to work on these files:

- API.js: Responsible to handle API calls such as generating unique meetingId and token
- App.js: Responsible to render container and meeting join.

##### Architecture for Speaker

![quick-start-speaker-architechture](https://cdn.videosdk.live/website-resources/docs-resources/react_quick_start_ils_speaker_arch.png)

##### Architecture for Viewer

![quick-start-viewer-architechture](https://cdn.videosdk.live/website-resources/docs-resources/react_quick_start_ils_viewer_arch.png)

### Step 1: Get started with API.js

Before jumping to anything else, we have write API to generate unique meetingId. You will require auth token, you can generate it using either by using [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or generate it from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for developer.

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
  Constants,
} from "@videosdk.live/react-sdk";
import Hls from "hls.js";

import { authToken, createMeeting } from "./API";
import ReactPlayer from "react-player";

function JoinScreen({ getMeetingAndToken, setMode }) {
  return null;
}

function ParticipantView(props) {
  return null;
}

function Controls() {
  return null;
}

function SpeakerView() {
  return null;
}

function ViewerView() {
  return null;
}

function Container(props) {
  return null;
}

function App() {
  const [meetingId, setMeetingId] = useState(null);

  //State to handle the mode of the participant i.e. CONFERNCE or VIEWER
  const [mode, setMode] = useState("CONFERENCE");

  //Getting MeetingId from the API we created earlier
  //highlight-start
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };
  //highlight-end

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      //highlight-start
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
        //These will be the mode of the participant CONFERENCE or VIEWER
        mode: mode,
      }}
      token={authToken}
      //highlight-end
    >
      <MeetingConsumer>
        {() => (
          <Container meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
        )}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} setMode={setMode} />
  );
}

export default App;
```

### Step 3: Implement Join Screen

Join screen will work as medium to either schedule new meeting or to join existing meeting as a host or as a viewer.

These will have 3 buttons:

`1. Join as Host:` When this button is clicked, the person will join the entered `meetingId` as `HOST`.

`2. Join as Viewer:` When this button is clicked, the person will join the entered `meetingId` as `VIEWER`.

`3. Create Meeting:` When this button is clicked, the person will join a new meeting as `HOST`.

```js title="JoinScreen Component"
function JoinScreen({ getMeetingAndToken, setMode }) {
  const [meetingId, setMeetingId] = useState(null);
  //Set the mode of joining participant and set the meeting id or generate new one
  //highlight-start
  const onClick = async (mode) => {
    setMode(mode);
    await getMeetingAndToken(meetingId);
  };
  //highlight-end
  return (
    <div className="container">
      <button onClick={() => onClick("CONFERENCE")}>Create Meeting</button>
      <br />
      <br />
      {" or "}
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={() => onClick("CONFERENCE")}>Join as Host</button>
      {" | "}
      <button onClick={() => onClick("VIEWER")}>Join as Viewer</button>
    </div>
  );
}
```

#### Output

![VideoSDK React Interactive Live Streaming Quick Start Join Screen](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_join_screen.png)

### Step 4: Implement Container Component

Next step is to create a container to manage features such as join, leave, mute and unmute, start and stop hls for the HOST and to show a HLS Player for the viewer.

We will check the mode of the `localParticipant`, if its `CONFERENCE` we will show `SpeakerView` else we will show `ViewerView`.

```js title="Container Component"
function Container(props) {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //highlight-next-line
  const { join } = useMeeting();
  const mMeeting = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
    //callback for when there is error in meeting
    onError: (error) => {
      alert(error.message);
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {props.meetingId}</h3>
      {joined && joined == "JOINED" ? (
        mMeeting.localParticipant.mode == Constants.modes.CONFERENCE ? (
          <SpeakerView />
        ) : mMeeting.localParticipant.mode == Constants.modes.VIEWER ? (
          <ViewerView />
        ) : null
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}
```

### Step 5: Implement SpeakerView

Next step is to create `SpeakerView` and `Controls` componenets to manage features such as join, leave, mute and unmute.

1. We will get all the `participants` from `useMeeting` hook and filter them for the mode set to `CONFERENCE` so only Speakers are shown on the screen.

```js title="SpeakerView"
function SpeakerView() {
  //Get the participants and hlsState from useMeeting
  const { participants, hlsState } = useMeeting();

  //Filtering the host/speakers from all the participants
  //highlight-start
  const speakers = useMemo(() => {
    const speakerParticipants = [...participants.values()].filter(
      (participant) => {
        return participant.mode == Constants.modes.CONFERENCE;
      }
    );
    return speakerParticipants;
  }, [participants]);
  //highlight-end
  return (
    <div>
      <p>Current HLS State: {hlsState}</p>
      {/* Controls for the meeting */}
      <Controls />

      {/* Rendring all the HOST participants */}
      {speakers.map((participant) => (
        <ParticipantView participantId={participant.id} key={participant.id} />
      ))}
    </div>
  );
}

function Container(){
  //highlight-next-line
  ...

  const mMeeting = useMeeting({
    onMeetingJoined: () => {
      //we will pin the local participant if he joins in CONFERENCE mode
      //highlight-start
      if (mMeetingRef.current.localParticipant.mode == "CONFERENCE") {
        mMeetingRef.current.localParticipant.pin();
      }
      //highlight-end
      setJoined("JOINED");
    },
    //highlight-next-line
    ...
  });

  //We will create a ref to meeting object so that when used inside the
  //Callback functions, meeting state is maintained
  //highlight-start
  const mMeetingRef = useRef(mMeeting);
  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);
  //highlight-end

  return <>...</>;
}
```

2. We will add the `Controls` componenet which will allow the participant to toggle media.

```js title="Controls Component"
function Controls() {
  const { leave, toggleMic, toggleWebcam, startHls, stopHls } = useMeeting();
  return (
    <div>
      <button onClick={() => leave()}>Leave</button>
      &emsp;|&emsp;
      <button onClick={() => toggleMic()}>toggleMic</button>
      <button onClick={() => toggleWebcam()}>toggleWebcam</button>
      &emsp;|&emsp;
      <button
        onClick={() => {
          //We will start the HLS in SPOTLIGHT mode and PIN as
          //priority so only speakers are visible in the HLS stream
          //highlight-start
          startHls({
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
          //highlight-end
        }}
      >
        Start HLS
      </button>
      <button onClick={() => stopHls()}>Stop HLS</button>
    </div>
  );
}
```

3. We will be creating the `ParticipantView` to show the participants name and media. For which, will be using the `webcamStream` and `micStream` from the `useParticipant` hook to play the media of the participant.

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

  //Playing the audio in the <audio>
  //highlight-start
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
  //highlight-end

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

#### Output Of SpeakerView Component

![VideoSDK React Interactive Live Streaming Quick Start ParticipantView Component Component](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_speaker.png)

### Step 6: Implement ViewerView

When host start the live streaming, viewer will be able to see the live streaming.

To implement player view, we are going to use `hls.js`. It will be helpful to play hls stream.

Let's first add this package.

<Tabs
defaultValue="npm"
groupId={"server-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
$ npm install hls.js
```

</TabItem>
<TabItem value="yarn">

```bash
$ yarn add hls.js
```

</TabItem>
</Tabs>

With `hls.js` installed, we will get the `hlsUrls` from the `useMeeting` hook which will be used to play the HLS in the player.

```js
function ViewerView() {
  // States to store downstream url and current HLS state
  const playerRef = useRef(null);
  //Getting the hlsUrls
  const { hlsUrls, hlsState } = useMeeting();

  //Playing the HLS stream when the downstreamUrl is present and it is playable
  //highlight-start
  useEffect(() => {
    if (hlsUrls.downstreamUrl && hlsState == "HLS_PLAYABLE") {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          autoStartLoad: true,
          defaultAudioCodec: "mp4a.40.2",
        });

        let player = document.querySelector("#hlsPlayer");

        hls.loadSource(hlsUrls.downstreamUrl);
        hls.attachMedia(player);
      } else {
        if (typeof playerRef.current?.play === "function") {
          playerRef.current.src = hlsUrls.downstreamUrl;
          playerRef.current.play();
        }
      }
    }
  }, [hlsUrls, hlsState, playerRef.current]);
  //highlight-end

  return (
    <div>
      {/* Showing message if HLS is not started or is stopped by HOST */}
      {hlsState != "HLS_PLAYABLE" ? (
        <div>
          <p>HLS has not started yet or is stopped</p>
        </div>
      ) : (
        hlsState == "HLS_PLAYABLE" && (
          <div>
            <video
              ref={playerRef}
              id="hlsPlayer"
              autoPlay={true}
              controls
              style={{ width: "100%", height: "100%" }}
              playsinline
              playsInline
              muted={true}
              playing
              onError={(err) => {
                console.log(err, "hls video error");
              }}
            ></video>
          </div>
        )
      )}
    </div>
  );
}
```

#### Output of ViewerView

![VideoSDK React Interactive Live Streaming Quick Start Meeting Container Component](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_viewer.png)

#### Final Output

We are done with implementation of customised video calling app in ReactJS using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_video.mp4" height="500px" width={"100%"} />

</div>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/react-hls).
:::
