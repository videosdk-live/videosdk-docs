---
id: setup
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

### Android: minSdkVersion >= 21

## Installation

1. If your Android Studio Version is older than Android Studio Bumblebees, add the repository to project's `build.gradle` file. <br/>
   If your are using Android Studio Bumblebees or newer Version, add the repository to `settings.gradle` file.

:::note

You can use imports with Maven Central after rtc-android-sdk version `0.1.12`.

Whether on Maven or Jitpack, the same version numbers always refer to the same SDK.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Maven Central"
groupId={"android-repositories"}
values={[{label: 'Maven Central', value: 'Maven Central'},{label: 'Jitpack', value: 'Jitpack'},]}>

<TabItem value="Maven Central">

```js title="build.gradle"
allprojects {
  repositories {
    // ...
    google()
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

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

```js title="build.gradle"
allprojects {
  repositories {
    // ...
    google()
    maven { url 'https://jitpack.io' }
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

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


### Step 2: Add the following dependency in your app's `app/build.gradle`.

```js title="app/build.gradle"
dependencies {
  implementation 'live.videosdk:rtc-android-sdk:0.1.12'

  // library to perform Network call to generate a meeting id
  implementation 'com.amitshekhar.android:android-networking:1.0.2'

  // other app dependencies
  }
```

:::important

Android SDK compatible with armeabi-v7a, arm64-v8a, x86_64 architectures. If you want to run the application in an emulator, choose ABI x86_64 when creating a device.

:::

## Integration

### Step 1: Add the following permissions in `AndroidManifest.xml`.

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.CAMERA" />

<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

```

### Step 2: Create `MainApplication` class which will extend the `android.app.Application`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="MainApplication.kt"
package live.videosdk.demo;

import live.videosdk.android.VideoSDK

class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        VideoSDK.initialize(applicationContext)
    }
}
```

</TabItem>

<TabItem value="Java">

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

</TabItem>

</Tabs>

### Step 3: Add `MainApplication` to `AndroidManifest.xml`.

```js title="AndroidManifest.xml"
<application
        android:name=".MainApplication"
				...
>
  <!-- ... -->
</application>
```

### Step 4: In your `JoinActivity` add the following code in `onCreate()` method.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="JoinActivity.kt"
override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_join)

  val meetingId = "<meeting-id>"
  val participantName = "John Doe"

  var micEnabled = true
  var webcamEnabled = true

  // generate the jwt token from your api server and add it here
  VideoSDK.config("JWT TOKEN GENERATED FROM SERVER")

  // create a new meeting instance
  meeting = VideoSDK.initMeeting(
      this@MeetingActivity, meetingId, participantName,
      micEnabled, webcamEnabled,null,null)
      
  // get permissions and join the meeting with meeting.join();
  // checkPermissionAndJoinMeeting();
}
```
</TabItem>

<TabItem value="Java">

```js title="JoinActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_join);

  final String meetingId = "<meeting-id>";
  final String participantName = "John Doe";

  final boolean micEnabled = true;
  final boolean webcamEnabled = true;

  // generate the jwt token from your api server and add it here
  VideoSDK.config("JWT TOKEN GENERATED FROM SERVER");

  // create a new meeting instance
  Meeting meeting = VideoSDK.initMeeting(
          MainActivity.this, meetingId, participantName,
          micEnabled, webcamEnabled,null,null
  );

  // get permissions and join the meeting with meeting.join();
  // checkPermissionAndJoinMeeting();
}
```
</TabItem>

</Tabs>

 All set! Here is the link to the complete sample code on [Github](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example). Please refer to the [documentation](initMeeting) for a full list of available methods, events and features of the SDK.
