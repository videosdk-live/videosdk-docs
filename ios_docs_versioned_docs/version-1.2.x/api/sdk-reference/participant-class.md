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

## using Participant Class

The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customisation.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="id"  type={"String"} />
      <MethodListItemLabel name="displayName"  type={"String"} />
      <MethodListItemLabel name="videoQuality"  type={"String"} />
      <MethodListItemLabel name="isLocal"  type={"Bool"} />
      <MethodListItemLabel name="streams"  type={"[String: MediaStream]"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel name="addEventListener(_ listener: ParticipantEventListener)"  type={"void"} />
      <MethodListItemLabel name="removeEventListener(_ listener: ParticipantEventListener))"  type={"void"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

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
      <MethodListGroup>
        <MethodListHeading heading="removeAllStreams(): void" />
      </MethodListGroup>
      <MethodListGroup>
        <MethodListHeading heading="setQuality(quality): void" />
        <MethodListItemLabel name="quality"  type={"VideoQuality"} />
      </MethodListGroup>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Play with meeting instance"
// Add listeners
participant.addEventListener(self);

// Attach video / audio stream to participant
participant.addStream(stream);

// Removes video / audio stream from the participant
participant.removeStream(stream)

// Removes all streams for the participant
participant.removeAllStreams()

// Setting up the video-quality of participant
participant.setQuality(VideoQuality.high)
```
