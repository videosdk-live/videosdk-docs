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

## Using Meeting Class

The `Meeting Class` includes methods and events for managing meetings, participants, video & audio streams, data channels and UI customisation.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel description={"meeting Id"} name="id"  type={"String"} />
      <MethodListItemLabel description={"local participant of the meeting"} name="localParticipant"  type={"Participant"} />
      <MethodListItemLabel description={"all remote participants of the meeting"} name="participants"  type={"Map<String, Participant>"} />
      <MethodListItemLabel description={"Id of the webcam device selected as input video source"} name="selectedWebcamId"  type={"String?"} />
      <MethodListItemLabel description={"Id of the microphone device selected as input audio source"} name="selectedMicId"  type={"String?"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel description={"emitted when local participant joined the meeting successfuly"} name="meetingJoined"  type={"void"} />
      <MethodListItemLabel description={"emitted when local participant left the meeting"} name="meetingLeft"  type={"void"} />      
      <MethodListItemLabel description={"emitted when new participant joined the meeting"} name="participantJoined"  type={"participant"} />
      <MethodListItemLabel description={"emitted when any participant from the meeting left"} name="participantLeft"  type={"participantId"} />
      <MethodListItemLabel description={"emitted when recording of the meeting is started successfully"} name="recordingStarted" type={"void"} />
      <MethodListItemLabel description={"emitted when recording of the meeting is stopped"} name="recordingStopped" type={"void"} />
      <MethodListItemLabel description={"emitted when live streaming of the meeting in social media is started successfully"} name="liveStreamStarted" type={"void"} />
      <MethodListItemLabel description={"emitted when live streaming of the meeting is stopped"} name="liveStreamStopped" type={"void"} />
      <MethodListItemLabel description={"emitted when active speaker is changed"} name="speakerChanged" type={"void"} />
      <MethodListItemLabel description={"emitted when any participant started presenting"} name="presenterChanged" type={"void"} />
      </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel description={"join the meeting"} type={"void"} name="join()" />
      <MethodListItemLabel description={"leave the meeting"} type={"void"} name="leave()" />
      <MethodListItemLabel description={"enable self webcam"} type={"void"} name="enableWebcam()" />
      <MethodListItemLabel description={"disable self webcam"} type={"void"} name="disableWebcam()" />
      <MethodListItemLabel description={"unmute self mic"} type={"void"} name="unmuteMic()" />
      <MethodListItemLabel description={"mute self mic"} type={"void"} name="muteMic()" />
      <MethodListItemLabel description={"get all webcam devices"} type={"void"} name="getWebcams()"  />
      <MethodListItemLabel description={"get all mic devices"} type={"void"} name="getMics()"  />
      <MethodListItemLabel description={"change self webcam"} type={"void"} name="changeWebcam()" option={"<deviceId>"} />
      <MethodListItemLabel description={"start screen sharing"} type={"void"} name="enableScreenShare()" />
      <MethodListItemLabel description={"stop screen sharing"} type={"void"} name="disableScreenShare()" />
      <MethodListItemLabel description={"start meeting recording"} type={"void"} name="startRecording()" />
      <MethodListItemLabel description={"stop meeting recording"} type={"void"} name="stopRecording()" />
      <MethodListItemLabel description={"start meeting live streaming"} type={"void"} name="startLivestream()" />
      <MethodListItemLabel description={"stop meeting live streaming"} type={"void"} name="stopLivestream()" />
      <MethodListItemLabel description={"event handler of the meeting"} type={"void"} name="on(Events event, Function handler)" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

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
