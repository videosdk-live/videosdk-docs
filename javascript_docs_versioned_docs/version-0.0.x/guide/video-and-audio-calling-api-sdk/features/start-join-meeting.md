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

To configure a meeting, you will need [generated token](/javascript/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis) and [meetingId](/api-reference/v1/realtime-communication/create-join-meeting#create-meeting), we had discussed in [Server Setup](/javascript/guide/video-and-audio-calling-api-sdk/server-setup).
This code snippet calls API from local server

**Scenario 1** - Suppose you **don't have** any meetingId, you can simply generate meetingId by invoking `create-meeting` API.

**Scenario 2** - Suppose you **have** meetingId, now you don't have to call `create-meeting` API to generate meetingId, instead you can call `validate-meeting` API to validate meetingId.

**Token generation API is necessary for both scenario.**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
import { VideoSDK } from "@videosdk.live/js-sdk";

// Configure authentication token
VideoSDK.config("<Authentication-token>");

// Initilize meeting
const meeting = VideoSDK.initMeeting({
  meetingId: "<Id-on-meeting>", // required
  name: "<Name-of-participant>", // required
  participantId:'Id-of-participant' // optional, default: SDK will generate
  micEnabled: "<Flag-to-enable-mic>", // optional, default: true
  webcamEnabled: "<Flag-to-enable-webcam>", // optional, default: true
  maxResolution: "<Maximum-resolution>", // optional, default: "hd"
  customVideoTrack: "<Video-track>", // optional
  customMicrophoneTrack: "<Microphone-track>", // optional
   multiStream: true // optional, default: true
});
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
const onPress = () => {
  // Joining Meeting
  meeting?.join();
};
```

## Events

Following events are emitted on the `meeting` when it is successfully joined.

- Local Participant will receive a [`meeting-joined`](../../../api/sdk-reference/meeting-class/events.md#meeting-joined) event when successfully joined.
- Remote Participant will receive a [`participant-joined`](../../../api/sdk-reference/meeting-class/events.md#participant-joined) event with the newly joined [`Participant`](../../../api/sdk-reference/participant-class/introduction.md) object from the event callback.

```js
meeting.on("meeting-joined", () => {
  console.log("Meeting Joined Successfully");
});

meeting.on("participant-joined", (participant) => {
  console.log("New Participant Joined: ", participant.id);
});
```
