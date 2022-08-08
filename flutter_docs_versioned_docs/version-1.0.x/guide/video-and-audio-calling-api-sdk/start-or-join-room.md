---
title: Getting Started with Video & Audio Calling
hide_title: false
hide_table_of_contents: false
description: video & audio calling sdk will help you to integrate video & audio calling in your application.
sidebar_label: Start or Join Room
pagination_label: Getting Started Video & Audio Calling
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-or-join-room
---

import Mermaid from '@theme/Mermaid';

# Explore video & audio calling

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Overview

At it's core, VideoSDK RTC is a distributed SFU. It enables highly scalable video & audio meetings unlike vanilla webRTC.

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

## Terminology

#### **Room**

A Room represents real-time audio, video, and/or screen-share session, and is the basic building block for media sharing among participants.

#### **Participants**

Participants are the client applications that are connected to a Room and shares video & audio media with one another.

#### **Local Participant**

Local Participant producing audio or video stream from the local client's media sources

#### **Streams**

Streams are individual video & audio streams produced by the participants in the room

#### **Active Speaker**

Active Speaker represents the participant who is currently producing highest decibels audio stream (in other words speaking)

#### **Active Presenter**

Active Presenter is the participant who is currently sharing his/her screen as a video stream

#### **Main participant**

Main Participant represents the client who shall be displayed on the main screen indicating that he/she is either presenting or speaking

## Architecture

This diagram demonstrates end-to-end flow to implement video & audio calling, record calls and go-live on social media.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request to Auth; activate Your App Server; Note right of Your App Server: JWT Auth using Key and Secret; Your App Server-->>Your App Client: Received Token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request for roomId; activate VideoSDK Server; Note right of VideoSDK Server: Generate unique roomId; VideoSDK Server-->>Your App Client: roomId Received; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to Join; activate VideoSDK Server; Note right of VideoSDK Server: Broadcasting to each participants; VideoSDK Server-->>Your App Client: Room Joined; deactivate VideoSDK Server; Your App Client-)VideoSDK Server: Subscribe to Events; VideoSDK Server--)Your App Client: Get notified on Updates; Your App Client->>VideoSDK Server: Request to Go Live via RTMP; Note right of VideoSDK Server: Composing Real-time Stream; VideoSDK Server--)Social Media: Push RTMP Stream; Your App Client->>VideoSDK Server: Request to Start Recording; Note right of VideoSDK Server: Recording Started; VideoSDK Server-->>Your App Client: Trigger Webhook to Start Recording; Your App Client->>VideoSDK Server: Request to Leave Room; activate VideoSDK Server; Note right of VideoSDK Server: Participant Left; VideoSDK Server-->>Your App Client: Room Left; deactivate VideoSDK Server; Your App Client->>VideoSDK Server: Request to End Room; activate VideoSDK Server; Note right of VideoSDK Server: Kick off all the Participants; VideoSDK Server--)Social Media: End Pushing RTMP Stream; VideoSDK Server-->>Your App Client: Trigger Webhook to Stop Recording; VideoSDK Server-->>Your App Client: Room End; deactivate VideoSDK Server;`}/>
