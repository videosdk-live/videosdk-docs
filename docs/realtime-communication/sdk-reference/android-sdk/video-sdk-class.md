---
title: Video SDK Class for android SDK.
hide_title: false
hide_table_of_contents: false
description: Video SDK Class is a factory for initialize, configure and init meetings.
sidebar_label: VideoSDK Class
pagination_label: VideoSDK Class
keywords:
  - RTC Android
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

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="meetingId" option={"required"} type={"string"} />
      <MethodListItemLabel name="name" option={"optional"} type={"string"} />
      <MethodListItemLabel name="micEnabled" option={"optional"} type={"bool"} defaultValue={"true"} />
      <MethodListItemLabel name="webcamEnabled" option={"optional"} type={"bool"} defaultValue={"true"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel name="initialize(Context context)"  type={"void"} />
      <MethodListItemLabel name="config(String token)"  type={"void"} />
      <MethodListItemLabel name="initMeeting(Context context, String meetingId, String name, boolean micEnabled,
            boolean webcamEnabled)"  type={"Meeting"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

```js title="initMeeting"
// Configure the token
ZujoSDK.config(token)

// Initialize the meeting
Meeting meeting = ZujoSDK.initMeeting({
  context,
  meetingId, // required
  name, // required
  micEnabled, // required
  webcamEnabled, // required
});
```
