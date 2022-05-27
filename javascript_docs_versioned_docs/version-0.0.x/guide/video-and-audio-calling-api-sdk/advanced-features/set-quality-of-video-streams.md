---
title: Set quality of Video Streams - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This guide describes how to set the quality of audio and video communication such as low, medium and high. 
sidebar_label: Set Quality of Video Streams
pagination_label: Set Quality of Video Streams
keywords:
  - Stream Quality
  - Audio Streaming
  - Video Streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-quality-of-video-streams
---

# Set Quality of Streams
Video SDK provides out of the box video quality settings to give best audio and video communication experience.

Out intelligent algorithm identifies resolution, bitrate and frame rate of video based on screen resolution and internet bandwidth. 

To handle the edge cases, you can set video quality of each participant. 

```js
participant.setQuality("high")
```
### API Reference
- [setQuality](/javascript/api/sdk-reference/participant-class/methods)

