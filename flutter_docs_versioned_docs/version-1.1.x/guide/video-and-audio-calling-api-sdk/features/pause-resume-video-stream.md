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

# Participant Video Stream - Flutter

- Using this feature, you can pause/resume participant's video stream.

## Pause video stream

- `pause()` method is used to pause videostream of a participant.

```js
ElevatedButton(
  child: Text("Pause Video"),
  onPressed: () {
    List<Stream> streams = participant.streams.where((e) => e.kind == 'video').toList();

    if(streams.length != 0){
      Stream videoStream = streams[0];
      videoStream.track.pause();
    }
  }
),
```

## Resume video stream

- `resume()` method is used to resume videostream of a participant.

```js
ElevatedButton(
  child: Text("Resume Video"),
  onPressed: () {
    List<Stream> streams = participant.streams.where((e) => e.kind == 'video').toList();

    if(streams.length != 0){
      Stream videoStream = streams[0];
      videoStream.track.resume();
    }
  }
),

```

## Events

**Event associated with `pause()`:**

- [`streamPaused`](../../../api/sdk-reference/participant-class/events.md#streamPaused) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

**Event associated with `resume()`:**

- [`streamResumed`](../../../api/sdk-reference/participant-class/events.md#streamResumed) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

```js
participant.on(Events.streamPaused, (Stream stream){
  if (stream.kind === "video") {
    //particiapnt video stream paused
  }
});
participant.on(Events.streamResumed, (Stream stream){
  if (stream.kind === "video") {
    //particiapnt video stream resumed
  }
});
```
