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

- [getId()](./properties#getid)

</div>
<div>

- [getDisplayName()](./properties#getdisplayname)

</div>
<div>

- [getQuality()](./properties#getquality)

</div>

<div>

- [isLocal()](./properties#islocal)

</div>

<div>

- [getStreams()](./properties#getstreams)

</div>

</div>

## Participant Methods

<div class="links-grid">

<div>

- [enableWebcam()](./methods#enablewebcam)

</div>
<div>

- [disableWebcam()](./methods#disablewebcam)

</div>
<div>

- [enableMic()](./methods#enablemic)

</div>
<div>

- [disableMic()](./methods#disablemic)

</div>
<div>

- [remove()](./methods#remove)

</div>
<div>

- [setQuality()](./methods#setquality)

</div>
<div>

</div>

</div>

## Participant Events

<div class="links-grid">

<div>

- [onStreamEnabled](./participant-event-listener-class#onstreamenabled)

</div>
<div>

- [onStreamDisabled](./participant-event-listener-class#onstreamdisabled)

</div>

</div>

</div>