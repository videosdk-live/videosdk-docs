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

#### Parameters

- `null`

#### Returns

- `null`

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`meeting-left`](./) event.
- All remote participants will receive a [`participant-left`](./) event with `participantId` string from the event callback.

#### Parameters

- `null`

#### Returns

- `null`

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](./) including [localParticipant](./) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](./) and [localParticipant](./), will be emitted [`meeting-left`](./) event.

#### Parameters

- `null`

#### Returns

- `null`

---

### unmuteMic()

- It is used to enable self microphone.
- `stream-enabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Parameters

- `null`

#### Returns

- `null`

---

### muteMic()

- It is used to disable self microphone.
- `stream-disabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Parameters

- `null`

#### Returns

- `null`

---

### enableWebcam()

- It is used to enable self camera.
- `stream-enabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Parameters

- `null`

#### Returns

- `null`

---

### disableWebcam()

- It is used to enable self camera.
- `stream-disabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Parameters

- `null`

#### Returns

- `null`

---

### enableScreenShare()

- it is used to enable screen-sharing.
- `stream-enabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Parameters

- `null`

#### Returns

- `null`

---

### disableScreenShare()

- It is used to disable screen-sharing.
- `stream-disabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Parameters

- `null`

#### Returns

- `null`

---

### startRecording()

- It is used to start meeting recording.
- All [participants](./) and [localParticipant](./), will receive `recording-started` event.

#### Parameters

- `webhookUrl`
  - It will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).
  - type: `String`
  - default: `null`
  - `OPTIONAL`
- `awsDirPath`
  - It will be the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](https://zfrmz.in/RVlFLFiturVJ7Q97fr23)
  - type: `String`
  - default: `null`
  - `OPTIONAL`
- `config`
  - Configurations for meeting recording.
  - type: `Object`
  - values:
    - `layout`:
      - Configuration for the meeting recording layout.
      - type: `Object`
      - values:
        - `type`:
          - type: `String`
          - value: `GRID` | `SPOTLIGHT` | `SIDEBAR`
          - defaultValue: `SIDEBAR`
        - `priority`:
          - type: `String`
          - value: `SPEAKER` | `PIN`
          - defaultValue: `SPEAKER`
        - `gridSize`:
          - type: `Number`
          - value: `1 to 25`
          - defaultValue: 25
      - defaultValue:
        - `type`: `SIDEBAR`
        - `priority`: `SPEAKER`
        - `gridSize`: 25
  - `OPTIONAL`

#### Returns

- `null`

#### Example

```javascript
startRecording("https://webhook.your-api-server.com", "/meeting-recordings/", {
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
});
```

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](./) and [localParticipant](./), will receive `recording-stopped` event.

#### Parameters

- `null`

#### Returns

- `null`

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

- `outputs`
  - Outputs RTMP configuration where you want to start livestream your meeting.
  - type: `Array`
  - values: `Array<{ url, streamKey }>`
  - `REQUIRED`
- `config`
  - Configurations for meeting livestreaming.
  - type: `Object`
  - values:
    - `layout`:
      - Configuration for the meeting livestreaming layout.
      - type: `Object`
      - values:
        - `type`:
          - type: `String`
          - value: `GRID` | `SPOTLIGHT` | `SIDEBAR`
          - defaultValue: `SIDEBAR`
        - `priority`:
          - type: `String`
          - value: `SPEAKER` | `PIN`
          - defaultValue: `SPEAKER`
        - `gridSize`:
          - type: `Number`
          - value: `1 to 25`
          - defaultValue: 25
      - defaultValue:
        - `type`: `SIDEBAR`
        - `priority`: `SPEAKER`
        - `gridSize`: 25
  - `OPTIONAL`

#### Returns

- `null`

---

#### Example

```javascript
startLivestream(
  [
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "<YOUR_STREAM_KEY>",
    },
    {
      url: "",
      streamKey: "",
    },
  ],
  {
    layout: {
      type: "SPOTLIGHT",
      priority: "PIN",
      gridSize: 9,
    },
  }
);
```

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](./) and [localParticipant](./), will receive `livestream-stopped` event.

#### Parameters

- `null`

#### Returns

- `null`

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

- `config`
  - Configurations for meeting livestreaming.
  - type: `Object`
  - values:
    - `layout`:
      - Configuration for the meeting livestreaming layout.
      - type: `Object`
      - values:
        - `type`:
          - type: `String`
          - value: `GRID` | `SPOTLIGHT` | `SIDEBAR`
          - defaultValue: `SIDEBAR`
        - `priority`:
          - type: `String`
          - value: `SPEAKER` | `PIN`
          - defaultValue: `SPEAKER`
        - `gridSize`:
          - type: `Number`
          - value: `1 to 25`
          - defaultValue: 25
      - defaultValue:
        - `type`: `SIDEBAR`
        - `priority`: `SPEAKER`
        - `gridSize`: 25
  - `OPTIONAL`

#### Returns

- `null`

#### Example

```javascript
startHls({
  layout: {
    type: "SPOTLIGHT",
    priority: "PIN",
    gridSize: 9,
  },
});
```

---

### stopHls()

- It is used to stop meeting HLS.
- All [participants](./) and [localParticipant](./), will receive `hls-stopped` event.

#### Parameters

- `null`

#### Returns

- `null`

#### Example

```javascript
stopHls();
```

---

### getMics()

---

### getWebcams()

---

### changeMic()

---

### changeWebcam()

- Return Type : `void`
- `changeWebcam` is used to change self camera.
- Local Participant and Remote Participant will receive `Events.streamEnabled` event with `stream` object and `Events.streamDisabled` event with `stream` object.

---

### setWebcamQuality()

---

### startWhiteboard()

---

### stopWhiteboard()

---

### startVideo()

- Return Type : `void`
- `startVideo()` triggers video-state-changed event with status "started"

---

### stopVideo()

---

### resumeVideo()

---

### pauseVideo()

---

### seekVideo()

---

### on()

---

### off()

</div>
