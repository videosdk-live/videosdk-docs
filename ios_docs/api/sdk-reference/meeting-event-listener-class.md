---
title: MeetingEventListener Class for IOS SDK.
hide_title: false
hide_table_of_contents: false
description: The `MeetingEventListener Class` includes list of events which can be useful for the design custom user interface.
sidebar_label: MeetingEventListener Class
pagination_label: MeetingEventListener Class
keywords:
  - RTC IOS
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
      <MethodListItemLabel name="onParticipantJoined(_ participant: Participant)"  type={"void"} />
      <MethodListItemLabel name="onParticipantLeft(_ participant: Participant)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Example of onParticipantJoined()"
extension MeetingViewController: MeetingEventListener {
  func onParticipantJoined(_ participant: Participant) {
    // Display participant on grid
  }
}
```
