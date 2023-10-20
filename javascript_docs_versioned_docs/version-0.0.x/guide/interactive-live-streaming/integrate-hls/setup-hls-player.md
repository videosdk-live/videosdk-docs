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

# Setup HLS Player - Javascript

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
        var hls = new Hls();
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
