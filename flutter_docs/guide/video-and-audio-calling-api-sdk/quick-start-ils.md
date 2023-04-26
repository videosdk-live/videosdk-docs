---
title: Quick Start ILS with Flutter
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start with Interactive live Streaming
pagination_label: Quick Start with Flutter
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-ils
---

# Quick Start for Interactive Live Streaming in Flutter

VideoSDK enables you to embed the livestreaming experience into your Flutter application in minutes.

In this quickstart, we are going to explore interactive livestreaming feature of Video SDK. We will go through step by step guide of integrating interactive livestreaming with Flutter Video SDK.

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

Follow the steps to create the environment necessary to add video calls into your app. Also you can find the code sample for [quickstart here](https://github.com/videosdk-live/quickstart/tree/main/flutter-hls).

### Create a new Flutter project.

Create a new Flutter App using the below command.

```bash
$ flutter create videosdk_flutter_quickstart_ils
```

### Install Video SDK

Install the VideoSDK using the below-mentioned flutter command. Make sure you are in your flutter app directory before you run this command.

```js
$ flutter pub add videosdk

//run this command to add http library to perform network call to generate roomId
$ flutter pub add http

//run this command to add flutter_vlc_player library to play HLS stream in your app
$ flutter pub add flutter_vlc_player
```

### Structure of the project

Your project structure should look like this.

```js title="Project Structure"
root
├── android
├── ios
├── lib
     ├── api_call.dart
     ├── ils_screen.dart
     ├── ils_speaker_view.dart
     ├── ils_viewer_view.dart
     ├── join_screen.dart
     ├── livestream_player.dart
     ├── main.dart
     ├── meeting_controls.dart
     ├── participant_tile.dart
```

We are going to create following flutter widgets JoinScreen, ILSScreen, ILSSpeakerView, MeetingControls, ParticipantTile, ILSViewerView, LivestreamPlayer for the quickstart app which will cover both speaker and viewer part of the app.

### App Structure

App widget will contain `JoinScreen` and `ILSScreen` screens. `ILSScreen` will render the `ILSSpeakerView` or `ILSViewerView` based on the participants mode. `ILSSpeakerView` will have `MeetingControls` and `ParticipantTile`

<div style={{textAlign: 'center'}}>

![VideoSDK Flutter ILS Quick Start Architecture](https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_arch.png)

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

- **Create Meeting Button** - This button will create a new meeting for speaker and join it with mode `CONFERENCE`.
- **Meeting ID TextField** - This text field will contain the meeting ID, you want to join.
- **Join Meeting as Host Button** - This button will join the meeting in `CONFERENCE` mode for the speakers, which you have provided.
- **Join Meeting as Viewer Button** - This button will join the meeting in `VIEWER` mode for the viewers, which you have provided.

```js title="join_screen.dart"
import 'package:flutter/material.dart';
import 'api_call.dart';
import 'ils_screen.dart';
import 'package:videosdk/videosdk.dart';

class JoinScreen extends StatelessWidget {
  final _meetingIdController = TextEditingController();

  JoinScreen({super.key});

  //highlight-start
  //Creates new Meeting Id and joins it in CONFERNCE mode.
  void onCreateButtonPressed(BuildContext context) async {
    // call api to create meeting and navigate to ILSScreen with meetingId,token and mode
    await createMeeting().then((meetingId) {
      if (!context.mounted) return;
      Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => ILSScreen(
            meetingId: meetingId,
            token: token,
            mode: Mode.CONFERENCE,
          ),
        ),
      );
    });
  }
  //highlight-end

  //highlight-start
  //Join the provided meeting with given Mode and meetingId
  void onJoinButtonPressed(BuildContext context, Mode mode) {
    // check meeting id is not null or invaild
    // if meeting id is vaild then navigate to ILSScreen with meetingId, token and mode
    String meetingId = _meetingIdController.text;
    var re = RegExp("\\w{4}\\-\\w{4}\\-\\w{4}");
    if (meetingId.isNotEmpty && re.hasMatch(meetingId)) {
      _meetingIdController.clear();
      Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => ILSScreen(
            meetingId: meetingId,
            token: token,
            mode: mode,
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
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('VideoSDK ILS QuickStart'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //Creating a new meeting
            ElevatedButton(
              onPressed: () => onCreateButtonPressed(context),
              child: const Text('Create Meeting'),
            ),
            const SizedBox(height: 40),
            TextField(
              style: const TextStyle(color: Colors.white),
              decoration: const InputDecoration(
                hintText: 'Enter Meeting Id',
                border: OutlineInputBorder(),
                hintStyle: TextStyle(color: Colors.white),
              ),
              controller: _meetingIdController,
            ),
            //Joining the meeting as host
            ElevatedButton(
              onPressed: () => onJoinButtonPressed(context, Mode.CONFERENCE),
              child: const Text('Join Meeting as Host'),
            ),
            //Joining the meeting as viewer
            ElevatedButton(
              onPressed: () => onJoinButtonPressed(context, Mode.VIEWER),
              child: const Text('Join Meeting as Viewer'),
            ),
          ],
        ),
      ),
    );
  }
}
```

- Update the app entry to `JoinScreen` from the `main.dart` file.

```js title="main.dart"
import 'package:flutter/material.dart';
//highlight-next-line
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
      //highlight-next-line
      home: JoinScreen(),
    );
  }
}
```

#### Output

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_joining.png" width="250"/>

### Step 3 : Creating the ILSScreen

Let's create `ils_screen.dart` file and create ILSScreen `StatefulWidget` which will take the `meetingId`, `token` and `mode` of the participant in the constructor.

We will create a new room using the `createRoom` method and render the `ILSSpeakerView` or `ILSViewerView` based on the passed participant `mode`.

```js title="ils_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './ils_speaker_view.dart';
import './ils_viewer_view.dart';

class ILSScreen extends StatefulWidget {
  final String meetingId;
  final String token;
  final Mode mode;

  const ILSScreen(
      {super.key,
      required this.meetingId,
      required this.token,
      required this.mode});

  @override
  State<ILSScreen> createState() => _ILSScreenState();
}

class _ILSScreenState extends State<ILSScreen> {
  late Room _room;
  bool isJoined = false;

  @override
  void initState() {
    //highlight-start
    // create room when widget loads
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: true,
      camEnabled: true,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
      mode: widget.mode,
    );

    // setting the event listener for join and leave events
    setMeetingEventListener();

    // Joining room
    _room.join();
    //highlight-end

    super.initState();
  }

  // listening to room events
  void setMeetingEventListener() {
    //highlight-start
    //Setting the joining flag to true when meeting is joined
    _room.on(Events.roomJoined, () {
      if (widget.mode == Mode.CONFERENCE) {
        _room.localParticipant.pin();
      }
      setState(() {
        isJoined = true;
      });
    });

    //Handling navigation when meeting is left
    _room.on(Events.roomLeft, () {
      Navigator.popUntil(context, ModalRoute.withName('/'));
    });
    //highlight-end
  }

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
        backgroundColor: Colors.black,
        appBar: AppBar(
          title: const Text('VideoSDK ILS QuickStart'),
        ),
        //highlight-start
        //Showing the Speaker or Viewer View based on the mode
        body: isJoined
            ? widget.mode == Mode.CONFERENCE
                ? ILSSpeakerView(room: _room)
                : widget.mode == Mode.VIEWER
                    ? ILSViewerView(room: _room)
                    : null
            : const Center(
                  child: Text("Joining...",
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
        //highlight-end
      ),
    );
  }
}

```

### Step 4 : Implementing Speaker View

Let's create the `ILSSpeakerView` which will show the `MeetingControls` and the `ParticipantTile` in grid.

1. Let us start off by creating the `StatefulWidget` named `ParticipantTile` in `participant_tile.dart` file. It will consist of `RTCVideoView` which will show participant's video stream.

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
    // initialze video stream for the participant if they are present
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

  //highlight-start
  //Event listener for the video stream of the participant
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
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      //Rending the Video Stream of the participant
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

2. Next let us add the `StatelessWidget` named `MeetingControls` in the `meeting_controls.dart` file. This widget will accept the callback handlers for all the meeting control buttons and the current HLS state of the meeting.

```js title="meeting_controls.dart"
import 'package:flutter/material.dart';

class MeetingControls extends StatelessWidget {
  final String hlsState;
  final void Function() onToggleMicButtonPressed;
  final void Function() onToggleCameraButtonPressed;
  final void Function() onHLSButtonPressed;

  const MeetingControls(
      {super.key,
      required this.hlsState,
      required this.onToggleMicButtonPressed,
      required this.onToggleCameraButtonPressed,
      required this.onHLSButtonPressed});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: [
        ElevatedButton(
          onPressed: onToggleMicButtonPressed,
            child: const Text('Toggle Mic')),
        const SizedBox(width: 10),
        ElevatedButton(
            onPressed: onToggleCameraButtonPressed,
            child: const Text('Toggle WebCam')),
        const SizedBox(width: 10),
        ElevatedButton(
            onPressed: onHLSButtonPressed,
            child: Text(hlsState == "HLS_STOPPED"
                ? 'Start HLS'
                : hlsState == "HLS_STARTING"
                    ? "Starting HLS"
                    : hlsState == "HLS_STARTED" || hlsState == "HLS_PLAYABLE"
                        ? "Stop HLS"
                        : hlsState == "HLS_STOPPING"
                            ? "Stopping HLS"
                            : "Start HLS")),
      ],
    );
  }
}
```

3. Lets finally put all these widget in the `StatefulWidget` named `ILSSpeakerView` in `ils_speaker_view.dart` file. This widget will listen to the `hlsStateChanged`, `participantJoined` and `participantLeft` events. It will render the participants and the meeting controls like leave, toggle mic and webcam as well as start and stop HLS.

```js title="ils_speaker_view.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import 'package:videosdk_flutter_quickstart/meeting_controls.dart';
import 'package:videosdk_flutter_quickstart/participant_tile.dart';

class ILSSpeakerView extends StatefulWidget {
  final Room room;
  const ILSSpeakerView({super.key, required this.room});

  @override
  State<ILSSpeakerView> createState() => _ILSSpeakerViewState();
}

class _ILSSpeakerViewState extends State<ILSSpeakerView> {
  var micEnabled = true;
  var camEnabled = true;
  String hlsState = "HLS_STOPPED";

  Map<String, Participant> participants = {};

  @override
  void initState() {
    super.initState();
    //highlight-start
    //Setting up the event listeners and initializing the participants and hls state
    setMeetingEventListener();
    participants.putIfAbsent(
        widget.room.localParticipant.id, () => widget.room.localParticipant);
    //filtering the CONFERENCE participants to be shown in the grid
    widget.room.participants.values.forEach((participant) {
      if (participant.mode == Mode.CONFERENCE) {
        participants.putIfAbsent(participant.id, () => participant);
      }
    });
    hlsState = widget.room.hlsState;
    //highlight-end
  }

  @override
  void setState(VoidCallback fn) {
    if (mounted) {
      super.setState(fn);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                  child: Text(
                widget.room.id,
                style: const TextStyle(color: Colors.white),
              )),
              ElevatedButton(
                onPressed: () => {
                  Clipboard.setData(ClipboardData(text: widget.room.id)),
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                    content: Text("Meeting Id Coppied"),
                  ))
                },
                child: const Text("Copy Meeting Id"),
              ),
              const SizedBox(width: 10),
              ElevatedButton(
                onPressed: () => {widget.room.leave()},
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red,
                ),
                child: const Text("Leave"),
              )
            ],
          ),
          const SizedBox(
            height: 20,
          ),
          //highlight-start
          //Showing the current HLS state
          Text(
            "Current HLS State: ${hlsState == "HLS_STARTED" || hlsState == "HLS_PLAYABLE" ? "Livestream is Started" : hlsState == "HLS_STARTING" ? "Livestream is starting" : hlsState == "HLS_STOPPING" ? "Livestream is stopping" : "Livestream is stopped"}",
            style: const TextStyle(color: Colors.white),
          ),
          //highlight-end
          //render all participants in the room
          Expanded(
            child: GridView.builder(
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 1,
              ),
              itemBuilder: (context, index) {
                return ParticipantTile(
                    participant: participants.values.elementAt(index));
              },
              itemCount: participants.length,
            ),
          ),
          //Rending the meeting Controls
          MeetingControls(
            hlsState: hlsState,
            onToggleMicButtonPressed: () {
              micEnabled ? widget.room.muteMic() : widget.room.unmuteMic();
              micEnabled = !micEnabled;
            },
            onToggleCameraButtonPressed: () {
              camEnabled ? widget.room.disableCam() : widget.room.enableCam();
              camEnabled = !camEnabled;
            },
            //highlight-start
            //HLS handler which will start and stop HLS
            onHLSButtonPressed: () => {
              if (hlsState == "HLS_STOPPED")
                {
                  widget.room.startHls(config: {
                    "layout": {
                      "type": "SPOTLIGHT",
                      "priority": "PIN",
                      "GRID": 20,
                    },
                    "mode": "video-and-audio",
                    "theme": "DARK",
                    "quality": "high",
                    "orientation": "portrait",
                  })
                }
              else if (hlsState == "HLS_STARTED" || hlsState == "HLS_PLAYABLE")
                {widget.room.stopHls()}
            },
          //highlight-end
          ),
        ],
      ),
    );
  }

  //highlight-start
  // listening to room events for participants join, left and hls state changes
  void setMeetingEventListener() {
    widget.room.on(
      Events.participantJoined,
      (Participant participant) {
        //Adding only Conference participant to show in grid
        if (participant.mode == Mode.CONFERENCE) {
          setState(
            () => participants.putIfAbsent(participant.id, () => participant),
          );
        }
      },
    );

    widget.room.on(Events.participantLeft, (String participantId) {
      if (participants.containsKey(participantId)) {
        setState(
          () => participants.remove(participantId),
        );
      }
    });
    widget.room.on(
      Events.hlsStateChanged,
      (Map<String, dynamic> data) {
        setState(
          () => hlsState = data['status'],
        );
      },
    );
  }
  //highlight-end
}
```

#### Output of Speaker View

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_speaker_view.png" width="250"/>

### Step 5 : Implementing the Viewer View

Let's create `StatefulWidget` named `ILSViewerView` in the `ils_viewer_view.dart` file.

ILSViewerView will listen to the `hlsStateChanged` event and if the HLS is started, it will show the livestream using the `flutter_vlc_player` library.

```js title="ils_viewer_view.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './livestream_player.dart';

class ILSViewerView extends StatefulWidget {
  final Room room;
  const ILSViewerView({super.key, required this.room});

  @override
  State<ILSViewerView> createState() => _ILSViewerViewState();
}

class _ILSViewerViewState extends State<ILSViewerView> {
  String hlsState = "HLS_STOPPED";
  String? downstreamUrl;

  @override
  void initState() {
    super.initState();
    //highlight-start
    //initialize the room's hls state and hls's downstreamUrl
    hlsState = widget.room.hlsState;
    downstreamUrl = widget.room.hlsDownstreamUrl;
    //add the hlsStateChanged event listener
    setMeetingEventListener();
    //highlight-end
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(
                    child: Text(widget.room.id,
                        style: const TextStyle(color: Colors.white))),
                ElevatedButton(
                  onPressed: () =>
                      {Clipboard.setData(ClipboardData(text: widget.room.id))},
                  child: const Text("Copy Meeting Id"),
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: () => {widget.room.leave()},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                  ),
                  child: const Text("Leave"),
                )
              ],
            ),
          ),
          //highlight-start
          //Show the livestream player if the downstreamUrl is present
          downstreamUrl != null
              ? LivestreamPlayer(downstreamUrl: downstreamUrl!)
              : const Text("Host has not started the HLS",
                  style: TextStyle(color: Colors.white)),
          //highlight-end
        ],
      ),
    );
  }

  void setMeetingEventListener() {
    //highlight-start
    // listening to hlsStateChanged events and updating the hlsState and downstremUrl
    widget.room.on(
      Events.hlsStateChanged,
      (Map<String, dynamic> data) {
        String status = data['status'];
        if (mounted) {
          setState(() {
            hlsState = status;
            if (status == "HLS_PLAYABLE" || status == "HLS_STOPPED") {
              downstreamUrl = data['downstreamUrl'];
            }
          });
        }
      },
    );
    //highlight-end
  }
}
```

- Let us use the `flutter_vlc_player` library to play the HLS stream on the Viewer side. For these we will create a `StatefulWidget` named `LivestreamPlayer` in the `livestream_player.dart` file.

```js title="livestream_player.dart"
import 'package:flutter/material.dart';
import 'package:flutter_vlc_player/flutter_vlc_player.dart';

class LivestreamPlayer extends StatefulWidget {
  final String downstreamUrl;
  const LivestreamPlayer({
    Key? key,
    required this.downstreamUrl,
  }) : super(key: key);

  @override
  LivestreamPlayerState createState() => LivestreamPlayerState();
}

class LivestreamPlayerState extends State<LivestreamPlayer>
    with AutomaticKeepAliveClientMixin {
  late VlcPlayerController _controller;

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    //highlight-start
    //initializing the player
    _controller = VlcPlayerController.network(widget.downstreamUrl,
        options: VlcPlayerOptions());
        //highlight-end
  }

  @override
  void dispose() async {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    //highlight-start
    //rendering the VlcPlayer
    return VlcPlayer(
      controller: _controller,
      aspectRatio: 9 / 16,
      placeholder: const Center(child: CircularProgressIndicator()),
    );
    //highlight-end
  }
}
```

#### Output of Viewer View

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_viewer_view.png" width="250"/>

## Run and Test

The app is all set to test. Make sure to update the `token` in `api_call.dart`

Your app should look like this after the implementation.

#### Speaker View Output

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer controls autoplay loop playing muted url='https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_speaker_video.mp4' height="560px" width={"100%"}/>

</div>

#### Viewer View Output

<div style={{textAlign: 'center'}}>

<ReactPlayer controls autoplay loop playing muted url='https://cdn.videosdk.live/website-resources/docs-resources/flutter_ils_viewer_video.mp4' height="560px" width={"100%"}/>

</div>

<br/>

:::caution
If you get `webrtc/webrtc.h file not found` error at a runtime in ios then check solution [here](https://docs.videosdk.live/flutter/guide/video-and-audio-calling-api-sdk/known-issues#issue--1).
:::

:::tip
You can checkout the complete [quick start example here](https://github.com/videosdk-live/quickstart/tree/main/flutter-hls).
:::
