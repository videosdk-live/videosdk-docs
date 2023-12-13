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

# Leave or End Meeting - React Native

Participant can choose to leave the meeting without removing all the other participants. This is typically done by `Leave Meeting`.

Alternatively, if the participant is the host or the last person remaining in the session, they can choose `End Meeting` by removing all other participants, which will end the session for everyone.

### `leave()`

To leave the meeting without removing all the participant you need to call `leave()` which is the part of the `useMeeting` hook of React SDK.

### `end()`

To leave the meeting by removing all the participant you need to call `end()` which is the part of the `useMeeting` hook of React SDK.

:::note
This methods can be called after the meeting is joined successfully.
:::

#### Example

```jsx
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

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
      <TouchableOpacity
        onPress={() => {
          handleLeaveMeeting();
        }}
      >
        <Text>Leave Meeting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleEndMeeting();
        }}
      >
        <Text>End Meeting</Text>
      </TouchableOpacity>
    </>
  );
};
```

:::tip
You should call the `leave()` method on the unmount of your main meeting component so that meeting is left once the view is unmounted.
:::

### Events associated with Leave

Following callbacks are received when a participant leaves the meeting.

- [Local Participant](../concept-and-architecture#2-participant) will receive a callback on[`onMeetingLeft`](/react-native/api/sdk-reference/use-meeting/events#onmeetingleft) of `useMeeting()` hook.
- All [remote participants](../concept-and-architecture#2-participant) will receive a callback [`onParticipantLeft`](/react-native/api/sdk-reference/use-meeting/events#onparticipantleft) with Participant object.

### Events associated with End

Following callbacks are received when a participant ends the meeting.

- All [remote participants](../concept-and-architecture#2-participant) and local participant will receive a callback on [`onMeetingLeft`](/react-native/api/sdk-reference/use-meeting/events#onmeetingleft) of `useMeeting()` hook.

```jsx
import { useMeeting } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  //Event to know meeting is left
  //highlight-start
  function onMeetingLeft() {
    console.log("onMeetingLeft");
  }
  //highlight-end

  //Event to know some other participant left
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

The API references for all the methods and events utilised in this guide are provided below.

- [leave()](/react-native/api/sdk-reference/use-meeting/methods#leave)
- [end()](/react-native/api/sdk-reference/use-meeting/methods#end)
- [onMeetingLeft()](/react-native/api/sdk-reference/use-meeting/events#onmeetingleft)
- [onParticipantLeft()](/react-native/api/sdk-reference/use-meeting/events#onparticipantleft)
