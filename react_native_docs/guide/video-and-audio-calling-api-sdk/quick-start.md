---
title: Quick Start
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native iOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
  - Javascript SDK implemntation
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

import Mermaid from '@theme/Mermaid';

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, iOS applications. It provides Programmable SDKs and REST APIs to build scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

- Node.js v12+
- NPM v6+ (comes installed with newer Node versions)
- Android Studio or Xcode installed

## Getting Started with the Code!

### Create a new react-native app

Create new-native app by command shown below.For more guidance follow [react-native docs](https://reactnative.dev/docs/environment-setup)

```js
npx create-react-native-app appName
```

### Install Video SDK

Install the VideoSDK using the below-mentioned command. Make sure you are in your react-native app directory before you run this command.

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

### Project Structure

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

### Project Configuration

#### Android Setup

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

#### iOS Setup

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

You have change platform field of podfile to 12.0 or above it, as react-native-webrtc doesn’t support iOS < 12
platform :ios, ‘12.0’

6. Install pods

After updating the version, you have to install pods.

```sh
Pod install
```

7. Add “libreact-native-webrtc.a” binary

Add “libreact-native-webrtc.a” in Link Binary with libraries. In target of main project folder.

8. Declare permissions in Info.plist :

Add following lines to info.plist (project folder/ios/projectname/info.plist):

```html title="ios/projectname/info.plist"
<key>NSCameraUsageDescription</key>
<string>Camera permission description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone permission description</string>
```

#### Register Service

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

### Step 1 : Get started with api.js

Before jumping to anything else, we have write API to generate unique meetingId. You will require auth token, you can generate it using either by using [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or generate it from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for developer.

```js title=api.js
const token = "<YOUR TOKEN HERE>";
const API_BASE_URL = "https://api.zujonow.com";

//if token is empty then error else return token
export const getToken = async () => {
  if (token == "") {
    console.error("Error: Provide Token First");
  } else if (token) {
    console.log("token : ", token);
    return token;
  }
};

export const createMeeting = async ({ token }) => {
  //will be explained furthur in this quick-start
};

export const validateMeeting = async ({ meetingId, token }) => {
  //will be explained furthur in this quick-start
};
```

Once you get token , it will be used as an authorization purpose for generating VideoSDK meetings and validating them in `api.js file`. Have a look to the code block below.

- createMeeting : will generate meetingId using provided token and return it
- validateMeeting : will validate meetingId if meetingId already exists and someone tries to join the meeting using that meetingId

```js
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

### Step 2 : Create join screen

For creating joinScreen you need to update `App.js` file

**joinScreen will contain**

- `Create Meeting Button` : for creating meeting
- `TextInput` : where one can enter meetingId
- `Join Meeting Button` : to join the meeting

```js
import React, { useState, useEffect, useRef } from "react";
import {View,TouchableOpacity,Text,FlatList,useWindowDimensions,Button,SafeAreaView,TextInput} from "react-native";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-native-sdk";
import { getToken, createMeeting } from "./src/api";

export default function App() {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [idValue, setIdValue] = useState("");

  const resetMeeting = () => { //... };

  const getTokenAndMeetingId = async () => {
    const token = await getToken();
    const meetingId = await createMeeting({ token });
    console.log("meetingId : ", meetingId);
    setToken(token);
    setMeetingId(meetingId);
    if (!token || !meetingId) {console.log("Token or Meeting Id is not generated");}
  };

  const validateMeetingId = async () => {
    if (idValue) {
      const token = await getToken();
      const meetingId = await validateMeeting({ meetingId: idValue, token });
      setToken(token);
      setMeetingId(meetingId);
      if (!token || !meetingId) {console.log("Token or Meeting Id is invalid");}
    } else {
      console.log("Please provide meetingId in textinput");
    }
  };

  return token && meetingId ? (
    //MeetingContainer Here
  ) : (
    <SafeAreaView style={{flex: 1,backgroundColor: '#F6F6FF',justifyContent: 'center',paddingHorizontal: 6 * 10}}>
      <TouchableOpacity onPress={getTokenAndMeetingId} style={{backgroundColor: '#1178F8', padding: 12, borderRadius: 6}}>
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 18}}>Create Meeting</Text>
      </TouchableOpacity>

      <Text style={{alignSelf: 'center',fontSize: 22,marginVertical: 16,fontStyle: 'italic',color: 'grey'}}>
        ---------- OR ----------
      </Text>
      <TextInput value={idValue} onChangeText={setIdValue} placeholder={'XXXX-XXXX-XXXX'} style={{padding: 12,borderWidth: 1,borderRadius: 6,fontStyle: 'italic'}}
      />
      <TouchableOpacity style={{backgroundColor: '#1178F8',padding: 12,marginTop: 14,borderRadius: 6}} onPress={validateMeetingId}>
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 18}}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}
```

This will create a view as shown in an image below

<img class="react-native-screen-img" alt="React-Native--Jeeting-Screen" src={require('/static/img/quick-start/join-screen-rn.jpg').default} />

### Step 3 : Create MeetingContainer

create `MeetingContainer.js` file as mentioned in the the [project structure](#project-structure)

MeetingContainer component will contain 2 things

- ParticipantView : this part will be explained later in this quickstart furthure
- Meeting's controls button such as join meeting, end meeting , toggle mic, toggle webcam

MeeitngContainer component Parameters :

- resetMeeting() : this function will be used when meeting gets end.

```js
import React, { useRef, useState, useEffect } from "react";
import {View,TouchableOpacity,Text,SafeAreaView,FlatList,Button,useWindowDimensions} from "react-native";
import { useMeeting } from "@videosdk.live/react-native-sdk";
import ParticipantView from "./components/ParticipantView";

export default function MeetingContainer({ resetMeeting }) {
  function onMeetingJoined() {console.log("onMeetingJoined");}
  function onMeetingLeft() {console.log("on-Meeting-Left");}
  function onParticipantJoined(participant) {console.log(" onParticipantJoined", participant);}
  function onSpeakerChanged(activeSpeakerId) {console.log("onSpeakerChanged : ", activeSpeakerId);}

  const { join, leave, toggleMic, toggleWebcam, participants, changeWebcam } =
    useMeeting({onMeetingLeft,onMeetingJoined,onParticipantJoined,onSpeakerChanged,
    });

  const [visibleControls, setvisibleControls] = useState(true);
  const [micEnabled, setMicEnabled] = useState(false);
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  const layout = useWindowDimensions();
  const mMeetingRef = useRef();

  const mMeeting = useMeeting({});

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  const participantsArrId = [...participants.keys()];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161616" }}>
    <View style={{ flex: 1, paddingHorizontal: 8 }}>
        {participantsArrId.length > 0 ? (
          //ParticipantView here
        ) : (
          <View style={{flex: 1,backgroundColor: "#F6F6FF",justifyContent: "center",alignItems: "center"}}>
            <Text style={{ fontSize: 20, color: "grey" }}>Press Join button to Start meeting.</Text>
          </View>
        )}
      </View>
      {/*4 button controls */}
      {visibleControls ? (
        <View style={styles.ViewContainer}>
          <Button
            onPress={() => {join();}}
            color="#6a65f1"
            title="JOIN" />
          <Button
            onPress={() => {
              leave();
              resetMeeting();
            }}
            color="red"
            title="LEAVE" />
          <Button onPress={toggleMic} color="#6a65f1" title="TOGGLE MIC" />
          <Button
            onPress={toggleWebcam}
            color="#6a65f1"
            title="TOGGLE WEBCAM" />
        </View>
      ) : null}
    </SafeAreaView>
  );
}
```

After creating MeetingContainer go back to `app.js` file and update it by shown code below

```js
return token && meetingId ? (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6FF'}}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,name: 'Test User',
          notification: {
            title: 'Code Sample',
            message: 'Meeting is running.',
          },
        }}
        token={token}>
        <MeetingContainer resetMeeting={resetMeeting} />
      </MeetingProvider>
    </SafeAreaView>
  ) :(
    // join screen block as shown in step 2 of project configuration
  )
```

This will create a view as shown in an image below

<img class="react-native-screen-img" alt="React-Native--Meeting-Screen" src={require('/static/img/quick-start/meeting-screen-rn.jpg').default} />

### Step 4 : Create ParticipantView

Let's first create `ParticipantView.js` file as mention in the [project structure](#project-structure)

`PartcipantView` component will be used by `MeetingContainer` when each participant joins the meeting.

```js
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
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          {fText}
        </Text>
        <Text style={{ color: "white", marginLeft: 4, fontSize: 16 }}>
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
      style={{ borderRadius: 8, overflow: "hidden", flex: 1 }}
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

Update `MeetingContaine.js` file with the following code

```js
{participantsArrId.length > 0 ? (
<FlatList
  data={participantsArrId}
  showsVerticalScrollIndicator={false}
  renderItem={({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setvisibleControls(!visibleControls);
        }}
        style={{
          height: layout.height / 2,
          marginVertical: 3,
        }}>
        <ParticipantView participantId={item} />
      </TouchableOpacity>
    );
  }}
/>
):(
  // Meeting controls as shown in step 3 of project configuration
)
```

This will create a view as shown in an image below

<img class="react-native-screen-img" alt="React-Native--Participant-View" src={require('/static/img/quick-start/participant-view-rn.jpg').default} />

:::tip

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example) on GitHub

:::

## Run your application

### Android

```js
npx react-native run-android
```

### iOS

```js
npx react-native run-ios
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer controls url='/img/quick-start/react-native-video.mp4' height="560px" width={"100%"}/>

</div>

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/react-native/guide/video-and-audio-calling-api-sdk/server-setup).
:::
