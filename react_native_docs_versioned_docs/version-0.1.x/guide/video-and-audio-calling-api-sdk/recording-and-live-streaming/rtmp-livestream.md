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

# RTMP Livestream - React Native

RTMP is a widely used protocol for live streaming video content from VideoSDK to platforms like YouTube, Twitch, Facebook, and others.

To initiate live streaming from VideoSDK to platforms supporting RTMP ingestion, you simply need to provide the platform-specific stream key and stream URL. This enables VideoSDK to connect to the platform's RTMP server and transmit the live video stream.

Furthermore, VideoSDK offers flexibility in configuring livestream layouts. You can achieve this by either selecting different prebuilt layouts in the configuration or by providing your custom template for livestreaming, catering to your specific layout preferences.

This guide will provide an overview of how to implement starting and stopping RTMP livestreaming with VideoSDK.

### `startLivestream()`

The `startLivestream()` method, accesible from the `useMeeting` hook, is used to initiate the RTMP livestream of a meeting. This method accepts the following two parameters:

- `1. outputs`: This parameter takes an array of objects containing the RTMP `url` and `streamKey` specific to the platform where you want to initiate the livestream.

- `2. config (optional)`: This parameter defines the layout configuration for the livestream.

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

The `stopLivestream()` method, accesible from the `useMeeting` hook, is used to stop the RTMP livestream of a meeting.

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

- **onLivestreamStateChanged** - The `onLivestreamStateChanged()` event is triggered whenever the state of meeting livestream changes.

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

With VideoSDK, you can also use your own custom designed layout template to record the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-recording) the recording with the `templateURL` parameter.

### API Reference

The API references for all the methods utilised in this guide are provided below.

- [startLivestream](/react-native/api/sdk-reference/use-meeting/methods#startlivestream)
- [stopLivestream](/react-native/api/sdk-reference/use-meeting/methods#stoplivestream)
- [onLivestreamStateChanged](/react-native/api/sdk-reference/use-meeting/events#onlivestreamstatechanged)
