---
sidebar_position: 1
sidebar_label: Permissions Parameters
pagination_label: Permissions Parameters
title: Permissions Parameters
---

<div class="sdk-api-ref-only-h4">

## permissions

- type: `object`

### pin

- type: `Boolean`

- `pin` represents whether participant can be `pin` other self or participants or not.

### askToJoin

- type: `Boolean`

- `askToJoin` represents whether participant can request to join in the meeting or not.
- If it is `false`, then participant will directly join the meeting

### toggleParticipantWebcam

- type: `Boolean`

- `toggleParticipantWebcam` represents whether participant can toggle other participant's webcam or not.

### toggleParticipantMic

- type: `Boolean`

- `toggleParticipantMic` represents whether participant can toggle other participant's mic or not.

### toggleParticipantMode

- type: `Boolean`

- `toggleParticipantMode` represents whether participant can toggle other participant's mode or not.

### toggleParticipantScreenshare

- type: `Boolean`

- `toggleParticipantScreenshare` represents whether participant can toggle other participant's screen share or not.

### removeParticipant

- type: `Boolean`

- `removeParticipant` represents whether participant can remove other participant or not.

### endMeeting

- type: `Boolean`

- `endMeeting` represents whether participant can end meeting or not.
- If it is `true`, then participant can end the meeting and all joined participants will be removed from the meeting.

### drawOnWhiteboard

- type: `Boolean`

- `drawOnWhiteboard` represents whether participant have permission to draw on white board or not.

### toggleWhiteboard

- type: `Boolean`

- `toggleWhiteboard` enables participant to toggle white board if set to `true`.

### toggleRecording

- type: `Boolean`

- `toggleRecording` enables participant to toggle recording if set to `true`

### toggleLivestream

- type: `Boolean`

- `toggleLivestream` enables participant to toggle live streaming if set to `true`

### changeLayout

- type: `Boolean`

- `changeLayout` enables participant to change the layout of a meeting when set to `true`

```js
meeting.init({
  //other params
  permissions: {
    pin: true,
    askToJoin: false,
    toggleParticipantWebcam: true,
    toggleParticipantMic: true,
    toggleParticipantMode: true,
    toggleParticipantScreenshare: true,
    removeParticipant: true,
    endMeeting: true,
    drawOnWhiteboard: true,
    toggleWhiteboard: true,
    toggleRecording: true,
    toggleLivestream: true,
    changeLayout: true,
  },
  //other params
});
```

</div>
