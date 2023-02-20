---
title: Screen Share | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Screen Share
pagination_label: Screen Share
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screen-share
---

# Screen Share

Screen sharing in a meeting is the process of sharing your computer screen with other participants in the meeting. It allows everyone in the meeting to see exactly what you are seeing on your screen, which can be helpful for presentations, demonstrations, or collaborations.

### `enableScreenShare()`

- By using `enableScreenShare()` function of `useMeeting` hook, local participant can share his/her desktop screen to other participants.

- Screen Share stream of the participant can be accessed from the `screenShareStream` property of `useParticipant` hook.

### `disableScreenShare()`

- By using `disableScreenShare()` function of `useMeeting` hook, local participant can stop sharing his/her desktop screen to other participants.

### `toggleScreenShare()`

- By using `toggleScreenShare()` function of `useMeeting` hook, local participant can start or stop sharing his desktop screen to other participants based on the current state of the screen sharing.

- Screen Share stream of the participant can be accessed from the `screenShareStream` property of `useParticipant` hook.

:::note
Screen Sharing is only supported in the web browsers and **not in mobile browser**.
:::

```jsx
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Getting the screen-share methods from hook
  //highlight-start
  const { enableScreenShare, disableScreenShare, toggleScreenShare } =
    useMeeting();
  //highlight-end

  const handleEnableScreenShare = () => {
    // Enabling screen share
    //highlight-next-line
    enableScreenShare();
  };

  const handleDisableScreenShare = () => {
    // Disabling screen share
    //highlight-next-line
    disableScreenShare();
  };

  const handleToggleScreenShare = () => {
    // Toggling screen share
    //highlight-next-line
    toggleScreenShare();
  };

  return (
    <>
      <button onClick={handleEnableScreenShare}>Enable Screen Share</button>
      <button onClick={handleDisableScreenShare}>Disable Screen Share</button>
      <button onClick={handleToggleScreenShare}>Toggle Screen Share</button>
    </>
  );
};
```

### Events associated with enableScreenShare

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive [`onPresenterChanged()`](/react/api/sdk-reference/use-meeting/events#onpresenterchanged) callback of the [`useMeeting`](/react/api/sdk-reference/use-meeting/introduction) hook with the participantId as `presenterId` who started the screen share.

### Events associated with disableScreenShare

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive [`onPresenterChanged()`](/react/api/sdk-reference/use-meeting/events#onpresenterchanged) callback of the [`useMeeting`](/react/api/sdk-reference/use-meeting/introduction) hook with the `presenterId` as `null` indicating there is no presenter.

### Events associated with toggleScreenShare

- Every Participant will receive a callback on [`onStreamEnabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **screen share broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **screen share broadcasting was stopped**.

- Every Participant will receive [`onPresenterChanged()`](/react/api/sdk-reference/use-meeting/events#onpresenterchanged) callback of the [`useMeeting`](/react/api/sdk-reference/use-meeting/introduction) hook with the participantId as `presenterId` who started the screen share or `null` if the screen share was turned off.

```js
import { useParticipant, useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //Callback for when the presenter changes
  //highlight-start
  function onPresenterChanged(presenterId) {
    if(presenterId){
      console.log(presenterId, "started screen share");
    }else{
      console.log("some one stopped screen share");
    }
  }
  //highlight-end

  const { participants } = useMeeting({
    onPresenterChanged,
    ...
  });

  return <>...</>
}

const ParticipantView = (participantId) => {
  //Callback for when the participant starts a stream
  //highlight-start
  function onStreamEnabled(stream) {
    if(stream.kind === 'share'){
      console.log("Share Stream On: onStreamEnabled", stream);
    }
  }
  //highlight-end

  //Callback for when the participant stops a stream
  //highlight-start
  function onStreamDisabled(stream) {
    if(stream.kind === 'share'){
      console.log("Share Stream Off: onStreamDisabled", stream);
    }
  }
  //highlight-end

  const {
    displayName
    ...
  } = useParticipant(participantId,{
    onStreamEnabled,
    onStreamDisabled
    ...
  });
  return <> Participant View </>;
}
```

### Screen Share with Audio

To do screen share with audio, select the **Share tab audio** option when sharing the chrome tab as shown below.

<center>

![Screen Share with Audio](/img/screenshare-with-audio.png)

</center>

After clicking `Share` button, you will receive a selected tab audio stream in the participant's `screenShareAudioStream`.

:::note
Screen Share with Audio is only supported while sharing **Chrome Tab** in a **Chromium based browser** like Google Chrome, Brave etc.
:::

### Rendering Screen Share and Screen Share Audio

1. To render the screenshare, you will need the `participantId` who is presenting the screen, which can be found from the `presenterId` property of `useMeeting` hook.

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  //
  const { presenterId } = useMeeting();

  return <>{presenterId && <PresenterView presenterId={presenterId} />}</>;
};

const PresenterView = ({ presenterId }) => {
  return <div>PresenterView</div>;
};
```

2. Now that the we have `presenterId`, we will get the `screenShareStream` from the `useParticipant` hook and play it in the video tag.

```js
const PresenterView = ({ presenterId }) => {
  const { screenShareStream, screenShareOn } = useParticipant(presenterId);

  //Creating a media stream from the screen share stream
  //highlight-start
  const mediaStream = useMemo(() => {
    if (screenShareOn && screenShareStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);
  //highlight-end

  return (
    <>
      // playing the media stream in the ReactPlayer
      <ReactPlayer
        //
        playsinline // very very imp prop
        playIcon={<></>}
        //
        pip={false}
        light={false}
        controls={false}
        muted={true}
        playing={true}
        //
        //highlight-next-line
        url={mediaStream} // passing mediastream here
        //
        height={"100%"}
        width={"100%"}
        onError={(err) => {
          console.log(err, "presenter video error");
        }}
      />
    </>
  );
};
```

3. Let's now add the screen share audio to these component. YOu can get the `screenShareAudioStream` from the `useParticipant` hook.

```js
const PresenterView = ({ presenterId }) => {
  const { screenShareAudioStream, isLocal, screenShareStream, screenShareOn } =
    useParticipant(presenterId);

  // Creating a reference to the audio element
  //highlight-next-line
  const audioPlayer = useRef();

  // Playing the screen share audio stream
  //highlight-start
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
  //highlight-end

  return (
    <>
      {/*... React player is here */}
      //Adding these audio tag to play the screen share audio
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
    </>
  );
};
```

### Troubleshoot MacOS Screen Share Permissions

- If you are using the MacOS, you will have to allow the browser to do screen share. You can follow the steps shown in the video to do so.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/macos-screenshare-permission.mp4' width={"100%"}/>

</div>

:::caution
To use the audio and video communications in the web browser, your site must be **`SSL enabled`** i.e. it must be secured and **`running on https`**.
:::

### API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [enableScreenShare()](/react/api/sdk-reference/use-meeting/methods#enablewebcam)
- [disableScreenShare()](/react/api/sdk-reference/use-meeting/methods#disablewebcam)
- [toggleScreenShare()](/react/api/sdk-reference/use-meeting/methods#togglewebcam)
- [onStreamEnabled()](/react/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onPresenterChanged()](/react/api/sdk-reference/use-meeting/events#onpresenterchanged)
