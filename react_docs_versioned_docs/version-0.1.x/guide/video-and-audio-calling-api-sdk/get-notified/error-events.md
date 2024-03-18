---
title: Error Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Error Events
pagination_label: Error Events
keywords:
  - audio calling
  - video calling 
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: error-events
---

# Error Events - React

VideoSDK provides the `onError()` event which informs you about any error happening during the meeting.

### onError()

- This event is triggered whenever an invalid configuration is provided or server/network errors arise. In such cases, the event will trigger with a specific error code and message. 
- It is particularly useful for development-level troubleshooting during SDK integration.
- It can be subscribed to using the `useMeeting` hook.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

```javascript
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

function onError(data) {
  const { code, message } = data;
}

const {
  meetingId
  ...
} = useMeeting({
  onerror,
  ...
});
```

### Error Codes

We have provided a specific constant along with the corresponding code and message in the table below.

| Constant                                      | Code | Message                                                                                                                     |
| --------------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| **INVALID_API_KEY**                           | 4001 | `apikey` provided in the token is empty or invalid, please verify it on the dashboard.                                      |
| **INVALID_TOKEN**                             | 4002 | `token` is empty or invalid or might have expired.                                                                          |
| **INVALID_MEETING_ID**                        | 4003 | `meetingId` is empty or invalid, please verify it or generate new meetingId using the API.                                  |
| **INVALID_PARTICIPANT_ID**                    | 4004 | `participantId` is empty or invalid, it shouldn't contain any whitespaces.                                                  |
| **DUPLICATE_PARTICIPANT**                     | 4005 | Leaving meeting, since this `participantId` joined from another device.                                                     |
| **ACCOUNT_DEACTIVATED**                       | 4006 | It seems your account is deactivated by VideoSDK for some reason, you can reach out to us at `support@videosdk.live`.       |
| **ACCOUNT_DISCONTINUED**                      | 4007 | _Server will respond you with specific message._                                                                            |
| **INVALID_PERMISSIONS**                       | 4008 | `permissions` provided in the token are invalid, please don't use `allow_join` or `allow_mod` with `ask_join`.              |
| **MAX_PARTCIPANT_REACHED**                    | 4009 | You have reached max partcipant limit in a meeting.                                                                         |
| **MAX_SPEAKER_REACHED**                       | 4010 | You have reached max speaker limit in a meeting.                                                                            |
| **START_RECORDING_FAILED**                    | 4011 | Recording start request failed due to an unknown error.                                                                     |
| **STOP_RECORDING_FAILED**                     | 4012 | Recording stop request failed due to an unknown error.                                                                      |
| **START_LIVESTREAM_FAILED**                   | 4013 | Livestream start request failed due to an unknown error.                                                                    |
| **STOP_LIVESTREAM_FAILED**                    | 4014 | Livestream stop request failed due to an unknown error.                                                                     |
| **INVALID_LIVESTREAM_CONFIG**                 | 4015 | Livestream 'outputs' configuration provided was invalid.                                                                    |
| **START_HLS_FAILED**                          | 4016 | HLS start request failed due to an unknown error.                                                                           |
| **STOP_HLS_FAILED**                           | 4017 | HLS stop request failed due to an unknown error.                                                                            |
| **PREV_RECORDING_PROCESSING**                 | 4018 | Previous recording session is being processed, please try again after few seconds!                                          |
| **PREV_RTMP_RECORDING_PROCESSING**            | 4019 | Previous RTMP recording session is being processed, please try again after few seconds!                                     |
| **PREV_HLS_STREAMING_PROCESSING**             | 4020 | Previous HLS streaming session is being processed, please try again after few seconds!                                      |
| **RECORDING_FAILED**                          | 5001 | Recording stopped due to an unknown error.                                                                                  |
| **LIVESTREAM_FAILED**                         | 5002 | Livestream stopped due to an unknown error.                                                                                 |
| **HLS_FAILED**                                | 5003 | HLS stopped due to an unknown error.                                                                                        |
| **RECORDING_DURATION_LIMIT_REACHED**          | 5004 | Recording has been automatically stopped by the system, due to max duration limit of 2 hours reached for a single Recording |
| **LIVESTREAM_DURATION_LIMIT_REACHED**         | 5005 | Livestream has been automatically stopped by the system, due to max duration limit of 2 hours reached for a single RTMP     |
| **HLS_DURATION_LIMIT_REACHED**                | 5006 | Hls has been automatically stopped by the system, due to max duration limit of 2 hours reached for a single HLS             |
| **ERROR_GET_VIDEO_MEDIA**                     | 3011 | Your browser/Device does not support Video.                                                                                 |
| **ERROR_GET_AUDIO_MEDIA**                     | 3012 | Your browser/Device does not support Audio.                                                                                 |
| **ERROR_GET_DISPLAY_MEDIA**                   | 3013 | Your browser/Device does not support Screen Sharing.                                                                        |
| **ERROR_GET_VIDEO_MEDIA_PERMISSION_DENIED**   | 3014 | Video capture permission denied.                                                                                            |
| **ERROR_GET_AUDIO_MEDIA_PERMISSION_DENIED**   | 3015 | Audio capture permission denied.                                                                                            |
| **ERROR_GET_DISPLAY_MEDIA_PERMISSION_DENIED** | 3016 | Screen sharing permission denied.                                                                                           |
| **ERROR_CAMERA_ACCESS_DENIED_OR_DISMISSED** | 3017 | Oops! It seems like camera access was denied or dismissed. To proceed, kindly grant access through your browser settings. |
| **ERROR_MICROPHONE_ACCESS_DENIED_OR_DISMISSED** | 3018 | Oops! It seems like microphone access was denied or dismissed. To proceed, kindly grant access through your browser settings. |
| **ERROR_CAMERA_PERMISSION_DENIED_BY_OS** | 3019 | Camera permission denied by OS system settings. Please check the system settings and grant permission for this browser. |
| **ERROR_MICROPHONE_PERMISSION_DENIED_BY_OS** | 3020 | Microphone permission denied by OS system settings. Please check the system settings and grant permission for this browser. |
| **ERROR_CAMERA_NOT_FOUND** | 3021 | Please ensure your camera is connected and turned on, and that the camera driver is installed and up-to-date. |
| **ERROR_MICROPHONE_NOT_FOUND** | 3022 | Please ensure your microphone is connected and turned on. |
| **ERROR_CAMERA_IN_USE** | 3023 | The camera is being used by another application. Please close any programs utilizing the camera, such as video conferencing tools, screen recording software, or other browsers. Restart your browser and attempt again. |
| **ERROR_MICROPHONE_IN_USE** | 3024 | The microphone is being used by another application. Please close any programs utilizing the microphone, such as video conferencing tools, screen recording software, or other browsers. Restart your browser and attempt again. |
| **ERROR_CAMERA_PERMISSION_OR_AUTOPLAY_ISSUE** | 3025 | It seems like there's an issue with camera permission or video autoplay, you can check out this link for details: [http://tinyurl.com/autoplay-issue](http://tinyurl.com/autoplay-issue) |
| **ERROR_VIDEO_SOURCE_INITIATION_FAILED** | 3026 | Unable to initiate video source. Please verify browser settings for video permissions. |
| **ERROR_WEBCAM_TRACK_ENDED** | 3027 | Webcam track has ended or the webcam is disconnected. Please ensure your webcam is properly connected and try restarting it. |
| **ERROR_MICROPHONE_TRACK_ENDED** | 3028 | Microphone track has ended or the microphone is disconnected. Please check your microphone connection and try again. |
| **ERROR_INVALID_CUSTOM_VIDEO_TRACK** | 3029 | The provided custom video track is invalid; reverting to the default video track. Please ensure that the video track meets the required specifications. |
| **ERROR_INVALID_CUSTOM_AUDIO_TRACK** | 3030 | The provided custom audio track is invalid; reverting to the default audio track. Please ensure that the audio track meets the required specifications. |
| **ERROR_CUSTOM_VIDEO_TRACK_ENDED** | 3031 | The provided custom video track is in an ended state. Please verify the video track's status, and try again. |
| **ERROR_CUSTOM_AUDIO_TRACK_ENDED** | 3032 | The provided custom audio track is in an ended state. Please verify the audio track's status, and try again. |
| **ERROR_CAMERA_ACCESS_UNAVAILABLE** | 3033 | Camera access unavailable: Please ensure your device is compatible and that you're on a secure website (https://). |
| **ERROR_MICROPHONE_ACCESS_UNAVAILABLE** | 3034 | Microphone access unavailable: Please ensure your device is compatible and that you're on a secure website (https://). |
| **ERROR_ACTION_PERFORMED_BEFORE_MEETING_JOINED** | 3035 | Oops! Something went wrong. The room was in a connecting state, and during that time, an action encountered an issue. Please try again after joining a meeting. |

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [onError()](/react/api/sdk-reference/use-meeting/events#onerror)
