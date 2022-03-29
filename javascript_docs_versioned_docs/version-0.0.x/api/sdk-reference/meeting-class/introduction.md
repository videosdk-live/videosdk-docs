---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK Meeting Class
title: Video SDK Meeting Class
---

<div class="sdk-api-ref">

## Introduction

The `Meeting` class includes properties, methods and events for managing a meeting, participants video, audio and share streams, messaging and UI customisation.

import LinksGrid from "../../../../../src/theme/LinksGrid";
import properties from "./../data/meeting-class/properties.json";
import methods from "./../data/meeting-class/methods.json";
import events from "./../data/meeting-class/events.json";

## Meeting Properties

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [id](./properties.md#id)

</div>
<div class="col col--4 margin-bottom--lg" >

- [activeSpeakerId](./properties.md#activespeakerid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [activePresenterId](./properties.md#activepresenterid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localParticipant](./properties.md#localparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [participants](./properties.md#participants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pubsub](./pubsub)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connections](./properties.md#connections)

</div>

</div>

## Meeting Methods

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [join](./methods.md#join)

</div>
<div class="col col--4 margin-bottom--lg" >

- [leave](./methods.md#leave)

</div>
<div class="col col--4 margin-bottom--lg" >

- [end](./methods.md#end)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableWebcam](./methods.md#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam](./methods.md#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [unmuteMic](./methods.md#unmutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [muteMic](./methods.md#mutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableScreenShare](./methods.md#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableScreenShare](./methods.md#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startRecording](./methods.md#startrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopRecording](./methods.md#stoprecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startLiveStream](./methods.md#startlivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopLiveStream](./methods.md#startlivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startHls](./methods.md#starthls)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopHls](./methods.md#stophls)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getWebcams](./methods.md#getwebcams)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeWebcam](./methods.md#changewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [setWebcamQuality](./methods.md#setwebcamquality)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getMics](./methods.md#getmics)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeMic](./methods.md#changemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connectTo](./methods.md#connectto)

</div>
<div class="col col--4 margin-bottom--lg" >

- [on](./methods.md#on)

</div>
<div class="col col--4 margin-bottom--lg" >

- [off](./methods.md#off)

</div>

</div>

## Meeting Events

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [meeting-joined](./events.md#meeting-joined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [meeting-left](./events.md#meeting-left)

</div>
<div class="col col--4 margin-bottom--lg" >

- [participant-joined](./events.md#participant-joined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [participant-left](./events.md#participant-left)

</div>
<div class="col col--4 margin-bottom--lg" >

- [speaker-changed](./events.md#speaker-changed)

</div>
<div class="col col--4 margin-bottom--lg" >

- [presenter-changed](./events.md#presenter-changed)

</div>
<div class="col col--4 margin-bottom--lg" >

- [error](./events.md#error)

</div>
<div class="col col--4 margin-bottom--lg" >

- [entry-requested](./events.md#entry-requested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [entry-responded](./events.md#entry-responded)

</div>
<div class="col col--4 margin-bottom--lg" >

- [webcam-requested](./events.md#webcam-requested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [mic-requested](./events.md#mic-requested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [recording-started](./events.md#recording-started)

</div>
<div class="col col--4 margin-bottom--lg" >

- [recording-stopped](./events.md#recording-stopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [livestream-started](./events.md#livestream-started)

</div>
<div class="col col--4 margin-bottom--lg" >

- [livestream-stopped](./events.md#livestream-stopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [hls-started](./events.md#hls-started)

</div>
<div class="col col--4 margin-bottom--lg" >

- [hls-stopped](./events.md#hls-stopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connection-open](./events.md#connection-open)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connection-close](./events.md#connection-close)

</div>
<div class="col col--4 margin-bottom--lg" >

- [switch-meeting](./events.md#switch-meeting)

</div>

</div>

</div>
