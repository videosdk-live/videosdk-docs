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

# Manage On-Screen Participants

It is important that only the necessary person is present on the screen when livestream is on. To handle these, we will be using the `pin` and `unpin` methods of the `useParticipant` hook.

:::note
To ensure only the hosts/speakers are shown in the grid, you should use the `SPOTLIGHT` layout and `pin` as the priority when starting the interactive livestream.
:::

Let us first explore two methods that we will be using to manage on-screen participats.

### `pin()`

With this method you can pin any participant's Camera, Screen Share or both. These can be useful to identify the participants based on which you can perform rendering participant grid.

### `unpin()`

With this methods you can unpin any participant's Camera, Screen Share or both. These can be useful to reset pin state of the participant.

### Managing On-Screen Participants

1. If you want to pin all the hosts/speakers automatically, you can do it by listenting to the `onMeetingJoined` callback and `onParticipantModeChanged`, where you can `pin` and `unpin` based on the mode.

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

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

2. When rendering the participant grid on the Speaker side, make sure to show only the participants who are in `CONFERENCE` mode. You can filter the participants as shown in below examples.

```js
const { participants } = useMeeting();
const speakers = [...participants.values()].filter((participant) => {
  return participant.mode == Constants.modes.CONFERENCE;
});
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [pin](/react-native/api/sdk-reference/use-participant/methods#pin)
- [unpin](/react-native/api/sdk-reference/use-participant/methods#unpin)
