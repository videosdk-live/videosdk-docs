---
sidebar_label: Migration Notes
pagination_label: Migration Notes
---

# Migration Notes

This page will guide you to migrate from previous version of Flutter SDK.

## Migration to v1.0.0 from v0.0.14

1. We have renamed `Meeting` class to `Room` class.

2. Import `package:videosdk/videosdk.dart` instead of `package:videosdk/rtc.dart`.

   For Example:

   ```js title=v0.0.14
   import "package:videosdk/rtc.dart";
   ```

   ```js title=v1.0.0
   import "package:videosdk/videosdk.dart";
   ```

3. Replace MeetingBuilder with [`VideoSDK.createRoom()`](../../api/sdk-reference/videosdk-class/methods#createroom) and [`join()`](../../api/sdk-reference/room-class/methods#join).

   For Example:

   ```js title=v0.0.14
   // MeetingBuilder
   MeetingBuilder(
      meetingId: '<MEETING_ID>',
      token: '<TOKEN>',
      displayName: '<DISPLAY_NAME>',
      micEnabled: true,
      webcamEnabled: true,
      maxResolution: 'hd',
      notification: const NotificationInfo(
         title: "Video SDK",
         message: "Video SDK is sharing screen in the meeting",
         icon: "notification_share",
      ),
      builder: (_meeting){
         // Do Something
      }
   ),

   ```

   ```js title=v1.0.0
   // Creating VideoSDK Room
   Room room = VideoSDK.createRoom(
      roomId: '<ROOM_ID>',
      token: '<TOKEN>',
      displayName: '<DISPLAY_NAME>',
      micEnabled: true,
      camEnabled: true,
      maxResolution: 'hd',
      notification: const NotificationInfo(
         title: "Video SDK",
         message: "Video SDK is sharing screen in the meeting",
         icon: "notification_share",
      ),
   );

   // Joining VideoSDK Room
   room.join();

   ```

4. Change event `Events.meetingJoined` to [`Events.roomJoined`](../../api/sdk-reference/room-class/events#roomjoined).

   For Example:

   ```js title=v0.0.14
   meeting.on(Events.meetingJoined, (){
      // Do Something
   })
   ```

   ```js title=v1.0.0
   room.on(Events.roomJoined, (){
      // Do Something
   })
   ```

5. Change event `Events.meetingLeft` to [`Events.roomLeft`](../../api/sdk-reference/room-class/events#roomleft).

   For Example:

   ```js title=v0.0.14
   meeting.on(Events.meetingLeft, (){
      // Do Something
   })
   ```

   ```js title=v1.0.0
   room.on(Events.roomLeft, (){
      // Do Something
   })
   ```

6. Change event `Events.webcamRequested` to [`Events.cameraRequested`](../../api/sdk-reference/room-class/events#camerarequested).

   For Example:

   ```js title=v0.0.14
   meeting.on(Events.webcamRequested, (){
      // Do Something
   })
   ```

   ```js title=v1.0.0
   room.on(Events.cameraRequested, (){
      // Do Something
   })
   ```

7. Change `enableMic()` method to [`unmuteMic()`](../../api/sdk-reference/participant-class/methods#unmutemic) method of [`Participant Class`](../../api/sdk-reference/participant-class/introduction).

   For Example:

   ```js title=v0.0.14
   participant.enableMic();
   ```

   ```js title=v1.0.0
   participant.unmuteMic();
   ```

8. Change `disableMic()` method to [`muteMic()`](../../api/sdk-reference/participant-class/methods#mutemic) method of [`Participant Class`](../../api/sdk-reference/participant-class/introduction).

   For Example:

   ```js title=v0.0.14
   participant.disableMic();
   ```

   ```js title=v1.0.0
   participant.muteMic();
   ```

9. Change `enableWebcam()` method to [`enableCam()`](../../api/sdk-reference/participant-class/methods#enablecam) method of [`Participant class`](../../api/sdk-reference/participant-class/introduction).

   For Example:

   ```js title=v0.0.14
   participant.enableWebcam();
   ```

   ```js title=v1.0.0
   participant.enableCam();
   ```

10. Change `disableWebcam()` method to [`disableCam()`](../../api/sdk-reference/participant-class/methods#disablecam) method of [`Participant class`](../../api/sdk-reference/participant-class/introduction).

For Example:

```js title=v0.0.14
participant.disableWebcam();
```

```js title=v1.0.0
participant.disableCam();
```

11. Change `enableWebcam()` method to [`enableCam()`](../../api/sdk-reference/room-class/methods#enablecam) method of [`Room class`](../../api/sdk-reference/room-class/introduction).

For Example:

```js title=v0.0.14
meeting.enableWebcam();
```

```js title=v1.0.0
room.enableCam();
```

12. Change `disableWebcam()` method to [`disableCam()`](../../api/sdk-reference/room-class/methods#disablecam) method of [`Room class`](../../api/sdk-reference/room-class/introduction).

For Example:

```js title=v0.0.14
meeting.disableWebcam();
```

```js title=v1.0.0
room.disableCam();
```

13. Change `getWebcams()` method to [`getCameras()`](../../api/sdk-reference/room-class/methods#getcameras) method of [`Room class`](../../api/sdk-reference/room-class/introduction).

For Example:

```js title=v0.0.14
meeting.getWebcams();
```

```js title=v1.0.0
room.getCameras();
```

14. Change `changeWebcam()` method to [`changeCam()`](../../api/sdk-reference/room-class/methods#changecam) method of [`Room class`](../../api/sdk-reference/room-class/introduction).

For Example:

```js title=v0.0.14
meeting.changeWebcam(deviceId);
```

```js title=v1.0.0
room.changeCam(deviceId);
```

15. Change `selectedWebcamId` property to [`selectedCamId`](../../api/sdk-reference/room-class/properties#selectedcamid) on [`Room class`](../../api/sdk-reference/room-class/introduction).

For Example:

```js title=v0.0.14
String webCamId = meeting.selectedWebcamId;
```

```js title=v1.0.0
String webCamId = meeting.selectedCamId;
```

---
