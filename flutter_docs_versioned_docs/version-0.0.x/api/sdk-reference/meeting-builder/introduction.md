---
sidebar_position: 2
sidebar_label: MeetingBuilder widget
pagination_label: MeetingBuilder widget
title: MeetingBuilder widget
---

<div class="sdk-api-ref">

MeetingBuilder is a widget provided by the SDK, which handles building a widget for the [`Meeting`](../meeting-class/introduction) instance initialized.

## MeetingBuilder()

```js
MeetingBuilder(
  meetingId: "<meeting-id>",
  token: "<token>",
  displayName: "<your-name>",
  participantId: "abcdefgh",
  micEnabled: true,
  webcamEnabled: true,
  maxResolution: "hd",
  notification: const NotificationInfo(
    title: "Video SDK",
    message: "Video SDK is sharing screen in the meeting",
    icon: "notification_share", // drawable icon name
  ),
  builder: (Meeting meeting) {
    return Text("Meeting screen");
  },
)
```

## Meeting Initialization Parameters

---

### meetingId

- Unique Id of the meeting, where that participant will be joining.

  - type : `String`
  - `REQUIRED`

Please refer this [documentation](/api-reference/realtime-communication/create-room) to create a room.

---

### token

- Token, which is used for authentication purposes.

  - type: `String`
  - `REQUIRED`

Please refer this [documentation](/api-reference/realtime-communication/intro/) to generate a token.

---

### displayName

- Name of the participant, who will be joining the meeting, this name will be displayed to other participants in the same meeting.

  - type : String
  - `REQUIRED`

---

### participantId

- Unique Id of the participant. If not passed then SDK will create an Id by itself and will use that id.

  - type : `String`
  - `OPTIONAL`

---

### micEnabled

- Whether `mic` of the participant will be `on`, while joining the meeting. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

---

### webcamEnabled

- Whether `webcam` of the participant will be `on`, while joining the meeting. If it is set to `false`, then webcam of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

---

### maxResolution

- Sets the maximum upload resolution of that participant's webcam stream.

  - type: `String`
  - value: `sd` | `hd`
  - defaultValue: `sd`
  - `OPTIONAL`

### notification

- Notification, that will be shown, while screen-sharing.

  - type: `NotificationInfo`

    - title: `String`
    - message: `String`
    - icon: `String`

  - `REQUIRED`

### builder

- This will take builder method with [`Meeting`](../meeting-class/introduction) instance as a parameter.

  - type: `Widget Function(Meeting)`
  - `REQUIRED`

</div>
