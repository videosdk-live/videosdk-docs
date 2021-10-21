---
title: Install Video & Audio Calling SDK in Flutter
hide_title: false
hide_table_of_contents: false
description: This guide explains installation of flutter in your application. it is compatible with both dart and javascript.
sidebar_label: "Flutter"
pagination_label: "Flutter"
keywords:
  - flutter sdk
  - dart sdk
  - javascript sdk
  - sky sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: installation-flutter
---

# Installation: Flutter SDK
Flutter SDK is natively written SDK using Dart. It is compatible with both iOs and Android. 

## Install an Flutter SDK

The easiest way to get started is by installing the sdk in your app.

### Step 1: Install flutter sdk using pub

```js
flutter pub add videosdk
```
This will add a line like this to your package's pubspec.yaml (and run an implicit flutter pub get)

### Step 2: Import the video sdk and start using it

```js
import 'package:videosdk/meeting.dart';
import 'package:videosdk/meeting_builder.dart';
import 'package:videosdk/participant.dart';
import 'package:videosdk/rtc.dart';
import 'package:videosdk/stream.dart';

MeetingBuilder(
  meetingId: "<meeting-id>",
  displayName: "John Doe",
  token: "<token>",
  micEnabled: true,
  webcamEnabled: true,
  builder: (Meeting meeting) {
    return Text("Meeting screen");
  },
)
```

:::note

Check out official example of Flutter SDK implementation: [videosdk-rtc-flutter-sdk-example](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example)

:::
