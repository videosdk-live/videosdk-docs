---
title: Share your Screen Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Share Your Screen
pagination_label: Share Your Screen
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screenshare
---

# Share Your Screen

Whenever any participant wants to share either the complete screen, a specific window or, a browser tab, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to use enable and disable Screen Share in a meeting.

1. **Enable Screen Share** - By using `enableScreenShare()` function, a participant can publish screen stream to other participants.
2. **Disable Screen Share** - By using `disableScreenShare()` function, a participant can stop publishing screen stream to other participants.

### Enable, Disable Screen Share

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  // Enabling ScreenShare
  meeting?.enableScreenShare();

  // Disabling ScreenShare
  meeting?.disableScreenShare();
};
```

### Events related to screenshare

**Events associated with `enableScreenShare()`:**

- [`stream-enabled`](../../../api/sdk-reference/participant-class/events.md#stream-enabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

- [`presenter-changed`](./../../../api/sdk-reference/meeting-class/events#presenter-changed) will also receive a callback with the `presenterId`.

**Events associated with `disableScreenShare()`:**

- [`stream-disabled`](../../../api/sdk-reference/participant-class/events.md#stream-disabled) event will be emitted with [`stream`](../../../api/sdk-reference/stream-class/introduction.md) object from the event callback, inside that [participant](../../../api/sdk-reference/participant-class/introduction.md) object.

- [`presenter-changed`](./../../../api/sdk-reference/meeting-class/events#presenter-changed) will also receive a callback with the `presenterId`.

```js
participant.on("stream-enabled", (stream) => {
  if (stream.kind === "share") {
    //particiapnt turned on screen share
    //Render screenshare logic here
  }
});

participant.on("stream-disabled", (stream) => {
  if (stream.kind === "share") {
    //particiapnt turned off screenshare
    //remove screenshare logic here
  }
});

meeting.on("presenter-changed", (presenterId) => {
  if (presenterId) {
    //Someonve start presenting
  } else {
    //someone stopped presenting
  }
});
```

### Screen Share with Audio

To do screen share with audio, select the **Share tab audio** option when sharing the chrome tab as shown below.

<center>

![Screen Share with Audio](/img/screenshare-with-audio.png)

</center>

<!-- When screen share with audio is done, you will receive a audio stream in the `stream-enabled` callback with kind as `shareAudio`. -->

After clicking `Share` button, you will receive a selected tab audio stream in the participant `stream-enabled` callback with kind as `shareAudio`.

```js
participant.on("stream-enabled", (stream) => {
  if (stream.kind == "shareAudio") {
    const audioElem = createShareAudioElement(participant.id, stream);

    //add audioElem to your container
    container.appendChild(audioElem);
  }
});

// creating audio element
function createShareAudioElement(pId, stream) {
  if (pId == meeting.localParticipant.id) return;

  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", false);
  audioElement.setAttribute("playsInline", "false");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-share-${pId}`);
  audioElement.style.display = "none";

  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  audioElement.srcObject = mediaStream;
  audioElement
    .play()
    .catch((error) => console.error("audioElem.play() failed", error));
  return audioElement;
}
```

:::note

Screen Share with Audio feature is only supported while **sharing chrome tab on Google Chrome** browser only.

:::
