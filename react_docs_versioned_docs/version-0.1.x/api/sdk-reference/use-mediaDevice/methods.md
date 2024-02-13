---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Methods returned by useMediaDevice Hook
title: Methods returned by useMediaDevice Hook
---

# Methods returned by useMediaDevice Hook - React

<div class="sdk-api-ref-only-h4">

### getDevices()

- The `getDevices()` method returns a list of the currently available media input and output devices, such as microphones, cameras, headsets, and so forth. The returned `Promise` is resolved with an array of `DeviceInfo` objects describing the devices.

- `DeviceInfo` class has four properties :

  1. `DeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `DeviceInfo.groupId`

     - Returns a string that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.

  3. `DeviceInfo.kind`

     - Returns an enumerated value that is either `videoinput`, `audioinput` or `audiooutput`.

  4. `DeviceInfo.label`
     - Returns a string describing this device (for example "External USB Webcam").

#### Returns

- `Promise<Array<DeviceInfo>>`

---

### getCameras()

- The `getCameras()` method returns a list of currently available video input devices. The returned `Promise` is resolved with an array of `CameraDeviceInfo` objects describing the video input devices.

- `CameraDeviceInfo` class has four properties :

  1. `CameraDeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `CameraDeviceInfo.groupId`

     - Returns a string that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.

  3. `CameraDeviceInfo.kind`

     - Returns an enumerated value that is `videoinput`.

  4. `CameraDeviceInfo.label`
     - Returns a string describing this device (for example "External USB Webcam").

#### Returns

- `Promise<Array<CameraDeviceInfo>>`

---

### getMicrophones()

- The `getMicrophones()` method returns a list of currently available audio input devices. The returned `Promise` is resolved with an array of `MicrophoneDeviceInfo` objects describing the audio input devices.

- `MicrophoneDeviceInfo` class has four properties :

  1. `MicrophoneDeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `MicrophoneDeviceInfo.groupId`

     - Returns a string that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.

  3. `MicrophoneDeviceInfo.kind`

     - Returns an enumerated value that is `audioinput`.

  4. `MicrophoneDeviceInfo.label`
     - Returns a string describing this device (for example "External Microphone").

#### Returns

- `Promise<Array<MicrophoneDeviceInfo>>`

---

### getPlaybackDevices()

- The `getPlaybackDevices()` method returns a list of currently available playback devices. The returned `Promise` is resolved with an array of `PlaybackDeviceInfo` objects describing the playback devices.

- `PlaybackDeviceInfo` class has four properties :

  1. `PlaybackDeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `PlaybackDeviceInfo.groupId`

     - Returns a string that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.

  3. `PlaybackDeviceInfo.kind`

     - Returns an enumerated value that is `audiooutput`.

  4. `PlaybackDeviceInfo.label`
     - Returns a string describing this device (for example "External HeadPhones").

#### Returns

- `Promise<Array<PlaybackDeviceInfo>>`

---

### requestPermission()

- The `requestPermission()` method prompts the user for permission to use a media input. It returns a `Promise` that resolves to a `Map<string, boolean>` object.

#### Parameters

- `Permission`
  - A `string` specifying the specific kinds of media, that you want to request.
  - `Optional`
  - Allow Values : `audio` ,`video`,`audio_video`
  - Default : `audio_video`

#### Returns

- `Promise<Map<string, boolean>>`

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-sdk";

const { requestPermission } = useMediaDevice();

try {
  const requestAudioVideoPermission = await requestPermission(
    Constants.permission.AUDIO_VIDEO
  );
  console.log(
    "request Audio and Video Permissions",
    requestAudioVideoPermission.get(Constants.permission.AUDIO),
    requestAudioVideoPermission.get(Constants.permission.VIDEO)
  );
} catch (ex) {
  console.log("Error in requestPermission ", ex);
}
```

:::tip
`requestPermission()` will throw an error when matching media is not available.
:::

---

### checkPermissions()

- The `checkPermissions()` method checks for permission to use a media input. It returns a `Promise` that resolves to a `Map<string, boolean>` object.

#### Parameters

- `Permission`
  - A `string` specifying the types of media to check.
  - `Optional`
  - Allow Values : `audio` ,`video`,`audio_video`
  - Default : `audio_video`

#### Returns

- `Promise<Map<string, boolean>>`

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-sdk";

const { checkPermissions } = useMediaDevice();

try {
  const checkAudioVideoPermission = await checkPermissions();
  console.log(
    "check Audio and Video Permissions",
    checkAudioVideoPermission.get(Constants.permission.AUDIO),
    checkAudioVideoPermission.get(Constants.permission.VIDEO)
  );
} catch (ex) {
  console.log("Error in checkPermissions ", ex);
}
```

:::tip
`checkPermissions()` will throw an error when the browser doesn't support permission check functionality.
:::

---

</div>
