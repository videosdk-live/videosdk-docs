---
title: Pause/Resume Video Stream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Pause/Resume Video Stream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Pause/Resume Video Stream
pagination_label: Pause/Resume Video Stream
keywords:
  - pause/resume video stream
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pause-resume-video-stream
---

# Participant Video Stream

- Using this feature, you can pause/resume participant's video stream.

## Pause video stream

- `pause()` method is used to pause videostream of a participant.

```js
const { webcamStream } = useParticipant(participantId, {});

const onPressed = () => {
  if (webcamStream) {
    webcamStream.pause();
  }
};
```

## Resume video stream

- `resume()` method is used to resume videostream of a participant.

```js
const { webcamStream } = useParticipant(participantId, {});

const onPressed = () => {
  if (webcamStream) {
    webcamStream.resume();
  }
};
```
