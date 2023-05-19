---
title: Screen Share for Desktop apps| Video SDK
hide_title: true
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Screen Share for Desktop apps
pagination_label: Screen Share for Desktop apps
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screen-share-desktop
---

# Screen Share for Desktop apps

Screen sharing in a meeting is the process of sharing your device screen with other participants in the meeting. It allows everyone in the meeting to see exactly what you are seeing on your screen, which can be helpful for presentations, demonstrations, or collaborations.

### `getScreenShareSources()`

- `getScreenShareSources()` method will help you to list down all available screens and opened windows.

- This method will return a list of `DesktopCapturerSource` objects which will contain the `name`, `thumbnail` and `type` for the source.

#### Example

```javascript
meeting.getScreenShareSources().then((value) => print("Sources : $value"));
```

### `enableScreenShare()`

- By using `enableScreenShare()` function of `Room` object, local participant can share his/her screen or window to other participants.

- `enableScreenShare()` will take the `DesktopCapturerSource` object as parameter to which you want to share the particular source(screen or window).

- Screen Share stream of the participant can be accessed from the `streams` property of `Participant` object.

### `disableScreenShare()`

- By using `disableScreenShare()` function of `Room` object, local participant can stop sharing his/her screen or window to other participants.

### Example

#### Step 1 : Create source selection dialogue

- Create dialog box for selecting a screen or window to share during a meeting. It retrieves the available sources using `getScreenShareSources()` method, allows the user to select a source, and provides buttons to share or cancel the selection. 

```jsx title="screen_select_dialog.dart"
import 'package:flutter/material.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';
import 'package:videosdk/videosdk.dart';
import 'tab_widget.dart';

// ignore: must_be_immutable
class ScreenSelectDialog extends Dialog {
  ScreenSelectDialog({Key? key, required this.room}) : super(key: key) {
    // get all available screen sources
    //highlight-next-line
    room.getScreenShareSources().then((value) => _setSources(value));
  }

  void _setSources(List<DesktopCapturerSource> source) {
    _sources = source;
    _stateSetter?.call(() {});
  }

  List<DesktopCapturerSource> _sources = [];
  SourceType _sourceType = SourceType.Screen;
  DesktopCapturerSource? _selected_source;
  StateSetter? _stateSetter;
  final Room room;

  void _share(context) async {
    // close the dialog and pass the selected source back to the caller.
    //highlight-next-line
    Navigator.pop<DesktopCapturerSource>(context, _selected_source);
  }

  void _cancel(context) async {
    // close the dialog and pass null as selected source back to the caller
    //highlight-next-line
    Navigator.pop<DesktopCapturerSource>(context, null);
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      type: MaterialType.transparency,
      child: Center(
          child: Container(
        width: 640,
        height: 560,
        color: Colors.white,
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(10),
              child: Stack(
                children: <Widget>[
                  const Align(
                    alignment: Alignment.topLeft,
                    child: Text(
                      'Choose what to share',
                      style: TextStyle(fontSize: 16, color: Colors.black87),
                    ),
                  ),
                  Align(
                    alignment: Alignment.topRight,
                    child: InkWell(
                      child: const Icon(Icons.close),
                      onTap: () => _cancel(context),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              flex: 1,
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(10),
                child: StatefulBuilder(
                  builder: (context, setState) {
                    if (context.mounted) {
                      _stateSetter = setState;
                    }
                    return TabWidget(sources: _sources,onSourceChange: onSourceChange,);
                  },
                ),
              ),
            ),
            SizedBox(
              width: double.infinity,
              child: ButtonBar(
                children: <Widget>[
                  MaterialButton(
                    child: const Text(
                      'Cancel',
                      style: TextStyle(color: Colors.black54),
                    ),
                    onPressed: () {
                      _cancel(context);
                    },
                  ),
                  MaterialButton(
                    color: Theme.of(context).primaryColor,
                    child: const Text(
                      'Share',
                    ),
                    onPressed: () {
                      _share(context);
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      )),
    );
  }
}
```

```jsx title="tab_widget.dart"
import 'package:flutter/material.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';
import 'thumbnail_widget.dart';

class TabWidget extends StatefulWidget {
  const TabWidget({
    Key? key,
    required List<DesktopCapturerSource> sources,
    required this.onSourceChange
  }) : _sources = sources, super(key: key);

  final List<DesktopCapturerSource> _sources;
  final ValueChanged<DesktopCapturerSource?> onSourceChange;

  @override
  State<TabWidget> createState() => _TabWidgetState();
}

class _TabWidgetState extends State<TabWidget> {
  SourceType _sourceType = SourceType.Screen;

  DesktopCapturerSource? _selectedSource;

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Column(
        children: <Widget>[
          Container(
            constraints:
                const BoxConstraints.expand(height: 24),
            child: TabBar(
                onTap: (value) => _sourceType = value == 0
                    ? SourceType.Screen
                    : SourceType.Window,
                tabs: const [
                  Tab(
                      child: Text(
                    'Entire Screen',
                    style: TextStyle(color: Colors.black54),
                  )),
                  Tab(
                      child: Text(
                    'Window',
                    style: TextStyle(color: Colors.black54),
                  )),
                ]),
          ),
          const SizedBox(
            height: 2,
          ),
          Expanded(
            child: TabBarView(children: [
              Align(
                  alignment: Alignment.center,
                  child: GridView.count(
                    crossAxisSpacing: 8,
                    crossAxisCount: 2,
                    children: widget._sources
                        .asMap()
                        .entries
                        .where((element) =>
                            element.value.type ==
                            SourceType.Screen)
                        .map((e) => ThumbnailWidget(
                              onTap: (source) {
                                if (context.mounted) {
                                  setState(() {
                                    _selectedSource = source;
                                    widget.onSourceChange(_selectedSource);
                                  });
                                }
                              },
                              source: e.value,
                              selected: _selectedSource?.id ==
                                 e.value.id,
                            ))
                        .toList(),
                  )),
              Align(
                  alignment: Alignment.center,
                  child: GridView.count(
                    crossAxisSpacing: 8,
                    crossAxisCount: 3,
                    children: widget._sources
                        .asMap()
                        .entries
                        .where((element) =>
                            element.value.type ==
                            SourceType.Window)
                        .map((e) => ThumbnailWidget(
                              onTap: (source) {
                                if (context.mounted) {
                                  setState(() {
                                    _selectedSource = source;
                                    widget.onSourceChange(_selectedSource);
                                  });
                                }
                              },
                              source: e.value,
                              selected: _selectedSource?.id ==
                                  e.value.id,
                            ))
                        .toList(),
                  )),
            ]),
          )
        ],
      ),
    );
  }
}
```

```jsx title="thumbnail_widget.dart"
import 'package:flutter/material.dart';
import 'package:flutter_webrtc/flutter_webrtc.dart';

class ThumbnailWidget extends StatefulWidget {
  const ThumbnailWidget(
      {Key? key,
      required this.source,
      required this.selected,
      required this.onTap})
      : super(key: key);
  final DesktopCapturerSource source;
  final bool selected;
  final Function(DesktopCapturerSource) onTap;

  @override
  _ThumbnailWidgetState createState() => _ThumbnailWidgetState();
}

class _ThumbnailWidgetState extends State<ThumbnailWidget> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
            child: Container(
          decoration: widget.selected
              ? BoxDecoration(
                  border: Border.all(width: 2, color: Colors.blueAccent))
              : null,
          child: InkWell(
            onTap: () {
              widget.onTap(widget.source);
            },
            child: widget.source.thumbnail != null
                ? Image.memory(
                    widget.source.thumbnail!,
                    gaplessPlayback: true,
                    alignment: Alignment.center,
                  )
                : Container(),
          ),
        )),
        Text(
          widget.source.name,
          style: TextStyle(
              fontSize: 12,
              color: Colors.black87,
              fontWeight:
                  widget.selected ? FontWeight.bold : FontWeight.normal),
        ),
      ],
    );
  }
}
```

#### Step 2 : Pass selected source to `enableScreenShare()` method

- Show the screen sharing source selection dialogue that we created in step 1 and start screenShare by using the `_room.enableScreenShare()` method with the chosen source.

```jsx title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import 'screen_select_dialog.dart';

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room _room;

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        //highlight-start
        ElevatedButton(
          onPressed:(){
            // check platform and start screenShare with selected source
            if (!kIsWeb && (Platform.isWindows || Platform.isMacOS)) {
                selectScreenSourceDialog(context).then((value) => {
                    if (value != null)
                      {_room.enableScreenShare(value)}
                });
            }
          },
          child: const Text("Enable Screen Share"),
        ),
        ElevatedButton(
          onPressed:(){
            _room.disableScreenShare();
          },
          child: const Text("Disable Screen Share"),
        ),
    //highlight-end
      ]
    );
  }

  Future<DesktopCapturerSource?> selectScreenSourceDialog(
      BuildContext context) async {
    // return selected source which is returned from the dialog 
    //highlight-start
    final source = await showDialog<DesktopCapturerSource>(
      context: context,
      builder: (context) => ScreenSelectDialog(
        room: _room,
      ),
    );
    return source;
    //highlight-end
  }
}
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer muted controls autoplay loop playing url="https://cdn.videosdk.live/website-resources/docs-resources/flutter_screenShare_desktop_video.mp4" height="500px" width={"100%"} />

</div>

<br/>

:::note

If you do not pass a `DesktopCapturerSource` object to the `enableScreenShare()` method, by default SDK will choose your entire screen to share.

:::

### Rendering Screen Share Stream

1. To render the screenshare, you will need the `participantId` who is presenting the screen, which can be found from the `presenterId` property of `Room` object.

We will listen for the `Events.presenterChanged` on `Room` object to check if some other participant starts screen share, `Events.streamEnabled` and `Events.streamDisabled` on the `localParticipant`'s object to identify if the local participant is presenting or not.

```js title="meeting_screen.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';
import './screen_share_view.dart';

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
  String? _presenterId;


  @override
  void initState() {
    // create room
    _room = VideoSDK.createRoom(
      roomId: widget.meetingId,
      token: widget.token,
      displayName: "John Doe",
      micEnabled: true,
      camEnabled: true,
      defaultCameraIndex:
          1, // Index of MediaDevices will be used to set default camera
    );

    setMeetingEventListener();

    // Join room
    _room.join();

    super.initState();
  }

  // listening to meeting events
  void setMeetingEventListener() {
    _room.on(Events.roomLeft, () {
      participants.clear();
      Navigator.popUntil(context, ModalRoute.withName('/'));
    });
    //highlight-start
    //Listening if remote participant starts presenting
    _room.on(Events.presenterChanged, (String? presenterId) {
      setState(() => {_presenterId = presenterId});
    });

    //Listening if local participant starts presenting
    _room.localParticipant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == "share") {
        setState(() => {_presenterId = _room.localParticipant.id});
      }
    });

    _room.localParticipant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == "share") {
        setState(() => {_presenterId = null});
      }
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
        appBar: AppBar(
          title: const Text('VideoSDK QuickStart'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Text(widget.meetingId),
              //highlight-start
              //we will render the screenshare view if the presenterId is not null
              if (_presenterId != null)
                ScreenShareView(
                  participant: _presenterId == _room.localParticipant.id
                      ? _room.localParticipant
                      : _room.participants[_presenterId],
                ),
                //highlight-end
              ElevatedButton(
                  onPressed: () {
                    if (_presenterId != null) {
                      _room.disableScreenShare();
                    } else {
                      _room.enableScreenShare();
                    }
                  },
                  child: const Text('Toggle Screnshare')),
            ],
          ),
        ),
      ),
    );
  }
}

```

2. Now that we know if there is an active presenter, let us get the screen share stream from the `Participant` object and render it.

```js title="screen_share_view.dart"
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ScreenShareView extends StatelessWidget {
  final Participant? participant;

  ScreenShareView({super.key, required this.participant}) {
    //highlight-start
  //intialize the shareStream
    participant?.streams.forEach((key, value) {
      if (value.kind == "share") {
        shareStream = value;
      }
    });
    //highlight-end
  }
  Stream? shareStream;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.grey.shade800,
      height: 300,
      width: 200,
      //highlight-start
      //show the screen share stream
      child: shareStream != null
          ? RTCVideoView(
              shareStream?.renderer as RTCVideoRenderer,
              objectFit: RTCVideoViewObjectFit.RTCVideoViewObjectFitCover,
            )
          : null,
          //highlight-end
    );
  }
}
```

### Events associated with enableScreenShare

- Every Participant will receive a callback on [`Events.streamEnabled`](/flutter/api/sdk-reference/participant-class/events#streamenabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Remote Participant will receive [`Events.presenterChanged`](/flutter/api/sdk-reference/room-class/events#presenterchanged) callback on the [`Room`](/flutter/api/sdk-reference/room-class/introduction) object with the participantId as `presenterId` who started the screen share.

### Events associated with disableScreenShare

- Every Participant will receive a callback on [`Events.streamDisabled`](/flutter/api/sdk-reference/participant-class/events#streamdisabled) of the [`Participant`](/flutter/api/sdk-reference/participant-class/introduction) object with `Stream` object.

- Every Remote Participant will receive [`Events.presenterChanged`](/flutter/api/sdk-reference/room-class/events#presenterchanged) callback on the [`Room`](/flutter/api/sdk-reference/room-class/introduction) object with the `presenterId` as `null`.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  ...
}

class _ParticipantTileState extends State<ParticipantTile> {

  @override
  void initState() {
    ...

    //highlight-next-line
    _initStreamListeners();
    super.initState();
  }

  //highlight-start
  //Change state according to the events received
  _initStreamListeners() {
    widget.participant.on(Events.streamEnabled, (Stream stream) {
      if (stream.kind == 'share') {
        //Screen share Turned On
      }
    });

    widget.participant.on(Events.streamDisabled, (Stream stream) {
      if (stream.kind == 'share') {
        //Screen Share Turned Off
      }
    });
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return YourParticipantWidget();
  }
}

class MeetingScreen extends StatefulWidget {
  ...
}

class _MeetingScreenState extends State<MeetingScreen> {
  late Room room;

  @override
  void initState() {
    //highlight-next-line
    ...

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return YourMeetingWidget();
  }

  //highlight-start
  void setupRoomEventListener() {

    room.on(Events.presenterChanged, (String? presenterId) {
      //Room screen presenter has changed
      //Participant ID of current presenter is presenterId
    });
  }
  //highlight-end
}
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [enableScreenShare()](/flutter/api/sdk-reference/room-class/methods#enablescreenshare)
- [disableScreenShare()](/flutter/api/sdk-reference/room-class/methods#disablescreenshare)
- [Events.streamEnabled](/flutter/api/sdk-reference/participant-class/events#streamenabled)
- [Events.streamDisabled](/flutter/api/sdk-reference/participant-class/events#streamdisabled)
