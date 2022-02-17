---
title: Quick Start with Flutter
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with Flutter
pagination_label: Quick Start with Flutter
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Sample Project

These quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](/). Once you are done with the tutorial given below your app should look like this.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

* Flutter SDK installed
* A valid VideoSDK account.
* An active VideoSDK project with temporary token. For details, see [Signup & Create API Key](/android/guide/video-and-audio-calling-api-sdk/signup-and-create-api).

## Project Setup

Follow the steps to create the environment necessary to add video call into your app.

1. Create a new Flutter project.

2. Once the Flutter project is created, run the following command to add Flutter VideoSDK to the project.

```js
$ flutter pub add videosdk

//run this command to add http library inorder create meeting id
$ flutter pub add http
```

This will add a line like this to your package's pubspec.yaml (and run an implicit flutter pub get):
```js
dependencies:
  videosdk: ^0.0.8
```

3. Update the `AndroidManifest.xml` for the permissions list we will be using to implement the audio and video features. You can find the `AndroidManifest.xml` file at `<project root>/android/app/src/main/AndroidManifest.xml`

```js title="AndroidManifest.xml"
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

4. Also you will need to set your build settings to Java 8, because official WebRTC jar now uses static methods in `EglBase` interface. Just add this to your app level `build.gradle`

```js
android {
    //...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

5. If necessary, in the same `build.gradle` you will need to increase `minSdkVersion` of `defaultConfig` up to `21` (currently default Flutter generator set it to `16`).

## Implementing the VideoSDK

### Creating the Joining Screen

The Joining screen will consist of:
1. Create Button - This button will create a new meeting for you.
2. TextField for Meeting ID - This textfield will contain the meeting ID you want to join.
2. Join Button - This buttom will join the meeting with which the you will be joined.

1. Create a new dart file `join_screen.dart` which will contain our Stateful Widget anemd `JoinScreen`.

Replace the `_token` with the sample token you generated from the VideoSDK Dashboard.

```js title="join_screen.dart"
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:videosdk_flutter_quickstart/meeting_screen.dart';

class JoinScreen extends StatefulWidget {
  const JoinScreen({Key? key}) : super(key: key);

  @override
  _JoinScreenState createState() => _JoinScreenState();
}

class _JoinScreenState extends State<JoinScreen> {
  //Repalce the token wiht the sample token you generated from the VideoSDK Dashboard
  String _token ="";

  String _meetingID = "";

  @override
  Widget build(BuildContext context) {
    final ButtonStyle _buttonStyle = TextButton.styleFrom(
      primary: Colors.white,
      backgroundColor: Theme.of(context).primaryColor,
      textStyle: const TextStyle(
        fontWeight: FontWeight.bold,
      ),
    );
    return Scaffold(
      appBar: AppBar(
        title: const Text("VideoSDK RTC"),
      ),
      backgroundColor: Theme.of(context).backgroundColor,
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextButton(
              style: _buttonStyle,
              onPressed: () async {
                _meetingID = await createMeeting();
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MeetingScreen(
                      token: _token,
                      meetingId: _meetingID,
                      displayName: "John Doe",
                    ),
                  ),
                );
              },
              child: const Text("CREATE MEETING"),
            ),
            SizedBox(height: 20),
            const Text(
              "OR",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.white,
                fontSize: 24,
              ),
            ),
            SizedBox(height: 20),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: TextField(
                onChanged: (meetingID) => _meetingID = meetingID,
                decoration: InputDecoration(
                  border: const OutlineInputBorder(),
                  fillColor: Theme.of(context).primaryColor,
                  labelText: "Enter Meeting ID",
                  hintText: "Meeting ID",
                  prefixIcon: const Icon(
                    Icons.keyboard,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            SizedBox(height: 20),
            TextButton(
              onPressed: () async {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MeetingScreen(
                      meetingId: _meetingID,
                      token: _token,
                      displayName: "John Doe",
                    ),
                  ),
                );
              },
              style: _buttonStyle,
              child: const Text("JOIN MEETING"),
            )
          ],
        ),
      ),
    );
  }
}
```

2. Add the `createMeeting()` in the `JoinScreen` which will generate a new meeting id.

```js title="join_screen.dart"
class _JoinScreenState extends State<JoinScreen> {  

  //...other variables

  //...build method

  Future<String> createMeeting() async {
    final Uri getMeetingIdUrl =
        Uri.parse('https://api.videosdk.live/v1/meetings');
    final http.Response meetingIdResponse =
        await http.post(getMeetingIdUrl, headers: {
      "Authorization": _token,
    });

    final meetingId = json.decode(meetingIdResponse.body)['meetingId'];
    return meetingId;
  }
}
```

3. Make the `JoinScreen` as your home in the `main.dart` as shown below.

```js title="main.dart"
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: JoinScreen(), //change to this
    );
  }
}
```

4. The Joining screen is all setup. Now lets create the `MeetingScreen`.

### Creating the Meeting Screen

1. Create a new `meeting_screen.dart` which will have a Stateful widget named `MeetingScreen`.

```js title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';
import 'package:videosdk_flutter_quickstart/join_screen.dart';
import 'package:videosdk_flutter_quickstart/participant_grid_view.dart';

class MeetingScreen extends StatefulWidget {

  //add the following parameters for your MeetingScreen

  final String meetingId, token, displayName; 
  final bool micEnabled, webcamEnabled;
  const MeetingScreen({
    Key? key,
    required this.meetingId,
    required this.token,
    required this.displayName,
    this.micEnabled = true,
    this.webcamEnabled = true
  }) : super(key: key);

  @override
  _MeetingScreenState createState() => _MeetingScreenState();
}

class _MeetingScreenState extends State<MeetingScreen> {

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

2. Now we will update `_MeetingScreenState` to use the `MeetingBuilder` to create our meeting.

```js title="meeting_screen.dart"
class _MeetingScreenState extends State<MeetingScreen> {
  Meeting? meeting;

  Stream? videoStream;
  Stream? audioStream;

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: _onWillPopScope,
      child: MeetingBuilder(
        meetingId: widget.meetingId,
        displayName: widget.displayName,
        token: widget.token,
        micEnabled: widget.micEnabled,
        webcamEnabled: widget.webcamEnabled,
        notification: const NotificationInfo(
          title: "Video SDK",
          message: "Video SDK is sharing screen in the meeting",
          icon: "notification_share", // drawable icon name
        ),
        builder: (_meeting) {
          // Called when joined in meeting
          _meeting.on(
            Events.meetingJoined,
            () {
              setState(() {
                meeting = _meeting;
              });

              // Setting meeting event listeners
              setMeetingListeners(_meeting);
            },
          );

          // Showing waiting screen
          if (meeting == null) {
            return Scaffold(
              body: Center(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const CircularProgressIndicator(),
                    SizedBox(height: 20),
                    const Text("waiting to join meeting"),
                  ],
                ),
              ),
            );
          }

          return Scaffold(
            backgroundColor: Theme.of(context).backgroundColor.withOpacity(0.8),
            appBar: AppBar(
              title: Text(widget.meetingId),
            ),
            body: Column(
              children: [

                //Grid which will show all the participants in the meeting
                Expanded(
                  child: ParticipantGridView(meeting: meeting!),
                ),

                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    //Button to toggle mic
                    ElevatedButton(
                      onPressed: () => {
                        if (audioStream != null)
                          {_meeting.muteMic()}
                        else
                          {_meeting.unmuteMic()}
                      },
                      child: Text("Mic"),
                    ),

                    //Button to toggle webcam
                    ElevatedButton(
                      onPressed: () => {
                        if (videoStream != null)
                          {_meeting.disableWebcam()}
                        else
                          {_meeting.enableWebcam()}
                      },
                      child: Text("Webcam"),
                    ),

                    //Button to leave meeting
                    ElevatedButton(
                      onPressed: () => {_meeting.leave()},
                      child: Text("Leave"),
                    ),
                  ],
                )
              ],
            ),
          );
        },
      ),
    );
  }
}
```

3. Add the `setMeetingListeners()` we used in the joined event of the meeting. Also add the `_onWillPopScope()` which will handle the meeting leave part on back press.

```js title="meeting_screen.dart"
class _MeetingScreenState extends State<MeetingScreen> {

  //...other declarations

  //...build method

  void setMeetingListeners(Meeting meeting) {
    // Called when meeting is ended
    meeting.on(Events.meetingLeft, () {
      Navigator.pushAndRemoveUntil(
          context,
          MaterialPageRoute(builder: (context) => const JoinScreen()),
          (route) => false);
    });

    // Called when stream is enabled
    meeting.localParticipant.on(Events.streamEnabled, (Stream _stream) {
      if (_stream.kind == 'video') {
        setState(() {
          videoStream = _stream;
        });
      } else if (_stream.kind == 'audio') {
        setState(() {
          audioStream = _stream;
        });
      }
    });

    // Called when stream is disabled
    meeting.localParticipant.on(Events.streamDisabled, (Stream _stream) {
      if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
        setState(() {
          videoStream = null;
        });
      } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
        setState(() {
          audioStream = null;
        });
      }
    });
  }

  Future<bool> _onWillPopScope() async {
    meeting?.leave();
    return true;
  }
}
```

4. Next we will be creating the `ParticipantGridView` which will be used to show the participants view.

```js title="participant_grid_view.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';

import 'participant_tile.dart';

class ParticipantGridView extends StatefulWidget {
  final Meeting meeting;
  const ParticipantGridView({
    Key? key,
    required this.meeting,
  }) : super(key: key);

  @override
  State<ParticipantGridView> createState() => _ParticipantGridViewState();
}

class _ParticipantGridViewState extends State<ParticipantGridView> {
  Participant? localParticipant;
  Map<String, Participant> participants = {};

  @override
  void initState() {
    // Initialize participants
    localParticipant = widget.meeting.localParticipant;
    participants = widget.meeting.participants;

    // Setting meeting event listeners
    setMeetingListeners(widget.meeting);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,
      children: [
        ParticipantTile(
          participant: localParticipant!,
          isLocalParticipant: true,
        ),
        ...participants.values
            .map((participant) => ParticipantTile(participant: participant))
            .toList()
      ],
    );
  }

  void setMeetingListeners(Meeting _meeting) {
    // Called when participant joined meeting
    _meeting.on(
      Events.participantJoined,
      (Participant participant) {
        final newParticipants = participants;
        newParticipants[participant.id] = participant;
        setState(() {
          participants = newParticipants;
        });
      },
    );

    // Called when participant left meeting
    _meeting.on(
      Events.participantLeft,
      (participantId) {
        final newParticipants = participants;

        newParticipants.remove(participantId);
        setState(() {
          participants = newParticipants;
        });
      },
    );
  }
}
```

5. Creating the `ParticipantTile` which will be placed inside the GridView.

```js title="participant_tile.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  final bool isLocalParticipant;
  const ParticipantTile(
      {Key? key, required this.participant, this.isLocalParticipant = false})
      : super(key: key);

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {
  Stream? videoStream;
  Stream? audioStream;

  bool shouldRenderVideo = true;

  @override
  void initState() {
    _initStreamListeners();
    super.initState();

    //initialize the participants stream
    widget.participant.streams.forEach((key, Stream stream) {
      setState(() {
        if (stream.kind == 'video') {
          videoStream = stream;
        } else if (stream.kind == 'audio') {
          audioStream = stream;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(4.0),
      decoration: BoxDecoration(
        color: Theme.of(context).backgroundColor.withOpacity(1),
        border: Border.all(
          color: Colors.white38,
        ),
      ),
      child: AspectRatio(
        aspectRatio: 1,
        child: Padding(
          padding: const EdgeInsets.all(4.0),
          child: Stack(
            children: [
              //Render the Video of the Participant
              videoStream != null && shouldRenderVideo
                  ? RTCVideoView(
                      videoStream?.renderer as RTCVideoRenderer,
                      objectFit:
                          RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
                    )
                  : const Center(
                      child: Icon(
                        Icons.person,
                        size: 180.0,
                        color: Color.fromARGB(140, 255, 255, 255),
                      ),
                    ),
              Positioned(
                bottom: 0,
                left: 0,
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  child: Container(
                    padding: const EdgeInsets.all(2.0),
                    decoration: BoxDecoration(
                      color: Theme.of(context).backgroundColor.withOpacity(0.2),
                      border: Border.all(
                        color: Colors.white24,
                      ),
                      borderRadius: BorderRadius.circular(4.0),
                    ),
                    child: Text(
                      widget.participant.displayName,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 10.0,
                      ),
                    ),
                  ),
                ),
              ),
              Positioned(
                  top: 0,
                  left: 0,
                  child: InkWell(
                    child: Container(
                      padding: const EdgeInsets.all(4),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: audioStream != null
                            ? Theme.of(context).backgroundColor
                            : Colors.red,
                      ),
                      child: Icon(
                        audioStream != null ? Icons.mic : Icons.mic_off,
                        size: 16,
                      ),
                    )
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  //Adding listeners for the participants stream change
  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video') {
          videoStream = _stream;
        } else if (_stream.kind == 'audio') {
          audioStream = _stream;
        }
      });
    });

    widget.participant.on(Events.streamDisabled, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
          videoStream = null;
        } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
          audioStream = null;
        }
      });
    });

    widget.participant.on(Events.streamPaused, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
          videoStream = _stream;
        } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
          audioStream = _stream;
        }
      });
    });

    widget.participant.on(Events.streamResumed, (Stream _stream) {
      setState(() {
        if (_stream.kind == 'video' && videoStream?.id == _stream.id) {
          videoStream = _stream;
        } else if (_stream.kind == 'audio' && audioStream?.id == _stream.id) {
          audioStream = _stream;
        }
      });
    });
  }
}
```

5. You are all set to run and test the app.

### Run and Test

The app is all set to test. Make sure to update teh `_token` in `join_screen.dart`

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/flutter/guide/video-and-audio-calling-api-sdk/server-setup).
:::