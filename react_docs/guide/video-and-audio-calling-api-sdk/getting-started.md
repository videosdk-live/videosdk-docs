---
title: Get Started with Video & Audio Call - Video SDK Documentation
hide_title: true
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Getting Started
pagination_label: Getting Started
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';
import GettingStarted from '../../../mdx/introduction/_getting-started.mdx';

<GettingStarted title="Get Started with React JS" />


## Steps

import Card from '@theme/Card';

<div class="container guide-steps-block">
  <div class="row ">
    <div class="col col--6">
      <Card heading="1. Get your API key and Secret" link="/react/guide/video-and-audio-calling-api-sdk/signup-and-create-api" description="Generate your API key and Secret from Video SDK." />
    </div>
     <div class="col col--6">
      <Card heading="2. Client Setup for React JS" link="/react/guide/video-and-audio-calling-api-sdk/react-js-sdk" description="Easy to integrate SDK with cross-channel support." />
    </div>
  </div>
  <div class="row ">
   <div class="col col--6" >
      <Card heading="3. Authentication and Tokens" link="/react/guide/video-and-audio-calling-api-sdk/server-setup" description="Setup secured server authentication and authorization."  />
    </div>
    <div class="col col--6">
      <Card heading="4. Start a Voice / Video Call" link="/react/guide/video-and-audio-calling-api-sdk/quick-start" description="Get started with step by step guide of integrating Video SDK." />
    </div>
  </div>
  <div class="row ">
   <div class="col col--6" >
      <Card heading="5. Basic Features" link="/react/guide/video-and-audio-calling-api-sdk/features/start-join-meeting" description="Explore basic features such as join, leave and customise sessions."  />
    </div>
    <div class="col col--6">
      <Card heading="6. Advanced Features" link="/react/guide/video-and-audio-calling-api-sdk/features/play-external-video" description="Explore advanced features such as screen sharing, recording and live streaming." />
    </div>
  </div>
</div>

## Architecture

This diagram demonstrates end-to-end flow to implement video & audio calling, record calls and go-live on social media.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request for meetingId; activate VideoSDK Server; Note right of VideoSDK Server: Generate unique meetingId; VideoSDK Server-->>Your App Client: meetingId Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Join; activate VideoSDK Server; Note right of VideoSDK Server: Broadcasting to each participants; VideoSDK Server-->>Your App Client: Meeting Joined; deactivate VideoSDK Server; Your App Client-)VideoSDK Server: Subscribe to Events; VideoSDK Server--)Your App Client: Get notified on Updates; Your App Client->>VideoSDK Server: Request to Go Live via RTMP; Note right of VideoSDK Server: Composing Real-time Stream; VideoSDK Server--)Social Media: Push RTMP Stream; Your App Client->>VideoSDK Server: Request to Start Recording; Note right of VideoSDK Server: Recording Started; VideoSDK Server-->>Your App Client: Trigger Webhook to Start Recording; Your App Client->>VideoSDK Server: Request to Leave Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Participant Left; VideoSDK Server-->>Your App Client: Meeting Left; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to End Meeting; activate VideoSDK Server; Note right of VideoSDK Server: Kick off all the Participants; VideoSDK Server--)Social Media: End Pushing RTMP Stream; VideoSDK Server-->>Your App Client: Trigger Webhook to Stop Recording; VideoSDK Server-->>Your App Client: Meeting End; deactivate VideoSDK Server;`}/>
