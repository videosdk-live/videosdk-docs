---
title: MeetingEventListener Class for android SDK.
hide_title: false
hide_table_of_contents: false
description: The `MeetingEventListener Class` includes list of events which can be useful for the design custom user interface.
sidebar_label: MeetingEventListener Class
pagination_label: MeetingEventListener Class
keywords:
  - RTC Android
  - MeetingEventListener Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-event-listener-class
---

# MeetingEventListener Class - Android

## using MeetingEventListener Class

The `MeetingEventListener Class` is responsible for listening to all the events that are related to `Meeting Class`.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Listeners

<MethodListGroup>
  <MethodListItemLabel name="__listeners" >
    <MethodListGroup>
      <MethodListHeading heading="Listeners" />
      <MethodListItemLabel description={"emitted when local participant joined the meeting successfully"} name="onMeetingJoined()"  type={"void"} />
      <MethodListItemLabel description={"emitted when local participant left the meeting"} name="onMeetingLeft()"  type={"void"} />
      <MethodListItemLabel description={"emitted when new participant joined the meeting"} name="onParticipantJoined(Participant participant)"  
      type={"void"} />
      <MethodListItemLabel description={"emitted when any participant left the meeting"} name="onParticipantLeft(Participant participant)"  type={"void"} />
      <MethodListItemLabel description={"emitted when remote participant requested for entry in the meeting"} name="onEntryRequested(String id, String name)"  type={"void"} />
      <MethodListItemLabel description={"emitted when meeting host responded to participant's joining request"} 
      name="onEntryResponded(String id, String decision)"  type={"void"} />
      <MethodListItemLabel description={"emitted when any participant shared the screen"} name="onPresenterChanged(String participantId)"  type={"void"} />
      <MethodListItemLabel description={"emitted when active speaker is changed"} name="onSpeakerChanged(String participantId)"  type={"void"} />
      <MethodListItemLabel description={"emitted when recording of the meeting is started successfully"} name="onRecordingStarted()"  type={"void"} />
      <MethodListItemLabel description={"emitted when recording of the meeting is stopped"} name="onRecordingStopped()"  type={"void"} />
      <MethodListItemLabel description={"emitted when live streaming of the meeting in social media is started successfully"} name="onLivestreamStarted()"  type={"void"} />
      <MethodListItemLabel description={"emitted when live streaming of the meeting is stopped"} name="onLivestreamStopped()"  type={"void"} />
      <MethodListItemLabel description={"emitted when remote participant asked you to toggle the Mic"} name="onMicRequested(String participantId, MicRequestListener listener)"  type={"void"} />
      <MethodListItemLabel description={"emitted when remote participant asked you to toggle the Webcam"} name="onWebcamRequested(String participantId, WebcamRequestListener listener)"  type={"void"} />
      <MethodListItemLabel description={"emitted when local participant answer/dial the phone call"} name="onExternalCallStarted()"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
