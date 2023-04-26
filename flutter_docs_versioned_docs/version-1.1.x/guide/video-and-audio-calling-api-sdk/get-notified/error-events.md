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

# Error Events

VideoSDK provides `error` event which will notify you of any error happening during the meeting.

### Events.error

- This event will be triggered whenever any invalid configuration provided or server/network errors arise, this event will trigger with a specific error code and message.
- This event is helpful for development level troubleshooting while integrating SDK.
- This event can be subscribed on the `Room` object.

### Example

Here is the usage of the event mentioned in this page.

```javascript
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room room;

  @override
  void initState() {
    //highlight-next-line
    ...

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }

  //highlight-start
  void setupRoomEventListener() {
    room.on(Events.error, (error) {
      log("VIDEOSDK ERROR :: " +
          error['code'].toString() +
          "  :: " +
          error['name'].toString() +
          " :: " +
          error['message'].toString());
    });
  }
  //highlight-end
}
```

### Error Codes

We have depicted a specific constant with code and message in the below table.

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

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [Events.error](/flutter/api/sdk-reference/room-class/events#error)
