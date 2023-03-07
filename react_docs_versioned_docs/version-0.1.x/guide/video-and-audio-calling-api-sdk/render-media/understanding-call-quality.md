---
title: Understanding Call Quality | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Understanding Call Quality
pagination_label: Understanding Call Quality
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: understanding-call-quality
---

# Understanding Call Quality

When developing a video call app, customer satisfaction heavily depends on your app's video and audio quality and its fluctuation.

## Call Quality

If we look at the video quality from the user's perspective, a good video quality can be defined as smooth and clear video, along with a crystal clear audio. If the same is viewed from the developer's perspective, a good video quality can be determined as a high resolution, high frame rate video with minimal latency along with a high bitrate audio with minimal audio loss.

## Factors affecting Quality

When it comes to measuring the video and audio quality of a call, there are multiple variables to consider, and the most common factors which affect the video and audio quality are:

### `1. Network Bandwidth`

- Network bandwidth is a measurement of a user's network capability to how large data can be received and send.
- If the bandwidth is low at participant side, he/she is likely to get pixelated or frozen video along with robotic voice or minor breaking in the audio.
- Frequent change in the network providers can also result in high fluctuation of the internet bandwidth, which can also result in poor quality video.

### `2. Latency`

- Latency basically means the time it takes for data to transfer from one machine to another.
- If the meeting is hosted in `Ohio` region, and users are joining from `Singapore` region, so this will create long delay for data to transfer from one machine to another, thus you should pick a server according to your user base.
- In VideoSDK you can set the server during creation of Meeting/Room.

### `3. CPU Usage`

- CPU Usage is an also quite determining factor as all the audio and video streams which are going out and coming in will have to encoded or decoded which will require a significant amount of computation.
- The high the resolution and frame rate of the videos, the larger would be the computation required, which can be a reason for the bottleneck of delivering a good quality video.
- If the CPU is being consumed heavily, it can also result in a choppy or robotic audio.

### `4. Camera and Mic Quality`

- The camera and microphone should capture good quality of streams so that remote user doesn't get low quality stream even if he/she has good network bandwidth

## Identifying the Quality Issues

In order to identify quality issues, VideoSDK collects multiple audio and video related metrics which can help in pinpointing the quality issues. Let's have a look at those metrics and understand what the indicates.

### `1. Resolutions and Framerates`

- Resolution and frame rate are key metrics for video quality in a video call app. Resolution refers to the number of pixels in a video image, while frame rate refers to the number of frames displayed per second.

- Higher resolutions and frame rates can provide better video quality, but they also require more bandwidth and processing power. It's important to optimize these metrics for the devices and network conditions of your users.

- For example, if most of your users are on mobile devices, a lower resolution and frame rate may be more appropriate to ensure smooth playback and minimize bandwidth usage.

- If most of your users are on mobile and desktop devices, having higher resolution for desktop and mid-resolutions for mobile devices can help in improving the performance and quality as we will be saving the bandwidth on the mobile end.

![resolution-and-bitrate](/img/resolution-and-bitrate.png)

### `2. Bitrate`

- Bitrate is the number of bits per second send or received during the transmission of audio or video streams. Bitrate can be a key parameter to determine the quality of the audio or video streams, as it should be fine-tuned for each resolution to achieve the best match of performance and bandwidth utilization.

- If the users are having excellent network conditions, higher bitrate can result in much better video quality but on the other hand, having very high bitrates on the mobile devices can result in heating issues due to high computation required to encode and decode the videos.

### `3. Packet Loss`

- Packet loss is a metric that indicates how many data packets are lost during transmission from the sender to the receiver. Packet loss can occur due to network congestion, hardware or software issues, or network latency. Higher packet loss can result in poor video and audio quality, as the missing packets can cause gaps or distortions in the media stream.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/packet-loss-burst.mp4' width={"100%"}/>

</div>

### `4. Jitter`

- The audio and video packets are sent out at random intervals over a specified time frame as they are being sent between the server and client. Nevertheless, jitter is produced when there is a variation in transmitting or receiving these data packets as a result of a faulty network connection.

- When data packets delay while being transmitted to the participant, usually because the network is busy. They'll display as pixelated video on a video call or sound choppy, distorted, or robotic on a voice call as they arrive. They'll arrive at random intervals, creating jitter.

### `5. Round Trip Time (Latency)`

- Round trip time is the amount of time required to transmit the data packets to send or receive from the server. If the servers are located very far from the user's location, they can observe a high latency (delay).

- With VideoSDK, these factor is taken care of as we automatically choose the nearest available server for participants. But if you are geofencing to a certain region, you should make sure that you choose the server which will be nearest to your users.

<center>

![resolution-and-bitrate](/img/rtt.png)

</center>

## Checking Realtime Statistics

VideoSDK provides methods to check the realtime statistics of the audio and video of all the participants.

### `getVideoStats()`

- `getVideoStats()` returns an array of object containing the different quality parameters for video stream which can be accessed through the `useParicipant` hook.

- These objects will have values for the specific participant's video stream resolution, frame rate, bitrate, jitter, round trip time, and packet loss.

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/realtime-stats.mp4' width={"100%"}/>

</div>

### `getAudioStats()`

- `getAudioStats()` returns an array of object containing the different quality parameters for audio stream which can be accessed through the `useParicipant` hook.

- These objects will have values for the specific participant's audio stream bitrate, jitter, round trip time and packet loss.

### `getShareStats()`

- `getShareStats()` returns an array of object containing the different quality parameters for screen share stream which can be accessed through the `useParicipant` hook.

- These objects will have values for the specific participant's screen share stream resolution, frame rate, bitrate, jitter, round trip time, and packet loss.

:::note
To show the popup dialog for the participant's realtime stats, you can [refer to this component](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/utils/common.js#L142).
:::

## Quality analysis Graphs

For all the sessions taken using the VideoSDK, you can find the quality analysis graphs from the [VideoSDK Dashboard](https://app.videosdk.live/meetings/sessions) which can help you visualize the data you are seeing in realtime and identify the spikes of a few parameters happing during call which can help figure out the reason for the quality issue.

![quality analysis](/img/quality-analysis.png)

## API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [getVideoStats()](/react/api/sdk-reference/use-participant/methods#getvideostats)
- [getAudioStats()](/react/api/sdk-reference/use-participant/methods#getaudiostats)
- [getShareStats()](/react/api/sdk-reference/use-participant/methods#getsharestats)
