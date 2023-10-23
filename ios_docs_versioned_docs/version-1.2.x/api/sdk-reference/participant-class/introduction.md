---
title: Video SDK Participant Class
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Video SDK Participant Class
---

# Video SDK Participant Class - iOS

<div class="sdk-api-ref">

import properties from './../data/participant-class/properties.json'
import methods from './../data/participant-class/methods.json'
import events from './../data/participant-class/events.json'
import LinksGrid from '../../../../../src/theme/LinksGrid'

Participant class includes all the properties, methods and events related to all the participants joined in a particular meeting.

## Get local and remote participants

You can get the local streams and participant meta from meeting.localParticipant. And a Map of joined participants is always available via meeting.participants.

```js title="swift"
let localParticipant = meeting.localParticipant;
let participants = meeting.participants;
```

## Participant Properties

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [id](./properties#id)

</div>
<div class="col col--4 margin-bottom--sm" >

- [displayName](./properties#displayname)

</div>
<div class="col col--4 margin-bottom--sm" >

- [videoQuality](./properties#videoquality)

</div>
<div class="col col--4 margin-bottom--sm" >

- [isLocal](./properties#islocal)

</div>
<div class="col col--4 margin-bottom--sm" >

- [streams](./properties#streams)

</div>

</div>

## Participant Methods

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [enableWebcam](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableWebcam](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableMic](./methods#enablemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableMic](./methods#disablemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [setQuality](./methods#setquality)

</div>
<div class="col col--4 margin-bottom--sm" >

- [remove](./methods#remove)

</div>

</div>

## Participant Events

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [onStreamEnabled](./events#onstreamenabled)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onStreamDisabled](./events#onstreamdisabled)

</div>

</div>

</div>
