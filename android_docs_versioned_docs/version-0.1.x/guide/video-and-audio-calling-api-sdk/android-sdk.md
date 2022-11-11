---
title: Start a Video & Audio Call in Android SDK - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in Android SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Client Setup for Android"
pagination_label: "Client Setup for Android"
keywords:
  - android sdk
  - java sdk
  - kotlin sdk
  - chromebook sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: android-sdk
---

# Getting Started - Android SDK

Android SDK is natively written SDK using Java. It is compatible with both Java and Kotlin.

## Install an Android SDK

The easiest way to get started is by installing the sdk in your app.

### Step 1: Add the repositories into your project.

- If your Android Studio Version is older than Android Studio Bumblebees, add the repository to project's `build.gradle` file.
- If your are using Android Studio Bumblebees or newer Version, add the repository to `settings.gradle` file.

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
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
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
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

</TabItem>

</Tabs>


### Step 2: Add the dependency in `app/build.gradle`:

```js title="app/build.gradle"
dependencies {
		implementation 'live.videosdk:rtc-android-sdk:0.1.8'

		// other app dependencies
}
```

:::important

Android SDK supports API Level 21 or higher.  (minSDKVersion >= 21)

:::

### Step 3: Add all the following permissions to AndroidManifest.xml

```js title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.CAMERA" />

<!-- Needed to communicate with already-paired Bluetooth devices. (Legacy up to Android 11) -->
<uses-permission
    android:name="android.permission.BLUETOOTH"
    android:maxSdkVersion="30" />
<uses-permission
    android:name="android.permission.BLUETOOTH_ADMIN"
    android:maxSdkVersion="30" />

<!-- Needed to communicate with already-paired Bluetooth devices. (Android 12 upwards)-->
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

```

### Step 4: Create MainApplication class with the following code

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="MainApplication.kt"
package live.videosdk.demo;

import live.videosdk.rtc.android.VideoSDK;

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

import live.videosdk.rtc.android.VideoSDK;

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

### Step 5: Add MainApplication to AndroidManifest.xml

```js title="AndroidManifest.xml"
<application
    android:name=".MainApplication"
>
  <!-- ... -->
</application>
```

:::note

Check out official example of Android SDK implementation for Java and Kotlin as mentioned below: 

- For **Java** Code Sample [Click here](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example)<br />
- For **Kotlin** Code Sample [Click here](https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example)

:::
