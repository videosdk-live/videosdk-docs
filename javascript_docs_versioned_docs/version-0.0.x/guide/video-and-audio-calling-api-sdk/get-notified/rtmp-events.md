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

# RTMP Events

VideoSDK provides `livestream-state-changed` event which will notify you of the current state of livestream for the meeting.

### livestream-state-changed

- This event will be triggered when the meeting's livestream status changed.
- This event can be subscribed from the `meeting` object.

### Example

Here is the usage of the event mentioned in this page.

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const Constants = VideoSDK.Constants;

meeting.on("livestream-state-changed", (data) => {
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
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [livestream-state-changed](/javascript/api/sdk-reference/meeting-class/events#livestream-state-changed)
