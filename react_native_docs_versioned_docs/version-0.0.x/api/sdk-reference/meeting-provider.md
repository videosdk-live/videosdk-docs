---
sidebar_position: 1
---

# Meeting Provider

Meeting Provider simplifies configuration of meeting with by wrapping up core logic with `react-context`.

Every Context object in `react-js` comes with a Provider React component that allows consuming components to subscribe to context changes. To know more about context provider follow <a href="https://reactjs.org/docs/context.html#contextprovider">official document</a>

## Meeting Provider

```js title="Meeting Provider"
<MeetingProvider
  config={{
    meetingId: "meeting-id",
    micEnabled: true,
    webcamEnabled: true,
    name: "Participant Name",
    notification: {
      title: "Code Sample",
      message: "Meeting is running.",
    },
    participantId: "xyz",
  }}
  token={"token"}
  joinWithoutUserInteraction // Boolean
></MeetingProvider>
```

## MeetingProvider Parameters

---

### meetingId

- Unique Id of the meeting where that participant will be joining.

  - type : `String`
  - `REQUIRED`

Please refer this [documentation](/api-reference/realtime-communication/create-room) to create a room.

---

### name

- Name of the participant who will be joining the meeting, this name will be displayed to other participants in the same meeting.

  - type : String
  - `REQUIRED`

---

### micEnabled

- Whether `mic` of the participant will be on while joining the meeting. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

---

### webcamEnabled

- Whether `webcam` of the participant will be on while joining the meeting. If it is set to `false`, then webcam of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

---

### token

- The auth token generated from your server.

  - type: `String`
  - `REQUIRED`

Please refer this [documentation](/api-reference/realtime-communication/intro) to generate a token.

---

### joinWithoutInteraction

- If `joinWithoutInteraction` is `true`, participant will directly join the meeting with requring to explicitly calling `join()`.

- If `joinWithoutInteraction` is `false`, participant has to call `join()` to join the meeting.

  - type: `Boolean`
  - default: false
  - `OPTIONAL`

---

### notification

- It contains the title and description for the notficiation that will be shown to user when they are in meeting.

  - type: `Object`
  - `OPTIONAL`

  - **title** : String

    - Represent the title fo the notification.

  - **message** : String
    - Represent the Decription / message fo the notification.

---

### participantId

- You can specify your custom participantId here.

  - type: `String`
  - `OPTIONAL`

---

### multiStream

- Sets wheather to send multi resoultion streams while publishing video.

  - type: `boolean`
  - defaultValue: `true`
  - `OPTIONAL`

### customCameraVideoTrack

- Set the initial custom video track using different encoding parameters, camera facing mode, and optimization mode.

  - type: `MediaStream`
  - `OPTIONAL`

### customMicrophoneAudioTrack

- Set the initial custom audio track using different encoding parameters and optimization mode.

  - type: `MediaStream`
  - `OPTIONAL`
