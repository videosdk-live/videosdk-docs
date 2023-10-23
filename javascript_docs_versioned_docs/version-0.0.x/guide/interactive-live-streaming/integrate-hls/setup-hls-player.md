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

**`Step 1:`** Let us first start by creating the video container and import [hls.js](https://hlsjs.video-dev.org/demo/) library using `<script>` tag in html file.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <!-- ... -->

    <!-- render Video -->
    <div id="videoContainer"></div>

    <!-- hls lib script  -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
  </body>
</html>
```

### `2. Playing HLS stream`

- Now on the `hls-state-changed` event, when you get `HLS_PLAYABLE` for the viewer participant, create a video element in the videoContainer div and pass downstreamUrl to hls.js.

```js
meeting.on("hls-state-changed", (data) => {
  const { status } = data;

  if (mode === Constants.modes.VIEWER) {
    if (status === Constants.hlsEvents.HLS_PLAYABLE) {
      const { downstreamUrl } = data;
      let video = document.createElement("video");
      video.setAttribute("width", "100%");

      if (Hls.isSupported()) {
        var hls = new Hls({
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
        hls.loadSource(downstreamUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = downstreamUrl;
        video.addEventListener("canplay", function () {
          video.play();
        });
      }

      videoContainer.appendChild(video);
    }
  }
});
```

With this, the player is setup to play the HLS.

![VideoSDK JS Interactive Live Streaming Quick Start Meeting Container Component](https://cdn.videosdk.live/website-resources/docs-resources/quick_start_react_ils_viewer.png)

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [hlsState](/javascript/api/sdk-reference/meeting-class/properties#hlsstate)
- [hlsUrls](/javascript/api/sdk-reference/meeting-class/properties#hlsurls)
- [hls-state-changed](/javascript/api/sdk-reference/meeting-class/events#hls-state-changed)
