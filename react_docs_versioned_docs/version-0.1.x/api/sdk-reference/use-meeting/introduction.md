---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK useMeeting Hook
title: Video SDK useMeeting Hook
---

<div class="sdk-api-ref">

## Introduction

`useMeeting` hook abtracts meeting class and takes all the events as parameters and returns all the properties and methods to work meeting instance.

## Properties

<div class="row ">
<div class="col col--4 margin-bottom--sm">

- [meetingId](./properties#meetingid)

</div>

<div class="col col--4 margin-bottom--sm">

- [meeting](./properties#meeting)

</div>

<div class="col col--4 margin-bottom--sm">

- [localParticipant](./properties#localparticipant)

</div>
<div class="col col--4 margin-bottom--sm">

- [mainParticipant](./properties#mainparticipant)

</div>
<div class="col col--4 margin-bottom--sm">

- [onMainParticipantChanged](./properties#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--sm">

- [activeSpeakerId](./properties#activespeakerid)

</div>
<div class="col col--4 margin-bottom--sm">

- [presenterId](./properties#presenterid)

</div>
<div class="col col--4 margin-bottom--sm">

- [pinnedParticipants](./properties#pinnedparticipants)

</div>
<div class="col col--4 margin-bottom--sm">

- [participants](./properties#participants)

</div>
<div class="col col--4 margin-bottom--sm">

- [localMicOn](./properties#localmicon)

</div>
<div class="col col--4 margin-bottom--sm">

- [localWebcamOn](./properties#localwebcamon)

</div>
<div class="col col--4 margin-bottom--sm">

- [localScreenShareOn](./properties#localscreenshareon)

</div>
<div class="col col--4 margin-bottom--sm">

- [isRecording](./properties#isrecording)

</div>
<div class="col col--4 margin-bottom--sm">

- [isLiveStreaming](./properties#islivestreaming)

</div>
<div class="col col--4 margin-bottom--sm">

- [connections](./properties#connections)

</div>
<div class="col col--4 margin-bottom--sm">

- [messages](./properties#messages)

</div>
</div>

## Methods

<div class="row">
<div class="col col--4 margin-bottom--sm">

- [join](./methods#join)

</div>
<div class="col col--4 margin-bottom--sm">

- [leave](./methods#leave)

</div>
<div class="col col--4 margin-bottom--sm">

- [end](./methods#end)

</div>
<div class="col col--4 margin-bottom--sm">

- [enableWebcam](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--sm">

- [disableWebcam](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--sm">

- [toggleWebcam](./methods#togglewebcam)

</div>
<div class="col col--4 margin-bottom--sm">

- [unmuteMic](./methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--sm">

- [muteMic](./methods#mutemic)

</div>
<div class="col col--4 margin-bottom--sm">

- [toggleMic](./methods#togglemic)

</div>
<div class="col col--4 margin-bottom--sm">

- [enableScreenShare](./methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm">

- [disableScreenShare](./methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm">

- [toggleScreenShare](./methods#togglescreenshare)

</div>
<div class="col col--4 margin-bottom--sm">

- [startRecording](./methods#startrecording)

</div>
<div class="col col--4 margin-bottom--sm">

- [stopRecording](./methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--sm">

- [startLivestream](./methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--sm">

- [stopLivestream](./methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--sm">

- [startHls](./methods#starthls)

</div>
<div class="col col--4 margin-bottom--sm">

- [stopHls](./methods#stophls)

</div>
<div class="col col--4 margin-bottom--sm">

- [getWebcams](./methods#getwebcams)

</div>
<div class="col col--4 margin-bottom--sm">

- [changeWebcam](./methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--sm">

- [getMics](./methods#getmics)

</div>
<div class="col col--4 margin-bottom--sm">

- [changeMic](./methods#changemic)

</div>
<div class="col col--4 margin-bottom--sm">

- [startVideo](./methods#startvideo)

</div>
<div class="col col--4 margin-bottom--sm">

- [stopVideo](./methods#stopvideo)

</div>
<div class="col col--4 margin-bottom--sm">

- [pauseVideo](./methods#pausevideo)

</div>
<div class="col col--4 margin-bottom--sm">

- [resumeVideo](./methods#resumevideo)

</div>
<div class="col col--4 margin-bottom--sm">

- [seekVideo](./methods#seekvideo)

</div>
<div class="col col--4 margin-bottom--sm">

- [connectTo](./methods#connectto)

</div>
</div>

## Event Callbacks

<div class="row">
<div class="col col--4 margin-bottom--sm" >

- [onParticipantJoined](./events#onparticipantjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onParticipantLeft](./events#onparticipantleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onSpeakerChanged](./events#onspeakerchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onPresenterChanged](./events#onpresenterchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMainParticipantChanged](./events#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onEntryRequested](./events#onentryrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStarted](./events#onrecordingstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStopped](./events#onrecordingstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMeetingJoined](./events#onmeetingjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMeetingLeft](./events#onmeetingleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLiveStreamStarted](./events#onlivestreamstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLiveStreamStopped](./events#onlivestreamstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onHlsStarted](./events#onhlsstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onHlsStopped](./events#onhlsstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onVideoStateChanged](./events#onvideostatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onVideoSeeked](./events#onvideoseeked)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onPinStateChanged](./events#onpinstatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onWebcamRequested](./events#onwebcamrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMicRequested](./events#onmicrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onSwitchMeeting](./events#onswitchmeeting)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onConnectionOpen](./events#onconnectionopen)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onConnectionClose](./events#onconnectionclose)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onError](./events#onerror)

</div>
</div>

</div>
