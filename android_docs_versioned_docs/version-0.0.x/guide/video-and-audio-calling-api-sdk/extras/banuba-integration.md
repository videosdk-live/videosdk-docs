---
title: Integrate Banuba SDK with Android SDK - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Describes how to integrate Banuba SDK with videosdk.live using Android SDK to enhance video calls with real-time face filters and virtual backgrounds.
sidebar_label: "Banuba Integration"
pagination_label: "Banuba Integration"
keywords:
  - android sdk
  - java sdk
  - kotlin sdk
  - banuba
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: banuba-integration
---

# How to intergrate Banuba SDK with Android Video SDK?

Use Banuba SDK with Android SDK to enhance video calls with real-time face filters and virtual backgrounds.

### Step 1: Banuba Token

- To start working with the Banuba SDK into your project, you need to have the client token. To receive the client token please fill form on [banuba.com](https://www.banuba.com/)

### Step 2: Add Banuba SDK dependencies

- With the client token, you will also receive the Banuba SDK archive for Android which contains Banuba Effect Player (compiled Android library project with .aar extension), Banuba SDK (compiled Android library project with .aar extension) and example filters located under effects folder.

- Create `libs` directory in your project and add `banuba_effect_player.aar`, `banuba_sdk.aar` files.

<div style={{textAlign: 'center'}}>

![Banuba SDK dependency .aar files](/img/android/banuba/banuba_dependency.png)

</div>

- Open build.gradle (Module: app) and add Banuba SDK dependencies.

```js title="app/build.gradle"
dependencies {
  // Banuba SDK dependencies
   implementation fileTree(dir: 'libs', include: ['*.aar'])

  // other app dependencies
  }
```

### Step 3: Add effects into your project

- Create `effects` folder under `assets` directory in your project and add filters that you want to use in the `effects` folder.You can download test effects here: [Effects](https://docs.banuba.com/face-ar-sdk-v1/overview/demo_face_filters)

<div style={{textAlign: 'center'}}>

![Banuba SDK effects folder](/img/android/banuba/banuba_effects.png)

</div>

### Step 4: Integrate Banuba

1. Create one interface named `IVideoFrameProcessor` and a class named `BanubaProcessor` in your project and copy paste code from the [example](https://github.com/videosdk-live/videosdk-rtc-android-sdk-banuba-example).

2. Update your Banuba client token into `BanubaProcessor.java` file.

```js title="BanubaProcessor.java"
public class BanubaProcessor implements IVideoFrameProcessor {
    //...
    public static final String KEY = "place_your_token_here";
    //...
}
```

3. Create instance of `CapturerObserver` class and pass into VideoSDK.createCameraVideoTrack() method. To know more about createCameraVideoTrack() method please visit [CustomVideoTrack](../features/custom-track/custom-video-track.md).

4. Copy paste method named `initVideoFrameProcessor(VideoSource videosource,CustomStreamTrack videoCustomTrack)` from the [example](https://github.com/videosdk-live/videosdk-rtc-android-sdk-banuba-example). into your Activity and call it after creating `CustomStreamTrack` for video.

### Step 5: Use filters in Meeting

- If you want to use video filters from start of the meeting, you can pass `CustomStreamTrack` in the `initMeeting`.

- Also you can use video filters during the meeting by passing the `CustomStreamTrack` in the `enableWebcam()` method of Meeting.

:::note

Stuck anywhere? Check out this [Code Sample of Banuba Intergation with Android-SDK](https://github.com/videosdk-live/videosdk-rtc-android-sdk-banuba-example.git) on GitHub

:::
