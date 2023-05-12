---
title: Video SDK Class for ios SDK.
hide_title: false
hide_table_of_contents: false
description: Video SDK Class is a factory for initialize, configure and init meetings.
sidebar_label: VideoSDK Class
pagination_label: VideoSDK Class
keywords:
  - RTC IOS
  - VideoSDK Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: videosdk-class
---

# VideoSDK Class

The entry point into real-time communication SDK.

## using VideoSDK Class

The `VideoSDK Class` includes methods and events to initialize and configure the SDK. It is a factory class.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListGroup>
        <MethodListHeading heading="config(token): void" />
        <MethodListItemLabel name="token"  type={"String"} />
      </MethodListGroup>
      <MethodListGroup name="initMeeting()"  >
        <MethodListHeading heading="initMeeting(meetingId, participantId, participantName, micEnabled, webcamEnabled): Meeting" />
        <MethodListItemLabel name="meetingId"  type={"String"} />
        <MethodListItemLabel name="participantId"  type={"String"} /> // Optional
        <MethodListItemLabel name="participantName"  type={"String"} defaultValue={"Guest"} />
        <MethodListItemLabel name="micEnabled"  type={"Bool"} defaultValue={"true"} />
        <MethodListItemLabel name="webcamEnabled"  type={"Bool"} defaultValue={"true"} />
      </MethodListGroup>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="Config and Init Example"
import VideoSDK

// Configure the token
VideoSDK.config(token: meetingData.token)

// Initialize the meeting
meeting = VideoSDK.initMeeting(
    meetingId: meetingData.meetingId,
    participantName: meetingData.name,
    micEnabled: meetingData.micEnabled,
    webcamEnabled: meetingData.cameraEnabled
)
```
