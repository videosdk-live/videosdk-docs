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

This documentation offers a comprehensive, step-by-step guide on seamlessly integrating VideoSDK with Expo. Expo is a popular framework for developing cross-platform mobile applications using React Native. Follow these instructions to incorporate VideoSDK into your Expo project effortlessly.

## Prerequisites

Before you start, ensure that you have Node.js and npm installed on your machine. If Expo is not installed globally, execute the following command:

```bash
npm install -g expo-cli
```

## Setting up Expo Project

### Create a New Expo Project

To Create a new Expo, execute the following commands::

```bash
expo init YourProjectName
cd YourProjectName
```

### Adding Android and iOS Folders

Run the following command to add Android and iOS folders:

```bash
npx expo prebuild
```
Once these steps are completed, you will find the `android` and `ios` directories in your project. You can proceed to complete the required iOS and Android setup for the VideoSDK.

**Android Setup** : [Integrate in Android](./react-native-android-sdk)

**iOS Setup** : [Integrate in iOS](./react-native-ios-sdk)

**Code Example** : [Expo App Example](https://github.com/videosdk-live/quickstart/tree/main/expo-react-native-rtc)
