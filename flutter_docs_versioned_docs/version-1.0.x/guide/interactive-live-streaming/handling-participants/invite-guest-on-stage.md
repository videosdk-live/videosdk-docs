---
title: Invite Guest on Stage - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Invite Guest on Stage
pagination_label: Invite Guest on Stage
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: invite-guest-on-stage
---

# Invite Guest on Stage

In this guide we will see how you can request a viewer to join your livestream by using the `changeMode()`.

:::note
Before going forward in this guide, do make sure all the attendees join the meeting with mode as `VIEWER` and the host joins with mode as `CONFERENCE`
:::

Let's first have a look at how we will be using the `PubSub` mechanism to acheive the requesting and switching of the participant's mode.

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/invite_guest_pubsub.png)

### Step 1: Loading Viewer List

The host will see a list of participants who have joined as `VIEWER` along with a button that, when selected, will invite that user to join the livestream.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class SpeakerScreen extends StatefulWidget {
  ...
}

class _SpeakerScreenState extends State<SpeakerScreen> {
  late Room room;

  Map<String, Participant> _attendees = {};

  @override
  void initState() {
    //highlight-next-line
    ...

    updateAttendees();

    setupRoomEventListener();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        //highlight-start
        //button which will show viewers list
        ElevatedButton(
            onPressed: () {
              showDialog(
                  context: context,
                  builder: (context) => AlertDialog(
                        content: ListView.builder(
                            itemCount: viewers.values.length,
                            itemBuilder: (builderContext, index) {
                              return Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Row(
                                  children: [
                                    Expanded(
                                        child: Text(viewers.values
                                            .elementAt(index)
                                            .displayName)),
                                    ElevatedButton(
                                        onPressed: () {

                                        },
                                        child: Text("Invite on Stage")),
                                  ],
                                ),
                              );
                            }),
                      ));
            },
            child: const Text("Invite Viewer on Stage"),
          ),
        //highlight-end
        ...
      ]
    );
  }

  //highlight-start
  void updateAttendees(){
    Map<String, Participant> attendees = {};
    if(room.localParticipant.mode == Mode.VIEWER);
    attendees.putIfAbsent(
        room.localParticipant.id, () => room.localParticipant);
    room.participants.values.forEach((participant) {
      if (participant.mode == Mode.VIEWER) {
        attendees.putIfAbsent(participant.id, () => participant);
      }
    });
    setState(()=>_attendees = attendees);
  }
  //highlight-end

  void setupRoomEventListener() {
    room.on(Events.roomJoined, () {
      //highlight-start
      updateAttendees();
      //highlight-end
    });

    room.on(Events.participantModeChanged, (Map<String, dynamic> data){
      //highlight-start
      updateAttendees()
      //highlight-end
    });

    room.on(Events.participantJoined, (Participant participant) {
      //highlight-start
      updateAttendees();
      //highlight-end
    });


    room.on(Events.participantLeft, (String participantId) {
      //highlight-start
      updateAttendees();
      //highlight-end
    });
  }
}
```

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_invite_guest_viewer_list.png" width="350" />

### Step 2: Requesting a Viewer to Join Livestream

We have a Viewer list ready. Now, let us handle the click event for the Join Livestream button.

We will be using `CHANGE_MODE_$participantId` as the topic for PubSub.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class SpeakerScreen extends StatefulWidget {
  ...
}

class _SpeakerScreenState extends State<SpeakerScreen> {
  late Room room;

  Map<String, Participant> _attendees = {};

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        ElevatedButton(
          onPressed: () {
            showDialog(
              context: context,
              builder: (context) => AlertDialog(
                  content: ListView.builder(
                      itemCount: viewers.values.length,
                      itemBuilder: (builderContext, index) {
                        return Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                            children: [
                              Expanded(
                                  child: Text(viewers.values
                                      .elementAt(index)
                                      .displayName)),
                              ElevatedButton(
                                  onPressed: () {
                                  //highlight-start
                                  //Publish the message on CHANGE_MODE_$participantId to join
                                  widget.room.pubSub.publish(
                                        "CHANGE_MODE_${viewers.values.elementAt(index).id}",
                                        "VIEWER");
                                  //highlight-end
                                  },
                                  child: Text("Invite on Stage")),
                            ],
                          ),
                        );
                      }),
                  ));
          },
          child: const Text("Invite Viewer on Stage"),
        ),
        ...
      ]
    );
  }

  void updateAttendees(){
    //highlight-next-line
    ...
  }

  void setupRoomEventListener() {
  //highlight-next-line
    ...
  }
}
```

### Step 3: Showing Viewer Request Dialog

After implementing the Host requesting viewer to join the livestream, let's display the viewer's request dialogue and switch the `VIEWER` mode to `CONFERENCE`.

```js
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:videosdk/videosdk.dart';
import './livestream_player.dart';

class ILSViewerView extends StatefulWidget {
  final Room room;
  //highlight-next-line
  ...
}

class _ILSViewerViewState extends State<ILSViewerView> {

  @override
  void initState() {
    super.initState();

    //highlight-start
    //subscribe to the change mode reequest topic
    widget.room.pubSub.subscribe(
        "CHANGE_MODE_${widget.room.localParticipant.id}",
        changeModeRequestHandler);
        //highlight-end
  }

  //highlight-start
  //show dialog to accept or reject when change mode requested by speaker
  void changeModeRequestHandler(PubSubMessage message) {
    if (mounted) {
      showDialog(
          context: this.context,
          builder: (context) {
            return AlertDialog(
              actions: [
                ElevatedButton(
                  onPressed: () {
                    widget.room.changeMode(Mode.CONFERENCE);
                    Navigator.of(context).pop();
                  },
                  child: const Text("Accept"),
                ),
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: const Text("Reject"),
                )
              ],
              content:
                  Text("${message.senderName} requestd you to join livestream"),
            );
          });
    }
  }
  //highlight-end

  @override
  Widget build(BuildContext context) {
    return YourViewerWidget;
  }

  //highlight-start
  @override
  void dispose() {
    widget.room.pubSub.unsubscribe(
        "CHANGE_MODE_${widget.room.localParticipant.id}",
        changeModeRequestHandler);
    super.dispose();
  }
  //highlight-start
}

```

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_invite_guest_join_request.png" width="350" />

### Step 4: Pin the participant

We need to pin the participant so that he/she can appears on the livestream. To achieve this, we will listen to the callback on the `participantModeChanged` of `Room` object. Here, we are already calling the `updateAttendees()` which we will update to pin only the `CONFERENCE` mode participants.

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class SpeakerScreen extends StatefulWidget {
  ...
}

class _SpeakerScreenState extends State<SpeakerScreen> {
  late Room room;

  Map<String, Participant> _attendees = {};

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children:[
        //highlight-next-line
        ...
      ]
    );
  }

  void updateAttendees(){
    Map<String, Participant> attendees = {};
    //highlight-start
    //we will pin localparticiant if mode is CONFERENCE
    if(room.localParticipant.mode == Mode.VIEWER);{
      attendees.putIfAbsent(
          room.localParticipant.id, () => room.localParticipant);
      room.localParticipant.unpin();
    }else{
      room.localParticipant.pin();
    }
      //highlight-end
    room.participants.values.forEach((participant) {
      if (participant.mode == Mode.VIEWER) {
        attendees.putIfAbsent(participant.id, () => participant);
        //highlight-next-line
        participant.unpin();
      }
    });
    setState(()=>_attendees = attendees);
  }

}
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/flutter_invite_guest_video.mp4" height="500px" width={"100%"} />

</div>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [Room](/flutter/api/sdk-reference/room-class/introduction)
- [PubSub](/flutter/api/sdk-reference/pubsub-class/introduction)
- [changeMode](/flutter/api/sdk-reference/room-class/methods#changemode)
