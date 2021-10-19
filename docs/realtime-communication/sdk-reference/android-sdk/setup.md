---
title: Installation steps for RTC Android SDK
hide_title: false
hide_table_of_contents: false
description: RTC Android SDK provides client for almost all Android devices. it takes less amount of cpu and memory.
sidebar_label: Setup
pagination_label: Setup
keywords:
  - RTC Android
  - Android SDK
  - Kotlin SDK
  - Java SDK
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: setup
---

# Setup

## Setting up android sdk

Android SDK is client for real-time communication for android devices. It inherits the same terminology as all other SDKs does.

## Minimum OS/SDK versions

It supports the following OS/SDK versions.

### Android: minSdkVersion >= 18

## Installation

### Step 1: Download the `aar` file and copy to `apps/libs` android directory.

- [https://sdk.videosdk.live/videosdk-rtc-android-sdk-1.0.0.aar](https://sdk.videosdk.live/videosdk-rtc-android-sdk-1.0.0.aar)

### Step 2: Add the following dependencies in your app's `build.gradle`:

```js title="build.gradle"
dependencies {
		implementation fileTree(include: ['*.jar', '*.aar'], dir: 'libs')
		implementation 'com.squareup.okhttp3:okhttp:4.3.0'
		implementation 'com.squareup.okhttp3:logging-interceptor:4.3.0'

		implementation 'io.reactivex.rxjava2:rxandroid:2.1.1'
		implementation 'io.reactivex.rxjava2:rxjava:2.2.6'

		// other app dependencies
}
```

## Integration

### Step 1: Add the following permissions in `AndroidManifest.xml`

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.BLUETOOTH" />
```

### Step 2: Extend the `android.app.Application` class and create `MainApplication.java` class with the following code:

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

### Step 3: Also add `MainApplication` to `AndroidManifest.xml`

```js title="AndroidManifest.xml"
<application
        android:name=".MainApplication"
				...
>
  <!-- ... -->
</application>
```

### Step 4: In your `MainActivity.java` add the following code in `onCreate()` method:

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

### Step 4: All set! Here is the link to the complete sample code on [Github](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example). Please refer to the [documentation](/docs/realtime-communication/sdk-reference/android-sdk/videosdk-class) for a full list of available methods, events and features of the SDK.
