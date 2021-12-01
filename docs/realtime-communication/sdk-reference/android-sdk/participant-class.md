---
title: Participant class for android SDK.
hide_title: false
hide_table_of_contents: false
description: The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customisation.
sidebar_label: Participant Class
pagination_label: Participant Class
keywords:
  - RTC Android
  - Participant Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-class
---

# Participant Class

## using Participant Class

The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customisation.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Constructor

<MethodListGroup>
  <MethodListItemLabel name="__constructor"  >
    <MethodListGroup>
      <MethodListHeading heading="Constructors" />
      <MethodListItemLabel name="Participant(JSONObject peer)"  type={"void"} />
      <MethodListItemLabel name="Participant(String id, String displayName, boolean isLocal)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="getId()"  type={"String"} />
      <MethodListItemLabel name="getDisplayName()"  type={"String"} />
      <MethodListItemLabel name="getQuality()"  type={"String"} />
      <MethodListItemLabel name="isLocal()"  type={"boolean"} />
      <MethodListItemLabel name="getStreams()"  type={"Map<String, Stream>"} />
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
      <MethodListItemLabel name="enableMic()"  type={"void"} />
      <MethodListItemLabel name="disableMic()"  type={"void"} />
      <MethodListItemLabel name="disableWebcam()"  type={"void"} />
      <MethodListItemLabel name="remove()"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
