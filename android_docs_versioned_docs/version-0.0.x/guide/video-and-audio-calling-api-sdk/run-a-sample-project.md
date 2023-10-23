---
title: Run a sample Android Project - Video SDK Docs
hide_title: true
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with Android SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Run the Sample Project"
pagination_label: "Run the Sample Project"
keywords:
  - android sdk
  - java sdk
  - kotlin sdk
  - sample project
  - android app
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: run-a-sample-android-project
---

# Run a Sample Project - Android

Video SDK provides open-source sample project [videosdk-rtc-android-java-sdk-example](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example) on Github. This document introduces how to run this project.

## Prerequisites

- Development environment requirements:
  - [Java Development Kit](https://www.oracle.com/java/technologies/downloads/)
  - Android Studio 3.0 or later
- A physical or virtual mobile device running Android 5.0 or later
- Valid Video SDK [Account](https://app.videosdk.live/)

import APISecret from '../../../../mdx/introduction/\_api-key.mdx';

<APISecret title="Get your API key and Secret key" />

## Run the Sample Project

### Step 1: Clone the sample project

Clone the repository to your local environment.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
git clone https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example.git
```

</TabItem>

<TabItem value="Java">

```js
git clone https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example.git
```

</TabItem>

</Tabs>

### Step 2: Modify local.properties

Open your favorite code editor and add `auth_token` in it.

```js title="local.properties"
auth_token = "TEMPORARY-TOKEN";
```

### Step 3: Run the sample app

Run the android app with **Shift+F10** or the ** ▶ Run ** from toolbar.
