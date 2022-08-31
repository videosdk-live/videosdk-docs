---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Android SDK.

## v0.0.25

**Release Date** : 24th August 2022

**Change log** :

1. Add [onMeetingStateChanged](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingstatechanged) Event Listener for Websocket connection status.

2. Throw `PREV_RECORDING_PROCESSING` error.

---

## v0.0.24

**Release Date** : 12th August 2022

**Change log** : None

**Bug Fix** :

1. Fix Echo issue on Xiomi Device after Mute Unmute Mic.

---

## v0.0.23

**Release Date** : 21st July 2022

**Change log** :

1.  CustomTrack for audio,video and screenshare.

    **Docs** : [Custom Video Track](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

    **Docs** : [Custom Audio Track](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

    **Docs** : [Custom Screen Share Track](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

2.  Provide support for banuba integration.

    **Code Sample** : [videosdk-rtc-android-sdk-banuba-example](https://github.com/videosdk-live/videosdk-rtc-android-sdk-banuba-example)

**Bug Fix** :

1.  Fix `PendingIntent.FLAG_IMMUTABLE` for android 12 or later.

2.  Camera flicker on screen share fix.

3.  Camera will automatically off when you open another activity.

---

## v0.0.21

**Release Date** : 1st July 2022

**Change log** :

1.  Add the ViewPort method for better video quality based on view container.

    **Docs** : [How to Set Viewport?](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/set-viewport)

---

## v0.0.17 & v0.0.20

**Release Date** : 27th June 2022

**Change log** : None

**Bug Fix** :

1. Mic issue in Redmi 9 device(OPUS codec).

2. For `arembi-v7a` architecture remove Audio/Opus codec

---

## v0.0.16

**Release Date** : 11th May 2022

**Change log** :

1. Add custom participantId in `initMeeting` method.

   **SDK Reference** : [customParticipantId](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#participantid)

2. Error Codes events Added.

   **Docs** : [Error Event](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/error-event)

**Bug Fix** :

1. FATAL EXCEPTION: AudioTrackJavaThread java.lang.UnsatisfiedLinkError on leave meeting.

---

## v0.0.15

**Release Date** : 27th April 2022

**Change log** : None

**Bug Fix** :

1. Crash on `meeting.end()` issue fixes.

2. Open native camera to stop publishing video from meeting.

---

## v0.0.14

**Release Date** : 30th March 2022

**Change log** : None

**Bug Fix** :

1. Android screen share crash issue on `stopScreenShare` fixes.

---

## v0.0.13

**Release Date** : 21st March 2022

**Change log** : None

**Bug Fix** :

1. `android:exported` needs to be explicitly specified for element.

---

## v0.0.11 & v0.0.12

**Release Date** : 17th March 2022

**Change log** :

1. Change input/output devices.

2. Pause/Resume participant stream.

   **Docs** : [Pause/Resume Video Stream](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/pause-resume-video-stream)

3. setQuality for participant stream.

   **Docs** : [Set Particpant Video Quality](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/set-participant-video-quality)

4. Incoming call detection event.

   **Docs** : [External Call Detection](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/external-call-detection)

---

## v0.0.10

**Release Date** : 8th March 2022

**Change log** : None

**Bug Fix** :

1. Crash issue while screen share.

---

## v0.0.9

**Release Date** : 1st March 2022

**Change log** :

1. Screen sharing feature added.

   **Docs** : [Share Your Screen](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/screenshare)

---

## v0.0.8

**Release Date** : 13th February 2022

**Change log** :

1. PubSub feature for messaging over topics.

   **Docs** : [PubSub](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/pubsub)

---

## v0.0.7

**Release Date** : 8th January 2022

**Change log** :

1. Added `onPresenterChanged` event for displaying screenshare.

   **SDK Reference** : [onPresenterChanged](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onpresenterchanged)

---

## v0.0.6

**Release Date** : 9th December 2021

**Change log** : None

**Bug Fix** :

1. Fixed audio issues for devices older than Android 10.

---

## v0.0.5

**Release Date** : 9th December 2021

**Change log** : None

**Bug Fix** :

1. Fixed meeting end and participant remove bugs.

---

## v0.0.4

**Release Date** : 29th November 2021

**Change log** :

1. Toggle other participants mic and webcam.

   **Docs** : [Leave or End Meeting](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/toggle-participant-media)

2. Remove partcipants from meeting.

3. Toggle meeting cloud recording.

   **Docs** : [Record Meeting](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/recording-meeting)

4. Go live on youtube and other platforms with RTMP.

   **Docs** : [Go Live On Social Media](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/go-live-social-media)

5. End meeting for all participants.

   **Docs** : [Leave or End Meeting](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting)

---

## v0.0.2 & v0.0.3

**Release Date** : 21st November 2021

**Change log** :

1. Emit all events on Main thread.

---

## v0.0.1

**Release Date** : 15th October 2021

**Change log** :

1. Pilot release.

2. Join and leave meeting.

   **Docs** : [Start or Join Meeting](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/start-join-meeting)

3. Toggle Mic and Camera.

   **Docs** : [Camera Controls](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/camera-controls)

   **Docs** : [Mic Controls](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/mic-controls)
