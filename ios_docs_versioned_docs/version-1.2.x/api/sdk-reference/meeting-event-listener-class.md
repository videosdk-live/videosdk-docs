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
      <MethodListItemLabel name="onRecordingStarted()"  type={"void"} />
      <MethodListItemLabel name="onRecordingStoppped()"  type={"void"} />
      <MethodListItemLabel name="onLivestreamStarted()"  type={"void"} />
      <MethodListItemLabel name="onLivestreamStopped()"  type={"void"} />
      <MethodListItemLabel name="onSpeakerChanged(participantId: String?)"  type={"void"} />
      <MethodListItemLabel name="onMicRequested(participantId: String?, accept: @escaping () -> Void, reject: @escaping () -> Void)"  type={"void"} />
      <MethodListItemLabel name="onWebcamRequested(participantId: String?, accept: @escaping () -> Void, reject: @escaping () -> Void)"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Example of onParticipantJoined()"
extension MeetingViewController: MeetingEventListener {
    /// Called after meeting starts
    func onMeetingJoined()
    
    /// Called after meeting ends
    func onMeetingLeft()
    
    /// Called after new participant joins
    /// - Parameter participant: participant object
    func onParticipantJoined(_ participant: Participant)
    
    /// Called after participant leaves
    /// - Parameter participant: participant object
    func onParticipantLeft(_ participant: Participant)
    
    /// Called after recording starts
    func onRecordingStarted()
    
    /// Called after recording stops
    func onRecordingStoppped()
    
    /// Called after livestream starts
    func onLivestreamStarted()
    
    /// Called after livestream stops
    func onLivestreamStopped()
    
    /// Called when speaker is changed
    /// Receive participant id of the speaker
    /// participant id will be 'nil' when no one is speaking
    func onSpeakerChanged(participantId: String?)
    
    /// Called when host requests to start audio
    /// Call accept to start audio/mic
    /// Call reject to cancel the request
    func onMicRequested(participantId: String?, accept: @escaping () -> Void, reject: @escaping () -> Void)
    
    /// Called when host requests to start video
    /// Call accept to start video/camera
    /// Call reject to cancel the request
    func onWebcamRequested(participantId: String?, accept: @escaping () -> Void, reject: @escaping () -> Void)
}
```
