---
title: Run a sample React Native Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with React Native JS SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Run the Sample Conference Project"
pagination_label: "Run the Sample Conference Project"
keywords:
  - react native sdk
  - react native js sdk
  - sample project
  - react native app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-react-native-project
---

# Run a Sample Conference Project - React Native

Video SDK provides open-source sample project [videosdk-rtc-react-native-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example) on Github. This document introduces how to run this project.

## Prerequisites

- React Native 0.59.10 or later
- Node 10 or later
- Valid Video SDK [Account](https://app.videosdk.live/)
- For Android
  - Java Development Kit (JDK) 8 or later
  - Android Studio (latest version recommended)
  - A physical or virtual mobile device running Android 5.0 or later
- For iOS
  - Xcode 9.4 or later
  - CocoaPods
  - A physical or virtual mobile device running iOS 9.0 or later

import APISecret from '../../../../mdx/introduction/\_api-key.mdx';

<APISecret title="Get your API key and Secret key" />

## Run the Sample Project

### Step 1: Clone the sample project

Clone the repository to your local environment.

```js
git clone https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example.git
```

### Step 2: Copy the .env.example file to .env file.

Open your favorite code editor and copy `.env.example` to `.env` file.

```
cp env.example .env;
```

### Step 3: Modify .env file

Paste earlier generated temporary token here.

```js title=".env"
REACT_APP_VIDEOSDK_TOKEN = "TEMPORARY-TOKEN";
```

### Step 4: Install the dependencies

Install dependencies all the project dependencies.

```js
npm install
```

### Step 5: Run the sample app

Bingo, it's time to push the launch button.

```js
npm run start
npm android
npm ios
```
