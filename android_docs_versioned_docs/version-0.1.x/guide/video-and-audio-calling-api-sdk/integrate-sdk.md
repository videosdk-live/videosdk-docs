---
title: Integrating Android SDK - Video SDK
hide_title: false
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with Android SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Integrate Android SDK"
pagination_label: "Integrate Android SDK"
keywords:
  - android sdk
  - video call
  - audio call
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: integrate-sdk
---

Android SDK is a Java-based native SDK. It is compatible with both Java and Kotlin. It makes it extremely simple to integrate video and audio calls into your app.

### Installing Android SDK

#### Step 1: Add the repositories into your project

You can install our Android SDK by using Maven Central or [Jitpack](https://central.sonatype.com/artifact/live.videosdk/rtc-android-sdk/0.1.14) package repositories.

Add the repository to `settings.gradle` file in your project.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Maven Central"
groupId={"android-repositories"}
values={[{label: 'Maven Central', value: 'Maven Central'},{label: 'Jitpack', value: 'Jitpack'},]}>

<TabItem value="Maven Central">

```js title="settings.gradle"
dependencyResolutionManagement{
  repositories {
    // ...
    google()
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

</TabItem>

<TabItem value="Jitpack">

```js title="settings.gradle"
dependencyResolutionManagement{
  repositories {
    // ...
    google()
    maven { url 'https://jitpack.io' }
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

</TabItem>

</Tabs>

:::note
You can use imports with Maven Central after rtc-android-sdk version `0.1.12`.

Whether on Maven or Jitpack, the same version numbers always refer to the same SDK.
:::

#### Step 2: Add the dependency in `app/build.gradle`

```js title="app/build.gradle"
dependencies {
		implementation 'live.videosdk:rtc-android-sdk:0.1.21'
		// other app dependencies
}
```


:::important

- Android SDK compatible with armeabi-v7a, arm64-v8a, x86_64 architectures. If you want to run the application in an emulator, choose ABI x86_64 when creating a device.

:::
