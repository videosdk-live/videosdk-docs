---
title: Start a Video & Audio Call in React Native - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in React Native Android SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Expo Setup"
pagination_label: "Expo Setup"
keywords:
  - react native android sdk
  - react native js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

# Using VideoSDK with Expo

## Introduction

This documentation provides a step-by-step guide on integrating VideoSDK with Expo, a popular framework for building cross-platform mobile applications using React Native. Follow these instructions to seamlessly incorporate VideoSDK into your Expo project.

## Prerequisites

Before you begin, make sure you have Node.js and npm installed on your machine. If you don't have Expo installed globally, run the following command:

```bash
npm install -g expo-cli
```

## Setting up Expo Project

### Create a New Expo Project

Start a new Expo project by running the following commands:

```bash
expo init YourProjectName
cd YourProjectName
```

### Adding Android and iOS Folders

Execute the following command to add Android and iOS folders:

```bash
npx expo prebuild
```

Once these are finished, you should see the android and ios directories in your project. You can then complete the iOS and Android setup requried for the VideoSDK.

**Android Setup** : [Integrate in Android](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/react-native-android-sdk)

**iOS Setup** : [Integrate in iOS](https://docs.videosdk.live/react-native/guide/video-and-audio-calling-api-sdk/react-native-ios-sdk)
