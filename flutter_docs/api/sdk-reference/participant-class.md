---
title: Participant class for IOS SDK.
hide_title: false
hide_table_of_contents: false
description: The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customisation.
sidebar_label: Participant Class
pagination_label: Participant Class
keywords:
  - RTC IOS
  - Participant Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-class
---

# Participant Class

## Using Participant Class

The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customisation.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel description={"id of participant"} name="id"  type={"String"}  />
      <MethodListItemLabel description={"display name of participant"} name="displayName"  type={"String"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel description={"participant event handler"} name="on(<event-name>, <event-handler>)"  type={"Function"} />
      <MethodListItemLabel description={"Streams of participant i.e. audio stream, video stream and share stream"} name="streams"  type={"Map<String, Stream>"} />
      <MethodListItemLabel description={"Request participant to enable webcam the participant"} name="enableWebcam()"  type={"Function"} />
      <MethodListItemLabel description={"Disable webcam of the participant"} name="disableWebcam()"  type={"Function"} />
      <MethodListItemLabel description={"Request participant to enable mic the participant"} name="enableMic()"  type={"Function"} />
      <MethodListItemLabel description={"Disable mic of the participant"} name="disableMic()"  type={"Function"} />
      <MethodListItemLabel description={"Set video quality of the participant"} name="setQuality(<quality>)"  type={"Function"} option={"'low' | 'med' | 'high'"} />
      <MethodListItemLabel description={"Remove the participant from meeting session"} name="remove()"  type={"Function"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel description={"This event will be emitted when any stream i.e. audio, video or sharescreen, of the participant is enabled."} name="stream-enabled"  type={"Stream"} />
      <MethodListItemLabel description={"This event will be emitted when any stream i.e. audio, video or sharescreen, of the participant is disabled."} name="stream-disabled"  type={"Stream"} />
      <MethodListItemLabel description={"This event will be emitted when any stream i.e. audio, video or sharescreen, of the participant is paused."} name="stream-paused"  type={"Stream"} />
      <MethodListItemLabel description={"This event will be emitted when any stream i.e. audio, video or sharescreen, of the participant is resumed."} name="stream-resumed"  type={"Stream"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

<!--

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListGroup>
        <MethodListHeading heading="addStream(stream): void" />
        <MethodListItemLabel name="stream"  type={"MediaStream"} />
      </MethodListGroup>
      <MethodListGroup>
        <MethodListHeading heading="removeStream(streamId): void" />
        <MethodListItemLabel name="streamId"  type={"String"} />
      </MethodListGroup>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup> -->

## Example

```js title="Play with Participant instance"
// get displayName
participant.displayName;

// Set video quality of that participant to low
participant.setQuality("low");

// Adding event listners in participant
participant.on("stream-enabled", (Stream stream) {
  // this stream is enabled
});

participant.on("stream-disabled", (Stream stream) {
  // this stream is disabled
});
```
