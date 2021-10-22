---
title: Live Streaming Architecture
hide_title: false
hide_table_of_contents: false
description: Live Streaming architecture helps you to understand how to implement scalable live broadcasting applications.
sidebar_label: Architecture
pagination_label: Live Streaming
keywords:
  - live streaming
  - live broadcasting
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: architecture
---

# Architecture

import Mermaid from '@theme/Mermaid';

## Live Streaming

Before going to live, you need to initilize stream on server. Following diagram describes end-to-end flow of going live, restream it and play it again.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using key and secret; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Create Live Stream; activate VideoSDK Server; Note right of VideoSDK Server: Initialize Live Streaming; VideoSDK Server-->>Your App Client: Get the Live Stream Metadata; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Go Live via RTMP; Note right of VideoSDK Server: Real-time Encoding and Storage; VideoSDK Server-->>Your App Client: Down Stream Live Video; Note right of VideoSDK Server: Adaptive Live Streaming; VideoSDK Server-->>Your App Client: Playback Live Stream; Note right of VideoSDK Server: Adaptive Video Streaming; Your App Client->>VideoSDK Server: Fetch Live Stream Metadata; VideoSDK Server--)Your App Client: Get Live Stream Metadata; Your App Client->>VideoSDK Server: Restream to Social Media; VideoSDK Server--)Social Media: Restream to Social Media; Your App Client-)VideoSDK Server: End Live Stream; VideoSDK Server--)Social Media: End Restrem; Social Media--)VideoSDK Server: Restream Ended; VideoSDK Server--)Your App Client: Live Stream Ended; `}/>

<br/>

:::info

Live Streaming example in React.js: [videosdk-live-streaming-react-api-example](https://github.com/videosdk-live/videosdk-live-streaming-react-api-example)

:::
