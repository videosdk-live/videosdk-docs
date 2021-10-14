---
title: Record Live Stream
hide_title: false
hide_table_of_contents: false
description: Live Streaming architecture helps you to understand how to implement scalable live broadcasting applications.
sidebar_label: Record Live Stream
pagination_label: Record Live Stream
keywords:
  - live streaming
  - live broadcasting
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording
---

## Why ?

With so much live video on the web, recording live stream is becoming an essential tool.

Whether you want to offer on-demand access to the event after it has taken place or you want a copy of the live stream for your archive, recording your live stream is a good idea.

## Overview

This guide will provide an overview of how we can achieve recording feature in live stream.

For Enable recording, you have to provide `record` property to `true` in body params, while [Creating Live Stream](/docs/guide/standard-live-streaming/features/create-live-stream). In response you will get `recordingUrl` , you can play it on any vide player which support HLS fromat

In case you provide wrong configuration, while creating live stream, you can update configuration using [Update Live Stream](/docs/guide/standard-live-streaming/features/update-live-stream).

## Dashboard

You can play recorded live stream on your [Dashboard](https://app.videosdk.live/live-streams/all-live-streams).

![Video SDK Home Dashboard](/img/recording-play.png)
