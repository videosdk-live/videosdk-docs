---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Flutter SDK.

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
