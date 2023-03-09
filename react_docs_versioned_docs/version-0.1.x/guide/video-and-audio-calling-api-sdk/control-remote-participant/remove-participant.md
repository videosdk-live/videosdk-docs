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

# Remove Participant

This feature in a meeting allows the meeting host or organizer to remove a participant from the meeting. This can be helpful in situations where a participant is causing a disturbance, is behaving inappropriately, or is not following meeting guidelines.

VideoSDK provide three ways to remove participant from meeting.

1. [Using SDK](#1-using-sdk)
2. [Using VideoSDK Dashboard](#2-using-videosdk-dashboard)
3. [Using Rest API](#3-using-rest-api)

## 1. Using SDK

### `remove()`

Remove participant allows removing participant while session is on-going. This can be helpful when moderation in particular meeting is required.

```js
import { useParticipant } from "@videosdk.live/react-sdk";

const ParticipantView = () => {
  // Get specific participant instance
  const { participant } = useParticipant("<participant-id>");

  const onPress = () => {
    // Remove participant from active session
    // This will emit an event called "onParticipantLeft" to that particular participant
    participant.remove();
  };
  return (
    <>
      <button onClick={handleRemoveParticipant}>Remove Participant</button>
    </>
  );
};
```

### Events associated with remove

Following callbacks are receieved when a participant is removed from the meeting.

- Participant who was removed from the meeting will receive a callback on[`onMeetingLeft`](/react/api/sdk-reference/use-meeting/events#onmeetingleft) of `useMeeting()` hook.
- All other [remote participants](../concept-and-architecture#2-participant) will receive a callback [`onParticipantLeft`](/react/api/sdk-reference/use-meeting/events#onparticipantleft) with Participant object.

## 2. Using VideoSDK Dashboard

- You can go the session page on [VideoSDK Dashboard](https://app.videosdk.live/meetings/sessions) and select the meeting you can to remove a participant from.
- And then from the participants list you can remove any participant you want.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/kickout-user.mp4' width={"100%"}/>

</div>

## 3. Using Rest API

- You can also remove the particular participant from the meeting [using the REST API](/api-reference/realtime-communication/remove-participant).
- To use these method, you should have the `sessionId` of the meeting and `participantId` of the participant who is supposed to be removed.

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- remove()
- [onMeetingLeft()](/react/api/sdk-reference/use-meeting/events#onmeetingleft)
- [onParticipantLeft()](/react/api/sdk-reference/use-meeting/events#onparticipantleft)
