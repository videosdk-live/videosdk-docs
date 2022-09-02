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

```js
const onPress = () => {
  // Enabling ScreenShare
  meeting?.enableScreenShare();

  // Disabling ScreenShare
  meeting?.disableScreenShare();
};
```

### Screen Share with Audio

To do screen share with audio, select the **Share tab audio** option when sharing the chrome tab as shown below.

<center>

![Screen Share with Audio](/img/screenshare-with-audio.png)

</center>

<!-- When screen share with audio is done, you will receive a audio stream in the `stream-enabled` callback with kind as `shareAudio`. -->

After clicking `Share` button, you will receive a selected tab audio stream in the participant's screenShareAudioStream.

```js
const { isLocal, screenShareStream, screenShareAudioStream, screenShareOn } =
  useParticipant(presenterId);

const audioPlayer = useRef();

useEffect(() => {
  if (
    !isLocal &&
    audioPlayer.current &&
    screenShareOn &&
    screenShareAudioStream
  ) {
    const mediaStream = new MediaStream();
    mediaStream.addTrack(screenShareAudioStream.track);

    audioPlayer.current.srcObject = mediaStream;
    audioPlayer.current.play().catch((err) => {
      if (
        err.message ===
        "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
      ) {
        console.error("audio" + err.message);
      }
    });
  } else {
    audioPlayer.current.srcObject = null;
  }
}, [screenShareAudioStream, screenShareOn, isLocal]);

return <audio autoPlay playsInline controls={false} ref={audioPlayer} />;
```

:::note

Screen Share with Audio feature is only supported while **sharing chrome tab on Google Chrome** browser only.

:::
