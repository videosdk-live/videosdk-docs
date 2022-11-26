---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of React JS SDK.

## v0.1.55

**Release Date** : 25th November 2022

**Change log** :

1. To obtain screen sharing statistics, the `useParticipant` hook now has a [`getShareStats`](../../api/sdk-reference/use-participant/methods.md#getsharestats) function.

## v0.1.53

**Release Date** : 11th November 2022

**Change log** :

1. Provide `multistream` parameter for sending multiple resolution layers or single resolution layer.

   **Docs** : [Multi Stream](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Provide `onVideoQualityChange` in `useParticipant` hook to listen video quality changes.

   **SDK Reference** : [onVideoQualityChange](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/set-participant-video-quality#event)

3. Provide meeting `CONFERENCE` and `VIEWER` mode on `MeetingProvider` config.

   **SDK Reference** : [Meeting Mode](https://docs.videosdk.live/react/api/sdk-reference/meeting-provider#mode)

---

## v0.1.52

**Release Date** : 4th November 2022

**Change log** :

- Provide Types support.

---

## v0.1.51

**Release Date** : 5th October 2022

**Change log** :

- Support of React v18.

**Bug Fix** :

- Fix `npm ERR! ERESOLVE unable to resolve dependency tree` after installing SDK.

---

## v0.1.50

**Release Date** : 23rd September 2022

**Change log** :

1. Added [Error Event](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/error-event) for,

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

   **SDK Reference** : [onHlsStateChanged](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)

_This version will store timeline of the session, session stats and participant stats. This will be available in your [VideoSDK Session Dashboard](https://app.videosdk.live/meetings/sessions?page=1&perPage=20)_

---

## v0.1.49

**Release Date** : 21st August 2022

**Change log** : None

**Bug Fix** :

1. Fix `reading s.data on undefined` error.

2. Participant initial audio & video improper state issue fix.

---

## v0.1.48

**Release Date** : 11th August 2022

**Change log** : None

**Bug Fix** :

1. Fixed issues with Custom audio and video tracks.

2. Updated types indicating optional value or not.

---

## v0.1.46

**Release Date** : 05th August 2022

**Change Log:**

1. Added support for [screenshare with Audio](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/screenshare#screen-share-with-audio).

2. Custom audio, video and share track now accepts `MediaStream` instead of `MediaStreamTrack`.

3. Added types for better IDE support.

---

## v0.1.43

**Release Date** : 29th July 2022

**Change log:**

1. Added `getVideoStats` and `getAudioStats` methods for getting particular participant streams statistics.

   **SDK Reference** : [getVideoStats](https://docs.videosdk.live/react/api/sdk-reference/use-participant/methods#getvideostats)

   **SDK Reference** : [getAudioStats](https://docs.videosdk.live/react/api/sdk-reference/use-participant/methods#getaudiostats)

2. Added `onMeetingStateChanged` event for getting state of meeting changes.

   **SDK Reference** : [onMeetingStateChanged](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onmeetingstatechanged)

---

## v0.1.42

**Release Date** : 23rd July 2022

**Change log** :

1. Set Audio packet priority high.

2. Internal dependency update.

---

## v0.1.41

**Release Date** : 19th July 2022

**Change log** :

1. Recording and Livestream status event added.

   **Docs** : [Recording Events](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onrecordingstatechanged)

---

## v0.1.37

**Release Date** : 1st July 2022

**Change log** :

1. Add the ViewPort method for better video quality based on view container.

   **Docs** : [How to Set Viewport?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/set-viewport)

   **Video** : [Improve Video Calling Quality with Video SDK](https://www.youtube.com/watch?v=k9iVafyCyAc)

2. Provide Echo Cancellation on the audio stream.

**Bug Fix** :

1.  Remove googDsp dependency warn.

2.  Resolve `changeWebcam` and `changeMic` customTrack issue.

---

## v0.1.35 & v0.1.36

**Release Date** : 7th June 2022

**Change log** : None

**Bug Fix** :

1.  Resolve UDP port blocking and video blackout issue.

---

## v0.1.34 & v0.1.33

**Release Date** : 17th May 2022

**Change log** :

1. Update Internal dependency.

---

## v0.1.32

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Custom track issue on MeetingProvider config fix.

2. Throw error when device or browser does not support audio or video communication.

3. Resolved error `No peers found for the Data consumer` while start recording/ livestream/hls.

---

## v0.1.31

**Release Date** : 29th April 2022

**Change log** :

1. Applied custom video track on `changeWebcam` method.

2. Applied custom audio track on `changeMic` method.

**Bug Fix** :

1. Resolve Mozila browser (Mac OS) localParticipant Video blackout issue.

---

## v0.1.30

**Release Date** : 23rd April 2022

**Change log** :

1. Release Custom Video track feature

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

---

## v0.1.23

**Release Date** : 9th March 2022

**Change log** :

1. Release Pubsub message feature for text communication.

   **Docs** : [How to use Pubsub feature?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/pubsub)

2. Customise recording layout for Cloud Recording / HLS and RTMP out.

   **SDK Reference** : [Start Recording](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/methods#startrecording)

   **SDK Reference** : [Start HLS](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/methods#starthls)

   **SDK Reference** : [Start RTMP](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/methods#startlivestream)

---

## v0.1.14

**Release Date** : 15th January 2022

**Change log** :

1. Added `onError` event listener to subscribe to all meeting errors occurring in the SDK.

   **Docs** : [Error Event](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/error-event)

---

## v0.1.13

**Release Date** : 10th January 2022

**Change log** :

1. Connect Meetings (BETA): This new feature enables you to fetch participant data between two or more meetings and make participants switch meetings.

   **Docs** : [How to use Connect Meetings feature?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/connection/overview)

2. Switch Meeting : This feature is used for switching participant of one meeting to another meeting.

   **Docs** : [How to use Switch Meeting feature?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/features/switch-participant)

3. Add custom participantId in `MeetingProvider` config.

   **SDK Reference** : [Custom ParticipantId](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#participantid)
