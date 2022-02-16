---
title: Quick Start with Android
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with Android
pagination_label: Quick Start with Android
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Sample Project

These quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](/). Once you are done with the tutorial given below your app should look like this.

![VideoSDK Android Quick Start Join Screen](/img/quick-start/android-join-screen.jpg) ![VideoSDK Android Quick Start Meeting Screen](/img/quick-start/android-meeting-screen.jpg) 

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

* Java Development Kit.
* Android Studio 3.0 or later.
* Android SDK API Level 16 or higher.
* A valid VideoSDK account.
* An active VideoSDK project with temporary token. For details, see [Signup & Create API Key](/android/guide/video-and-audio-calling-api-sdk/signup-and-create-api).
* A computer with access to the internet.
* A mobile device that runs Android 4.1 or later.

## Project Setup

Follow the steps to create the environment necessary to add video call into your app.

1. For new projects, in **Android Studio**, create a **Phone and Tablet** Android project with an **Empty Activity**.

:::caution
After creating the project, Android Studio automatically starts gradle sync. Ensure that the sync succeeds before you continue.
:::

2. Add the repo to project's `build.gradle` file.

```js title="build.gradle"
allprojects {
  repositories {
    // ...
    maven { url 'https://jitpack.io' }
  }
}
```

3. Add the dependency in `app/build.gradle`:

```js title="app/build.gradle"
dependencies {
		implementation 'live.videosdk:android-sdk:0.0.7'

    //Library to perform Network call to generate a meeting id
    implementation 'com.amitshekhar.android:android-networking:1.0.2'

		// other app dependencies
}
```

4. Add all the following permissions to AndroidManifest.xml

```js title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.BLUETOOTH" />
```

5. Sync the gradle now. Once the sync is completed successfully, proceed further. If the gradle sync fails you can check if the problem you are facing is present in [Known Issues](/), if not, post us on our [discord community](https://discord.gg/f2WsNDN9S5).


6. Extend the android.app.Application class and create MainApplication.java class with the following code

```js title="MainApplication.java"
package live.videosdk.demo;

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

7. Add MainApplication to AndroidManifest.xml

```js title="AndroidManifest.xml"
<application
    android:name=".MainApplication"
>
  <!-- ... -->
</application>
```

## Implementing Meeting with VideoSDK

### Creating Joining Screen

#### Creating UI

The Joining screen will consist of:
1. Create Button - This button will create a new meeting for you.
2. TextField for Meeting ID - This textfield will contain the meeting ID you want to join.
2. Join Button - This buttom will join the meeting with which the you will be joined.

In `/app/res/layout/activity_main.xml`, replace the content with the following:

```js title="MainActivity.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    tools:context=".MainActivity">

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

#### Integrating Create Meeting API Call

1. Declare the variables `sampleToken` which will hold the **Sample Token** generated from the VideoSDK dashboard

```js title="MainActivity.java"
//Replace with the token you generated from the VideoSDK Dashboard
String sampleToken = "";
```

2. Add the OnClick events to the Join and Create button.

```js title="MainActivity.java"
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);

      final Button btnCreate = findViewById(R.id.btnCreateMeeting);
      final Button btnJoin = findViewById(R.id.btnJoinMeeting);
      final EditText etMeetingId = findViewById(R.id.etMeetingId);

      btnCreate.setOnClickListener(v -> {
          createMeeting(sampleToken);
      });

      btnJoin.setOnClickListener(v -> {
          Intent intent = new Intent(MainActivity.this, MeetingActivity.class);
          intent.putExtra("token", sampleToken);
          intent.putExtra("meetingId", etMeetingId.getText().toString());
          startActivity(intent);
      });

  }
```

3. Add the `createMeeting()` which we specified in the `btnJoin`

```js title="MainActivity.java"
private void createMeeting(String token) {
  AndroidNetworking.post("https://api.videosdk.live/v1/meetings")
    .addHeaders("Authorization", token)
    .build()
    .getAsJSONObject(new JSONObjectRequestListener() {
      @Override
      public void onResponse(JSONObject response) {
        try {
          final String meetingId = response.getString("meetingId");
          Intent intent = new Intent(MainActivity.this, MeetingAtivity.class);
          intent.putExtra("token", sampleToken)
          intent.putExtra("meetingId", meetingd);
          startActivity(intent);
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }

      @Override
      public void onError(ANError anError) {
        anError.printStackTrace();
        Toast.makeText(MainActivity.this, anError.getMessage(),
                Toast.LENGTH_SHORT).show();
      }
  });
}

```

4. Since we will be using the Camera and Audio of the device, we need to ask for runtime permissions.

```js title="MainActivity.java"
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

```

### Creating Meeting Screen

1. Create a new Activity named `MeetingActivity.java`.

#### Creating the UI for Meeting Screen

In `/app/res/layout/activity_meeting.xml`, replace the content with the following:

```js title="activty_meeting.xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="4dp"
        android:orientation="horizontal">

        <TextView
            android:id="@+id/tvMeetingId"
            style="@style/TextAppearance.AppCompat.Display1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="Hello World!" />

        <FrameLayout
            android:layout_width="80dp"
            android:layout_height="100dp"
            android:layout_gravity="end">

            <org.webrtc.SurfaceViewRenderer
                android:id="@+id/svrLocal"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:visibility="visible" />
        </FrameLayout>
    </LinearLayout>

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

#### initializing the Meeting

1. Decalre the varibles we will be using to handle the meeting.

```js title="MeetingActivity.java"
private Meeting meeting;

private boolean micEnabled = true;
private boolean webcamEnabled = true;
```

2. Next step is to intialize a meeting with all the configuration.

```js title="MeetingActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_meeting);

  final String token = getIntent().getStringExtra("token");
  final String meetingId = getIntent().getStringExtra("meetingId");
  final String participantName = "John Doe";

  // pass the token generated from api server
  VideoSDK.config(token);

  // create a new meeting instance
  meeting = VideoSDK.initMeeting(
          MeetingActivity.this, meetingId, participantName,
          micEnabled, webcamEnabled
  );
  meeting.addEventListener(meetingEventListener);
  meeting.join();

  ((TextView)findViewById(R.id.tvMeetingId)).setText(meetingId);

}

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
    Toast.makeText(MeetingActivity.this, participant.getDisplayName() + " joined",
            Toast.LENGTH_SHORT).show();
  }

  @Override
  public void onParticipantLeft(Participant participant) {
    Toast.makeText(MeetingActivity.this, participant.getDisplayName() + " left",
            Toast.LENGTH_SHORT).show();
  }

};

```

3. Meeting is all set and joined. 

### Handling the Local Participant Toggles

In order add the local participant webcam and mic toggle options, add following code to your `MeetingActivity.java`

```js title="MeetingActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_meeting);
  //...Meeting Setup is Here

  // Actions
  setActionListeners();
}


private void setActionListeners() {
  // Toggle mic
  findViewById(R.id.btnMic).setOnClickListener(view -> {
    if (micEnabled) {
      meeting.muteMic();
      Toast.makeText(MeetingActivity.this, "Mic Muted", Toast.LENGTH_SHORT).show();
    } else {
      meeting.unmuteMic();
      Toast.makeText(MeetingActivity.this, "Mic Enabled", Toast.LENGTH_SHORT).show();
    }
  });

  // Toggle webcam
  findViewById(R.id.btnWebcam).setOnClickListener(view -> {
    if (webcamEnabled) {
      meeting.disableWebcam();
      Toast.makeText(MeetingActivity.this, "Webcam Disabled", Toast.LENGTH_SHORT).show();
    } else {
      meeting.enableWebcam();
      Toast.makeText(MeetingActivity.this, "Webcam Enabled", Toast.LENGTH_SHORT).show();
    }
  });

  // Leave meeting
  findViewById(R.id.btnLeave).setOnClickListener(view -> {
    showLeaveOrEndDialog();
  });

}

private void showLeaveOrEndDialog() {
  new MaterialAlertDialogBuilder(MeetingActivity.this)
    .setTitle("Leave or End meeting")
    .setMessage("Leave from meeting or end the meeting for everyone ?")
    .setPositiveButton("Leave", (dialog, which) -> {
        meeting.leave();
        finish();
    })
    .setNegativeButton("End", (dialog, which) -> {
        meeting.end();
        finish();
    })
    .show();
}
```

#### Handling the Participants View 

We will be showing the list of participants in a recycler view.

1. Create a new layout for the participant view.

```js title="item_remote_peer.xml"
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

2. Create a recycler view adapter which will populate our list.

```js title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  private final List<Participant> participants = new ArrayList<>();
  private int containerHeight;

  public ParticipantAdapter(Meeting meeting) {

    participants.add(meeting.getLocalParticipant());

    meeting.addEventListener(new MeetingEventListener() {
      @Override
      public void onParticipantJoined(Participant participant) {
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

        participants.remove(participant);

        if (pos >= 0) {
            notifyItemRemoved(pos);
        }
      }
    });
  }

  @NonNull
  @Override
  public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    containerHeight = parent.getHeight();

    return new PeerViewHolder(LayoutInflater.from(parent.getContext())
            .inflate(R.layout.item_remote_peer, parent, false));
  }

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    Participant participant = participants.get(position);

    ViewGroup.LayoutParams layoutParams = holder.itemView.getLayoutParams();
    layoutParams.height = containerHeight / 3;
    holder.itemView.setLayoutParams(layoutParams);

    holder.tvName.setText(participant.getDisplayName());

    for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
        Stream stream = entry.getValue();
        if (stream.getKind().equalsIgnoreCase("video")) {
            holder.svrParticipant.setVisibility(View.VISIBLE);

            VideoTrack videoTrack = (VideoTrack) stream.getTrack();
            videoTrack.addSink(holder.svrParticipant);

            break;
        }
    }

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
              if (track != null) track.removeSink(holder.svrParticipant);

              holder.svrParticipant.clearImage();
              holder.svrParticipant.setVisibility(View.GONE);
          }
      }
    });
  }

  @Override
  public int getItemCount() {
      return participants.size();
  }


  static class PeerViewHolder extends RecyclerView.ViewHolder {
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

3. Add this adapter to the `MeetingActivity.java`

```js title="MeetingActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {

  //Meeting Setup...
  //...

  final RecyclerView rvParticipants = findViewById(R.id.rvParticipants);
  rvParticipants.setLayoutManager(new GridLayoutManager(this, 2));
  rvParticipants.setAdapter(new ParticipantAdapter(meeting));
}
```

### Run and Test

The app is all set to test. Make sure to update teh `sampleToken` in `MainActivity.java`

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/android/guide/video-and-audio-calling-api-sdk/server-setup).
:::