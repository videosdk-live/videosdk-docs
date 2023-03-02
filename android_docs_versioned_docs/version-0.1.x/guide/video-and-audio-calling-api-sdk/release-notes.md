---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Android SDK.

## v0.1.13

**Release Date** : 13th january 2023

**Change log** :

- Provide  `VideoView`  component which can render video stream.

    **Docs** : [VideoView](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/components/videoView)
    
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

    **Docs** : [Banuba Intergation with VideoSDK](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/extras/banuba-integration)

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

    **Docs** : [Custom Video Track](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

    **Docs** : [Custom Audio Track](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

    **Docs** : [Custom Screen Share Track](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

---

## v0.1.0 & v0.1.1

**Release Date** : 29th June 2022

**Change log** :

1. Updated internal dependency. 
