---
title: Quick Start with React JS
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with React JS
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

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Sample Project

These quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](/). Once you are done with the tutorial given below your app should look like this.

![VideoSDK React JS Quick Start Join Screen](/img/quick-start/react-join-screen.png) ![VideoSDK React JS Quick Start Meeting Screen](/img/quick-start/react-meeting-screen.png) 


## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

* Have Node and NPM installed on your device.
* A valid VideoSDK account.
* An active VideoSDK project with temporary token. For details, see [Signup & Create API Key](/react/guide/video-and-audio-calling-api-sdk/signup-and-create-api).

## Project Setup

Follow the steps to create the environment necessary to add video call into your app.

1. Create a new React App using the below command. Replace `<PROJECT_NAME>` with your project name.

```bash
$ npx create-react-app <PROJECT_NAME>
```

2. Install the VideoSDK using the below mentioned npm command. Make sure you are in your react app directory before you run this command.

```bash
$ npm install "@videosdk.live/react-sdk"

//For the Participants Video
$ npm install "react-player"
```

Or, if you are using Yarn use below command

```bash
$ yarn add "@videosdk.live/react-sdk"

//For the Participants Video
$ yarn add "react-player"
```

3. If you want to use the custom styling from this tutorial, update the `index.css` with the [css provided here](/)

## Implementing the VideoSDK

### Creating the Joining Screen

The Joining screen will consist of:
- Create Button - This button will create a new meeting for you.
- TextField for Meeting ID - This textfield will contain the meeting ID you want to join.
- Join Button - This buttom will join the meeting with which the you will be joined.

1. To create the basic UI replace the `App()` in the `App.js` file with following code

```jsx title="App.js"
function App() {
  return (
    <div className="App">
      <button onClick={() => getMeetingId({ token })} className="button">
        Create Meeting
      </button>
      <br /><br />
      <label htmlFor="meetingId">Meeting Id: </label>
      <input type="text" id="meetingId" name="meetingId" /><br /><br />
      <button onClick={() => {
        setMeetingId(document.getElementById("meetingId").value)
      }} className="button">
        Join Meeting
      </button>
    </div >
  );
}
```

2. Declare a state for meeting Id and auth token.

```jsx title="App.js"
function App(){

  //This state will contain the meeting id after generating one or adding in the textfield
  const [meetingId, setMeetingId] = useState();

  const [token, setToken] = useState();

  //Initializing the token on page load
  useEffect(()=>{
    setToken(getToken());
  },[])

  //...return method
}
```

3. We need to create a `getToken()` which will provide us with an auth token and `getMeetingId()` which will generate a meeting id when Create Meeting button is pressed.

- For this, we will create a new file named `api.js` which will contain all the api call as well as the Auth token.

```jsx title="api.js"

//Replace your sampleToken from the VideoSDK dashboard here
const sampleToken = "";

export const getToken = () =>{
    return sampleToken;
}

const getMeetingId = async ({ token }) => {
  try {
    const VIDEOSDK_API_ENDPOINT = "https://api.videosdk.live/v1/meetings";
    const options = {
      method: "POST",
      headers: {
        "Authorization": token,
      }
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

4. With this join screen is ready to create and join a meeting with respective meeting id and sample token.

### Initalizing the Meeting

Our React JS SDK provides two important hooks API:
- `useMeeting` : Responsible to handle meeting environment.
- `useParticipant` : Responsible to handle Participant

Also, React Provider and Consumer to listen changes in meeting environment.
- `MeetingProvider` : Meeting Provider is [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes
- `MeetingConsumer` : Meeting Consumer is [Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer) that subscribes to meeting changes.

1. We will start with adding the `MeetingProvider` to our app. In order to that, replace the update the `return` of the `App()`

```jsx title="App.js"
function App(){

  //...other constants and methods

  return (
    <div className="App">
      {
        meetingId ?
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
              onMeetingLeave={
                () => {
                  setMeetingId("")
                }
              }
            ></MeetingView>
          </MeetingProvider> :
          <>
            <button onClick={() => getMeetingId({ token })} className="button">Create Meeting</button>
            <br /><br />
            <label htmlFor="meetingId">Meeting Id: </label>
            <input type="text" id="meetingId" name="meetingId" /><br /><br />
            <button onClick={() => {
              setMeetingId(document.getElementById("meetingId").value)
            }} className="button">Join Meeting</button>
          </>
      }
    </div>
  );
}
```

2. Create a new `MeetingView` which will be reponsible for showing the participants and other meeting related operations. We will pass a method to this which will reset the meeting id in the `App()`

`MeetingView` contains three button each performing the leave, toggle mic and toggle webcame operation.

It also contains `ParticipantsView` which will show all the particiapnts present in the meeting.

With below code you will have a basic design ready for the layout.

```jsx title = App.js

//...function App(){}

const MeetingView = ({
  onMeetingLeave
}) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#D6E9FE",
      }}
    >
      <div>
        <button className={"button red"}>
          LEAVE
        </button>
        <button className={"button blue"}>
          toggleMic
        </button>
        <button className={"button blue"}>
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
            {/*<ParticipantsView />*/}
          </div>
        </div>
      </div>
    </div>
  );
};
```

3. We will use the `useMeeting` hook to get the callbacks for the events on happening related to the meeting.

- We will create 4 callback functions which will be triggered on the event happens.

```jsx title = App.js

//...function App(){}

const MeetingView = ({
  onMeetingLeave
}) => {

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


  //...return

};

```

- We will pass the callback functions to the `useMeeting` hook and also get the methods to toggle mic and webcam and leave the meeting.

```jsx title = App.js

//...function App(){}

const MeetingView = ({
  onMeetingLeave
}) => {

  //...callback functions

  // Get Meeting object using useMeeting hook
  const {
    meetingId,
    leave,
    toggleMic,
    toggleWebcam,

  } = useMeeting({
    onParticipantJoined,
    onParticipantLeft,
    onMeetingJoined,
    onMeetingLeft,
  });

  //...return
};

```

- Now we will set the `onClick` event for our buttons.

```jsx title = App.js

//...function App(){}

const MeetingView = ({
  onMeetingLeave
}) => {

  //...callback functions

  //...useMeeting Hook

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#D6E9FE",
      }}
    >
      <div>
        {/*Update this buttons*/}
        <button className={"button red"} onClick={leave}> 
          LEAVE
        </button>
        <button className={"button blue"} onClick={toggleMic}>
          toggleMic
        </button>
        <button className={"button blue"} onClick={toggleWebcam}>
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


3. `MeetingView` is all set. Lets create the `ParticipantsView` which will show all the participants in the meeting.

- Here we use the `useMeeting` hook to get the participants list and then map it to `ParticipantView`

```jsx title="App.js"
//...function App(){}

//This function will accumulate the list of particiapnts and generate the ParticipantView for each participant in the meeting
const ParticipantsView = () => {

  //Get the list of participants
  const { participants } = useMeeting();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        padding: "8px",
      }}
    >
      <h2 style={{ color:"#3E84F6"}}>Participants</h2>
      {[...participants.keys()].map((k) => (
        <div style={{ display: "flex" }}>
            <ParticipantView key={k} participantId={k} />
        </div>
      ))}
    </div>
  );
}

```

4. We will create the `ParticipantView` which will show each participants details.

- We will start with creating the empty `<div>`

```jsx 
const ParticipantView = ({ participantId }) => {

  return (
    <div
      className='participant-view'
    >
    </div>
  );
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
    <div
      className='participant-view'
    >
      <audio ref={micRef} autoPlay muted={isLocal} />
    </div>
  );
};
```

- Next we will add the `ReactPlayer`

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
    <div
      className='participant-view'
    >
      <audio ref={micRef} autoPlay muted={isLocal} />

      <div
        className='video-container'
      >
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <ReactPlayer
            height={"100%"}
            width={"100%"}
            url = {mediaStream}
            playsInline
            playing={true}
            className='video'
            autoPlay
          />
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
            }}
          >
            <p
              style={{
                color: webcamOn ? "green" : "red",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              WEB CAM
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
```

- Now we will show the details of the participants.

```jsx 
const ParticipantView = ({ participantId }) => {

  //...useParticipant hook

  //...mic stream setup

  //...webcam stream setup

  return (
    <div
      className='participant-view'
    >
      <audio ref={micRef} autoPlay muted={isLocal} />

      <div
        className='video-container'
      >
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <ReactPlayer
            height={"100%"}
            width={"100%"}
            url = {mediaStream}
            playsInline
            playing={true}
            className='video'
            autoPlay
          />
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
            }}
          >
            <p
              style={{
                color: webcamOn ? "green" : "red",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              WEB CAM
            </p>
          </div>
        </div>
      </div>
      <table>
        {[
          { k: "Name", v: displayName },
          { k: "webcamOn", v: webcamOn ? "YES" : "NO" },
          { k: "micOn", v: micOn ? "YES" : "NO" },
          { k: "isLocal", v: isLocal ? "YES" : "NO" },
        ].map(({ k, v }) => (
          <tr key={k}>
            <td style={{ border: "1px solid #fff", padding: 4 }}>
              <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{k}</h3>
            </td>
            <td style={{ border: "1px solid #fff", padding: 4 }}>
              <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{v}</h3>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
```


### Run and Test

The app is ready to create and join a meeting. Make sure to repalce the `sampleToken` from the VideoSDK dashboard into the `App.js`.

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/react/guide/video-and-audio-calling-api-sdk/server-setup).
:::