---
sidebar_position: 1
---

# Introduction

Real-time comunication SDK is built with blend of webRTC and optimised UDP protocol. Our SDK helps developers to add real-time audio and video calls to any mobile app or web application.

With our `embeded-sdk`, you can embeded a video call widget in your web application. It supports 98% of the devices across all platforms and adaptive video calling for better quality calls with low latency. Developers can also customise `embeded-sdk` to make it more convenient for your application.

Our research team has worked hard to handled all the edge cases so you just have to focus on what matters.

![Embeded SDK Example to add video call widget in your web application](/img/Zujonow-whitelabel-min.jpg)

## Architecture

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`sequenceDiagram Host->>App Server: Request for token; App Server->>Host: Received token; Host->>App Server: Request for meetingId; App Server->>VideoSDK Server: Request for meetingId; VideoSDK Server->>App Server: Sending meetingId; App Server->>Host: Received meetingId; Host->>Participants: Broadcast meetingId; Host->>App Server: Start Meeting; Participants-->>App Server: Join Meeting; Participants->>App Server: Request for token; App Server->>Participants: Received token; Participants->>App Server: Validate meetingId; Participants->>App Server: Leave Meeting; Host->>App Server: End Meeting;`}/>

## Ways to start developing

### 1. Dashboard

Create or schedule meetings instantly using dashboard and try it out.

### 2. Embeded SDK

Best way to start is embeded a working video call widget in your app.

### 3. Programmable API

Programmable API enables opportunity to create and manage rooms directly from your backend server.

### 4. Custom Meetings Interface SDK

Our front-end sdk provides fine control to design custom user interface and experience specifically for your needs.
