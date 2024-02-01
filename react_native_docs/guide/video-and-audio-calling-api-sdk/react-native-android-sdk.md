---
title: Start a Video & Audio Call in React Native Android SDK - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React Native Android SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Integrate in Android"
pagination_label: "Integrate in Android"
keywords:
  - react native android sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: react-native-android-sdk
---

# Integrating React Native SDK for Android

React Native SDK wraps up out React SDK. It also simplifies dependencies management.

### Step 1: Install SDK from Npm or Yarn

The easiest way to get started is by installing the sdk in your app.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install "@videosdk.live/react-native-sdk" "@videosdk.live/react-native-incallmanager"
```

</TabItem>
<TabItem value="yarn">

```js
yarn add "@videosdk.live/react-native-sdk" "@videosdk.live/react-native-incallmanager"
```

</TabItem>
</Tabs>


:::caution

- If you are using Windows machine, make sure to include the **double-quotes** while installation.

- If you are facing `Error: unable to get local issuer certificate`, below is the solution for the same

```
# for CMD
set NODE_TLS_REJECT_UNAUTHORIZED=0

# for PowerShell
$env:NODE_TLS_REJECT_UNAUTHORIZED="0"
```

:::

### Step 2: Add below lines in android/app/build.gradle

```js title="android/app/build.gradle"
dependencies {
    implementation project(':rnfgservice')
    implementation project(':rnwebrtc')
}
```

### Step 3: Add below lines in android/settings.gradle

```js title="android/settings.gradle"
include ':rnwebrtc'
project(':rnwebrtc').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-webrtc/android')

include ':rnfgservice'
project(':rnfgservice').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-foreground-service/android')
```

### Step 4: Add below lines in MainApplication.java

```js title="MainApplication.java"
//highlight-start
import live.videosdk.rnfgservice.ForegroundServicePackage;
import live.videosdk.rnwebrtc.WebRTCModulePackage;
 // highlight-end

public class MainApplication extends Application implements ReactApplication {
  private static List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
//highlight-start

    packages.add(new ForegroundServicePackage());
    packages.add(new WebRTCModulePackage());
 // highlight-end

    return packages;
  }
}
```

### Step 5: Add this line to `android/gradle.properties`:

```java title="android/gradle.properties"
/* This one fixes a weird WebRTC runtime problem on some devices. */
android.enableDexingArtifactTransform.desugaring=false
```

### Step 6 (OPTIONAL): Add below line in the android/app/proguard-rules.pro (optional: if you are using Proguard):

```js title="android/app/proguard-rules.pro"
-keep class org.webrtc.** { *; }
```

### Step 7: Update colors.xml for internal dependencies

```js title="android/app/src/main/res/values/colors.xml"
<resources>
  <item name="red" type="color">
    #FC0303
  </item>
  <integer-array name="androidcolors">
    <item>@color/red</item>
  </integer-array>
</resources>
```

### Step 8: update AndroidManifest.xml file for the permissions

```js title="AndroidManifest.xml"
<manifest
  xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.cool.app"
>
    <!-- Give all the required permissions to app -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <!-- Needed to communicate with already-paired Bluetooth devices. (Legacy up to Android 11) -->
    <uses-permission
        android:name="android.permission.BLUETOOTH"
        android:maxSdkVersion="30" />
    <uses-permission
        android:name="android.permission.BLUETOOTH_ADMIN"
        android:maxSdkVersion="30" />

    <!-- Needed to communicate with already-paired Bluetooth devices. (Android 12 upwards)-->
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK" />
​
​
  <application>
 // highlight-start
   <meta-data
      android:name="live.videosdk.rnfgservice.notification_channel_name"
      android:value="Meeting Notification"
     />
    <meta-data
    android:name="live.videosdk.rnfgservice.notification_channel_description"
    android:value="Whenever meeting started notification will appear."
    />
    <meta-data
    android:name="live.videosdk.rnfgservice.notification_color"
    android:resource="@color/red"
    />
    <service android:name="live.videosdk.rnfgservice.ForegroundService" android:foregroundServiceType="mediaProjection"></service>
    <service android:name="live.videosdk.rnfgservice.ForegroundServiceTask"></service>
 // highlight-end
  </application>
</manifest>
```

### Step 9: Register services at index page of project

<Tabs
defaultValue="react-native-cli"
groupId={"platform-manager"}
values={[
{label: 'React Native CLI', value: 'react-native-cli'},
{label: 'Expo', value: 'expo'}
]}>
<TabItem value="react-native-cli">

```js
import { register } from '@videosdk.live/react-native-sdk';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App.js';
​
// Register the service
register();

AppRegistry.registerComponent(appName, () => App);
```

</TabItem>
<TabItem value="expo">

```js
import { register } from '@videosdk.live/react-native-sdk';
import App from './App';
import { registerRootComponent } from 'expo';

// Register the service
register();

registerRootComponent(App);
```

</TabItem>

</Tabs>

### Minimum OS/SDK versions

In the `build.gradle` file, update the minimum OS/SDK version to `23`.

```java title=build.gradle
buildscript {
  ext {
      minSdkVersion = 23
  }
}
```
