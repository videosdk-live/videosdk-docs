---
title: Video On Demand Architecture
hide_title: false
hide_table_of_contents: false
description: Video on demand architecture helps you to understand how to implement scalable on demand video applications.
sidebar_label: Architecture
pagination_label: Video On Demand
keywords:
  - video on demand
  - video streaming
  - video encoding
  - video upload
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: video-on-demand
---

# Architecture

import Mermaid from '@theme/Mermaid';

## Video On Demand

Video on demand enables smooth video streaming on demand. It includes video storage, encoding and streaming support. Following diagram describes basic architecture to use video on demand in your application.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to Upload Video; activate VideoSDK Server; Note right of VideoSDK Server: Upload and fetch video metadata; VideoSDK Server-->>Your App Client: Video Metadata Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Encode Video; activate VideoSDK Server; Note right of VideoSDK Server: Encode Video into Different Resolutions; VideoSDK Server-->>Your App Client: Get Master Playlist URL and Thumbnails; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Play Video; Note right of VideoSDK Server: Adaptive Video Streaming; VideoSDK Server-->>Your App Client: Get Video Stream in Chunks;`}/>

<br/>

:::info

Video On Demand example in React.js: [videosdk-vod-react-api-example](https://github.com/videosdk-live/videosdk-vod-react-api-example)

:::
