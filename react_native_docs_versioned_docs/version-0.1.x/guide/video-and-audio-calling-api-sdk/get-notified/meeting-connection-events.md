---
title: Meeting Connection Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Meeting Connection Events
pagination_label: Meeting Connection Events
keywords:
  - audio calling
  - video calling 
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-connection-events
---

# Meeting Connection Events - React Native

VideoSDK offers the `onMeetingStateChanged()` event, providing information about the current connection state of the meeting.

### onMeetingStateChanged()

- This event is triggered when the state of a meeting changes.
- The event callback will include the current state of the meeting, which can be one of the following: `CONNECTING`, `CONNECTED`, `FAILED`, `DISCONNECTED`, `CLOSING`, `CLOSED`. 
- It can be subscribed to using the `useMeeting` hook.

### Example

Here is an example demonstrating the usage of the event mentioned on this page.

```javascript
function onMeetingStateChanged(data) {
  const { state } = data;

  swtich(state){
    case 'CONNECTING':
      console.log("Meeting is Connecting" );
      break;
    case 'CONNECTED':
      console.log("Meeting is Connected" );
      break;
    case 'FAILED':
      console.log("Meeting connection failed" );
      break;
    case 'DISCONNECTED':
      console.log("Meeting connection disconnected abruptly" );
      break;
    case 'CLOSING':
      console.log("Meeting is closing" );
      break;
    case 'CLOSED':
      console.log("Meeting connection closed" );
      break;
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onMeetingStateChanged,
  ...
});
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onMeetingStateChanged()](/react-native/api/sdk-reference/use-meeting/events#onmeetingstatechanged)
