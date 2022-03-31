---
sidebar_position: 2
sidebar_label: Initializing a Meeting
pagination_label: Initializing a Meeting
title: Initializing a Meeting
---

<div class="api">

## config()

Before initializing the meeting, you will need to first provide `token`. Please refer this [documentation](/api-reference/realtime-communication/intro/) to generate a token.

```js
//meeting configuration using videoSDK

VideoSDK.config("<your token>");
```

You can initialize the meeting using a factory method provided by the SDK called `initMeeting()`. By passing the parameters according to the need, it will generate a new `Meeting` class and the initiated meeting will be returned.

## initMeeting()

```js title="Swift"
let meeting = VideoSDK.initMeeting(
  meetingId: "abc-1234-xyz",
  participantId: "JD", // optional
  participantName: "John Doe",
  micEnabled: true,
  webcamEnabled: true
);
```

## Meeting Initialization Parameters

---

### meetingId

- Unique Id of the meeting where that participant will be joining.

  - type : `String`
  - `REQUIRED`

Please refer this [documentation](/api-reference/realtime-communication/create-room) to create a room.

---

### participantId

- Unique Id of the participant. If not passed then SDK will create an Id by itself and will use that id.

  - type : `String`
  - `OPTIONAL`

---

### participantName

- Name of the participant who will be joining the meeting, this name will be displayed to other participants in the same meeting.

  - type : String
  - `REQUIRED`

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

## Returns

### meeting

- After initializing the meeting, `initMeeting()` will return a new [`Meeting`](/javascript/api/sdk-reference/meeting-class/introduction) instance.

</div>
