---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](./) it returns a new instance of [Meeting](./). However by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`meeting-joined`](./) event, when successfully joined.
- Remote Participant will receive a [`participant-joined`](./) event with the newly joined [`Participant`](./) object from the event callback.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`entry-requested`](./).

- After the decision from the remote participant, an event will be emitted to participant called [`entry-responded`](./). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the parmission `allow_join`, then the participant will join the meeting derectly after calling `join()`.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`meeting-left`](./) event.
- All remote participants will receive a [`participant-left`](./) event with `participantId` string from the event callback.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](./) including [localParticipant](./) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](./) and [localParticipant](./), will be emitted [`meeting-left`](./) event.

#### Returns

- _`void`_

---

### enableWebcam()

- It is used to enable self camera.
- `stream-enabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to enable self camera.
- `stream-disabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- `stream-enabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- `stream-disabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### enableScreenShare()

- it is used to enable screen-sharing.
- `stream-enabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### disableScreenShare()

- It is used to disable screen-sharing.
- `stream-disabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### startRecording()

- It is used to start meeting recording.
- All [participants](./) and [localParticipant](./), will receive `recording-started` event.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

- `awsDirPath` will be the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](https://zfrmz.in/RVlFLFiturVJ7Q97fr23)

#### Parameters

- **webhookUrl**: String
- **awsDirPath**: String
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_

#### Returns

- _`void`_

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

startRecording(webhookUrl, awsDirPath, config);
```

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](./) and [localParticipant](./), will receive `recording-stopped` event.

#### Returns

- _`void`_

#### Example

```javascript
stopRecording();
```

---

### startLivestream()

- It is used to start meeting livestreaming.
- You will be able to start livestream the meeting to another platforms such as Youtube, Facebook, etc. that supports `rtmp` streaming.
- All [participants](./) and [localParticipant](./), will receive `livestream-started` event.

#### Parameters

- **outputs**: Array<{ **url**: String, **streamKey**: String }>
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_

#### Returns

- _`void`_

---

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

startLivestream(outputs, config);
```

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](./) and [localParticipant](./), will receive `livestream-stopped` event.

#### Returns

- _`void`_

#### Example

```javascript
stopLivestream();
```

---

### startHls()

- It is used to start meeting HLS.
- You will be able to start HLS and watch the live stream of meeting over HLS.
- All [participants](./) and [localParticipant](./), will receive `hls-started` event.

#### Parameters

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_

#### Returns

- _`void`_

#### Example

```javascript
const config = {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
};

startHls(config);
```

---

### stopHls()

- It is used to stop meeting HLS.
- All [participants](./) and [localParticipant](./), will receive `hls-stopped` event.

#### Returns

- _`void`_

#### Example

```javascript
stopHls();
```

---

### getWebcams()

- It will return all camera devices connected.

#### Returns

- Promise<{ **deviceId**: string; **lable**: string }[]>

#### Example

```javascript
const handleGetWebcams = async () => {
  const webcams = await getWebcams();

  console.log(webcams);
};

handleGetWebcams();
```

---

### changeWebcam()

- It is used to change the webcam device.
- If multiple webcam devices are connected, then by using `changeWebcam()` one can change the mic device.

#### Parameters

- **deviceId**: String

#### Returns

- _`void`_

#### Example

```javascript
changeWebcam(deviceId);
```

---

### setWebcamQuality()

- It is used to set the webcam quality.
- By using `setWebcamQuality()`, uploading of the webcam stream quality of [localParticipant](./) can be changed from `low` to `high` or vice versa.

#### Parameters

- **quality**: _"low"_ | _"med"_ | _"high"_

#### Returns

- _`void`_

#### Example

```javascript
setWebcamQuality("high");
```

---

### getMics()

- It will return all mic devices connected.

#### Returns

- Promise<{ **deviceId**: string; **lable**: string }[]>

#### Example

```javascript
const handleGetMics = async () => {
  const mics = await getMics();

  console.log(mics);
};

handleGetMics();
```

---

### changeMic()

- It is used to change the mic device.
- If multiple mic devices are connected, then by using `changeMic()` one can change the mic device.

#### Parameters

- **deviceId**: String

#### Returns

- _`void`_

#### Example

```javascript
changeMic(deviceId);
```

---

### on()

---

### off()

</div>
