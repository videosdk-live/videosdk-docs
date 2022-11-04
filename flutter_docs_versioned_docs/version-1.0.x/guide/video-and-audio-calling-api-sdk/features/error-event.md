---
sidebar_label: Error Event
pagination_label: Error Event
---

# Error Event

This event is helpful for development level troubleshooting while integrating SDK.

Whenever any invalid configuration provided or server/network errors arise, this event will trigger with a specific error code and message.

This event can ease your development process.

We have depicted a specific error name with code and message in the below table.

| Error Name                         | Code | Message                                                                                                               |
| ---------------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| **INVALID_API_KEY**                | 4001 | `apikey` provided in the token is empty or invalid, please verify it on the dashboard.                                |
| **INVALID_TOKEN**                  | 4002 | `token` is empty or invalid or might have expired.                                                                    |
| **INVALID_MEETING_ID**             | 4003 | `meetingId` is empty or invalid, please verify it or generate new meetingId using the API.                            |
| **INVALID_PARTICIPANT_ID**         | 4004 | `participantId` is empty or invalid, it shouldn't contain any whitespaces.                                            |
| **DUPLICATE_PARTICIPANT**          | 4005 | Leaving meeting, since this `participantId` joined from another device.                                               |
| **ACCOUNT_DEACTIVATED**            | 4006 | It seems your account is deactivated by VideoSDK for some reason, you can reach out to us at `support@videosdk.live`. |
| **ACCOUNT_DISCONTINUED**           | 4007 | _Server will respond you with specific message._                                                                      |
| **INVALID_PERMISSIONS**            | 4008 | `permissions` provided in the token are invalid, please don't use `allow_join` or `allow_mod` with `ask_join`.        |
| **MAX_PARTICIPANT_REACHED**        | 4009 | You have reached max partcipant limit in a meeting to increase contact at support@videosdk.live :)                    |
| **START_RECORDING_FAILED**         | 4011 | Recording start request failed due to an unknown error.                                                               |
| **STOP_RECORDING_FAILED**          | 4012 | Recording stop request failed due to an unknown error.                                                                |
| **START_LIVESTREAM_FAILED**        | 4013 | Livestream start request failed due to an unknown error.                                                              |
| **STOP_LIVESTREAM_FAILED**         | 4014 | Livestream stop request failed due to an unknown error.                                                               |
| **INVALID_LIVESTREAM_CONFIG**      | 4015 | Livestream 'outputs' configuration provided was invalid.                                                              |
| **START_HLS_FAILED**               | 4016 | HLS start request failed due to an unknown error.                                                                     |
| **STOP_HLS_FAILED**                | 4017 | HLS stop request failed due to an unknown error.                                                                      |
| **PREV_RECORDING_PROCESSING**      | 4018 | Previous recording session is being processed, please try again after few seconds!                                    |
| **PREV_RTMP_RECORDING_PROCESSING** | 4019 | Previous RTMP recording session is being processed, please try again after few seconds!                               |
| **PREV_HLS_STREAMING_PROCESSING**  | 4020 | Previous HLS streaming session is being processed, please try again after few seconds!                                |
| **RECORDING_FAILED**               | 5001 | Recording stopped due to an unknown error.                                                                            |
| **LIVESTREAM_FAILED**              | 5002 | Livestream stopped due to an unknown error.                                                                           |
| **HLS_FAILED**                     | 5003 | HLS stopped due to an unknown error.                                                                                  |
| **ERROR_STARTING_VIDEO**           | 3011 | Some error occured during starting the video                                                                          |
| **ERROR_STARTING_AUDIO**           | 3012 | Some error occured during starting the audio.                                                                         |
| **ERROR_STARTING_SCREENSHARE**     | 3013 | Some error occured during starting the screen share.                                                                  |

### Event Code

You can get all the error codes from `VideoSDKErrors` which is a `Map<int, Map<String, String>>` containing all the errors.

```js

//add listener for the error events.
_meeting.on(Events.error, (error) {
  log("VIDEOSDK ERROR :: " +
      error['code'].toString() +
      "  :: " +
      error['name'].toString() +
      " :: " +
      error['message'].toString());
});
```
