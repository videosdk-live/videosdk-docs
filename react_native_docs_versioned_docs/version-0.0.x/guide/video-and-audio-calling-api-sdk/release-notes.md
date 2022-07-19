---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of React Native SDK.

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

**Release Date** : 23rd Apr 2022

**Change log** :

1. Release Custom Video track feature

   **Docs** : [How to use Custom Video track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

2. Release Custom Audio track feature

   **Docs** : [How to use Custom Audio track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)

3. Release Custom Screen Share track feature

   **Docs** : [How to use Custom Screen Share track?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)

---

## v0.0.25

**Release Date** : 9th Mar 2022

**Change log** :

1. Release Pubsub message feature for text communication.

   **Docs** : [How to use Pubsub feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/pubsub)

2. Customise recording layout for Cloud Recording / HLS and RTMP out.

   **SDK Reference** : [Start Recording](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#startrecording)

   **SDK Reference** : [Start HLS](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#starthls)

   **SDK Reference** : [Start RTMP](https://docs.videosdk.live/react-native/api/sdk-reference/use-meeting/methods#startlivestream)

---

## v0.0.24

**Release Date** : 24th Feb 2022

**Change log** :

1. Added `onError` event listener to subscribe to all meeting errors occurring in the SDK.

   **Docs** : [Error Event](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/error-event)

2. Update WebRTC dependency.

---

## v0.0.23

**Release Date** : 10th Jan 2022

**Change log** :

1. Connect Meetings (BETA): This new feature enables you to fetch participant data between two or more meetings and make participants switch meetings.

   **Docs** : [How to use Connect Meetings feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/connection/overview)

2. Switch Meeting : This feature is used for switching participant of one meeting to another meeting.

   **Docs** : [How to use Switch Meeting feature?](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/features/switch-participant)

3. Add custom participantId in `MeetingProvider` config.

   **SDK Reference** : [Custom ParticipantId](https://docs.videosdk.live/react-native/api/sdk-reference/meeting-provider#participantid)
