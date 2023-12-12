---
title: Interactive Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Overview
pagination_label: Overview
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: overview
---

# Interactive Livestream (HLS) - React Native

### What is Interactive Livestream (HLS)?

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can take part in a variety of activities like live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

### What is Adaptive Live Streaming?

Livestream experience is important while undertaking interactive live streaming in order to increase audience. To do this, the livestream should be able to respond to the viewer's network bandwidth, and change the stream's resolution as necessary. Therefore, adaptive live streaming refers to a feed that automatically adjusts to a lower or higher resolution dependent on the user's preferences.

### What is Latency?

Latency is the delay between capturing video content and its playback. Key factors that affecting latency :

- **Buffering**: Balance buffer size for smoother playback against latency.
- **Network Conditions**: Efficient servers and network health contribute to lower latency.

Standard HLS has a latency around 5-6 seconds.

### HLS Architecture of VideoSDK

<center>
<img src='https://cdn.videosdk.live/website-resources/docs-resources/mobile_hls.png' />
</center>

When a host starts the interactive live stream, VideoSDK will use a deafult theme or user specified template to compose and encode a live stream which will be delivered to the viewers through a `M3U8` video file which can be played directly on the viewer end which will adapt to the viewer's network bandwidth.

When using VideoSDK for interactive live stream, you get multiple types of URLs which you can use based on your requirements.

**`1. Standard Streaming:`** This type of streaming is where the user is not allowed to go back in the live and can just stream it.

**`2. Rolling Playback:`** This type of streaming is where the user is allowed to do rewind and do a playback of the complete stream.

**`3. VoD Playback`** With this, users can playback the complete live stream on demand whenever needed.

### Using HLS with VideoSDK

You can use HLS with VideoSDK in two different ways.

#### 1. Simple Adaptive Streaming

When we talk about simple adaptive streaming, we imply that there is hardly any interaction between the hosts and the viewers.

These livestreams are helpful when there are a lot of viewers, and they don't want to engage with the host. In this scenario, every presenter attends a VideoSDK meeting, while every viewer only watches the livestream.

**_This video is for education purpose_**

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_simple_ils.mp4" height="500px" width={"100%"} />

</div>

#### 2. Adaptive Streaming with increased engagement

When you want to communicate with your audience by enabling polls, conversations, and the ability for viewers to join and leave the livestream based on the host's decision, adaptive streaming with enhanced engagement will be the best fit for you.

In this scenario, both the host and the viewer will have to join a VideoSDK meeting with different roles. To learn more about the roles [follow these guide.](../handling-participants/manage-roles)

**_This video is for education purpose_**

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_livestream_interaction_2.mp4" height="500px" width={"100%"} />

</div>
