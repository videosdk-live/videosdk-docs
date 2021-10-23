---
title: Architecture of Real time communication API
hide_title: false
hide_table_of_contents: false
description: Architecture of Real time communication API is quite simple to understand before jumping directly to build application.
sidebar_label: Architecture
pagination_label: Architecture
keywords:
  - RTC API
  - RTC SDK
  - video API
  - audio rooms API
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: architecture
---

## Architecture

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`sequenceDiagram Host->>App Server: Request for token; App Server->>Host: Received token; Host->>App Server: Request for meetingId; App Server->>VideoSDK Server: Request for meetingId; VideoSDK Server->>App Server: Sending meetingId; App Server->>Host: Received meetingId; Host->>Participants: Broadcast meetingId; Host->>App Server: Start Meeting; Participants-->>App Server: Join Meeting; Participants->>App Server: Request for token; App Server->>Participants: Received token; Participants->>App Server: Validate meetingId; Participants->>App Server: Leave Meeting; Host->>App Server: End Meeting;`}/>

## Terminology

### Meeting

A Meeting represents real-time audio, video, and/or screen-share session, and is the basic building block for media sharing among participants.

### Participants

Participants are the client applications that are connected to a Meeting and shares video & audio media with one another.

### Local Participant

Participant producing audio or video stream from the local client's media sources

### Streams

Streams are indiviual video & audio streams produced by the participants in the meeting

### Active Speaker

Active speaker represents the participant who is currently producing highest decibels audio stream (in other words speaking)

### Active presenter

Active presenter is the participant who is currently sharing his/her screen as a video stream

### Main participant

Main participant represents the client who shall be displayed on the main screen indicating that he/she is either presenting or speaking

---
