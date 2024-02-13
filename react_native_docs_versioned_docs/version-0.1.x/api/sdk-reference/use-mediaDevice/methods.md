---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Methods returned by useMediaDevice Hook
title: Methods returned by useMediaDevice Hook
---

# Methods returned by useMediaDevice Hook - React Native

<div class="sdk-api-ref-only-h4">

### getDevices()

- The `getDevices()` method returns a list of the currently available media input and output devices, such as microphones, cameras, headsets, and so forth. The returned `Promise` is resolved with an array of `DeviceInfo` objects describing the devices.

- `DeviceInfo` class has four properties :

  1. `DeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `DeviceInfo.kind`

     - Returns an enumerated value that is either `video` or `audio`.

  3. `DeviceInfo.label`
     - Returns a string describing this device (for example `BLUETOOTH`).

#### Returns

- `Promise<Array<DeviceInfo>>`

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { getDevices } = useMediaDevice();

const onPress = async () => {
  try {
    const listofDevice = await getDevices();
    console.log("List of Devices:", listofDevice);
  } catch (ex) {
    console.log("Error in getDevices ", ex);
  }
};
```

---

### getCameras()

- The `getCameras()` method returns a list of currently available camera devices. The returned `Promise` is resolved with an array of `CameraDeviceInfo` objects describing the camera devices.

- `CameraDeviceInfo` class has four properties :

  1. `CameraDeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `CameraDeviceInfo.kind`

     - Returns an enumerated value that is `video`.

  3. `CameraDeviceInfo.facingMode`
     - Returns a string indicating the camera's position, such as `front` or `back`

#### Returns

- `Promise<Array<CameraDeviceInfo>>`

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { getCameras } = useMediaDevice();

const onPress = async () => {
  try {
    const listofCameras = await getCameras();
    console.log("List of Cameras:", listofCameras);
  } catch (ex) {
    console.log("Error in getting Cameras ", ex);
  }
};
```

---

### getAudioDeviceList()

- The `getAudioDeviceList()` method returns a list of currently available audio devices. The returned `Promise` is resolved with an array of `MicrophoneDeviceInfo` objects describing the audio devices.

- `MicrophoneDeviceInfo` class has four properties :

  1. `MicrophoneDeviceInfo.deviceId`

     - Returns a string that is an identifier for the represented device, persisted across sessions.

  2. `MicrophoneDeviceInfo.kind`

     - Returns an enumerated value that is `audio`.

  3. `MicrophoneDeviceInfo.label`
     - Returns a string describing this device (for example `BLUETOOTH`).

#### Returns

- `Promise<Array<MicrophoneDeviceInfo>>`

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { getAudioDeviceList } = useMediaDevice();

const onPress = async () => {
  try {
    const listofMic = await getAudioDeviceList();
    console.log("List of Microphone:", listofMic);
  } catch (ex) {
    console.log("Error in getting Microphone ", ex);
  }
};
```

---

### requestPermission()

- The `requestPermission()` method prompts the user for permission to use a camera and mic. It returns a `Promise` that resolves to a `Map<string, boolean>` object.

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
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { requestPermission } = useMediaDevice();

const onPress = async () => {
  try {
    const requestAudioVideoPermission = await requestPermission(
      Constants.permission.AUDIO_VIDEO
    );
    console.log(
      "Request Audio and Video Permissions",
      requestAudioVideoPermission.get(Constants.permission.AUDIO),
      requestAudioVideoPermission.get(Constants.permission.VIDEO)
    );
  } catch (ex) {
    console.log("Error in requestPermission ", ex);
  }
};
```

:::tip
`requestPermission()` will throw an error when matching media is not available.
:::

---

### checkPermission()

- The `checkPermission()` method checks for permission to use a camera and mic. It returns a `Promise` that resolves to a `Map<string, boolean>` object.

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
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { checkPermission } = useMediaDevice();

const onPress = async () => {
  try {
    const checkAudioVideoPermission = await checkPermission();
    console.log(
      "check Audio and Video Permissions",
      checkAudioVideoPermission.get(Constants.permission.AUDIO),
      checkAudioVideoPermission.get(Constants.permission.VIDEO)
    );
  } catch (ex) {
    console.log("Error in checkPermission ", ex);
  }
};
```

:::tip
`checkPermission()` will throw an error when the browser doesn't support permission check functionality.
:::

---

### checkBlueToothPermission()

- The `checkBlueToothPermission()` method checks if the application has permission to access Bluetooth on the device. It returns a Promise that resolves to a boolean value indicating whether Bluetooth permission is granted.

#### Returns

- `Promise<boolean>`

:::info

- This method is only supported on Android devices running Android 12 or later.
- This method is not supported on iOS devices.

:::

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { checkBlueToothPermission } = useMediaDevice();

const onPress = async () => {
  try {
    const checkBTPermission = await checkBlueToothPermission();
    console.log("Check BT Permission:", checkBTPermission);
  } catch (ex) {
    console.log("Error in checkBTPermission ", ex);
  }
};
```

---

### requestBluetoothPermission()

- The `requestBluetoothPermission()` method requests permission to access Bluetooth on the device. It returns a Promise that resolves to a boolean value indicating whether the permission request was successful.

#### Returns

- `Promise<boolean>`

:::info

- This method is only supported on Android devices running Android 12 or later.
- This method is not supported on iOS devices.

:::

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

const { requestBluetoothPermission } = useMediaDevice();

const onPress = async () => {
  try {
    const checkBTPermission = await requestBluetoothPermission();
    console.log("Check BT Permission:", checkBTPermission);
  } catch (ex) {
    console.log("Error in checkBTPermission ", ex);
  }
};
```

</div>
