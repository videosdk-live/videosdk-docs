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
      <MethodListItemLabel name="id"  type={"String"} />
      <MethodListItemLabel name="localParticipant"  type={"Participant"} />
      <MethodListItemLabel name="participants"  type={"Map<String, Participant>"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel name="meeting-joined"  type={"void"} />
      <MethodListItemLabel name="meeting-left"  type={"void"} />      
      <MethodListItemLabel name="participant-joined"  type={"participant"} />
      <MethodListItemLabel name="participant-left"  type={"participantId"} />
      <MethodListItemLabel name="recording-started" type={"void"} />
      <MethodListItemLabel name="recording-stopped" type={"void"} />
      <MethodListItemLabel name="livestream-started" type={"void"} />
      <MethodListItemLabel name="livestream-stopped" type={"void"} />
      <MethodListItemLabel name="speaker-changed" type={"void"} />
      <MethodListItemLabel name="presenter-changed" type={"void"} />
      </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel type={"void"} name="disableWebcam()" />
      <MethodListItemLabel type={"void"} name="enableWebcam()" />
      <MethodListItemLabel type={"void"} name="muteMic()" />
      <MethodListItemLabel type={"void"} name="unmuteMic()" />
      <MethodListItemLabel type={"void"} name="getWebcams()"  />
      <MethodListItemLabel type={"void"} name="getMics()"  />
      <MethodListItemLabel type={"void"} name="startRecording()" />
      <MethodListItemLabel type={"void"} name="stopRecording()" />
      <MethodListItemLabel type={"void"} name="startLivestream()" />
      <MethodListItemLabel type={"void"} name="stopLivestream()" />
      <MethodListItemLabel type={"void"} name="join()" />
      <MethodListItemLabel type={"void"} name="leave()" />
      <MethodListItemLabel type={"void"} name="on(String event, Function handler)" />
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
meeting.on("participant-joined", (Participant participant) {
  print("new participant => $participant");
  },
);
```
