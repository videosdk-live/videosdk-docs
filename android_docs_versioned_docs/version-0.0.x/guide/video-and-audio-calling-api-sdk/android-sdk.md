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

### Step 1: Add the repo to project's `build.gradle` file.

```js title="build.gradle"
allprojects {
  repositories {
    // ...
    maven { url 'https://jitpack.io' }
  }
}
```

### Step 2: Add the dependency in `app/build.gradle`:

```js title="app/build.gradle"
dependencies {
		implementation 'live.videosdk:android-sdk:0.0.7'

		// other app dependencies
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

:::note

Check out official example of Android SDK implementation: [videosdk-rtc-android-java-sdk-example](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example)

:::
