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

Whenver you wish to stop/resume downlaod stream(webcam and screenShare) of participant, you can simply do it by using `pause`, `resume` methods.

## Pause video stream

- `pause()` method is used to pause videostream of a participant.
- By usinf this methods, webcam stema of that partivpant will not dwonload

```js
// get webcamStream of particular participant
const { webcamStream } = useParticipant("<ParticipantId>");

const onPressed = () => {
  // pause video stream
  webcamStream.pause();
};
```

## Resume video stream

- `resume()` method is used to resume videostream of a participant.

```js
// get webcamStream of particular participant
const { webcamStream } = useParticipant(participantId);

const onPressed = () => {
  // resume video stream
  webcamStream.resume();
};
```
