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

# Image Capturer - Javascript

In this guide, we will see how to capture image of participant from video stream.

### `captureImage()`

- By using `captureImage()` function of `meeting` object, you can capture image of a participant from video stream. 

- You can pass your desired height and width in `captureImage()` as parameter. They are not mandatory parameters. If you don't pass height/width or pass invalid values[null,0] for height/width, videosdk will automatically take height/width based on participant's webcamStream.

- `captureImage()` will return image in a form of `base64`.

```js
btnCaptureImage.addEventListener("click", async () => {
  const base64 = await meeting.localParticipant.captureImage({height:400,width:400}); // captureImage will return base64
  console.log("base64",base64);
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [Participant](/javascript/api/sdk-reference/participant-class/introduction)
- [Meeting](/javascript/api/sdk-reference/meeting-class/introduction)
