---
sidebar_label: Error Event
pagination_label: Error Event
---

# Error Event

This event is helpful for development level troubleshooting while integrating SDK.

Whenever any invalid configuration provided or server/network errors arise, this event will trigger with a specific error code and message.

This event can ease your development process.

We have depicted a specific constant with code and message in the below table.

| Constant                      | Code | Message                                                                                                               |
| ----------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| **INVALID_API_KEY**           | 4001 | `apikey` provided in the token is empty or invalid, please verify it on the dashboard.                                |
| **INVALID_TOKEN**             | 4002 | `token` is empty or invalid or might have expired.                                                                    |
| **INVALID_MEETING_ID**        | 4003 | `meetingId` is empty or invalid, please verify it or generate new meetingId using the API.                            |
| **INVALID_PARTICIPANT_ID**    | 4004 | `participantId` is empty or invalid, it shouldn't contain any whitespaces.                                            |
| **DUPLICATE_PARTICIPANT**     | 4005 | Leaving meeting, since this `participantId` joined from another device.                                               |
| **ACCOUNT_DEACTIVATED**       | 4006 | It seems your account is deactivated by VideoSDK for some reason, you can reach out to us at `support@videosdk.live`. |
| **ACCOUNT_DISCONTINUED**      | 4007 | _Server will respond you with specific message._                                                                      |
| **INVALID_PERMISSIONS**       | 4008 | `permissions` provided in the token are invalid, please don't use `allow_join` or `allow_mod` with `ask_join`.        |
| **MAX_PARTCIPANT_REACHED**    | 4009 | You have reached max partcipant limit in a meeting.                                                                   |
| **MAX_SPEAKER_REACHED**       | 4010 | You have reached max speaker limit in a meeting.                                                                      |
| **START_RECORDING_FAILED**    | 4011 | Recording start request failed due to an unknown error.                                                               |
| **STOP_RECORDING_FAILED**     | 4012 | Recording stop request failed due to an unknown error.                                                                |
| **START_LIVESTREAM_FAILED**   | 4013 | Livestream start request failed due to an unknown error.                                                              |
| **STOP_LIVESTREAM_FAILED**    | 4014 | Livestream stop request failed due to an unknown error.                                                               |
| **INVALID_LIVESTREAM_CONFIG** | 4015 | Livestream 'outputs' configuration provided was invalid.                                                              |
| **RECORDING_FAILED**          | 5001 | Recording stopped due to an unknown error.                                                                            |
| **LIVESTREAM_FAILED**         | 5002 | Livestream stopped due to an unknown error.                                                                           |

### Event Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
]}>
<TabItem value="js">

```js
import { VideoSDK } from "@videosdk.live/js-sdk";

meeting.on("error", (data) => {
  const { code, message } = data;

  // Get Constant from SDK which contain value of error Code
  const { INVALID_TOKEN, INVALID_MEETING_ID } = VideoSDK.constants.errors;

  switch (code) {
    case INVALID_TOKEN:
      console.log(`Error is ${message}`);
      break;

    case INVALID_MEETING_ID:
      console.log(`Error is ${message}`);
      break;

    default:
      break;
  }
});
```

</TabItem>
<TabItem value="react">

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

const {
  /** Properties and Methods */
} = useMeeting({
  onError: (data) => {
    const { code, message } = data;

    // Get Constant from SDK which contain value of error Code
    const { INVALID_TOKEN, INVALID_MEETING_ID } = Constants.errors;

    switch (code) {
      case INVALID_TOKEN:
        console.log(`Error is ${message}`);
        break;

      case INVALID_MEETING_ID:
        console.log(`Error is ${message}`);
        break;

      default:
        break;
    }
  },
});
```

</TabItem>
</Tabs>
