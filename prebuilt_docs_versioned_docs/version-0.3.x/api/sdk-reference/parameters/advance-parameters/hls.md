---
sidebar_position: 1
sidebar_label: HLS Feature Parameter
pagination_label: HLS Feature Parameter
title: HLS Feature Parameter
---

<div class="sdk-api-ref-only-h4">

## hls

- type: `object`

### enabled

- type: `Boolean`

- `hls.enabled` enables partcipant for hls.

### autostart

- type: `Boolean`

- `hls.autostart` autostart hls if set to `true` when meeting gets started.

### toggleParticipantMode

- type: `Boolean`

- `toggleParticipantMode` represents whether participant can toggle other participant's mode or not.

### toggleHLS

- type: `Boolean`

- `toggleHLS` if set to `true` you can toggle `Start HLS` Button.

### mode

- type: `String`

- `mode` represents the mode of participant which can be `VIEWER` | `CONFERENCE`

```js
meeting.init({
  //other params
  hls: {
    enabled: true,
    autoStart: false,
  },
  permissions: {
    //  ...other permissions
    toggleParticipantMode: true,
    toggleHls: true,
  },
  mode: "CONFERENCE", // VIEWER || CONFERENCE
  //other params
});
```

</div>
