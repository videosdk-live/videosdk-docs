---
title: Join Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Join Meeting
pagination_label: Join Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-meeting
---

# Join Meeting

### Overview

With our React SDK, you can choose to manually call the `join()` or leave it up to the VideoSDK to automatically call the `join()` when the `MeetingProvider` is rendered.

Before joining the meeting, it has to be initialized. If you have not initialized a meeting yet, you can [follow the guide here.](./initialise-meeting)

### `join()`

- To join the meeting you can call the `join()` which is the part of the `useMeeting` hook of React SDK.
- This method can be called after the meeting is initialized from the `MeetingProvider`.

:::caution
`useMeeting` hook mentioned above is accessible within the `MeetingProvider` only.
:::

```js
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";

const App = () => {
  //... Meeting Provider code
};

const MeetingView = () => {
  //Getting the join method from hook and assigning event callbacks
  //highlight-start
  const { join } = useMeeting();
  //highlight-end

  const handleJoinMeeting = () => {
    // Joining Meeting
    //highlight-next-line
    join();
  };

  return (
    <>
      <button onClick={handleJoinMeeting}>Join Meeting</button>
    </>
  );
};
```

### Events associated with Join

Following callbacks are received when a participant is successfully joined.

- [Local Participant](../concept-and-architecture#2-participant) will receive a [`onMeetingJoined`](/react/api/sdk-reference/use-meeting/events#onmeetingjoined) event, when successfully joined.
- [Remote Participant](../concept-and-architecture#2-participant) will receive a [`onParticipantJoined`](/react/api/sdk-reference/use-meeting/events#onparticipantjoined) event with the newly joined `Participant` object from the event callback.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Event to know meeting is joined
  //highlight-start
  function onMeetingJoined() {
    console.log("onMeetingJoined");
  }
  //highlight-end

  //Event to know some other participant joined
  //highlight-start
  function onParticipantJoined(participant) {
    console.log(" onParticipantJoined", participant);
  }
  //highlight-end

  //Getting the join method from hook and assigning event callbacks
  //highlight-start
  const { join } = useMeeting({
    onMeetingJoined,
    onParticipantJoined,
  });
  //highlight-end

  return <>...</>;
};
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [MeetingProvider](/react/api/sdk-reference/meeting-provider)
- [join()](/react/api/sdk-reference/use-meeting/methods#join)
- [onMeetingJoined()](/react/api/sdk-reference/use-meeting/events#onmeetingjoined)
- [onParticipantJoined()](/react/api/sdk-reference/use-meeting/events#onparticipantjoined)
