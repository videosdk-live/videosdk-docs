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

# Notify Attendees in Realtime - React

This guide explains how PubSub can be used to implement the functionality of broadcasting a message to all the viewers at once. If you are not familiar with the PubSub mechanism and `usePubSub` hook, you can [follow this guide](/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).


### Notifying Attendees

1. To implement this functionality, begin by creating a "Notify Attendees" button along with a text input to capture the message. When a message is entered into the input and the button is clicked, publish a message with the topic `NOTIFY_ATTENDEES`.

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

function MeetingView() {
  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("NOTIFY_ATTENDEES");
  const [message, setMessage] = useState("");

  return (
    <>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          publish(message);
        }}
      >
        Notfiy Attendees
      </button>
    </>
  );
}
```

2. Next, alert all the speakers, displaying the message posted by the speaker.

```js
function MeetingView() {
  const { localParticipant } = useMeeting();

  // destructure publish method from usePubSub hook
  const { publish } = usePubSub("NOTIFY_ATTENDEES", {
    onMessageReceived: (message) => {
      if (localParticipant.mode == "VIEWER") window.alert(`${message.message}`);
    },
  });

  return <>...</>;
}
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
