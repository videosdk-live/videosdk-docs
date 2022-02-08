---
title: ParticipantEventListener Class for IOS SDK.
hide_title: false
hide_table_of_contents: false
description: The `ParticipantEventListener Class` includes list of events which can be useful for the design custom user interface.
sidebar_label: ParticipantEventListener Class
pagination_label: ParticipantEventListener Class
keywords:
  - RTC IOS
  - ParticipantEventListener Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-event-listener-class
---

# ParticipantEventListener Class

## using ParticipantEventListener Class

The `ParticipantEventListener Class` is responsible for listening to all the events that are related to `Participant Class`.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Listeners

<MethodListGroup>
  <MethodListItemLabel name="__listeners" >
    <MethodListGroup>
      <MethodListHeading heading="Listeners" />
      <MethodListItemLabel name="onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant)"  type={"void"} />
      <MethodListItemLabel name="onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

```js title="Example of onParticipantJoined()"
extension MeetingViewController: ParticipantEventListener {
  func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {
    // Display stream in UI view
  }
}
```
