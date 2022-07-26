---
title: Start join Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Start or join Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Start or Join Meeting
pagination_label: Start or Join Meeting
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-join-meeting
---

# Start or Join Meeting

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After the successful installation of videoSDK, the next step is to integrate videoSDK features with your webApp/MobileApp.</p>

<p>To Communicate with other participant's audio or video call, you will need to join the meeting.</p>

<p>This guide will provide an overview of how to configure, initialize and join a VideoSDK meeting.</p>

</div>
<div>
<img src="/img/gif/new-meeting.gif"/>
</div>

</div>

## 1. Configuration

To configure a meeting, you will need [generated token](/android/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis) and [meetingId](/api-reference/v1/realtime-communication/create-join-meeting#create-meeting), we had discussed in [Server Setup](/android/guide/video-and-audio-calling-api-sdk/server-setup).
This code snippet calls API from local server

**Scenario 1** - Suppose you **don't have** any meetingId, you can simply generate meetingId by invoking `create-meeting` API.

**Scenario 2** - Suppose you **have** meetingId, now you don't have to call `create-meeting` API to generate meetingId, instead you can call `validate-meeting` API to validate meetingId.

**Token generation API is necessary for both scenario.**

:::note
You can take advantage of regional API to decrease latency in video calling.

To achieve region based meetings, just pass `region : REGION_CODE` parameter in `create-meeting` request Body.

Currently the below regions are supported:

- `sg001` Region Code for Singapore, SG.
- `sg002` Region Code for Singapore, SG. (Another region in Sindapore)
- `in002` Region Code for Bangalore, IN.
- `us001` Region Code for Fremont, CA.
- `eu001` Region Code for Frankfurt, DE.

In case you are not providing any region code, the default region will be `sg001`.
:::

```js
package live.videosdk.rtc.android.java;

import com.androidnetworking.AndroidNetworking;
import com.androidnetworking.error.ANError;
import com.androidnetworking.interfaces.JSONObjectRequestListener;
import org.json.JSONException;
import org.json.JSONObject;

public class JoinActivity extends AppCompatActivity {
  private String apiServerUrl = "http://localhost:9000";

  // ...
  // onCreate() and other methods

  private void getToken(@Nullable String meetingId) {
    AndroidNetworking
      .get(apiServerUrl + "/get-token")
      .build()
      .getAsJSONObject(
        new JSONObjectRequestListener() {
          @Override
          public void onResponse(JSONObject response) {
            try {
              String token = response.getString("token");

              if (meetingId == null) {
                createMeeting(token);
              } else {
                joinMeeting(token, meetingId);
              }
            } catch (JSONException e) {
              e.printStackTrace();
            }
          }

          @Override
          public void onError(ANError anError) {
            anError.printStackTrace();
          }
        }
      );
  }

  private void createMeeting(String token) {
    AndroidNetworking
      .post(apiServerUrl + "/create-meeting")
      .addBodyParameter("token", token)
      .addBodyParameter("region", "sg001")
      .build()
      .getAsJSONObject(
        new JSONObjectRequestListener() {
          @Override
          public void onResponse(JSONObject response) {
            try {
              // final String meetingId = response.getString("meetingId");

              // Intent intent = new Intent(JoinActivity.this, MainActivity.class);
              // intent.putExtra("token", token);
              // intent.putExtra("meetingId", meetingId);

              // startActivity(intent);
            } catch (JSONException e) {
              e.printStackTrace();
            }
          }

          @Override
          public void onError(ANError anError) {
            anError.printStackTrace();
          }
        }
      );
  }

  private void joinMeeting(String token, String meetingId) {
    AndroidNetworking
      .post(apiServerUrl + "/validate-meeting/{meetingId}")
      .addPathParameter("meetingId", meetingId)
      .addBodyParameter("token", token)
      .build()
      .getAsJSONObject(
        new JSONObjectRequestListener() {
          @Override
          public void onResponse(JSONObject response) {
            // Intent intent = new Intent(JoinActivity.this, MainActivity.class);
            // intent.putExtra("token", token);
            // intent.putExtra("meetingId", meetingId);

            // startActivity(intent);
          }

          @Override
          public void onError(ANError anError) {
            anError.printStackTrace();
          }
        }
      );
  }
}

```

## 2. Initialization

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration, you will have to Initialize 
<p>
meeting by providing name, meetingId, micEnabled, webcamEnabled & maxResolution.
</p>
</p>

<p>
NOTE : For React & React native developer, you have

<p>to be familiar with hooks concept. You can understand hooks concept on <a href={'https://reactjs.org/docs/hooks-intro.html'}>React Hooks</a>.</p>

</p>
</div>
<div>
<img src="/img/gif/add-participant.gif"/>
</div>

</div>

```js
import live.videosdk.rtc.android.VideoSDK;
import live.videosdk.rtc.android.Meeting;

public class MainActivity extends AppCompatActivity {
    private Meeting meeting;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        // Configure parameters
        final String token = getIntent().getStringExtra("token");
        final String meetingId = getIntent().getStringExtra("meetingId");
        final String participantName = "John Doe";
        final boolean micEnabled = true;
        final boolean webcamEnabled = true;

        // Configure authentication token
        VideoSDK.config(token);

        // create a new meeting instance
        meeting = VideoSDK.initMeeting(
                MainActivity.this,
                meetingId,
                participantName,
                micEnabled,
                webcamEnabled
        );
    }
}

```

## 3. Join

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration & initialization, the third step is to call join() to join a meeting.
</p>

<p>
After joining, you will be able to Manage Participant in a meeting.
</p>

</div>
<div>
<img src="/img/gif/join-meeting.gif"/>
</div>

</div>

```js
// After receiving mic and webcam access permissions
// join the meeting
meeting.join();
```
