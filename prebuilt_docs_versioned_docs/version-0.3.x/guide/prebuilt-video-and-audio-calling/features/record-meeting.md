---
title: Prebuilt  Recording Meeting Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Record Meeting features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Cloud Recording
pagination_label: Cloud Recording
keywords:
  - Start Recording meeting
  - Stop Recording meeting
  - audio calling
  - video calling
  - real-time communication
  - record audio calling
  - record video calling
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-meeting
---

# Record Meeting

Record meeting allows participants to record video & audio during the meeting. The recording files are available in customer dashboard.
Any participant can start/stop recording any time during the meeting.

### How it works ?

- While `recording.enabled` value is set to `true`, you will show recording button as display in below image.

- While `recording.enabled` value is set to `false`, the below recording button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-recording.png)

### Recording Attributes

- `recording.enabled`: If it is true, then recording button will be visible on top bar of the meeting. If it is false, then recording button won't be available on top bar of the meeting.
- `toggleRecording`: If it is true, then other participant can start/stop recording during the meeting. If it is false, then participant can not start/stop recording during the meeting.
- `recording.webhookUrl`: It's your [webhook url](https://en.wikipedia.org/wiki/Webhook), where we notify once meeting recording is complete.
- `recording.theme`: It will record the meeting based on theme indicated. it can be a either DARK , LIGHT or DEFAULT.
- `recording.autoStart`: It will auto start recording when participant joined
- `recording.awsDirPath`: It indicates where the recording will get stored.
- `recording.layout.type` : It will record the meeting based on layout type indicated.
- `recording.layout.priority` : It will prioritise the view of either pin partcipant or speaker participant for recording.
- `recording.layout.gridsize` : It will indicates number of participants shown on the screen.

```js title="index.html"
const config = {
  // ...
  recording: {
    enabled: true,
    webhookUrl: "https://www.videosdk.live/callback",
    // awsDirPath: `/meeting-recordings/${meetingId}/`, // Pass it only after configuring your S3 Bucket credentials on Video SDK dashboard
    autoStart: false,
    theme: "DARK", // DARK || LIGHT || DEFAULT

    layout: {
      type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
      priority: "PIN", // "SPEAKER" | "PIN",
      gridSize: 3,
    },
  },

  permissions: {
    toggleRecording: true,
    //...
  },

  //...
};
```
