---
title: Screen Share | Video SDK
hide_title: true
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Screen Share
pagination_label: Screen Share
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screen-share
---

# Screen Share - React Native

Screen sharing in a meeting is the process of sharing your device screen with other participants in the meeting. It allows everyone in the meeting to see exactly what you are seeing on your screen, which can be helpful for presentations, demonstrations, or collaborations.

### `enableScreenShare()`

- By using `enableScreenShare()` function of `useMeeting` hook, local participant can share his/her desktop screen to other participants.

- You can pass customised screenshare track in `enableScreenShare()` by using [Custom Screen Share Track](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-screen-share-track).

- Screen Share stream of the participant can be accessed from the `screenShareStream` property of `useParticipant` hook.

### `disableScreenShare()`

- By using `disableScreenShare()` function of `useMeeting` hook, local participant can stop sharing his/her desktop screen to other participants.

### `toggleScreenShare()`

- By using `toggleScreenShare()` function of `useMeeting` hook, local participant can start or stop sharing his desktop screen to other participants based on the current state of the screen sharing.

- You can pass customised screenshare track in `toggleScreenShare()` by using [Custom Screen Share Track](/react-native/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-screen-share-track).

- Screen Share stream of the participant can be accessed from the `screenShareStream` property of `useParticipant` hook.

```jsx
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

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
      <TouchableOpacity
        onPress={() => {
          handleEnableScreenShare();
        }}
      >
        <Text>Enable Screen Share</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleDisableScreenShare();
        }}
      >
        <Text>Disable Screen Share</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleToggleScreenShare();
        }}
      >
        <Text>Toggle Screen Share</Text>
      </TouchableOpacity>
    </>
  );
};
```

### iOS Setup

:::note

For React Native iOS Screen Share feature, you need to follow this guide [React Native iOS Screen Share](/react-native/guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share)

:::

### Rendering Screen Share Stream

1. To render the screenshare, you will need the `participantId` who is presenting the screen, which can be found from the `presenterId` property of `useMeeting` hook.

```js
import {
  useParticipant,
  RTCView,
  MediaStream,
  useMeeting,
} from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  //
  const { presenterId } = useMeeting();

  return <>{presenterId && <PresenterView presenterId={presenterId} />}</>;
};

const PresenterView = ({ presenterId }) => {
  return <Text>PresenterView</Text>;
};
```

2. Now that the we have `presenterId`, we will get the `screenShareStream` from the `useParticipant` hook and play it in the `RTCView` component.

```js
const PresenterView = ({ presenterId }) => {
  const { screenShareStream, screenShareOn } = useParticipant(presenterId);

  return (
    <>
      // playing the media stream in the RTCView
      {screenShareOn && screenShareStream ? (
        <RTCView
          streamURL={new MediaStream([screenShareStream.track]).toURL()}
          objectFit={"contain"}
          style={{
            flex: 1,
          }}
        />
      ) : null}
    </>
  );
};
```

### Events associated with enableScreenShare

- Every Participant will receive a callback on [`onStreamEnabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamenabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive [`onPresenterChanged()`](/react-native/api/sdk-reference/use-meeting/events#onpresenterchanged) callback of the [`useMeeting`](/react-native/api/sdk-reference/use-meeting/introduction) hook with the participantId as `presenterId` who started the screen share.

### Events associated with disableScreenShare

- Every Participant will receive a callback on [`onStreamDisabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object.

- Every Participant will receive [`onPresenterChanged()`](/react-native/api/sdk-reference/use-meeting/events#onpresenterchanged) callback of the [`useMeeting`](/react-native/api/sdk-reference/use-meeting/introduction) hook with the `presenterId` as `null` indicating there is no presenter.

### Events associated with toggleScreenShare

- Every Participant will receive a callback on [`onStreamEnabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **screen share broadcasting was started**.

- Every Participant will receive a callback on [`onStreamDisabled()`](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled) of the [`useParticipant()`](/react-native/api/sdk-reference/use-participant/introduction) hook with `Stream` object if the **screen share broadcasting was stopped**.

- Every Participant will receive [`onPresenterChanged()`](/react-native/api/sdk-reference/use-meeting/events#onpresenterchanged) callback of the [`useMeeting`](/react-native/api/sdk-reference/use-meeting/introduction) hook with the participantId as `presenterId` who started the screen share or `null` if the screen share was turned off.

```js
import { useParticipant, useMeeting } from "@videosdk.live/react-native-sdk";

const MeetingView = () => {
  //Callback for when the presenter changes
  //highlight-start
  function onPresenterChanged(presenterId) {
    if(presenterId){
      console.log(presenterId, "started screen share");
    }else{
      console.log("someone stopped screen share");
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

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [enableScreenShare()](/react-native/api/sdk-reference/use-meeting/methods#enablescreenshare)
- [disableScreenShare()](/react-native/api/sdk-reference/use-meeting/methods#disablescreenshare)
- [toggleScreenShare()](/react-native/api/sdk-reference/use-meeting/methods#togglescreenshare)
- [onStreamEnabled()](/react-native/api/sdk-reference/use-participant/events#onstreamenabled)
- [onStreamDisabled()](/react-native/api/sdk-reference/use-participant/events#onstreamdisabled)
- [onPresenterChanged()](/react-native/api/sdk-reference/use-meeting/events#onpresenterchanged)
