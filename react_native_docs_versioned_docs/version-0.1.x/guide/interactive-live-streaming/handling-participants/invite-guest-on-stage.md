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

# Invite Guest on Stage - React Native

This guide explains the process of inviting a viewer to join a livestream using the `changeMode()` method.

:::note
Before proceeding with this guide, ensure that all attendees join the meeting with the mode set to `VIEWER`, while the host joins with the mode set to `CONFERENCE`.
:::

The diagram below illustrates the utilization of the `PubSub` mechanism to facilitate the requesting and switching of the participant's mode.

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/invite_guest_pubsub.png)

### Step 1: Loading the Viewer List

First, the host will be presented with a list of participants who have joined as `VIEWER`, accompanied by a button that, when selected, will invite that user to join the livestream.

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";
import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";

function MeetingView() {
  return (
    <>
      <Text>Viewer List</Text>
      <ViewerList />
    </>
  );
}
function ViewerList() {
  const { participants } = useMeeting();

  //Filtering only viewer participant
  //highlight-start
  const viewers = [...participants.values()].filter((participant) => {
    return participant.mode == Constants.modes.VIEWER;
  });
  //highlight-end

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {viewers.map((participant) => {
        return <ViewerListItem participantId={participant.id} />;
      })}
    </SafeAreaView>
  );
}
function ViewerListItem({ participantId }) {
  const { displayName } = useParticipant(participantId);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <Text>{displayName}</Text>
      <TouchableOpacity
        style={{
          marginLeft: 12,
          borderWidth: 1,
          borderRadius: 12,
          padding: 12,
        }}
      >
        <Text>Request to join Livestream</Text>
      </TouchableOpacity>
    </View>
  );
}
```

<img src="https://cdn.videosdk.live/website-resources/docs-resources/rn_ils_request_to_join.png" width="350" />

### Step 2: Requesting a Viewer to Join Livestream

Now, with the Viewer list in place, handle the click event for the "Join Livestream" button by utilizing `CHANGE_MODE_$participantId` as the topic for PubSub.

```js
import { usePubSub } from "@videosdk.live/react-native-sdk";

function ViewerListItem({ participantId }) {
  const { displayName } = useParticipant(participantId);
  const { publish } = usePubSub(`CHANGE_MODE_${participantId}`);

  //Publishing the pubsub message with new mode
  //highlight-start
  const onClickRequestJoinLiveStream = () => {
    publish({
      mode: "VIEWER",
    });
  };
  //highlight-end

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <Text>{displayName}</Text>
      <TouchableOpacity
        onPress={() => {
          onClickRequestJoinLiveStream();
        }}
        style={{
          marginLeft: 12,
          borderWidth: 1,
          borderRadius: 12,
          padding: 12,
        }}
      >
        <Text>Request to join Livestream</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### Step 3: Showing Viewer Request Dialog

After implementing the host's request for a viewer to join the livestream, display the viewer's request dialogue and switch the mode from `VIEWER` to `CONFERENCE`.

```js
import { usePubSub } from "@videosdk.live/react-native-sdk";
import Video from "react-native-video";
import { Alert } from "react-native";

function ViewerView({}) {
  const { hlsState, hlsUrls, localParticipantId, changeMode } = useMeeting();

  usePubSub(`CHANGE_MODE_${localParticipantId}`, {
    onMessageReceived: (data) => {
      const { message, senderName } = data;
      if (message.mode === "CONFERENCE") {
        showAlert(senderName);
      }
    },
  });

  const showAlert = (senderName) => {
    Alert.alert(
      "Permission",
      `${senderName} has requested you to join as a speaker`,
      [
        {
          text: "Reject",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Accept",
          onPress: () => {
            changeMode("CONFERENCE");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {hlsState == "HLS_PLAYABLE" ? (
        <>
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
          <Text style={{ fontSize: 20 }}>
            HLS is not started yet or is stopped
          </Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}
```

<img src="https://cdn.videosdk.live/website-resources/docs-resources/flutter_invite_guest_join_request.png" width="350" />

### Step 4: Pin the participant

To ensure the participant appears on the livestream, they have to be pinned. This can be achieved by listening to the callback on the `onParticipantModeChanged` event of the `useMeeting` hook.

```js
function MeetingView() {
  const mMeeting = useMeeting({});

  ///Here a reference to the meeting object is used because
  //while referencing it in the callbacks its latest state has to be obtained.
  const mMeetingRef = useRef();

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  const { localParticipant, changeMode } = useMeeting({
    onParticipantModeChanged: ({ participantId, mode }) => {
      const localParticipant = mMeetingRef.current?.localParticipant;

      if (participantId == localParticipant.id) {
        if (mode == "CONFERENCE") {
          localParticipant.pin();
        } else {
          localParticipant.unpin();
        }
      }
    },
  });

  return <>...</>;
}
```

:::tip

For the complete source code, you can checkout our [code sample](https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example)
:::

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useMeeting](/react-native/api/sdk-reference/use-meeting/introduction)
- [usePubSub](/react-native/api/sdk-reference/use-pubsub)
- [useParticipant](/react-native/api/sdk-reference/use-participant/introduction)
