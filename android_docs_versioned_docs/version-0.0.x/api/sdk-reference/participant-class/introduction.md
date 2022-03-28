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

You can get the local streams and participant meta from `meeting.getLocalParticipant()`. And a Map of joined participants is always available via `meeting.getParticipants()`

```js title="Javascript"
Participant localParticipant = meeting.getLocalParticipant();
Map<String, Participant> participants = meeting.getParticipants();
```

## Participant Properties

<div class="links-grid">

<div>

- [getId()](./properties.md#getId())

</div>
<div>

- [getDisplayName()](./properties.md#getDisplayName())

</div>
<div>

- [getQuality()](./properties.md#getQuality())

</div>

<div>

- [isLocal()](./properties.md#isLocal())

</div>

<div>

- [getStreams()](./properties.md#getStreams())

</div>

</div>

## Participant Methods

<div class="links-grid">

<div>

- [enableWebcam()](./methods.md#enablewebcam())

</div>
<div>

- [disableWebcam()](./methods.md#disablewebcam())

</div>
<div>

- [enableMic()](./methods.md#enablemic())

</div>
<div>

- [disableMic()](./methods.md#disablemic())

</div>
<div>

- [remove()](./methods.md#remove())

</div>
<div>

- [setQuality()](./methods.md#setquality())

</div>
<div>

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