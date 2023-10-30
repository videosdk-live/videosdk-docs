---
sidebar_position: 1
sidebar_label: Methods
pagination_label: VideoSDK Class Methods
title: VideoSDK Class Methods
---

# VideoSDK Class Methods - Flutter

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

- customCameraVideoTrack

  - type: `CustomTrack`
  - `OPTIONAL`
  - Set the initial custom video track using different encoding parameters, camera facing mode, and optimization mode.

- customMicrophoneAudioTrack

  - type: `CustomTrack`
  - `OPTIONAL`
  - Set the initial custom audio track using different encoding parameters and optimization mode.

- mode

  - type: `Mode`
  - `OPTIONAL`
  - Set the participant mode i.e. `CONFERENCE` or `VIEWER`.
  - Default value is `CONFERENCE`.

- metaData

  - type: `Map<String,dynamic>`
  - `OPTIONAL`
  - If you want to provide additional details about a user joining a meeting, such as their profile image, you can pass that information in this parameter.
  
---

#### Returns

- _[`Room`](../room-class/introduction)_

#### Example

```js

CustomTrack videoTrack = await VideoSDK.createCameraVideoTrack(
  encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
  multiStream: false,
);

//Creating Custom Audio Track
CustomTrack audioTrack = await VideoSDK.createMicrophoneAudioTrack(
    encoderConfig: CustomAudioTrackConfig.high_quality);

// Create VideoSDK Room
Room room = VideoSDK.createRoom(
  roomId: "<ROOM-ID>",
  token: "<TOKEN>",
  displayName: "<DISPLAY-NAME>",
  micEnabled: false,
  camEnabled: false,
  maxResolution: 'hd',
  multiStream: false,
  defaultCameraIndex: 1, // Front Camera
  customCameraVideoTrack: videoTrack, // custom video track :: optional
  customMicrophoneAudioTrack: audioTrack, // custom audio track :: optional
  notification: const NotificationInfo(
    title: "Video SDK",
    message: "Video SDK is sharing screen in the room",
    icon: "notification_share",
  ),
  metaData: {},
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

---

### createCameraVideoTrack

- You can create a Video Track using `createCameraVideoTrack()` method of `VideoSDK` class.
- This method can be used to create video track using different encoding parameters, camera facing mode, and optimization mode.

#### Parameters

- **cameraId**:

  - type: `String`
  - required: `false`
  - It will be the id of the camera from which the video should be captured.

- **encoderConfig**:

  - type: `CustomVideoTrackConfig`
  - required: `false`
  - default: `h360p_w640p`
  - Allowed values : `h90p_w160p` | `h180p_w320p` | `h216p_w384p` | `h360p_w640p` | `h540p_w960p` | `h720p_w1280p` | `h1080p_w1920p` | `h1440p_w2560p` | `h2160p_w3840p` | `h120p_w160p` | `h180p_w240p` | `h240p_w320p` | `h360p_w480p` | `h480p_w640p` | `h540p_w720p` | `h720p_w960p` | `h1080p_w1440p` | `h1440p_w1920p`
  - It will be the encoderConfigs you can want to use for the Video Track.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **facingMode**:

  - type: `String`
  - required: `false`
  - Allowed values : `user` | `environment`
  - It will specifiy whether to use front or back camera for the video track.

- **multiStream**

  - type: `boolean`
  - required: `false`
  - default: true
  - It will specifiy if the stream should send multiple resolution layers or single resolution layer.

  :::info

  - For meetings with fewer than or equal to four participants, setting `multiStream:false` is regarded as best practice.
  - This parameter is only available from `v1.0.9`.

  :::

#### Returns

- `Future<CustomTrack>`

#### Example

```javascript
CustomTrack videoTrack = await VideoSDK.createCameraVideoTrack(
      encoderConfig: CustomVideoTrackConfig.h1440p_w1920p,
      multiStream: false,
      facingMode:"user",
    );
```

---

### createMicrophoneAudioTrack

- You can create a Audio Track using `createMicrophoneAudioTrack()` method of `VideoSDK` class.
- This method can be used to create audio track using different encoding parameters and noise cancellation configuration.

#### Parameters

- **microphoneId**:

  - type: `String`
  - required: `false`
  - It will be the id of the mic from which the audio should be captured.

- **encoderConfig**:

  - type: `CustomTrackAudioConfig`
  - required: `false`
  - default: `speech_standard`
  - Allowed values : `speech_low_quality` | `speech_standard` | `music_standard` | `standard_stereo` | `high_quality` | `high_quality_stereo`
  - It will be the encoder configuration you want to use for Audio Track.

- **noiseConfig**

  - **echoCancellation**

    - type: `boolean`
    - required: `false`
    - If `true` echo cancellation will turned on else it would be turned off.

  - **autoGainControl**

    - type: `boolean`
    - required: `false`
    - If `true` auto gain will turned on else it would be turned off.

  - **noiseSuppression**
    - type: `boolean`
    - required: `false`
    - If `true` noise suppression will turned on else it would be turned off.

#### Returns

- `Future<CustomTrack>`

#### Example

```javascript
CustomTrack audioTrack = await VideoSDK.createMicrophoneAudioTrack(
        encoderConfig: CustomAudioTrackConfig.high_quality);
```

</div>
