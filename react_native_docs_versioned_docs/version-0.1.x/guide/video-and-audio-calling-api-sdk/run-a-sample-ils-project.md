---
title: Run a sample ILS React Native Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with React Native JS SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: Run the Sample ILS Project
pagination_label: Run the Sample ILS Project
keywords:
  - react native sdk
  - react native js sdk
  - sample project
  - react native app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-react-native-ils-project
---

# Run a Sample ILS Project - React Native

Video SDK provides an open-source sample project [videosdk-hls-react-native-sdk-example](https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example) on Github. This document introduces how to run the project.

## Prerequisites

- React Native version 0.59.10 or later
- Node version 10 or later
- Valid Video SDK [Account](https://app.videosdk.live/)
- For Android
  - Java Development Kit (JDK) version 8 or later
  - Android Studio (latest version recommended)
  - A physical or virtual mobile device running Android version 5.0 or later
- For iOS
  - Xcode version 9.4 or later
  - CocoaPods
  - A physical or virtual mobile device running iOS version 9.0 or later

import APISecret from '../../../../mdx/introduction/\_api-key.mdx';

<APISecret title="Get your API key and Secret key" />

## Run the Sample Project

### Step 1: Clone the sample project

Clone the repository to your local environment.

```js
git clone https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example.git
```

### Step 2: Modify `src/api/api.js` file

Modify the file by pasting the previously generated temporary token here.

```js
export const getToken = async () => {
  return "VIDEOSDK_DASHBOARD_TOKEN"; // Update Token here
};
```

### Step 3: Install the dependencies

Install all the project dependencies.

```
npm install
```

### Step 4: Run the sample app

Bingo, it's time to push the launch button!

```
npm run start
npm android
npm ios
```
