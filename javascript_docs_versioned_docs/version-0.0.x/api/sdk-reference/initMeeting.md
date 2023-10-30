---
sidebar_position: 2
sidebar_label: Initializing a Meeting
pagination_label: Initializing a Meeting
title: Initializing a Meeting
---

# Initiallizing a Meeting - Javascript

<div class="sdk-api-ref">

## config()

Before initializing the meeting, you will need to first provide `token`. Please refer this [documentation](/api-reference/realtime-communication/intro/) to generate a token.

```js
//meeting configuration using VideoSDK

VideoSDK.config("<your token>");
```

You can initialize the meeting using a factory method provided by the SDK called `initMeeting()`. By passing the parameters according to the need, it will generate a new `Meeting` class and then return the initiated meeting.

## initMeeting()

```js title="Javascript"
const meeting = VideoSDK.initMeeting({
  meetingId: "abc-1234-xyz",
  name: "John Doe",
  micEnabled: true,
  webcamEnabled: true,
  maxResolution: "hd",
  multiStream: true,
  mode: "CONFERENCE", // "CONFERENCE" || "VIEWER"
});
```

## Meeting Initialization Parameters

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

### participantId

- Unique Id of the participant. If not passed then SDK will create an Id by itself and will use that id.

  - type : `String`
  - `OPTIONAL`

---

### micEnabled

- Whether `mic` of the participant will be on while joining the meeting. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - defaultValue : true
  - `OPTIONAL`

---

### webcamEnabled

- Whether `webcam` of the participant will be on while joining the meeting. If it is set to `false`, then webcam of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - defaultValue : true
  - `OPTIONAL`

---

### maxResolution

- Sets the maximum upload resolution of that participant's webcam stream.

  - type: `String`
  - value: `sd` | `hd`
  - defaultValue: `sd`
  - `OPTIONAL`

---

### multiStream

- Sets wheather to send multi resoultion streams while publishing video.

  - type: `boolean`
  - defaultValue: true
  - `OPTIONAL`

---

### customCameraVideoTrack

- Set the initial custom video track using different encoding parameters, camera facing mode, and optimization mode.

  - type: `MediaStream`
  - `OPTIONAL`

---

### customMicrophoneAudioTrack

- Set the initial custom audio track using different encoding parameters and optimization mode.

  - type: `MediaStream`
  - `OPTIONAL`

---

### mode

- `OPTIONAL`

- There are 2 types of modes:

  - `CONFERENCE`: Both audio and video streams will be produced and consumed in this mode.
  - `VIEWER`: Audio and video streams will not be produced or consumed in this mode.

  - defaultValue : `CONFERENCE`

---

### metaData

- If you want to provide additional details about a user joining a meeting, such as their profile image, you can pass that information in this parameter.

  - type: `Object`
  - `OPTIONAL`

---

## Returns

### meeting

- After initializing the meeting, `initMeeting()` will return a new [`Meeting`](/javascript/api/sdk-reference/meeting-class/introduction) instance.

</div>
