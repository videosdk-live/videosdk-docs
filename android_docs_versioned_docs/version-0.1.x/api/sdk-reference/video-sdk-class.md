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
      <MethodListItemLabel description={"set meeting id"} name="meetingId" option={"required"} type={"string"} />
      <MethodListItemLabel description={"set local participant's name"} name="name" option={"required"} type={"string"} />
      <MethodListItemLabel description={"set local participant's mic state"} name="micEnabled" option={"required"} type={"bool"} />
      <MethodListItemLabel description={"set local participant's webcam state"} name="webcamEnabled" option={"required"} type={"bool"}/>
      <MethodListItemLabel description={"set local participant's Id"} name="paricipantId" option={"required"} type={"string"}/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel description={"initialize the MediasoupClient"} name="initialize(Context context)"  type={"void"} />
      <MethodListItemLabel description={"configure the token"} name="config(String token)"  type={"void"} />
      <MethodListItemLabel description={"initialize the meeting"} 
      name="initMeeting(
        Context context, 
        String meetingId, 
        String name, 
        boolean micEnabled,
        boolean webcamEnabled,
        String participantId
      )"  type={"Meeting"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

## Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="initMeeting"
// Configure the token
VideoSDK.config(token)

// Initialize the meeting
Meeting meeting = VideoSDK.initMeeting(
      context,
      meetingId, // required
      name, // required
      micEnabled, // required
      webcamEnabled, // required
      null, // required
      null // required
      )
});
```

</TabItem>

<TabItem value="Java">

```js title="initMeeting"
// Configure the token
VideoSDK.config(token)

// Initialize the meeting
Meeting meeting = VideoSDK.initMeeting({
  context,
  meetingId, // required
  name, // required
  micEnabled, // required
  webcamEnabled, // required
  null, // required
  null // required
});
```

</TabItem>

</Tabs>
