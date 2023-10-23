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

# Share Your Screen - Flutter

- Whenever any participant wants to share a complete screen of mobile, they can simply do it with VideoSDK Room.

- This guide will provide an overview of how to enable or disable Screen Share in a room.

## Enable Screen Share

- `Room` class provides the method to enable screen-sharing.

- In order to start screen-sharing just call `room.enableScreenShare()` method.

```js
ElevatedButton(
    child: Text("Start ScreenSharing"),
    onPressed: () {
        room.enableScreenShare();
    },
),
```

:::caution

For Flutter iOS Screen Share feature, you need to follow this guide [Flutter iOS Screen Share](../extras/flutter-ios-screen-share)
:::

### Customise notification

- When a presenter starts screen share, presenter will receive a notification with a pre-defined title and messages.

- You can Customise those title, message and icon as per your requirements using `NotificationInfo` class and passed to `createRoom()` method.

```js
VideoSDK.createRoom(
    .
    .
    notification: const NotificationInfo(
        title: "Video SDK",
        message: "Video SDK is sharing screen in the room",
        icon: "notification_share", // drawable icon name
    ),
),
```

## Disable Screen Share

By using `room.disableScreenShare()` function, a participant can stop publishing screen stream to other participants.

```js
ElevatedButton(
    child: Text("Stop ScreenSharing"),
    onPressed: () {
        room.disableScreenShare();
    },
),
```

## Display Screen Share Stream

#### Local Participant

When a Local participant share the screen, `streamEnabled` Event on the `Participant` is triggered with the `Stream` which can be added to a `RTCVideoView`.

```js
room.localParticipant.on(Events.streamEnabled, (Stream _stream) {
    if (_stream.kind == 'share') {
        screenShareStream = _stream;
      }
    });
```

#### Other Participants

When other participant(Except you) share their screen, `presenterChanged` Event on the `Participant` is triggered with the `participantId` of the screen share.

```js
room.on(Events.presenterChanged, (_activePresenterId) {
    Participant? activePresenterParticipant = room.participants[_activePresenterId];

    Stream? _stream = activePresenterParticipant?
                        .streams.values
                        .singleWhere((e) => e.kind == "share");

    remoteParticipantShareStream = _stream;
});
```
