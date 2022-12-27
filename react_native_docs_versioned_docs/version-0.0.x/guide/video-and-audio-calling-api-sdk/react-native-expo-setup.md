---
title: Start a Video & Audio Call in React Native - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React Native Android SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "React Native Expo Setup"
pagination_label: "React Native Expo Setup"
keywords:
  - react native android sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

# Using VideoSDK with Expo

Inorder to use the VideoSDK with Expo, you first need to Expo Eject which will allow you to make the necessary changes to the native modules of the app.

## Expo Ejecting to React Native

### Install Expo CLI

If you don't have it, run `npm install -g expo-cli` to get our command line library.

```js
npm install -g expo-cli
```

If you haven't used Expo CLI with an Expo account before, the eject command will ask you to create one.

### Configuration options in app.json

Ejecting requires the same configuration options as building a standalone app. [Follow these instructions before continuing to the next step](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/#2-configure-appjson).

### Eject

From your project directory, run `expo eject`. This will download the required dependencies and build native projects under the `ios` and `android` directories.

```js
expo eject
```

Once these are finished, you should see the `android` and `ios` directories in your project. You can then complete the [iOS](./react-native-ios-sdk.md) and [Android setup](./react-native-android-sdk.md) requried for the VideoSDK.
