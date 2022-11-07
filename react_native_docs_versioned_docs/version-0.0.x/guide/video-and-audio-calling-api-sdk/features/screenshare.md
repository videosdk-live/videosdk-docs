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

Whenever any participant wants to share mobile screen, they can simply do it with VideoSDK Meeting.

For Mobile Devices a complete screen will be share.

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

:::caution

For React Native iOS Screen Share feature, you need to follow this guide [React Native iOS Screen Share](/react-native/guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share)
:::

### Events related to screenshare

**Events associated with `enableScreenShare()`:**

- Every Participant will receive a callback on [`onStreamEnabled()`](../../../api/sdk-reference/use-participant/events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

- [`onPresenterChanged()`](../../../api/sdk-reference/use-meeting/events#onpresenterchanged) will also receive a callback with the `presenterId`.

**Events associated with `disableScreenShare()`:**

- Every Participant will receive a callback on [`onStreamDisabled()`](../../../api/sdk-reference/use-participant/events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

- [`onPresenterChanged()`](../../../api/sdk-reference/use-meeting/events#onpresenterchanged) will also receive a callback with the `presenterId`.

```js
function onStreamEnabled(stream) {
  if(stream.kind === 'share'){
    console.log("Screen Share Stream On: onStreamEnabled", stream);
  }
}

function onStreamDisabled(stream) {
  if(stream.kind === 'share'){
    console.log("Screen Share Stream Off: onStreamDisabled", stream);
  }
}

const {
  displayName
  ...
} = useParticipant(participantId,{
  onStreamEnabled,
  onStreamDisabled,
  ...
});

function onPresenterChanged(presenterId) {
  console.log(" onPresenterChanged", presenterId);
}

const {
  meetingId
  ...
} = useMeeting({
  onPresenterChanged,
  ...
});
```
