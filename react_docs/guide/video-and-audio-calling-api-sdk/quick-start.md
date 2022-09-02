---
title: Quick Start with React JS
hide_title: false
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

# Quick Start

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Have Node and NPM installed on your device.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Project Setup

Follow the steps to create the environment necessary to add video calls into your app.

1. Create a new React App using the below command. Replace `<PROJECT_NAME>` with your project name.

```bash
$ npx create-react-app <PROJECT_NAME>
```

2. Install the VideoSDK using the below-mentioned npm command. Make sure you are in your react app directory before you run this command.

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

3. If you want to use the custom styling from this tutorial, update the `index.css` with the [css provided here](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example/blob/main/index.css)

4. Your project structure should look like.

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

## Start Writing Your Code

### Step 1: Creating the Joining Screen

The Joining screen will consist of:

- Create Button - This button will create a new meeting for you.
- TextField for Meeting ID - This text field will contain the meeting ID you want to join.
- Join Button - This button will join the meeting with meetingId you provided.

1. To create the basic UI, add `JoinScreen()` in the `App.js` file with the following code

```jsx title="App.js"
function App() {
  function JoinScreen() {
    return (
      <>
        <button
          onClick={async () => setMeetingId(await getMeetingId({ token }))}
          className="button"
        >
          Create Meeting
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="meetingId"
          name="meetingId"
          placeholder="Enter MeetingId"
        />
        &nbsp;
        <button
          onClick={() => {
            if (!document.getElementById("meetingId").value) {
              alert("Meeting Id is required");
              return;
            }
            setMeetingId(document.getElementById("meetingId").value);
          }}
          className="button"
        >
          Join
        </button>
      </>
    );
  }

  return <JoinScreen />;
}
```

2. Declare a state for meeting Id and auth token.

```jsx title="App.js"
function App() {
  //This state will contain the meeting id after generating one or adding in the textfield
  const [meetingId, setMeetingId] = useState();

  const [token, setToken] = useState();

  //Initializing the token on page load
  useEffect(() => {
    setToken(getToken());
  }, []);

  //...return method
}
```

3. We need to create a `getToken()` which will provide us with an auth token and `getMeetingId()` which will generate a meeting id when Create Meeting button is pressed.

- For this, we will create a new file named `api.js` which will contain all the API calls as well as the Auth token.

```jsx title="api.js"
//Replace your sampleToken from the VideoSDK dashboard here
const sampleToken = "";

export const getToken = () => {
  return sampleToken;
};

const getMeetingId = async ({ token }) => {
  try {
    const VIDEOSDK_API_ENDPOINT = "https://api.videosdk.live/v1/meetings";
    const options = {
      method: "POST",
      headers: {
        Authorization: token,
      },
    };
    const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
      .then(async (result) => {
        const { meetingId } = await result.json();
        setMeetingId(meetingId);
      })
      .catch((error) => console.log("error", error));
    return response;
  } catch (e) {
    console.log(e);
  }
};
```

### Step 2: Create Meeting View

Our React JS SDK provides two important hooks API:

- `useMeeting` : Responsible to handle meeting environment.
- `useParticipant` : Responsible to handle Participant

Also, React Provider and Consumer to listen to changes in the meeting environment.

- `MeetingProvider` : Meeting Provider is [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes
- `MeetingConsumer` : Meeting Consumer is [Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer) that subscribes to meeting changes.

1. We will start with adding the `MeetingProvider` to our app. So we will update the `return` of `App()`

```jsx title="App.js"
function App() {
  //...other constants and methods

  return (
    <div className="App">
      {meetingId ? (
        <MeetingProvider
          config={{
            meetingId: meetingId,
            name: "John Doe",
            micEnabled: true,
            webcamEnabled: true,
          }}
          token={token}
          joinWithoutUserInteraction={true}
        >
          <MeetingView
            onMeetingLeave={() => {
              setMeetingId("");
            }}
          ></MeetingView>
        </MeetingProvider>
      ) : (
        <JoinScreen />
      )}
    </div>
  );
}
```

2. Create a new `MeetingView` which will be responsible for showing the participants and other meeting-related operations. We will pass a method to this which will reset the meeting id in the `App()`

- We will use the `useMeeting` hook to get the callbacks for the events happening related to the meeting.

- We will create 4 callback functions that will be triggered on the event happens.

- And pass the callback functions to the `useMeeting` hook and also get the methods to toggle mic and webcam and leave the meeting.

```jsx title = App.js
//...function App(){}

const MeetingView = ({ onMeetingLeave }) => {
  function onParticipantJoined(participant) {
    console.log(" onParticipantJoined", participant);
  }

  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }

  function onMeetingJoined() {
    console.log("onMeetingJoined");
  }

  function onMeetingLeft() {
    console.log("onMeetingLeft");
    onMeetingLeave();
  }

  // Get Meeting object using useMeeting hook
  const { meetingId, leave, toggleMic, toggleWebcam } = useMeeting({
    onParticipantJoined,
    onParticipantLeft,
    onMeetingJoined,
    onMeetingLeft,
  });

  //...return
};
```

3. `MeetingView` contains three buttons each performing the leave, toggle mic, and toggle webcam operation.

It also contains `ParticipantsView` which will show all the participants present in the meeting.

With the below code you will have a basic design ready for the layout.

```jsx title = App.js
//...function App(){}

const MeetingView = ({ onMeetingLeave }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <button className={"button"} onClick={leave}>
          LEAVE
        </button>
        &nbsp;&nbsp;
        <button className={"button"} onClick={toggleMic}>
          {" "}
          toggleMic
        </button>
        &nbsp;&nbsp;
        <button className={"button"} onClick={toggleWebcam}>
          toggleWebcam
        </button>
        <h1>Meeting id is : {meetingId}</h1>
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              flex: 1,
              overflowY: "scroll",
            }}
          >
            <ParticipantsView />
          </div>
        </div>
      </div>
    </div>
  );
};
```

4. `MeetingView` is all set. Let's create the `ParticipantsView` which will show all the participants in the meeting.

- Here we use the `useMeeting` hook to get the participants list and then map it to `ParticipantView`

```jsx title="App.js"
//...function App(){}

//This function will accumulate the list of particiapnts and generate the ParticipantView for each participant in the meeting
const ParticipantsView = () => {
  //Get the list of participants
  const { participants } = useMeeting();

  return (
    <>
      <h2 style={{ color: "#3E84F6" }}>Participants</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          padding: "8px",
        }}
      >
        {[...participants.keys()].map((k) => (
          <div style={{}}>
            <ParticipantView key={k} participantId={k} />
          </div>
        ))}
      </div>
    </>
  );
};
```

5. We will create the `ParticipantView` which will show each participant's details.

- We will start with creating the empty `<div>`

```jsx
const ParticipantView = ({ participantId }) => {
  return <div className="participant-view"></div>;
};
```

- Now we will use the `useParticipant` hook to get streams of audio and video for the participant.

```jsx
const ParticipantView = ({ participantId }) => {
  const {
    displayName,
    participant,
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isLocal,
  } = useParticipant(participantId);

  //...return
};
```

- We will add the `<audio>` for the audio stream and set it up.

```jsx
const ParticipantView = ({ participantId }) => {
  //...useParticipant hook

  const micRef = useRef(null);

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
    <div className="participant-view">
      <audio ref={micRef} autoPlay muted={isLocal} />
    </div>
  );
};
```

- Next, we will add the `ReactPlayer` and Participant Details

```jsx
const ParticipantView = ({ participantId }) => {
  //...useParticipant hook

  //...mic stream setup

  const mediaStream = useMemo(() => {
    if (webcamOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  return (
    <div className="participant-view">
      <audio ref={micRef} autoPlay muted={isLocal} />
      <div className="video-container">
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <ReactPlayer
            height={"auto"}
            width={"100%"}
            url={mediaStream}
            playsInline
            playing={true}
            className="video"
            autoPlay
          />
          <p
            style={{
              position: "absolute",
              right: "8px",
              bottom: "0px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            WEB CAM {webcamOn ? " ON " : " OFF "}
          </p>

          <p
            className="overlay"
            style={{
              position: "absolute",
              left: "8px",
              bottom: "0px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            MIC {micOn ? " ON " : " OFF "}
          </p>
        </div>
      </div>
    </div>
  );
};
```

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example) on GitHub

:::

### Step 3: Run and Test

The app is ready to create and join a meeting. Make sure to replace the `sampleToken` from the VideoSDK dashboard into the `App.js`.

Your app should look like this after the implementation.

![VideoSDK React JS Quick Start Join Screen](/img/quick-start/react-join-screen.png) ![VideoSDK React JS Quick Start Meeting Screen](/img/quick-start/react-meeting-screen.png)

:::caution
For the tutorial purpose, we used a static token to initialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server that will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/react/guide/video-and-audio-calling-api-sdk/server-setup).
:::
