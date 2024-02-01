---
title: Setup HLS Player | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Setup HLS Player
pagination_label: Setup HLS Player
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg 
sidebar_position: 1 
slug: setup-hls-player
---

# Setup HLS Player - React Native

This guide focus on we will creating the Component responsible for playing the HLS stream.
Before proceeding, ensure that you have set up a VideoSDK meeting, enabling you to join the room. For instructions on setting up a VideoSDK meeting, refer to the [quick start guide](../../video-and-audio-calling-api-sdk//quick-start.md).

For playing the HLS stream, you need to use the [react-native-video](https://www.npmjs.com/package/react-native-video) library.

Before initiating a live stream, ensure that HLS is running using [startHLS](./start-hls); otherwise, downstream won't be available.

### `1. Setup Component with HLS events`

**`Step 1:`** Begin by creating a new component named `HLSPlayer`. Place this component inside the `MeetingProvider` to ensure access to the VideoSDK hooks.

```js
import { SafeAreaView } from "react-native";

function Container() {
  return <HLSPlayer />;
}

function HLSPlayer() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}> </SafeAreaView>
  );
}
```

**`Step 2:`** Now, incorporate the placeholder that will be displayed when there is no active HLS. Utilize the `hlsState` from the `useMeeting` hook to determine the presence of an active HLS.

```js
import { useMeeting, Constants } from "@videosdk.live/react-native-sdk";
import { SafeAreaView, Text } from "react-native";

function HLSPlayer() {
  const { hlsUrls, hlsState } = useMeeting();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      {hlsState == "HLS_PLAYABLE" ? (
        <>
          <Text>We will setup player here</Text>
        </>
      ) : (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            HLS is not started yet or is stopped
          </Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}
```

### `2. Playing HLS stream`

**`Step 1:`** To play the HLS stream, you need to have the  [react-native-video](https://www.npmjs.com/package/react-native-video) library. To install the library, use the following command.

```bash
npm install react-native-video
```

**`Step 2:`** Next step is to add a `Video` component that will play the livestream.

```js
// imports react-native-video
import Video from "react-native-video";

function HLSPlayer() {
  const { hlsUrls, hlsState } = useMeeting();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
       {hlsState == "HLS_PLAYABLE" ? (
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
      ) : (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            HLS is not started yet or is stopped
          </Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}
```

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ils-speaker-screen.png' style={{height: '600px'}} />

</center>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [onHlsStateChanged](/react-native/api/sdk-reference/use-meeting/events#onhlsstatechanged)
- [hlsUrls](/react-native/api/sdk-reference/use-meeting/properties#hlsurls)
- [hlsState](/react-native/api/sdk-reference/use-meeting/properties#hlsstate)
