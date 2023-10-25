---
title: Prebuilt Camera Controls Video & Audio Call | Video SDK Embed Docs
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
  - video sdk embed
  - video sdk prebuilt
  - webcam resolution
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls - Prebuilt

Webcam control permissions allow the host to enable/disable their webcam along with other participants webcams as well as set default settings when the meeting starts.

### How it works ?

- While `participantCanToggleSelfWebcam` value is set to `true`, you can enable/disable your own webcam as display in below image.

- While `participantCanToggleSelfWebcam` value is set to `false`, the below webcam button will not appear.

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

## Set webcam resolution

If you want to restrict the `webcam` stream quality of any participant that is being uploaded to server, you can use `maxResolution`.

### How it works ?

- `maxResolution` can be set to `sd` or `hd`. If it is `sd` then the upload resolution will be `360p` else if it is set to `hd` then it will be `720p`. By default it is set to `sd`.

### Max resolution Attributes

```js title="index.html"
const config = {
  // ...
  maxResolution: "sd", // "sd" or "hd"
  // ...
};
```
