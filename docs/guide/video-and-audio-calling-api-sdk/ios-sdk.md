---
title: Start a Video & Audio Call in IOS SDK - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in IOS SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "IOS"
pagination_label: "IOS"
keywords:
  - ios sdk
  - objective-c sdk
  - swift sdk
  - mac sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: ios-sdk
---

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of SDK for this page.

- [iOS](/ios/guide/video-and-audio-calling-api-sdk/ios-sdk)

:::

# Getting Started - IOS SDK

IOS SDK is natively written SDK using Swift. It is compatible with both Objective-C and Swift.

## Install an IOS SDK

The easiest way to get started is by installing the sdk in your app.

### Step 1: Install VideoSDK using CocoaPods

```js
pod 'VideoSDKRTC'
```

OR

```js
pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'
```

### Step 2: Add permission to use microphone and camera. Insert following lines on code in info.plist

```js title="info.plist"
<key>NSCameraUsageDescription</key>
<string>Allow camera access to start video.</string>

<key>NSMicrophoneUsageDescription</key>
<string>Allow microphone access to start audio.</string>
```

### Step 3: Start using VideoSDK

```js title="Import SDK"
import VideoSDKRTC
```

:::note

Check out official example of IOS SDK implementation: [videosdk-rtc-ios-sdk-example](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example)

:::
