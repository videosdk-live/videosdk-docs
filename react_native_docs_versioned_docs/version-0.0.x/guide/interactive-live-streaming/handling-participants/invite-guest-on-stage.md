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

In this guide, we will see how you can request a viewer to join your livestream by using the `changeMode()`.

:::note
Before going forward in this guide, do make sure all the attendees join the meeting with mode as `VIEWER` and the host joins with mode as `CONFERENCE`
:::

Let's first have a look at how we will be using the `PubSub` mechanism to acheive the requesting and switching of the participant's mode.

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/invite_guest_pubsub.png)

### Step 1: Loading Viewer List

The host will see a list of participants who have joined as `VIEWER` along with a button that, when selected, will invite that user to join the livestream.

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

We have a Viewer list ready. Now, let us handle the click event for the Join Livestream button.

We will be using `CHANGE_MODE_$participantId` as the topic for PubSub.

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

After implementing the Host requesting viewer to join the livestream, let's display the viewer's request dialogue and switch the `VIEWER` mode to `CONFERENCE`.

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

We need to pin the participant so that he/she can appears on the livestream. To achieve this, we will listen to the callback on the `onParticipantModeChanged` of `useMeeting` hook.

```js
function MeetingView() {
  const mMeeting = useMeeting({});

  //We are using a reference to the meeting object because
  //While referencing it in the callbacks we want to use its latest state
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

If you want complete source code, you can checkout our [code sample](https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example)
:::

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useMeeting](/react-native/api/sdk-reference/use-meeting/introduction)
- [usePubSub](/react-native/api/sdk-reference/use-pubsub)
- [useParticipant](/react-native/api/sdk-reference/use-participant/introduction)
