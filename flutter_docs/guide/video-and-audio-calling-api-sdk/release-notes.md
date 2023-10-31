---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes - Flutter

This page will keep you update all the releases of Flutter SDK.

## v1.0.12

**Release Date** : 24rd Mar 2023

**Change Log** :

1. [`pin()`](/flutter/api/sdk-reference/participant-class/methods#pin) added to pin a participant.
2. [`unpin()`](flutter/api/sdk-reference/participant-class/methods#unpin) added to unpin a participant.
3. [`changeMode()`](/flutter/api/sdk-reference/room-class/methods#changemode) allows the participant to switch mode between `CONFERENCE` and `VIEWER`.

## v1.0.11

**Release Date** : 03rd Mar 2023

**Bug Fix** :

- Fixed room not closing if leave() called before meeting is joined.
- Internal dependencies updated.

## v1.0.10

**Release Date** : 03rd Jan 2023

**Change log** :

1. Added `getVideoStats()`, `getAudioStats()` and `getShareStats()` to get the statistics for the video, audio and share stream of a participant.

   **Docs** :

   - [getVideoStats](../../api/sdk-reference/participant-class/methods.md#getvideostats)
   - [getAudioStats](../../api/sdk-reference/participant-class/methods.md#getaudiostats)
   - [getShareStats](../../api/sdk-reference/participant-class/methods.md#getsharestats)

## v1.0.9

**Release Date** : 09th Dec 2022

**Change log** :

1. Added support for custom audio and video tracks.

   **Docs** :

   - [Custom Video Track](../video-and-audio-calling-api-sdk/features/custom-track/custom-video-track.md)
   - [Custom Audio Track](../video-and-audio-calling-api-sdk/features/custom-track/custom-video-track.md)

2. Added recording, live streaming and HLS status events.

   **Docs** :

   - [recordingStateChanged](../../api/sdk-reference/room-class/events.md#recordingstatechanged)
   - [livestreamStateChanged](../../api/sdk-reference/room-class/events.md#livestreamstatechanged)
   - [hlsStateChanged](../../api/sdk-reference/room-class/events.md#hlsstatechanged)

3. Added event for participant notifying the change in video quality.

   **Docs** :

   - [videoQualityChanged](../../api/sdk-reference/participant-class/events.md#videoqualitychanged)

4. `startHls()` and `stopHls()` methods added.

   **Docs** :

   - [startHls](../../api/sdk-reference/room-class/methods.md#starthls)
   - [stopHls](../../api/sdk-reference/room-class/methods.md#stophls)

5. `startRecording()` and `startLiveStream()` updated to accept `config` values for the feed.

   **Docs** :

   - [startRecording](../../api/sdk-reference/room-class/methods.md#startrecording)
   - [startLivestream](../../api/sdk-reference/room-class/methods.md#startlivestream)

**Bug Fix** :

1. Fixed unable to start video or mic after turning them off.

---

## v1.0.8

**Release Date** : 25th Nov 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](../../api/sdk-reference/videosdk-class/methods.md#parameters)

---

## v1.0.7

**Release Date** : 18th Nov 2022

**Change log** :

1. Updated Gradle Version for Android.

---

## v1.0.6

**Release Date** : 1st Nov 2022

**Change log** :

1. Added [error events](./features/error-event.md) for room.

**Bug Fix** :

1. Fixed crash on `end()`, while the room is not joined yet.

---

## v1.0.5

**Release Date** : 08th Oct 2022

**Change log** :

1. Added support for [Screen share in iOS](./features/screenshare.md).

---

## v1.0.4

**Release Date** : 04th Oct 2022

**Change log** :

1. Added method to switch [audio output device](./features/switch-audio-output).

**Bug Fix** :

1. Fixed: **Error: No named parameter with name `printDevLog`** during the build.

---

## v1.0.3

**Release Date** : 13th Sept 2022

**Bug Fix** :

1. Fixed issue related to VideoRenderer.onFirstFrameRendered implementation.

---

## v1.0.2

**Release Date** : 1st Sept 2022

**Bug Fix** :

1. Fixed issue on room ends.
2. Provide better error message on room left

---

## v1.0.1

**Release Date** : 12th Aug 2022

**Bug Fix** :

1. Fixed issue on switching camera.

---

## v1.0.0

**Release Date** : 10th Aug 2022

**Change log** :

1. Renamed `Meeting` class to [`Room`](../../api/sdk-reference/room-class/introduction) class.
2. Changed import file `package:videosdk/rtc.dart` to [`package:videosdk/videosdk.dart`](../../api/sdk-reference/videosdk-class/introduction)
3. Changed events
   - `Events.meetingJoined` to [`Events.roomJoined`](../../api/sdk-reference/room-class/events#roomjoined).
   - `Events.meetingLeft` to [`Events.roomLeft`](../../api/sdk-reference/room-class/events#roomleft).
   - `Events.webcamRequested` to [`Events.cameraRequested`](../../api/sdk-reference/room-class/events#camerarequested).
4. Changed properties and methods for [`Room`](../../api/sdk-reference/room-class/introduction) class
   - `selectedWebcamId` to [`selectedCamId`](../../api/sdk-reference/room-class/properties#selectedcamid).
   - `enableWebcam()` to [`enableCam()`](../../api/sdk-reference/room-class/methods#enablecam).
   - `disableWebcam()` to [`disableCam()`](../../api/sdk-reference/room-class/methods#disablecam).
   - `changeWebcam()` to [`changeCam()`](../../api/sdk-reference/room-class/methods#changecam).
   - `getWebcams()` to [`getCameras()`](../../api/sdk-reference/room-class/methods#getcameras).
5. Changed methods for [`Participant`](../../api/sdk-reference/participant-class/introduction) class
   - `enableMic()` to [`unmuteMic()`](../../api/sdk-reference/participant-class/methods#unmutemic)
   - `disableMic()` to [`muteMic()`](../../api/sdk-reference/participant-class/methods#mutemic)
   - `enableWebcam()` to [`enableCam()`](../../api/sdk-reference/participant-class/methods#enablecam)
   - `disableWebcam()` to [`disableCam()`](../../api/sdk-reference/participant-class/methods#disablecam)
6. Added [`VideoSDK.createRoom()`](../../api/sdk-reference/videosdk-class/methods#createroom) to create VideoSDK Rooms. Use [`join()`](../../api/sdk-reference/room-class/methods#join) to join VideoSDK Room.
7. Added [`defaultCameraIndex`](../../api/sdk-reference/videosdk-class/methods#createroom) option to select default camera for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
8. Added [`micEnabled`](../../api/sdk-reference/room-class/properties#micenabled) property for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
9. Added [`camEnabled`](../../api/sdk-reference/room-class/properties#camenabled) property for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
10. Added [`end()`](../../api/sdk-reference/room-class/methods#end) method for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
11. Removed `MeetingBuilder` Widget.

**Bug Fix** :

1. Fixed the issue of joining room (meeting) multiple time.
2. Fixed issues related to resource consumption.
