---
title: Meeting Builder Widget for flutter SDK.
hide_title: false
hide_table_of_contents: false
description: Video SDK Class is a factory for initialize, configure and init meetings.
sidebar_label: Meeting Builder Widget
pagination_label: Meeting Builder Widget
keywords:
  - RTC IOS
  - VideoSDK Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-builder-widget
---

# Meeting Builder Widget

The entry point into real-time communication SDK.

## Using Meeting Builder Widget

The `Meeting Builder Widget` includes methods and events to initialize and configure the SDK. It is a factory class.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
<MethodListHeading heading="Properties" />
  <MethodListGroup name="initMeeting()">
    <MethodListItemLabel name="meetingId" type={"String"} />
    <MethodListItemLabel name="displayName" type={"String"}   />
    <MethodListItemLabel name="token" type={"String"}   />
    <MethodListItemLabel name="micEnabled" type={"Bool"}   />
    <MethodListItemLabel name="webcamEnabled" type={"Bool"}   />
    <MethodListItemLabel name="notification" type={"NotificationInfo"}   />
    <MethodListItemLabel name="builder" type={"Widget Function(Meeting)"}   />
  </MethodListGroup>
</MethodListGroup>

## Example

```js title="Configure MeetingBuilder Example"
MeetingBuilder(
  meetingId: "<meeting-id>",
  displayName: "Chintan",
  token: "<token>",
  micEnabled: true,
  webcamEnabled: true,
  notification: const NotificationInfo(
    title: "Video SDK",
    message: "Video SDK is sharing screen in the meeting",
    icon: "notification_share", // drawable icon name
  ),
  builder: (Meeting meeting) {
    return Text("Meeting screen");
  },
)
```