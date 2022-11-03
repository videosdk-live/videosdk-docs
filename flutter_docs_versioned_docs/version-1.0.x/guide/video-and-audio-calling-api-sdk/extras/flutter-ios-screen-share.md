---
title: Share your Screen Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Share your Screen features quick integrate in Flutter IOS with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Flutter iOS Screen Share
pagination_label: Flutter iOS Screen Share
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: flutter-ios-screen-share
---

# Share screen - Flutter iOS

iOS requires you to add an Broadcast Upload Extension to capture the screen to the device.

:::note

Flutter iOS screenshare is available from the SDK version 1.0.5 and above
:::

## Create Broadcast Upload Extension in iOS

### Step 1 : Open Target

Open your project with xcode, select **File > New > Target** in menu bar.

![IOS Screen Share](/img/ios-screenshare/step1-xcode.png)

### Step 2 : Select Target

Choose **Broadcast Upload Extension**, and click next.

![IOS Screen Share](/img/ios-screenshare/step2-xcode.png)

### Step 3 : Configure Broadcast Upload Extension

Enter extensions name in **Product Name** field, choose team from dropdown, Uncheck include UI extension field and click finish.

![IOS Screen Share](/img/ios-screenshare/step3-xcode.png)

### Step 4 : Activate Extension scheme

You will be prompted **Activate "Your-Extension-name" scheme?** pop-up, click activate.

![IOS Screen Share](/img/ios-screenshare/step4-xcode.png)

Now, broadcast folder will appear in xcode left side bar.

![IOS Screen Share](/img/ios-screenshare/step5-xcode.png)

### Step 5 : Add External file in Created Extension

Open [videosdk-rtc-flutter-sdk-example](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example/tree/main/ios/FlutterBroadcast), Copy `SampleUploader.swift`, `SocketConnection.swift`, `DarwinNotificationCenter.swift`, and `Atomic.swift` files to your extension's folder and make sure they're added to the target.

### Step 6 : Update `SampleHandler.swift` file

Open [SampleHandler.swift](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example/blob/main/ios/FlutterBroadcast/SampleHandler.swift) and Copy `SampleHandler.swift` file content and paste it to your extensions `SampleHandler.swift` file.

### Step 7 : Add Capability in App

In Xcode, go to **YourappName > Signing & Capabilities**. and click on **+Capability** to configure app group.

![IOS Screen Share](/img/ios-screenshare/step8-xcode.png)

Select **App Groups** from list

![IOS Screen Share](/img/ios-screenshare/step9-xcode.png)

After that, you have to select or add generated app group id which you have created before.

![IOS Screen Share](/img/ios-screenshare/step10-xcode.png)

### Step 8 : Add Capability in Extension

Go to **Your-Extension-Name > Signing & Capabilities** and configure **App Group** functionality which we had perform in previous steps. (Group id should be same for both targets)

![IOS Screen Share](/img/ios-screenshare/step11-xcode.png)

### Step 9 : Add App Group Id in Extension File

Go to extensions `SampleHandler.swift` file and paste your group Id in `appGroupIdentifier` constant.

![IOS Screen Share](/img/ios-screenshare/step12-xcode.png)

### Step 10 : Update App level info.plist file

1.  Add a new key **RTCScreenSharingExtension** in Info.plist with the extension's Bundle Identifier as the value.
2.  Add a new key **RTCAppGroupIdentifier** in Info.plist with the extension's App groups Id as the value.

**Note** : For extension's Bundle Identifier, go to **TARGETS > Your-Extension-Name > Signing & Capabilities** .

![IOS Screen Share](/img/ios-screenshare/step13-xcode.png)

:::note

You can also check out extension [example code](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example/tree/main/ios/FlutterBroadcast) on github
:::

## Enable Screen Share

- In order to start screen-sharing just call `room.enableScreenShare()` method.

```js
ElevatedButton(
    child: Text("Start ScreenSharing"),
    onPressed: () {
        room.enableScreenShare();
    },
),
```

![IOS Screen Share](/img/ios-screenshare/step23-xcode.png)

After clicking **Start Broadcast** button, we wiil be able to get the screen stream in session.

## Disable Screen Share

By using `room.disableScreenShare()` function, a participant can stop publishing screen stream to other participants.

```js
ElevatedButton(
    child: Text("Stop ScreenSharing"),
    onPressed: () {
        room.disableScreenShare();
    },
),
```
