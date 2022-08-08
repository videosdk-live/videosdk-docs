---
sidebar_position: 1
sidebar_label: Methods
pagination_label: RTC Class Methods
title: RTC Class Methods
---

<div class="sdk-api-ref-only-h4">

### initialize()

- This is a factory method used to initialize RTC SDK. This method must be called before using any methods of SDK.

#### Parameters

- globalToken:
  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Global Token will be used if token is not passed while calling [`createRoom()`](#createroom) method.
  - `OPTIONAL`

#### Returns

- _`void`_

#### Example

```js
// Initialize SDK
await RTC.initialize();
```

---

### createRoom()

- This method is provided by SDK to build instance of [`RTC Room`](../room-class/introduction) based on given configuration.

#### Parameters

- roomId

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Id of the Room to be created.
  - `REQUIRED`

- token

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Sets AuthToken, which is used for authentication purposes. If not passed, Global Token will be used.
  - `OPTIONAL`

- displayName

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Sets name of the LocalParticipant to be displayed.
  - `REQUIRED`

- notification

  - type: [`NotificationInfo`]
  - Sets notification configuration for the notification, that will be shown, while screen-sharing.
  - `REQUIRED`

- micEnabled

  - type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
  - Whether `mic` of the participant will be `on`, while joining the room. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.
  - `OPTIONAL`

- camEnabled

  - type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)
  - Whether `camera` of the participant will be `on`, while joining the room. If it is set to `false`, then camera of that participant will be `disabled` by default, but can be `enabled` or `disabled`
  - `OPTIONAL`

- participantId

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Unique Id of the participant. If not passed then SDK will create an Id by itself and will use that id.
  - `OPTIONAL`

- maxResolution

  - type: [`String`](https://api.dart.dev/stable/2.15.1/dart-core/String-class.html)
  - Sets the maximum upload resolution of that participant's camera video stream.
  - `OPTIONAL`

- defaultCameraIndex

  - type: [`int`](https://api.dart.dev/stable/2.15.1/dart-core/int-class.html)
  - Sets camera, which will be used by default, while joining the RTC Room. Index of [`MediaDevices`](properties#mediadevices) will be used to set default camera. You can also change camera later.
  - `OPTIONAL`

#### Returns

- _[`Room`](../room-class/introduction)_

#### Example

```js
// Create RTC Room
Room room = RTC.createRoom(
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
Map<MediaDeviceType, List<MediaDeviceInfo>> mediaDevices = await RTC.loadMediaDevices();
```

</div>
