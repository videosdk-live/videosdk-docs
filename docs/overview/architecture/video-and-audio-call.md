---
title: Video & Audio Calling Architecture
hide_title: false
hide_table_of_contents: false
description: Video & Audio Calling architecture helps you to understand how to implement scalable product with all the features.
sidebar_label: Video & Audio Calling
pagination_label: Video & Audio Calling
keywords:
  - video calling
  - audio calling
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: video-and-audio-calling
---

# Architecture

import Mermaid from '@theme/Mermaid';

## Video & Audio Calling

This diagram demonstrates end-to-end flow to implement video & audio calling, record calls and go-live on social media.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request for meetingId; activate VideoSDK Server; Note right of VideoSDK Server: Generate unique meetingId; VideoSDK Server-->>Your App Client: meetingId Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Join; activate VideoSDK Server; Note right of VideoSDK Server: Broadcasting to each participants; VideoSDK Server-->>Your App Client: Meeting Joined; deactivate VideoSDK Server; Your App Client-)VideoSDK Server: Subscribe to Events; VideoSDK Server--)Your App Client: Get notified on Updates; Your App Client->>VideoSDK Server: Request to Go Live via RTMP; Note right of VideoSDK Server: Composing Real-time Stream; VideoSDK Server--)Social Media: Push RTMP Stream; Your App Client->>VideoSDK Server: Request to Start Recording; Note right of VideoSDK Server: Recording Started; VideoSDK Server-->>Your App Client: Trigger Webhook to Start Recording; Your App Client->>VideoSDK Server: Request to Leave Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Participant Left; VideoSDK Server-->>Your App Client: Meeting Left; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to End Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Kick off all the Participants; VideoSDK Server--)Social Media: End Pushing RTMP Stream; VideoSDK Server-->>Your App Client: Trigger Webhook to Stop Recording; VideoSDK Server-->>Your App Client: Meeting End; deactivate VideoSDK Server;`}/>

<br/>

:::info

Video & Audio Call example in React.js: [videosdk-rtc-react-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example)

:::
