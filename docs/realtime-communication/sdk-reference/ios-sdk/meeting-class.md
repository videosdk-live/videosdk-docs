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

The `Meeting Class` includes methods and events for managing meetings, participants, video & audio streams, data channels and UI customization.

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
      <MethodListItemLabel name="participants"  type={"[String : Participant]"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

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
      <MethodListItemLabel name="muteMic()"  type={"void"} />
      <MethodListItemLabel name="unmuteMic()"  type={"void"} />
      <MethodListItemLabel name="enableWebcam()"  type={"void"} />
      <MethodListItemLabel name="disableWebcam()"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Play with meeting instance"
// Add listeners
meeting?.addEventListener(self);

// Join the meeting
meeting?.join();

// Get local participants
meeting?.localParticipant;
```
