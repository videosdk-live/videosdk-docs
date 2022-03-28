---
title: Video SDK Participant Class
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Video SDK Participant Class
---

<div class="sdk-api-ref">

import properties from './../data/participant-class/properties.json'
import methods from './../data/participant-class/methods.json'
import events from './../data/participant-class/events.json'
import LinksGrid from '../../../../../src/theme/LinksGrid'

Participant class includes all the properties, methods and events related to all the participants joined in a particular meeting.

## Get local and remote participants

You can get the local streams and participant meta from meeting.localParticipant. And a Map of joined participants is always available via meeting.participants.

```js title="Javascript"
const localParticipant = meeting.localParticipant;
const participants = meeting.participants;
```

## Participant Properties

<div class="links-grid">

<div>

- [id](./properties.md#id)

</div>
<div>

- [displayName](./properties.md#displayname)

</div>
<div>

- [streams](./properties.md#streams)

</div>

</div>

## Participant Methods

<div class="links-grid">

<div>

- [enableWebcam](./methods.md#enablewebcam)

</div>
<div>

- [disableWebcam](./methods.md#disablewebcam)

</div>
<div>

- [enableMic](./methods.md#enablemic)

</div>
<div>

- [disableMic](./methods.md#disablemic)

</div>
<div>

- [setQuality](./methods.md#setquality)

</div>
<div>

- [pin](./methods.md#pin)

</div>
<div>

- [unpin](./methods.md#unpin)

</div>

</div>

## Participant Events

<div class="links-grid">

<div>

- [stream-enabled](./events.md#eventsstream-enabled)

</div>
<div>

- [stream-disabled](./events.md#eventsstream-disabled)

</div>

</div>

</div>
