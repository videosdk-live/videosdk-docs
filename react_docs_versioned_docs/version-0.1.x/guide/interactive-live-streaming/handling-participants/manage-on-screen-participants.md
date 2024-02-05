---
title: Manage On-Screen Participants - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage On-Screen Participants
pagination_label: Manage On-Screen Participants
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-on-screen-participants
---

# Manage On-Screen Participants - React 

When engaging in interactive live streaming, it is essential to have only the necessary participant on the screen during the livestream. To manage this, the `pin` and `unpin` methods of the useParticipant hook are employed.

:::note
To ensure only the hosts/speakers are displayed in the grid, utilize the `SPOTLIGHT` layout and prioritize the `pin` function when initiating the interactive livestream.
:::

Below is an explanation of the methods used to manage on-screen participants.

### `pin()`

This method allows you to pin any participant's camera, screen share, or both. It is particularly useful for identifying specific participants, enabling you to optimize the rendering of the participant grid.

### `unpin()`

This method allows you to unpin any participant's camera, screen share, or both. It is particularly useful for resetting the pin state of the participant.

### Managing On-Screen Participants

1. If you want to automatically pin all the hosts/speakers, you can achieve this by listening to the `onMeetingJoined` callback and `onParticipantModeChanged` event. In these callbacks, you can `pin` and `unpin` participants based on their mode.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

function MeetingView() {
  const mMeeting = useMeeting({});

  //We are using a reference to the meeting object because
  //While referencing it in the callbacks we want to use its latest state
  const mMeetingRef = useRef();

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  const { localParticipant } = useMeeting({
    onMeetingJoined: () => {
      //highlight-start
      const localParticipant = mMeetingRef.current?.localParticipant;
      //We will pin the participant if mode is conference
      if (localParticipant.mode == Constants.modes.CONFERENCE) {
        localParticipant.pin();
      } else {
        localParticipant.unpin();
      }
      //highlight-end
    },
    onParticipantModeChanged: ({ participantId, mode }) => {
      const localParticipant = mMeetingRef.current?.localParticipant;
      //highlight-start
      //We will pin the participant if mode is conference else unpin him
      if (participantId == localParticipant.id) {
        if (localParticipant.mode == Constants.modes.CONFERENCE) {
          localParticipant.pin();
        } else {
          localParticipant.unpin();
        }
      }
      //highlight-end
    },
  });
  return <>...</>;
}
```

2. When rendering the participant grid on the Speaker side, ensure that only participants in `CONFERENCE` mode are displayed. You can filter the participants as shown in the example provided below.

```js
const { participants } = useMeeting();
const speakers = [...participants.values()].filter((participant) => {
  return participant.mode == Constants.modes.CONFERENCE;
});
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [pin](/react/api/sdk-reference/use-participant/methods#pin)
- [unpin](/react/api/sdk-reference/use-participant/methods#unpin)
