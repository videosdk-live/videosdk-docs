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

# Set Video Quality - Flutter

- Set Video Quality feature allows participants to set other participant's video quality during the room.

- `Participant` class provides the `setQuality()` method to set participant's video quality.

```js
ElevatedButton(
    child: Text("Set High Quality"),
    onPressed: () {
        // Set Video Quality

        // High Quality
        participant.setQuality('high');

        // Medium Quality
        participant.setQuality('med');

        // Low Quality
        participant.setQuality('low');

    },
),
```
