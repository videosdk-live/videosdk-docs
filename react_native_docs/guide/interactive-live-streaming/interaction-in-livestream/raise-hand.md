---
title: Raise Hand with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Raise Hand
pagination_label: Raise Hand
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: raise-hand
---

# Raise Hand - React Native

Let us see, how we can use PubSub to implement Raise Hand functionality. If you are not familiar with the PubSub mechanism and `usePubSub`hook, you can [follow this guide](/react-native/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Implementing Raise Hand

1. We will be creating a button when clicked, we will publish a message it the topic `RAISE_HAND`

```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("RAISE_HAND");

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          publish("Raise Hand");
        }}
      >
        <Text> Raise Hand</Text>
      </TouchableOpacity>
    </>
  );
}
```

2. Now let us show an alert to all the speakers showing who raised the hand.

```js
import { useMeeting, usePubSub } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

function MeetingView() {
  const { localParticipant } = useMeeting();

  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("RAISE_HAND", {
    onMessageReceived: (message) => {
      if (localParticipant.mode == "CONFERENCE")
        alert(`${message.senderName} raise hand`);
    },
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          publish("Raise Hand");
        }}
      >
        <Text> Raise Hand</Text>
      </TouchableOpacity>
    </>
  );
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react-native/api/sdk-reference/use-pubsub)
