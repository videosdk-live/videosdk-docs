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

# Setup HLS Player

In this guide, we will create a new Component which will be responsible for playing the HLS stream.
Before starting this guide, make sure you have a VideoSDK meetings setup allowing you to join the room. To learn more about setting up a VideoSDK meeting, follow this quick start guide.

To play the HLS stream we will be using the [hls.js](https://www.npmjs.com/package/hls.js/v/canary) library.

### `1. Setup Component with HLS events`

**`Step 1:`** Let us first start by creating the new component named `HLSPlayer` which will be placed inside the `MeetingProvider` so we can access the VideoSDK hooks.

```js
function Container() {
  return <HLSPlayer />;
}

function HLSPlayer() {
  return <div style={{ height: "100vh", width: "100vw" }}></div>;
}
```

**`Step 2:`** Now let's add the placeholder that will be shown when there is no active HLS. For these, we will use the `hlsState`, `isHlsPlayable` from the `useMeeting` hook to identify if there is an active HLS.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

function HLSPlayer() {
  const { hlsUrls, isHlsPlayable, hlsState } = useMeeting();

  return (
    <div>
      {hlsState == "HLS_STOPPED" || !isHlsPlayable ? (
        <div>
          <p>HLS has not started yet or is stopped</p>
        </div>
      ) : (
        <div>Play the HLS</div>
      )}
    </div>
  );
}
```

### `2. Playing HLS stream`

**`Step 1:`** We will be using the [hls.js](https://www.npmjs.com/package/hls.js) library to play the HLS stream. So let's start by installing the library.

```bash
npm install "hls.js"
```

**`Step 2:`** Next we will be adding a `<video>` element which will play our livestream.

```js
import Hls from "hls.js";

function HLSPlayer() {
  const { hlsUrls, isHlsPlayable, hlsState } = useMeeting();
  const playerRef = useRef(null);

  return (
    <div>
      {hlsState == "HLS_STOPPED" || !isHlsPlayable ? (
        <div>
          <p>HLS has not started yet or is stopped</p>
        </div>
      ) : (
        <div>
          <video
            ref={playerRef}
            id="hlsPlayer"
            autoPlay={true}
            controls
            style={{ width: "100%", height: "100%" }}
            playsInline
            muted={true}
            playing
            onError={(err) => {
              console.log(err, "hls video error");
            }}
          ></video>
        </div>
      )}
    </div>
  );
}
```

**`Step 3:`** Now that video player is ready, let's play the HLS once it becomes playable. For these, we will get the `hlsUrls` from the `useMeeting` and also check if the `isHlsPlayable` before playing the stream.

```js
function HLSPlayer() {
  //highlight-next-line
  ...

  useEffect(() => {
    if (hlsUrls.downstreamUrl && isHlsPlayable) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          autoStartLoad: true,
          defaultAudioCodec: "mp4a.40.2",
        });

        let player = document.querySelector("#hlsPlayer");

        hls.loadSource(hlsUrls.downstreamUrl);
        hls.attachMedia(player);
      } else {
        if (typeof playerRef.current?.play === "function") {
          playerRef.current.src = hlsUrls.downstreamUrl;
          playerRef.current.play();
        }
      }
    }
  }, [hlsUrls, isHlsPlayable]);

  return <div>...</div>;
}
```

With this, the player is setup to play the HLS.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
