---
title: Video on Demand
hide_title: false
hide_table_of_contents: false
description: videosdk.live dashboard will help you to get real-time updates of all the meetings, live streams and videos. It will also help you to monitor services.
sidebar_label: Video on Demand
pagination_label: Video on Demand
keywords:
  - dashboard
  - video API
  - monitor usage
  - realtime query
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: video-on-demand
---

:::caution

**This page has been deprecated. Please follow this [link](https://docs.videosdk.live/) or ping us on [Discord](https://discord.gg/videosdk-live-876774498798551130)**

:::

Dashboard Video on Demand (VOD) page is all about your consumed minutes and listing of uploaded videos.

This page Contains two major section [Overview](/docs/guide/dashboard/video-on-demand#1-overview) and [Videos](/docs/guide/dashboard/video-on-demand#2-videos).

## 1. Overview

It displays the overall uses of Video on Demand (VOD) minutes :

### A. Encoding

It's completely dependent on video duration, if a particular video duration is 10 mins and we are performing encoding then our encoding minutes will be consider 10 mins.

### B. Storage

It indicates the total number of stored video duration in minutes.

For example, we have stored 3 videos with 10 mins, 25 mins and 2 mins duration. So our storage minutes will be consider sum of 3 videos duration which is 37 mins

### C. Stream

Streaming Minutes are the total number of minutes of video content that have been streamed by your viewers.

![Video SDK Home Dashboard](/img/dashboard/vod-overview.png)

## 2. Videos

This section contains listing of encoded video in tabular format, which contains below properties :

1. **Video Id** - The unique identifier of particular video.
2. **Video Details** - Includes basic information such as **Video Duration** (Hours, Minutes, Second) and **Video Size**.
3. **Status** - Indicates the staus of encodig which can be **Queued**, **Processing**, **Completed** and **Failed**.
4. **Encoding Duration** - Indicates the number of time taken by encoding.
5. **Created At** - Creation date.

![Video SDK Home Dashboard](/img/dashboard/vod-videos.png)

By pressing video item you can see particular item details. The video details divided in to four section which are listed below :

1. **Original Video** - This section contains **Original Video URL**, **Video Duration**, **Video Resolution** and **Video File Format**.

- You can download original video by pressing URL and also you can copy video URL by clicking copy button.

2. **Encoded Video** - This section contains **Encoded video Format**, **Actual Resolution**, **Encoded video size** and **Copy Button** whcih can help you to copy encoded video URL.
3. **Thumbnails** - This section contains the **Video Thumbnail Info** which you have specify during creating encoding job.
4. **Webhook Url** - After completion of encoding, it will redirect to provided webhook URL **[Optional]**.

![Video SDK Home Dashboard](/img/dashboard/vod-sidebar.png)

The last section is for [API Reference](https://docs.videosdk.live/docs/video-on-demand/intro/) only.
