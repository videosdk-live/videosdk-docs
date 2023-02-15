---
title: Initialise Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Initialise Meeting
pagination_label: Initialise Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: initialise-meeting
---

To configure a VideoSDK meeting you require two things, first the `token` which will be used for authentication purpose and a `meetingId` which will be used define where a participant will join. Let us see each of the steps closely.

### Generating Token

You can generate a `token` in two ways:

1. Using the VideoSDK [Dashboard's API Key section](https://app.videosdk.live/api-keys).
2. If you have an backend server already setup to fetch the token, you can simply make an API call and fetch the token from your backend server.

In order to understand authenticationa and token generation in detail, [please visit here](../authentication-and-token).

```js
const getToken = async () => {
  // Update the token here from the VideoSDK dashboard
  // highlight-next-line
  let token = "YOUR TOKEN";

  // or you can put a fetch request to get the token from your backend

  return token;
};
```

### Generating Meeting Id

With the token ready, we can get the `meetingId` from the [VideoSDK's rooms API](/api-reference/realtime-communication/create-room).

```js
const getMeetingId = async (token) => {
  try {
    //We will use VideoSDK rooms API endpoint to create a meetingId
    //highlight-next-line
    const VIDEOSDK_API_ENDPOINT = `https://api.videosdk.live/v2/rooms`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // We will pass the token in the headers
        // highlight-next-line
        Authorization: token,
      },
    };
    const meetingId = await fetch(VIDEOSDK_API_ENDPOINT, options)
      .then(async (result) => {
        const { roomId } = await result.json();
        return roomId;
      })
      .catch((error) => console.log("error", error));

    //we will return the meetingId which we got from the response of the api
    //highlight-next-line
    return meetingId;
  } catch (e) {
    console.log(e);
  }
};
```

### Initialization of Meeting

With the generated meetingId and token, we can initialize the meeting. We will use the `MeetingProvider` from the React SDK which will initialize the meeting for us and it will allow us to subscribe to the meeting changes

#### Meeting Provider

`MeetingProvider` is Reac's [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes.

We will be passing the intialization configuration for the meeting and the token in the `MeetingProvider`.

Let's take a deeper look at the available configuration options first.

```js
<MeetingProvider
  config={{
    meetingId: "<Id-on-meeting>",
    name: "<Name-of-participant>",
    micEnabled: "<Flag-to-enable-mic>",
    webcamEnabled: "<Flag-to-enable-webcam>",
    maxResolution: "<Maximum-resolution>", //optional,
    participantId:'Id-of-participant' // optional, default: SDK will generate
    multiStream: "<Flag-to-use-multiStream>", // optional, default: true
    customCameraVideoTrack: "<Camerea-MediaStream>", // optional
    customMicrophoneAudioTrack: "<Microphone-MediaStream>", // optional
    mode: "<Mode-of-participant>", // optional
  }}
  token={"token"}
  joinWithoutUserInteraction // Boolean
></MeetingProvider>
```

- `meetingId`: These will be the meetingId a participant is trying to join which will be in the format `xxxx-yyyy-zzzz` and will be generated using the [VideoSDK's Room API](/api-reference/realtime-communication/create-room).

- `name`: These will represent the name of participant in the meeting.

- `micEnabled`: These is a `boolean` flag, indicating wheather the particpant mic will be enabled automatically after joining the meeting.

- `webcamEnabled`: These is a `boolean` flag, indicating wheather the particpant webcam will be enabled automatically after joining the meeting.

- `maxResolution`: These will be the value determining the maximum resolution a participant should send.

  - It can have `sd` | `hd` as itss values.
  - These is a an `OPTIONAL` parameter.

- `participantId`: These will be the unique identifer for the participant inside the meeting.

  - It can be used to specify the **unique identifer** which can be linked with **your own database** service.
  - It has to be of `String` type.
  - These is an `OPTIONAL` parameter. By defualt VideoSDK will generate unique id for each participant.

- `multiStream`: These is a `boolean` flag which indicates wheather VideoSDK should send multiple resolution stream for a single participant or just a single resolution stream. To understand `multiStream` in detail checkout our Video Call Optiomization Guide.

  - These is an `OPTIONAL` parameter. By default, VideoSDK uses `multiStream: true` to provide a smooth experince to all participants under all network conditions.

- `customCameraVideoTrack`: These parameter accepts a `MediaStream` object which can be used to pass custom resolution camera stream based on your use case.

  - These is an `OPTIONAL` parameter. By default, VideoSDK uses a `540p` or `720p` video resolution stream based on the user's device capabilities.

- `customMicrophoneAudioTrack`: These parameter accepts a `MediaStream` object which can be used to pass custom audio track based on your use case.

  - These is an `OPTIONAL` parameter. By default, VideoSDK uses a `speech_standard` audio tracks which suites most use cases.

- `mode`: These parameter accepts either `CONFERENCE` or `VIEWER` as its value.

  - When `CONFERENCE` mode is used it will allow participant to send and receive audio and video streams in real-time.

  - When `VIEWER` mode is used, the participant will not be able to receive or send nay audio and video streams. These participant will be able to perform operations like chat and raise hand which are happeing using PubSub. These mode is preferrable when using Interactive Live Streaming along side Realtime Video Conferencing.

  - These is an `OPTIONAL` parameter. By default, VideoSDK uses `CONFERENCE` mode.

###### Other Options for Meeting Provider

- `joinWithoutInteraction`: Thse is a `boolean` flag which if set to `true`, participant will directly join the meeting with requring to explicitly calling `join()`.

  - These is an `OPTIONAL` parameter. By default, it is set to `false` meaning, user has to manually call the `join()`

With all the configuration options explained, here is how you will be using the `MeetingProvider`.

```js
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";

const getToken = async () => {
  //highlight-next-line
  ...
};
const getMeetingId = async () => {
  //highlight-next-line
  ...
};

const App = () => {
  const [meetingId, setMeetingId] = useState();
  const [token, setToken] = useState();

  const fetchMeetingIdandToken = async () => {
    //We will fetch token and meetingId and update it in the state
    //highlight-start
    const newToken = await getToken();
    const newMeetingId = await getMeetingId(newToken);
    setToken(newToken);
    setMeetingId(newMeetingId);
    //highlight-end
  };

  useEffect(() => {
    //We will first load the token and generate a meeting id and pass it to the Meeting Provider
    //highlight-next-line
    fetchMeetingIdAndToken();
  }, []);

  // Init Meeting Provider
  return token && meetingId ? (
    <MeetingProvider
      config={{
        // Pass the generated meeting id
        //highlight-next-line
        meetingId: meetingId,
        name: "NAME HERE",
        micEnabled: true,
        webcamEnabled: true,
      }}
      // Pass the generated token
      //highlight-next-line
      token={token}
      joinWithoutInteraction={true}
    >
      <MeetingView />
    </MeetingProvider>
  ) : (
    <></>
  );
};

const MeetingView = () => {
  // Get Meeting object using useMeeting hook
  const meeting = useMeeting();

  return <>...</>;
};

```

### React Hooks Support

VideoSDK's React SDK provides Hooks which can be used to access the state of the meeting and listen to the events happening in the meeting.

#### useMeeting

`useMeeting` hook abstracts meeting class and is responsible to provide the states and events update happening in the meeting like participant joining and leaving a meeting. To know more about the properties and events accessible by these hook, go through [our API Reference](/react/api/sdk-reference/use-meeting/introduction).

#### useParticipant

`useParticipant` hook abstracts participant class and is responsible to provide the states and events update happening for a particular participant like webcam, mic streams status etc. To know more about the properties and events accessible by these hook, go through [our API Reference](/react/api/sdk-reference/use-participant/introduction).

#### usePubsub

`usePubsub` hook abstracts PubSub class and is responsible to provide a seperate communication channel for all the participants in the meeting. It can be used to develop features like Chat, Raise Hand etc. To know more about the usePubsub hook, take a look at detailed explanation of publish-subscribe mechanism.
