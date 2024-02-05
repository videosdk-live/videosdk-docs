---
title: Quick Start With Interactive Live Streaming
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start With Interactive Live Streaming
pagination_label: Quick Start With Interactive Live Streaming
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-ILS
---

# Quick Start for Interactive Live Streaming in React Native

import ReactPlayer from 'react-player'

<ReactPlayer controls url="https://www.youtube.com/watch?v=LFNNigEkfdA" height="500px" width={"100%"} />

VideoSDK empowers you to seamlessly integrate the interactive live streaming feature into your React Native application within minutes.

In this quickstart, you'll explore this feature of VideoSDK. Follow the step-by-step guide to integrate it within your application.

### Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- Basic understanding of React Native
- Node.js v12+
- NPM v6+ (comes installed with newer Node versions)
- Android Studio or Xcode installed

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

### App Architecture

The App will contain the following screens:

1. `Join Screen` : This screen allows the SPEAKER to create a studio or join a predefined studio, and VIEWER to join a predefined studio.

2. `Speaker Screen` :  This screen contains the list of speakers and studio controls, such as enabling/disabling the microphone and camera, and leaving the studio.

3. `Viewer Screen` : This screen includes a live stream player where viewers can watch the stream.


<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ils_app_arch.png' />

</center>

## Getting Started with the Code!

### Create App

Create a new React Native App using the below command.

```js
npx react-native init AppName
```

For React Native setup, you can follow the [Official Documentation](https://reactnative.dev/docs/environment-setup).

### VideoSDK Installation

Install the VideoSDK by using the following command. Ensure that you are in your project directory before running this command.

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
npm install "@videosdk.live/react-native-sdk"  "@videosdk.live/react-native-incallmanager"
```

</TabItem>
<TabItem value="yarn">

```js
yarn add "@videosdk.live/react-native-sdk"  "@videosdk.live/react-native-incallmanager"
```

</TabItem>
</Tabs>

### Project Structure

```jsx title="Directory Structure"
  root
   ├── node_modules
   ├── android
   ├── ios
   ├── App.js
   ├── api.js
   ├── index.js
```

### Project Configuration

#### Android Setup

1. Add the required permissions in the `AndroidManifest.xml` file.

```xml title="AndroidManifest.xml"
<manifest
  xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.cool.app"
>
  //highlight-start
    <!-- Give all the required permissions to app -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <!-- Needed to communicate with already-paired Bluetooth devices. (Legacy up to Android 11) -->
    <uses-permission
        android:name="android.permission.BLUETOOTH"
        android:maxSdkVersion="30" />
    <uses-permission
        android:name="android.permission.BLUETOOTH_ADMIN"
        android:maxSdkVersion="30" />

    <!-- Needed to communicate with already-paired Bluetooth devices. (Android 12 upwards)-->
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK" />
  //highlight-end

    <application>
  //highlight-start
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
  //highlight-end
  </application>
</manifest>
```

2. Update your `colors.xml` file for internal dependencies.

```js title="android/app/src/main/res/values/colors.xml"
<resources>
  <item name="red" type="color">
    #FC0303
  </item>
  <integer-array name="androidcolors">
    <item>@color/red</item>
  </integer-array>
</resources>
```

3. Link the necessary VideoSDK Dependencies.

```java title="android/app/build.gradle"
  dependencies {
   implementation project(':rnwebrtc')
   implementation project(':rnfgservice')
  }
```

```gradle title="android/settings.gradle"
include ':rnwebrtc'
project(':rnwebrtc').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-webrtc/android')

include ':rnfgservice'
project(':rnfgservice').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-foreground-service/android')

```

```java title="MainApplication.java"
  //highlight-start
import live.videosdk.rnwebrtc.WebRTCModulePackage;
import live.videosdk.rnfgservice.ForegroundServicePackage;
  //highlight-end

public class MainApplication extends Application implements ReactApplication {
  private static List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
  //highlight-start

      packages.add(new ForegroundServicePackage());
      packages.add(new WebRTCModulePackage());
  //highlight-end

      return packages;
  }
}
```

```java title="android/gradle.properties"
/* This one fixes a weird WebRTC runtime problem on some devices. */
android.enableDexingArtifactTransform.desugaring=false
```

4. Include the following line in your `proguard-rules.pro` file (optional: if you are using Proguard)

```java title="android/app/proguard-rules.pro"
-keep class org.webrtc.** { *; }
```

5. In your `build.gradle` file, update the minimum OS/SDK version to `23`.

```java title=build.gradle
buildscript {
  ext {
      minSdkVersion = 23
  }
}
```

#### iOS Setup

1. **IMPORTANT**: Ensure that you are using CocoaPods version 1.10 or later.

To update CocoaPods, you can reinstall the gem using the following command:

```gem
$ sudo gem install cocoapods
```

2. Manually link react-native-incall-manager (if it is not linked automatically).

- Select `Your_Xcode_Project/TARGETS/BuildSettings`, in Header Search Paths, add `"$(SRCROOT)/../node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager"`

3. Change the path of `react-native-webrtc` using the following command:

```sh title="Podfile"
pod ‘react-native-webrtc’, :path => ‘../node_modules/@videosdk.live/react-native-webrtc’
```

4. Change the version of your platform.

You need to change the platform field in the Podfile to 12.0 or above because react-native-webrtc doesn't support iOS versions earlier than 12.0. Update the line: platform : ios, ‘12.0’.

5. Install pods

After updating the version, you need to install the pods by running the following command:

```sh
Pod install
```

6. Add “libreact-native-webrtc.a” binary.

Add the "libreact-native-webrtc.a" binary to the "Link Binary With Libraries" section in the target of your main project folder.

7. Declare permissions in Info.plist :

Add the following lines to your info.plist file located at (project folder/ios/projectname/info.plist):

```html title="ios/projectname/info.plist"
<key>NSCameraUsageDescription</key>
<string>Camera permission description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone permission description</string>
```

#### Register Service

Register VideoSDK services in your root `index.js` file for the initialization service.

```js title="index.js"
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { register } from "@videosdk.live/react-native-sdk";

register();

AppRegistry.registerComponent(appName, () => App);
```

### Step 1: Get started with API.js

Prior to moving on, you must create an API request to generate a unique meetingId. You will need an authentication token, which you can create either through the [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or directly from the [VideoSDK Dashboard](https://app.videosdk.live/api-keys) for developers.

```js title="API.js"
//Auth token we will use to generate a meeting and connect to it
//highlight-next-line
export const authToken = "<Generated-from-dashbaord>";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  //highlight-next-line
  const { roomId } = await res.json();
  return roomId;
};
```

### Step 2: Wireframe App.js with all the components

To build up wireframe of App.js, you need to use VideoSDK Hooks and Context Providers. VideoSDK provides MeetingProvider, MeetingConsumer, useMeeting and useParticipant hooks.

First you need to understand Context Provider and Consumer. Context is primarily used when some data needs to be accessible by many components at different nesting levels.

- **MeetingProvider**: This is the Context Provider. It accepts value `config` and `token` as props. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- **MeetingConsumer**: This is the Context Consumer. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- **useMeeting**: This is the meeting hook API. It includes all the information related to meeting such as join, leave, enable/disable mic or webcam etc.
- **useParticipant**: This is the participant hook API. It is responsible for handling all the events and props related to one particular participant such as name, webcamStream, micStream etc.

The Meeting Context provides a way to listen for any changes that occur when a participant joins the meeting or makes modifications to their microphone, camera, and other settings.

Begin by making a few changes to the code in the App.js file.

```js title="App.js"
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
  Clipboard,
} from "react-native";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MediaStream,
  RTCView,
  Constants,
} from "@videosdk.live/react-native-sdk";
import { createMeeting, authToken } from "./api";

// Responsible for either scheduling a new meeting or joining an existing one as a host or as a viewer.
function JoinScreen({ getMeetingAndToken, setMode }) {
  return null;
}

// Responsible for managing participant video stream
function ParticipantView(props) {
  return null;
}

// Responsible for managing meeting controls such as toggle mic / webcam and leave
function Controls() {
  return null;
}

// Responsible for Speaker side view, which contains Meeting Controls(toggle mic/webcam & leave) and Participant list
function SpeakerView() {
  return null;
}

// Responsible for Viewer side view, which contains video player for streaming HLS and managing HLS state (HLS_STARTED, HLS_STOPPING, HLS_STARTING, etc.)
function ViewerView() {
  return null;
}

// Responsible for managing two views (Speaker & Viewer) based on provided mode (`CONFERENCE` & `VIEWER`)
function Container(props) {
  return null;
}

function App() {
  const [meetingId, setMeetingId] = useState(null);

  //State to handle the mode of the participant i.e. CONFERENCE or VIEWER
  const [mode, setMode] = useState("CONFERENCE");

  //Getting MeetingId from the API created earlier
  //highlight-start
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };
  //highlight-end

  return authToken && meetingId ? (
    <MeetingProvider
      //highlight-start
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
        //This will be the mode of the participant CONFERENCE or VIEWER
        mode: mode,
      }}
      token={authToken}
      //highlight-end
    >
      <Container />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} setMode={setMode} />
  );
}

export default App;
```

### Step 3: Implement Join Screen

Join screen will work as medium to either schedule a new meeting or to join an existing one as a host or as a viewer.

This functionality will have 3 buttons:

`1. Join as Host:` When this button is clicked, the person will join the meeting with the entered `meetingId` as `HOST`.

`2. Join as Viewer:` When this button is clicked, the person will join the meeting with the entered `meetingId` as `VIEWER`.

`3. Create Studio Room:` When this button is clicked, the person will join a new meeting as `HOST`.

```js title="JoinScreen Component"
function JoinScreen({ getMeetingAndToken, setMode }) {
  const [meetingVal, setMeetingVal] = useState("");

  const JoinButton = ({ value, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#1178F8",
          padding: 12,
          marginVertical: 8,
          borderRadius: 6,
        }}
        onPress={onPress}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          {value}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        paddingHorizontal: 6 * 10,
      }}
    >
      <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={"XXXX-XXXX-XXXX"}
        placeholderTextColor={"grey"}
        style={{
          padding: 12,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 6,
          color: "white",
          marginBottom: 16,
        }}
      />
      <JoinButton
        onPress={() => {
          getMeetingAndToken(meetingVal);
        }}
        value={"Join as Host"}
      />
      <JoinButton
        onPress={() => {
          setMode("VIEWER");
          getMeetingAndToken(meetingVal);
        }}
        value={"Join as Viewer"}
      />
      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          marginVertical: 16,
          fontStyle: "italic",
          color: "grey",
        }}
      >
        ---------- OR ----------
      </Text>

      <JoinButton
        onPress={() => {
          getMeetingAndToken();
        }}
        value={"Create Studio Room"}
      />
    </SafeAreaView>
  );
}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ils-home-screen.png' style={{height: '600px'}} />

</center>

### Step 4: Implement Container Component

Next step is to create a container to manage `Join screen`, `SpeakerView` and `ViewerView` components based on the `mode`.

You need to determine the mode of the `localParticipant`, if its `CONFERENCE`, display the `SpeakerView` component otherwise show the `ViewerView` component.

```js title="Container Component"
function Container() {
  const { join, changeWebcam, localParticipant } = useMeeting({
    onError: (error) => {
      console.log(error.message);
    },
  });

  return (
    <View style={{ flex: 1 }}>
      {localParticipant?.mode == Constants.modes.CONFERENCE ? (
        <SpeakerView />
      ) : localParticipant?.mode == Constants.modes.VIEWER ? (
        <ViewerView />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            Press Join button to enter studio.
          </Text>
          <Button
            btnStyle={{
              marginTop: 8,
              paddingHorizontal: 22,
              padding: 12,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 8,
            }}
            buttonText={"Join"}
            onPress={() => {
              join();
              setTimeout(() => {
                changeWebcam();
              }, 300);
            }}
          />
        </View>
      )}
    </View>
  );
}

// Common Component which will also be used in Controls Component
const Button = ({ onPress, buttonText, backgroundColor, btnStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...btnStyle,
        backgroundColor: backgroundColor,
        padding: 10,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ils-join-screen.png' style={{height: '600px'}} />

</center>

### Step 5: Implement SpeakerView

Next step is to create `SpeakerView` and `Controls` components to manage features such as join, leave, mute and unmute.

1. You have to retrieve all the `participants` using the `useMeeting` hook and filter them based on the mode set to `CONFERENCE` ensuring that only Speakers are displayed on the screen.

```js title="SpeakerView"
function SpeakerView() {
  // Get the Participant Map and meetingId
  const { meetingId, participants } = useMeeting({});

  // For getting speaker participant, filter out `CONFERENCE` mode participant
  const speakers = useMemo(() => {
    const speakerParticipants = [...participants.values()].filter(
      (participant) => {
        return participant.mode == Constants.modes.CONFERENCE;
      }
    );
    return speakerParticipants;
  }, [participants]);

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      {/* Render Header for copy meetingId and leave meeting*/}
      <HeaderView />

      {/* Render Participant List */}
      {speakers.length > 0 ? (
        <FlatList
          data={speakers}
          renderItem={({ item }) => {
            return <ParticipantView participantId={item.id} />;
          }}
        />
      ) : null}

      {/* Render Controls */}
      <Controls />
    </SafeAreaView>
  );
}

function HeaderView() {
  const { meetingId, leave } = useMeeting();
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "white" }}>{meetingId}</Text>
      <Button
        btnStyle={{
          borderWidth: 1,
          borderColor: "white",
        }}
        onPress={() => {
          Clipboard.setString(meetingId);
          alert("MeetingId copied successfully");
        }}
        buttonText={"Copy MeetingId"}
        backgroundColor={"transparent"}
      />
      <Button
        onPress={() => {
          leave();
        }}
        buttonText={"Leave"}
        backgroundColor={"#FF0000"}
      />
    </View>
  );
}

function Container(){
  //highlight-next-line
  ...

  const mMeeting = useMeeting({
    onMeetingJoined: () => {
      // Pin the local participant if he joins in CONFERENCE mode
      //highlight-start
      if (mMeetingRef.current.localParticipant.mode == "CONFERENCE") {
        mMeetingRef.current.localParticipant.pin();
      }
      //highlight-end
    }
  });

  // Create a ref to meeting object so that when used inside the
  // Callback functions, meeting state is maintained
  //highlight-start
  const mMeetingRef = useRef(mMeeting);
  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);
  //highlight-end

  return <>...</>;
}
```

2. You need to then create the `ParticipantView` to display the participant's  media. To play the media, use the `webcamStream` and `micStream` from the `useParticipant` hook.

```js title="ParticipantView"
function ParticipantView({ participantId }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);
  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={"cover"}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: "grey",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    >
      <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
    </View>
  );
}
```

3. You have to add the `Controls` component which will allow the speaker to toggle their media and start/stop HLS.

```js title="Controls Component"
function Controls() {
  const { toggleWebcam, toggleMic, startHls, stopHls, hlsState } = useMeeting(
    {}
  );

  const _handleHLS = async () => {
    if (!hlsState || hlsState === "HLS_STOPPED") {
      startHls({
        layout: {
          type: "SPOTLIGHT",
          priority: "PIN",
          gridSize: 4,
        },
        theme: "DARK",
        orientation: "portrait",
      });
    } else if (hlsState === "HLS_STARTED" || hlsState === "HLS_PLAYABLE") {
      stopHls();
    }
  };

  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button
        onPress={() => {
          toggleWebcam();
        }}
        buttonText={"Toggle Webcam"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => {
          toggleMic();
        }}
        buttonText={"Toggle Mic"}
        backgroundColor={"#1178F8"}
      />
      {hlsState === "HLS_STARTED" ||
      hlsState === "HLS_STOPPING" ||
      hlsState === "HLS_STARTING" ||
      hlsState === "HLS_PLAYABLE" ? (
        <Button
          onPress={() => {
            _handleHLS();
          }}
          buttonText={
            hlsState === "HLS_STARTED"
              ? `Live Starting`
              : hlsState === "HLS_STOPPING"
              ? `Live Stopping`
              : hlsState === "HLS_PLAYABLE"
              ? `Stop Live`
              : `Loading...`
          }
          backgroundColor={"#FF5D5D"}
        />
      ) : (
        <Button
          onPress={() => {
            _handleHLS();
          }}
          buttonText={`Go Live`}
          backgroundColor={"#1178F8"}
        />
      )}
    </View>
  );
}
```

#### Output Of `SpeakerView` Component

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ils-viewer-screen.png' style={{height: '600px'}} />

</center>

### Step 6: Implement ViewerView

When the **HOST** (`CONFERENCE` mode participant) initiates the live streaming, viewers will be able to watch it.

To implement the player view, you have to use [react-native-video](https://www.npmjs.com/package/react-native-video). It will be helpful for playing the HLS stream.

Begin by adding this package.

<Tabs
defaultValue="npm"
groupId={"server-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
npm install react-native-video
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add react-native-video
```

</TabItem>
</Tabs>

With `react-native-video` installed, you can now get the `hlsUrls` and `isHlsPlayable` from the `useMeeting` hook which will be used to play the HLS in the player.

```js
//highlight-start
// imports react-native-video
import Video from "react-native-video";
//highlight-end

function ViewerView({}) {
  const { hlsState, hlsUrls } = useMeeting();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      {hlsState == "HLS_PLAYABLE" ? (
        <>
          {/* Render Header for copying the meetingId and leaving meeting*/}
          <HeaderView />

          {/* Render VideoPlayer that will play `downstreamUrl`*/}
          <Video
            controls={true}
            source={{
              uri: hlsUrls.downstreamUrl,
            }}
            resizeMode={"stretch"}
            style={{
              flex: 1,
              backgroundColor: "black",
            }}
            onError={(e) => console.log("error", e)}
          />
        </>
      ) : (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            HLS is not started yet or is stopped
          </Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}
```

#### Output of `ViewerView` Component

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ils-speaker-screen.png' style={{height: '600px'}} />

</center>

:::tip

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/quickstart/tree/main/react-native-hls) on GitHub

:::
