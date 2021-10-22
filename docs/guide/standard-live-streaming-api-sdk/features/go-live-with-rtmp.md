---
title: Live Streaming Go Live With- RTMP | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Live Streaming Go Live With- RTMP documentation offers the most flexibility and control over your live viewing experience, build a custom integration with your live streaming web & app.
sidebar_label: Go Live With RTMP
pagination_label: Go Live With RTMP
keywords:
  - live streaming
  - live broadcasting
  - interactive live streaming
  - live audio streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-with-rtmp
---

# Live Stream - Go Live With- RTMP

In previous step, we have created live stream using videoSDK API and in response we got `upstreamUrl` and `streamKey`.

Using `upstreamUrl` and `streamKey` we can start broadcasting live stream with any open source software such as **OBS Studio**, **VideoLan**, **Ant Media**, **Streamlabs OBS**, etc.

This guide will make you understand how to stream in OBS Studio .

## Step 1: Add Video/Audio Sources

To add a video source, such as a webcam or a camera connected via a capture card, click on the “+” sign that is inside the “Sources” widget.

This will prompt you to add a type of video source you can add.

![Video SDK Home Dashboard](/img/obs-source.png)

## Step 2: Set up RTMP url and stream key

- Go to OBS Studio settings by clicking the **Settings** button in the bottom-right area of the application window.
- The first tab, labeled **General** doesn't have anything too critical to review. However, here, you can choose your language and select a light or dark theme.
- Now, click on the next tab labeled **Stream** in the OBS Studio settings window and perform below steps

  1. Select **Custom...** value in Service dropdown.
  2. Copy this `rtmp://live.zujonow.com/live` and paste it to **Server** textfield.
     :::note
     `upstreamUrl` consist two part, for example, `rtmp://live.zujonow.com/live/eb175-5-4e5-60-aacfce300b` is our `upstreamUrl`.

     - **serverURL** : `rtmp://live.zujonow.com/live` this part we call it as our serverURL.
     - **streamKey** : `eb175-5-4e5-60-aacfce300b` this part we call it as our streamKey.
       :::

  3. Add `streamKey` in **Stream Key** textfield, which have generated in [Create Live Stream](/docs/guide/standard-live-streaming-api-sdk/features/create-new-live-stream).

- Now, click on **apply** and **ok**.

![Video SDK Home Dashboard](/img/obs-settings.png)

## Step 3: Start Broadcasting

After all configuration, you can broadcast stream by clicking **Start Streaming** on bottom-right area of the application window.

![Video SDK Home Dashboard](/img/obs-start.png)

## Step 4: Stop Broadcasting

You can stop broadcast stream by clicking **Stop Streaming** on bottom-right area of the application window.

![Video SDK Home Dashboard](/img/obs-stop.png)
