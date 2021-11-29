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

# MeetingEventListener Class

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
      <MethodListItemLabel name="onMeetingJoined()"  type={"void"} />
      <MethodListItemLabel name="onMeetingLeft()"  type={"void"} />
      <MethodListItemLabel name="onParticipantJoined(Participant participant)"  type={"void"} />
      <MethodListItemLabel name="onParticipantLeft(Participant participant)"  type={"void"} />
      <MethodListItemLabel name="onEntryRequested(String id, String name)"  type={"void"} />
      <MethodListItemLabel name="onEntryResponded(String id, String decision)"  type={"void"} />
      <MethodListItemLabel name="onSpeakerChanged(String participantId)"  type={"void"} />
      <MethodListItemLabel name="onRecordingStarted()"  type={"void"} />
      <MethodListItemLabel name="onRecordingStopped()"  type={"void"} />
      <MethodListItemLabel name="onLivestreamStarted()"  type={"void"} />
      <MethodListItemLabel name="onLivestreamStopped()"  type={"void"} />
      <MethodListItemLabel name="onMicRequested(String participantId, MicRequestListener listener)"  type={"void"} />
      <MethodListItemLabel name="onWebcamRequested(String participantId, WebcamRequestListener listener)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
