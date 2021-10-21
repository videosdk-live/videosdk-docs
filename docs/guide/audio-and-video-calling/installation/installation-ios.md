---
title: Start a Video & Audio Call in iOS SDK - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in iOS SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "iOS"
pagination_label: "iOS"
keywords:
  - ios sdk
  - objective-c sdk
  - swift sdk
  - mac sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: installation-ios
---

# Getting Started - iOS SDK

iOS SDK is natively written SDK using Swift. It is compatible with both Objective-C and Swift.

## Install an iOS SDK

The easiest way to get started is by installing the sdk in your app.

### Step 1: Install VideoSDK using CocoaPods

```js
pod 'VideoSDK'
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

```js title="Example"
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

:::note

Check out official example of iOS SDK implementation: [videosdk-rtc-ios-sdk-example](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example)

:::
