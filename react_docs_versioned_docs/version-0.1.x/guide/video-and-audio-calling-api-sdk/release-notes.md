---
sidebar_label: Release Notes
pagination_label: Release Notes
tags: [releasenotes]
---

# Release Notes

This page will keep you update all the releases of React JS SDK.

## v0.1.77

**Release Date** : 7th Oct 2023

**Bug Fix** :

- Fixed `trackEnded` issue while removing wired headset.

---

## v0.1.73

**Release Date** : 4th May 2023

**Bug Fix** :

- Updated types definations

---

## v0.1.72

**Release Date** : 4th May 2023

**Bug Fix** :

- Fixed `changeMic` not switching mic issue.

- Fixed `deviceId` ignored if device had a virtual camera.

---

## v0.1.71

**Release Date** : 29th April 2023

**Change log** :

- Added Typescript Support.

**Bug Fix** :

- The Remote participant audio levels remain consistent even when the local participant mutes or unmutes their microphone.

- RTC stats are now available on the latest browser versions.

---

## v0.1.68

**Release Date** : 31st March 2023

**Change log** :

- `HLS_PLAYABLE` state added in `onHlsStateChanged` callback.
- `livestreamState`, `recordingState`, `hlsState` getters added in useMeeting.
- `hlsUrls` getter added in `useMeeting`.

---

## v0.1.67

**Release Date** : 3rd March 2023

**Change log** :

- Updated Types.

- Updated Internal Dependencies.

---

## v0.1.66

**Release Date** : 10th February 2023

**Change log** :

- Improve bitrate logic in the `multiStream` feature so that user's CPU and the network are optimise.

---

## v0.1.64

**Release Date** : 6th February 2023

**Change log** :

- Replace custom track in `changeWebcam` method.

---

## v0.1.59

**Release Date** : 3rd February 2023

**Change log** : none

**Bug Fix** :

- Network switch & reconnection issue fixes (covered all possible edge cases that were causing interruptions during the meeting)

---

## v0.1.57

**Release Date** : 28th December 2022

**Change log** : none

**Bug Fix** :

- Network switch & re connection issue fixes in [onMeetingStateChanged](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onmeetingstatechanged) event.

---

## v0.1.58

**Release Date** : 20th December 2022

**Change log** :

1. Participant can toggle between the `CONFERENCE` and `VIEWER` mode by using `changeMode()` method.

   **Docs** : [Change Mode](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/methods#changemode)

---

## v0.1.56

**Release Date** : 14th December 2022

**Change log** : None

**Bug Fix** :

1. Fix `failed: DOMException: Answer tried to enable an m-section that was disabled in the offer` error on Enable Webcam in Firefox browser.

---

## v0.1.55

**Release Date** : 25th November 2022

**Change log** :

1. To obtain screen sharing statistics, the `useParticipant` hook now has a [`getShareStats`](../../api/sdk-reference/use-participant/methods.md#getsharestats) function.

---

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
