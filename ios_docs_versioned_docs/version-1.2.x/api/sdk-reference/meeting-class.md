---
title: Meeting class for IOS SDK.
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

## using Meeting Class

The `Meeting Class` includes methods and events for managing meetings, participants, video & audio streams, data channels and UI customisation.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

## Properties

### id
- `id` will be of type `String`
- `id` represents the current meeting with unique string value.

### localParticipant
- `localParticipant` will be of type `Participant`
- `localParticipant` represents the local participant of the meeting.

### participants
- `participants` will be of type `[String:Participant]`
- `participants` represents all the remote participants of the meeting.

### pubsub
- `pubsub` will be of type `PubSub`
- `pubsub` represents publisher-subscriber feature.

## Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel name="addEventListener(_ meetingEventListener: MeetingEventListener)"  type={"void"} />
      <MethodListItemLabel name="removeEventListener(_ meetingEventListener: MeetingEventListener)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel name="join()"  type={"void"} />
      <MethodListItemLabel name="leave()"  type={"void"} />
      <MethodListItemLabel name="end()"  type={"void"} />
      <MethodListItemLabel name="muteMic()"  type={"void"} />
      <MethodListItemLabel name="unmuteMic()"  type={"void"} />
      <MethodListItemLabel name="enableWebcam()"  type={"void"} />
      <MethodListItemLabel name="disableWebcam()"  type={"void"} />
      <MethodListItemLabel name="switchWebcam()" type={"void"} />
      <MethodListItemLabel name="startRecording(webhookUrl: String)" type={"void"} />
      <MethodListItemLabel name="stopRecording()" type={"void"} />
      <MethodListItemLabel name="startLivestream(outputs: [LivestreamOutput])" type={"void"} />
      <MethodListItemLabel name="stopLivestream()" type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Play with meeting instance"
// Add listeners
meeting?.addEventListener(self);

// Join the meeting
meeting?.join();

// leave the meeting
meeting?.leave();

// end the meeting
meeting?.end();

// turn off mic
meeting?.muteMic();

// turn on mic
meeting?.unmuteMic();

// turn on webcam (camera)
meeting?.enableWebcam()

// turn off webcam (camera)
meeting?.disableWebcam()

// change camera position
meeting?.switchWebcam()

// start recording with url to store the recording
meeting?.startRecording(url)

// stop recording
meeting?.stopRecording()

// start livestream with array of output parameters containing url and streamKey
meeting?.startLivestream(outputs)

// stop livestream
meeting?.stopLivestream()

// Get local participants
meeting?.localParticipant;
```
