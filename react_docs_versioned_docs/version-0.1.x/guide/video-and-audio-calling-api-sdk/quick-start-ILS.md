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

# Quick Start for Interactive Live Streaming in React

<ReactPlayer controls url="https://www.youtube.com/watch?v=L1x7wtH-ok8" height="500px" width={"100%"} />

VideoSDK empowers you to seamlessly integrate the interactive live streaming feature into your React application within minutes.

In this quickstart, you'll explore this feature of VideoSDK. Follow the step-by-step guide to integrate it within your application.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Basic understanding of React
- **[React Video SDK](https://www.npmjs.com/package/@videosdk.live/react-sdk)**
- Have Node and NPM installed on your device.
- Basic understanding of Hooks (useState, useRef, useEffect)
- React Context API (optional)

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add live streaming into your app. You can also find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/react-hls).

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

You are going to use functional components to leverage react's reusable component architecture. There will be components for users, videos and controls (mic, camera, leave) over the video.

### App Architecture

The App will contain a container component which includes a user component with videos. Each video component will have control buttons for mic, camera , leave meeting and HLS.

You will be working on these files:

- API.js: Responsible for handling API calls such as generating unique meetingId and token
- App.js: Responsible for rendering container and joining the meeting.

##### Architecture for Speaker

![quick-start-speaker-architechture](https://cdn.videosdk.live/website-resources/docs-resources/react_quick_start_ils_speaker_arch.png)

##### Architecture for Viewer

![quick-start-viewer-architechture](https://cdn.videosdk.live/website-resources/docs-resources/react_quick_start_ils_viewer_arch.png)

### Step 1: Get started with API.js

Prior to moving on, you must create an API request to generate a unique meetingId. You will need an authentication token, which you can create either through the [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or directly from the [VideoSDK Dashboard](https://app.videosdk.live/api-keys) for developers.

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

To build up wireframe of App.js, you will be using VideoSDK Hooks and Context Providers. VideoSDK provides MeetingProvider, MeetingConsumer, useMeeting and useParticipant hooks. Let's understand each of them.

First we will explore Context Provider and Consumer. Context is primarily used when some data needs to be accessible by many components at different nesting levels.

- **MeetingProvider**: This is the Context Provider. It accepts value `config` and `token` as props. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- **MeetingConsumer**: This is the Context Consumer. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- **useMeeting**: This is the meeting hook API. It includes all the information related to meeting such as join, leave, enable/disable mic or webcam etc.
- **useParticipant**: This is the participant hook API. It is responsible for handling all the events and props related to one particular participant such as name, webcamStream, micStream etc.

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

  //State to handle the mode of the participant i.e. CONFERENCE or VIEWER
  const [mode, setMode] = useState("CONFERENCE");

  //You have to get the MeetingId from the API created earlier
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
        //This will be the mode of the participant CONFERENCE or VIEWER
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

Join screen will serve as a medium to either schedule a new meeting or join an existing one as a host or a viewer.

This functionality will have 3 buttons:

`1. Join as Host:` When this button is clicked, the person will join the meeting with the entered `meetingId` as `HOST`.

`2. Join as Viewer:` When this button is clicked, the person will join the meeting with the entered `meetingId` as `VIEWER`.

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

Next step is to create a container to manage features such as join, leave, mute, unmute, start and stop HLS for the HOST and to display an HLS Player for the viewer.

You need to determine the mode of the `localParticipant`, if its `CONFERENCE`, display the `SpeakerView` component otherwise show the `ViewerView` component.

```js title="Container Component"
function Container(props) {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //highlight-next-line
  const { join } = useMeeting();
  const mMeeting = useMeeting({
    //callback for when a meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when a meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
    //callback for when there is an error in a meeting
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

Next step is to create `SpeakerView` and `Controls` components to manage features such as join, leave, mute and unmute.

1. You have to retrieve all the `participants` using the `useMeeting` hook and filter them based on the mode set to `CONFERENCE` ensuring that only Speakers are displayed on the screen.

```js title="SpeakerView"
function SpeakerView() {
  //Get the participants and HLS State from useMeeting
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
      //Pin the local participant if he joins in CONFERENCE mode
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

  //Create a ref to meeting object so that when used inside the
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

2. You have to add the `Controls` component which will allow the participant to toggle their media.

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
          //Start the HLS in SPOTLIGHT mode and PIN as
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

3. You need to then create the `ParticipantView` to display the participant's name and media. To play the media, use the `webcamStream` and `micStream` from the `useParticipant` hook.

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
          playsinline // extremely crucial prop
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

![VideoSDK React Interactive Live Streaming Quick Start ParticipantView Component](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_speaker.png)

### Step 6: Implement ViewerView

When the host initiates the live streaming, viewers will be able to watch it.

To implement the player view, you have to use `hls.js`. It will be helpful for playing the HLS stream.

Begin by adding this package.

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

With `hls.js` installed, you can now get the `hlsUrls` from the `useMeeting` hook which will be used to play the HLS in the player.

```js
//highlight-start
//importing hls.js
import Hls from "hls.js";
//highlight-end

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
          maxLoadingDelay: 1, // max video loading delay used in automatic start level selection
          defaultAudioCodec: "mp4a.40.2", // default audio codec
          maxBufferLength: 0, // If buffer length is/becomes less than this value, a new fragment will be loaded
          maxMaxBufferLength: 1, // Hls.js will never exceed this value
          startLevel: 0, // Start playback at the lowest quality level
          startPosition: -1, // set -1 playback will start from intialtime = 0
          maxBufferHole: 0.001, // 'Maximum' inter-fragment buffer hole tolerance that hls.js can cope with when searching for the next fragment to load.
          highBufferWatchdogPeriod: 0, // if media element is expected to play and if currentTime has not moved for more than highBufferWatchdogPeriod and if there are more than maxBufferHole seconds buffered upfront, hls.js will jump buffer gaps, or try to nudge playhead to recover playback.
          nudgeOffset: 0.05, // In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback. media.currentTime += (nb nudge retry -1)*nudgeOffset
          nudgeMaxRetry: 1, // Max nb of nudge retries before hls.js raises a fatal BUFFER_STALLED_ERROR
          maxFragLookUpTolerance: .1, // This tolerance factor is used during fragment lookup. 
          liveSyncDurationCount: 1, // if set to 3, playback will start from fragment N-3, N being the last fragment of the live playlist
          abrEwmaFastLive: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
          abrEwmaSlowLive: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
          abrEwmaFastVoD: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
          abrEwmaSlowVoD: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
          maxStarvationDelay: 1, // ABR algorithm will always try to choose a quality level that should avoid rebuffering
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

You have completed the implementation of a customised live streaming app in ReactJS using VideoSDK. To explore more features, go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_video.mp4" height="500px" width={"100%"} />

</div>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/react-hls).
:::
