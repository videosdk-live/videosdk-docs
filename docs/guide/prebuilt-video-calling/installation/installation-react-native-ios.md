---
title: Install Video & Audio Calling SDK in React Native iOS
hide_title: false
hide_table_of_contents: false
description: This guide explains installation of React SDK in your application. it uses react hooks to simplify installation steps.
sidebar_label: "React Native iOS"
pagination_label: "React Native iOS"
keywords:
  - react native ios sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: installation-react-native-ios
---

# Installation: React Native iOS
React JS SDK wraps up out JavaScript SDK into usable hooks API. It simplifies the code for React Native SDK.

## Install a React Native SDK in iOS

### Step 1: Install SDK from Npm or Yarn

The easiest way to get started is by installing the sdk in your app.

#### Npm
```js
$ npm install "@videosdk.live/react-native-sdk"
```
#### Yarn
```js
$ yarn add "@videosdk.live/react-native-sdk"
```

### Step 2: Install @videosdk.live/react-native-incallmanager to manage media-routes/sensors/events during a audio/video chat on React Native

```js title="Install @videosdk.live/react-native-incallmanager"
$ yarn add "@videosdk.live/react-native-incallmanager"
```

### Step 3: Install all the dependecies via CocoaPods
IMPORTANT: Make sure you are using CocoaPods 1.10 or higher.

```js
$[sudo] gem install cocoapods
```

### Step 4: Manual linking (if react-native-incall-manager is not linked automatically)

- 1. Drag node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager.xcodeproj under <your_xcode_project>/Libraries

- 2. Select <your_xcode_project> --> Build Phases --> Link Binary With Libraries
    - Drag Libraries/RNInCallManager.xcodeproj/Products/libRNInCallManager.a to Link Binary With Libraries

- 3. Select <your_xcode_project> --> Build Settings In Header Search Paths, add $(SRCROOT)/../node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager

### Step 5: Change the dependecy of react-native-webrtc
```js title="Podfile"
pod ‘react-native-webrtc’, :path => ‘../node_modules/@videosdk.live/react-native-webrtc’
```

### Step 6: Change platform field of podfile to 11.0 or above it
You have change platform field of podfile to 11.0 or above it, as react-native-webrtc doesn’t support iOS < 11 platform :ios, ‘11.0’

### Step 7: Install pods
```js 
$ Pod install
```
### Step 8: Link webRtc binary 
Add “libreact-native-webrtc.a” in Link Binary with libraries. In target of main project folder.

### Step 9: Declare permissions in Info.plist 
```js title="iOS/projectname/info.plist"
<key>NSCameraUsageDescription</key>
<string>Camera permission description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone permission description</string>
```

### Step 10: Register services at index page of project
```js title="App.js"
// Import the library
import { register } from '@videosdk.live/react-native-sdk';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App.js';
​
// Register the service
register();
AppRegistry.registerComponent(appName, () => App);
```

### Step 11: Start using it
```js title="MeetingGrid.js"
import {
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-native-sdk";

const { join, leave } = useMeeting();
```

:::note

Check out official example of React Native SDK implementation: [videosdk-rtc-react-native-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example)

:::