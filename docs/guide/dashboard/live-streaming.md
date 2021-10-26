---
title: Live Streaming
hide_title: false
hide_table_of_contents: false
description: videosdk.live dashboard will help you to get real-time updates of all the meetings, live streams and videos. It will also help you to monitor services.
sidebar_label: Live Streaming
pagination_label: Live Streaming
keywords:
  - dashboard
  - video API
  - monitor usage
  - realtime query
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: live-streaming
---

Dashboard Live Streams page is all about your conducted number of live streams and list of live streams recordings.

## Live Streams

This section contains listing of live streams in tabular format, which contains below properties :

1. **Id** - The unique identifier of particular live stream.
2. **Name** - Name of the particular live stream.
3. **Re-stream** - Number of re-stream count for that live stream.
4. **Created At** - Creation date.

![Video SDK Home Dashboard](/img/dashboard/livestream-list.png)

You can play recorded live stream by pressing play button on left side of table items.

You can easily search your streams using search bar by providing **Id** as value.

By pressing live stream item you can see particular item details. The live streams details divided in to two section which are listed below :

1. **Streaming URLs** - This section contains **Upstream URL** for start broadcasting (You can use OBS, Wirecast and Streamaxia open source streaming softwares), **Downstream URL** for playback live stream and **Recording URL** for playback live stream later.

- You can copy this URLs by pressing copy button icon on right side of url.

2. **Re-Streaming Details** - This section contains re-stream urls and key, which you have added during creation of live streams.

![Video SDK Home Dashboard](/img/dashboard/livestream-sidebar.png)

The last section is for [API Reference](https://docs.videosdk.live/docs/live-streaming/intro/) only.
