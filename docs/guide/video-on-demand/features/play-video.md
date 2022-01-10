---
title: Play Video on demand (VOD) | Video SDK Documentation
hide_title: false
hide_table_of_contents: false
description: Video on demand (VOD) Play Video details documents how to interact with the video encoding API It's our go-to reference whether you're just getting started.
sidebar_label: Play Video
pagination_label: Play Video
keywords:
  - Play Video
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: play-video
---

# Play Video

To play back a video, use **fileUrl** attribute from the response of video.

If you encoded video in **HLS** format, then for playing video you need to set up video player which supports **HLS** format.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="html"
groupId={"client-group-id"}
values={[
{label: 'HTML', value: 'html'},
{label: 'React.js', value: 'react'},
{label: 'Android', value: 'android'},
{label: 'Swift', value: 'swift'},
]}>
<TabItem value="html">

```js
<link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />

<video
  id="my-video"
  class="video-js"
  controls
  preload="auto"
  width="640"
  height="264"
  data-setup="{}"
>
  <source
  // You have to provide your downStreamUrl in src
    src="your-file-url"
    type="application/x-mpegURL"
  />
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank"
      >supports HTML5 video</a
    >
  </p>
</video>
<script src="https://vjs.zencdn.net/7.10.2/video.min.js"></script>

```

</TabItem>
<TabItem value="react">

```js
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  // You have to provide your downStreamUrl in src
  const src = "your-file-url";

  useEffect(() => {
    let hls;
    if (videoRef.current) {
      const video = videoRef.current;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Some browers (safari and ie edge) support HLS natively
        video.src = src;
      } else if (Hls.isSupported()) {
        // This will run in all other modern browsers
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      style={{ width: "100%", maxWidth: "500px" }}
    />
  );
}
```

</TabItem>
<TabItem value="android">

```js
implementation 'com.google.android.exoplayer:exoplayer-hls:2.X.X'

// Create a player instance.
SimpleExoPlayer player = new SimpleExoPlayer.Builder(context).build();
// Set the media item to be played.
player.setMediaItem(MediaItem.fromUri("your-file-url")); // You have to provide downStream URL
// Prepare the player.
player.prepare();
```

</TabItem>
<TabItem value="swift">

```js
import SwiftUI
import AVKit

struct ContentView: View {
  // You have to provide your downStreamUrl in
    private let player = AVPlayer(url: URL(string: "your-file-url")!)

    var body: some View {
        //  VideoPlayer comes from SwiftUI
        //  Alternatively, you can use AVPlayerLayer or AVPlayerViewController
        VideoPlayer(player: player)
            .onAppear() {
                player.play()
            }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

</TabItem>

</Tabs>

![Video SDK Home Dashboard](/img/play-video.png)
