---
sidebar_position: 1
sidebar_label: Methods
pagination_label: VideoSDK Class Methods
title: VideoSDK Class Methods
---

# VideoSDK Class Methods - Javascript

<div class="sdk-api-ref-only-h4">

### config()

- Before initializing the meeting, you will first need to provide `token`. By using `config()` method, you can set the token property of VideoSDK class. 
- Please refer this [documentation](/api-reference/realtime-communication/intro/) to generate a token.

#### Returns

- `void`

---

### getDevices()

- The `getDevices()` method returns a list of the currently available media input and output devices, such as microphones, cameras, headsets, and so forth. The returned `Promise` is resolved with an array of `DeviceInfo` objects describing the devices.

- `DeviceInfo` class have four properties :

  1. `DeviceInfo.deviceId`
        - Returns a string that is an identifier for the represented device that is persisted across sessions.

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

- The `getCameras()` method returns a list of the currently available video input devices. The returned `Promise` is resolved with an array of `CameraDeviceInfo` objects describing the camera devices.

- `CameraDeviceInfo` class have four properties :

  1. `CameraDeviceInfo.deviceId`
        - Returns a string that is an identifier for the represented device that is persisted across sessions.

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

- The `getMicrophones()` method returns a list of the currently available audio input devices. The returned `Promise` is resolved with an array of `MicrophoneDeviceInfo` objects describing the microphone devices.

- `MicrophoneDeviceInfo` class have four properties :

  1. `MicrophoneDeviceInfo.deviceId`
        - Returns a string that is an identifier for the represented device that is persisted across sessions.

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

- The `getPlaybackDevices()` method returns a list of the currently available playback devices. The returned `Promise` is resolved with an array of `PlaybackDeviceInfo` objects describing the playback devices.

- `PlaybackDeviceInfo` class have four properties :

  1. `PlaybackDeviceInfo.deviceId`
        - Returns a string that is an identifier for the represented device that is persisted across sessions.

  2. `PlaybackDeviceInfo.groupId`
      - Returns a string that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.

  3. `PlaybackDeviceInfo.kind`
      - Returns an enumerated value that is `audiooutput`.

  4. `PlaybackDeviceInfo.label`
      - Returns a string describing this device (for example "External HeadPhones").

#### Returns

- `Promise<Array<PlaybackDeviceInfo>>`
---

### getNetworkStats()

-  The `getNetworkStats()` method will return `Promise` that resolves with an object containing network speed statistics or rejects with an error message if the operation fails or exceeds the specified timeout.
- The result object will include the `downloadSpeed` and `uploadSpeed`, expressed in megabytes per second (MB/s).

#### Parameters

- `timeoutDuration`
   - It helps to prevent the method from getting stuck indefinitely when fetching network statistics. It lets you set a maximum time for the operation, and if it takes longer than that, the method stops gracefully. 
   - You can provide `timeoutDuration` in milliseconds. If not provided or is not an integer, the default timeout is set to `60,000` milliseconds (1 minute).
   - `Optional`

#### Returns

- `{Promise<{downloadSpeed: number,uploadSpeed: number}> }`

#### Example

```js
try {
  const options = { timeoutDuration: 45000 }; // Set a custom timeout of 45 seconds
  const networkStats = await VideoSDK.getNetworkStats(options);
  console.log("Download Speed: ", networkStats["downloadSpeed"]);  // will return value in mb/s
  console.log("Upload Speed: ", networkStats["uploadSpeed"]); // will return value in mb/s
} catch(ex)
{
  console.log("Error in networkStats: ", ex);
}

```

---

### requestPermission()

-  The `requestPermission()` method prompts the user for permission to use a media input. It returns a `Promise` that resolves to a `Map<string, boolean>` object.

#### Parameters

- `Permission`
  - A `string` specifying the types of media to request.
  - `Required`
  - Allow Values : `audio` ,`video`,`audio_video`

#### Returns

- `Promise<Map<string, boolean>>`

#### Example

```js
try {
  const requestPermission = await VideoSDK.requestPermission(
      VideoSDK.Constants.permission.AUDIO_AND_VIDEO,
  );
  console.log(
    "request Audio and Video Permissions",
    requestPermission.get(VideoSDK.Constants.permission.AUDIO),
    requestPermission.get(VideoSDK.Constants.permission.VIDEO)
  );
} catch(ex)
{
  console.log("Error in requestPermission ", ex);
}

```

:::tip
`requestPermission()` will throw an error when matching media is not available.
:::

---

### checkPermissions()

-  The `checkPermissions()` method check permission to use a media input. It returns a `Promise` that resolves to a `Map<string, boolean>` object.

#### Parameters

- `Permission`
  - A `string` specifying the types of media to check.
  - `Required`
  - Allow Values : `audio` ,`video`,`audio_video`

#### Returns

- `Promise<Map<string, boolean>>`

#### Example

```js
try {
  const checkAudioVideoPermission = await VideoSDK.checkPermissions(
    VideoSDK.Constants.permission.AUDIO_AND_VIDEO,
  );
  console.log(
    "check Audio and Video Permissions",
    checkAudioVideoPermission.get(VideoSDK.Constants.permission.AUDIO),
    checkAudioVideoPermission.get(VideoSDK.Constants.permission.VIDEO)
  );
} catch(ex)
{
  console.log("Error in checkPermissions ", ex);
}

```

:::tip
`checkPermissions()` will throw an error when browser doesn't support permission check functionality.
:::

---

### on()

#### Parameters

- eventType : [`event of videosdk class`](./events.md)
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for device-changed-event
VideoSDK.on("device-changed", deviceChangeEventListener);
```

---

### off()

#### Parameters

- eventType : [`event of videosdk class`](./events.md)
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for device-changed-event
VideoSDK.off("device-changed", deviceChangeEventListener);
```

---

</div>
