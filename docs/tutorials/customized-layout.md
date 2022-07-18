---
title: Customized Layout (Recording/ HLS / LiveStream)
sidebar_position: 1
sidebar_label: Customized Layout
hide_table_of_contents: true
---

- This feature allows you to start recording / HLS / Livestream with Customized Layout by providing `templateUrl`.

- `templateUrl` is a webpage URL of your hosted meeting.

:::note

- Your development `localhost` URL is not considered as a `templateUrl`.
- SSL must be enabled on your website.
- VideoSDK recorder only supports 4 participants on the screen due to resources limitations. your template url will be assigned 2.5 to 3 cpu and 2-3 GB of memory. your recording will be ternminated if those limits are reached.

:::

## How it works?

After providing `templateUrl`, now its Vidoe SDK server job is to pass that `templateUrl` in the Video SDK Composer, after the Video SDK Composer joins that meeting as a recorder with provided
`token` and `meetingId` then record / HLS / Livestream the whole meeting.

### Step 1 : Create Template URL

- As you can see in the image we are running a meeting on the hosted website `https://www.example.com`.

![template-url](/img/template-url.png)

- Now we will create `templateUrl` by passing valid `token` and `meetingId` as query params.

**NOTE** : You can pass N number of query parameters as per your requirements.

- `templateUrl` will look like this :

_`https://www.example.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.l0sImlhdCI6MTY0OTkyNjI1MCwiZXhwIjoxNjwNTMxMDUwf&meetingId=74v5-v21l-n1ey`_

### Step 2 : Pass `templateUrl` to Video SDK Server using API

- Now we will add this `templateUrl` to the body of the [StartRecording](/api-reference/realtime-communication/start-recording) API.

- Here, we took the [Recording](/api-reference/realtime-communication/start-recording) API example, if you want go with [Livestream](/api-reference/realtime-communication/start-livestream) or [Hls](/api-reference/realtime-communication/start-hlsStream) the same steps will be consider.

```js
const startRecording = () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: "$YOUR_TOKEN",
        "Content-Type": "application/json",
      },
      body: {
        roomId: "74v5-v21l-n1ey",
        // Add templateUrl here
        templateUrl:
          "https://www.example.com/?token=$YOUR_TOKEN&meetingId=74v5-v21l-n1ey",
      },
    };
    const url = `https://api.videosdk.live/v2/recordings/start`;
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}
```

After successfully calling API, the Video SDK server will concate `templateUrl` with recorder `participanId` and pass it to Video SDK Composer.

![template-url](/img/template_url_flow.png)

**templateUrl after concating will look like this :**

`https://www.example.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.l0sImlhdCI6MTY0OTkyNjI1MCwiZXhwIjoxNjwNTMxMDUwf&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID`

### Step 3 : Fetch Query Params

In this step, Video SDK Composer will receive `templateUrl`.

On the client-side, we have to implement fetch query params logic so that Video SDK Composer joins the meeting with provided params.

#### Sample Code in Javascript

```js
const url = new URLSearchParams(window.location.search);

const querParamsToken = url.get("token"); // get token from templateUrl queryParams
const querParamsMeetingId = url.get("meetingId"); // get meetingId from templateUrl queryParams
const querParamsParticipantId = url.get("participantId"); // get participantId from templateUrl queryParams
const participantId = querParamsParticipantId
  ? querParamsParticipantId
  : randomIdString();

// Meeting config
window.VideoSDK.config(querParamsToken ? querParamsToken : token);

// Meeting Init
meeting = window.VideoSDK.initMeeting({
  meetingId: querParamsMeetingId ? querParamsMeetingId : meetingId,
  participantId: participantId,
  name: name,
  micEnabled: false, // optional
  webcamEnabled: false, // optional
});
```

:::note

- During the Meeting init, you can't modify recorder `participantId`, because it will affect the Video SDK Composer to record / HLS / Livestream of the meeting.

- Do make sure these changes should be in the live environment, otherwise, Video SDK Composer will not able to record / HLS / Livestream of the meeting.

:::

- You can also follow this code sample for React JS.[videosdk-custom-recording-template-react-example](https://github.com/videosdk-live/videosdk-custom-recording-template-react-example)
