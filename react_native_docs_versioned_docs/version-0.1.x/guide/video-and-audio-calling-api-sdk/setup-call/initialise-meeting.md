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
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: initialise-meeting
---

# Initialise Meeting - React Native

To configure a VideoSDK meeting you require two things, first the `token` which will be used for **Authentication** purpose and a `meetingId` which will be used to specify where a participant will join. Examine each of the steps closely.

### Generating Token

You can generate a `token` in two ways:

1. **`Temporary Token`** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate a temporary token from there.

2. **`Server`** : You can setup **JWT** in backend and make an API call to get the token from your server.

To learn more about **Authentication** and token in detail you can follow [this guide](../authentication-and-token).

```js
// With Temporary Token
const getToken = async () => {
  // Update the token here from the VideoSDK dashboard
  // highlight-next-line
  let token = "YOUR_TOKEN";
};

// Server
const getToken = async () => {
  // highlight-start
  const response = await fetch(`http://localhost:3000/get-token`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const { token } = await response.json();
  // highlight-end
  return token;
};
```

### Generating Meeting Id

With the token ready, you can now get the `meetingId` from the [VideoSDK's rooms API](/api-reference/realtime-communication/create-room).

```js
const getMeetingId = async (token) => {
  try {
    //Use VideoSDK rooms API endpoint to create a meetingId
    //highlight-next-line
    const VIDEOSDK_API_ENDPOINT = `https://api.videosdk.live/v2/rooms`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Pass the token in the headers
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

    //Return the meetingId which we got from the response of the api
    //highlight-next-line
    return meetingId;
  } catch (e) {
    console.log(e);
  }
};
```

### Initialization of Meeting

You can initialize the meeting using the `MeetingProvider` from the React SDK. The `MeetingProvider` is responsible for initializing the meeting with the provided configuration, which includes the `token`, `meetingId`, `participantId` and many more.

#### Meeting Provider

`MeetingProvider` is React's [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to changes in the meeting.

You have to pass the initialization configuration for the meeting and the token in the `MeetingProvider`.

:::tip
When conducting one-to-one meetings, it is recommended to set `multistream:false`.For more information on multistream, refer to the [multistream documentation](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#what-is-multistream).
:::

Take a deeper look at the available configuration options first.

```js
<MeetingProvider
  config={{
    meetingId: "<Id-of-meeting>",
    name: "<Name-of-participant>",
    micEnabled: "<Flag-to-enable-mic>",
    webcamEnabled: "<Flag-to-enable-webcam>",
    participantId: "Id-of-participant", // optional, default: SDK will generate
    multistream: true,
  }}
  token={"token"}
  joinWithoutUserInteraction // Boolean
></MeetingProvider>
```


- **`meetingId`** :

  - This is a unique identifier that allows participants to join a specific meeting or room.
  - It will be in the format of `xxx-yyy-zzz` and will be generated using the [VideoSDK's Room API](/api-reference/realtime-communication/create-room).

- **`name`**:

  - This represents the name of the participant in the meeting.
  - It will accept `String` type value.

- **`micEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's microphone will be automatically enabled when they join a meeting.

- **`webcamEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's webcam will be automatically enabled when they join a meeting.

- **`metaData`**:

  - If you want to provide additional details about a user joining a meeting, such as their profile image, you can pass that information in this parameter.
  - It has to be of `Object` type.
  - This is an `OPTIONAL` parameter.

- **`defaultCamera`**:

  - This is an `OPTIONAL` parameter, It sets the initial camera configuration.
  - It accepts two distinct values : `front` or `back`.
  - By default, it's value is set to `front`.

- **`participantId`**:

  - This is a unique identifier for the participant's inside the meeting.

    - It can be used to specify the **unique identifier** which can be linked with **your own database** service.
    - It has to be of `String` type.
    - This is an `OPTIONAL` parameter. By default VideoSDK will generate unique id for each participant.

- **`multistream`**:

  - This is a `boolean` flag, indicating whether the stream should send multiple resolution layers or a single resolution layer.

:::caution
You must ensure that the `participantId` is not repeated in the same meeting or room. This will enable VideoSDK to eliminate any participant associated with that `participantId`.
:::

###### Other Options for Meeting Provider

- **`joinWithoutUserInteraction`**:

  - This is a `boolean` flag, when set to `true`, it allows a participant to join a meeting directly without explicitly calling the `join()` function.

  - This is an `OPTIONAL` parameter. By default, it is set to `false` meaning, user has to manually call the `join()` function

To know more about other properties, you can follow [our API Reference](/react/api/sdk-reference/meeting-provider).

With all the configuration options explained, here is how you will use the `MeetingProvider`.

```js
// importing
import { MeetingProvider, useMeeting } from "@videosdk.live/react-native-sdk";

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
    //Fetch the token and meetingId and update it in the state
    //highlight-start
    const newToken = await getToken();
    const newMeetingId = await getMeetingId(newToken);
    setToken(newToken);
    setMeetingId(newMeetingId);
    //highlight-end
  };

  useEffect(() => {
    //Load the token and generate a meeting id and pass it to the Meeting Provider
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
  console.log("Meeting Obj",meeting);

  return <>...</>;
};

```

### React Hooks Support

VideoSDK's React SDK provides hooks which can be used to access the state of the meeting and listen to the events happening in the meeting.

:::caution
All the hooks mentioned below are accessible within the `MeetingProvider` only.
:::

#### useMeeting

The `useMeeting` hook abstracts the meeting class and is responsible for providing the state and event updates happening in the meeting like participant joining and leaving a meeting. To know more about the properties and events accessible by this hook, go through [our API Reference](/react-native/api/sdk-reference/use-meeting/introduction).

#### useParticipant

The `useParticipant` hook abstracts the participant class and is responsible for providing the state and event updates happening for a particular participant like webcam, mic stream status etc. To know more about the properties and events accessible by this hook, go through [our API Reference](/react-native/api/sdk-reference/use-participant/introduction).

#### usePubsub

The `usePubsub` hook abstracts the PubSub class and is responsible for providing a separate communication channel for all the participants in the meeting. It can be used to develop features like Chat, Raise Hand etc. To know more about the usePubsub hook, take a look at detailed explanation of[publish-subscribe mechanism](/react-native/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

## API Reference

The API references for all the methods utilised in this guide are provided below.

- [useMeeting](/react-native/api/sdk-reference/use-meeting/introduction)
- [useParticipant](/react-native/api/sdk-reference/use-participant/introduction)
- [usePubsub](/react-native/api/sdk-reference/use-pubsub)
- [MeetingProvider](/react-native/api/sdk-reference/meeting-provider)
