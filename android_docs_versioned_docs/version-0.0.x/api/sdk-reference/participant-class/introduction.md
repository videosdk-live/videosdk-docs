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

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [getId()](./properties#getid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getDisplayName()](./properties#getdisplayname)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getQuality()](./properties#getquality)

</div>

<div class="col col--4 margin-bottom--lg" >

- [isLocal()](./properties#islocal)

</div>

<div class="col col--4 margin-bottom--lg" >

- [getStreams()](./properties#getstreams)

</div>

</div>

## Participant Methods

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [enableWebcam()](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam()](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableMic()](./methods#enablemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableMic()](./methods#disablemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [remove()](./methods#remove)

</div>
<div class="col col--4 margin-bottom--lg" >

- [setQuality()](./methods#setquality)

</div>
<div class="col col--4 margin-bottom--lg" >

</div>

</div>

## Participant Events

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [onStreamEnabled](./participant-event-listener-class#onstreamenabled)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onStreamDisabled](./participant-event-listener-class#onstreamdisabled)

</div>

</div>

</div>
