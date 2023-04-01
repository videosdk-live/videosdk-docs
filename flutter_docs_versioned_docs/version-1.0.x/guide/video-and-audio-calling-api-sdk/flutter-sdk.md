---
title: Integrate Flutter SDK - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in Flutter SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: Integrate Flutter SDK
pagination_label: Integrate Flutter SDK
keywords:
  - flutter sdk
  - dart sdk
  - javascript sdk
  - sky sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: flutter-sdk
---

# Getting Started - Flutter SDK

Flutter SDK is natively written SDK using Dart. It is compatible with both IOS and Android.

## Installing Flutter SDK

Flutter SDK is client for real-time communication for android and ios devices. It inherits the same terminology as all other SDKs does.

### Step 1: Add this package in your flutter project

VideoSDK flutter SDK canbe added using the following command:

```bash
flutter pub add videosdk
```

This will add a line like this to your package's pubspec.yaml (and run an implicit flutter pub get):

```
dependencies:
  videosdk: ^1.0.x
```

### Step 2: Android Setup

VideoSDK requires you to add following permissions to your app so that it can access the audio and video from the device.

Ensure the following permission is present in your Android Manifest file, located in `<project root>/android/app/src/main/AndroidManifest.xml`:

```xml
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.INTERNET"/>

```

If you need to use a Bluetooth device, please add:

```xml
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
```

Also you will need to set your build settings to Java 8, because official WebRTC jar now uses static methods in `EglBase` interface. Just add this to your app level `build.gradle`:

```js
android {
    //...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

###### Update the minimumSdkVersion for android

If necessary, in the same `build.gradle` you will need to increase `minSdkVersion` of `defaultConfig` up to `23` (currently default Flutter generator set it to `16`).

If necessary, in the same `build.gradle` you will need to increase `compileSdkVersion` and `targetSdkVersion` up to `31` (currently default Flutter generator set it to `30`).

### Step 3: iOS Setup

VideoSDK requires you to add following permissions to your app so that it can access the audio and video from the device.

Add the following entry to your `Info.plist` file, located at `<project root>/ios/Runner/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) Camera Usage!</string>
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) Microphone Usage!</string>
```

###### Update the minimum platform version

Update the minimum iOS platform version to `11.0`. You can update it in the `ios/Podfile`.

```js title="Podfile"
platform: ios, "11.0";
```

### Step 4: Import it

Now in your Dart code, you can use:

```js
import "package:videosdk/videosdk.dart";
```

:::note

Check out official example of Flutter SDK implementation: [videosdk-rtc-flutter-sdk-example](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example)

:::
