---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Android SDK.

## v0.1.21

**Release Date** : 13th July 2023

**Change log** :

- Integrate Open telemetry Traces & Logs (internal-release)

**Bug Fix** :

- enable the camera when `onActivityResumed()` triggered

---
## v0.1.20

**Release Date** : 10th June 2023

**Bug Fix** :

- Fix bluetooth permission issue for android version 12 and higher.

---
## v0.1.19

**Release Date** : 2nd June 2023

**Change log** :

- Add restart-ice notification (internal-release)

---
## v0.1.18

**Release Date** : 10th May 2023

**Bug Fix** :

- Fix clash between `initMeeting` customTrack property and `enableWebcam()` customTrack property.

---

## v0.1.17

**Release Date** : 2nd May 2023

**Change log** :

- Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](/android/api/sdk-reference/custom-tracks#custom-video-track)

---
## v0.1.15

**Release Date** : 31st March 2023

**Change log** :

- Add `HLS_PLAYABLE` state in `onHlsStateChanged` event.

    **Docs** : [onHlsStateChanged](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechanged)

---

## v0.1.14

**Release Date** : 28th February 2023

**Change log** :

- Participant can toggle between the `CONFERENCE` and `VIEWER` mode using `changeMode()` method.

    **Docs** : [changeMode()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/methods#changemode)

- Provide `startHLS()` and `stopHLS()` method for live streaming.

    **Docs** : [startHLS()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/methods#starthls)

    **Docs** : [stopHLS()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/methods#stophls)

- Provide `pin()`/`unpin()` method for Pining / Unpining the participant.

    **Docs** : [pin()/unpin()](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/pin-participants)

- Update `startRecording()`,`startLiveStream()` method

    **Docs** : [startRecording()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/methods#startrecording)

    **Docs** : [startLiveStream()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/methods#startlivestream)

---
## v0.1.13

**Release Date** : 13th january 2023

**Change log** :

- Provide  `VideoView`  component which can render video stream.

    **Docs** : [VideoView](/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/understand-videoView-component)
    
---
## v0.1.12

**Release Date** : 3rd Janurary 2023

**Change log** :

- Provide support of [`mavenCentral()`](https://search.maven.org/artifact/live.videosdk/rtc-android-sdk)
---

## v0.1.11

**Release Date** : 28th December 2022

**Bug Fix** :

- Fix jitpack issue.

---

## v0.1.10

**Release Date** : 24th December 2022

**Change log** :

1. To obtain video, audio and screen sharing statistics, the `Participant` class now has a [`getVideoStats()`](../../api/sdk-reference/participant-class/methods.md#getvideostats),[`getAudioStats()`](../../api/sdk-reference/participant-class/methods.md#getaudiostats),[`getShareStats()`](../../api/sdk-reference/participant-class/methods.md#getsharestats) methods.

2. Remove `multiStream` Support.

---

## v0.1.9

**Release Date** : 9th December 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)


**Bug Fix** :

1. Fix echo issue.

---

## v0.1.8

**Release Date** : 10th November 2022

**Change log** :

1. Added recordingState and liveStreamState event.

   **Docs** : [onRecordingStateChanged()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onrecordingstatechanged)

   **Docs** : [onLivestreamStateChanged()](https://docs.videosdk.live/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onlivestreamstatechanged)


**Bug Fix** :

1. Fix camera automatically enable when enable screenshare.

2. Handle crash on not providing empty screenshare notification title, content or icon.

---

## v0.1.7

**Release Date** : 1st November 2022

**Change log** : 

1. Provide support for banuba integration.

    **Code Sample** : [videosdk-rtc-android-sdk-banuba-example](https://github.com/videosdk-live/videosdk-rtc-android-sdk-banuba-example)

    **Docs** : [Banuba Intergation with VideoSDK](/android/guide/video-and-audio-calling-api-sdk/plugins/banuba-integration)

---

## v0.1.4

**Release Date** : 21st October 2022

**Change log** : 

1. Add support of customTrack in changeMic() method.

---

## v0.1.3

**Release Date** : 18th October 2022

**Change log** : None

**Bug Fix** :

1. Null Pointer Exception crash on meeting leave.

---

## v0.1.2

**Release Date** : 17th October 2022

**Change log** :

1.  CustomTrack for audio,video and screenshare.

    **Docs** : [Custom Video Track](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-video-track)

    **Docs** : [Custom Audio Track](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track)

    **Docs** : [Custom Screen Share Track](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-screen-share-track)

---

## v0.1.0 & v0.1.1

**Release Date** : 29th June 2022

**Change log** :

1. Updated internal dependency. 
