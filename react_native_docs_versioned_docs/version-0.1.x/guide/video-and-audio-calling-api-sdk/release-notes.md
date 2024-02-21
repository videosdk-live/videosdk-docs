---
sidebar_label: Release Notes
pagination_label: Release Notes
tags: [releasenotes]
---

# Release Notes - React Native

This page will keep you updated on all the releases of React Native SDK.

## v0.1.4

**Release Date** : 13th Feb 2024

**Change Log** :

- Provide Pre-Call Screen's features.

  - Provide `getDevices()` method in `useMediaDevice` hook to get list of media input/output devices.

    **Docs** : [getDevices()](../../api/sdk-reference/use-mediaDevice/methods.md#getdevices)

  - Provide `getCameras()` method in `useMediaDevice` hook to get list of camera input devices.

    **Docs** : [getCameras()](../../api/sdk-reference/use-mediaDevice/methods.md#getcameras)

  - Provide `getAudioDeviceList()` method in `useMediaDevice` hook to get list of audio devices.

    **Docs** : [getAudioDeviceList()](../../api/sdk-reference/use-mediaDevice/methods.md#getaudiodevicelist)

  - Provide `onAudioDeviceChanged()` callback in `useMediaDevice` hook, which gets triggered whenever a audio devices connected to or removed from the mobile-device.

    **Docs** : [onAudioDeviceChanged()](../../api/sdk-reference/use-mediaDevice/events.md#onaudiodevicechanged)

  - Provide `requestPermission()` method in `useMediaDevice` hook to request a media permission.

    **Docs** : [requestPermission()](../../api/sdk-reference/use-mediaDevice/methods.md#requestpermission)

  - Provide `checkPermission()` method in `useMediaDevice` hook to check status of a media permissions.

    **Docs** : [checkPermission()](../../api/sdk-reference/use-mediaDevice/methods.md#checkpermission)

  - Provide `checkBlueToothPermission()` method in `useMediaDevice` hook to check if the application has permission to access Bluetooth on the device.

    **Docs** : [checkBlueToothPermission()](../../api/sdk-reference/use-mediaDevice/methods.md#checkbluetoothpermission)

  - Provide `requestBluetoothPermission()` method in `useMediaDevice` requests permission to access Bluetooth on the device.

    **Docs** : [requestBluetoothPermission()](../../api/sdk-reference/use-mediaDevice/methods.md#requestbluetoothpermission)

**Bug Fix** :

- Foreground service updated for compatibility with React Native v73+.

:::tip

To effectively leverage the functionalities of Pre-Call Screen, it is recommended to utilize version `^0.1.0` of the `@videosdk.live/react-native-incallmanager` library.

:::
---

## v0.1.2

**Release Date** : 5th Jan 2024

**Bug Fix** :

- Fix: when the mode changes participants list is reactive.

---

## v0.1.0

**Release Date** : 11th Dec 2023

**Change Log** :

1. MeetingProvider Configuration Enhancement:

   - New Feature: Added `defaultCamera` property in `MeetingProvider` config.
   - Usage: Set `defaultCamera` to `front` or `back` to initialize the camera with the front-facing (selfie) or rear-facing (main) mode, respectively.
   - Default Value: `front`

   **Docs** : [defaultCamera](https://docs.videosdk.live/react-native/api/sdk-reference/meeting-provider#defaultcamera)

2. Local Video Capture Functionality:

   - New Feature: Introduced `captureImage()` function in the `useParticipant` hook.
   - Usage: Enables capturing the local participant's video stream.

   **Docs** : [captureImage()](https://docs.videosdk.live/react-native/api/sdk-reference/use-participant/methods#captureimage)

3. File Upload and Retrive Capability:

   - New Feature: Introduced `useFile` hook.
   - Functionality: Facilitates uploading and retrieving base64-encoded files from the VideoSDK's temporary file storage system.

   **Docs** : [useFile](https://docs.videosdk.live/react-native/api/sdk-reference/use-file)
