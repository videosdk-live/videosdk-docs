---
title: Leave or End Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Leave or End Meeting
pagination_label: Leave or End Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting 
---

# Leave or End Meeting - React

A participant can choose to leave a meeting without removing all the other participants. This is typically done using the `Leave Meeting` functionality.

Alternatively, if the participant is the host or the last person remaining in the session, they can choose to `End Meeting` by removing all other participants, which will end the session for everyone.

### `leave()`

To leave the meeting without removing all the participants you need to call the `leave()` method which is a part of the `useMeeting` hook of React SDK.

### `end()`

To end the meeting by removing all the participants you need to call the `end()` method which is a part of the `useMeeting` hook of React SDK.

:::note
These methods can be called only after the meeting is joined successfully.
:::

#### Example

```jsx
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Getting the leave and end method from hook and assigning event callbacks
  //highlight-start
  const { leave, end } = useMeeting({
    onMeetingLeft,
    onParticipantLeft,
  });
  //highlight-end

  const handleLeaveMeeting = () => {
    // Leaving Meeting
    //highlight-next-line
    leave();
  };

  const handleEndMeeting = () => {
    // Ending Meeting
    //highlight-next-line
    end();
  };

  return (
    <>
      <button onClick={handleLeaveMeeting}>Leave Meeting</button>
      <button onClick={handleEndMeeting}>End Meeting</button>
    </>
  );
};
```

:::tip
You should call the `leave()` method on the unmount of your main meeting component so that meeting is left once the view is unmounted.
:::

### Events associated with the leave() method

Following callbacks are received when a participant leaves the meeting.

- The [Local Participant](../concept-and-architecture#2-participant) will receive a callback [`onMeetingLeft`](/react/api/sdk-reference/use-meeting/events#onmeetingleft) of the `useMeeting()` hook.
- All [Remote Participants](../concept-and-architecture#2-participant) will receive a callback [`onParticipantLeft`](/react/api/sdk-reference/use-meeting/events#onparticipantleft) with the Participant object.

### Events associated with the end() method.

Following callbacks are received when a participant ends the meeting.

- All [remote participants](../concept-and-architecture#2-participant) and the local participant will receive a callback [`onMeetingLeft`](/react/api/sdk-reference/use-meeting/events#onmeetingleft) of the `useMeeting()` hook.

```jsx
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Event to determine if the meeting has been left
  //highlight-start
  function onMeetingLeft() {
    console.log("onMeetingLeft");
  }
  //highlight-end

  //Event to determine if some other participant has left
  //highlight-start
  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }
  //highlight-end

  //Getting the leave and end method from hook and assigning event callbacks
  //highlight-start
  const { leave, end } = useMeeting({
    onMeetingLeft,
    onParticipantLeft,
  });
  //highlight-end

  return <>...</>;
};
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [leave()](/react/api/sdk-reference/use-meeting/methods#leave)
- [end()](/react/api/sdk-reference/use-meeting/methods#end)
- [onMeetingLeft()](/react/api/sdk-reference/use-meeting/events#onmeetingleft)
- [onParticipantLeft()](/react/api/sdk-reference/use-meeting/events#onparticipantleft)
