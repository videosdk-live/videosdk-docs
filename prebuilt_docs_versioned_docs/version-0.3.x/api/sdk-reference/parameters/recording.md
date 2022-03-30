---
sidebar_position: 1
sidebar_label: recording Parameter
pagination_label: recording Parameter
title: recording Parameter
---

<div class="sdk-api-ref-only-h4">

## recording

- type : `json object`

### enabled

- type : `Boolean`

- `recording.enabled` enables partcipant to record the meeting.

### webhookUrl

- type : `Boolean`

- `recording.webhookUrl` represents web hook url of a recording

### awsDirPath

- type : `Boolean`

- `recording.awsDirPath` represents the path where your recording will get stored

### autostart

- type : `Boolean`

- `recording.autostart` autostarts recording if set to `true` when meeting gets started.

```js
meeting.init({
  recording: {
    enabled: true,
    webhookUrl: "https://www.videosdk.live/callback",
    awsDirPath: `/meeting-recordings/${meetingId}/`,
    autoStart: false,
  },
});
```

</div>
