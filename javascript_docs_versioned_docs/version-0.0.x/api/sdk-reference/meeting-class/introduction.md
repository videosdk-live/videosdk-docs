---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Meeting Class
title: Intro to Meeting Class
---

<div class="api">

## Introduction

The `Meeting Class` includes methods and events for managing meetings, participants, video & audio streams, data channels and UI customisation.

### Meeting Initialization

You don't ever need to call the `Meeting Class` constructor directly. Instead use one of the factory methods `initMeeting()`.

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

#### meetingId

- `type` : String
- `meetingId` represents the meetingId for the current meeting
- `required`

#### name

- `type` : String
- `name` represents name for a participant who joins the meeting
- `required`

#### micEnabled

- `type` : boolean
- `name` represents whether mic is enabled or not
- `optional`
- `default` : true

#### webcamEnabled

- `type` : boolean
- `name` represents whether webcam is enabled or not
- `optional`
- `default` : true

#### maxResolution

- `type` : String
- `name` represents name for a participant who joins the meeting
- `optional`
- `default` : hd

</div>
