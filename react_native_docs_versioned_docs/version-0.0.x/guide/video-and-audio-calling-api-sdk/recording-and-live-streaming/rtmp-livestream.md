---
title: RTMP Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: RTMP Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: RTMP Livestream
pagination_label: RTMP Livestream
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: rtmp-livestream
---

# RTMP Livestream

RTMP is a popular protocol for live streaming video content from a VideoSDK to platforms such as YouTube, Twitch, Facebook, and others.

By providing the platform-specific stream key and stream URL, the VideoSDK can connect to the platform's RTMP server and transmit the live video stream.

VideoSDK allows you to livestream your meeting to platform which support RTMP ingestion just by providing the platform-specific stream key and stream URL, we can connect to the platform's RTMP server and transmit the live video stream.

VideoSDK also allows you to configure the livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop RTMP Livestreaming.

### `startLivestream()`

`startLivestream()` can be used to start a RTMP livestream of the meeting which can be accessed from the `useMeeting` hook. This method accepts two parameters:

- `1. outputs`: This parameter accepts an array of objects which contains the RTMP `url` and `streamKey` of the platforms you want to start the livestream.

- `2. config (optional)`: This parameter will define how the livestream layout should look like.

  ```js
  const config = {
    // highlight-next-line
    // Layout Configuration
    layout: {
      type: "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
      priority: "SPEAKER", // "PIN", Default : "SPEAKER"
      gridSize: 4, // MAX : 4
    },

    // highlight-next-line
    // Theme of RTMP
    theme: "DARK", //  "LIGHT" | "DEFAULT"
  };

  const outputs = [
    {
      url: "<RTMP_URL>",
      streamKey: "<RTMP_STREAM_KEY>",
    },
  ];

  startLivestream(outputs, config);
  ```

### `stopLivestream()`

- `stopLivestream()` is used to stop the meeting livestream which can be accessed from the `useMeeting` hook.

#### Example

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const MeetingView = () => {
  const { startLivestream, stopLivestream } = useMeeting();

  const handleStartLivestream = () => {
    // Start Livestream
    startLivestream(
      [
        {
          url: "rtmp://a.rtmp.youtube.com/live2",
          streamKey: "key",
        },
      ],
      {
        layout: {
          type: "GRID",
          priority: "SPEAKER",
          gridSize: 4,
        },
        theme: "DARK",
      }
    );
  };

  const handleStopLivestream = () => {
    // Stop Livestream
    stopLivestream();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleStartLivestream();
        }}
      >
        <Text>Start Livestream</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleStopLivestream();
        }}
      >
        <Text>Stop Livestream</Text>
      </TouchableOpacity>
    </>
  );
};
```

### Event associated with Livestream

- **onLivestreamStateChanged** - Whenever meeting livestream state changes, then `onLivestreamStateChanged` event will trigger.

```js
import { Constants, useMeeting } from "@videosdk.live/react-native-sdk";

function onLivestreamStateChanged(data) {
  const { status } = data;

  if (status === Constants.livestreamEvents.LIVESTREAM_STARTING) {
    console.log("Meeting livestream is starting");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STARTED) {
    console.log("Meeting livestream is started");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STOPPING) {
    console.log("Meeting livestream is stopping");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STOPPED) {
    console.log("Meeting livestream is stopped");
  } else {
    //
  }
 }

const {
  meetingId
  ...
} = useMeeting({
  onLivestreamStateChanged,
});
```

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/docs/tutorials/customized-layout). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

###  API Reference

The API references for all the methods utilised in this guide are provided below.

- [startLivestream](/react-native/api/sdk-reference/use-meeting/methods#startlivestream)
- [stopLivestream](/react-native/api/sdk-reference/use-meeting/methods#stoplivestream)
- [onLivestreamStateChanged](/react-native/api/sdk-reference/use-meeting/events#onlivestreamstatechanged)
