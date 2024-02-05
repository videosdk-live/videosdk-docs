---
title: Remove participant from the meeting - React JS SDK
hide_title: false
hide_table_of_contents: false
description: Remove a participant or a peer from the meeting while it is still in progress. It helps in meeting moderation.
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - remove participant
  - block participant 
  - react js
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant - Javascript

When hosting a meeting, it's essential for the host to have the capability to to remove a participant from the meeting. This can be useful in various scenarios where a participant is causing disturbance, behaving inappropriately, or is not following meeting guidelines. This guide focuses on this very aspect of removing a particpant from a meeting.

VideoSDK provides three ways to do so:

1. [Using SDK](#1-using-sdk)
2. [Using VideoSDK Dashboard](#2-using-videosdk-dashboard)
3. [Using Rest API](#3-using-rest-api)

## 1. Using SDK

### `remove()`

The `remove()` method allows for the removal of a participant during an on-going session. This can be helpful when moderation is required in a particular meeting.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

// remove remote participant
participant?.remove();
```

### Events associated with remove()

Following callbacks are received when a participant is removed from the meeting.

- The participant who was removed from the meeting will receive a callback on [`meeting-left`](/javascript/api/sdk-reference/meeting-class/events#meeting-left) event of the **Meeting** Class.
- All other [remote participants](../concept-and-architecture#2-participant) will receive a callback on [`participant-left`](/javascript/api/sdk-reference/meeting-class/events#participant-left) event with the Participant object.

## 2. Using VideoSDK Dashboard

- For removing a participant using the VideoSDK Dashboard, navigate to the session page on [VideoSDK Dashboard](https://app.videosdk.live/meetings/sessions). Select the specific meeting, and from the list of participants, choose the participant you wish to remove. Utilize the provided options to remove the selected participant from the meeting.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/kickout-user.mp4' width={"100%"}/>

</div>

## 3. Using Rest API

- You can also remove a particular participant from the meeting [using the REST API](/api-reference/realtime-communication/remove-participant).
- To employ this method, you need the `sessionId` of the meeting and the `participantId` of the individual you intend to remove.

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [remove()](/javascript/api/sdk-reference/participant-class/methods#remove)
- [meeting-left](/javascript/api/sdk-reference/meeting-class/events#meeting-left)
- [participant-left](/javascript/api/sdk-reference/meeting-class/events#participant-left)
