---
title: Meeting class for android SDK.
hide_title: false
hide_table_of_contents: false
description: RTC Meeting Class provides features to implement custom meeting layout in your application.
sidebar_label: Meeting Class
pagination_label: Meeting Class
keywords:
  - RTC Android
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

### Constructor

<MethodListGroup>
  <MethodListItemLabel name="__constructor"  >
    <MethodListGroup>
      <MethodListHeading heading="Constructors" />
      <MethodListItemLabel name="Meeting(String meetingId, Participant localParticipant)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="getMeetingId()"  type={"String"} />
      <MethodListItemLabel name="getLocalParticipant()"  type={"Participant"} />
      <MethodListItemLabel name="getParticipants()"  type={"Map<String, Participant>"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel name="addEventListener(MeetingEventListener listener)"  type={"void"} />
      <MethodListItemLabel name="removeEventListener(MeetingEventListener listener)"  type={"void"} />
      <MethodListItemLabel name="removeAllListeners()"  type={"void"} />
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
      <MethodListItemLabel name="muteMic()"  type={"void"} />
      <MethodListItemLabel name="unmuteMic()"  type={"void"} />
      <MethodListItemLabel name="disableWebcam()"  type={"void"} />
      <MethodListItemLabel name="enableWebcam()"  type={"void"} />
      <MethodListItemLabel name="disableScreenShare()"  type={"void"} />
      <MethodListItemLabel name="enableScreenShare()"  type={"void"} />
      <MethodListItemLabel name="sendChatMessage(String text)"  type={"void"} />
      <MethodListItemLabel name="startRecording(String webhookUrl)"  type={"void"} />
      <MethodListItemLabel name="stopRecording()"  type={"void"} />
      <MethodListItemLabel name="changeWebcam(String deviceId)"  type={"void"} />
      <MethodListItemLabel name="setWebcamQuality(String quality)"  type={"void"} />
      <MethodListItemLabel name="respondEntry(String pId, String decision)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
