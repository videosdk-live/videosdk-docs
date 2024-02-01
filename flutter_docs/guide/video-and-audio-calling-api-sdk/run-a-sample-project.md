---
title: Run a sample Flutter Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with Flutter SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Run the Sample Conference Project"
pagination_label: "Run the Sample Conference Project"
keywords:
  - flutter sdk
  - dart sdk
  - sample project
  - flutter app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-flutter-project
---

# Run a Sample Conference Project

Video SDK provides open-source sample project [videosdk-rtc-flutter-sdk-example](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example) on Github. This document introduces how to run this project.

### Prerequisites

- If your target platform is iOS, your development environment must meet the following requirements:
  - Flutter 2.0 or later
  - Dart 2.12.0 or later
  - macOS
  - Xcode (Latest version recommended)
- If your target platform is Android, your development environment must meet the following requirements:
  - Flutter 2.0 or later
  - Dart 2.12.0 or later
  - macOS or Windows
  - Android Studio (Latest version recommended)
- If your target platform is iOS, you need a real iOS device.
- If your target platform is Android, you need an Android simulator or a real Android device.
- Valid Video SDK [Account](https://app.videosdk.live/)

import APISecret from '../../../mdx/introduction/\_api-key.mdx';

<APISecret title="Get your API key and Secret key" />

### Step 1: Clone the sample project

Clone the repository to your local environment.

```js
$ git clone https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example.git
```

### Step 2: Copy the .env.example file to .env file.

Open your favorite code editor and copy `.env.example` to `.env` file.

```js
$ cp .env.example .env
```

### Step 3: Modify .env file

Paste earlier generated temporary token here.

```js title=".env"
AUTH_TOKEN = "TEMPORARY-TOKEN";
```

### Step 4: Install the dependencies

Install all the dependencies to run the project.

```js
flutter pub get
```

### Step 4: Run the sample app

Bingo, it's time to push the launch button.

```js
flutter run
```
