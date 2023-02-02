---
title: Start a Video & Audio Call in React Native iOS SDK- Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React Native iOS SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "React Native iOS"
pagination_label: "React Native iOS"
keywords:
  - react native ios sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: react-native-ios-sdk
---

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of SDK for this page.

- [React Native iOS](/react-native/guide/video-and-audio-calling-api-sdk/react-native-ios-sdk)

:::

# Getting Started - React Native iOS SDK

React JS SDK wraps up out JavaScript SDK into usable hooks API. It simplifies the code for React Native SDK.

## Install a React Native SDK in iOS

### Step 1: Install SDK from Npm or Yarn

The easiest way to get started is by installing the sdk in your app.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'Npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'}
]}>
<TabItem value="npm">

```js
npm install "@videosdk.live/react-native-sdk"
```

</TabItem>
<TabItem value="yarn">

```js
yarn add "@videosdk.live/react-native-sdk"
```

</TabItem>

</Tabs>

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

- Select `Your_Xcode_Project/TARGETS/BuildSettings`, in Header Search Paths, add `"$(SRCROOT)/../node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager"`

### Step 5: Include in the Podfile in your react-native ios directory

```js title="Podfile"
  pod 'react-native-webrtc', :path => '../node_modules/@videosdk.live/react-native-webrtc'
```

### Step 6: Change platform field of podfile to 12.0 or above it

You have change platform field of podfile to 12.0 or above it, as react-native-webrtc doesn’t support iOS < 12 platform :ios, ‘12.0’

### Step 7: Install pods

```js
$ Pod install
```

### Step 8: Declare permissions in Info.plist

```js title="ios/projectname/info.plist"
<key>NSCameraUsageDescription</key>
<string>Camera permission description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone permission description</string>
```

### Step 9: Register services at index page of project

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

## Use hooks API

Our React JS SDK provides two important hooks API:

- **useMeeting** : Responsible to handle meeting environment.
- **useParticipant** : Responsible to handle Participant

Also, React Provider and Consumer to listen changes in meeting environment.

- **MeetingProvider** : Meeting Provider is [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) that allows consuming components to subscribe to meeting changes
- **MeetingConsumer** : Meeting Consumer is [Context.Consumer](https://reactjs.org/docs/context.html#contextconsumer) that subscribes to meeting changes.

:::note

Check out official example of React Native SDK implementation: [videosdk-rtc-react-native-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example)

:::
