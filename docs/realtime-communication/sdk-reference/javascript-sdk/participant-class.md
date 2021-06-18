---
sidebar_position: 1
---

# Participant Class

Participant class includes all the properties, methods and events related to all the participants joined in a particular meeting.

## Participant Class

### Get local and remote participants

You can get the local streams and participant meta from meeting.localParticipant. And a Map of joined participants is always available via meeting.participants.

```js title="Javascript"
const localParticipant = meeting.localParticipant;
const participants = meeting.participants;
```

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties" >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="id" type={"string"} />
      <MethodListItemLabel name="displayName" type={"string"} />
      <MethodListItemLabel name="streams"  type={"Map<string, Stream>"}  />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel name="stream-enabled" type={"event"} />
      <MethodListItemLabel name="stream-disabled" type={"event"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel name="setQuality(quality: low | med | high)"  type={"undefined"} />
      <MethodListItemLabel name="enableMic()"  type={"undefined"} />
      <MethodListItemLabel name="disableMic()"  type={"undefined"} />
      <MethodListItemLabel name="enableWebcam()"  type={"undefined"} />
      <MethodListItemLabel name="disableWebcam()"  type={"undefined"} />
      <MethodListItemLabel name="on(eventType: string)"  type={"undefined"} />
      <MethodListItemLabel name="off(eventType: string)"  type={"undefined"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Example

```js title="Javascript"
meeting.on("participant-joined", (participant) => {
  setParticipants(new Map(meeting.participants));
});
meeting.on("participant-left", (participant) => {
  setParticipants(new Map(meeting.participants));
});
```
