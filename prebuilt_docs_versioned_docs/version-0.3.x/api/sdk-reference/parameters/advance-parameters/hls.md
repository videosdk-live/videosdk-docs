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

### playerControlsVisible

- type: `Boolean`

- `hls.playerControlsVisible` : If it is `true` then participant can view controls for the interactive meeting player.

### toggleParticipantMode

- type: `Boolean`

- `toggleParticipantMode` represents whether participant can toggle other participant's mode or not.

### toggleHLS

- type: `Boolean`

- `toggleHLS` if set to `true` you can toggle `Start HLS` Button.

### mode

- type: `String`

- `mode` represents the mode of participant which can be `VIEWER` | `CONFERENCE`

:::note

`hls.playerControlsVisible` parameter will only work if the mode is set to `viewer`, for `conference` mode there will not be any interactive meeting player hence `hls.playerControlsVisible` will be ignored if mode is set to `conference`.

:::

```js
meeting.init({
  //other params
  hls: {
    enabled: true,
    autoStart: false,
    playerControlsVisible: true,
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
