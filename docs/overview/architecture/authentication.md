---
title: Authentication Architecture
hide_title: false
hide_table_of_contents: false
description: Authentication architecture will help you to implement authentication strategies.
sidebar_label: Authentication
pagination_label: Authentication
keywords:
  - authentication
  - authorization
  - JWT token
  - OAuth
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: authentication
---

# Architecture

import Mermaid from '@theme/Mermaid';

## Authentication

Authentication and authorization will happen your app server, following diagram represents flow of authentication and authorization.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request for token; activate Your App Server; Note left of Your App Server: Generate token using API Key and Secret Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Call API with Token; activate VideoSDK Server; Note left of VideoSDK Server: Validates Token with API Key and Secret VideoSDK Server-->>Your App Client: Receive Information; deactivate VideoSDK Server;`}/>

<br/>

:::info

Authentication example in Node.js: [videosdk-rtc-nodejs-sdk-example](https://github.com/videosdk-live/videosdk-rtc-nodejs-sdk-example)

:::
