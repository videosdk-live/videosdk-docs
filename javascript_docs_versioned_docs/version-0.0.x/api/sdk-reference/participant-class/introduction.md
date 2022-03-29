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

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [id](./properties.md#id)

</div>
<div class="col col--4 margin-bottom--lg" >

- [displayName](./properties.md#displayname)

</div>
<div class="col col--4 margin-bottom--lg" >

- [streams](./properties.md#streams)

</div>

</div>

## Participant Methods

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [enableWebcam](./methods.md#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam](./methods.md#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableMic](./methods.md#enablemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableMic](./methods.md#disablemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [setQuality](./methods.md#setquality)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pin](./methods.md#pin)

</div>
<div class="col col--4 margin-bottom--lg" >

- [unpin](./methods.md#unpin)

</div>

</div>

## Participant Events

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [stream-enabled](./events.md#stream-enabled)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stream-disabled](./events.md#stream-disabled)

</div>

</div>

</div>
