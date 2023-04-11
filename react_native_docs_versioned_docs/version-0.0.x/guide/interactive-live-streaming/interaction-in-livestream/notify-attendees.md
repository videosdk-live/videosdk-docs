---
title: Notify Attendees with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Notify Attendees in Realtime
pagination_label: Notify Attendees in Realtime
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: notify-attendees
---

# Notify Attendees in Realtime

When doing livestream, you may want to broadcast message to all the viewers at once.

Let us see, how we can use PubSub to implement this functionality. If you are not familiary with the PubSub mechanism and `usePubSub`hook, you can [follow this guide](/react-native/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Notifying Attendees

1. We will be creating a button and text input to take the message input and we will publish a message it the topic `NOTIFY_ATTENDEES`

```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("NOTIFY_ATTENDEES");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setMessage}
        value={message}
      />

      <TouchableOpacity
        onPress={() => {
          publish(message);
        }}
      >
        <Text>Notfiy Attendees</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
```

2. Now let us show an alert to all the viewers displaying the message posted by the speaker.

```js
function MeetingView() {
  const { localParticipant } = useMeeting();

  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("NOTIFY_ATTENDEES", {
    onMessageReceived: (message) => {
      if (localParticipant.mode == "VIEWER") alert(`${message.message}`);
    },
  });

  return <>...</>;
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react-native/api/sdk-reference/use-pubsub)
