---
sidebar_label: Release Notes
pagination_label: Release Notes
tags: [releasenotes]
---

# Release Notes - Javascript

This page will provide you with updates on all releases of the Javascript SDK.

## v0.0.82

**Release Date** : 18th Mar 2024

**Change Log** :

- More Precise Media-Related Errors on `error` Event:

  This update includes detailed error codes and messages for media-related issues. Listen to these error messages on the `error` event to diagnose and resolve issues more effectively.

**Docs** : [Error Event](../video-and-audio-calling-api-sdk/get-notified/error-events.md)

| Constant                                     | Code | Message                                                                                                                                                                                                                          |
| -------------------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ERROR_CAMERA_ACCESS_DENIED_OR_DISMISSED      | 3017 | Oops! It seems like camera access was denied or dismissed. To proceed, kindly grant access through your browser settings.                                                                                                        |
| ERROR_MICROPHONE_ACCESS_DENIED_OR_DISMISSED  | 3018 | Oops! It seems like microphone access was denied or dismissed. To proceed, kindly grant access through your browser settings.                                                                                                    |
| ERROR_CAMERA_PERMISSION_DENIED_BY_OS         | 3019 | Camera permission denied by OS system settings. Please check the system settings and grant permission for this browser.                                                                                                          |
| ERROR_MICROPHONE_PERMISSION_DENIED_BY_OS     | 3020 | Microphone permission denied by OS system settings. Please check the system settings and grant permission for this browser.                                                                                                      |
| ERROR_CAMERA_NOT_FOUND                       | 3021 | Please ensure your camera is connected and turned on, and that the camera driver is installed and up-to-date.                                                                                                                    |
| ERROR_MICROPHONE_NOT_FOUND                   | 3022 | Please ensure your microphone is connected and turned on.                                                                                                                                                                        |
| ERROR_CAMERA_IN_USE                          | 3023 | The camera is being used by another application. Please close any programs utilizing the camera, such as video conferencing tools, screen recording software, or other browsers. Restart your browser and attempt again.         |
| ERROR_MICROPHONE_IN_USE                      | 3024 | The microphone is being used by another application. Please close any programs utilizing the microphone, such as video conferencing tools, screen recording software, or other browsers. Restart your browser and attempt again. |
| ERROR_CAMERA_PERMISSION_OR_AUTOPLAY_ISSUE    | 3025 | It seems like there's an issue with camera permission or video autoplay, you can check out this link for details: [http://tinyurl.com/autoplay-issue](http://tinyurl.com/autoplay-issue)                                         |
| ERROR_VIDEO_SOURCE_INITIATION_FAILED         | 3026 | Unable to initiate video source. Please verify browser settings for video permissions.                                                                                                                                           |
| ERROR_WEBCAM_TRACK_ENDED                     | 3027 | Webcam track has ended or the webcam is disconnected. Please ensure your webcam is properly connected and try restarting it.                                                                                                     |
| ERROR_MICROPHONE_TRACK_ENDED                 | 3028 | Microphone track has ended or the microphone is disconnected. Please check your microphone connection and try again.                                                                                                             |
| ERROR_INVALID_CUSTOM_VIDEO_TRACK             | 3029 | The provided custom video track is invalid; reverting to the default video track. Please ensure that the video track meets the required specifications.                                                                          |
| ERROR_INVALID_CUSTOM_AUDIO_TRACK             | 3030 | The provided custom audio track is invalid; reverting to the default audio track. Please ensure that the audio track meets the required specifications.                                                                          |
| ERROR_CUSTOM_VIDEO_TRACK_ENDED               | 3031 | The provided custom video track is in an ended state. Please verify the video track's status, and try again.                                                                                                                     |
| ERROR_CUSTOM_AUDIO_TRACK_ENDED               | 3032 | The provided custom audio track is in an ended state. Please verify the audio track's status, and try again.                                                                                                                     |
| ERROR_CAMERA_ACCESS_UNAVAILABLE              | 3033 | Camera access unavailable: Please ensure your device is compatible and that you're on a secure website (https://).                                                                                                               |
| ERROR_MICROPHONE_ACCESS_UNAVAILABLE          | 3034 | Microphone access unavailable: Please ensure your device is compatible and that you're on a secure website (https://).                                                                                                           |
| ERROR_ACTION_PERFORMED_BEFORE_MEETING_JOINED | 3035 | Oops! Something went wrong. The room was in a connecting state, and during that time, an action encountered an issue. Please try again after joining a meeting.                                                                  |

---

## v0.0.80

**Release Date** : 19th January 2024

**Change Log** :

- Provide `getNetworkStats()` method in `VideoSDK` class to get `downloadSpeed` and `uploadSpeed` of network.

  **Docs** : [getNetworkStats()](../../api/sdk-reference/videosdk-class/methods.md#getnetworkstats)

- Change `Permission` parameter to `Optional` in `requestPermission()` and `checkPermissions()` methods of `VideoSDK` class.

---

## v0.0.79

**Release Date** : 5th January 2024

**Change Log** :

- Provide Pre-Call Screen's features.

  - Provide `getDevices()` method in `VideoSDK` class to get list of media input/output devices.

    **Docs** : [getDevices()](../../api/sdk-reference/videosdk-class/methods.md#getdevices)

  - Provide `getCameras()` method in `VideoSDK` class to get list of camera input devices.

    **Docs** : [getCameras()](../../api/sdk-reference/videosdk-class/methods.md#getcameras)

  - Provide `getMicrophones()` method in `VideoSDK` class to get list of audio input devices.

    **Docs** : [getMicrophones()](../../api/sdk-reference/videosdk-class/methods.md#getmicrophones)

  - Provide `getPlaybackDevices()` method in `VideoSDK` class to get list of audio output devices.

    **Docs** : [getPlaybackDevices()](../../api/sdk-reference/videosdk-class/methods.md#getplaybackdevices)

  - Provide `device-changed` event in `VideoSDK` class, which gets triggered whenever a media device is connected to or removed from the system.

    **Docs** : [device-changed](../../api/sdk-reference/videosdk-class/events.md#device-changed)

  - Provide `requestPermission()` method in `VideoSDK` class to request a media permission.

    **Docs** : [requestPermission()](../../api/sdk-reference/videosdk-class/methods.md#requestpermission)

  - Provide `checkPermission()` method in `VideoSDK` class to check status of a media permissions.

    **Docs** : [checkPermission()](../../api/sdk-reference/videosdk-class/methods.md#checkpermissions)

- Provide Getter for currently used webcam and mic device

  - Provide `selectedCameraDevice` property in `Meeting` class to get currently used camera device in the meeting.

    **Docs** : [selectedCameraDevice](../../api/sdk-reference/meeting-class/properties.md#selectedcameradevice)

  - Provide `selectedMicrophoneDevice` property in `Meeting` class to get currently used microphone device in the meeting.

    **Docs** : [selectedMicrophoneDevice](../../api/sdk-reference/meeting-class/properties.md#selectedmicrophonedevice)

- Optimized Reconnection Logics.

---

## v0.0.78

**Release Date** : 30th Dec 2023

**Change Log** :

- Reduce SDK size.

---

## v0.0.75

**Release Date** : 1st Dec 2023

**Change Log** :

- Added `captureImage` method in the `Participant` object to capture the image of the user from MediaStream.

  **Docs** : [captureImage()](https://docs.videosdk.live/javascript/api/sdk-reference/participant-class/methods#captureimage)

- Added methods `uploadBase64File` and `fetchBase64File` to upload and download a temporary file.

  **Docs** : [uploadBase64File](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#uploadbase64file)

  **Docs** : [fetchbase64file](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#fetchbase64file)

---

## v0.0.74

**Release Date** : 27th Oct 2023

**Change Log** :

- Added `metaData` property associated with `Participant` to pass additional information.
- Added `payload` feature in PubSub to pass additional payload data.
- Added `sendOnly` feature to PubSub to Publish data for only Participants mentioned.

---

## v0.0.73

**Release Date** : 7th Oct 2023

**Bug Fix** :

- Fixed `trackEnded` issue while removing wired headset.

---

## v0.0.67

**Release Date** : 4th May 2023

**Bug Fix** :

- Updated type definations

- Fixed `changeMic` not switching mic issue.

- Fixed `deviceId` ignored if device had a virtual camera.

---

## v0.0.66

**Release Date** : 29th April 2023

**Change log** :

- Added Typescript Support.

**Bug Fix** :

- The Remote participant audio levels remain consistent even when the local participant mutes or unmutes their microphone.

- RTC stats are now available on the latest browser versions.

---

## v0.0.63

**Release Date** : 31st March 2023

**Change log** :

- `HLS_PLAYABLE` state added in `hls-state-changed` event.
- `livestreamState`, `recordingState`, `hlsState` and `hlsUrls` getters added in Meeting.
- `hlsUrls` getter added in Meeting

---

## v0.0.62

**Release Date** : 3rd March 2023

**Change log** :

- Updated Types.

- Updated Internal Dependencies.

---

## v0.0.61

**Release Date** : 10th February 2023

**Change log** :

- Improve bitrate logic in the `multiStream` feature so that user's CPU and the network are optimise.

---

## v0.0.60

**Release Date** : 6th February 2023

**Change log** :

- Replace custom track in `changeWebcam` method.

---

## v0.0.59

**Release Date** : 3rd February 2023

**Change log** : none

**Bug Fix** :

- Network switch & reconnection issue fixes (covered all possible edge cases that were causing interruptions during the meeting)

---

## v0.0.57

**Release Date** : 28th December 2022

**Change log** : none

**Bug Fix** :

- Network switch & re connection issue fixes in [meeting-state-changed](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#meeting-state-changed) event.

---

## v0.0.56

**Release Date** : 20th December 2022

**Change log** :

1. Participant can toggle between the `CONFERENCE` and `VIEWER` mode by using `changeMode()` method.

   **Docs** : [Change Mode](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#changemode)

---

## v0.0.55

**Release Date** : 14th December 2022

**Change log** : None

**Bug Fix** :

1. Fix `failed: DOMException: Answer tried to enable an m-section that was disabled in the offer` error on Enable Webcam in Firefox browser.

---

## v0.0.54

**Release Date** : 25th November 2022

**Change log** :

1. To obtain screen sharing statistics, the `Participant` class now has a [`getShareStats`](../../api/sdk-reference/participant-class/methods.md#getsharestats) function.

---

## v0.0.53

**Release Date** : 11th November 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Provide `video-quality-changed` in Participant class to listen video quality changes.

   **SDK Reference** : [video-quality-changed](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/set-participant-video-quality#event)

3. Provide meeting `CONFERENCE` and `VIEWER` mode on initMeeting.

   **SDK Reference** : [Meeting Mode](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#mode)

---

## v0.0.52

**Release Date** : 4th November 2022

**Change log** :

- Provide Types support.

---

## v0.0.50

**Release Date** : 23rd September 2022

**Change log** :

1. Added [Error Event](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/error-event) for,

   1. If someone is denying media controls permissions such as `Video`, `Mic` and `Screen Share`
   2. Previous Recording, RTMP or HLS is being processed.

**Error Code Table :**

| Type                                          | Code | Message                                                                                 |
| --------------------------------------------- | ---- | --------------------------------------------------------------------------------------- |
| **ERROR_GET_VIDEO_MEDIA_PERMISSION_DENIED**   | 3014 | Video capture permission denied.                                                        |
| **ERROR_GET_AUDIO_MEDIA_PERMISSION_DENIED**   | 3015 | Audio capture permission denied.                                                        |
| **ERROR_GET_DISPLAY_MEDIA_PERMISSION_DENIED** | 3016 | Screen sharing permission denied.                                                       |
| **PREV_RECORDING_PROCESSING**                 | 4018 | Previous recording session is being processed, please try again after few seconds!      |
| **PREV_RTMP_RECORDING_PROCESSING**            | 4019 | Previous RTMP recording session is being processed, please try again after few seconds! |
| **PREV_HLS_STREAMING_PROCESSING**             | 4020 | Previous HLS streaming session is being processed, please try again after few seconds!  |

2. Event added for HLS state (starting, started, stopping and stopped)

   **SDK Reference** : [hls-state-changed](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)

_This version will store timeline of the session, session stats and participant stats. This will be available in your [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions?page=1&perPage=20)_

---

## v0.0.49

**Release Date** : 21st August 2022

**Change log** : None

**Bug Fix** :

1. Fix `reading s.data on undefined` error.

---

## v0.0.47

**Release Date** : 11th August 2022

**Change log** : None

**Bug Fix** :

1. Fixed issues with Custom audio and video tracks.

2. Updated types indicating optional value or not.

---

## v0.0.44

**Release Date** : 05th August 2022

**Change Log:**

1. Added support for [screenshare with Audio](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/screenshare#screen-share-with-audio).

2. Custom audio, video and share track now accepts `MediaStream` instead of `MediaStreamTrack`.

3. Added types for better IDE support.

---

## v0.0.42

**Release Date** : 29th July 2022

**Change log:**

1.  Added `getVideoStats` and `getAudioStats` methods for getting particular participant streams statistics.

    **SDK Reference** : [getVideoStats](https://docs.videosdk.live/javascript/api/sdk-reference/participant-class/methods#getvideostats)

    **SDK Reference** : [getAudioStats](https://docs.videosdk.live/javascript/api/sdk-reference/participant-class/methods#getaudiostats)

2.  Added `meeting-state-changed` event for getting state of meeting changes.

    **SDK Reference** : [meeting-state-changed](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#meeting-state-changed)

---

## v0.0.41

**Release Date** : 23rd July 2022

**Change log** :

1. Set Audio packet priority high.

2. Internal dependency update.

---

## v0.0.40

**Release Date** : 19th July 2022

**Change log** :

1. Recording and Livestream status event added.

   **Docs** : [Recording Events](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/recording-meeting)

---

## v0.0.36

**Release Date** : 1st July 2022

**Change log** :

1. Add the ViewPort method for better video quality based on view container.

   **Docs** : [How to Set Viewport?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/set-viewport)

   **Video** : [Improve Video Calling Quality with Video SDK](https://www.youtube.com/watch?v=k9iVafyCyAc)

2. Provide Echo Cancellation on the audio stream.

**Bug Fix** :

1.  Remove googDsp dependency warn.

2.  Resolve `changeWebcam` and `changeMic` customTrack issue.

---

## v0.0.34 & v0.0.35

**Release Date** : 7th June 2022

**Change log** : None

**Bug Fix** :

1.  Resolve UDP port blocking and video blackout issue.

---

## v0.0.32 & v0.0.33

**Release Date** : 16th May 2022

**Change log** :

1. Update Internal dependency.

---

## v0.0.31

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Custom track issue on initMeeting fix.

2. Throw error when device or browser does not support audio or video communication.

3. Resolved error `No peers found for the Data consumer` while start recording/ livestream/hls.

---

## v0.0.30

**Release Date** : 29th April 2022

**Change log** :

1. Applied custom video track on `changeWebcam` method.

2. Applied custom audio track on `changeMic` method.

**Bug Fix** :

1. Resolve Mozila browser (Mac OS) localParticipant Video blackout issue.

---

## v0.0.29

**Release Date** : 23rd April 2022

**Change log** :

1. Release Custom Video track feature

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-screen-share-track)

---

## v0.0.24

**Release Date** : 12th February 2022

**Change log** :

1. Release Pubsub message feature for text communication.

   **Docs** : [How to use Pubsub feature?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/pubsub)

2. Customise recording layout for Cloud Recording / HLS and RTMP out.

   **SDK Reference** : [Start Recording](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#startrecording)

   **SDK Reference** : [Start HLS](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#starthls)

   **SDK Reference** : [Start RTMP](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/methods#startlivestream)

---

## v0.0.23

**Release Date** : 10th January 2022

**Change log** :

1. Connect Meetings (BETA): This new feature enables you to fetch participant data between two or more meetings and make participants switch meetings.

   **Docs** : [How to use Connect Meetings feature?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview)

2. Added `meeting.on(“error”)` event listener to subscribe to all meeting errors occurring in the SDK.

   **Docs** : [Error Event](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/error-event)

3. Add custom participantId in `initMeeting` method

   **SDK Reference** : [Custom ParticipantId](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#participantid)
