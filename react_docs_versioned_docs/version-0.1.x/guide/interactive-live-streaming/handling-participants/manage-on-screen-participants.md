---
title: Manage On Screen Participants - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage On Screen Participants
pagination_label: Manage On Screen Participants
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

# Manage On Screen Participants

It is important that only the necessary person are present on the screen when livestream is on. TO handle these, we will be using the `pin` and `unpin` methods of the `useParticipant` hook.

:::note
To ensure only the hosts/speakers are shown in the grid, you should use the `SPOTLIGHT` layout and `pin` as the priority when starting the interactive livestream.
:::

1. If you want to pin all the hosts/speakers automatically, you can do it by listenting to the `onMeetingJoined` callback and `onParticipantModeChanged`, where you can `pin` and `unpin` based on the mode.

```js
function MeetingView() {
  const { localParticipant } = useMeeting({
    onMeetingJoined: () => {
      if (localParticipant.mode == Constants.modes.CONFERENCE) {
        localParticipant.pin();
      } else {
        localParticipant.unpin();
      }
    },
    onParticipantModeChanged: ({ participantId, mode }) => {
      if (participantId == localParticipant.id) {
        if (localParticipant.mode == Constants.modes.CONFERENCE) {
          localParticipant.pin();
        } else {
          localParticipant.unpin();
        }
      }
    },
  });
  return <>...</>;
}
```

// Video -- React example change mode
