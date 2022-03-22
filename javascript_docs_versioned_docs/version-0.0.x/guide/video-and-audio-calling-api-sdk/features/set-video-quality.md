---
title: Set Video Quality - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Set Video Quality features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Set Video Quality
pagination_label: Set Video Quality
keywords:
  - set video quality
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-video-quality
---

# Set Video Quality

- Set Video Quality feature allows participants to set other participant's video quality during the meeting.

- `Participant` class provides the `setQuality()` method to set participant's video quality.

```js
const onPressed = () => {
  // Set low quality
  participant.setQuality("low");

  // Set medium quality
  participant.setQuality("med");

  // Set high quality
  participant.setQuality("high");
};
```
