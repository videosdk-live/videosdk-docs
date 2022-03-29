---
title: Installation Steps for RTC Flutter SDK
hide_title: false
hide_table_of_contents: false
description: RTC Flutter SDK provides client for almost all Android and IOS devices. it takes less amount of cpu and memory.
sidebar_label: Setup
pagination_label: Setup
keywords:
  - RTC FLUTTER
  - FLUTTER SDK
  - DART SDK
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: setup
---

# Setup

Flutter SDK is client for real-time communication for android and ios devices. It inherits the same terminology as all other SDKs does.

## Minimum OS/SDK versions

Android: minSdkVersion >= 23

<!-- ### IOS: > 11 -->

## Use this package as a library

### Step 1: Add this package in your flutter project

Run this command:

```js
flutter pub add videosdk
```

This will add a line like this to your package's pubspec.yaml (and run an implicit flutter pub get):

```js
dependencies:
  videosdk: ^0.0.11
```

Alternatively, your editor might support or flutter pub get. Check the docs for your editor to learn more.

### Step 2: Import it

Now in your Dart code, you can use:

```js
import "package:videosdk/rtc.dart";
```
