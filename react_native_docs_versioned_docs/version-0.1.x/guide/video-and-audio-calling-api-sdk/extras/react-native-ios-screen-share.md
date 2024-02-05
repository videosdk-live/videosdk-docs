---
title: Share your Screen Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Share your Screen features quick integrate in react native IOS with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: React Native iOS Screen Share
pagination_label: React Native iOS Screen Share
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: react-native-ios-screen-share
---

# Share screen - React Native iOS

## Contents

1. [Create Broadcast Upload Extension in iOS](/react-native/guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share#create-broadcast-upload-extension-in-ios)
2. [Create iOS Native Module for RPSystemBroadcastPickerView](/react-native/guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share#create-ios-native-module-for-rpsystembroadcastpickerview)

## Create Broadcast Upload Extension in iOS

### Step 1 : Open Target

Open your project with xcode, the select **File > New > Target** in menu bar.

![IOS Screen Share](/img/ios-screenshare/step1-xcode.png)

### Step 2 : Select Target

Select **Broadcast Upload Extension** and click next.

![IOS Screen Share](/img/ios-screenshare/step2-xcode.png)

### Step 3 : Configure Broadcast Upload Extension

Enter the extension's name in the **Product Name** field, choose the team from the dropdown, uncheck the "Include UI extension" field, and click "Finish."

![IOS Screen Share](/img/ios-screenshare/step3-xcode.png)

### Step 4 : Activate Extension scheme

You will be prompted with a popup : **Activate "Your-Extension-name" scheme?**, click on activate.

![IOS Screen Share](/img/ios-screenshare/step4-xcode.png)
 
Now, the "Broadcast" folder will appear in the Xcode left side bar.

![IOS Screen Share](/img/ios-screenshare/step5-xcode.png)

### Step 5 : Add External file in Created Extension

Open the [videosdk-rtc-react-native-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/tree/master/ios/BroadcastScreen) repository, and copy the following files: `SampleUploader.swift`, `SocketConnection.swift`, `DarwinNotificationCenter.swift`, and `Atomic.swift` to your extension's folder. Ensure that these files are added to the target.

### Step 6 : Update `SampleHandler.swift` file

Open [SampleHandler.swift](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/blob/master/ios/BroadcastScreen/SampleHandler.swift), and copy the content of the file. Paste this content into your extension's SampleHandler.swift file.

### Step 7 : Add Capability in App

In Xcode, navigate to **YourappName > Signing & Capabilities**, and click on **+Capability** to configure the app group.

![IOS Screen Share](/img/ios-screenshare/step8-xcode.png)

Choose **App Groups** from the list.

![IOS Screen Share](/img/ios-screenshare/step9-xcode.png)
 
After that, select or add the generated App Group ID that you have created before.

![IOS Screen Share](/img/ios-screenshare/step10-xcode.png)

### Step 8 : Add Capability in Extension

Go to **Your-Extension-Name > Signing & Capabilities** and configure **App Group** functionality which we had perform in previous steps. (Group id should be same for both targets).

![IOS Screen Share](/img/ios-screenshare/step11-xcode.png)

### Step 9 : Add App Group Id in Extension File

Go to the extension's `SampleHandler.swift` file and paste your group ID in the `appGroupIdentifier` constant.

![IOS Screen Share](/img/ios-screenshare/step12-xcode.png)

### Step 10 : Update App level info.plist file

1.  Add a new key **RTCScreenSharingExtension** in Info.plist with the extension's Bundle Identifier as the value.
2.  Add a new key **RTCAppGroupIdentifier** in Info.plist with the extension's App groups Id as the value.

**Note** : For the extension's Bundle Identifier, go to **TARGETS > Your-Extension-Name > Signing & Capabilities** .

![IOS Screen Share](/img/ios-screenshare/step13-xcode.png)

:::note

You can also check out the extension's [example code](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/tree/master/ios/BroadcastScreen) on github.
:::

## Create iOS Native Module for RPSystemBroadcastPickerView

### Step 1 : Add Files in iOS Project

Go to **Xcode > Your App** and create a new file named `VideosdkRPK.swift`.

![IOS Screen Share](/img/ios-screenshare/step18-xcode.png)
![IOS Screen Share](/img/ios-screenshare/step19-xcode.png)

After clicking the Create button, it will prompt you to create a bridging header.

![IOS Screen Share](/img/ios-screenshare/step20-xcode.png)

After creating the bridging header file, create an Objective-c file named `VideosdkRPK`.

![IOS Screen Share](/img/ios-screenshare/step21-xcode.png)
![IOS Screen Share](/img/ios-screenshare/step22-xcode.png)

- For the `VideosdkRPK.swift` file, copy the content from [here](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/blob/master/ios/VideosdkRPK.swift).

- In the `Appname-Bridging-Header` file, add the line `#import "React/RCTEventEmitter.h"`.

- For the `VideosdkRPK.m` file, copy the content from [here](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/blob/master/ios/VideosdkRPK.m).

### Step 2 : Integrate Native Module on React native side

- Create a file named `VideosdkRPK.js` and copy the ccontent from [here](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/blob/master/VideosdkRPK.js).

- Add the lines given below for handling the enable and disable screen share event.

```js
import React, { useEffect } from "react";
import VideosdkRPK from "../VideosdkRPK";
import { TouchableOpacity, Text } from "react-native";

const { enableScreenShare, disableScreenShare } = useMeeting({});

useEffect(() => {
  VideosdkRPK.addListener("onScreenShare", (event) => {
    if (event === "START_BROADCAST") {
      enableScreenShare();
    } else if (event === "STOP_BROADCAST") {
      disableScreenShare();
    }
  });

  return () => {
    VideosdkRPK.removeSubscription("onScreenShare");
  };
}, []);

return (
  <>
    <TouchableOpacity
      onPress={() => {
        // Calling startBroadcast from iOS Native Module
        VideosdkRPK.startBroadcast();
      }}
    >
      <Text> Start Screen Share </Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        disableScreenShare();
      }}
    >
      <Text> Stop Screen Share </Text>
    </TouchableOpacity>
  </>
);
```

- The `VideosdkRPK.startBroadcast()` method produces the following result.

![IOS Screen Share](/img/ios-screenshare/step23-xcode.png)

After clicking the **Start Broadcast** button, you will be able to get the screen share stream in the session.

<!-- ## How to Create App Group in Apple Store
### Step 1 : Go to App store

Navigate to [App Group](https://developer.apple.com/account/resources/identifiers/list/applicationGroup) and click on identifier.

![IOS Screen Share](/img/ios-screenshare/step14-xcode.png)

### Step 2 : Choose App Groups

Select **App Groups** from identifier and click on continue.
![IOS Screen Share](/img/ios-screenshare/step15-xcode.png)

### Step 3 : Add identifier

Add description and identifier, then click continue.

**Note** : Make sure the identifier prefix should be **group**, for example **group.com.ScreenBroadcast**.

![IOS Screen Share](/img/ios-screenshare/step16-xcode.png)

### Step 4 : Register identifier

Now, click on Register button to register this group.
![IOS Screen Share](/img/ios-screenshare/step17-xcode.png) -->
