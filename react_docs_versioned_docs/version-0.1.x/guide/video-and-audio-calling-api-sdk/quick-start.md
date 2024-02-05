---
title: Quick Start with React JS
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Audio / Video Call
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

# Quick Start for Conference in React

VideoSDK empowers you to seamlessly integrate the video calling feature into your React application within minutes.

In this quickstart, you'll explore the group calling feature of VideoSDK. Follow the step-by-step guide to integrate it within your application.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- VideoSDK Developer Account (Not having one, follow **[VideoSDK Dashboard](https://app.videosdk.live/)**)
- Basic understanding of React
- **[React VideoSDK](https://www.npmjs.com/package/@videosdk.live/react-sdk)**
- Have Node and NPM installed on your device.
- Basic understanding of Hooks (useState, useRef, useEffect)
- React Context API (optional)

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. You can also find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/react-rtc).

### Create new React App

Create a new React App using the below command.

```bash
$ npx create-react-app videosdk-rtc-react-app
```

### Install VideoSDK

Install the VideoSDK using the below-mentioned npm command. Make sure you are in your react app directory before you run this command.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"bash-group-id"}
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

You are going to use functional components to leverage react's reusable component architecture. There will be components for users, videos and controls (mic, camera, leave) over the video.

### App Architecture

The App will contain a `MeetingView` component which includes a `ParticipantView` component which will render the participant's name, video, audio, etc. It will also have a `Controls` component which will allow the user to perform operations like leave and toggle media.

![VideoSDK React JS Quick Start Architecture](/img/react-quick-start.png)

You will be working on the following files:

- API.js: Responsible for handling API calls such as generating unique meetingId and token
- App.js: Responsible for rendering `MeetingView` and joining the meeting.

### Step 1: Get started with API.js

Prior to moving on, you must create an API request to generate a unique meetingId. You will need an authentication token, which you can create either through the [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or directly from the [VideoSDK Dashboard](https://app.videosdk.live/api-keys) for developers.

<Tabs
defaultValue="jsx"
groupId={"js-group-id"}
values={[
{label: 'Javascript', value: 'jsx'},
{label: 'Typescript', value: 'tsx'},
]}>
<TabItem value="jsx">

```js title="API.js"
//This is the Auth token, you will use it to generate a meeting and connect to it
//highlight-next-line
export const authToken = "<Generated-from-dashbaord>";
// API call to create a meeting
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

</TabItem>
<TabItem value="tsx">

```js title="API.js"
//This is the Auth token, you will use it to generate a meeting and connect to it
//highlight-next-line
export const authToken: string = "YOUR GENERATED TOKEN HERE";

// API call to create a meeting
export const createMeeting = async ({ token }: { token: string }) => {
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
  const { roomId }: { roomId: string } = await res.json();
  return roomId;
};
```

</TabItem>
</Tabs>

### Step 2: Wireframe App.js with all the components

To build up wireframe of App.js, you need to use VideoSDK Hooks and Context Providers. VideoSDK provides MeetingProvider, MeetingConsumer, useMeeting and useParticipant hooks.

First you need to understand Context Provider and Consumer. Context is primarily used when some data needs to be accessible by many components at different nesting levels.

- **MeetingProvider**: This is the Context Provider. It accepts value `config` and `token` as props. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- **MeetingConsumer**: This is the Context Consumer. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- **useMeeting**: This is the meeting hook API. It includes all the information related to meeting such as join, leave, enable/disable mic or webcam etc.
- **useParticipant**: This is the participant hook API. It is responsible for handling all the events and props related to one particular participant such as name, webcamStream, micStream etc.

The Meeting Context provides a way to listen for any changes that occur when a participant joins the meeting or makes modifications to their microphone, camera, and other settings.

Begin by making a few changes to the code in the App.js file.

<Tabs
defaultValue="jsx"
groupId={"js-group-id"}
values={[
{label: 'Javascript', value: 'jsx'},
{label: 'Typescript', value: 'tsx'},
]}>
<TabItem value="jsx">

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

function JoinScreen({ getMeetingAndToken }) {
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

  //This will set Meeting Id to null when meeting is left or ended
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

</TabItem>
<TabItem value="tsx">

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

function JoinScreen({
  getMeetingAndToken,
}: {
  getMeetingAndToken: (meeting?: string) => void,
}) {
  return null;
}

function ParticipantView({ participantId }: { participantId: string }) {
  return null;
}

function Controls() {
  return null;
}

function MeetingView({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void,
  meetingId: string,
}) {
  return null;
}

function App() {
  const [meetingId, setMeetingId] = (useState < string) | (null > null);

  //Getting the meeting id by calling the api we just wrote
  //highlight-start
  const getMeetingAndToken = async (id?: string) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };
  //highlight-end

  //This will set Meeting Id to null when meeting is left or ended
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

</TabItem>
</Tabs>

### Step 3: Implement Join Screen

Join screen will serve as a medium to either schedule a new meeting or join an existing one.

<Tabs
defaultValue="jsx"
groupId={"js-group-id"}
values={[
{label: 'Javascript', value: 'jsx'},
{label: 'Typescript', value: 'tsx'},
]}>
<TabItem value="jsx">

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

</TabItem>
<TabItem value="tsx">

```js title="JoinScreen Component"
function JoinScreen({
  getMeetingAndToken,
}: {
  getMeetingAndToken: (meeting?: string) => void;
}) {
  const [meetingId, setMeetingId] = useState<string | undefined>();
  const onClick = async () => {
    getMeetingAndToken(meetingId);
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

</TabItem>
</Tabs>

#### Output

![VideoSDK React JS Quick Start Join Screen](/img/quick-start/react-join-screen.jpeg)

### Step 4: Implement MeetingView and Controls

Next step is to create `MeetingView` and `Controls` components to manage features such as join, leave, mute and unmute.

<Tabs
defaultValue="jsx"
groupId={"js-group-id"}
values={[
{label: 'Javascript', value: 'jsx'},
{label: 'Typescript', value: 'tsx'},
]}>
<TabItem value="jsx">

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

</TabItem>
<TabItem value="tsx">

```js title="MeetingView"
function MeetingView({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void,
  meetingId: string,
}) {
  const [joined, setJoined] = (useState < string) | (null > null);
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
      onMeetingLeave();
    },
  });
  //highlight-end
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {meetingId}</h3>
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

</TabItem>
</Tabs>

##### Output of Controls Component

![VideoSDK React JS Quick Start  Controls Component](/img/quick-start/react-container-controls.jpeg)

### Step 5: Implement Participant View

Before implementing the participant view, you need to understand a couple of concepts.

###### 1. Forwarding Ref for mic and camera

The `useRef` hook is responsible  for referencing the audio and video components. It will be used to play and stop the audio and video of the participant.

```js title="Forwarding Ref for mic and camera"
const webcamRef = useRef(null);
const micRef = useRef(null);
```

###### 2. useParticipant Hook

The `useParticipant` hook is responsible for handling all the properties and events of one particular participant joined in the meeting. It will take participantId as argument.

```js title="useParticipant Hook"
const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
  props.participantId
);
```

###### 3. MediaStream API

The MediaStream API is beneficial for adding a MediaTrack to the audio/video tag, enabling the playback of audio or video.

```js title="MediaStream API"
const webcamRef = useRef(null);
const mediaStream = new MediaStream();
mediaStream.addTrack(webcamStream.track);

webcamRef.current.srcObject = mediaStream;
webcamRef.current
  .play()
  .catch((error) => console.error("videoElem.current.play() failed", error));
```

#### 4. Implement `ParticipantView`

Now you can use both of the hooks and the API to create `ParticipantView`

<Tabs
defaultValue="jsx"
groupId={"js-group-id"}
values={[
{label: 'Javascript', value: 'jsx'},
{label: 'Typescript', value: 'tsx'},
]}>
<TabItem value="jsx">

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

</TabItem>
<TabItem value="tsx">

```js title="ParticipantView"
function ParticipantView({ participantId }: { participantId: string }) {
  const micRef = useRef < HTMLAudioElement > null;
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

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
    <div key={participantId}>
      <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay muted={isLocal} />
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
          height={"200px"}
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

</TabItem>
</Tabs>

## Final Output

You have completed the implementation of a customized video calling app in React.js using VideoSDK. To explore more features, go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='/video/react-quick-start.mp4' width={"100%"} />

<br/>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/react-rtc).
:::
