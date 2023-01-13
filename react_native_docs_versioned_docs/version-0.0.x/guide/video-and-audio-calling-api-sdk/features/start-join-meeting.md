---
title: Start join Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Start or join Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Start or Join Meeting
pagination_label: Start or Join Meeting
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-join-meeting
---

# Start or Join Meeting

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After the successful installation of VideoSDK, the next step is to integrate VideoSDK features with your webApp/MobileApp.</p>

<p>To Communicate with other participant's audio or video call, you will need to join the meeting.</p>

<p>This guide will provide an overview of how to configure, initialize and join a VideoSDK meeting.</p>

</div>
<div>
<img src="/img/gif/new-meeting.gif"/>
</div>

</div>

## 1. Configuration

To configure a meeting, you will need [generated token](/react-native/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis) and [meetingId](/api-reference/realtime-communication/create-room), we had discussed in [Server Setup](/react-native/guide/video-and-audio-calling-api-sdk/server-setup).
This code snippet calls API from local server

**Scenario 1** - Suppose you **don't have** any meetingId, you can simply generate meetingId by invoking `create-meeting` API.

**Scenario 2** - Suppose you **have** meetingId, now you don't have to call `create-meeting` API to generate meetingId, instead you can call `validate-meeting` API to validate meetingId.

**Token generation API is necessary for both scenario.**

```js
const getToken = async () => {
  try {
    const response = await fetch(`${LOCAL_SERVER_URL}/get-token`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const { token } = await response.json();
    return token;
  } catch (e) {
    console.log(e);
  }
};

const getMeetingId = async (token) => {
  try {
    const VIDEOSDK_API_ENDPOINT = `${LOCAL_SERVER_URL}/create-meeting`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    };
    const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
      .then(async (result) => {
        const { meetingId } = await result.json();
        return meetingId;
      })
      .catch((error) => console.log("error", error));
    return response;
  } catch (e) {
    console.log(e);
  }
};

/** This API is for validate the meeting id  */
/** Not require to call this API after create meeting API  */
const validateMeeting = async (token, meetingId) => {
  try {
    const VIDEOSDK_API_ENDPOINT = `${LOCAL_SERVER_URL}/validate-meeting/${meetingId}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    };
    const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
      .then(async (result) => {
        const { meetingId } = await result.json();
        return meetingId;
      })
      .catch((error) => console.log("error", error));
    return response;
  } catch (e) {
    console.log(e);
  }
};

const access_token = await getToken();
const meetingId = await getMeetingId(access_token);
const validatedMeetingId = await validateMeeting(token, "provided-meeting-id");
```

## 2. Initialization

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration, you will have to Initialize 
<p>
meeting by providing name, meetingId, micEnabled, webcamEnabled & maxResolution.
</p>
</p>

<p>
NOTE : For React & React native developer, you have

<p>to be familiar with hooks concept. You can understand hooks concept on <a href={'https://reactjs.org/docs/hooks-intro.html'}>React Hooks</a>.</p>

</p>
</div>
<div>
<img src="/img/gif/add-participant.gif"/>
</div>

</div>

```js
import { MeetingProvider, useMeeting } from "@videosdk.live/react-native-sdk";

const App = () => {
  // Init Meeting Provider
  return (
    <MeetingProvider
      config={{
        meetingId: "<Id-on-meeting>",
        name: "<Name-of-participant>",
        participantId:'Id-of-participant' // optional,  default: SDK will generate
        micEnabled: "<Flag-to-enable-mic>",
        webcamEnabled: "<Flag-to-enable-webcam>",
        maxResolution: "<Maximum-resolution>",
        notification: {
          title: "<Notification-Title>",
          message: "<Notification-Message>",
        },
      }}
      token={"<Authentication-token>"}
    >
      <MeetingView>...</MeetingView>
    </MeetingProvider>
  );
};

const MeetingView = () => {
  // Get Meeting object using useMeeting hook
  const meeting = useMeeting();

  return <>...</>;
};
```

## 3. Join

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration & initialization, the third step is to call join() to join a meeting.
</p>

<p>
After joining, you will be able to Manage Participant in a meeting.
</p>

</div>
<div>
<img src="/img/gif/join-meeting.gif"/>
</div>

</div>

```js
const MeetingView = () => {
  // Get Meeting object using useMeeting hook
  const { join } = useMeeting();

  const onPress = () => {
    // Joining Meeting
    join();
  };

  return <>...</>;
};
```

## Events

Following callbacks are receieved when a participant is successfully joined.

- Local Participant will receive a [`onMeetingJoined`](../../../api/sdk-reference/use-meeting/events#onmeetingjoined) event, when successfully joined.
- Remote Participant will receive a [`onParticipantJoined`](../../../api/sdk-reference/use-meeting/events#onparticipantjoined) event with the newly joined `Participant` object from the event callback.

```js
function onMeetingJoined() {
  console.log("onMeetingJoined");
}

function onParticipantJoined(participant) {
  console.log(" onParticipantJoined", participant);
}

const {
  meetingId
  ...
} = useMeeting({
  onMeetingJoined,
  onParticipantJoined,
  ...
});
```
