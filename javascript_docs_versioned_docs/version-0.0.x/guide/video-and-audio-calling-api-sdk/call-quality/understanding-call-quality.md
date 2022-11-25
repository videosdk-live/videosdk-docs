---
title: Understand VideoSDK Call Quality
hide_title: false
hide_table_of_contents: false
description: This guide will help you understand call quality parameters.
sidebar_label: Understanding Call Quality
pagination_label: Understanding Call Quality
keywords:
  - audio calling quality
  - video calling quality
  - real-time communication quality
  - quality
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: understanding-call-quality
---

When developing an video call app, customer satisfaction heavily depends on your app's video and audio quality and its fluctuation.

When it comes to measuring the video and audio quality of a call, their are multiple variables to consider and the most common factors which affect the video and audio quality are:

1. Network Bandwidth

- Network bandwidth is a measurement of a user's network capability to how large data can be receive and send.
- If the bandwidth is low at participant side, he/she is likely to get pixeleted or frozen video along with robotic voice or minor breaking in the audio.

2. Camera and Mic Quality

- The camera and microphone should capture good quality of streams so that remote user doesn't get low quality stream even if he/she has good network bandwidth

3. Latency

- Latency basically means the time it takes for data to transfer from one machine to another.
- If the meeting is hosted in `Ohio` region, and users are joining from `Singapore` region, so this will create long delay for data to transfer from one machine to another, thus you should pick a server according to your user base.
- In VideoSDK you can set the server during creation of Meeting/Room.
