---
title: Set Participant Video Quality - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Set Video Quality features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Set Participant Video Quality
pagination_label: Set Participant Video Quality
keywords:
  - set video quality
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-participant-video-quality
---

# Set Participant Video Quality

This feature allows participants to set other participant's video quality during the meeting.

## Set Quality

- `setQuality` method will accept `low`, `med` or `high` as string parameter.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { setQuality } = useParticipant(participantId);

  const onPressed = () => {
    // Low Quality
    setQuality("low");

    // Medium Quality
    setQuality("med");

    // High Quality
    setQuality("high");
  };
  return <>...</>;
};
```

:::note

If the quality is set to high, but there is not enough netowrk bandwidth available, quality will reduce untill the newtwork quality improves.

:::

## Event

### onVideoQualityChanged()

- `onVideoQualityChanged()` is a callback which gets triggered whenever a participant's video quality changes.

- `currentQuality` and `prevQuality` can have values `HIGH` | `MEDIUM` | `LOW`.

#### Example

```js
import { useParticipant } from "@videosdk.live/react-sdk";

function onVideoQualityChanged(data) {
  const { currentQuality, prevQuality } = data;
}
const {
  displayName
  ...
} = useParticipant(participantId,{
  onVideoQualityChanged,
  ...
});
```
