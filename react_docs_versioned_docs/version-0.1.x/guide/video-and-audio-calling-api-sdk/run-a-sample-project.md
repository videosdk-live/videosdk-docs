---
title: Run a sample React Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with React JS SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Run the Sample Project"
pagination_label: "Run the Sample Project"
keywords:
  - react sdk
  - react js sdk
  - sample project
  - react app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-react-project
---

# Run a Sample Project

Video SDK provides open-source sample project [videosdk-rtc-react-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example) on Github. This document introduces how to run this project.

## Prerequisites

- React Js 16 or later
- Node 10 or later
- Valid Video SDK [Account](https://app.videosdk.live/)

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

```js
cp.env.example.env;
```

### Step 3: Modify .env file

Paste earlier generated temporary token here.

```js title=".env"
REACT_APP_VIDEOSDK_TOKEN = "TEMPORARY-TOKEN";
```

### Step 4: Install the dependecies

Install dependecies all the project dependencies.

```js
npm install
```

### Step 5: Run the Sample App

Bingo, it's time to push the launch button.

```js
npm run start
```
