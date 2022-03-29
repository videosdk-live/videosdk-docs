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

```js title="swift"
let localParticipant = meeting.localParticipant;
let participants = meeting.participants;
```

## Participant Properties

<div class="links-grid">

<div>

- [id](./properties#id)

</div>
<div>

- [displayName](./properties#displayname)

</div>
<div>

- [videoQuality](./properties#videoquality)

</div>
<div>

- [isLocal](./properties#islocal)

</div>
<div>

- [streams](./properties#streams)

</div>

</div>

## Participant Methods

<div class="links-grid">

<div>

- [enableWebcam](./methods#enablewebcam)

</div>
<div>

- [disableWebcam](./methods#disablewebcam)

</div>
<div>

- [enableMic](./methods#enablemic)

</div>
<div>

- [disableMic](./methods#disablemic)

</div>
<div>

- [setQuality](./methods#setquality)

</div>
<div>

- [remove](./methods#remove)

</div>

</div>

## Participant Events

<div class="links-grid">

<div>

- [onStreamEnabled](./events#onStreamEnabled)

</div>
<div>

- [onStreamDisabled](./events#onStreamDisabled)

</div>

</div>

</div>
