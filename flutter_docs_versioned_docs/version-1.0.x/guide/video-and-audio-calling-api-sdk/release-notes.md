---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Flutter SDK.

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
6. Added [`Videosdk.createRoom()`](../../api/sdk-reference/videosdk-class/methods#createroom) to create Videosdk Rooms. Use [`join()`](../../api/sdk-reference/room-class/methods#join) to join Videosdk Room.
7. Added [`defaultCameraIndex`](../../api/sdk-reference/videosdk-class/methods#createroom) option to select default camera for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
8. Added [`micEnabled`](../../api/sdk-reference/room-class/properties#micenabled) property for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
9. Added [`camEnabled`](../../api/sdk-reference/room-class/properties#camenabled) property for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
10. Added [`end()`](../../api/sdk-reference/room-class/methods#end) method for [`Room`](../../api/sdk-reference/room-class/introduction) Class.
11. Removed `MeetingBuilder` Widget.

**Bug Fix** :

1. Fixed the issue of joining room (meeting) multiple time.
2. Fixed issues related to resource consumption.

## v0.0.14

**Release Date** : 11th July 2022

**Change log** : None

**Bug Fix** :

1. Add the ViewPort method for better video quality based on view container.

   **Docs** : [How to Set Viewport?](https://docs.videosdk.live/flutter/guide/video-and-audio-calling-api-sdk/features/set-viewport)

---

## v0.0.8

**Release Date** : 25th Nov 2021

**Change log** : None

**Bug Fix** :

1. Participant can pause or resume all video, audio and shareshare streams.

2. Participant can set quality of video stream of other participant.

---
