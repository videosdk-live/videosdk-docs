---
title: Get Started with Video & Audio Calling Using React-Native
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start With React-Native
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

## Quick Start

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.
This guide will get you running with the VideoSDK video & audio calling in minutes.

## Sample Project

These quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](/). Once you are done with the tutorial given below your app should look like this.

<img class="react-native-screen-img" alt="React-Native-Screen" src={require('/static/img/quick-start/react-native-screen.png').default} />

## Create Project

- You can create your react-native app using command shown below

```js title="Create React-native app"
npx react-native init appName
```

- Install necessary packages

#### npm

```js title="package installation using npm"
npm install react-native-dotenv
npm install "@videosdk.live/react-native-sdk”
```

#### yarn

```js title="package installation using yarn"
yarn add react-native-dotenv
yarn add "@videosdk.live/react-native-sdk”
```

## SDK Integration

### react-native-android

#### Update colors.xml file

```xml title="android/app/src/main/res/values/colors.xml"
<resources>
    <item name="red" type="color">#FC0303</item>
    <integer-array name="androidcolors">
    <item>@color/red</item>
    </integer-array>
</resources>
```

#### Update AndroidManifest.xml file

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

#### Link couple of library dependencies manually

1.  Add below lines in `android/app/build.gradle`

```java title="android/app/build.gradle"
  dependencies {
    compile project(':rnfgservice') compile project(':rnwebrtc') compile project(':rnincallmanager')
  }
```

2.  Add below lines in `android/settings.gradle`

```gradle title="android/settings.gradle"
include ':rnwebrtc'
project(':rnwebrtc').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-webrtc/android')

include ':rnincallmanager'
project(':rnincallmanager').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-incallmanager/android')

include ':rnfgservice'
project(':rnfgservice').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-foreground-service/android')
```

3.  Add below lines in `MainApplication.java`

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

4.  Add this line to `android/gradle.properties`:

```java title="android/gradle.properties"
/* This one fixes a weird WebRTC runtime problem on some devices. */
android.enableDexingArtifactTransform.desugaring=false
```

5.  Add below line in the `android/app/proguard-rules.pro` (optional: if you are using Proguard):

```java title="android/app/proguard-rules.pro"
-keep class org.webrtc.** { *; }
```

#### Final Steps

- Import Example

The easiest way to start is import `@videosdk.live/react-native-sdk`.

```javascript title="meeting.js"
import {
  register,
  useMeeting,
  MeetingConsumer,
  MeetingProvider,
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";
```

- Register services at start of meeting

Call register event from the `index.js` file to initialize services such as incall manager and foreground services.

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

### react-native-ios

- step 1: Install incall manager

```sh title="Install react-native-incallmanager"
$ yarn add @videosdk.live/react-native-incallmanager
```

- step 2: IMPORTANT: Make sure you are using CocoaPods 1.10 or higher.

To update CocoaPods you simply install the gem again

```gem title="Update cocoapods"
$[sudo] gem install cocoapods
```

- Step 3: Manual linking (if react-native-incall-manager is not linked automatically)

  2.1 Drag node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager.xcodeproj under <your_xcode_project>/Libraries

  2.2 Select <your_xcode_project> --> Build Phases --> Link Binary With Libraries

- Drag Libraries/RNInCallManager.xcodeproj/Products/libRNInCallManager.a to Link Binary With Libraries

  2.3 Select <your_xcode_project> --> Build Settings
  In Header Search Paths, add $(SRCROOT)/../node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager

- Step 4: Change path of `react-native-webrtc`

```sh title="Change path of react-native-webrtc"
pod ‘react-native-webrtc’, :path => ‘../node_modules/@videosdk.live/react-native-webrtc’
```

- Step 5: Change your platform version

You have change platform field of podfile to 11.0 or above it, as react-native-webrtc doesn’t support IOS < 11
platform :ios, ‘11.0’

- Step 6: Install pods

After updating the version, you have to install pods.

```sh title="Install pods"
Pod install
```

- Step 7: Add “libreact-native-webrtc.a” binary

Add “libreact-native-webrtc.a” in Link Binary with libraries. In target of main project folder.

- Step 8: Declare permissions in Info.plist :

- Add following lines to info.plist (project folder/IOS/projectname/info.plist):

```sh title="Update permissions"
	<key>NSCameraUsageDescription</key>
	<string>Camera permission description</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>Microphone permission description</string>
```

#### Final Steps

- Import Example

The easiest way to start is import `@videosdk.live/react-native-sdk`.

```javascript title="meeting.js"
import {
  register,
  useMeeting,
  MeetingConsumer,
  MeetingProvider,
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";
```

- Register services at start of meeting

Call register event from the `index.js` file to initialize services such as incall manager and foreground services.

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

## Create UI and Implement SDK

- Set your token generated using [this](https://app.videosdk.live/login) to .env file

```js title=".env file"
TOKEN = "";
```

- Get token and validate it

```js title="/src/api.js"
import { TOKEN } from "@env";
export const getToken = async () => {
  console.log(`TOKEN : ${TOKEN}`);
  if (TOKEN == "") {
    console.error("Error: Provide Token First");
  } else if (TOKEN) {
    return TOKEN;
  }
};
```

- To access environment variables have a basic configuration which has shown below

```js title=".babelrc"
{
    "plugins": [
      ["module:react-native-dotenv", {
          "moduleName": "@env",
          "path": ".env",
          "blocklist": null,
          "allowlist": null,
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        }]
    ]
  }
```

- Now one will generate 2 apis , 1) create meeting and 2) validate meeting if meetingId is already there.

```js title="/src/api.js"
const API_BASE_URL = "https://api.zujonow.com";

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

export const validateMeeting = async ({ meetingId, token }) => {
  const url = `${API_BASE_URL}/api/meetings/${meetingId}`;

  const options = {
    method: "POST",
    headers: { Authorization: token },
  };

  const result = await fetch(url, options)
    .then((response) => response.json()) //result will have meeting id
    .catch((error) => console.error("error", error));

  return result ? result.meetingId === meetingId : false;
};
```

- Let's create a meeting now , you will require 2 things to start a meeting **1)token** and **2)meetingId** to store a meeting Id created.

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

- Pass that meetingId to MeetingProvider component

```js title="App.js"
import {
  SafeAreaView,
} from 'react-native';
import {
  MeetingProvider,
} from '@videosdk.live/react-native-sdk';
import MeetingContainer from './src/MeetingContainer';

export default function App() {
    ...
    return token && meetingId ? (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6FF'}}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: false,
          name: 'Test User',
          notification: {
            title: 'Code Sample',
            message: 'Meeting is running.',
          },
        }}
        token={token}>
        <MeetingContainer />
      </MeetingProvider>
    </SafeAreaView>
  ) : null;
}

```

- make use of UseMeeting hook of videoSDK.live/react-native-sdk for performing operations of a meeting

```js title="src/MeetingContainer.js"
import React, { useEffect, useRef,useState} from 'react';
import {
  Button,StyleSheet
} from 'react-native';
import {
  useMeeting,
} from '@videosdk.live/react-native-sdk';


const MeetingContainer = () => {


   const styles=StyleSheet.create({
       TouchableOpacityContainer: {
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 4,
        },
   }) ;
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

  function onSpeakerChanged(activeSpeakerId) {
    console.log("onSpeakerChanged : ", activeSpeakerId);
  }

  const { join, leave, toggleMic, toggleWebcam, participants,... } =
    useMeeting({
      onMeetingLeft,
      onMeetingJoined,
      onParticipantJoined,
      onSpeakerChanged,
      ...
    });

  const [visibleControls, setvisibleControls] = useState(true);
  const layout = useWindowDimensions();

  //a reference to meeting object
  const mMeetingRef = useRef();

  //initialising mMeeting object to empty first
  const mMeeting = useMeeting({});

  //setting meeting object created to mMeetingRef
  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  //array Of Id of all participants of the meeting
  const participantsArrId = [...participants.keys()];

  //basic button design
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

- Now check whether participants exist! , if **participantsArrId.length>0 then show participants grid with controls otherwise show controls only**

```js title="src/MeetingContainer.js"
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
  StyleSheet
} from 'react-native';
import ParticipantView from './src/components/ParticipantView';

const MeetingContainer = () => {
    const styles = StyleSheet.create({
        ViewContainer: {
        flexDirection: 'row',
        padding: 6,
        flexWrap: 'wrap',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: 'rgba(0,0,0, 0.8)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        },
    });
    ...

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
        <View
            style={styles.ViewContainer}
        >
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
}
```

```js title="src/components/ParticipantView.js"
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";

export default function ParticipantView({ participantId }) {
  const styles = StyleSheet.create({
    InfoOverLayContainer: {
      backgroundColor: "rgba(0,0,0, 0.5)",
      position: "absolute",
      padding: 12,
      bottom: 0,
      right: 0,
      left: 0,
      borderRadius: 8,
      flexWrap: "wrap",
      flexDirection: "row",
    },
    TextContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginHorizontal: 4,
      marginVertical: 4,
    },
  });

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

## Run your application

### Android

```js
npx react-native run-android
```

### IOS

```js
npx react-native run-ios
```

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/react-native/guide/video-and-audio-calling-api-sdk/server-setup).
:::
