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

## Using SDK

### remove()

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

## Using Dashboard

- You can go the session page on [VideoSDK Dashboard](https://app.videosdk.live/meetings/sessions) and select the meeting you can to remove a participant from.
- And then from the participants list you can remove any participant you want.

## Using REST API

- You can also remove the particular participant from the meeting [using the REST API](/api-reference/realtime-communication/remove-participant).
- To use these method, you should have the `sessionId` of the meeting and `participantId` of the participant who is supposed to be removed.

## API Reference

The API references for all the methods and events utilised in these guide are provided below.

- remove()
- [onMeetingLeft()](/react/api/sdk-reference/use-meeting/events#onmeetingleft)
- [onParticipantLeft()](/react/api/sdk-reference/use-meeting/events#onparticipantleft)
