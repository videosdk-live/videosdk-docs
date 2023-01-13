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
  - collabration
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
   │    ├── api.js
   │    ├── App.js
   │    ├── App.css
   │    ├── index.js
   │    ├── MeetingContainer.js
   |    ├── ParticipantView.js
   |    ├── PlayerView.js
   ├── package.json
   .    .
```

We are going to use functional components to leverage react's reusable component architecture. There will be components for users, videos and controls (mic, camera, leave) over the video.

### App Architecture

App will contain a container component which includes user component with videos. Each video component will have conrols button for mic, camera , leave meeting ,screen share and HLS button.

We are goting to work on these files:

- API.js: Responsible to handle API calls such as generating unique meetingId and token
- App.js: Responsible to render meeting container and meeting join.
- MeetingContainer.js - Responsible to render conrols button for mic, camera , leave meeting ,screen share and HLS button , participant view and player view.
- ParticipantView.js - Responsible to render participant audio , video and screen share.
- PlayerView.js - Responsible to render player view for play hls stream.

### Step 1: Get started with API.js

Before jumping to anything else, we have write API to generate unique meetingId. You will require auth token, you can generate it using either by using [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or generate it from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for developer.

```js title="API.js"
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
import React, { useEffect, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";

function JoinScreen() {
  return null;
}

function App() {
  const [meetingId, setMeetingId] = useState(null);
  const [meetingMode, setMeetingMode] = useState(Constants.modes.CONFERENCE);

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const updateMeetingId = (meetingId) => {
    setMeetingId(meetingId);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: false,
        name: "C.V. Raman",
        mode: "CONFERENCE", // "CONFERENCE" || "VIWER"
        multiStream: false,
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => <Container meetingId={meetingId} meetingMode={meetingMode} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen
      getMeetingAndToken={getMeetingAndToken}
      updateMeetingId={updateMeetingId}
      setMeetingMode={setMeetingMode}
    />
  );
}

export default App;
```

### Step 3: Implement Join Screen

Join screen will work as medium to either schedule new meeting or to join existing meeting as a host or as a viewer.

```js title="JoinScreen Component"
function JoinScreen({ updateMeetingId, getMeetingAndToken, setMeetingMode }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          updateMeetingId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getMeetingAndToken();
          setMeetingMode(Constants.modes.CONFERENCE);
        }}
      >
        Join as a host
      </button>
      <button
        onClick={() => {
          getMeetingAndToken();
          setMeetingMode(Constants.modes.CONFERENCE);
        }}
      >
        Create Meeting
      </button>
      <button
        onClick={() => {
          getMeetingAndToken();
          setMeetingMode(Constants.modes.VIEWER);
        }}
      >
        Join as viewer
      </button>
    </div>
  );
}
```

#### Output

![VideoSDK React Interactive Live Streaming Quick Start Join Screen](/img/quick-start/react-ils-join-screen.png)

### Step 4: Implement Meeting Container

Next step is to create a meeting container to manage features such as join, leave, mute and unmute, screen share , start and stop hls.

```js title="MeetingContainer Component"
function MeetingContainer({ meetingId, meetingMode }) {
  const [downStreamUrl, setDownStreamUrl] = useState(null);
  const [afterMeetingJoinedHLSState, setAfterMeetingJoinedHLSState] =
    useState(null);
  const [joined, setJoined] = useState(false);

  const _handleOnHlsStateChanged = (data) => {
    if (
      data.status === Constants.hlsEvents.HLS_STARTED ||
      data.status === Constants.hlsEvents.HLS_STOPPED
    ) {
      setDownStreamUrl(
        data.status === Constants.hlsEvents.HLS_STARTED
          ? data.downstreamUrl
          : null
      );
    }

    if (data.status === Constants.hlsEvents.HLS_STARTING) {
      setAfterMeetingJoinedHLSState("STARTING");
    }

    if (data.status === Constants.hlsEvents.HLS_STARTED) {
      setAfterMeetingJoinedHLSState("STARTED");
    }

    if (data.status === Constants.hlsEvents.HLS_STOPPING) {
      setAfterMeetingJoinedHLSState("STOPPING");
    }

    if (data.status === Constants.hlsEvents.HLS_STOPPED) {
      setAfterMeetingJoinedHLSState("STOPPED");
    }
  };

  const {
    join,
    leave,
    toggleMic,
    toggleWebcam,
    toggleScreenShare,
    startHls,
    stopHls,
  } = useMeeting({
    onHlsStateChanged: _handleOnHlsStateChanged,
  });

  const { participants } = useMeeting();

  const participantsArr = [];
  participants.forEach((values, keys) => {
    if (values.mode === "CONFERENCE") {
      participantsArr.push(values);
    }
  });
  const participantMap = new Map(participantsArr.map((id) => [id.id, id]));

  const joinMeeting = () => {
    setJoined(true);
    join();
  };

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <div style={{ height: "40px" }}>
        <header>Meeting Id: {meetingId}</header>
      </div>
      {joined ? (
        meetingMode === Constants.modes.CONFERENCE && (
          <div>
            <button onClick={leave}>Leave</button>
            <button onClick={toggleMic}>toggleMic</button>
            <button onClick={toggleWebcam}>toggleWebcam</button>
            <button onClick={toggleScreenShare}>toggleScreenShare</button>
            <button
              onClick={() => {
                if (afterMeetingJoinedHLSState === "STARTED") {
                  stopHls();
                } else {
                  const layout = {
                    type: "GRID",
                    priority: "SPEAKER",
                    gridSize: 12,
                  };
                  startHls({ layout, theme: "LIGHT" });
                }
              }}
            >
              {afterMeetingJoinedHLSState === "STARTING"
                ? "Starting HLS"
                : afterMeetingJoinedHLSState === "STARTED"
                ? afterMeetingJoinedHLSState === "STOPPING"
                  ? "Stopping HLS"
                  : "Stop HLS"
                : "Start HLS"}
            </button>
          </div>
        )
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
      {meetingMode === Constants.modes.CONFERENCE ? (
        <div>
          {chunk([...participantMap.keys()]).map((k) => (
            <Row key={k} gutter={80}>
              {k.map((l) => (
                <Col span={4}>
                  <ParticipantView key={l} participantId={l} />
                </Col>
              ))}
            </Row>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", flex: 1 }}>
          {joined && <PlayerView downStreamUrl={downStreamUrl} />}{" "}
        </div>
      )}
    </div>
  );
}
```

#### Output of MeetingContainer Component

![VideoSDK React Interactive Live Streaming Quick Start Meeting Container Component](/img/quick-start/react-ils-container.png)

#### After Joining Meeting Output Of MeetingContainer Component

![VideoSDK React Interactive Live Streaming Quick Start Meeting Container Component](/img/quick-start/react-ils-container-controls.png)

### Step 5: Implement ParticipantView Component

Before implementing participantView component, We need to understand couple of concepts.

#### 1. Forwarding Ref for mic and camera

Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
We are going to use Refs to attach audio and video tracks with components.

```js title="Forwarding Ref for mic and camera"
const webcamRef = useRef(null);
const micRef = useRef(null);
```

#### 2. useParticipant Hook

useParticipant hook is responsible to handle all the properties and events of one particular participant joined in the meeting. It will take participantId as argument.

```js title="useParticipant Hook"
const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
  props.participantId
);
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
  .catch((error) => console.error("videoElem.current.play() failed", error));
```

#### 4. Implemeting ParticipantView Component

Now let's use all this to create ParticipantView Component

```js title="ParticipantView Component"
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

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn && webcamStream) {
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

#### Output Of ParticipantView Component

![VideoSDK React Interactive Live Streaming Quick Start ParticipantView Component Component](/img/quick-start/react-ils-container.png)

#### After Joining Meeting Output Of ParticipantView Component

![VideoSDK React Interactive Live Streaming Quick Start ParticipantView Component Component](/img/quick-start/ils_container.png)

### Step 6: Implement PlayerView Component

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

After adding this you can add this code in PlayerView Component.

```js
import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

// Sleep function to wait for a few seconds.
export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function PlayerView({ downStreamUrl }) {
  const [canPlay, setCanPlay] = useState(false);
  const playerRef = useRef();

  // when hls is started, we need to wait for a few seconds for the stream to start.
  async function waitForHLSPlayable(downStreamUrl, maxRetry) {
    return new Promise(async (resolve, reject) => {
      if (maxRetry < 1) {
        return reject(false);
      }

      let status;

      try {
        const res = await fetch(downStreamUrl, {
          method: "GET",
        });
        status = res.status;
      } catch (err) {}

      if (status === 200) {
        return resolve(true);
      }

      await sleep(1000);

      return resolve(
        await waitForHLSPlayable(downStreamUrl, maxRetry - 1).catch((err) => {})
      );
    });
  }

  // We are checking if the HLS stream is playable or not.
  const checkHLSPlayable = async (downStreamUrl) => {
    const canPlay = await waitForHLSPlayable(downStreamUrl, 20);

    if (canPlay) {
      setCanPlay(true);
    } else {
      setCanPlay(false);
    }
  };

  // When the downStreamUrl changes, we need to check if the HLS stream is playable or not.
  useEffect(async () => {
    if (downStreamUrl) {
      checkHLSPlayable(downStreamUrl);
    } else {
      setCanPlay(false);
    }
  }, [downStreamUrl]);

  // When the canPlay state changes, we need to play the HLS stream.
  useEffect(() => {
    if (downStreamUrl && canPlay) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          autoStartLoad: true,
          defaultAudioCodec: "mp4a.40.2",
        });

        let player = document.querySelector("#hlsPlayer");

        hls.loadSource(downStreamUrl);
        hls.attachMedia(player);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {});
        hls.on(Hls.Events.ERROR, function (err) {
          console.log(err);
        });
      } else {
        if (typeof playerRef.current?.play === "function") {
          playerRef.current.src = downStreamUrl;
          playerRef.current.play();
        }
      }
    }
  }, [downStreamUrl, canPlay]);

  return (
    <div
      style={{
        height: "calc(100vh - 40px)",
        maxHeight: "100%",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {downStreamUrl && canPlay ? (
        <video
          ref={playerRef}
          id="hlsPlayer"
          autoPlay={true}
          style={{ height: "100%", width: "100%" }}
          controls
          playsinline
          playsInline
          playing
          onError={(err) => {
            console.log(err, "hls video error");
          }}
        ></video>
      ) : (
        <div>
          <h1>Wait for the host to start live strem</h1>
        </div>
      )}
    </div>
  );
}

export default PlayerView;
```

#### Output Of PlayerView Component

![VideoSDK React Interactive Live Streaming Quick Start PlayerView Component Component](/img/quick-start/react-playerView.png)

#### After Receive HLS Stream Output Of PlayerView Component

![VideoSDK React Interactive Live Streaming Quick Start PlayerView Component Component](/img/quick-start/react-playerView-HLS.png)

#### Final Output

We are done with implementation of customised video calling app in reeact js using Video SDK. To explore more features go through Basic and Advanced features.

<img width="100%" src="/img/quick-start/ils-final-output.gif"/>
