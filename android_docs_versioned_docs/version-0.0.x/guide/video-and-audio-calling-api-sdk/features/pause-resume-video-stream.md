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

# Pause/Resume Video Stream

Whenver you wish to stop/resume downlaod stream(webcam, screenShare and mic) of participant, you can simply do it by using `pause`, `resume` methods.

## Pause video stream

- `pause()` method is used for pause stream(webcam, screenShare and mic) of a particular participant.

```js
  btnPause.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
                Stream stream = entry.getValue();
                stream.pause();
        }
      }
  });
```

## Resume video stream

- `resume()` method is used to resume stream(webcam, screenShare and mic) of a particular participant.

```js
  btnResume.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
            Stream stream = entry.getValue();
            stream.resume();
        }
      }
  });
```