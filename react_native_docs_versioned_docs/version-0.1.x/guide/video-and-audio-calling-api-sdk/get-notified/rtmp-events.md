---
title: RTMP Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: RTMP Events
pagination_label: RTMP Events
keywords:
  - audio calling
  - video calling
  - real-time communication 
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: rtmp-events
---

# RTMP Events - React Native

VideoSDK provides the `onLivestreamStateChanged()` event, which informs you about the current state of the livestream for the meeting.

### onLivestreamStateChanged()

- This event is triggered when the  livestream status of the meeting changes.
- It can be subscribed to using the `useMeeting` hook.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

```javascript
import { Constants, useMeeting } from "@videosdk.live/react-native-sdk";

function onLivestreamStateChanged(data) {
  const { status } = data;

  if (status === Constants.livestreamEvents.LIVESTREAM_STARTING) {
    console.log("Meeting livestream is starting");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STARTED) {
    console.log("Meeting livestream is started");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STOPPING) {
    console.log("Meeting livestream is stopping");
  } else if (status === Constants.livestreamEvents.LIVESTREAM_STOPPED) {
    console.log("Meeting livestream is stopped");
  } else {
    //
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onLivestreamStateChanged,
  ...
});
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onLivestreamStateChanged()](/react-native/api/sdk-reference/use-meeting/events#onlivestreamstatechanged)
