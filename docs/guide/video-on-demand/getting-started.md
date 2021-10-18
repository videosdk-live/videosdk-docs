---
title: Getting Started with Video On Demand
hide_title: false
hide_table_of_contents: false
description: Video On demand sdk will help you to integrate video streaming in your application.
sidebar_label: Getting Started
pagination_label: Getting Started Live Streaming
keywords:
  - video on demand
  - video streaming
  - video encoding
  - video hosting
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';

# Explore video on demand

This guide will get you running with the VideoSDK Video On Demand in minutes.

## Overview

At it's core, VideoSDK Video On Demand is a sclable API for video encoding and streaming. It eanbles high quality video streaming experience.

## Architecture

Video on demand enables smooth video streaming on demand. It includes video storage, encoding and streaming support. Following diagram describes basic architecture to use video on demand in your application.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to Upload Video; activate VideoSDK Server; Note right of VideoSDK Server: Upload and fetch video metadata; VideoSDK Server-->>Your App Client: Video Metadata Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Encode Video; activate VideoSDK Server; Note right of VideoSDK Server: Encode Video into Different Resolutions; VideoSDK Server-->>Your App Client: Get Master Playlist URL and Thumbnails; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Play Video; Note right of VideoSDK Server: Adaptive Video Streaming; VideoSDK Server-->>Your App Client: Get Video Stream in Chunks;`}/>

<br/>

:::info

Video On Demand example in React.js: [videosdk-vod-react-api-example](https://github.com/videosdk-live/videosdk-vod-react-api-example)

:::
