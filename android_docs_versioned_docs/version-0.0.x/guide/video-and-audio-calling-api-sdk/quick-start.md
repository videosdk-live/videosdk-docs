---
title: Quick Start with Android
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start with Android
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Java Development Kit.
- Android Studio 3.0 or later.
- Android SDK API Level 18 or higher.
- A mobile device that runs Android 4.3 or later.

:::important

One should have a videoSDK account to generate token.
Visit videoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app.

### Create new Android Project

For a new project in **Android Studio**, create a **Phone and Tablet** Android project with an **Empty Activity**.

![VideoSDK Android Quick Start New Project](/img/quick-start/android_newProject.png)

:::caution
After creating the project, Android Studio automatically starts gradle sync. Ensure that the sync succeeds before you continue.
:::

### Integrate Video SDK

1. If your Android Studio Version is older than Android Studio Bumblebees, add the repository to project's `build.gradle` file. <br/>
If your are using Android Studio Bumblebees or newer Version, add the repository to `settings.gradle` file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="2021.1.1"
groupId={"android-studio-version"}
values={[{label: 'Android Studio Version < 2021.1.1', value: '<2021.1.1'},{label: 'Android Studio Version 2021.1.1', value: '2021.1.1'},]}>

<TabItem value="<2021.1.1">

```js title="build.gradle"
allprojects {
  repositories {
    // ...
    maven { url 'https://jitpack.io' }
    jcenter()
  }
}
```
</TabItem>

<TabItem value="2021.1.1">

```js title="settings.gradle"
dependencyResolutionManagement{
  repositories {
    // ...
    maven { url 'https://jitpack.io' }
    jcenter()
  }
}
```
</TabItem>

</Tabs>


2. Add the following dependency in your app's `app/build.gradle`.

```js title="app/build.gradle"
dependencies {
  implementation 'live.videosdk:android-sdk:0.0.13'

  // library to perform Network call to generate a meeting id
  implementation 'com.amitshekhar.android:android-networking:1.0.2'

  // other app dependencies
  }
```

### Add permissions into your project

In `/app/Manifests/AndroidManifest.xml`, add the following permissions after `</application>`.

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
```

### Structure of the project

Your project structure should look like this.

```jsx title="Project Structure"
   app
   ├── java
   │    ├── packagename
   │         ├── JoinActivity.java 
   │         ├── MainApplication.java
   │         ├── MeetingActivity.java
   │         ├── ParticipantAdapter.java
   ├── res
   │    ├── layout
   │    │    ├── activity_join.xml
   │    │    ├── activity_meeting.xml
   │    │    ├── item_remote_peer.xml
```

:::note

You have to set JoinActivity as Launcher activity.

:::

### App Architecture

<div style={{textAlign: 'center'}}>

![VideoSDK Android Quick Start App Structure](/img/quick-start/android_AppStructure.jpg)

</div>

### Step 1: Initialize VideoSDK

1. Create `MainApplication.java` class which will extend the `android.app.Application`.

```java title="MainApplication.java"
import android.app.Application;
import live.videosdk.rtc.android.VideoSDK;

public class MainApplication extends Application {
    @Override
    public void onCreate() {
      super.onCreate();
      VideoSDK.initialize(getApplicationContext());
    }
}
```

2. Add `MainApplication` to `AndroidManifest.xml`

```xml title="AndroidManifest.xml"
<application
    android:name=".MainApplication" >
   <!-- ... -->
</application>
```

### Step 2: Creating Joining Screen

#### Creating UI

The Joining screen will include :

1. **Create Button** - This button will create a new meeting for you.
2. **TextField for Meeting Id** - This text field will contain the meeting Id you want to join.
3. **Join Button** - This button will join the meeting with `meetingId` you provided.

In `/app/res/layout/activity_join.xml` file, replace the content with the following.

```xml title="activity_join.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:gravity="center"
  android:orientation="vertical"
  tools:context=".JoinActivity">
  <Button
    android:id="@+id/btnCreateMeeting"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginBottom="16dp"
    android:text="Create Meeting" />
  <TextView
    style="@style/TextAppearance.AppCompat.Headline"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="OR" />
  <com.google.android.material.textfield.TextInputLayout
    style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginVertical="16dp"
    android:hint="Enter Meeting ID">
    <EditText
      android:id="@+id/etMeetingId"
      android:layout_width="250dp"
      android:layout_height="wrap_content"
      android:textColor="@color/white" />
  </com.google.android.material.textfield.TextInputLayout>
  <Button
    android:id="@+id/btnJoinMeeting"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Join Meeting" />
</LinearLayout>
```

#### Integration of Create Meeting API

1. Declare the variables `sampleToken` which will hold the generated token from the [VideoSDK dashboard](https://app.videosdk.live/api-keys)

```java title="JoinActivity.java"
//Replace with the token you generated from the VideoSDK Dashboard
String sampleToken = "";
```

2. Add the `onClick` events for the Join and Create button.

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_join);

    final Button btnCreate = findViewById(R.id.btnCreateMeeting);
    final Button btnJoin = findViewById(R.id.btnJoinMeeting);
    final EditText etMeetingId = findViewById(R.id.etMeetingId);

    btnCreate.setOnClickListener(v -> {
      // we will explore this method in the next step
      createMeeting(sampleToken);
    });

    btnJoin.setOnClickListener(v -> {
      Intent intent = new Intent(JoinActivity.this, MeetingActivity.class);
      intent.putExtra("token", sampleToken);
      intent.putExtra("meetingId", etMeetingId.getText().toString());
      startActivity(intent);
    });
  }

  private void createMeeting(String token) {
  }
}
```

3. Now we will write some code for integrating create meeting API under `createMeeting` method.

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {
  //...onCreate

  private void createMeeting(String token) {
    // we will make an API call to VideoSDK Server to get a meetingId
    AndroidNetworking.post("https://api.videosdk.live/v1/meetings")
      .addHeaders("Authorization", token) //we will pass the token in the Headers
      .build()
      .getAsJSONObject(new JSONObjectRequestListener() {
        @Override
        public void onResponse(JSONObject response) {
          try {
            // resposne will contain `meetingId`
            final String meetingId = response.getString("meetingId");

            // starting the MeetingActivity with recieved meetingId and our sampleToken
            Intent intent = new Intent(JoinActivity.this, MeetingActivity.class);
            intent.putExtra("token", sampleToken);
            intent.putExtra("meetingId", meetingId);
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

4. Our App is completely based on audio and video commutation, that's why we need to ask for runtime permissions `RECORD_AUDIO` and `CAMERA`.

```java title="JoinActivity.java"
public class JoinActivity extends AppCompatActivity {
  private static final int PERMISSION_REQ_ID = 22;

  private static final String[] REQUESTED_PERMISSIONS = {
    Manifest.permission.RECORD_AUDIO,
    Manifest.permission.CAMERA
  };

  private boolean checkSelfPermission(String permission, int requestCode) {
    if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
      ActivityCompat.requestPermissions(this, REQUESTED_PERMISSIONS, requestCode);
      return false;
    }
    return true;
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    //... button listeneres
    checkSelfPermission(REQUESTED_PERMISSIONS[0], PERMISSION_REQ_ID);
    checkSelfPermission(REQUESTED_PERMISSIONS[1], PERMISSION_REQ_ID);
  }
}
```

#### Output

<div style={{textAlign: 'center'}}>

![VideoSDK Android Quick Start joining Screen](/img/quick-start/android-join-screen.jpg)

</div>


### Step 3: Creating Meeting Screen

Create a new Activity named `MeetingActivity.java`.

#### Creating the UI for Meeting Screen

In `/app/res/layout/activity_meeting.xml` file, replace the content with the following.

```xml title="activty_meeting.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/tvMeetingId"
        style="@style/TextAppearance.AppCompat.Display1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!" />

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/rvParticipants"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1" />

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content">

        <Button
            android:id="@+id/btnMic"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginVertical="8dp"
            android:text="Mic"/>

        <Button
            android:id="@+id/btnLeave"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginVertical="8dp"
            android:layout_marginHorizontal="8dp"
            android:text="Leave"/>

        <Button
            android:id="@+id/btnWebcam"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginVertical="8dp"
            android:text="Webcam" />

    </LinearLayout>


</LinearLayout>
```

#### Initializing the Meeting

We will initialize the meeting with required configurations and implement `MeetingEventListener` for listening events such as **Meeting Join/Left** and **Participant Join/Left**.

```java title="MeetingActivity.java"
public class MeetingActivity extends AppCompatActivity {
  //Declare the variables we will be using to handle the meeting
  private Meeting meeting;

  private boolean micEnabled = true;
  private boolean webcamEnabled = true;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_meeting);

    final String token = getIntent().getStringExtra("token");
    final String meetingId = getIntent().getStringExtra("meetingId");
    final String participantName = "John Doe";

    // pass the token generated from dashboard
    VideoSDK.config(token);
    // create a new meeting instance
    meeting = VideoSDK.initMeeting(
            MeetingActivity.this, meetingId, participantName,
            micEnabled, webcamEnabled
    );
    // add event listener for listening upcoming events
    meeting.addEventListener(meetingEventListener);

    meeting.join();

    ((TextView)findViewById(R.id.tvMeetingId)).setText(meetingId);
  }

  // creating the MeetingEventListener
  private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    @Override
    public void onMeetingJoined() {
      Log.d("#meeting", "onMeetingJoined()");
    }

    @Override
    public void onMeetingLeft() {
      Log.d("#meeting", "onMeetingLeft()");
      meeting = null;
      if (!isDestroyed()) finish();
    }

    @Override
    public void onParticipantJoined(Participant participant) {
      Toast.makeText(MeetingActivity.this, participant.getDisplayName() + " joined", Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onParticipantLeft(Participant participant) {
      Toast.makeText(MeetingActivity.this, participant.getDisplayName() + " left", Toast.LENGTH_SHORT).show();
    }
  };
}
```

### Step 4: Handle Local Participant Media

To **enbale/disable** local participant(You) webcam and mic, we will use `Meeting` class method `enableWebcam` / `disableWebcam` for camera and `muteMic` / `unmuteMic` for mic.

```java title="MeetingActivity.java"
public class MeetingActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_meeting);
    //...Meeting Setup is Here

    // actions
    setActionListeners();
  }

  private void setActionListeners() {
    // toggle mic
    findViewById(R.id.btnMic).setOnClickListener(view -> {
      if (micEnabled) {
        // this will mute the local participant's mic
        meeting.muteMic();
        Toast.makeText(MeetingActivity.this, "Mic Muted", Toast.LENGTH_SHORT).show();
      } else {
        // this will unmute the local participant's mic
        meeting.unmuteMic();
        Toast.makeText(MeetingActivity.this, "Mic Enabled", Toast.LENGTH_SHORT).show();
      }
    });

    // toggle webcam
    findViewById(R.id.btnWebcam).setOnClickListener(view -> {
      // TODO : How we are managing webcamEnabled and micEnabled variable
      if (webcamEnabled) {
        // this will disable the local participant webcam
        meeting.disableWebcam();
        Toast.makeText(MeetingActivity.this, "Webcam Disabled", Toast.LENGTH_SHORT).show();
      } else {
        // this will enable the local participant webcam
        meeting.enableWebcam();
        Toast.makeText(MeetingActivity.this, "Webcam Enabled", Toast.LENGTH_SHORT).show();
      }
    });

    // leave meeting
    findViewById(R.id.btnLeave).setOnClickListener(view -> {
      // this will make the local participant leave the meeting
      meeting.leave();
    });
  }
}
```
#### Output

<div style={{textAlign: 'center'}}>

<img style={{height: '200px'}} src="/img/quick-start/android_controls.jpeg" />

</div>

### Step 5: Handling the Participants View

We will be showing the list of participant in a recycler view.

1. Create a new layout for the participant view named `item_remote_peer.xml` in the `res/layout` folder.

```xml title="item_remote_peer.xml"
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  tools:layout_height="200dp">
  <ImageView
    android:layout_width="100dp"
    android:layout_height="100dp"
    android:layout_gravity="center"
    app:tint="@color/white" />
  <org.webrtc.SurfaceViewRenderer
    android:id="@+id/svrParticipant"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:visibility="gone" />
  <FrameLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_gravity="bottom"
    android:background="@color/black">
    <TextView
      android:id="@+id/tvName"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_gravity="center"
      android:textColor="@color/white" />
  </FrameLayout>
</FrameLayout>
```

2. Create a recycler view adapter named `ParticipantAdapter` which will show the participant list. Create `PeerViewHolder` in the adapter which will extend `RecyclerView.ViewHolder`.

```java title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  private int containerHeight;

  @NonNull
  @Override
  public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    containerHeight = parent.getHeight();
    return new PeerViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_remote_peer, parent, false));
  }

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {

  }

  @Override
  public int getItemCount() {
      return 0;
  }

  static class PeerViewHolder extends RecyclerView.ViewHolder {
    // 'SurfaceViewRenderer' to show Video Stream
    public SurfaceViewRenderer svrParticipant;
    public TextView tvName;
    public View itemView;

    PeerViewHolder(@NonNull View view) {
      super(view);
      itemView = view;
      tvName = view.findViewById(R.id.tvName);
      svrParticipant = view.findViewById(R.id.svrParticipant);
      svrParticipant.init(PeerConnectionUtils.getEglContext(), null);
    }
  }
}
```

3. Now, we will render a list of `Participant` for the meeting.
   We will initialize this list in the constructor of the `ParticipantAdapter`

```java title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  // creating a empty list which will store all participants
  private final List<Participant> participants = new ArrayList<>();

  public ParticipantAdapter(Meeting meeting) {
    // adding the local participant(You) to the list
    participants.add(meeting.getLocalParticipant());

    // adding Meeting Event listener to get the participant join/leave event in the meeting.
    meeting.addEventListener(new MeetingEventListener() {
      @Override
      public void onParticipantJoined(Participant participant) {
        // add participant to the list
        participants.add(participant);
        notifyItemInserted(participants.size() - 1);
      }

      @Override
      public void onParticipantLeft(Participant participant) {
        int pos = -1;
        for (int i = 0; i < participants.size(); i++) {
          if (participants.get(i).getId().equals(participant.getId())) {
            pos = i;
            break;
          }
        }
        // remove participant from the list
        participants.remove(participant);

        if (pos >= 0) {
          notifyItemRemoved(pos);
        }
      }
    });
  }

  // this method returns the size of total number of participants
  @Override
  public int getItemCount() {
    return participants.size();
  }
  //...
}
```

4. We have listed our participants. Let's set up the view holder to display a participant video.

```java title="PartipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    Participant participant = participants.get(position);

    ViewGroup.LayoutParams layoutParams = holder.itemView.getLayoutParams();
    layoutParams.height = containerHeight / 3;
    holder.itemView.setLayoutParams(layoutParams);

    holder.tvName.setText(participant.getDisplayName());

    // adding the initial video stream for the participant into the 'SurfaceViewRenderer'
    for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
      Stream stream = entry.getValue();
      if (stream.getKind().equalsIgnoreCase("video")) {
        holder.svrParticipant.setVisibility(View.VISIBLE);
        VideoTrack videoTrack = (VideoTrack) stream.getTrack();
        videoTrack.addSink(holder.svrParticipant);
        break;
      }
    }
    // add Listener to the participant which will update start or stop the video stream of that participant
    participant.addEventListener(new ParticipantEventListener() {
      @Override
      public void onStreamEnabled(Stream stream) {
        if (stream.getKind().equalsIgnoreCase("video")) {
          holder.svrParticipant.setVisibility(View.VISIBLE);
          VideoTrack videoTrack = (VideoTrack) stream.getTrack();
          videoTrack.addSink(holder.svrParticipant);
        }
      }

      @Override
      public void onStreamDisabled(Stream stream) {
        if (stream.getKind().equalsIgnoreCase("video")) {
          VideoTrack track = (VideoTrack) stream.getTrack();
          if (track != null)
            track.removeSink(holder.svrParticipant);
          holder.svrParticipant.clearImage();
          holder.svrParticipant.setVisibility(View.GONE);
        }
      }
    });
  }
}
```

5. Add this adapter to the `MeetingActivity.java`

```java title="MeetingActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  //Meeting Setup...
  //...
  final RecyclerView rvParticipants = findViewById(R.id.rvParticipants);
  rvParticipants.setLayoutManager(new GridLayoutManager(this, 2));
  rvParticipants.setAdapter(new ParticipantAdapter(meeting));
}
```

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example) on GitHub

:::

### Step 6: Run and Test

The app is all set to test. Make sure to update the `sampleToken` in `JoinActivity.java`

Your app should look like this after the implementation.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer controls url="/img/quick-start/android-final-video.mp4" height="500px" width={"100%"} />

</div>

<br/>

:::caution
For the tutorial purpose, we used a static token to initialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server that will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/android/guide/video-and-audio-calling-api-sdk/server-setup).
:::
