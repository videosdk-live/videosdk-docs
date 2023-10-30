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

# Initialise Meeting

To configure a VideoSDK meeting you require two things, first the `token` which will be used for **Authentication** purpose and a `meetingId` which will be used to specify where a participant will join. Let's see each of the steps closely.

### Generating Token

You can generate a `token` in two ways:

1. **`Temporary Token`** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate the temporary token from there.

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

We can initialize the meeting using the `initMeeting` method of the `VideoSDK` class. The `initMeeting` is responsible for initializing the meeting with the provided configuration, which includes the `meetingId`, `participantId` and many more.

Let's take a deeper look at the available configuration options first.

```js
VideoSDK.config(token);

const meeting = VideoSDK.initMeeting({
  meetingId: "<Id-of-meeting>",
  name: "<Name-of-participant>",
  micEnabled: "<Flag-to-enable-mic>",
  webcamEnabled: "<Flag-to-enable-webcam>",
  participantId: "Id-of-participant", // optional, default: SDK will generate
});
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

- **`metaData`**:

  - If you want to provide additional details about a user joining a meeting, such as their profile image, you can pass that information in this parameter.
  - It has to be of `Object` type.
  - This is an `OPTIONAL` parameter.

- **`participantId`**:

  - This will be the unique identifier for the participant inside the meeting.

    - It can be used to specify the **unique identifier** which can be linked with **your own database** service.
    - It has to be of `String` type.
    - This is an `OPTIONAL` parameter. By default VideoSDK will generate unique id for each participant.

:::caution
You must ensure that the `participantId` is not repeated in the same meeting or room, It will enable VideoSDK to eliminate any participant respect to that `participantId`.
:::

To know more about other properties, you can follow [our API Reference](/javascript/api/sdk-reference/initMeeting).

```js
import { VideoSDK } from "@videosdk.live/js-sdk";

let meeting;

const getToken = async () => {
  //highlight-next-line
  ...
};

const getMeetingId = async (token) => {
  //highlight-next-line
  ...
};

async function startMeeting() {
  const token = await getToken();
  const meetingId = await getMeetingId(token);

  // Configure authentication token
  VideoSDK.config(token);

  // Initialise meeting
  meeting = VideoSDK.initMeeting({
    meetingId: meetingId,
    name: "YOUR_NAME",
    micEnabled: true,
    webcamEnabled: true,
  });
}
```

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [Meeting Class](/javascript/api/sdk-reference/meeting-class/introduction)
