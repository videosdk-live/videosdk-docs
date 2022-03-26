---
title: Meeting class for Flutter SDK.
hide_title: true
hide_table_of_contents: false
description: RTC Meeting Class provides features to implement custom meeting layout in your application.
sidebar_label: Events
pagination_label: Meeting Class Events
keywords:
  - RTC Flutter
  - Meeting Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-class-events
---

# Meeting Class Events

### Events.meetingJoined {#h3}

- `Events.meetingJoined` will be emitted when local participant joins the meeting successfully

### Events.meetingLeft {#h3}

- `Events.meetingLeft` will be emitted when local participant leaves the meeting

### Events.entryRequested {#h3}

- `Events.entryRequested` will be emitted when remote participant requests for entry in your meeting

### Events.entryResponded {#h3}

- `Events.entryResponded` will be emitted when meeting host responds to your entry request

### Events.micRequested {#h3}

- `Events.micRequested` will be emitted when mic is requested

### Events.webcamRequested {#h3}

- `Events.webcamRequested` will be emitted when webcam is requested

### Events.participantJoined {#h3}

- `Events.participantJoined` will be emitted when new participant joins the meeting

### Events.participantLeft {#h3}

- `Events.participantLeft` will be emitted when any participant from the meeting leaves

### Events.recordingStarted {#h3}

- `Events.recordingStarted` will be emitted when recording of the meeting is started successfully

### Events.recordingStopped {#h3}

- `Events.recordingStopped` will be emitted when recording of the meeting is stopped

### Events.liveStreamStarted {#h3}

- `Events.liveStreamStarted` will be emitted when live streaming of the meeting in social media is started successfully

### Events.liveStreamStopped {#h3}

- `Events.liveStreamStopped` emitted when live streaming of the meeting is stopped

### Events.speakerChanged {#h3}

- `Events.speakerChanged` will be emitted when active speaker is changed

### Events.presenterChanged {#h3}

- `Events.presenterChanged` will be emitted when any participant started presenting
