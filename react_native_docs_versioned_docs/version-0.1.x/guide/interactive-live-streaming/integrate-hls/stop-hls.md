---
title: Stop HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Stop HLS
pagination_label: Stop HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming 
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1 
slug: stop-hls
---

# Stop HLS - React Native

Stopping HLS refers to the process of halting the ongoing HLS stream transmission, indicating that the stream is no longer accessible to viewers.

## Stopping HLS

The `stopHls()` method, accesible from the `useMeeting` hook, is used to stop the interactive livestream of a meeting.

### Example

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const MeetingView = () => {
  const { stopHls } = useMeeting();

  const handleStopHls = () => {
    // Stop Hls
    stopHls();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleStopHls();
        }}
      >
        <Text>Stop Hls</Text>
      </TouchableOpacity>
    </>
  );
};
```

## Event associated with HLS

- **onHlsStateChanged** - The `onHlsStateChanged()` event is triggered whenever the state of meeting HLS changes.

- You will get `HLS_STOPPING` and `HLS_STOPPED` status on calling `stopHls()`.

```js
import { Constants, useMeeting } from "@videosdk.live/react-native-sdk";

function onHlsStateChanged(data) {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    console.log("Meeting Hls is started");
  } else if (status === Constants.hlsEvents.HLS_PLAYABLE) {
    // on hlsStateChanged started you will receive downstreamUrl
    const { downstreamUrl } = data;
    console.log("Meeting Hls is Playable");
    // highlight-start
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
    // highlight-end
  } else {
    //
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStateChanged,
  ...
});

```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [stopHls](/react-native/api/sdk-reference/use-meeting/methods#stophls)
- [onHlsStateChanged](/react-native/api/sdk-reference/use-meeting/events#onhlsstatechanged)
