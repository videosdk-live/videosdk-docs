---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](../initMeeting) it returns a new instance of [Meeting](./introduction). However by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`onMeetingJoined`](./events#onmeetingjoined) event, when successfully joined.
- Remote Participant will receive a [`addParticipant`] event with the newly joined [`Participant`](../participant-class/introduction) object from the event callback.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`onMeetingLeft`](./events#onmeetingleft) event.
- All remote participants will receive a [`onParticipantLeft`](./events#onparticipantleft) event with `participantId`.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](./properties#participants) including [localParticipant](./properties#localparticipant) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](./properties#participants) and [localParticipant](./properties#localparticipant), will be emitted [`closeRoom`] event.

#### Returns

- _`void`_

---

### enableWebcam()

- It is used to enable self camera.
- [`onStreamEnabled`](../participant-class/events#onstreamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event callback, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to enable self camera.
- [`onStreamDisabled`](../participant-class/events#onstreamdisabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event callback, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- [`onStreamEnabled`](../participant-class/events#onstreamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event callback, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- [`onStreamDisabled`](../participant-class/events#onstreamdisabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event callback, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### startRecording()

- It is used to start meeting recording.
- All [participants](./properties#participants) and [localParticipant](./properties#localparticipant), will receive [`onRecordingStarted`](./events#onrecordingstarted) event.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

#### Parameters

- **webhookUrl**: String

#### Returns

- _`void`_

#### Example

```js
let webhookUrl = "https://webhook.your-api-server.com"

startRecording(webhookUrl: webhookUrl!)
```

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](./properties#participants) and [localParticipant](./properties#localparticipant), will receive [`onRecordingStopped`](./events#onrecordingstopped) event.

#### Returns

- _`void`_

#### Example

```js
stopRecording()
```

---

### startLivestream()

- It is used to start meeting livestreaming.
- You will be able to start live stream meetings to other platforms such as Youtube, Facebook, etc. that support `RTMP` streaming.
- All [participants](./properties#participants) and [localParticipant](./properties#localparticipant), will receive [`onLivestreamStarted`](./events#onlivestreamstarted) event.

#### Parameters

- **outputs**: `[LivestreamOutput]`

#### Returns

- _`void`_

---

#### Example

```js

startLivestream(outputs: outputs)
```

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](./properties#participants) and [localParticipant](./properties#localparticipant), will receive [`onLivestreamStopped`](./events#onlivestreamstopped) event.

#### Returns

- _`void`_

#### Example

```js
stopLivestream();
```

---

### startHLS()

- `startHLS()` will start HLS streaming of your meeting.

- You will be able to start HLS and watch the live stream of meeting over HLS.

- `mode` is used to either start hls streaming of video-and-audio both or only audio. And by default it will be video-and-audio.

- `quality` is only applicable to video-and-audio.

#### Parameters

- **config**:
  - **layout**:
    - **type**: _.GRID_ | _.SPOTLIGHT_ | _.SIDEBAR_
    - **priority**: _.SPEAKER_ | _.PIN_
    - **gridSize**: Number _`max 25`_
  - **theme**: _.DARK_ | _.LIGHT_ | _.DEFAULT_
  - **mode**: _.video_and_audio_ | _.audio_
  - **quality**: _.low_ | _.med_ | _.high_

#### Events associated with `startHLS()`:

- Every participant will receive a callback of state change of HLS [`onHlsStateChanged`](./events#onHlsStateChanged)

#### Example

```js
var config: HLSConfig = HLSConfig(
  layout: HLSLayout(
    type: .GRID, 
    priority: .SPEAKER, 
    gridSize: 4
  ), 
  theme: .DARK, 
  mode: .video_and_audio, 
  quality: .high, 
  orientation: .portrait
)

startHLS(config: config)
```

---

### stopHLS()

- `stopHLS()` is used to stop the HLS streaming.

#### Events associated with `stopHLS()`:

- Every participant will receive a callback of state change of HLS [`onHlsStateChanged`](./events#onHlsStateChanged)

#### Example

```js
stopHLS()
```

</div>
