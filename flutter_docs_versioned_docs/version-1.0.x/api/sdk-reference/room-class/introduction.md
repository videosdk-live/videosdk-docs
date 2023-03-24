---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK Room Class
title: Video SDK Room Class
---

<div id="tailwind" class="sdk-api-ref">

## Introduction

The `Room` class includes properties, methods and events for managing a VideoSDK Room, participants, video, audio and share streams, messaging and UI customization.

import LinksGrid from '../../../../../src/theme/LinksGrid'
import properties from '../data/properties.json'
import methods from '../data/methods.json'
import events from '../data/events.json'

## Room Properties

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [id](./properties#id)

</div>
<div class="col col--4 margin-bottom--sm" >

- [activeSpeakerId](./properties#activespeakerid)

</div>
<div class="col col--4 margin-bottom--sm" >

- [activePresenterId](./properties#activepresenterid)

</div>

<div class="col col--4 margin-bottom--sm" >

- [camEnabled](./properties#camenabled)

</div>

<div class="col col--4 margin-bottom--sm" >

- [selectedCamId](./properties#selectedCamid)

</div>

<div class="col col--4 margin-bottom--sm" >

- [micEnabled](./properties#micenabled)

</div>

<div class="col col--4 margin-bottom--sm" >

- [hlsState](./properties#hlsstate)

</div>

<div class="col col--4 margin-bottom--sm" >

- [livestreamState](./properties#livestreamstate)

</div>

<div class="col col--4 margin-bottom--sm" >

- [recordingState](./properties#recordingState)

</div>

<div class="col col--4 margin-bottom--sm" >

- [hlsDownstreamUrl](./properties#hlsdownstreamurl)

</div>

<div class="col col--4 margin-bottom--sm" >

- [selectedMicId](./properties#selectedmicid)

</div>
<div class="col col--4 margin-bottom--sm" >

- [localParticipant](./properties#localparticipant)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participants](./properties#participants)

</div>
<div class="col col--4 margin-bottom--sm" >

- [pubSub](./properties#pubsub)

</div>

</div>

## Room Methods

<div class="row">
<div class="col col--4 margin-bottom--sm" >

- [join](./methods#join)

</div>
<div class="col col--4 margin-bottom--sm" >

- [leave](./methods#leave)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableCam](./methods#enablecam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableCam](./methods#disablecam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [unmuteMic](./methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [muteMic](./methods#mutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableScreenShare](./methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableScreenShare](./methods#disablescreenshare)

</div>

<div class="col col--4 margin-bottom--sm" >

- [changeMode](./methods#changemode)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startRecording](./methods#startrecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopRecording](./methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startLivestream](./methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopLivestream](./methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getCameras](./methods#getcameras)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeCam](./methods#changecam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [on](./methods#on)

</div>
</div>

## Room Events

<div class="row">

<div class="col col--4 margin-bottom--sm" >

- [roomJoined](./events#roomjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [roomLeft](./events#roomleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participantJoined](./events#participantjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participantLeft](./events#participantleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [speakerChanged](./events#speakerchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [presenterChanged](./events#presenterchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participantModeChanged](./events#participantmodechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [pinStateChanged](./events#pinstatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [entryRequested](./events#entryrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [entryResponded](./events#entryresponded)

</div>
<div class="col col--4 margin-bottom--sm" >

- [cameraRequested](./events#cameraRequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [micRequested](./events#micrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [recordingStarted](./events#recordingstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [recordingStopped](./events#recordingstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [livestreamStarted](./events#livestreamstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [livestreamStopped](./events#livestreamstopped)

</div>

</div>

</div>
