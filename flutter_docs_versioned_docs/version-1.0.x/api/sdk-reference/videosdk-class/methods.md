---
sidebar_position: 1
sidebar_label: Methods
pagination_label: VideoSDK Class Methods
title: VideoSDK Class Methods
---

<div class="sdk-api-ref-only-h4">

### createRoom()

- This method is provided by SDK to build instance of [`VideoSDK Room`](../room-class/introduction) based on given configuration.

#### Parameters

- roomId

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - `REQUIRED`
  - Id of the Room to be created.

- token

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - `REQUIRED`
  - Sets AuthToken, which is used for authentication purposes.

- displayName

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - `REQUIRED`
  - Sets name of the LocalParticipant to be displayed.

- notification

  - type: [`NotificationInfo`]
  - `OPTIONAL`
  - Sets configuration for the notification, that will be shown, while screen-sharing.

- micEnabled

  - type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
  - `OPTIONAL`
  - Whether `mic` of the participant will be `on`, while joining the room. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.
  - Default value of `micEnabled` is true.

- camEnabled

  - type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
  - `OPTIONAL`
  - Whether `camera` of the participant will be `on`, while joining the room. If it is set to `false`, then camera of that participant will be `disabled` by default, but can be `enabled` or `disabled`
  - Default value of `camEnabled` is true.

- multiStream

  - type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
  - `OPTIONAL`
  - Default value is `true`.
  - It will specifiy if the stream should send multiple resolution layers or single resolution.

- participantId

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - `OPTIONAL`
  - Unique Id of the participant. If not passed then SDK will create an Id by itself and will use that id.

- maxResolution

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - `OPTIONAL`
  - Sets the maximum upload resolution of that participant's camera video stream.

- defaultCameraIndex

  - type: [`int`](https://api.dart.dev/stable/2.15.1/dart-core/int-class.html)
  - `OPTIONAL`
  - Sets camera, which will be used by default, while joining the VideoSDK Room. Index of [`MediaDevices`](properties#mediadevices) will be used to set default camera. You can also change camera later.
  - Default value of `defaultCameraIndex` is `0`.

#### Returns

- _[`Room`](../room-class/introduction)_

#### Example

```js
// Create VideoSDK Room
Room room = VideoSDK.createRoom(
  roomId: "<ROOM-ID>",
  token: "<TOKEN>",
  displayName: "<DISPLAY-NAME>",
  micEnabled: false,
  camEnabled: false,
  maxResolution: 'hd',
  defaultCameraIndex: 1, // Front Camera
  notification: const NotificationInfo(
    title: "Video SDK",
    message: "Video SDK is sharing screen in the room",
    icon: "notification_share",
  ),
);
```

---

### loadMediaDevices()

- This method is used to load or refresh MediaDevices i.e. Audio Devices and Video Devices.

#### Returns

- _`Future<Map<MediaDeviceType, List<MediaDeviceInfo>>>`_

#### Example

```js
Map<MediaDeviceType, List<MediaDeviceInfo>> mediaDevices = await VideoSDK.loadMediaDevices();
```

</div>
