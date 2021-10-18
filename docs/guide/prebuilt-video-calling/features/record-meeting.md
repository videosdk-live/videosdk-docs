---
title: Prebuilt  Recording Meeting Audio & Video Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Record Meeting features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Record Meeting
pagination_label: Record Meeting
keywords:
  - Start Recording meeting
  - Stop Recording meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-meeting
---

# Record Meeting

Record meeting allows participants to record video and audio during the meeting. The recording files are available in customer dashboard.
Any participant can start/stop recording any time during the meeting.

### How it works. ?

- While `recordingEnabled` value set to `true`, you will show recording button as display in below image.

- While `recordingEnabled` value set to `false`, the below recording button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-recording.png)

### Recording Attributes

- `recordingEnabled`: If it is true, then recording button will be visible on top bar of the meeting. If it is false, then recording button won't be available on top bar of the meeting.
- `participantCanToggleRecording`: If it is true, then other participant can start/stop recording during the meeting. If it is false, then participant can not start/stop recording during the meeting.
- `recordingWebhookUrl`: It's your [webhook url](https://en.wikipedia.org/wiki/Webhook), where we notify once meeting recording is complete.

```js title="index.html"
const config = {
  // ...
  recordingEnabled: true,
  participantCanToggleRecording: true,
  recordingWebhookUrl: "yourwebsite.com/callback",
  // ...
};
```
