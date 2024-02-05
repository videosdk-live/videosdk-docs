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

# Setup HLS Player - React

This guide focuses on creating the Component responsible for playing the HLS stream.
Before proceeding, ensure that you have set up a VideoSDK meeting, enabling you to join the room. For instructions on setting up a VideoSDK meeting, refer to the [quick start guide](../../video-and-audio-calling-api-sdk//quick-start.md).

For playing the HLS stream, you need to use the [hls.js](https://www.npmjs.com/package/hls.js/v/canary) library.

### `1. Setup Component with HLS events`

**`Step 1:`** Begin by creating a new component named `HLSPlayer`. Place this component inside the `MeetingProvider` to ensure access to the VideoSDK hooks.

```js
function Container() {
  return <HLSPlayer />;
}

function HLSPlayer() {
  return <div style={{ height: "100vh", width: "100vw" }}></div>;
}
```

**`Step 2:`** Now, incorporate the placeholder that will be displayed when there is no active HLS. Utilize the `hlsState` from the `useMeeting` hook to determine the presence of an active HLS.

```js
import { useMeeting, Constants } from "@videosdk.live/react-sdk";

function HLSPlayer() {
  const { hlsUrls, hlsState } = useMeeting();

  return (
    <div>
      {hlsState != "HLS_PLAYABLE" ? (
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

**`Step 1:`** To play the HLS stream, you need to have the [hls.js](https://www.npmjs.com/package/hls.js) library. To install the library, use the following command.

```bash
npm install "hls.js"
```

**`Step 2:`** Next step is to add a `<video>` element that will play the livestream.

```js
import Hls from "hls.js";

function HLSPlayer() {
  const { hlsUrls, hlsState } = useMeeting();
  const playerRef = useRef(null);

  return (
    <div>
      {hlsState != "HLS_PLAYABLE" ? (
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

**`Step 3:`** Now that the video player is ready, play the HLS stream once it becomes playable. To achieve this, obtain the `hlsUrls` from the `useMeeting` hook and ensure that the `hlsState` is `HLS_PLAYABLE` before initiating the stream playback.

```js
function HLSPlayer() {
  //highlight-next-line
  ...

  useEffect(() => {
    if (hlsUrls.downstreamUrl && hlsState == Constants.hlsEvents.HLS_PLAYABLE) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          maxLoadingDelay: 1, // max video loading delay used in automatic start level selection
          defaultAudioCodec: "mp4a.40.2", // default audio codec
          maxBufferLength: 0, // If buffer length is/become less than this value, a new fragment will be loaded
          maxMaxBufferLength: 1, // Hls.js will never exceed this value
          startLevel: 0, // Start playback at the lowest quality level
          startPosition: -1, // set -1 playback will start from intialtime = 0
          maxBufferHole: 0.001, // 'Maximum' inter-fragment buffer hole tolerance that hls.js can cope with when searching for the next fragment to load.
          highBufferWatchdogPeriod: 0, // if media element is expected to play and if currentTime has not moved for more than highBufferWatchdogPeriod and if there are more than maxBufferHole seconds buffered upfront, hls.js will jump buffer gaps, or try to nudge playhead to recover playback.
          nudgeOffset: 0.05, // In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback. media.currentTime += (nb nudge retry -1)*nudgeOffset
          nudgeMaxRetry: 1, // Max nb of nudge retries before hls.js raise a fatal BUFFER_STALLED_ERROR
          maxFragLookUpTolerance: .1, // This tolerance factor is used during fragment lookup. 
          liveSyncDurationCount: 1, // if set to 3, playback will start from fragment N-3, N being the last fragment of the live playlist
          abrEwmaFastLive: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
          abrEwmaSlowLive: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
          abrEwmaFastVoD: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
          abrEwmaSlowVoD: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
          maxStarvationDelay: 1, // ABR algorithm will always try to choose a quality level that should avoid rebuffering
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
  }, [hlsUrls, hlsState]);

  return <div>...</div>;
}
```

With this, the player is all set to play the HLS stream.

![VideoSDK React Interactive Live Streaming Quick Start Meeting Container Component](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_viewer.png)

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
- [hlsUrls](/react/api/sdk-reference/use-meeting/properties#hlsurls)
- [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate)
