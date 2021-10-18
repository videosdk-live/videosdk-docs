---
title: Prebuilt Camera Controls Audio & Video Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Camera Controls features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Camera Controls
pagination_label: Camera Controls
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls

Different webcam control permissions allows participant to enable/disable their own webcam and other participant's webcam too & also can set default participant's webcam settings, when meeting start.

### How it works. ?

- While `participantCanToggleSelfWebcam` value set to `true`, you can enable/disable your own webcam as display in below image.

- While `participantCanToggleSelfWebcam` value set to `false`, the below webcam button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-webcam.png)

### Camera Attributes

- `webcamEnabled`: Default webcam setting for meeting joinee, true enables webcam & false disable webcam.
- `participantCanToggleSelfWebcam`: Allow participant to enable/disable their own webcam.

```js title="index.html"
const config = {
  // ...
  webcamEnabled: true,
  participantCanToggleSelfWebcam: true,
  // ...
};
```
