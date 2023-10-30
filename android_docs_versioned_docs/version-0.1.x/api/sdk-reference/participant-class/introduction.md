---
title: Video SDK Participant Class
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Video SDK Participant Class
---

# Video SDK Participant Class - Android

<div class="sdk-api-ref">

import properties from './../data/participant-class/properties.json'
import methods from './../data/participant-class/methods.json'
import events from './../data/participant-class/events.json'
import LinksGrid from '../../../../../src/theme/LinksGrid'

Participant class includes all the properties, methods and events related to all the participants joined in a particular meeting.

## Get local and remote participants

You can get the local streams and participant meta from `meeting.getLocalParticipant()`. And a Map of joined participants is always available via `meeting.getParticipants()`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="Javascript"
val localParticipant = meeting!!.getLocalParticipant()
val participants = meeting!!.getParticipants()
```

</TabItem>

<TabItem value="Java">

```js title="Javascript"
Participant localParticipant = meeting.getLocalParticipant();
Map<String, Participant> participants = meeting.getParticipants();
```

</TabItem>

</Tabs>

## Participant Properties

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [getId()](./properties#getid)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getDisplayName()](./properties#getdisplayname)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getQuality()](./properties#getquality)

</div>

<div class="col col--4 margin-bottom--sm" >

- [isLocal()](./properties#islocal)

</div>

<div class="col col--4 margin-bottom--sm" >

- [getStreams()](./properties#getstreams)

</div>

<div class="col col--4 margin-bottom--sm" >

- [getMode()](./properties#getmode)

</div>

<div class="col col--4 margin-bottom--sm" >

- [getMetaData()](./properties#getmetadata)

</div>

</div>

## Participant Methods

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [enableWebcam()](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableWebcam()](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableMic()](./methods#enablemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableMic()](./methods#disablemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [remove()](./methods#remove)

</div>
<div class="col col--4 margin-bottom--sm" >

- [setQuality()](./methods#setquality)

</div>
<div class="col col--4 margin-bottom--sm" >

- [setViewPort()](./methods#setviewport)

</div>
<div class="col col--4 margin-bottom--sm" >

</div>

</div>

## Participant Events

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [onStreamEnabled](./participant-event-listener-class#onstreamenabled)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onStreamDisabled](./participant-event-listener-class#onstreamdisabled)

</div>

</div>

</div>
