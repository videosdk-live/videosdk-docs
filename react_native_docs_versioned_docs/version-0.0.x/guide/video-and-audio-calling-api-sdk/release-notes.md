---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of React Native SDK.

## v0.0.38

**Release Data** : 12th November 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Provide `onVideoQualityChanged` in `useParticipant` hook to listen video quality changes.

   **SDK Reference** : [onVideoQualityChange](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/set-participant-video-quality#event)

3. Provide meeting `CONFERENCE` and `VIEWER` mode on `MeetingProvider` config.

   <!-- **SDK Reference** : [Meeting Mode](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/recording-meeting) -->

---

## v0.0.37

**Release Data** : 4th November 2022

**Change log** :

- Provide Types support.

**Bug Fix** :

- Fix error `collector-producer | got error UnsupportedError: not implemented` during development environment.

---

## v0.0.36

**Release Date** : 8th October 2022

**Change log** :

1. iOS : Switch audio output device during the session.

   **Docs** : [Switch Audio Output](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-audio-output)

---

## v0.0.35

**Release Data** : 23rd September 2022

**Change log** :

1. Added [Error Event](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/error-event) for,

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

   **SDK Reference** : [onHlsStateChanged](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onhlsstatechanged)

_This version will store timeline of the session, session stats and participant stats. This will be available in your [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions?page=1&perPage=20)_

## v0.0.34

**Release Date** : 2nd September 2022

**Change log** :

1. Android : Switch audio output device during the session.

   **Docs** : [Switch Audio Output](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-audio-output)

---

## v0.0.33

**Release Date** : 21st August 2022

**Change log** :

1. Recording and Livestream status event added.

   **Docs** : [Recording Events](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onrecordingstatechanged)

2. Set Audio packet priority high.

3. Internal dependency update.

4. Added `getVideoStats` and `getAudioStats` methods for getting particular participant streams statistics.

   **SDK Reference** : [getVideoStats](https://docs.videosdk.live/react-native/api/sdk-reference/use-participant/methods#getvideostats)

   **SDK Reference** : [getAudioStats](https://docs.videosdk.live/react-native/api/sdk-reference/use-participant/methods#getaudiostats)

5. Added `onMeetingStateChanged` event for getting state of meeting changes.

   **SDK Reference** : [onMeetingStateChanged](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/events#onmeetingstatechanged)

6. Custom audio, video and share track now accepts `MediaStream` instead of `MediaStreamTrack`.

7. Added types for better IDE support.

**Bug Fix** :

1. Fixed issues with Custom audio and video tracks.

2. Updated types indicating optional value or not.

3. Fix `reading s.data on undefined` error.

---

## v0.0.32

**Release Date** : 1st July 2022

**Change log** :

1. Add the ViewPort method for better video quality based on view container.

   **Docs** : [How to Set Viewport?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/set-viewport)

   **Video** : [Improve Video Calling Quality with Video SDK](https://www.youtube.com/watch?v=k9iVafyCyAc)

2. Provide Echo Cancellation on the audio stream.

**Bug Fix** :

1.  Resolve `changeWebcam` and `changeMic` customTrack issue.

---

## v0.0.30 & v0.0.31

**Release Date** : 7th June 2022

**Change log** : None

**Bug Fix** :

1.  Resolve UDP port blocking and video blackout issue.

---

## v0.0.28 & v0.0.29

**Release Date** : 17th May 2022

**Change log** :

1. Update Internal dependency.

---

## v0.0.27

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Custom track issue on MeetingProvider config fix.

2. Throw error when device or browser does not support audio or video communication.

3. Resolved error `No peers found for the Data consumer` while start recording/ livestream/hls.

---

## v0.0.26

**Release Date** : 23rd April 2022

**Change log** :

1. Release Custom Video track feature

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

---

## v0.0.25

**Release Date** : 9th March 2022

**Change log** :

1. Release Pubsub message feature for text communication.

   **Docs** : [How to use Pubsub feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/pubsub)

2. Customise recording layout for Cloud Recording / HLS and RTMP out.

   **SDK Reference** : [Start Recording](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#startrecording)

   **SDK Reference** : [Start HLS](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#starthls)

   **SDK Reference** : [Start RTMP](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#startlivestream)

---

## v0.0.24

**Release Date** : 24th February 2022

**Change log** :

1. Added `onError` event listener to subscribe to all meeting errors occurring in the SDK.

   **Docs** : [Error Event](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/error-event)

2. Update WebRTC dependency.

---

## v0.0.23

**Release Date** : 10th January 2022

**Change log** :

1. Connect Meetings (BETA): This new feature enables you to fetch participant data between two or more meetings and make participants switch meetings.

   **Docs** : [How to use Connect Meetings feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/connection/overview)

2. Switch Meeting : This feature is used for switching participant of one meeting to another meeting.

   **Docs** : [How to use Switch Meeting feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-participant)

3. Add custom participantId in `MeetingProvider` config.

   **SDK Reference** : [Custom ParticipantId](https://docs.videosdk.live/react-native/api/sdk-reference/meeting-provider#participantid)
