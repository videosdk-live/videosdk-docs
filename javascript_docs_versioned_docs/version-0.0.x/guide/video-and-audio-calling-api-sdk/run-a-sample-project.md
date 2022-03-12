---
title: Run a sample Java Script Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with Java Script SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Run the Sample Project"
pagination_label: "Run the Sample Project"
keywords:
  - javascript sdk
  - js sdk
  - sample project
  - js app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-javascript-project
---

# Run a Sample Project
Video SDK provides open-source sample project [videosdk-rtc-javascript-sdk-example](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example) on Github. This document introduces how to run this project.

## Prerequisites
- Live Server (Any other server will work)
- Valid Video SDK [Account](https://app.videosdk.live/)

import APISecret from '../../../../mdx/introduction/_api-key.mdx';

<APISecret title="Get your API key and Secret key" />

## Run the Sample Project
### Step 1: Clone the sample project
Clone the repository to your local environment.
```js
git clone https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example.git
```

### Step 2: Copy the config.example.js file to config.js file.
Open your favorite code editor and copy `config.example.js` to `config.js` file.
```js 
cp config.example.js config.js
```

### Step 3: Modify config.js file
Paste earlier generated temporary token here.
```js title="config.js"
TOKEN = "TEMPORARY-TOKEN"
```

### Step 4: Run the sample app
You can install and use [live-server](https://www.npmjs.com/package/live-server) or just use any server to host the project. Bingo, it's time to push the launch button. 
```js
live-server --port=8000
```