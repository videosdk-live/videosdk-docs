---
title: Run a sample iOS Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with iOS SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Run the Sample Project"
pagination_label: "Run the Sample Project"
keywords:
  - objective-c sdk
  - swift sdk
  - iOS sdk
  - sample project
  - iOS app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-ios-project
---

# Run a Sample Project
Video SDK provides open-source sample project [videosdk-rtc-ios-sdk-example)](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example) on Github. This document introduces how to run this project.

## Prerequisites
- Xcode 9.0 or later
- An iOS device running iOS 9.0 or later.
- Valid Video SDK [Account](https://app.videosdk.live/)
- Valid developer signature and device permission settings.

import APISecret from '../../../../mdx/introduction/_api-key.mdx';

<APISecret title="Get your API key and Secret key" />

## Run the Sample Project
### Step 1: Clone the sample project
Clone the repository to your local environment.
```js
$ git clone https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example.git
```

### Step 2: Install the dependecies
Install all the pod dependencies
```js
pod install
```

### Step 2: Modify Constants.swift
Open your favorite code editor and add `AUTH_TOKEN` in it.
```js title="Constants.swift"
public let AUTH_TOKEN = "TEMPORARY-TOKEN"
```

### Step 3: Run the sample app
Run the iOS app with **⌘ + R.** or the ** ▶ Run ** from toolbar. 
