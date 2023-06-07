---
title: Image Capturer | Video SDK
hide_title: true
hide_table_of_contents: false
description: Stream Image Capturer.
sidebar_label: Image Capturer
pagination_label: Image Capturer
keywords:
  - image capturer
  - stream image capturer
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: image-capturer
---

# Image Capturer.

In this guide, we will see how you can capture images from participants video streams. For that, we will create a button, and when it's clicked, we will use the ImageCapture API of the browser to capture the image, which we will then render in Canvas.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind == "video") {
    // ...

    let button = document.createElement("button");
    button.innerHTML = "capture screen";
    button.addEventListener("click", async () => {
      const track = new MediaStream();

      track.addTrack(stream.track);
      let imageCapture = new ImageCapture(track.getVideoTracks()[0]);
      const image = await imageCapture.grabFrame();

      const canvas = document.getElementById("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      let ratio = 16 / 9;
      let x = (canvas.width - image.width * ratio) / 2;
      let y = (canvas.height - image.height * ratio) / 2;
      canvas.getContext("2d").clearRect(0, 0, x / 2, y / 2);
      canvas.getContext("2d").drawImage(image, 0, 0);
    });

    // Append button to your video container
  }
});
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [stream-enabled](/javascript/api/sdk-reference/participant-class/events#stream-enabled)
