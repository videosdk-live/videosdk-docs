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

<div class="row">
<div class="col col--4 margin-bottom--lg" >

- [meetingId](./properties#meetingid)

</div>

<div class="col col--4 margin-bottom--lg" >

- [meeting](./properties#meeting)

</div>

<div class="col col--4 margin-bottom--lg" >

- [localParticipant](./properties#localparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [mainParticipant](./properties#mainparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMainParticipantChanged](./properties#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [activeSpeakerId](./properties#activespeakerid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [presenterId](./properties#presenterid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pinnedParticipants](./properties#pinnedparticipants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [participants](./properties#participants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localMicOn](./properties#localmicon)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localWebcamOn](./properties#localwebcamon)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localScreenShareOn](./properties#localscreenshareon)

</div>
<div class="col col--4 margin-bottom--lg" >

- [isRecording](./properties#isrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [isLiveStreaming](./properties#islivestreaming)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connections](./properties#connections)

</div>
<div class="col col--4 margin-bottom--lg" >

- [messages](./properties#messages)

</div>
</div>

## Methods

<div class="row">
<div class="col col--4 margin-bottom--lg" >

- [join](./methods#join)

</div>
<div class="col col--4 margin-bottom--lg" >

- [leave](./methods#leave)

</div>
<div class="col col--4 margin-bottom--lg" >

- [end](./methods#end)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableWebcam](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [toggleWebcam](./methods#togglewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [unmuteMic](./methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [muteMic](./methods#mutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [toggleMic](./methods#togglemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableScreenShare](./methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableScreenShare](./methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [toggleScreenShare](./methods#togglescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startRecording](./methods#startrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopRecording](./methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startLivestream](./methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopLivestream](./methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startHls](./methods#starthls)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopHls](./methods#stophls)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getWebcams](./methods#getwebcams)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeWebcam](./methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getMics](./methods#getmics)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeMic](./methods#changemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startVideo](./methods#startvideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopVideo](./methods#stopvideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pauseVideo](./methods#pausevideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [resumeVideo](./methods#resumevideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [seekVideo](./methods#seekvideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connectTo](./methods#connectto)

</div>
</div>

## Event Callbacks

<div class="row">
<div class="col col--4 margin-bottom--lg" >

- [onParticipantJoined](./events#onparticipantjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onParticipantLeft](./events#onparticipantleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onSpeakerChanged](./events#onspeakerchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onPresenterChanged](./events#onpresenterchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMainParticipantChanged](./events#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onEntryRequested](./events#onentryrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onRecordingStarted](./events#onrecordingstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onRecordingStopped](./events#onrecordingstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMeetingJoined](./events#onmeetingjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMeetingLeft](./events#onmeetingleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onLiveStreamStarted](./events.md#onlivestreamstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onLiveStreamStopped](./events.md#onlivestreamstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onHlsStarted](./events.md#onhlsstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onHlsStopped](./events.md#onhlsstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onVideoStateChanged](./events#onvideostatechanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onVideoSeeked](./events#onvideoseeked)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onPinStateChanged](./events#onpinstatechanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onWebcamRequested](./events#onwebcamrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMicRequested](./events#onmicrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onSwitchMeeting](./events#onswitchmeeting)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onConnectionOpen](./events#onconnectionopen)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onConnectionClose](./events#onconnectionclose)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onError](./events#onerror)

</div>
</div>

</div>
