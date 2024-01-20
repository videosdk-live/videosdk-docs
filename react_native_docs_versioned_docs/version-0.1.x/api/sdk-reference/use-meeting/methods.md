---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Methods returned by useMeeting Hook
title: Methods returned by useMeeting Hook
---

# Methods returned by useMeeting Hook - React Native

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- During initialization using the [`<MeetingProvider>`](../meeting-provider), if `joinWithoutInteraction` is set to `true`, participant will automatically join the meeting. If it is `false` explicity call for `join()` should be made.

#### Events associated with `join()`:

- Local Participant will receive a [`onMeetingJoined`](./events#onmeetingjoined) event, when successfully joined.
- Remote Participant will receive a [`onParticipantJoined`](./events#onparticipantjoined) event with the newly joined [`Participant`](../use-participant/introduction.md) object from the event callback.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`onEntryRequested`](./events#onentryrequested).

- After the decision from the remote participant, an event will be emitted to participant called [`onEntryResponded`](./events#onentryresponded). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the permission `allow_join`, then the participant will join the meeting derectly after calling `join()`.

---

### leave()

- `leave()` is used to leave a meeting for local participant only.

#### Events associated with `leave()`:

- Local participant will receive a [`onMeetingLeft`](./events#onmeetingleft) event.
- All remote participants will receive a [`onParticipantLeft`](./events#onparticipantleft) event with [`Participant`](../use-participant/introduction.md) object from the event callback.

---

### end()

- `end()` is used to end a meeting for all participants.

#### Events associated with `end()`:

- All remote participants and local participant will receive a [`onParticipantLeft`](./events#onparticipantleft) event with [`Participant`](../use-participant/introduction.md) object from the event callback.

---

### unmuteMic()

- `unmuteMic()` is used to enable mic of the local participant.

#### Events associated with `unmuteMic()`:

- Every Participant will receive a callback on [`onStreamEnabled()`](../use-participant/events#onstreamenabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object.

---

### muteMic()

- `muteMic()` is used to disable mic of the local participant.

#### Events associated with `muteMic()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](../use-participant/events#onstreamdisabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object.

---

### toggleMic()

- `toggleMic()` is used to toogle mic of the local participant.

#### Events associated with `toggleMic()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](../use-participant/events#onstreamdisabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object if mic is turned off.

- Every Participant will receive a callback on [`onStreamEnabled()`](../use-participant/events#onstreamenabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object if mic is turned on.

---

### enableWebcam()

- `enableWebcam()` is used to enable webcam of the local participant.

#### Events associated with `enableWebcam()`:

- Every Participant will receive a callback on [`onStreamEnabled()`](../use-participant/events#onstreamenabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object.

---

### disableWebcam()

- `disableWebcam()` is used to disable webcam of the local participant.

#### Events associated with `disableWebcam()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](../use-participant/events#onstreamdisabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object.

---

### toggleWebcam()

- `toggleWebcam()` is used to toogle webcam of the local participant.

#### Events associated with `toggleWebcam()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](../use-participant/events#onstreamdisabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object if webcam is turned off.

- Every Participant will receive a callback on [`onStreamEnabled()`](../use-participant/events#onstreamenabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object if webcam is turned on.

---

### enableScreenShare()

- `enableScreenShare()` is used to enable screen share of the local participant.

#### Events associated with `enableScreenShare()`:

- Every Participant will receive a callback on [`onStreamEnabled()`](../use-participant/events#onstreamenabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object.

- [`onPresenterChanged()`](./events#onpresenterchanged) will also receive a callback with the `presenterId`.

---

### disableScreenShare()

- `disableScreenShare()` is used to disable screen share of the local participant.

#### Events associated with `disableScreenShare()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](../use-participant/events#onstreamdisabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object.

- [`onPresenterChanged()`](./events#onpresenterchanged) will also receive a callback with the `presenterId`.

---

### toggleScreenShare()

- `toggleScreenShare()` is used to toogle screen share of the local participant.

#### Events associated with `toggleScreenShare()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](../use-participant/events#onstreamdisabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object if screen share is turned off.

- Every Participant will receive a callback on [`onStreamEnabled()`](../use-participant/events#onstreamenabled) of the [`useParticipant()`](../use-participant/introduction.md) hook with `Stream` object if screen share is turned on.

:::caution

For React Native iOS Screen Share feature, you need to follow this guide [React Native iOS Screen Share](/react-native/guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share)

:::

---

### startRecording()

- `startRecording` is used to start meeting recording.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

- `awsDirPath` will be the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](https://zfrmz.in/RVlFLFiturVJ7Q97fr23)

#### Parameters

- **webhookUrl**: String
- **awsDirPath**: String
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 4`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_
  - **orientation**: _"landscape"_ | _"portrait"_

#### Events associated with `startRecording()`:

- Every participant will receive a callback on [`onRecordingStarted()`](./events#onrecordingstarted)

#### Example

```javascript
const webhookUrl = "https://webhook.your-api-server.com";

const awsDirPath = "/meeting-recordings/";

const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
};

const { startRecording } = useMeeting();

startRecording(webhookUrl, awsDirPath, config);
```

---

### stopRecording()

- `stopRecording()` is used to stop the meeting recording.

#### Events associated with `stopRecording()`:

- Every participant will receive a callback on [`onRecordingStopped()`](./events#onrecordingstopped)

---

### startLiveStream()

- `startLiveStream()` is used to start meeting livestreaming.

- You will be able to start live stream meetings to other platforms such as Youtube, Facebook, etc. that support `RTMP` streaming.

#### Parameters

- **outputs**: Array<{ **url**: String, **streamKey**: String }>
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_

#### Events associated with `startLiveStream()`:

- Every participant will receive a callback on [`onLiveStreamStarted()`](./events.md#onlivestreamstarted)

#### Example

```javascript
const outputs = [
  {
    url: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "<STREAM_KEY>",
  },
  {
    url: "rtmps://",
    streamKey: "<STREAM_KEY>",
  },
];

const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
};

const { startLiveStream } = useMeeting();

startLivestream(outputs, config);
```

---

### stopLiveStream()

- `stopLiveStream()` is used to stop the live streaming to social media.

#### Events associated with `stopLiveStream()`:

- Every participant will receive a callback on [`onLiveStreamStopped()`](./events#onlivestreamstopped)

---

### startHls()

- `startHls()` will start HLS streaming of your meeting.

- You will be able to start HLS and watch the live stream of meeting over HLS.

#### Parameters

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_

#### Events associated with `startHls()`:

- Every participant will receive a callback on [`onHlsStarted()`](./events#onhlsstarted)

#### Example

```javascript
const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
};

const { startHls } = useMeeting();

startHls(config);
```

---

### stopHls()

- `stopHls()` is used to stop the HLS streaming.

#### Events associated with `stopHls()`:

- Every participant will receive a callback on [`onHlsStopped()`](./events#onhlsstopped)

---

### getMics()

- `getMics()` will return all mic devices connected.

#### Returns

- Promise<{ **deviceId**: string; **lable**: string }[]>

#### Example

```javascript
const { getMics } = useMeeting();

const handleGetMics = async () => {
  const mics = await getMics();

  console.log(mics);
};

handleGetMics();
```

---

### getWebcams()

- `getWebcams()` will return all camera devices connected.

#### Returns

- Promise<{ **deviceId**: string; **lable**: string }[]>

#### Example

```javascript
const { getWebcams } = useMeeting();

const handleGetWebcams = async () => {
  const webcams = await getWebcams();

  console.log(webcams);
};

handleGetWebcams();
```

---

### changeMic()

- It is used to change the mic device.
- If multiple mic devices are connected, by using `changeMic()` one can change the mic device.

#### Parameters

- **deviceId**: String

---

### changeWebcam()

- `changeWebcam()` is used to change the webcam device.
- If multiple webcam devices are connected, by using `changeWebcam()` one can change the camera device.

#### Parameters

- **deviceId**: String

---

### startVideo()

- `startVideo()` is used to start playing external video in th meeting.

#### Parameters

- **link**: String

#### Events associated with `startVideo()`:

- [`onVideoStateChanged()`](./events#onvideostatechanged) event will trigger to all the participant with `status` as `started`

---

### stopVideo()

- `stopVideo()` stops playing external video in th meeting.

#### Events associated with `stopVideo()`:

- [`onVideoStateChanged()`](./events#onvideostatechanged) event will trigger to all the participant with `status` as `stopped`

---

### pauseVideo()

- `pauseVideo()` pauses playing the video at the provided time in the input parameter `currentTime`.

#### Parameters

- **currentTime** : Number

#### Events associated with `pauseVideo()`:

- [`onVideoStateChanged()`](./events#onvideostatechanged) event will trigger to all the participant with `status` as `paused`

---

### resumeVideo()

- `resumeVideo()` resumes playing external video in th meeting.

#### Events associated with `resumeVideo()`:

- [`onVideoStateChanged()`](./events#onvideostatechanged) event will trigger to all the participant with `status` as `resumed`

---

### seekVideo()

- `seekVideo()` seeks playing the video upto the provided time in the input parameter `currentTime`.

#### Parameters

- **currentTime** : Number

#### Events associated with `seekVideo()`:

- [`onVideoSeeked()`](./events#onvideoseeked) event will trigger to all the participant with `currentTime`

---

<!-- ### connectTo()

- `connectTo()` is used to open a connection to the provided `meetingId` in the parameters.

#### Parameters

- **meetingId** : String
- **payload** : Object

#### Events associated with `connectTo()`:

- [`onConnectionOpen()`](./events#onconnectionopen) event will trigger to all the participant. -->

### changeMode()

- It is used to change the mode.
- You can toggle between the `CONFERENCE` and `VIEWER`mode .
  - `CONFERENCE`: Both audio and video streams will be produced and consumed in this mode.
  - `VIEWER`: Audio and video streams will not be produced or consumed in this mode.

#### Parameters

- **mode**: String

#### Returns

- _`void`_

</div>
