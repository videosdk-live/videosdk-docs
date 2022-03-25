---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

<div class="api">

## Meeting Class's Methods

### join()

- Return Type : `void`
- `join()` is used to join a meeting.
- Events associated with `join()` method :

  - Local Participant will receive a [`Events.meetingJoined`](#Events.meetingJoined) event, when successfully joined.
  - Remote Participant will receive a `Events.participantJoined` event with `participant`.

- When `join()` is called and the permission in the token is `ask_join`, then direct joining is not preformed.
  - In this case `onEntryRequested()` will be emitted to the participant with permission `allow_join`. Once the participant with permission `allow_join` responds to the request, `onEntryResponded({participantId, decision})`.
  - If the `decision` is `allowed`, participant will be joined else if `decision` is `denied` participant showed not be joined.

### leave()

- Return Type : `void`
- `leave()` is used to leave current meeting.
- Events associated with `leave()` method :
  - Local Participant will receive a `Events.meetingLeft` event.
  - Remote Participant will receive a `Events.participantLeft` event with `participantId`.

### enableWebcam()

- Return Type : `void`
- `enableWebcam()` is used to enable self camera.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

### disableWebcam()

- Return Type : `void`
- `disableWebcam()` is used to disable self camera.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

### unmuteMic()

- Return Type : `void`
- `unmuteMic()` is used to enable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

### muteMic()

- Return Type : `void`
- `muteMic()` is used to disable self microphone.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

### enableScreenShare()

- Return Type : `void`
- `enableScreenShare()` is used to enable screen-sharing.
- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

### disableScreenShare()

- Return Type : `void`
- `disableScreenShare()` is used to disable screen-sharing.
- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

### changeWebcam()

- Return Type : `void`
- `changeWebcam` is used to change self camera.
- Local Participant and Remote Participant will receive `Events.streamEnabled` event with `stream` object and `Events.streamDisabled` event with `stream` object.

### startRecording()

- Return Type : `void`
- `startRecording()` is used to start meeting recording.
- Local Participant and Remote Participant will receive `Events.recordingStarted` event.

### stopRecording()

- Return Type : `void`
- `stopRecording()` is used to stop meeting recording.
- Local Participant and Remote Participant will receive `Events.recordingStopped` event.

### startLivestream()

- Return Type : `void`
- `startLivestream()` is used to start meeting livestreaming.
- Local Participant and Remote Participant will receive `Events.liveStreamStarted` event.

### stopLivestream()

- Return Type : `void`
- `stopLivestream()` is used to stop meeting livestreaming.
- Local Participant and Remote Participant will receive `Events.liveStreamStopped` event.

### startVideo({ link: string })

- Return Type : `void`
- `startVideo()` triggers video-state-changed event with status "started"

### stopVideo()

- Return Type : `void`
- `stopVideo()` triggers video-state-changed event with status "stopped"

### pauseVideo({ link: string })

- Return Type : `void`
- `pauseVideo()` triggers video-state-changed event with status "paused"

### resumeVideo()

- Return Type : `void`
- `resumeVideo()` triggers video-state-changed event with status "resumed"

### seekVideo({ link: string })

- Return Type : `void`
- `seekVideo()` triggers video-state-changed event with status "seeked"

</div>
