---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of JavaScript SDK.

## v0.0.53

**Release Data** : 11th November 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Provide `video-quality-changed` in Participant class to listen video quality changes.

   **SDK Reference** : [video-quality-changed](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/set-participant-video-quality#event)

3. Provide meeting `CONFERENCE` and `VIEWER` mode on initMeeting.

   **SDK Reference** : [Meeting Mode](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#mode)

---

## v0.0.52

**Release Data** : 4th November 2022

**Change log** :

- Provide Types support.

---

## v0.0.50

**Release Data** : 23rd September 2022

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

**Release Data** : 21st August 2022

**Change log** : None

**Bug Fix** :

1. Fix `reading s.data on undefined` error.

---

## v0.0.47

**Release Data** : 11th August 2022

**Change log** : None

**Bug Fix** :

1. Fixed issues with Custom audio and video tracks.

2. Updated types indicating optional value or not.

---

## v0.0.44

**Release Data** : 05th August 2022

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

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

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
