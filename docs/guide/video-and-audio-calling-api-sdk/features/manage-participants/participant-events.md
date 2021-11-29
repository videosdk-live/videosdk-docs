---
title: Participant Events
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React Native IOS SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Participant Events"
pagination_label: "Participant Events"
keywords:
  - react native ios sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-events
---

1. **participant-joined** - Whenever any new participant join the meeting, `participant-joined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participant-joined` event trigger and return the Participant object.

2. **participant-left** - Whenever any participant leave/exit the meeting, `participant-left` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `participant-left` event trigger and return the Participant object.

3. **presenter-changed** - Whenever any participant present/screenshare their screen/window in meeting, `presenter-changed` event will trigger and return the presenter `participantId`.

4. **stream-enabled** - Whenever any participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return Stream object.

5. **stream-disabled** - Whenever any participant disabled mic/webcam in meeting, `stream-disabled` event will trigger and return Stream object.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
meeting.on("participant-joined", (participant) => {});

meeting.on("participant-left", (participant) => {});

participant.on("stream-enabled", (stream) => {});

participant.on("stream-disabled", (stream) => {});

meeting.on("presenter-changed", (participantId) => {});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

  /** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onParticipantJoined: (participant) => {},
  onParticipantLeft: (participant) => {},
  onPresenterChanged: (presenterId) => {},
});

  /** useParticipant hooks events */
const {
  /** Methods */
} = useParticipant(participantId, {
  onStreamEnabled:(stream) => {};
  onStreamDisabled(stream) => {};
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";

  /** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onParticipantJoined: (participant) => {},
  onParticipantLeft: (participant) => {},
  onPresenterChanged: (presenterId) => {},
});

  /** useParticipant hooks events */
const {
  /** Methods */
} = useParticipant(participantId, {
  onStreamEnabled:(stream) => {};
  onStreamDisabled(stream) => {};
});
```

</TabItem>
<TabItem value="android">

```js
 meeting.addEventListener(new MeetingEventListener() {
    @Override
    public void onParticipantJoined(Participant participant) {
      participant.addEventListener(new ParticipantEventListener() {
          @Override
          public void onStreamEnabled(Stream stream) {
              if (stream.getKind().equalsIgnoreCase("video")) {
                  // participant video enabled
              } else if (stream.getKind().equalsIgnoreCase("audio")) {
                  // participant mic enabled
              }
          }

          @Override
          public void onStreamDisabled(Stream stream) {
              if (stream.getKind().equalsIgnoreCase("video")) {
                  // participant video disabled
              } else if (stream.getKind().equalsIgnoreCase("audio")) {
                  // participant mic disabled
              }
          }
      });
    }

    @Override
    public void onParticipantLeft(Participant participant) {
      Toast
        .makeText(
          MainActivity.this,
          participant.getDisplayName() + " left",
          Toast.LENGTH_SHORT
        )
        .show();
    }
 });
```

</TabItem>
<TabItem value="ios">

```js
Coming soon

```

</TabItem>
<TabItem value="flutter">

```js
// Adding event listner
meeting.on("participant-joined", (Participant participant) {
  print("new participant => $participant");
  },
);

meeting.on("participant-left", (Participant participant) {
  print("new participant => $participant");
  },
);
```

</TabItem>
</Tabs>
