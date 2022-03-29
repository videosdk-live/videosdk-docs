---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](../initMeeting.md) it returns a new instance of [Meeting](../meeting-class/introduction.md). However, by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`meeting-joined`](../meeting-class/events.md#meeting-joined) event when successfully joined.
- Remote Participant will receive a [`participant-joined`](../meeting-class/events.md#participant-joined) event with the newly joined [`Participant`](../participant-class/introduction.md) object from the event callback.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`entry-requested`](../meeting-class/events.md#entry-requested).

- After the decision from the remote participant, an event will be emitted to the participant called [`entry-responded`](../meeting-class/events.md#entry-responded). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the parmission `allow_join`, then the participant will join the meeting derectly after calling `join()`.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`meeting-left`](../meeting-class/events.md#meeting-left) event.
- All remote participants will receive a [`participant-left`](../meeting-class/events.md#participant-left) event with `participantId` string from the event callback.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](../participant-class/introduction.md) including [localParticipant](../participant-class/introduction.md) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will be emitted [`meeting-left`](../meeting-class/events.md#meeting-left) event.

#### Returns

- _`void`_

---

### enableWebcam()

- It is used to enable self camera.
- [`stream-enabled`](../participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to enable self camera.
- [`stream-disabled`](../participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- [`stream-enabled`](../participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- [`stream-disabled`](../participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### enableScreenShare()

- it is used to enable screen-sharing.
- [`stream-enabled`](../participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### disableScreenShare()

- It is used to disable screen-sharing.
- [`stream-disabled`](../participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../stream-class/introduction.md) object from the event callback, inside that [participant](../participant-class/introduction.md) object.

#### Returns

- _`void`_

---

### startRecording()

- It is used to start meeting recording.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`recording-started`](./events.md#recording-started) event.

- `webhookUrl` will be triggered when the recording is completed and stored in the server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

- `awsDirPath` will be the path for your S3 bucket to which you want to store recordings. To allow us to store the recording in your S3 bucket, you will need to fill out this form by providing the required values. [VideoSDK AWS S3 Integration](https://zfrmz.in/RVlFLFiturVJ7Q97fr23)

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
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`recording-stopped`](./events.md#recording-stopped) event.

#### Returns

- _`void`_

---

### startLivestream()

- It is used to start meeting live streaming.
- You will be able to start live stream meetings to other platforms such as Youtube, Facebook, etc. that support `RTMP` streaming.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md) will receive the [`livestream-started`](./events.md#livestream-started) event.

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
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`livestream-stopped`](./events.md#livestream-stopped) event.

#### Returns

- _`void`_

---

### startHls()

- It is used to start meeting HLS.
- You will be able to start HLS and watch the live stream of meeting over HLS.
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive the [`hls-started`](./events.md#hls-started) event.

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
- All [participants](../participant-class/introduction.md) and [localParticipant](../participant-class/introduction.md), will receive [`hls-stopped`](./events.md#hls-stopped) event.

#### Returns

- _`void`_

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

---

### setWebcamQuality()

- It is used to set the webcam quality.
- By using `setWebcamQuality()`, uploading of the webcam stream quality of [localParticipant](../participant-class/introduction.md) can be changed from `low` to `high` or vice versa.

#### Parameters

- **quality**: _"low"_ | _"med"_ | _"high"_

#### Returns

- _`void`_

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

---

### connectTo()

- This method is used for establishing connection to another meeting

#### Parameters

- meetingId

  - type : `String`

  - meetingId of another meeting

- payload

  - type : `String`

  - Any arbitrary payload data for the connection

#### Events associated with `connectTo()`:

- # `connection-open` event of meeting class is triggered whenever `meeting.connectTo()` being called for both local and remote participants.
- [`connection-open`](./events.md#connection-open) event of meeting class is triggered whenever `meeting.connectTo()` being called for both local and remote participants.

#### Returns

- `void`

#### Example

```jsx
//create connection to meeting B
meeting.connectTo({ meetingId: "meeting_B_ID", payload: "arbitraty text" });

//  This event will be emitted to participants of both meetings, Meeting A & Meeting B
meeting.on("connection-open", (connection) => {
  console.log("Connection", connection);
});
```

---

### on()

#### Parameters

- eventType : [`event of meeting class`](./events.md)
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for meeting-any-event
meeting.on("meeting-any-event", listener);
```

---

### off()

#### Parameters

- eventType : [`event of meeting class`](./events.md)
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for meeting-any-event
meeting.off("meeting-any-event", listener);
```

</div>
