---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Meeting Class
title: Intro to Meeting Class
---

<div class="api">

## Introduction

The `Meeting` Class includes properties, methods and events for managing a meeting, participants, video, audio and share streams, messaging and UI customisation.

### Meeting Initialization

You can initialize the meeting using a factory method provided by the SDK called `initMeeting()`. By passing the parameters according to the need, it will generate a new `Meeting` class and the initiated meeting will be returned.

### initMeeting()

```js title="Javascript"
const meeting = VideoSDK.initMeeting({
  meetingId, // required
  name, // required
  micEnabled, // optional, default: true
  webcamEnabled, // optional, default: true
  maxResolution, // optional, default: "hd"
});
```

### Meeting Initialization Parameters

### meetingId

- `type` : String
- `meetingId` represents the meetingId for the current meeting
- `required`: `true`

### name

- `type` : String
- `name` represents name for a participant who joins the meeting
- `required`

### micEnabled

- `type` : boolean
- `name` represents whether mic is enabled or not
- `optional`
- `default` : true

### webcamEnabled

- `type` : boolean
- `name` represents whether webcam is enabled or not
- `optional`
- `default` : true

### maxResolution

- `type` : String
- `name` represents name for a participant who joins the meeting
- `optional`
- `default` : hd

</div>
