---
title: Getting Started with Live Streaming
hide_title: false
hide_table_of_contents: false
description: Live streaming sdk will help you to integrate live streaming in your application.
sidebar_label: Getting Started
pagination_label: Getting Started Live Streaming
keywords:
  - live streaming
  - interactive live streaming
  - live broadcasting
  - hls streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';

# Explore live streaming

This guide will get you running with the VideoSDK Live Streaming in minutes.

## Overview

At it's core, VideoSDK Live Streaming is a media server. It eanbles high quality live streaming experience with support of thousands of viewers.

- It allows user to record live stream, so user can watch it later.
- User can also Restream to other platforms such as Youtube, Facebook, etc.
- RTMP support for live streaming.
- Commpatible with OBS studio, Streamyard etc.
- Adaptive live streaming based on screen resolution and internet bandwidth.
- Record your live streaming for playback.
- Private streaming with authentication.
- Embeded live streaming player.

## Steps

import Card from '@theme/Card';

<div class="container guide-steps-block">
  <div class="row ">
    <div class="col col--6">
      <Card heading="1. Signup & Create API" link="/docs/guide/standard-live-streaming/signup-and-create-api" description="Generate your API key." />
    </div>
    <div class="col col--6" >
      <Card heading="2. Authentication" link="/docs/guide/standard-live-streaming/authentication" description="Generate Access Token."  />
    </div>
  </div>
  <div class="row " >
    <div class="col col--6">
      <Card heading="3. Create Live Stream" link="/docs/guide/standard-live-streaming/features/create-live-stream" description="Setup Live Stream." />
    </div>
    
  </div>
</div>

## Architecture

Before going to live, you need to initilize stream on server. Following diagram describes end-to-end flow of going live, restream it and play it again.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using key and secret; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Create Live Stream; activate VideoSDK Server; Note right of VideoSDK Server: Initialize Live Streaming; VideoSDK Server-->>Your App Client: Get the Live Stream Metadata; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Go Live via RTMP; Note right of VideoSDK Server: Real-time Encoding and Storage; VideoSDK Server-->>Your App Client: Down Stream Live Video; Note right of VideoSDK Server: Adaptive Live Streaming; VideoSDK Server-->>Your App Client: Playback Live Stream; Note right of VideoSDK Server: Adaptive Video Streaming; Your App Client->>VideoSDK Server: Fetch Live Stream Metadata; VideoSDK Server--)Your App Client: Get Live Stream Metadata; Your App Client->>VideoSDK Server: Restream to Social Media; VideoSDK Server--)Social Media: Restream to Social Media; Your App Client-)VideoSDK Server: End Live Stream; VideoSDK Server--)Social Media: End Restrem; Social Media--)VideoSDK Server: Restream Ended; VideoSDK Server--)Your App Client: Live Stream Ended; `}/>

<br/>

:::info

Live Streaming example in React.js: [videosdk-live-streaming-react-api-example](https://github.com/videosdk-live/videosdk-live-streaming-react-api-example)

:::
