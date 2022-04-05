---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK Meeting Class
title: Video SDK Meeting Class
---

<div class="sdk-api-ref">

## Introduction

The `Meeting` class includes properties, methods and meeting-event-listener-class for managing a meeting, participants, video, audio and share streams, messaging and UI customization.

import LinksGrid from "../../../../../src/theme/LinksGrid";
import properties from "./../data/meeting-class/properties.json";
import methods from "./../data/meeting-class/methods.json";
import events from "./../data/meeting-class/events.json";

## Meeting Properties

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [getmeetingId()](./properties#getmeetingId)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getLocalParticipant()](./properties#getlocalparticipant)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getParticipants()](./properties#getparticipants)

</div>
<div class="col col--4 margin-bottom--sm" >

- [pubSub](./properties#pubsub)

</div>

</div>

## Meeting Methods

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [join()](./methods#join)

</div>
<div class="col col--4 margin-bottom--sm" >

- [leave()](./methods#leave)

</div>
<div class="col col--4 margin-bottom--sm" >

- [end()](./methods#end)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableWebcam()](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableWebcam()](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [unmuteMic()](./methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [muteMic()](./methods#mutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableScreenShare()](./methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableScreenShare()](./methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startRecording()](./methods#startrecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopRecording()](./methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startLiveStream()](./methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopLiveStream()](./methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getMics()](./methods#getmics)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeMic()](./methods#changemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [setAudioDeviceChangeListener()](./methods#setaudiodevicechangelistener)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeWebcam()](./methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [addEventListener()](./methods#addeventlistener)

</div>
<div class="col col--4 margin-bottom--sm" >

- [removeEventListener()](./methods#removeeventlistener)

</div>
<div class="col col--4 margin-bottom--sm" >

- [removeAllListeners()](./methods#removealllisteners)

</div>

</div>

## Meeting Events

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [onMeetingJoined](./meeting-event-listener-class#onmeetingjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMeetingLeft](./meeting-event-listener-class#onmeetingleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onParticipantJoined](./meeting-event-listener-class#onparticipantjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onParticipantLeft](./meeting-event-listener-class#onparticipantleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onSpeakerChanged](./meeting-event-listener-class#onspeakerchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onPresenterChanged](./meeting-event-listener-class#onpresenterchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onEntryRequested](./meeting-event-listener-class#onentryrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onEntryResponded](./meeting-event-listener-class#onentryresponded)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onWebcamRequested](./meeting-event-listener-class#onwebcamrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMicRequested](./meeting-event-listener-class#onmicrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStarted](./meeting-event-listener-class#onrecordingstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStopped](./meeting-event-listener-class#onrecordingstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLivestreamStarted](./meeting-event-listener-class#onlivestreamstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLivestreamStopped](./meeting-event-listener-class#onlivestreamstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onExternalCallStarted](./meeting-event-listener-class#onexternalcallstarted)

</div>

</div>

</div>
