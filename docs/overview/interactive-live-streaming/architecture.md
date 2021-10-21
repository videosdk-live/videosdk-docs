---
title: Interactive Live Streaming Architecture
hide_title: false
hide_table_of_contents: false
description: Interactive Live Streaming architecture helps you to understand how to implement scalable product with all the features.
sidebar_label: Architecture
pagination_label: Interactive Live Streaming Architecture
keywords:
  - live streaming
  - interactive live streaming
  - low latency broadcasting
  - one-to-many live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: architecture
---

# Architecture

import Mermaid from '@theme/Mermaid';

## Interactive live streaming

This diagram demonstrates end-to-end flow to implement interactive live streaming, record calls and go-live on social media.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request for streamId; activate VideoSDK Server; Note right of VideoSDK Server: Generate unique streamId; VideoSDK Server-->>Your App Client: streamId Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Join; activate VideoSDK Server; Note right of VideoSDK Server: Broadcasting to each viewers; VideoSDK Server-->>Your App Client: Stream Joined; deactivate VideoSDK Server; Your App Client-)VideoSDK Server: Subscribe to Events; VideoSDK Server--)Your App Client: Get notified on Updates; Your App Client->>VideoSDK Server: Request to Go Live via RTMP; Note right of VideoSDK Server: Composing Real-time Stream; VideoSDK Server--)Social Media: Push RTMP Stream; Your App Client->>VideoSDK Server: Request to Start Recording; Note right of VideoSDK Server: Recording Started; VideoSDK Server-->>Your App Client: Trigger Webhook to Start Recording; Your App Client->>VideoSDK Server: Request to Leave Stream; activate VideoSDK Server; Note right of VideoSDK Server: Viewer Left; VideoSDK Server-->>Your App Client: Stream Left; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to End Stream; activate VideoSDK Server; Note right of VideoSDK Server: Kick off all the Viewers; VideoSDK Server--)Social Media: End Pushing RTMP Stream; VideoSDK Server-->>Your App Client: Trigger Webhook to Stop Recording; VideoSDK Server-->>Your App Client: Stream End; deactivate VideoSDK Server;`}/>

<br/>

:::info

Video & Audio Call example in React.js: [videosdk-rtc-react-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example)

:::
