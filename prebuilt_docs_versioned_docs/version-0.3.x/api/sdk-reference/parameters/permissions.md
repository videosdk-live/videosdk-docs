---
sidebar_position: 1
sidebar_label: Permissions Parameter
pagination_label: Permissions Parameter
title: Permissions Parameter
---

<div class="sdk-api-ref-only-h4">

## permissions

- type : `json object`

### pin

- type : `Boolean`

- `pin` represents whether participant can be pinned or not

### askToJoin

- type : `Boolean`

- `askToJoin` represents whether participant can request to join in the meeting or not

### toggleParticipantWebcam

- type : `Boolean`

- `toggleParticipantWebcam` represents whether participant can toggle other participant's webcam or not

### toggleParticipantMic

- type : `Boolean`

- `toggleParticipantMic` represents whether participant can toggle other participant's mic or not

### removeParticipant

- type : `Boolean`

- `removeParticipant` represents whether participant can be removed or not

### endMeeting

- type : `Boolean`

- `endMeeting` represents whether host can end meeting or not

### drawOnWhiteboard

- type : `Boolean`

- `drawOnWhiteboard` represents whether participant have permission to draw on white board or not

### toggleWhiteboard

- type : `Boolean`

- `toggleWhiteboard` enables participant to toggle white board if set to `true`

### toggleRecording

- type : `Boolean`

- `toggleRecording` enables participant to toggle recording if set to `true`

### toggleLivestream

- type : `Boolean`

- `toggleLivestream` enables participant to toggle live streaming if set to `true`

### changeLayout

- type : `Boolean`

- `changeLayout` enables participant to change the layout of a meeting when set to `true`

```js
meeting.init({
  //other params
  permissions: {
    pin: true,
    askToJoin: false,
    toggleParticipantWebcam: true,
    toggleParticipantMic: true,
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
