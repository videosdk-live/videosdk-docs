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

In this guide, we will create a new Component which will be responsible for playing the HLS stream.

Before starting this guide, make sure you have a VideoSDK meetings setup allowing you to join the room. To learn more about setting up a VideoSDK meeting, follow this [quick start guide](../../video-and-audio-calling-api-sdk//quick-start.md).

To play the HLS stream, we will be using the [react-native-video](https://www.npmjs.com/package/react-native-video) library.

Before setup a live stream, make sure HLS is running using [startHLS](./start-hls); otherwise, downstream won't be available.

### `1. Setup Component with HLS events`

**`Step 1:`** Let us first start by creating the new component named `HLSPlayer` which will be placed inside the `MeetingProvider` so we can access the VideoSDK hooks.

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

**`Step 2:`** Now let's add the placeholder that will be shown when there is no active HLS. For these, we will use the `hlsState` from the `useMeeting` hook to identify if there is an active HLS.

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

**`Step 1:`** We will be using the [react-native-video](https://www.npmjs.com/package/react-native-video) library to play the HLS stream. So let's start by installing the library.

```bash
npm install react-native-video
```

**`Step 2:`** Next we will be adding a `Video` component which will play our livestream.

:::note
`downstreamUrl` is now depecated. Use `playbackHlsUrl` or `livestreamUrl` in place of `downstreamUrl`
:::

```js
// imports react-native-video
import Video from "react-native-video";

function HLSPlayer() {
  const { hlsUrls, hlsState } = useMeeting();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
       {hlsState == "HLS_PLAYABLE" ? (
          {/* Render VideoPlayer that will play `playbackHlsUrl`*/}
          <Video
            controls={true}
            source={{
              uri: hlsUrls.playbackHlsUrl,
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
