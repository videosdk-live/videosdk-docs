---
sidebar_position: 1
sidebar_label: Recording Parameters
pagination_label: Recording Parameters
title: Recording Parameters
---

<div class="sdk-api-ref-only-h4">

## recording

- type: `object`

### enabled

- type: `Boolean`

- `recording.enabled` enables partcipant to record the meeting.

### webhookUrl

- type: `Boolean`

- `recording.webhookUrl`, represents web hook url called when the recording of the meeting is created.

### awsDirPath

- type: `Boolean`

- `recording.awsDirPath` represents the path where recording will get stored.

### autostart

- type: `Boolean`

- `recording.autostart` autostarts recording if set to `true` when meeting gets started.

### theme

- type: `String`

- `recording.theme` represents the theme of recording which can be `DARK` , `LIGHT` or `DEFAULT`.

```js
meeting.init({
  recording: {
    enabled: true,
    webhookUrl: "https://www.videosdk.live/callback",
    awsDirPath: `/meeting-recordings/${meetingId}/`,
    autoStart: false,
    theme: "DARK" // DARK | LIGHT | DEFAULT
});
```

</div>
