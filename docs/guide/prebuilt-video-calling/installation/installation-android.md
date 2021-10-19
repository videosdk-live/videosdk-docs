---
title: Install Audio and Video Calling SDK in Android
hide_title: false
hide_table_of_contents: false
description: This guide explains installation of Android in your application. it is compatible with both java and kotlin.
sidebar_label: "Android"
pagination_label: "Android"
keywords:
  - android sdk
  - java sdk
  - kotlin sdk
  - chromebook sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: installation-android
---

# Installation: Android SDK

Android SDK is natively written SDK using Java. It is compatible with both Java and Kotlin.

## Install an Android SDK

The easiest way to get started is by installing the sdk in your app.

### Step 1: Download the aar file and copy to apps/lib

Download Link: [videosdk-rtc-android-sdk-1.0.0.aar](https://sdk.videosdk.live/videosdk-rtc-android-sdk-1.0.0.aar)

### Step 2: Add dependencies in your build.gradle

```js title="build.gradle"
dependencies {
    implementation fileTree(include: ['*.jar', '*.aar'], dir: 'libs')
    implementation 'com.squareup.okhttp3:okhttp:4.3.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:4.3.0'

    implementation 'io.reactivex.rxjava2:rxandroid:2.1.1'
    implementation 'io.reactivex.rxjava2:rxjava:2.2.6'
}
```

### Step 3: Add all the following permissions to AndroidManifest.xml

```js title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.BLUETOOTH" />
```

### Step 4: Extend the android.app.Application class and create MainApplication.java class with the following code

```js title="MainApplication.java"
package live.videosdk.demo;

import android.app.Application;

import live.videosdk.android.VideoSDK;

public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        VideoSDK.initialize(getApplicationContext());
    }
}
```

### Step 5: Add MainApplication to AndroidManifest.xml

```js title="AndroidManifest.xml"
<application
    android:name=".MainApplication"
>
  <!-- ... -->
</application>
```

### Step 6: Start using it

```js title="MainActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_main);

  final String meetingId = "<meeting-id>";
  final String participantName = "John Doe";

  final boolean micEnabled = true;
  final boolean webcamEnabled = true;

  // generate the jwt token from your api server and add it here
  VideoSDK.config("JWT TOKEN GENERATED FROM SERVER");

  // create a new meeting instance
  Meeting meeting = VideoSDK.initMeeting(
          MainActivity.this, meetingId, participantName,
          micEnabled, webcamEnabled
  );

  // get permissions and join the meeting with meeting.join();
  // checkPermissionAndJoinMeeting();
}
```

:::note

Check out official example of Android SDK implementation: [videosdk-rtc-android-java-sdk-example](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example)

:::
