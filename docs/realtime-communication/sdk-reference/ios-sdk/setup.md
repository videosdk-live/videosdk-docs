---
title: Installation Steps for RTC IOS SDK
hide_title: false
hide_table_of_contents: false
description: RTC Android SDK provides client for almost all IOS devices. it takes less amount of cpu and memory.
sidebar_label: Setup
pagination_label: Setup
keywords:
  - RTC IOS
  - IOS SDK
  - Swift SDK
  - ObjectiveC SDK
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: setup
---

# Setup

## Setting up IOS sdk

IOS SDK is client for real-time communication for ios devices. It inherits the same terminology as all other SDKs does.

## Minimum OS/SDK versions

It supports the following OS/SDK versions.

- IOS 13.0+

## Installation

It requires `Xcode 12.0+` and `Swift 5.0+` installed.

### Step 1: To integrate VideoSDK into your Xcode project using CocoaPods, specify it in your `Podfile`:

```js title="Install via CocoaPods"
pod 'VideoSDK'
```

OR

```js title="Install via Github"
pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'
```

:::caution

- Currently this only supports IOS device (arm64). Running on simulator is not supported.
- You will need to set `Enable Bitcode` to `false`.

:::

### Step 2: Your app needs to add permissions to use microphone and camera. Add below code your app's `info.plist`

```js title="info.plist"
<key>NSCameraUsageDescription</key>
<string>Allow camera access to start video.</string>

<key>NSMicrophoneUsageDescription</key>
<string>Allow microphone access to start audio.</string>
```

### Step 3: To integrate VideoSDK into your Xcode project using CocoaPods, specify it in your `Podfile`:

```js title="Start using it in your project"
import VideoSDK

// Configure token, fetch it via auth API
VideoSDK.config(token: <server token here>)

// Intialize meeting
let meeting = VideoSDK.initMeeting(
    meetingId: <meetingId>,
    participantName: <your name>,
    micEnabled: true,
    webcamEnabled: true)
```

:::info

Check ios SDK example for more information on [videosdk-rtc-ios-example](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example)

:::
