---
title: Participant class for android SDK.
hide_title: false
hide_table_of_contents: false
description: The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customization.
sidebar_label: Participant Class
pagination_label: Participant Class
keywords:
  - RTC Android
  - Participant Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-class
---

# Participant Class - Android

## Introduction

The `Participant Class` includes methods and events for participants and their associated video & audio streams, data channels and UI customization.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

## Properties

### getId()

- `getId()` will return participant's Id
- return type : `String`

### getDisplayName()

- `getDisplayName()` will return name of participant
- return type : `String`

### getQuality()

- `getQuality()` will return quality of participant's video stream
- return type : `String`

### isLocal()

- `isLocal()` will return `true` if participant is Local,`false` otherwise
- return type : `boolean`

### getStreams()

- `getStreams()` will return streams of participant
- return type : `Map<String, Stream>`
- Map contains `streamId` as key and `stream` as value

## Events

### addEventListener(ParticipantEventListener listener)

- By using `addEventListener(ParticipantEventListener listener)`, we can add listener to the List of `ParticipantEventListener`
- return type : `void`

### removeEventListener(ParticipantEventListener listener)

- By using `removeEventListener(ParticipantEventListener listener)`, we can remove listener from List of `ParticipantEventListener`
- return type : `void`

### removeAllListeners()

- By using `removeAllListeners()`, we can remove all listener from List
- return type : `void`

## Methods

### enableMic()

- By using `enableMic()` function, a participant can enable the Mic of any particular Remote Participant
- When `enableMic()` is called,
  - Local Participant will receive a callback on `streamEnabled()` of `ParticipantEventListener` class
  - Remote Participant will receive a callback for `onMicRequested()` and once the remote participant accepts the request, mic will be enabled for that participant
- return type : `void`

### disableMic()

- By using `disableMic()` function, a participant can disable the Mic of any particular Remote Participant
- When `enableMic()` is called,
  - Local Participant will receive a callback on `streamDisabled()` of `ParticipantEventListener` class
  - Remote Participant will receive a callback on `streamDisabled()` of `ParticipantEventListener` class
- return type : `void`

### enableWebcam()

- By using `enableWebcam()` function, a participant can enable the Webcam of any particular Remote Participant
- When `enableWebcam()` is called,
  - Local Participant will receive a callback on `streamEnabled()` of `ParticipantEventListener` class
  - Remote Participant will receive a callback for `webcamRequested()` and once the remote participant accepts the request, webcam will be enabled for that participant
- return type : `void`

### disableWebcam()

- By using `disableWebcam()` function, a participant can disable the Webcam of any particular Remote Participant
- When `disableWebcam()` is called,
  - Local Participant will receive a callback on `streamDisabled()` of `ParticipantEventListener` class
  - Remote Participant will receive a callback on `streamDisabled()` of `ParticipantEventListener` class
- return type : `void`

### remove()

- By using `remove()` function, a participant can remove any particular Remote Participant
- When `remove()` is called,
  - Local Participant will receive a callback on `meetingLeft()`
  - Remote Participant will receive a callback on `participantLeft()`
- return type : `void`

### setQuality()

- By using `setQuality()`,you can set quality of participant's video stream
- return type : `void`
