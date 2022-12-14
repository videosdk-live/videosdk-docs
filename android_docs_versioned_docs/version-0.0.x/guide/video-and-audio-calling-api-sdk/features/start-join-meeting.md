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
After the successful installation of VideoSDK, the next step is to integrate VideoSDK features with your webApp/MobileApp.</p>

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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
package live.videosdk.rtc.android.java;

import com.androidnetworking.AndroidNetworking;
import com.androidnetworking.error.ANError;
import com.androidnetworking.interfaces.JSONObjectRequestListener;
import org.json.JSONException;
import org.json.JSONObject;

class JoinActivity : AppCompatActivity() {
  private val apiServerUrl = "http://localhost:9000"

  // ...
  // onCreate() and other methods
  private fun getToken(@Nullable meetingId: String?) {
    AndroidNetworking
      .get("$apiServerUrl/get-token")
      .build()
      .getAsJSONObject(
        object : JSONObjectRequestListener {
          override fun onResponse(response: JSONObject) {
            try
            {
              token = response.getString("token")
              if (meetingId == null) {
                createMeeting(token)
              } else {
                joinMeeting(token, meetingId)
              }
            } catch (e: JSONException) {
              e.printStackTrace()
            }
          }

          override fun onError(anError: ANError) {
            anError.printStackTrace()
          }
        }
      )
  }

  private fun createMeeting(token: String) {
    AndroidNetworking
      .post("$apiServerUrl/create-meeting")
      .addBodyParameter("token", token)
      .build()
      .getAsJSONObject(
        object : JSONObjectRequestListener {
          override fun onResponse(response: JSONObject) {
            try {
              // final String meetingId = response.getString("meetingId");

              // Intent intent = new Intent(JoinActivity.this, MainActivity.class);
              // intent.putExtra("token", token);
              // intent.putExtra("meetingId", meetingId);

              // startActivity(intent);
            } catch (e: JSONException) {
                e.printStackTrace()
            }
          }

          override fun onError(anError: ANError) {
            anError.printStackTrace()
          }
        }
      )
  }

  private fun joinMeeting(token: String, meetingId: String) {
    AndroidNetworking
      .post("$apiServerUrl/validate-meeting/{meetingId}")
      .addPathParameter("meetingId", meetingId)
      .addBodyParameter("token", token)
      .build()
      .getAsJSONObject(
        object : JSONObjectRequestListener {
          override fun onResponse(response: JSONObject) {
            // Intent intent = new Intent(JoinActivity.this, MainActivity.class);
            // intent.putExtra("token", token);
            // intent.putExtra("meetingId", meetingId);

            // startActivity(intent);
          }

          override fun onError(anError: ANError) {
            anError.printStackTrace()
          }
        }
      )
  }
}

```

</TabItem>

<TabItem value="Java">

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

</TabItem>

</Tabs>

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

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
import live.videosdk.rtc.android.VideoSDK;
import live.videosdk.rtc.android.Meeting;

class MainActivity : AppCompatActivity() {
  private var meeting: Meeting? = null

  override fun onCreate(savedInstanceState: Bundle?) {
    // Configure parameters
    val token = intent.getStringExtra("token")
    val meetingId = intent.getStringExtra("meetingId")
    val participantName = "John Doe"
    val micEnabled = true
    val webcamEnabled = true
    val multiStream = false 
    val paticipantId="demo@123"  // If you passed `null` then SDK will create an Id by itself and will use that id.
   
    // Configure authentication token
    VideoSDK.config(token)

    // create a new meeting instance
    meeting = VideoSDK.initMeeting(
      this@MainActivity,
      meetingId,
      participantName,
      micEnabled,
      webcamEnabled,
      multiStream,
      paticipantId,
      null
    )
  }
}

```

</TabItem>

<TabItem value="Java">

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
        final boolean multiStream = false;
        final String participantId = "demo@123"; // If you passed `null` then SDK will create an Id by itself and will use that id.

        // Configure authentication token
        VideoSDK.config(token);

        // create a new meeting instance
        meeting = VideoSDK.initMeeting(
                MainActivity.this,
                meetingId,
                participantName,
                micEnabled,
                webcamEnabled,
                multiStream,
                participantId,
                null
        );
    }
}

```

</TabItem>

</Tabs>

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

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// After receiving mic and webcam access permissions
// join the meeting
meeting!!.join()
```

</TabItem>

<TabItem value="Java">

```js
// After receiving mic and webcam access permissions
// join the meeting
meeting.join();
```

</TabItem>

</Tabs>

## Events

Following events are emitted on the `meeting` when it is successfully joined.

- Local Participant will receive a [`onMeetingJoined`](../../../api/sdk-reference/meeting-class/meeting-event-listener-class.md#onmeetingjoined) event when successfully joined.
- Remote Participant will receive a [`onParticipantJoined`](../../../api/sdk-reference/meeting-class/meeting-event-listener-class.md#onparticipantjoined) event with the newly joined [`Participant`](../../../api/sdk-reference/participant-class/introduction.md) object from the event callback.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  override fun onMeetingJoined() {
    Log.d("#meeting", "onMeetingJoined()")
  }

  override fun onParticipantJoined(participant: Participant) {
    Log.d("#meeting", participant.displayName + " left");
  }
}
```

</TabItem>

<TabItem value="Java">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {

  @Override
  public void onMeetingJoined() {
    Log.d("#meeting", "onMeetingJoined()");
  }

  @Override
  public void onParticipantJoined(Participant participant) {
    Log.d("#meeting", participant.getDisplayName() + " left");
  }
}
```

</TabItem>

</Tabs>
