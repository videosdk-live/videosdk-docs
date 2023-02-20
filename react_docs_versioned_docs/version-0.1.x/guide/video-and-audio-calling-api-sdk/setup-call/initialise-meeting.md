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

# Initialise Meeting

To configure a VideoSDK meeting you require two things, first the `token` which will be used for **Authentication** purpose and a `meetingId` which will be used to specify where a participant will join. Let's see each of the steps closely.

### Generating Token

You can generate a `token` in two ways:

1. **`Serverless`** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate the token from there.

2. **`Server`** : You can setup **JWT** in backend and make an API call to get the token from your server.

You can [visit here](../authentication-and-token) to learn more about **Authentication** and token in detail.

```js
// Serverless
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

We can initialize the meeting using the `MeetingProvider` from the React SDK. The `MeetingProvider` is responsible for initializing the meeting with the provided configuration, which includes the `token`, `meetingId`, `participantId` and many more.

#### Meeting Provider

`MeetingProvider` is React [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes.

We will be passing the intialization configuration for the meeting and the token in the `MeetingProvider`.

Let's take a deeper look at the available configuration options first.

```js
<MeetingProvider
  config={{
    meetingId: "<Id-of-meeting>",
    name: "<Name-of-participant>",
    micEnabled: "<Flag-to-enable-mic>",
    webcamEnabled: "<Flag-to-enable-webcam>",
    participantId: "Id-of-participant", // optional, default: SDK will generate
  }}
  token={"token"}
  joinWithoutUserInteraction // Boolean
></MeetingProvider>
```

- **`meetingId`** :

  - meetingId is unique identifiers that allow participants to join a specific meeting or room.
  - It will be in the format of `xxx-yyy-zzz` and will be generated using the [VideoSDK's Room API](/api-reference/realtime-communication/create-room).

- **`name`**:

  - This will represent the name of the participant in the meeting.
  - It will accept `String`type value.

- **`micEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's microphone will be automatically enabled when they join a meeting.

- **`webcamEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's webcam will be automatically enabled when they join a meeting.

- **`participantId`**:

  - This will be the unique identifer for the participant inside the meeting.

    - It can be used to specify the **unique identifer** which can be linked with **your own database** service.
    - It has to be of `String` type.
    - This is an `OPTIONAL` parameter. By defualt VideoSDK will generate unique id for each participant.

:::caution
You can ensure that the `participantId` is not repeated in the same meeting or room, which will prevent VideoSDK from removing any one of the participants.
:::

###### Other Options for Meeting Provider

- **`joinWithoutInteraction`**:

  - This is a `boolean` flag, when set to `true`, allows a participant to join a meeting directly without explicitly calling the `join()` function.

  - This is an `OPTIONAL` parameter. By default, it is set to `false` meaning, user has to manually call the `join()`

To know more about other properties, you can follow [our API Reference](/react/api/sdk-reference/meeting-provider).

With all the configuration options explained, here is how you will be using the `MeetingProvider`.

```js
// importing
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
  console.log("Meeting Obj",meeting);

  return <>...</>;
};

```

### React Hooks Support

VideoSDK's React SDK provides Hooks which can be used to access the state of the meeting and listen to the events happening in the meeting.

:::caution
All the hooks mentioned below are accesible within the `MeetingProvider` only.
:::

#### useMeeting

`useMeeting` hook abstracts meeting class and is responsible to provide the states and events update happening in the meeting like participant joining and leaving a meeting. To know more about the properties and events accessible by these hook, go through [our API Reference](/react/api/sdk-reference/use-meeting/introduction).

#### useParticipant

`useParticipant` hook abstracts participant class and is responsible to provide the states and events update happening for a particular participant like webcam, mic streams status etc. To know more about the properties and events accessible by these hook, go through [our API Reference](/react/api/sdk-reference/use-participant/introduction).

#### usePubsub

`usePubsub` hook abstracts PubSub class and is responsible to provide a seperate communication channel for all the participants in the meeting. It can be used to develop features like Chat, Raise Hand etc. To know more about the usePubsub hook, take a look at detailed explanation of publish-subscribe mechanism.
