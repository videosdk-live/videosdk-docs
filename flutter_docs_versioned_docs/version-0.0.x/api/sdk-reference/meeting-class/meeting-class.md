---
title: Meeting class for Flutter SDK.
hide_title: false
hide_table_of_contents: false
description: RTC Meeting Class provides features to implement custom meeting layout in your application.
sidebar_label: Meeting Class
pagination_label: Meeting Class
keywords:
  - RTC IOS
  - Meeting Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-class
---

# Meeting Class

## Using Meeting Class {#h2}

The `Meeting Class` includes methods and events for managing meetings, participants, video & audio streams, data channels and UI customization.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

## Properties {#h2}

### id {#h3}

- `type`: String
- `id` represents the meetingId for the current meeting

### localParticipant {#h3}

- `type`: Participant
- `localParticipant` represents the local participant of the meeting

### participants {#h3}

- `type`: Map<String, Participant>
- `participants` represents all remote participants in the meeting

### pubSub {#h3}

- `type`: PubSub
- `pubSub` represents Publisher-Subscriber feature

### selectedWebcamId {#h3}

- `type`: String?
- `selectedWebcamId` represents the id of currently selected webcam

### selectedMicId {#h3}

- `type`: String?
- `selectedWebcamId` represents the id of currently selected mic

## Events

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

## Methods {#h2}

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
- Every Participant will receive a `Events.streamEnabled` event with `stream` object.

### disableWebcam() {#h3}

- Return Type : `void`
- `disableWebcam()` is used to disable self camera.
- Every Participant will receive a `Events.streamDisabled` event with `stream` object.

### unmuteMic() {#h3}

- Return Type : `void`
- `unmuteMic()` is used to enable self microphone.
- Every Participant will receive a `Events.streamEnabled` event with `stream` object.

### muteMic() {#h3}

- Return Type : `void`
- `muteMic()` is used to disable self microphone.
- Every Participant will receive a `Events.streamDisabled` event with `stream` object.

### enableScreenShare() {#h3}

- Return Type : `void`
- `enableScreenShare()` is used to enable screen-sharing.
- Every Participant will receive a `Events.streamEnabled` event with `stream` object.

### disableScreenShare() {#h3}

- Return Type : `void`
- `disableScreenShare()` is used to disable screen-sharing.
- Every Participant will receive a `Events.streamDisabled` event with `stream` object.

### getWebcams() {#h3}

- Return Type : `List<MediaDeviceInfo>`
- `getWebcams()` is used to get list of available cameras.

### getMics() {#h3}

- Return Type : `List<MediaDeviceInfo>`
- `getMics()` is used to get list of available microphones.

### changeWebcam() {#h3}

- Return Type : `void`
- `changeWebcam` is used to change self camera.
- Every Participant will receive `Events.streamEnabled` event with `stream` object and `Events.streamDisabled` event with `stream` object.

### startRecording() {#h3}

- Return Type : `void`
- `startRecording()` is used to start meeting recording.
- Every Participant will receive `Events.recordingStarted` event.

### stopRecording() {#h3}

- Return Type : `void`
- `stopRecording()` is used to stop meeting recording.
- Every Participant will receive `Events.recordingStopped` event.

### startLivestream() {#h3}

- Return Type : `void`
- `startLivestream()` is used to start meeting livestreaming.
- Every Participant will receive `Events.liveStreamStarted` event.

### stopLivestream() {#h3}

- Return Type : `void`
- `stopLivestream()` is used to stop meeting livestreaming.
- Every Participant will receive `Events.liveStreamStopped` event.

### on(Events event, Function handler) {#h3}

- Return Type : `void`
- `on()` is used to handle custom events.
- This method takes an event and handler. Handler function will be called when given event is emitted.

## Example

```js title="Play with meeting instance"
// Join the meeting
meeting?.join();

// Get local participants
meeting?.localParticipant;

// Get remote participants
meeting?.participants;

// Adding event listner
meeting.on(Events.participantJoined, (Participant participant) {
  print("new participant => $participant");
  },
);
```
