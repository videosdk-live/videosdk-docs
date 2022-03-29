---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK Meeting Class
title: Video SDK Meeting Class
---

<div class="sdk-api-ref">

## Introduction

The `Meeting` class includes properties, methods and meeting-event-listener-class for managing a meeting, participants, video, audio and share streams, messaging and UI customisation.

import LinksGrid from "../../../../../src/theme/LinksGrid";
import properties from "./../data/meeting-class/properties.json";
import methods from "./../data/meeting-class/methods.json";
import events from "./../data/meeting-class/events.json";

## Meeting Properties

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [getmeetingId()](./properties#getmeetingId)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getLocalParticipant()](./properties#getlocalparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getParticipants()](./properties#getparticipants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pubSub](./properties#pubsub)

</div>

</div>

## Meeting Methods

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [join()](./methods#join)

</div>
<div class="col col--4 margin-bottom--lg" >

- [leave()](./methods#leave)

</div>
<div class="col col--4 margin-bottom--lg" >

- [end()](./methods#end)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableWebcam()](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam()](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [unmuteMic()](./methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [muteMic()](./methods#mutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableScreenShare()](./methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableScreenShare()](./methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startRecording()](./methods#startrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopRecording()](./methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startLiveStream()](./methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopLiveStream()](./methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getMics()](./methods#getmics)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeMic()](./methods#changemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [setAudioDeviceChangeListener()](./methods#setaudiodevicechangelistener)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeWebcam()](./methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [addEventListener()](./methods#addeventlistener)

</div>
<div class="col col--4 margin-bottom--lg" >

- [removeEventListener()](./methods#removeeventlistener)

</div>
<div class="col col--4 margin-bottom--lg" >

- [removeAllListeners()](./methods#removealllisteners)

</div>

</div>

## Meeting Events

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [onMeetingJoined](./meeting-event-listener-class#meetingjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMeetingLeft](./meeting-event-listener-class#onmeetingleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onParticipantJoined](./meeting-event-listener-class#onparticipantjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onParticipantLeft](./meeting-event-listener-class#onparticipantleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onSpeakerChanged](./meeting-event-listener-class#onspeakerchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onPresenterChanged](./meeting-event-listener-class#onpresenterchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onEntryRequested](./meeting-event-listener-class#onentryrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onEntryResponded](./meeting-event-listener-class#onentryresponded)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onWebcamRequested](./meeting-event-listener-class#onwebcamrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMicRequested](./meeting-event-listener-class#onmicrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onRecordingStarted](./meeting-event-listener-class#onrecordingstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onRecordingStopped](./meeting-event-listener-class#onrecordingstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onLivestreamStarted](./meeting-event-listener-class#onlivestreamstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onLivestreamStopped](./meeting-event-listener-class#onlivestreamstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onExternalCallStarted](./meeting-event-listener-class#onexternalcallstarted)

</div>

</div>

</div>
