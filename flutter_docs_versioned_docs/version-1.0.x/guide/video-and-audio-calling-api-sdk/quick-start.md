---
title: Quick Start with Flutter
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start with Flutter
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables you to embed the video calling feature into your Flutter application in minutes.

In this quickstart, we are going to explore group calling feature of Video SDK. We will go through step by step guide of integrating video calling with Flutter Video SDK.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

- Video SDK Developer Account (Not having one, follow **[Video SDK Dashboard](https://app.videosdk.live/)**)
- The basic understanding of Flutter.
- **[Flutter Video SDK](https://pub.dev/packages/videosdk)**
- Have Flutter installed on your device.

:::important

One should have a VideoSDK account to generate token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Getting Started with the Code!

Follow the steps to create the environment necessary to add video calls into your app. Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/flutter-rtc).

### Create a new Flutter project.

Create a new Flutter App using the below command.

```bash
$ flutter create videosdk_flutter_quickstart
```

### Install Video SDK

Install the VideoSDK using the below-mentioned flutter command. Make sure you are in your flutter app directory before you run this command.

```js
$ flutter pub add videosdk

//run this command to add http library to perform network call to generate roomId
$ flutter pub add http
```

### Structure of the project

Your project structure should look like this.

```js title="Project Structure"
    root
    ├── android
    ├── ios
    ├── lib
         ├── api_call.dart
         ├── join_screen.dart
         ├── main.dart
         ├── meeting_controls.dart
         ├── meeting_screen.dart
         ├── participant_tile.dart
```

We are going to create flutter widgets (JoinScreen, MeetingScreen, MeetingControls, ParticipantTile).

### App Structure

App widget will contain `JoinScreen` and `MeetingScreen` widget. `MeetingScreen` will have `MeetingControls` and `ParticipantTile` widget.

<div style={{textAlign: 'center'}}>

![VideoSDK Flutter Quick Start Architecture](https://cdn.videosdk.live/website-resources/docs-resources/flutter_app_structure.png)

</div>

### Configure Project

#### For Android

- Update the `/android/app/src/main/AndroidManifest.xml` for the permissions we will be using to implement the audio and video features.

```js title="AndroidManifest.xml"
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

- Also you will need to set your build settings to Java 8 because the official WebRTC jar now uses static methods in `EglBase` interface. Just add this to your app-level `/android/app/build.gradle`.

```js
android {
    //...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

- If necessary, in the same `build.gradle` you will need to increase `minSdkVersion` of `defaultConfig` up to `23` (currently default Flutter generator set it to `16`).

- If necessary, in the same `build.gradle` you will need to increase `compileSdkVersion` and `targetSdkVersion` up to `31` (currently default Flutter generator set it to `30`).

#### For iOS

- Add the following entries which allow your app to access the camera and microphone to your `/ios/Runner/Info.plist` file :

```xml
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) Camera Usage!</string>
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) Microphone Usage!</string>
```

- Uncomment the following line to define a global platform for your project in `/ios/Podfile` :

```js title="Podfile"
# platform :ios, '11.0'
```

### Step 1: Get started with api_call.dart

Before jumping to anything else, you will write a function to generate a unique meetingId. You will require auth token, you can generate it using either by using [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or generate it from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for development.

```js title="api_call.dart"
import 'dart:convert';
import 'package:http/http.dart' as http;

//Auth token we will use to generate a meeting and connect to it
//highlight-next-line
String token = "<Generated-from-dashboard>";

// API call to create meeting
Future<String> createMeeting() async {
  final http.Response httpResponse = await http.post(
    Uri.parse("https://api.videosdk.live/v2/rooms"),
    headers: {'Authorization': token},
  );

//Destructuring the roomId from the response
//highlight-next-line
  return json.decode(httpResponse.body)['roomId'];
}
```

### Step 2 : Creating the JoinScreen

Let's create `join_screen.dart` file in `lib` directory and create JoinScreen `StatelessWidget`.

The JoinScreen will consist of:

- **Create Meeting Button** - This button will create a new meeting for you.
- **Meeting ID TextField** - This text field will contain the meeting ID, you want to join.
- **Join Meeting Button** - This button will join the meeting, which you have provided.

```js title="join_screen.dart"
import 'package:flutter/material.dart';
import 'api_call.dart';
import 'meeting_screen.dart';

class JoinScreen extends StatelessWidget {
  final _meetingIdController = TextEditingController();

  JoinScreen({super.key});

//highlight-start
  void onCreateButtonPressed(BuildContext context) async {
    // call api to create meeting and then navigate to MeetingScreen with meetingId,token
    await createMeeting().then((meetingId) {
      if (!context.mounted) return;
      Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => MeetingScreen(
            meetingId: meetingId,
            token: token,
          ),
        ),
      );
    });
  }
//highlight-end

//highlight-start
  void onJoinButtonPressed(BuildContext context) {
    String meetingId = _meetingIdController.text;
    var re = RegExp("\\w{4}\\-\\w{4}\\-\\w{4}");
    // check meeting id is not null or invaild
    // if meeting id is vaild then navigate to MeetingScreen with meetingId,token
    if (meetingId.isNotEmpty && re.hasMatch(meetingId)) {
      _meetingIdController.clear();
      Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => MeetingScreen(
            meetingId: meetingId,
            token: token,
          ),
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text("Please enter valid meeting id"),
      ));
    }
  }
//highlight-end

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('VideoSDK QuickStart'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => onCreateButtonPressed(context),
              child: const Text('Create Meeting'),
            ),
            TextField(
              decoration: const InputDecoration(
                hintText: 'Meeting Id',
                border: OutlineInputBorder(),
              ),
              controller: _meetingIdController,
            ),
            ElevatedButton(
              onPressed: () => onJoinButtonPressed(context),
              child: const Text('Join Meeting'),
            ),
          ],
        ),
      ),
    );
  }
}
```

#### Output

![VideoSDK Flutter Quick Start Join Screen](https://cdn.videosdk.live/website-resources/docs-resources/flutter_join_screen.jpg)

### Step 3 : Creating the MeetingControls

Let's create `meeting_controls.dart` file and create MeetingControls `StatelessWidget`.

The MeetingControls will consist of:

- **Leave Button** - This button will leave the meeting.
- **Toggle Mic Button** - This button will unmute or mute mic.
- **Toggle Camera Button** - This button will enable or disable camera.

MeetingControls will accept 3 functions in constructor

- **onLeaveButtonPressed** - invoked when Leave button pressed
- **onToggleMicButtonPressed** - invoked when Toggle Mic button pressed
- **onToggleCameraButtonPressed** - invoked when Toggle Camera button pressed

```js title="meeting_controls.dart"
import 'package:flutter/material.dart';

class MeetingControls extends StatelessWidget {
  final void Function() onToggleMicButtonPressed;
  final void Function() onToggleCameraButtonPressed;
  final void Function() onLeaveButtonPressed;

  const MeetingControls(
      {super.key,
      required this.onToggleMicButtonPressed,
      required this.onToggleCameraButtonPressed,
      required this.onLeaveButtonPressed});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        ElevatedButton(
            onPressed: onLeaveButtonPressed, child: const Text('Leave')),
        ElevatedButton(
            onPressed: onToggleMicButtonPressed, child: const Text('Toggle Mic')),
        ElevatedButton(
            onPressed: onToggleCameraButtonPressed,
            child: const Text('Toggle WebCam')),
      ],
    );
  }
}
```

#### Output

![VideoSDK Flutter Quick Start Meeting Controls](/img/quick-start/flutter-meeting-controls.jpg)

### Step 4 : Creating ParticipantTile

Let's create `participant_tile.dart` file and create ParticipantTile `StatefulWidget`.

The ParticipantTile will consist of:

- **RTCVideoView** - This will show participant's video stream.

ParticipantTile will accept `Participant` in constructor

- **participant** - participant of the meeting.

```js title="participant_tile.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  const ParticipantTile({super.key, required this.participant});

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? videoStream;

  @override
  void initState() {
    // initial video stream for the participant
    widget.participant.streams.forEach((key, Stream stream) {
      setState(() {
        if (stream.kind == 'video') {
          videoStream = stream;
        }
      });
    });
    _initStreamListeners();
    super.initState();
  }

  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == 'video') {
        setState(() => videoStream = stream);
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'video') {
        setState(() => videoStream = null);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: videoStream != null
          ? RTCVideoView(
              videoStream?.renderer as RTCVideoRenderer,
              objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
            )
          : Container(
              color: Colors.grey.shade800,
              child: const Center(
                child: Icon(
                  Icons.person,
                  size: 100,
                ),
              ),
            ),
    );
  }
}
```

### Step 5 : Creating the MeetingScreen

Let's create `meeting_screen.dart` file and create MeetingScreen `StatefulWidget`.

MeetingScreen will accept meetingId and token in constructor

- **meetingId** - meetingId, you want to join
- **token** - VideoSdk Auth token

```js title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './participant_tile.dart';

class MeetingScreen extends StatefulWidget {
  final String meetingId;
  final String token;

  const MeetingScreen(
      {super.key, required this.meetingId, required this.token});

  @override
  State<MeetingScreen> createState() => _MeetingScreenState();
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;
  var micEnabled = true;
  var camEnabled = true;

  Map<String, Participant> participants = {};

  @override
  void initState() {
//highlight-start
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: micEnabled,
      camEnabled: camEnabled,
      defaultCameraIndex: 1,  // Index of MediaDevices will be used to set default camera
    );
//highlight-end

    setMeetingEventListener();

//highlight-start
    // Join room
    _room.join();
//highlight-end

    super.initState();
  }

//highlight-start
  // listening to meeting events
  void setMeetingEventListener() {
    _room.on(Events.roomJoined, () {
      setState(() {
        participants.putIfAbsent(
            _room.localParticipant.id, () => _room.localParticipant);
      });
    });

    _room.on(
      Events.participantJoined,
      (Participant participant) {
        setState(
          () => participants.putIfAbsent(participant.id, () => participant),
        );
      },
    );

    _room.on(Events.participantLeft, (String participantId) {
      if (participants.containsKey(participantId)) {
        setState(
          () => participants.remove(participantId),
        );
      }
    });

    _room.on(Events.roomLeft, () {
      participants.clear();
      Navigator.popUntil(context, ModalRoute.withName('/'));
    });
  }
//highlight-end

  // onbackButton pressed leave the room
  Future<bool> _onWillPop() async {
    _room.leave();
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () => _onWillPop(),
      child: Scaffold(
        appBar: AppBar(
          title: const Text('VideoSDK QuickStart'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Text(widget.meetingId),
//highlight-start
              //render all participant
              Expanded(
                child: GridView.builder(
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10,
                  ),
                  itemBuilder: (context, index) {
                    return ParticipantTile(
                        participant: participants.elementAt(index));
                  },
                  itemCount: participants.length,
                ),
              ),
//highlight-end
              MeetingControls(
                onToggleMicButtonPressed: () {
//highlight-next-line
                  micEnabled ? _room.muteMic() : _room.unmuteMic();
                  micEnabled = !micEnabled;
                },
                onToggleCameraButtonPressed: () {
//highlight-next-line
                  camEnabled ? _room.disableCam() : _room.enableCam();
                  camEnabled = !camEnabled;
                },
                onLeaveButtonPressed: () {
//highlight-next-line
                  _room.leave()
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

### Step 6 : Change main.dart

```js title="main.dart"
import 'package:flutter/material.dart';
import 'join_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'VideoSDK QuickStart',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: JoinScreen(),
    );
  }
}
```

## Run and Test

The app is all set to test. Make sure to update the `token` in `api_call.dart`

Your app should look like this after the implementation.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer controls url='https://cdn.videosdk.live/website-resources/docs-resources/flutter_quick_start_video.mp4' height="560px" width={"100%"}/>

</div>

<br/>

:::caution
If you get `webrtc/webrtc.h file not found` error at a runtime in ios then check solution [here](https://docs.videosdk.live/flutter/guide/video-and-audio-calling-api-sdk/known-issues#issue--1).
:::

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/flutter-rtc).
:::
