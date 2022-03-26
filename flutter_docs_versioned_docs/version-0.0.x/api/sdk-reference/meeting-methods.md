---
title: Meeting class for Flutter SDK.
hide_title: true
hide_table_of_contents: false
description: RTC Meeting Class provides features to implement custom meeting layout in your application.
sidebar_label: Methods
pagination_label: Meeting Class Methods
keywords:
  - RTC Flutter
  - Meeting Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-class-methods
---

# Meeting Class Methods

### join() {#h3}

- Return Type : `void`
- `join()` is used to join a meeting.
- Events associated with `join()` method :

  - Local Participant will receive a [`Events.meetingJoined`](#Events.meetingJoined) event, when successfully joined.
  - Remote Participant will receive a `Events.participantJoined` event with `participant`.

- When `join()` is called and the permission in the token is `ask_join`, then direct joining is not preformed.
  - In this case `onEntryRequested()` will be emitted to the participant with permission `allow_join`. Once the participant with permission `allow_join` responds to the request, `onEntryResponded({participantId, decision})`.
  - If the `decision` is `allowed`, participant will be joined else if `decision` is `denied` participant showed not be joined.

### leave() {#h3}

- Return Type : `void`
- `leave()` is used to leave current meeting.
- Events associated with `leave()` method :
  - Local Participant will receive a `Events.meetingLeft` event.
  - Remote Participant will receive a `Events.participantLeft` event with `participantId`.

### enableWebcam() {#h3}

- Return Type : `void`
- `enableWebcam()` is used to enable self camera.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

### disableWebcam() {#h3}

- Return Type : `void`
- `disableWebcam()` is used to disable self camera.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

### unmuteMic() {#h3}

- Return Type : `void`
- `unmuteMic()` is used to enable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

### muteMic() {#h3}

- Return Type : `void`
- `muteMic()` is used to disable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

### enableScreenShare() {#h3}

- Return Type : `void`
- `enableScreenShare()` is used to enable screen-sharing.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

### disableScreenShare() {#h3}

- Return Type : `void`
- `disableScreenShare()` is used to disable screen-sharing.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

### getWebcams() {#h3}

- Return Type : `List<MediaDeviceInfo>`
- `getWebcams()` is used to get list of available cameras.

### getMics() {#h3}

- Return Type : `List<MediaDeviceInfo>`
- `getMics()` is used to get list of available microphones.

### changeWebcam() {#h3}

- Return Type : `void`
- `changeWebcam` is used to change self camera.
- Local Participant and Remote Participant will receive `Events.streamEnabled` event with `stream` object and `Events.streamDisabled` event with `stream` object.

### startRecording() {#h3}

- Return Type : `void`
- `startRecording()` is used to start meeting recording.
- Local Participant and Remote Participant will receive `Events.recordingStarted` event.

### stopRecording() {#h3}

- Return Type : `void`
- `stopRecording()` is used to stop meeting recording.
- Local Participant and Remote Participant will receive `Events.recordingStopped` event.

### startLivestream() {#h3}

- Return Type : `void`
- `startLivestream()` is used to start meeting livestreaming.
- Local Participant and Remote Participant will receive `Events.liveStreamStarted` event.

### stopLivestream() {#h3}

- Return Type : `void`
- `stopLivestream()` is used to stop meeting livestreaming.
- Local Participant and Remote Participant will receive `Events.liveStreamStopped` event.

### on(Events event, Function handler) {#h3}

- Return Type : `void`
- `on()` is used to handle custom events.
- This method takes an event and handler. Handler function will be called when given event is emitted.
