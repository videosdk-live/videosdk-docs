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

# Remove Participant - Android

This feature in a meeting allows the meeting host or organizer to remove a participant from the meeting. This can be helpful in situations where a participant is causing a disturbance, is behaving inappropriately, or is not following meeting guidelines.

VideoSDK provide three ways to remove participant from meeting.

1. [Using SDK](#1-using-sdk)
2. [Using VideoSDK Dashboard](#2-using-videosdk-dashboard)
3. [Using Rest API](#3-using-rest-api)

## 1. Using SDK

### `remove()`

Remove participant allows removing participant while session is on-going. This can be helpful when moderation in particular meeting is required.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
btnRemoveParticipant!!.setOnClickListener { _: View? ->
  val remoteParticipantId = "<participant-id>"
  // Get specific participant instance
  val participant = meeting!!.participants[remoteParticipantId]
  // Remove participant from active session
  // This will emit an event called "onParticipantLeft" for that particular participant
  participant!!.remove()
}
```

</TabItem>

<TabItem value="Java">

```js
btnRemoveParticipant.setOnClickListener(new View.OnClickListener() {
  @Override
  public void onClick(View v) {
    String remoteParticipantId = "<participant-id>";
    // Get specific participant instance
    Participant participant = meeting.getParticipants().get(remoteParticipantId);
    // Remove participant from active session
    // This will emit an event called "onParticipantLeft" for that particular participant
    participant.remove();
  }
});
```

</TabItem>

</Tabs>

### Events associated with remove

Following callbacks are received when a participant is removed from the meeting.

- Participant who was removed from the meeting will receive a callback on[`onMeetingLeft`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingleft).
- All other [remote participants](../concept-and-architecture#2-participant) will receive a callback [`onParticipantLeft`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantleft) with Participant object.

## 2. Using VideoSDK Dashboard

- You can go the session page on [VideoSDK Dashboard](https://app.videosdk.live/meetings/sessions) and select the meeting you can to remove a participant from.
- And then from the participants list you can remove any participant you want.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/kickout-user.mp4' width={"100%"}/>

</div>

## 3. Using Rest API

- You can also remove the particular participant from the meeting [using the REST API](/api-reference/realtime-communication/remove-participant).
- To use this method, you should have the `sessionId` of the meeting and `participantId` of the participant who is supposed to be removed.

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [remove()](/android/api/sdk-reference/participant-class/methods#remove)
- [onMeetingLeft()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingleft)
- [onParticipantLeft()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantleft)
