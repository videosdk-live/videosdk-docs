---
title: Architecture
hide_title: false
hide_table_of_contents: false
description: videosdk architecture is highly scalable and available for large use cases. It provides ecosystem for video experience.
sidebar_label: Architecture
pagination_label: Architecture
keywords:
  - video calling
  - interactive live streaming
  - standard live streaming
  - video on demand
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: architecture
---

# Architecture

## Terminology

- **Your App Server**: Server resides at customer endpoint. It will perform the authentication and authorization checks.
- **Your App Client**: Client App responsible for calling the Video SDK API.
- **VideoSDK Server**: Our servers which will handle all the further requests.

import Mermaid from '@theme/Mermaid';

## Authentication

Authentication and authorization will happen your app server, following diagram represents flow of authentication and authorization.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request for token; Your App Server->>Your App Client: Received token; Your App Client->>Your App Server: Call API; Your App Server->>VideoSDK Server: Call API; VideoSDK Server->>Your App Server: Sending Data; Your App Server->>Your App Client: Received Data;`}/>

## Video and Audio Calling

This diagram demonstrates end-to-end flow to implement video and audio calling, record calls and go-live on social media.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request for meetingId; activate VideoSDK Server; Note right of VideoSDK Server: Generate unique meetingId; VideoSDK Server-->>Your App Client: meetingId Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Join; activate VideoSDK Server; Note right of VideoSDK Server: Broadcasting to each participants; VideoSDK Server-->>Your App Client: Meeting Joined; deactivate VideoSDK Server; Your App Client-)VideoSDK Server: Subscribe to Events; VideoSDK Server--)Your App Client: Get notified on Updates; Your App Client->>VideoSDK Server: Request to Go Live via RTMP; Note right of VideoSDK Server: Composing Real-time Stream; VideoSDK Server--)Social Media: Push RTMP Stream; Your App Client->>VideoSDK Server: Request to Start Recording; Note right of VideoSDK Server: Recording Started; VideoSDK Server-->>Your App Client: Trigger Webhook to Start Recording; Your App Client->>VideoSDK Server: Request to Leave Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Participant Left; VideoSDK Server-->>Your App Client: Meeting Left; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to End Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Kick off all the Participants; VideoSDK Server--)Social Media: End Pushing RTMP Stream; VideoSDK Server-->>Your App Client: Trigger Webhook to Stop Recording; VideoSDK Server-->>Your App Client: Meeting End; deactivate VideoSDK Server;`}/>

## Live Streaming

Before going to live, you need to initilize stream on server. Following diagram describes end-to-end flow of going live, restream it and play it again.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using key and secret; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Create Live Stream; activate VideoSDK Server; Note right of VideoSDK Server: Initialize Live Streaming; VideoSDK Server-->>Your App Client: Get the Live Stream Metadata; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Go Live via RTMP; Note right of VideoSDK Server: Real-time Encoding and Storage; VideoSDK Server-->>Your App Client: Down Stream Live Video; Note right of VideoSDK Server: Adaptive Live Streaming; VideoSDK Server-->>Your App Client: Playback Live Stream; Note right of VideoSDK Server: Adaptive Video Streaming; Your App Client->>VideoSDK Server: Fetch Live Stream Metadata; VideoSDK Server--)Your App Client: Get Live Stream Metadata; Your App Client->>VideoSDK Server: Restream to Social Media; VideoSDK Server--)Social Media: Restream to Social Media; Your App Client-)VideoSDK Server: End Live Stream; VideoSDK Server--)Social Media: End Restrem; Social Media--)VideoSDK Server: Restream Ended; VideoSDK Server--)Your App Client: Live Stream Ended; `}/>

## Video On Demand

Video on demand enables smooth video streaming on demand. It includes video storage, encoding and streaming support. Following diagram describes basic architecture to use video on demand in your application.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to Upload Video; activate VideoSDK Server; Note right of VideoSDK Server: Upload and fetch video metadata; VideoSDK Server-->>Your App Client: Video Metadata Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Encode Video; activate VideoSDK Server; Note right of VideoSDK Server: Encode Video into Different Resolutions; VideoSDK Server-->>Your App Client: Get Master Playlist URL and Thumbnails; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Play Video; Note right of VideoSDK Server: Adaptive Video Streaming; VideoSDK Server-->>Your App Client: Get Video Stream in Chunks;`}/>
