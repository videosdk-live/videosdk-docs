---
title: Video SDK Participant Class
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Video SDK Participant Class
---

Participant class includes all the properties, methods and events related to all the participants joined in a particular meeting.

## Get local and remote participants

You can get the local streams and participant meta from meeting.localParticipant. And a Map of joined participants is always available via meeting.participants.

```js title="Javascript"
const localParticipant = meeting.localParticipant;
const participants = meeting.participants;
```

## Participant Properties

- [id](./)
- [displayName](./)
- [streams](./)

## Participant Methods

- [enableWebcam](./)
- [disableWebcam](./)
- [enableMic](./)
- [disableMic](./)
- [setQuality](./)
- [pin](./)
- [unpin](./)

## Participant Events

- [stream-enabled](./)
- [stream-disabled](./)
