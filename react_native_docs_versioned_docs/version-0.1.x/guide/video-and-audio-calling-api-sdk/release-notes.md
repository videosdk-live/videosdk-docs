---
sidebar_label: Release Notes
pagination_label: Release Notes
tags: [releasenotes]
---

# Release Notes - React Native

This page will keep you updated on all the releases of React Native SDK.

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


