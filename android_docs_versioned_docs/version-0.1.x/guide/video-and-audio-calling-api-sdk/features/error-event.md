---
sidebar_label: Error Event
pagination_label: Error Event
---

# Error Event - Android

This event is helpful for development level troubleshooting while integrating SDK.

Whenever any invalid configuration provided or server/network errors arise, this event will trigger with a specific error code and message.

This event can ease your development process.

We have depicted a specific constant with code and message in the below table.

| Constant                              | Code | Message                                                                                                                     |
| ------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| **INVALID_API_KEY**                   | 4001 | `apikey` provided in the token is empty or invalid, please verify it on the dashboard.                                      |
| **INVALID_TOKEN**                     | 4002 | `token` is empty or invalid or might have expired.                                                                          |
| **INVALID_MEETING_ID**                | 4003 | `meetingId` is empty or invalid, please verify it or generate new meetingId using the API.                                  |
| **INVALID_PARTICIPANT_ID**            | 4004 | `participantId` is empty or invalid, it shouldn't contain any whitespaces.                                                  |
| **DUPLICATE_PARTICIPANT**             | 4005 | Leaving meeting, since this `participantId` joined from another device.                                                     |
| **ACCOUNT_DEACTIVATED**               | 4006 | It seems your account is deactivated by VideoSDK for some reason, you can reach out to us at `support@videosdk.live`.       |
| **ACCOUNT_DISCONTINUED**              | 4007 | Server will respond you with specific message.\_                                                                            |
| **INVALID_PERMISSIONS**               | 4008 | `permissions` provided in the token are invalid, please don't use `allow_join` or `allow_mod` with `ask_join`.              |
| **START_RECORDING_FAILED**            | 4011 | Recording start request failed due to an unknown error.                                                                     |
| **STOP_RECORDING_FAILED**             | 4012 | Recording stop request failed due to an unknown error.                                                                      |
| **START_LIVESTREAM_FAILED**           | 4013 | Livestream start request failed due to an unknown error.                                                                    |
| **STOP_LIVESTREAM_FAILED**            | 4014 | Livestream stop request failed due to an unknown error.                                                                     |
| **INVALID_LIVESTREAM_CONFIG**         | 4015 | Livestream 'outputs' configuration provided was invalid.                                                                    |
| **PREV_RECORDING_PROCESSING**         | 4018 | Previous recording session is being processed, please try again after few seconds.                                          |
| **RECORDING_FAILED**                  | 5001 | Recording stopped due to an unknown error.                                                                                  |
| **LIVESTREAM_FAILED**                 | 5002 | Livestream stopped due to an unknown error.                                                                                 |
| **RECORDING_DURATION_LIMIT_REACHED**  | 5004 | Recording has been automatically stopped by the system, due to max duration limit of 2 hours reached for a single Recording |
| **LIVESTREAM_DURATION_LIMIT_REACHED** | 5005 | Livestream has been automatically stopped by the system, due to max duration limit of 2 hours reached for a single RTMP     |
| **HLS_DURATION_LIMIT_REACHED**        | 5006 | Hls has been automatically stopped by the system, due to max duration limit of 2 hours reached for a single HLS             |

### Event Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    //..
    override fun onError(error: JSONObject) {
    try {
        val errorCodes: JSONObject = VideoSDK.getErrorCodes()
        val code = error.getInt("code")
        if (code == errorCodes.getInt("START_LIVESTREAM_FAILED")) {
            Log.d("#error", "Error is: " + error["message"])
        } else if (code == errorCodes.getInt("START_RECORDING_FAILED")) {
            Log.d("#error", "Error is: " + error["message"])
        }
    } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    //..
    @Override
    public void onError(JSONObject error) {
        try {
            JSONObject errorCodes = VideoSDK.getErrorCodes();
            int code = error.getInt("code");
            if (code == errorCodes.getInt("START_LIVESTREAM_FAILED")) {
                Log.d("#error", "Error is: " + error.get("message"));
            }else if(code == errorCodes.getInt("START_RECORDING_FAILED"))
            {
                Log.d("#error", "Error is: " + error.get("message"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
};
```

</TabItem>

</Tabs>
