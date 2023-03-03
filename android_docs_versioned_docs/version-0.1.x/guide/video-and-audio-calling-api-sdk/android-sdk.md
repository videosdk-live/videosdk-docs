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

### Step 2: Add the dependency in `app/build.gradle`:

```js title="app/build.gradle"
dependencies {
		implementation 'live.videosdk:rtc-android-sdk:0.1.14'

		// other app dependencies
}
```

:::important

Android SDK compatible with armeabi-v7a, arm64-v8a, x86_64 architectures. If you want to run the application in an emulator, choose ABI x86_64 when creating a device.

:::

### Step 3: Add all the following permissions to AndroidManifest.xml

```js title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.CAMERA" />

<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
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
