---
title: Pause/Resume Video Stream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Pause/Resume Video Stream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Pause/Resume Stream
pagination_label: Pause/Resume Stream
keywords:
  - pause/resume video stream
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pause-resume-stream
---

# Pause/Resume Video Stream - React

Whenver you wish to stop/resume downlaod stream(webcam, screenShare and mic) of participant, you can simply do it by using `pause`, `resume` methods.

## Pause video stream

- `pause()` method is used for pause stream(webcam, screenShare and mic) of a particular participant.

```js
import { useParticipant } from "@videosdk.live/react-sdk";

// get stream of particular participant
const { webcamStream, micStream, screenShareStream } =
  useParticipant("<ParticipantId>");

const onPress = () => {
  // pause video stream
  webcamStream.pause();

  // pause mic stream
  micStream.pause();

  // pause screen share stream
  screenShareStream.pause();
};
```

## Resume video stream

- `resume()` method is used to resume stream(webcam, screenShare and mic) of a particular participant.

```js
import { useParticipant } from "@videosdk.live/react-sdk";

// get stream of particular participant
const { webcamStream, micStream, screenShareStream } =
  useParticipant("<ParticipantId>");

const onPress = () => {
  // resume video stream
  webcamStream.resume();

  // resume mic stream
  micStream.resume();

  // resume screen share stream
  screenShareStream.resume();
};
```
