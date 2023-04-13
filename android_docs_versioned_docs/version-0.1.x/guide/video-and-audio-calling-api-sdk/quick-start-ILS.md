---
title: Quick Start With Interactive Live Streaming
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start With Interactive Live Streaming
pagination_label: Quick Start With Interactive Live Streaming
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-ILS
---

# Quick Start for Interactive Live Streaming in Android

VideoSDK enables you to embed the video calling feature into your Android application in minutes.

In this quickstart, we are going to explore interactive live streaming feature of Video SDK. We will go through step by step guide of integrating video calling with Android Video SDK.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Java Development Kit.
- Android Studio 3.0 or later.
- Android SDK API Level 21 or higher.
- A mobile device that runs Android 5.0 or later.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/android-hls).

### Create new Android Project

For a new project in **Android Studio**, create a **Phone and Tablet** Android project with an **Empty Activity**.

![VideoSDK Android Quick Start New Project](/img/quick-start/android_newProject.png)

:::caution
After creating the project, Android Studio automatically starts gradle sync. Ensure that the sync succeeds before you continue.
:::

### Integrate Video SDK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Maven Central"
groupId={"android-repositories"}
values={[{label: 'Maven Central', value: 'Maven Central'},{label: 'Jitpack', value: 'Jitpack'},]}>

<TabItem value="Maven Central">

```js title="settings.gradle"
dependencyResolutionManagement{
  repositories {
    // ...
    google()
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

</TabItem>

<TabItem value="Jitpack">

```js title="settings.gradle"
dependencyResolutionManagement{
  repositories {
    // ...
    google()
    maven { url 'https://jitpack.io' }
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

</TabItem>

</Tabs>

:::note

You can use imports with Maven Central after rtc-android-sdk version `0.1.12`.

Whether on Maven or Jitpack, the same version numbers always refer to the same SDK.

:::

- Add the following dependency in your app's `app/build.gradle`.

```js title="app/build.gradle"
dependencies {
  implementation 'live.videosdk:rtc-android-sdk:0.1.15'

  // library to perform Network call to generate a meeting id
  implementation 'com.amitshekhar.android:android-networking:1.0.2'

  // other app dependencies
  }
```

:::important

Android SDK compatible with armeabi-v7a, arm64-v8a, x86_64 architectures. If you want to run the application in an emulator, choose ABI x86_64 when creating a device.

:::

### Add permissions into your project

- In `/app/Manifests/AndroidManifest.xml`, add the following permissions after `</application>`.

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
```

:::note

If your project has set `android.useAndroidX=true`, then set `android.enableJetifier=true` in the `gradle.properties` file to migrate your project to AndroidX and avoid duplicate class conflict.

:::

### Structure of the project

Your project structure should look like this.

```jsx title="Project Structure"
   app
   ├── java
   │    ├── packagename
   │         ├── JoinActivity
   │         ├── MeetingActivity
   │         ├── SpeakerAdapter
   │         ├── SpeakerFragment
   |         ├── ViewerFragment
   ├── res
   │    ├── layout
   │    │    ├── activity_join.xml
   │    │    ├── activity_meeting.xml
   |    |    ├── fragment_speaker.xml
   |    |    ├── fragment_viewer.xml
   │    │    ├── item_remote_peer.xml
```

:::note

You have to set JoinActivity as Launcher activity.

:::

### App Architecture

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart_app_structure.png' />

</center>

### Step 1: Creating Joining Screen

Create a new Activity named `JoinActivity`.

#### Creating UI

The Joining screen will include :

1. **Create Button** - This button will create a new meeting for you.
2. **TextField for Meeting Id** - This text field will contain the meeting Id you want to join.
3. **Join as Host Button** - This button will join the meeting as **host** with `meetingId` you provided.
4. **Join as Viewer Button** - This button will join the meeting as **viewer** with `meetingId` you provided.

In `/app/res/layout/activity_join.xml` file, replace the content with the following.

```xml title="activity_join.xml"
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/createorjoinlayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/black"
    android:gravity="center"
    android:orientation="vertical">

    <Button
        android:id="@+id/btnCreateMeeting"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Create Meeting"
        android:textAllCaps="false" />

    <TextView
        android:id="@+id/tvText"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:paddingVertical="5sp"
        android:text="OR"
        android:textColor="@color/white"
        android:textSize="20sp" />

    <EditText
        android:id="@+id/etMeetingId"
        android:theme="@android:style/Theme.Holo"
        android:layout_width="250dp"
        android:layout_height="wrap_content"
        android:hint="Enter Meeting Id"
        android:textColor="@color/white"
        android:textColorHint="@color/white" />

    <Button
        android:id="@+id/btnJoinHostMeeting"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="8sp"
        android:text="Join as Host"
        android:textAllCaps="false" />

    <Button
        android:id="@+id/btnJoinViewerMeeting"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Join as Viewer"
        android:textAllCaps="false" />

</LinearLayout>
```

#### Integration of Create Meeting API

1. Create field `sampleToken` in `JoinActivity` which will hold the generated token from the [VideoSDK dashboard](https://app.videosdk.live/api-keys). This token will use in VideoSDK config as well as in generating meetingId.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="JoinActivity.kt"
class JoinActivity : AppCompatActivity() {

  //highlight-next-line
  //Replace with the token you generated from the VideoSDK Dashboard
  private var sampleToken = ""

  override fun onCreate(savedInstanceState: Bundle?) {
    //...
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {

  //highlight-next-line
  //Replace with the token you generated from the VideoSDK Dashboard
  private String sampleToken ="";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    //...
  }
}
```

</TabItem>

</Tabs>

2. On **Join Button as Host** `onClick` events, we will naviagte to `MeetingActivity` with token, meetingId and mode as `CONFERENCE`.

3. On **Join Button as Viewer** `onClick` events, we will naviagte to `MeetingActivity` with token, meetingId and mode as `Viewer`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="JoinActivity.kt"
class JoinActivity : AppCompatActivity() {

   //Replace with the token you generated from the VideoSDK Dashboard
   private var sampleToken = "";

   override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_join)

      val btnCreate = findViewById<Button>(R.id.btnCreateMeeting)
      val btnJoinHost = findViewById<Button>(R.id.btnJoinHostMeeting)
      val btnJoinViewer = findViewById<Button>(R.id.btnJoinViewerMeeting)
      val etMeetingId = findViewById<EditText>(R.id.etMeetingId)

      //highlight-next-line
      // create meeting and join as Host
      btnCreate.setOnClickListener {
          createMeeting(
              sampleToken
          )
      }

      //highlight-next-line
      // Join as Host
      btnJoinHost.setOnClickListener {
          val intent = Intent(this@JoinActivity, MeetingActivity::class.java)
          intent.putExtra("token", sampleToken)
          intent.putExtra("meetingId", etMeetingId.text.toString().trim { it <= ' ' })
          //highlight-next-line
          intent.putExtra("mode", "CONFERENCE")
          startActivity(intent)
      }

      //highlight-next-line
      // Join as Viewer
      btnJoinViewer.setOnClickListener {
          val intent = Intent(this@JoinActivity, MeetingActivity::class.java)
          intent.putExtra("token", sampleToken)
          intent.putExtra("meetingId", etMeetingId.text.toString().trim { it <= ' ' })
          //highlight-next-line
          intent.putExtra("mode", "VIEWER")
          startActivity(intent)
      }
    }

    private fun createMeeting(token: String) {
      // we will explore this method in the next step
    }
}
```

</TabItem>

<TabItem value="Java">

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {

  //Replace with the token you generated from the VideoSDK Dashboard
  private String sampleToken ="";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_join);

    final Button btnCreate = findViewById(R.id.btnCreateMeeting);
    final Button btnJoinHost = findViewById(R.id.btnJoinHostMeeting);
    final Button btnJoinViewer = findViewById(R.id.btnJoinViewerMeeting);
    final EditText etMeetingId = findViewById(R.id.etMeetingId);

    //highlight-next-line
    // create meeting and join as Host
    btnCreate.setOnClickListener(v -> createMeeting(sampleToken));

    //highlight-next-line
    // Join as Host
    btnJoinHost.setOnClickListener(v -> {
        Intent intent = new Intent(JoinActivity.this, MeetingActivity.class);
        intent.putExtra("token", sampleToken);
        intent.putExtra("meetingId", etMeetingId.getText().toString().trim());
        //highlight-next-line
        intent.putExtra("mode", "CONFERENCE");
        startActivity(intent);
    });

    //highlight-next-line
    // Join as Viewer
    btnJoinViewer.setOnClickListener(v -> {
        Intent intent = new Intent(JoinActivity.this, MeetingActivity.class);
        intent.putExtra("token", sampleToken);
        intent.putExtra("meetingId", etMeetingId.getText().toString().trim());
        //highlight-next-line
        intent.putExtra("mode", "VIEWER");
        startActivity(intent);
    });
  }

  private void createMeeting(String token) {
    // we will explore this method in the next step
  }
}
```

</TabItem>

</Tabs>

4. For **Create Button**, under `createMeeting` method we will generate meetingId by calling API and navigate to `MeetingActivity` with token, generated meetingId and mode as `CONFERENCE`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="JoinActivity.kt"
class JoinActivity : AppCompatActivity() {
  //...onCreate
 private fun createMeeting(token: String) {
  // we will make an API call to VideoSDK Server to get a roomId
  AndroidNetworking.post("https://api.videosdk.live/v2/rooms")
      .addHeaders("Authorization", token) //we will pass the token in the Headers
      .build()
      .getAsJSONObject(object : JSONObjectRequestListener {
          override fun onResponse(response: JSONObject) {
            try {
              // response will contain `roomId`
              val meetingId = response.getString("roomId")

              // starting the MeetingActivity with received roomId and our sampleToken
              val intent = Intent(this@JoinActivity, MeetingActivity::class.java)
              intent.putExtra("token", sampleToken)
              intent.putExtra("meetingId", meetingId)
              //highlight-next-line
              intent.putExtra("mode", "CONFERENCE")
              startActivity(intent)
            } catch (e: JSONException) {
                e.printStackTrace()
            }
          }

          override fun onError(anError: ANError) {
            anError.printStackTrace()
            Toast.makeText(this@JoinActivity, anError.message, Toast.LENGTH_SHORT)
                .show()
          }
      })
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {
  //...onCreate

  private void createMeeting(String token) {
    // we will make an API call to VideoSDK Server to get a roomId
    AndroidNetworking.post("https://api.videosdk.live/v2/rooms")
          .addHeaders("Authorization", token) //we will pass the token in the Headers
          .build()
          .getAsJSONObject(new JSONObjectRequestListener() {
              @Override
              public void onResponse(JSONObject response) {
                try {
                  // response will contain `roomId`
                  final String meetingId = response.getString("roomId");

                  // starting the MeetingActivity with received roomId and our sampleToken
                  Intent intent = new Intent(JoinActivity.this, MeetingActivity.class);
                  intent.putExtra("token", sampleToken);
                  intent.putExtra("meetingId", meetingId);
                  //highlight-next-line
                  intent.putExtra("mode", "CONFERENCE");
                  startActivity(intent);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
              }

              @Override
              public void onError(ANError anError) {
                anError.printStackTrace();
                Toast.makeText(JoinActivity.this, anError.getMessage(), Toast.LENGTH_SHORT).show();
              }
          });
  }
}
```

</TabItem>

</Tabs>

:::note

Don't confuse with Room and Meeting keyword, both are same thing 😃

:::

5. Our App is completely based on audio and video communicatation, that's why we need to ask for runtime permissions `RECORD_AUDIO` and `CAMERA`. So, we will implement permission logic on `JoinActivity`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="JoinActivity.kt"
class JoinActivity : AppCompatActivity() {
  companion object {
    private const val PERMISSION_REQ_ID = 22
    private val REQUESTED_PERMISSIONS = arrayOf(
        Manifest.permission.RECORD_AUDIO,
        Manifest.permission.CAMERA
    )
  }

  private fun checkSelfPermission(permission: String, requestCode: Int) {
    if (ContextCompat.checkSelfPermission(this, permission) !=
        PackageManager.PERMISSION_GRANTED
    ) {
        ActivityCompat.requestPermissions(this, REQUESTED_PERMISSIONS, requestCode)
    }
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    //... button listeneres
    //highlight-start
    checkSelfPermission(REQUESTED_PERMISSIONS[0], PERMISSION_REQ_ID)
    checkSelfPermission(REQUESTED_PERMISSIONS[1], PERMISSION_REQ_ID)
    //highlight-end
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {
  private static final int PERMISSION_REQ_ID = 22;

  private static final String[] REQUESTED_PERMISSIONS = {
    Manifest.permission.RECORD_AUDIO,
    Manifest.permission.CAMERA
  };

  private void checkSelfPermission(String permission, int requestCode) {
    if (ContextCompat.checkSelfPermission(this, permission) !=
            PackageManager.PERMISSION_GRANTED) {
      ActivityCompat.requestPermissions(this, REQUESTED_PERMISSIONS, requestCode);
    }
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    //... button listeneres
   //highlight-start
   checkSelfPermission(REQUESTED_PERMISSIONS[0], PERMISSION_REQ_ID);
   checkSelfPermission(REQUESTED_PERMISSIONS[1], PERMISSION_REQ_ID);
   //highlight-end
  }
}
```

</TabItem>

</Tabs>

#### Output

<center>

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart_join_screen.jpg" />

</center>

### Step 2: Creating Meeting Screen

Create a new Activity named `MeetingActivity`.

#### Creating the UI for Meeting Screen

In `/app/res/layout/activity_meeting.xml` file, replace the content with the following.

```xml title="activty_meeting.xml"
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/mainLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/black"
    tools:context=".MeetingActivity">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:gravity="center"
        android:text="Creating a meeting for you"
        android:textColor="@color/white"
        android:textFontWeight="700"
        android:textSize="20sp" />

</RelativeLayout>
```

#### Initializing the Meeting

After getting token, meetigId and mode from `JoinActivity`,

1. Initialize **VideoSDK**.
2. Configure **VideoSDK** with token.
3. Initialize the meeting with required params such as `meetingId`, `participantName`, `micEnabled`, `webcamEnabled` , `mode` and more.
4. Join the room with `meeting.join()` method.
5. Add `MeetingEventListener` for listening **Meeting Join** event.
6. Check mode of `localParticipant`, If mode is **CONFERENCE** than we will replace mainLayout with `SpeakerFragment` otherwise replace with `ViewerFragment`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="MeetingActivity.kt"
class MeetingActivity : AppCompatActivity() {
  var meeting: Meeting? = null
      private set

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_meeting)

    val meetingId = intent.getStringExtra("meetingId")
    val token = intent.getStringExtra("token")
    val mode = intent.getStringExtra("mode")
    val localParticipantName = "John Doe"
    val streamEnable = mode == "CONFERENCE"

    //highlight-next-line
    // initialize VideoSDK
    VideoSDK.initialize(applicationContext)

    //highlight-next-line
    // Configuration VideoSDK with Token
    VideoSDK.config(token)

    //highlight-next-line
    // Initialize VideoSDK Meeting
    meeting = VideoSDK.initMeeting(
        this@MeetingActivity, meetingId, localParticipantName,
        streamEnable, streamEnable, null, mode, null
    )

    //highlight-next-line
    // join Meeting
    meeting!!.join()

    //highlight-next-line
    // if mode is CONFERENCE than replace mainLayout with SpeakerFragment otherwise with ViewerFragment
    meeting!!.addEventListener(object : MeetingEventListener() {
      override fun onMeetingJoined() {
          if (meeting != null) {
            if (mode == "CONFERENCE") {
              //highlight-next-line
              //pin the local partcipant
              meeting!!.localParticipant.pin("SHARE_AND_CAM")
              supportFragmentManager
                  .beginTransaction()
                  .replace(R.id.mainLayout, SpeakerFragment(), "MainFragment")
                  .commit()
              } else if (mode == "VIEWER") {
                supportFragmentManager
                    .beginTransaction()
                    .replace(R.id.mainLayout, ViewerFragment(), "viewerFragment")
                    .commit()
              }
          }
      }
    })
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="MeetingActivity.java"
public class MeetingActivity extends AppCompatActivity {
  private Meeting meeting;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_meeting);

    final String meetingId = getIntent().getStringExtra("meetingId");
    String token = getIntent().getStringExtra("token");
    String mode = getIntent().getStringExtra("mode");
    String localParticipantName = "John Doe";
    boolean streamEnable = mode.equals("CONFERENCE");

    //highlight-next-line
    // initialize VideoSDK
    VideoSDK.initialize(getApplicationContext());

    //highlight-next-line
    // Configuration VideoSDK with Token
    VideoSDK.config(token);

    //highlight-next-line
    // Initialize VideoSDK Meeting
    meeting = VideoSDK.initMeeting(
            MeetingActivity.this, meetingId, localParticipantName,
            streamEnable, streamEnable, null, mode, null);

    //highlight-next-line
    // join Meeting
    meeting.join();

    //highlight-next-line
    // if mode is CONFERENCE than replace mainLayout with SpeakerFragment otherwise with ViewerFragment
    meeting.addEventListener(new MeetingEventListener() {
        @Override
        public void onMeetingJoined() {
          if (meeting != null) {
            if (mode.equals("CONFERENCE")) {
              //highlight-next-line
              //pin the local partcipant
              meeting.getLocalParticipant().pin("SHARE_AND_CAM");
              getSupportFragmentManager()
                  .beginTransaction()
                  .replace(R.id.mainLayout, new SpeakerFragment(), "MainFragment")
                  .commit();
            } else if (mode.equals("VIEWER")) {
              getSupportFragmentManager()
                  .beginTransaction()
                  .replace(R.id.mainLayout, new ViewerFragment(), "viewerFragment")
                  .commit();
            }
          }
        }
      });
  }
  public Meeting getMeeting() {
      return meeting;
  }
}
```

</TabItem>

</Tabs>

#### Output

<center>

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart_meeting_screen.jpg" />

</center>

### Step 3: Implement SpeakerView

After successfully enter into the meeting, it's time to render speaker's view and manage controls such as toggle webcam/mic,start/stop HLS and leave the meeting.

1. Create a new fragment named `SpeakerFragment`.

2. In `/app/res/layout/fragment_speaker.xml` file, replace the content with the following.

```xml title="fragment_speaker.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/black"
    android:gravity="center"
    android:orientation="vertical"
    tools:context=".SpeakerFragment">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginVertical="8sp"
        android:paddingHorizontal="10sp">

        <TextView
            android:id="@+id/tvMeetingId"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:text="Meeting Id : "
            android:textColor="@color/white"
            android:textSize="18sp"
            android:layout_weight="3"/>

        <Button
            android:id="@+id/btnLeave"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:text="Leave"
            android:textAllCaps="false"
            android:layout_weight="1"/>

    </LinearLayout>

    <TextView
        android:id="@+id/tvHlsState"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Current HLS State : NOT_STARTED"
        android:textColor="@color/white"
        android:textSize="18sp" />

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/rvParticipants"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_marginVertical="10sp"
        android:layout_weight="1" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center">

        <Button
            android:id="@+id/btnHLS"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Start HLS"
            android:textAllCaps="false" />

        <Button
            android:id="@+id/btnWebcam"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginHorizontal="5sp"
            android:text="Toggle Webcam"
            android:textAllCaps="false" />

        <Button
            android:id="@+id/btnMic"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Toggle Mic"
            android:textAllCaps="false" />

    </LinearLayout>

</LinearLayout>
```

3. Now, let's set listener for buttons which will allow the participant to toggle media.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="SpeakerFragment.kt"
class SpeakerFragment : Fragment() {
  private var micEnabled = true
  private var webcamEnabled = true
  private var hlsEnabled = false
  private var btnMic: Button? = null
  private var btnWebcam: Button? = null
  private var btnHls: Button? = null
  private var btnLeave: Button? = null
  private var tvMeetingId: TextView? = null
  private var tvHlsState: TextView? = null
  override fun onAttach(context: Context) {
    super.onAttach(context)
    mContext = context
    if (context is Activity) {
      mActivity = context
      //highlight-next-line
      // getting meeting object from Meeting Activity
      meeting = (mActivity as MeetingActivity?)!!.meeting
    }
  }

  override fun onCreateView(
      inflater: LayoutInflater, container: ViewGroup?,
      savedInstanceState: Bundle?
  ): View? {
    // Inflate the layout for this fragment
    val view = inflater.inflate(R.layout.fragment_speaker, container, false)
    btnMic = view.findViewById(R.id.btnMic)
    btnWebcam = view.findViewById(R.id.btnWebcam)
    btnHls = view.findViewById(R.id.btnHLS)
    btnLeave = view.findViewById(R.id.btnLeave)
    tvMeetingId = view.findViewById(R.id.tvMeetingId)
    tvHlsState = view.findViewById(R.id.tvHlsState)
    if (meeting != null) {
      tvMeetingId!!.text = "Meeting Id : " + meeting!!.meetingId
      //highlight-next-line
      setActionListeners()
    }
    return view
  }

  private fun setActionListeners() {
    btnMic!!.setOnClickListener {
      if (micEnabled) {
        //highlight-next-line
        meeting!!.muteMic()
        Toast.makeText(mContext, "Mic Muted", Toast.LENGTH_SHORT).show()
      } else {
        //highlight-next-line
        meeting!!.unmuteMic()
        Toast.makeText(
            mContext,
            "Mic Enabled",
            Toast.LENGTH_SHORT
        ).show()
      }
      micEnabled = !micEnabled
    }
    btnWebcam!!.setOnClickListener {
      if (webcamEnabled) {
        //highlight-next-line
        meeting!!.disableWebcam()
        Toast.makeText(
            mContext,
            "Webcam Disabled",
            Toast.LENGTH_SHORT
        ).show()
      } else {
        //highlight-next-line
        meeting!!.enableWebcam()
        Toast.makeText(
            mContext,
            "Webcam Enabled",
            Toast.LENGTH_SHORT
        ).show()
      }
      webcamEnabled = !webcamEnabled
    }
    //highlight-next-line
    btnLeave!!.setOnClickListener { meeting!!.leave() }
    btnHls!!.setOnClickListener {
      if (!hlsEnabled) {
        //highlight-start
        val config = JSONObject()
        val layout = JSONObject()
        JsonUtils.jsonPut(layout, "type", "SPOTLIGHT")
        JsonUtils.jsonPut(layout, "priority", "PIN")
        JsonUtils.jsonPut(layout, "gridSize", 4)
        JsonUtils.jsonPut(config, "layout", layout)
        JsonUtils.jsonPut(config, "orientation", "portrait")
        JsonUtils.jsonPut(config, "theme", "DARK")
        JsonUtils.jsonPut(config, "quality", "high")
        meeting!!.startHls(config)
        //highlight-end
      } else {
        //highlight-next-line
        meeting!!.stopHls()
      }
    }
  }

  companion object {
    private var mActivity: Activity? = null
    private var mContext: Context? = null
    private var meeting: Meeting? = null
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="SpeakerFragment.java"
public class SpeakerFragment extends Fragment {

  private static Activity mActivity;
  private static Context mContext;
  private static Meeting meeting;
  private boolean micEnabled = true;
  private boolean webcamEnabled = true;
  private boolean hlsEnabled = false;
  private Button btnMic, btnWebcam, btnHls, btnLeave;
  private TextView tvMeetingId, tvHlsState;

  public SpeakerFragment() {
    // Required empty public constructor
  }

  @Override
  public void onAttach(@NonNull Context context) {
    super.onAttach(context);
    mContext = context;
    if (context instanceof Activity) {
      mActivity = (Activity) context;
      //highlight-next-line
      // getting meeting object from Meeting Activity
      meeting = ((MeetingActivity) mActivity).getMeeting();
    }
  }

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                            Bundle savedInstanceState) {
    // Inflate the layout for this fragment
    View view = inflater.inflate(R.layout.fragment_speaker, container, false);
    btnMic = view.findViewById(R.id.btnMic);
    btnWebcam = view.findViewById(R.id.btnWebcam);
    btnHls = view.findViewById(R.id.btnHLS);
    btnLeave = view.findViewById(R.id.btnLeave);

    tvMeetingId = view.findViewById(R.id.tvMeetingId);
    tvHlsState = view.findViewById(R.id.tvHlsState);

    if (meeting != null) {
        tvMeetingId.setText("Meeting Id : " + meeting.getMeetingId());
        //highlight-next-line
        setActionListeners();
    }
    return view;
  }

  private void setActionListeners() {
    btnMic.setOnClickListener(v -> {
        if (micEnabled) {
          //highlight-next-line
          meeting.muteMic();
          Toast.makeText(mContext,"Mic Muted",Toast.LENGTH_SHORT).show();
        } else {
          //highlight-next-line
          meeting.unmuteMic();
          Toast.makeText(mContext,"Mic Enabled",Toast.LENGTH_SHORT).show();
        }
        micEnabled=!micEnabled;
    });

    btnWebcam.setOnClickListener(v -> {
        if (webcamEnabled) {
          //highlight-next-line
          meeting.disableWebcam();
          Toast.makeText(mContext,"Webcam Disabled",Toast.LENGTH_SHORT).show();
        } else {
          //highlight-next-line
          meeting.enableWebcam();
          Toast.makeText(mContext,"Webcam Enabled",Toast.LENGTH_SHORT).show();
        }
        webcamEnabled=!webcamEnabled;
    });

    //highlight-next-line
    btnLeave.setOnClickListener(v -> meeting.leave());

    btnHls.setOnClickListener(v -> {
      if (!hlsEnabled) {
        //highlight-start
        JSONObject config = new JSONObject();
        JSONObject layout = new JSONObject();
        JsonUtils.jsonPut(layout, "type", "SPOTLIGHT");
        JsonUtils.jsonPut(layout, "priority", "PIN");
        JsonUtils.jsonPut(layout, "gridSize", 4);
        JsonUtils.jsonPut(config, "layout", layout);
        JsonUtils.jsonPut(config, "orientation", "portrait");
        JsonUtils.jsonPut(config, "theme", "DARK");
        JsonUtils.jsonPut(config, "quality", "high");
        meeting.startHls(config);
        //highlight-end
      } else {
        //highlight-next-line
        meeting.stopHls();
      }
    });
  }
}
```

</TabItem>

</Tabs>

4. After adding listners for buttons, let's add `MeetingEventListener` to the meeting and remove all listners in `onDestroy()` method.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="SpeakerFragment.kt"
class SpeakerFragment : Fragment() {

  override fun onCreateView(
      inflater: LayoutInflater, container: ViewGroup?,
      savedInstanceState: Bundle?
  ): View? {
    //...
    if (meeting != null) {
      //...
      //highlight-next-line
      // add Listener to the meeting
      meeting!!.addEventListener(meetingEventListener)
    }
    return view
  }

  private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
      override fun onMeetingLeft() {
        //highlight-next-line
        // unpin the local participant
        meeting!!.localParticipant.unpin("SHARE_AND_CAM")
        if (isAdded) {
          val intents = Intent(mContext, JoinActivity::class.java)
          intents.addFlags(
              Intent.FLAG_ACTIVITY_NEW_TASK
                      or Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_CLEAR_TASK
          )
          startActivity(intents)
          mActivity!!.finish()
        }
      }

      @RequiresApi(api = Build.VERSION_CODES.P)
      override fun onHlsStateChanged(HlsState: JSONObject) {
        if (HlsState.has("status")) {
          try {
              tvHlsState!!.text = "Current HLS State : " + HlsState.getString("status")
              //highlight-next-line
              if (HlsState.getString("status") == "HLS_STARTED") {
                hlsEnabled = true
                btnHls!!.text = "Stop HLS"
              }
              //highlight-next-line
              if (HlsState.getString("status") == "HLS_STOPPED") {
                hlsEnabled = false
                btnHls!!.text = "Start HLS"
              }
            } catch (e: JSONException) {
                e.printStackTrace()
            }
        }
      }
  }

  override fun onDestroy() {
      mContext = null
      mActivity = null
      if (meeting != null) {
          meeting!!.removeAllListeners()
          meeting = null
      }
      super.onDestroy()
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="SpeakerFragment.java"
public class SpeakerFragment extends Fragment {

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                            Bundle savedInstanceState) {
    //...
    if (meeting != null) {
        //...
        //highlight-next-line
        // add Listener to the meeting
        meeting.addEventListener(meetingEventListener);
    }
    return view;
  }

  private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    @Override
    public void onMeetingLeft() {
      //highlight-next-line
      //unpin local participant
      meeting.getLocalParticipant().unpin("SHARE_AND_CAM");
      if (isAdded()) {
        Intent intents = new Intent(mContext, JoinActivity.class);
        intents.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK
                | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        startActivity(intents);
        mActivity.finish();
      }
    }

    @RequiresApi(api = Build.VERSION_CODES.P)
    @Override
    public void onHlsStateChanged(JSONObject HlsState) {
        if (HlsState.has("status")) {
          try {
            tvHlsState.setText("Current HLS State : " + HlsState.getString("status"));
            //highlight-next-line
            if (HlsState.getString("status").equals("HLS_STARTED")) {
                hlsEnabled=true;
                btnHls.setText("Stop HLS");
            }
            //highlight-next-line
            if (HlsState.getString("status").equals("HLS_STOPPED")) {
                hlsEnabled = false;
                btnHls.setText("Start HLS");
            }
          } catch (JSONException e) {
              e.printStackTrace();
          }
        }
    }
  };

  @Override
  public void onDestroy() {
    mContext = null;
    mActivity = null;
    if (meeting != null) {
        meeting.removeAllListeners();
        meeting = null;
    }
    super.onDestroy();
  }

}
```

</TabItem>

</Tabs>

5. Next step is to render speaker's view. With `RecyclerView`, we will be display list of participant who joined the meeting as a `host`.

:::info

- Here the participant's video is displayed using `VideoView`, but you may also use `SurfaceViewRender` for the same.
- For `VideoView`, SDK version should be `0.1.13` or higher.
- To know more about `VideoView`, please visit [here](/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/understand-videoView-component)

:::

- Create a new layout for the participant view named `item_remote_peer.xml` in the `res/layout` folder.

```xml title="item_remote_peer.xml"
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:background="@color/cardview_dark_background"
    tools:layout_height="200dp">

    <live.videosdk.rtc.android.VideoView
        android:id="@+id/participantView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:visibility="gone" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom"
        android:background="#99000000"
        android:orientation="horizontal">

        <TextView
            android:id="@+id/tvName"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:gravity="center"
            android:padding="4dp"
            android:textColor="@color/white" />

    </LinearLayout>

</FrameLayout>
```

- Create a recycler view adapter named `SpeakerAdapter` which will show the participant list. Create `PeerViewHolder` in the adapter which will extend `RecyclerView.ViewHolder`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="SpeakerAdapter.kt"
class SpeakerAdapter(private val meeting: Meeting) :
    RecyclerView.Adapter<SpeakerAdapter.PeerViewHolder?>() {
    private var participantList: MutableList<Participant> = ArrayList()

    init {
      updateParticipantList()
      //highlight-next-line
      // adding Meeting Event listener to get the participant join/leave event in the meeting.
      meeting.addEventListener(object : MeetingEventListener() {
        override fun onParticipantJoined(participant: Participant) {
          //highlight-next-line
          // check participant join as Host/Speaker or not
          if (participant.mode == "CONFERENCE") {
              //highlight-next-line
              // pin the participant
              participant.pin("SHARE_AND_CAM")
              //highlight-next-line
              // add participant in participantList
              participantList.add(participant)
          }
          notifyDataSetChanged()
        }

        override fun onParticipantLeft(participant: Participant) {
          var pos = -1
          for (i in participantList.indices) {
              if (participantList[i].id == participant.id) {
                  pos = i
                  break
              }
          }
          if (participantList.contains(participant)) {
              //highlight-next-line
              // unpin participant who left the meeting
              participant.unpin("SHARE_AND_CAM")
              //highlight-next-line
              // remove participant from participantList
              participantList.remove(participant)
          }
          if (pos >= 0) {
              notifyItemRemoved(pos)
          }
        }
      })
    }

    private fun updateParticipantList() {
      //highlight-next-line
      // adding the local participant(You) to the list
      participantList.add(meeting.localParticipant)

      //highlight-next-line
      // adding participants who join as Host/Speaker
      val participants: Iterator<Participant> = meeting.participants.values.iterator()
      for (i in 0 until meeting.participants.size) {
        val participant = participants.next()
        if (participant.mode == "CONFERENCE") {
            //highlight-next-line
            // pin the participant
            participant.pin("SHARE_AND_CAM")
            //highlight-next-line
            // add participant in participantList
            participantList.add(participant)
        }
      }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PeerViewHolder {
      return PeerViewHolder(
          LayoutInflater.from(parent.context).inflate(R.layout.item_remote_peer, parent, false)
      )
    }

    override fun onBindViewHolder(holder: PeerViewHolder, position: Int) {
      val participant = participantList[position]
      holder.tvName.text = participant.displayName

      // adding the initial video stream for the participant into the 'VideoView'
      for ((_, stream) in participant.streams) {
        if (stream.kind.equals("video", ignoreCase = true)) {
          holder.participantView.visibility = View.VISIBLE
          val videoTrack = stream.track as VideoTrack
          //highlight-next-line
          holder.participantView.addTrack(videoTrack)
          break
        }
      }

      // add Listener to the participant which will update start or stop the video stream of that participant
      participant.addEventListener(object : ParticipantEventListener() {
        override fun onStreamEnabled(stream: Stream) {
          if (stream.kind.equals("video", ignoreCase = true)) {
            holder.participantView.visibility = View.VISIBLE
            val videoTrack = stream.track as VideoTrack
            //highlight-next-line
            holder.participantView.addTrack(videoTrack)
          }
        }

        override fun onStreamDisabled(stream: Stream) {
          if (stream.kind.equals("video", ignoreCase = true)) {
            //highlight-next-line
            holder.participantView.removeTrack()
            holder.participantView.visibility = View.GONE
          }
        }
      })
    }

    override fun getItemCount(): Int {
      //highlight-next-line
      return participantList.size
    }

    class PeerViewHolder(view: View) : RecyclerView.ViewHolder(view) {
      // 'VideoView' to show Video Stream
      var participantView: VideoView
      var tvName: TextView

      init {
        tvName = view.findViewById(R.id.tvName)
        participantView = view.findViewById(R.id.participantView)
      }
    }
}
```

</TabItem>

<TabItem value="Java">

```java title="SpeakerAdapter.java"
public class SpeakerAdapter extends RecyclerView.Adapter<SpeakerAdapter.PeerViewHolder> {
  private List<Participant> participantList = new ArrayList<>();
  private final Meeting meeting;
  public SpeakerAdapter(Meeting meeting) {
    this.meeting = meeting;

    updateParticipantList();

    //highlight-next-line
    // adding Meeting Event listener to get the participant join/leave event in the meeting.
    meeting.addEventListener(new MeetingEventListener() {
      @Override
      public void onParticipantJoined(Participant participant) {
        //highlight-next-line
        // check participant join as Host/Speaker or not
        if (participant.getMode().equals("CONFERENCE")) {
          //highlight-next-line
          // pin the participant
          participant.pin("SHARE_AND_CAM");
          //highlight-next-line
          // add participant in participantList
          participantList.add(participant);
        }
        notifyDataSetChanged();
      }

      @Override
      public void onParticipantLeft(Participant participant) {
        int pos = -1;
        for (int i = 0; i < participantList.size(); i++) {
          if (participantList.get(i).getId().equals(participant.getId())) {
            pos = i;
            break;
          }
        }
        if(participantList.contains(participant)) {
          //highlight-next-line
          // unpin participant who left the meeting
          participant.unpin("SHARE_AND_CAM");
          //highlight-next-line
          // remove participant from the list
          participantList.remove(participant);
        }
        if (pos >= 0) {
            notifyItemRemoved(pos);
        }
      }
    });
  }

  private void updateParticipantList() {
    participantList = new ArrayList<>();

    //highlight-next-line
    // adding the local participant(You) to the list
    participantList.add(meeting.getLocalParticipant());

    //highlight-next-line
    // adding participants who join as Host/Speaker
    Iterator<Participant> participants = meeting.getParticipants().values().iterator();
    for (int i = 0; i < meeting.getParticipants().size(); i++) {
      final Participant participant = participants.next();
      if (participant.getMode().equals("CONFERENCE")) {
        //highlight-next-line
        // pin the participant
        participant.pin("SHARE_AND_CAM");
        //highlight-next-line
        // add participant in participantList
        participantList.add(participant);
      }
    }
  }

  @NonNull
  @Override
  public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    return new PeerViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_remote_peer, parent, false));
  }

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    Participant participant = participantList.get(position);

    holder.tvName.setText(participant.getDisplayName());

    // adding the initial video stream for the participant into the 'VideoView'
    for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
      Stream stream = entry.getValue();
      if (stream.getKind().equalsIgnoreCase("video")) {
        holder.participantView.setVisibility(View.VISIBLE);
        VideoTrack videoTrack = (VideoTrack) stream.getTrack();
        //highlight-next-line
        holder.participantView.addTrack(videoTrack);
        break;
      }
    }

    // add Listener to the participant which will update start or stop the video stream of that participant
    participant.addEventListener(new ParticipantEventListener() {
        @Override
        public void onStreamEnabled(Stream stream) {
          if (stream.getKind().equalsIgnoreCase("video")) {
            holder.participantView.setVisibility(View.VISIBLE);
            VideoTrack videoTrack = (VideoTrack) stream.getTrack();
            //highlight-next-line
            holder.participantView.addTrack(videoTrack);
          }
        }

        @Override
        public void onStreamDisabled(Stream stream) {
          if (stream.getKind().equalsIgnoreCase("video")) {
            //highlight-next-line
            holder.participantView.removeTrack();
            holder.participantView.setVisibility(View.GONE);
          }
        }
    });
  }

  @Override
  public int getItemCount() {
    //highlight-next-line
    return participantList.size();
  }

  static class PeerViewHolder extends RecyclerView.ViewHolder {
    // 'VideoView' to show Video Stream
    public VideoView participantView;
    public TextView tvName;
    public View itemView;

    PeerViewHolder(@NonNull View view) {
        super(view);
        itemView = view;
        tvName = view.findViewById(R.id.tvName);
        participantView = view.findViewById(R.id.participantView);
    }
  }
}
```

</TabItem>

</Tabs>

6. Add this adapter to the `SpeakerFragment`

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="SpeakerFragment.kt"
 override fun onCreateView(
      inflater: LayoutInflater, container: ViewGroup?,
      savedInstanceState: Bundle?
  ): View? {
    //...
    if (meeting != null) {
      //...
      val rvParticipants = findViewById<RecyclerView>(R.id.rvParticipants)
      rvParticipants.layoutManager = GridLayoutManager(this, 2)
      rvParticipants.adapter = ParticipantAdapter(meeting!!)
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="SpeakerFragment.java"
 @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                            Bundle savedInstanceState) {
    //...
    if (meeting != null) {
      //...
      final RecyclerView rvParticipants = findViewById(R.id.rvParticipants);
      rvParticipants.setLayoutManager(new GridLayoutManager(this, 2));
      rvParticipants.setAdapter(new ParticipantAdapter(meeting));
    }
}
```

</TabItem>

</Tabs>

#### Output

<center>

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart_speaker_screen.jpg" />

</center>

### Step 4: Implement ViewerView

When host start the live streaming, viewer will be able to see the live streaming.

To implement player view, we are going to use `ExoPlayer`. It will be helpful to play hls stream.

Let's first add dependency into the project.

```js title="app/build.gradle"
dependencies {
  implementation 'com.google.android.exoplayer:exoplayer:2.18.5'
  // other app dependencies
  }
```

Create a new Fragment named `ViewerFragment`

#### Creating UI

The Viewer Fragment will include :

1. **TextView for Meeting Id** - The meeting Id that you joined will be displayed in this text view.
2. **Leave Button** - This button will leave the meeting.
3. **waitingLayout** - This is textView that will be shown when there is no active HLS.
4. **StyledPlayerView** - This is mediaplayer which will display livestreaming.

In `/app/res/layout/fragment_viewer.xml` file, replace the content with the following.

```xml title="fragment_viewer.xml"
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/black"
    tools:context=".ViewerFragment">

    <LinearLayout
        android:id="@+id/meetingLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingHorizontal="12sp"
        android:paddingVertical="5sp">

        <TextView
            android:id="@+id/meetingId"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="3"
            android:text="Meeting Id : "
            android:textColor="@color/white"
            android:textSize="20sp" />

        <Button
            android:id="@+id/btnLeave"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="Leave" />

    </LinearLayout>

    <TextView
        android:id="@+id/waitingLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:text="Waiting for host \n to start the live streaming"
        android:textColor="@color/white"
        android:textFontWeight="700"
        android:textSize="20sp"
        android:gravity="center"/>

    <com.google.android.exoplayer2.ui.StyledPlayerView
        android:id="@+id/player_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:visibility="gone"
        app:resize_mode="fixed_width"
        app:show_buffering="when_playing"
        app:show_subtitle_button="false"
        app:use_artwork="false"
        app:show_next_button="false"
        app:show_previous_button="false"
        app:use_controller="true"
        android:layout_below="@id/meetingLayout"/>

</RelativeLayout>
```

#### Initialize player and Playing HLS stream

1. Initialize player and play the HLS when the meeting HLS state is `HLS_PLAYABLE`, and release it when the HLS state is `HLS_STOPPED`. Whenever the meeting HLS state changes, the event `onHlsStateChanged` will be triggered.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="ViewerFragment.kt"
class ViewerFragment : Fragment() {
  private var meeting: Meeting? = null
  private var playerView: StyledPlayerView? = null
  private var waitingLayout: TextView? = null
  private var player: ExoPlayer? = null
  private var dataSourceFactory: DefaultHttpDataSource.Factory? = null
  private val startAutoPlay = true
  private var downStreamUrl: String? = ""

  override fun onCreateView(
    inflater: LayoutInflater, container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View? {
    // Inflate the layout for this fragment
    val view = inflater.inflate(R.layout.fragment_viewer, container, false)
    playerView = view.findViewById(R.id.player_view)
    waitingLayout = view.findViewById(R.id.waitingLayout)
    if (meeting != null) {
        //highlight-next-line
        // set MeetingId to TextView
        (view.findViewById<View>(R.id.meetingId) as TextView).text =
            "Meeting Id : " + meeting!!.meetingId
        //highlight-next-line
        // leave the meeting on btnLeave click
        (view.findViewById<View>(R.id.btnLeave) as Button).setOnClickListener { meeting!!.leave() }
        //highlight-next-line
        // add listener to meeting
        meeting!!.addEventListener(meetingEventListener)
    }
    return view
  }

  override fun onAttach(context: Context) {
      super.onAttach(context)
      mContext = context
      if (context is Activity) {
        mActivity = context
        //highlight-next-line
        // get meeting object from MeetingActivity
        meeting = (mActivity as MeetingActivity?)!!.meeting
      }
  }

  private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
      override fun onMeetingLeft() {
        if (isAdded) {
          val intents = Intent(mContext, JoinActivity::class.java)
          intents.addFlags(
              Intent.FLAG_ACTIVITY_NEW_TASK
                      or Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_CLEAR_TASK
          )
          startActivity(intents)
          mActivity!!.finish()
        }
      }

      //highlight-start
      @RequiresApi(api = Build.VERSION_CODES.P)
      override fun onHlsStateChanged(HlsState: JSONObject) {
        if (HlsState.has("status")) {
            try {
              if (HlsState.getString("status") == "HLS_PLAYABLE" && HlsState.has("downstreamUrl")) {
                downStreamUrl = HlsState.getString("downstreamUrl")
                waitingLayout!!.visibility = View.GONE
                playerView!!.visibility = View.VISIBLE
                // initialize player
                initializePlayer()
              }
              if (HlsState.getString("status") == "HLS_STOPPED") {
                // release the player
                releasePlayer()
                downStreamUrl = null
                waitingLayout!!.text = "Host has stopped \n the live streaming"
                waitingLayout!!.visibility = View.VISIBLE
                playerView!!.visibility = View.GONE
              }
            } catch (e: JSONException) {
                e.printStackTrace()
            }
          }
      }
      //highlight-end
  }

  private fun initializePlayer() {
    if (player == null) {
      dataSourceFactory = DefaultHttpDataSource.Factory()
      val mediaSource = HlsMediaSource.Factory(dataSourceFactory!!).createMediaSource(
          MediaItem.fromUri(Uri.parse(downStreamUrl))
      )
      val playerBuilder = ExoPlayer.Builder( /* context = */mContext!!)
      player = playerBuilder.build()
      // auto play when player is ready
      player!!.playWhenReady = startAutoPlay
      player!!.setMediaSource(mediaSource)
      // if you want display setting for player then remove this line
      playerView!!.findViewById<View>(com.google.android.exoplayer2.ui.R.id.exo_settings).visibility =
          View.GONE
      playerView!!.player = player
    }
    player!!.prepare()
  }

  private fun releasePlayer() {
    if (player != null) {
      player!!.release()
      player = null
      dataSourceFactory = null
      playerView!!.player = null
    }
  }

  override fun onDestroy() {
    mContext = null
    mActivity = null
    downStreamUrl = null
    releasePlayer()
    if (meeting != null) {
        meeting!!.removeAllListeners()
        meeting = null
    }
    super.onDestroy()
  }

  companion object {
    private var mActivity: Activity? = null
    private var mContext: Context? = null
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="ViewerFragment.java"
public class ViewerFragment extends Fragment {

  private Meeting meeting;
  protected StyledPlayerView playerView;
  private TextView waitingLayout;
  protected @Nullable
  ExoPlayer player;

  private DefaultHttpDataSource.Factory dataSourceFactory;
  private boolean startAutoPlay=true;
  private String downStreamUrl = "";
  private static Activity mActivity;
  private static Context mContext;

  public ViewerFragment() {
      // Required empty public constructor
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                            Bundle savedInstanceState) {
    // Inflate the layout for this fragment
    View view = inflater.inflate(R.layout.fragment_viewer, container, false);

    playerView = view.findViewById(R.id.player_view);

    waitingLayout = view.findViewById(R.id.waitingLayout);
    if(meeting != null) {
      //highlight-next-line
      // set MeetingId to TextView
      ((TextView) view.findViewById(R.id.meetingId)).setText("Meeting Id : " + meeting.getMeetingId());
      //highlight-next-line
      // leave the meeting on btnLeave click
      ((Button) view.findViewById(R.id.btnLeave)).setOnClickListener(v -> meeting.leave());
      //highlight-next-line
      // add listener to meeting
      meeting.addEventListener(meetingEventListener);
    }
    return view;
  }


  @Override
  public void onAttach(@NonNull Context context) {
    super.onAttach(context);
    mContext = context;
    if (context instanceof Activity) {
      mActivity = (Activity) context;
      //highlight-next-line
      // get meeting object from MeetingActivity
      meeting = ((MeetingActivity) mActivity).getMeeting();
    }
  }

  private final MeetingEventListener meetingEventListener = new MeetingEventListener() {

      @Override
      public void onMeetingLeft() {
        if (isAdded()) {
          Intent intents = new Intent(mContext, JoinActivity.class);
          intents.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK
                  | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_CLEAR_TASK);
          startActivity(intents);
          mActivity.finish();
        }
      }

      //highlight-start
      @RequiresApi(api = Build.VERSION_CODES.P)
      @Override
      public void onHlsStateChanged(JSONObject HlsState) {
        if (HlsState.has("status")) {
          try {
            if (HlsState.getString("status").equals("HLS_PLAYABLE") && HlsState.has("downstreamUrl")) {
              downStreamUrl = HlsState.getString("downstreamUrl");
              waitingLayout.setVisibility(View.GONE);
              playerView.setVisibility(View.VISIBLE);
              // initialize player
              initializePlayer();
            }
            if (HlsState.getString("status").equals("HLS_STOPPED")) {
              // release the player
              releasePlayer();
              downStreamUrl = null;
              waitingLayout.setText("Host has stopped \n the live streaming");
              waitingLayout.setVisibility(View.VISIBLE);
              playerView.setVisibility(View.GONE);
            }
          } catch (JSONException e) {
              e.printStackTrace();
          }
        }
    }
    //highlight-end
  };

  protected void initializePlayer() {
    if (player == null) {
      dataSourceFactory = new DefaultHttpDataSource.Factory();
      HlsMediaSource mediaSource = new HlsMediaSource.Factory(dataSourceFactory).createMediaSource(
              MediaItem.fromUri(Uri.parse(this.downStreamUrl)));
      ExoPlayer.Builder playerBuilder =
              new ExoPlayer.Builder(/* context= */ mContext);
      player = playerBuilder.build();
      // auto play when player is ready
      player.setPlayWhenReady(startAutoPlay);
      player.setMediaSource(mediaSource);
      // if you want display setting for player then remove this line
      playerView.findViewById(com.google.android.exoplayer2.ui.R.id.exo_settings).setVisibility(View.GONE);
      playerView.setPlayer(player);
    }
    player.prepare();
  }

  protected void releasePlayer() {
    if (player != null) {
      player.release();
      player = null;
      dataSourceFactory = null;
      playerView.setPlayer(/* player= */ null);
    }
  }

  @Override
  public void onDestroy() {
    mContext = null;
    mActivity = null;
    downStreamUrl = null;
    releasePlayer();
    if (meeting != null) {
      meeting.removeAllListeners();
      meeting = null;
    }
    super.onDestroy();
  }

}
```

</TabItem>

</Tabs>

#### Output

<center>

<img style={{height: '450px',marginRight:'15px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart_viewer_screen_waiting.jpg" />

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart_viewer_screen.jpg" />

</center>

<br/>

## Final Output

We are done with implementation of customised video calling app in Android using Video SDK. To explore more features go through Basic and Advanced features.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer muted controls url="https://cdn.videosdk.live/website-resources/docs-resources/android_ils_quickstart.mp4" height="500px" width={"100%"} />

</div>

<br/>

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/android-hls).
:::
