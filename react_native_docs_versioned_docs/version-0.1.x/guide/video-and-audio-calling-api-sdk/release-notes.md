---
sidebar_label: Release Notes
pagination_label: Release Notes
tags: [releasenotes]
---

# Release Notes - React Native

This page will keep you updated on all the releases of React Native SDK.

## v0.1.6

**Release Date** : 18th Mar 2024

**Change Log** :

- More Precise Media-Related Errors on `onError` Event:

  This update includes detailed error codes and messages for media-related issues. Listen to these error messages on the onError event to diagnose and resolve issues more effectively.

**Docs** : [Error Event](../video-and-audio-calling-api-sdk/get-notified/error-events.md)

| Constant                                     | Code | Message                                                                                                                                                           |
| -------------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ERROR_INVALID_CUSTOM_VIDEO_TRACK             | 3029 | The provided custom video track is invalid; reverting to the default video track. Please ensure that the video track meets the required specifications.         |
| ERROR_INVALID_CUSTOM_AUDIO_TRACK             | 3030 | The provided custom audio track is invalid; reverting to the default audio track. Please ensure that the audio track meets the required specifications.         |
| ERROR_CUSTOM_VIDEO_TRACK_ENDED               | 3031 | The provided custom video track is in an ended state. Please verify the video track's status, and try again.                                                    |
| ERROR_CUSTOM_AUDIO_TRACK_ENDED               | 3032 | The provided custom audio track is in an ended state. Please verify the audio track's status, and try again.                                                    |
| ERROR_ACTION_PERFORMED_BEFORE_MEETING_JOINED | 3035 | Oops! Something went wrong. The room was in a connecting state, and during that time, an action encountered an issue. Please try again after joining a meeting. |
| ERROR_RN_CAMERA_ACCESS_DENIED_OR_DISMISSED   | 3036 | Oops! It seems like camera access was denied or dismissed. To proceed, kindly grant access through your App settings.                                           |
| ERROR_RN_CAMERA_NOT_FOUND                    | 3037 | Please ensure your camera is connected and turned on.                                                                                                           |
| ERROR_RN_MIC_ACCESS_DENIED_OR_DISMISSED      | 3038 | Oops! It seems like mic access was denied or dismissed. To proceed, kindly grant access through your App settings.                                              |
| ERROR_RN_MIC_NOT_FOUND                       | 3039 | Please ensure your mic is connected and turned on.                                                                                                              |
| ERROR_RN_CAMERA_ACCESS_UNAVAILABLE           | 3040 | Camera access unavailable: Please ensure your device is compatible.                                                                                             |
| ERROR_RN_MIC_ACCESS_UNAVAILABLE              | 3041 | Microphone access unavailable: Please ensure your device is compatible.                                                                                         |
| ERROR_RN_CAMERA_TRACK_ENDED                  | 3042 | Camera track has ended. Please make sure your camera is turned on or try restarting it.                                                                         |
| ERROR_RN_MIC_TRACK_ENDED                     | 3043 | Microphone track has ended or the microphone is disconnected. Please check your microphone connection and try again.                                            |

---

## v0.1.5

**Release Date** : 12th Mar 2024

**Bug Fix** :

- Resolved the problem causing flickering in the video and screen share streams when initiating screen sharing.

---

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
