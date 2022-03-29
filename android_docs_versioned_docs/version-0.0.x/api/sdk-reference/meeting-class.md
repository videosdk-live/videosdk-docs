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

## Constructor

### Meeting(String meetingId, Participant localParticipant)
- return type : `void`

## Properties

### getmeetingId()
- `getmeetingId()` will return `meetingId`, which represents the meetingId for the current meeting
- return type : `void`

### getLocalParticipant()
- `getLocalParticipant()` will return Local participant
- return type :`Participant`

### getParticipants()
- `getParticipants()` will return all Remote participant
- return type : `void`

### pubSub()
- `pubSub()` will return object of `PubSub` class
- return type : `PubSub`

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
      <MethodListItemLabel description={"join the meeting"} name="join()"  type={"void"} />
      <MethodListItemLabel description={"leave the meeting"} name="leave()"  type={"void"} />
      <MethodListItemLabel description={"end the meeting"} name="end()"  type={"void"} />
      <MethodListItemLabel description={"enable self mic"} name="muteMic()"  type={"void"} />
      <MethodListItemLabel description={"disable self mic"} name="unmuteMic()"  type={"void"} />
      <MethodListItemLabel description={"enable self webcam"} name="enableWebcam()"  type={"void"} />
      <MethodListItemLabel description={"disable self webcam"} name="disableWebcam()"  type={"void"} />
      <MethodListItemLabel description={"start meeting recording"} name="startRecording(String webhookUrl)"  type={"void"} />
      <MethodListItemLabel description={"stop meeting recording"} name="stopRecording()"  type={"void"} />
      <MethodListItemLabel description={"start meeting live streaming"} name="startLivestream(List<LivestreamOutput> outputs)"  type={"void"} />
      <MethodListItemLabel description={"stop meeting live streaming"} name="stopLivestream()"  type={"void"} />
      <MethodListItemLabel description={"get all mic devices"} name="getMics()"  type={"Set<AppRTCAudioManager.AudioDevice>"} />
      <MethodListItemLabel description={"change self mic"} name="changeMic()"  type={"void"} />
      <MethodListItemLabel description={"When a Local participant changes the Mic, `AppRTCAudioManager.AudioManagerEvents()` is triggered which can be set by using this method"} name="setAudioDeviceChangeListener(AppRTCAudioManager.AudioManagerEvents audioManagerEvents)"  type={"void"} />
      <MethodListItemLabel description={"change self webcam"} name="changeWebcam()"  type={"void"} />
      <MethodListItemLabel description={"start sharing phone screen"} name="enableScreenShare(Intent data)"  type={"void"} />
      <MethodListItemLabel description={"stop sharing phone screen"} name="disableScreenShare()"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
