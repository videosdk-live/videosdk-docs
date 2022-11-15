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

# Set Video Quality

- Set Video Quality feature allows participants to set other participant's video quality during the meeting.

- `Participant` class provides the `setQuality()` method to set participant's video quality.

```js
const participant = meeting.participants.get("PARTICIPANT_ID");

const onPressed = () => {
  // Set low quality
  participant.setQuality("low");
  // Set medium quality
  participant.setQuality("med");
  // Set high quality
  participant.setQuality("high");
};
```

:::note

If the quality is set to high, but there is not enough netowrk bandwidth available, quality will reduce untill the newtwork quality improves.

:::

## Event

### video-quality-changed

- `video-quality-changed` is a callback which gets triggered whenever a participant's video quality changes.

- `currentQuality` and `prevQuality` can have values `HIGH` | `MEDIUM` | `LOW`.

#### Example

```js
participant.on("video-quality-changed", (data) => {
  const { currentQuality, prevQuality } = data;
  //
});
```
