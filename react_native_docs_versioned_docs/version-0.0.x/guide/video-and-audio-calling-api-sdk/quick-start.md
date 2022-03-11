---
title: Quick Start
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
  - Javascript SDK implemntation
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

import Mermaid from '@theme/Mermaid';

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.
This guide will get you running with the VideoSDK video & audio calling in minutes.


## Prerequisite

- Node.js v12+
- NPM v6+ (comes installed with newer Node versions)
- Android Studio or Xcode installed

## Project Structure

- You can create your react-native app using command shown below

```js title="Create React-native app"
npx react-native init appName
```

```jsx title="Directory Structure"
  root-Folder Name
   ├──
   ...
   src
   ├── components
   │    ├── ParticipantView.js
   ├── style
   │    ├── CustomStyle.js
   ├── api.js
   ├── MeetingContainer.js
   ...
```

- Install necessary packages

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"server-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install "@videosdk.live/react-native-sdk"
```

</TabItem>
<TabItem value="yarn">

```js
yarn add "@videosdk.live/react-native-sdk"
```

</TabItem>
</Tabs>

## SDK Integration

### Android Setup

1. Update colors.xml file

```xml title="android/app/src/main/res/values/colors.xml"
<resources>
    <item name="red" type="color">#FC0303</item>
    <integer-array name="androidcolors">
    <item>@color/red</item>
    </integer-array>
</resources>
```

2. Update AndroidManifest.xml file

```xml title="AndroidManifest.xml"
<manifest
  xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.cool.app"
>
    <!-- Give all the required permissions to app -->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK" />
​
  <application>
   <meta-data
      android:name="live.videosdk.rnfgservice.notification_channel_name"
      android:value="Meeting Notification"
     />
    <meta-data
    android:name="live.videosdk.rnfgservice.notification_channel_description"
    android:value="Whenever meeting started notification will appear."
    />
    <meta-data
    android:name="live.videosdk.rnfgservice.notification_color"
    android:resource="@color/red"
    />
    <service android:name="live.videosdk.rnfgservice.ForegroundService" android:foregroundServiceType="mediaProjection"></service>
    <service android:name="live.videosdk.rnfgservice.ForegroundServiceTask"></service>
  </application>
</manifest>
```

3. Link couple of library dependencies manually

```java title="android/app/build.gradle"
  dependencies {
    compile project(':rnfgservice') compile project(':rnwebrtc') compile project(':rnincallmanager')
  }
```

```gradle title="android/settings.gradle"
include ':rnwebrtc'
project(':rnwebrtc').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-webrtc/android')

include ':rnincallmanager'
project(':rnincallmanager').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-incallmanager/android')

include ':rnfgservice'
project(':rnfgservice').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-foreground-service/android')
```

```java title="MainApplication.java"
import live.videosdk.rnfgservice.ForegroundServicePackage;
import live.videosdk.rnincallmanager.InCallManagerPackage;
import live.videosdk.rnwebrtc.WebRTCModulePackage;

public class MainApplication extends Application implements ReactApplication {
  private static List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          /* Initialise foreground service, incall manager and webrtc module */
          new ForegroundServicePackage(),
          new InCallManagerPackage(),
          new WebRTCModulePackage(),
      );
  }
}
```

```java title="android/gradle.properties"
/* This one fixes a weird WebRTC runtime problem on some devices. */
android.enableDexingArtifactTransform.desugaring=false
```

```java title="android/app/proguard-rules.pro"
-keep class org.webrtc.** { *; }
```

### iOS Setup

1. Install `react-native-incallmanager`

```sh
$ yarn add @videosdk.live/react-native-incallmanager
```

2. IMPORTANT: Make sure you are using CocoaPods 1.10 or higher.

To update CocoaPods you simply install the gem again

```gem
$[sudo] gem install cocoapods
```

3. Manual linking (if react-native-incall-manager is not linked automatically)

   3.1 Drag `node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager.xcodeproj` under `<your_xcode_project>/Libraries`

   3.2 Select <your_xcode_project> --> Build Phases --> Link Binary With Libraries

   3.3 Drag `Libraries/RNInCallManager.xcodeproj/Products/libRNInCallManager.a` to Link Binary With Libraries

   3.4 Select <your_xcode_project> --> Build Settings
   In Header Search Paths, add `$(SRCROOT)/../node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager`

4. Change path of `react-native-webrtc`

```sh title="Podfile"
pod ‘react-native-webrtc’, :path => ‘../node_modules/@videosdk.live/react-native-webrtc’
```

5. Change your platform version

You have change platform field of podfile to 11.0 or above it, as react-native-webrtc doesn’t support IOS < 11
platform :ios, ‘11.0’

6. Install pods

After updating the version, you have to install pods.

```sh
Pod install
```

7. Add “libreact-native-webrtc.a” binary

Add “libreact-native-webrtc.a” in Link Binary with libraries. In target of main project folder.

8. Declare permissions in Info.plist :

Add following lines to info.plist (project folder/IOS/projectname/info.plist):

```html title="IOS/projectname/info.plist"
<key>NSCameraUsageDescription</key>
<string>Camera permission description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone permission description</string>
```

### Register Service

Register services at start of meeting by calling register event from the `index.js` file to initialize services such as incall manager and foreground services.

```js title="index.js"
// Import the library
import { register } from '@videosdk.live/react-native-sdk';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App.js';
​
// Register the service
register();
AppRegistry.registerComponent(appName, () => App);
```

## Start Writing Your Code

### Step 1: Meeting Configuration

- Create `api.js` and Update the `TOKEN` with the token you genereated from VideoSDK [Dashboard](https://app.videosdk.live/api-keys).

```js title="api.js"
//Replace your token here which was generated from VideoSDK Dashboard
const TOKEN = "";

export const getToken = async () => {
  if (TOKEN == "") {
    console.error("Error: Provide Token First");
  } else if (TOKEN) {
    return TOKEN;
  }
};
```

- Now we will add `createMeeting()` method to `api.js` which will generate a new `meetingId` for you.

```js title="api.js"
const API_BASE_URL = "https://api.videosdk.live";

export const createMeeting = async ({ token }) => {
  const url = `${API_BASE_URL}/api/meetings`;
  const options = {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
  };

  const { meetingId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error("error", error));

  return meetingId;
};
```

- Let's create a meeting now . You will require 2 things **1)token : to start a meeting** and **2)meetingId : to store a meetingId created**.

```js title="App.js"
import React, {useState, useEffect} from 'react';
import {getToken, createMeeting} from './src/api';

export default function App() {
  const [token, setToken] = useState('');
  const [meetingId, setMeetingId] = useState('');

  async function api() {
    const token = await getToken();
    const meetingCode = await createMeeting({token});
    setToken(token);
    setMeetingId(meetingCode);
  }

  useEffect(() => {
    api();
  }, []);

  return(...);
}
```

- Pass that meetingId to MeetingProvider component of react-native-sdk.

```js title="App.js"
import { SafeAreaView } from "react-native";
import { MeetingProvider } from "@videosdk.live/react-native-sdk";
import MeetingContainer from "./src/MeetingContainer";

export default function App() {
  //...

  return token && meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: false,
          name: "Test User",
          notification: {
            title: "Code Sample",
            message: "Meeting is running.",
          },
        }}
        token={token}
      >
        <MeetingContainer />
      </MeetingProvider>
    </SafeAreaView>
  ) : null;
}
```

### Step 2 : Create MeetingContainer

:::tip
Refer our custom styling from **[here](/)**
:::

- MeetingContainer is one component whose role is to contain participants of a meeting and UI elements.

```js title="MeetingContainer.js"
import React, { useEffect, useRef,useState} from 'react';
import {
  Button
} from 'react-native';
import {
  useMeeting,
} from '@videosdk.live/react-native-sdk';
//refer CustomStyle.js file from the path shown in the tip above
import {styles} from './src/style/CustomStyle';

const MeetingContainer = () => {

  //To get the height and width of the window
  const layout = useWindowDimensions();

  //To toggle visibility of controls
  const [visibleControls, setvisibleControls] = useState(true);

  //Add the basic button design
  const Button = ({onPress, buttonText, backgroundColor}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.TouchableOpacityContainer}>
        <Text style={{color: 'white', fontSize: 12}}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };

  return (...);
};
```

- Make use of `useMeeting` hook of `@videosdk.live/react-native-sdk` for performing operations of a meeting. We will get `join`, `leave`, `toggleMic`, `toogleWebcam` and `participants` from the meeting and pass the `onMeetingJoined()`, `onMeetingLeft()`, `onParticipantJoined()` and `onParticipantLeft()` callback functions.

```js title="MeetingContainer.js"
//..imports are here

const MeetingContainer = () => {

  function onMeetingJoined() {
    console.log("onMeetingJoined");
  }

  function onMeetingLeft() {
    console.log("on-Meeting-Left");
  }

  function onParticipantJoined(participant) {
    console.log(" onParticipantJoined", participant);
  }

  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }

  const { join, leave, toggleMic, toggleWebcam, participants} =
    useMeeting({
      onMeetingLeft,
      onMeetingJoined,
      onParticipantJoined
    });

  //a reference to meeting object
  const mMeetingRef = useRef();

  //initialising mMeeting object to empty first
  const mMeeting = useMeeting({});

  //setting meeting object created to mMeetingRef
  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  return (...);
};
```

- Now we will update the `MeetingContainer.js` `return` method to show participants list and the controls to join and leave the meeting along with buttons to toogle mic and webcam.

```js title="MeetingContainer.js"
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StatusBar,
  useWindowDimensions,
  Platform,
  Button,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from "react-native";
import ParticipantView from "./src/components/ParticipantView";

const MeetingContainer = () => {
  //array Of Id of all participants of the meeting
  const participantsArrId = [...participants.keys()];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161616" }}>
      <View style={{ flex: 1, paddingHorizontal: 8 }}>
        {participantsArrId.length > 0 ? (
          <FlatList
            data={participantsArrId}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setvisibleControls(!visibleControls);
                  }}
                  style={{
                    height: layout.height / 2,
                    marginVertical: 3,
                  }}
                >
                  <ParticipantView participantId={item} />
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: "#F6F6FF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>
              Press Join button to enter meeting.
            </Text>
          </View>
        )}
      </View>
      {visibleControls ? (
        <View style={styles.ViewContainer}>
          <Button
            onPress={() => {
              join();
            }}
            buttonText={"JOIN"}
            backgroundColor={"#6a65f1"}
          />
          <Button
            onPress={() => {
              leave();
            }}
            buttonText={"LEAVE"}
            backgroundColor={"red"}
          />
          <Button
            onPress={toggleMic}
            buttonText={"TOGGLE MIC"}
            backgroundColor={"#6a65f1"}
          />
          <Button
            onPress={toggleWebcam}
            buttonText={"TOGGLE WEBCAM"}
            backgroundColor={"#6a65f1"}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};
```

### Step 3 : Create ParticipantView.

- Now we will create the `ParticipantView` which will show individual participant's audio and video stream. For this we will use `useParticipant` hook.

```js title="src/components/ParticipantView.js"
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";
import { styles } from "./src/style/CustomStyle";

export default function ParticipantView({ participantId }) {
  //get the participant details based on participantId
  const { displayName, isLocal, webcamStream, micStream, webcamOn, micOn } =
    useParticipant(participantId, {});

  const TextContainer = ({ fText, sText }) => {
    return (
      <View style={styles.TextContainer}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {fText}
        </Text>
        <Text
          style={{
            color: "white",
            marginLeft: 4,
            fontSize: 16,
          }}
        >
          {sText}
        </Text>
      </View>
    );
  };

  const InfoOverLay = () => {
    return (
      <View style={styles.InfoOverLayContainer}>
        <TextContainer fText={"Name :"} sText={displayName} />
        <TextContainer fText={"Mute :"} sText={micOn ? "No" : "Yes"} />
        <TextContainer fText={"WebCam :"} sText={webcamOn ? "Yes" : "No"} />
      </View>
    );
  };

  return (
    <View
      key={participantId}
      style={{
        borderRadius: 8,
        overflow: "hidden",
        flex: 1,
      }}
    >
      {webcamOn ? (
        <>
          <RTCView
            streamURL={new MediaStream([webcamStream.track]).toURL()}
            objectFit={"cover"}
            mirror={isLocal ? true : false}
            style={{
              flex: 1,
            }}
          />
          <InfoOverLay />
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: "grey",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
          </View>
          <InfoOverLay />
        </>
      )}
    </View>
  );
}
```
:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example) on GitHub

:::

## Run your application

### Android

```js
npx react-native run-android
```

### IOS

```js
npx react-native run-ios
```

Your app should look like this after the implementation.

<img class="react-native-screen-img" alt="React-Native-Screen" src={require('/static/img/quick-start/react-native-screen.png').default} />

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/react-native/guide/video-and-audio-calling-api-sdk/server-setup).
:::
