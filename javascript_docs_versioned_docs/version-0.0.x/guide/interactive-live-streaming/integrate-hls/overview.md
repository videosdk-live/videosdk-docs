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

# Interactive Livestream (HLS) - Javascript

### What is Interactive Livestream (HLS)?

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can participate in various activities, such as live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

### What is Adaptive Live Streaming?

In the context of interactive live streaming, Adaptive Live Streaming optimizes the viewing experience by dynamically adjusting the livestream's resolution based on user preferences and network conditions. This ensures seamless transitions between lower and higher resolutions, enhancing audience engagement.

### What is Latency?

Latency is the delay between capturing video content and its playback. Key factors affecting latency are as follows:

- **Buffering**: Finding the right balance in buffer size is crucial for achieving smoother playback without compromising on latency.
- **Network Conditions**: The efficiency of servers and the overall health of the network significantly impact latency.

Standard HLS typically has a latency of around 5-6 seconds.

### HLS Architecture of VideoSDK

<center>

![VideoSDK HLS](/img/VideoSDK-HLS.png)

</center>

When a host initiates an interactive live stream using VideoSDK, the platform utilizes either a default theme or a user-specified template to compose and encode a live stream. This live stream is delivered to viewers through an `M3U8` video file, enabling direct playback on the viewer's end while adapting to their network bandwidth.

VideoSDK provides multiple types of URLs for interactive live streaming, catering to various requirements:

**`1. Standard Streaming:`** In this type of streaming, users can engage in real-time without the ability to go back in the live stream; it's a continuous streaming experience.

**`2. Rolling Playback:`** In this type of streaming, users have the capability to rewind and playback the entire stream, offering a more flexible viewing experience.

**`3. VoD Playback`** In this type of streaming, users can playback the complete live stream on demand, providing the flexibility to watch at their convenience.

### Using HLS with VideoSDK

You can use HLS with VideoSDK in two different ways.

#### 1. Simple Adaptive Streaming

Simple Adaptive Streaming refers to a type of live stream where there is minimal interaction between hosts and viewers.

This type of livestream is particularly useful when there is a large audience, and the viewers don't actively engage with the hosts. In such a scenario, presenters participate in a VideoSDK meeting, while viewers primarily watch the livestream without direct interaction with the hosts.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_simple_ils.mp4" height="500px" width={"100%"} />

</div>

#### 2. Adaptive Streaming with increased engagement

When aiming to interact with your audience through features like polls, discussions, and the ability for viewers to join and leave the livestream based on the host's decisions, adaptive streaming with enhanced engagement is the most suitable option.

In this setup, both the host and viewers must join a VideoSDK meeting with distinct roles. To gain more insights into managing roles within VideoSDK meetings, you can [follow this guide.](../handling-participants/manage-roles)

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_livestream_interaction_2.mp4" height="500px" width={"100%"} />

</div>
