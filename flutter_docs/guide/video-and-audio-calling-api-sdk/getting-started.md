---
title: Get Started with Video & Audio Call - Video SDK Documentation
hide_title: false
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

# Video / Audio Getting started

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Overview

At it's core, VideoSDK RTC is a distributed SFU(Selective Forwarding Unit). It eanbles highly scalable video & audio meetings unlike vanilla webRTC.

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

## Steps

import Card from '@theme/Card';

<div class="container guide-steps-block">
  <div class="row ">
    <div class="col col--6">
      <Card heading="1. Signup & Create API Key" link="/flutter/guide/video-and-audio-calling-api-sdk/signup-and-create-api" description="Generate Your API Key" />
    </div>
     <div class="col col--6">
      <Card heading="2. Client Setup" link="/flutter/guide/video-and-audio-calling-api-sdk/supported-platforms" description="SDK Integration with client" />
    </div>
  </div>
   <div class="row ">
   <div class="col col--6" >
      <Card heading="3. Server Setup" link="/flutter/guide/video-and-audio-calling-api-sdk/server-setup" description="Integrate server with API key"  />
    </div>
    <div class="col col--6">
      <Card heading="4. Start or Join Meeting" link="/flutter/guide/video-and-audio-calling-api-sdk/features/start-join-meeting" description="Enter in Meeting" />
    </div>
  </div>
</div>

## Architecture

This diagram demonstrates end-to-end flow to implement video & audio calling, record calls and go-live on social media.

![Video-Sdk-Architecture!](/img/video-sdk-architecture.svg)
