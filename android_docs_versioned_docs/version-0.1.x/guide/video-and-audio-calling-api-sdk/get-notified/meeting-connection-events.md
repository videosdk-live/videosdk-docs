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

# Meeting Connection Events - Android

VideoSDK provides `onMeetingStateChanged` event which will notify you of the current connection state of the meeting.

### onMeetingStateChanged

- This event will be triggered when state of meeting changes.
- It will pass **`state`** as an event callback parameter which will indicate current state of the meeting.
- All available states are `CONNECTING`, `CONNECTED`, `FAILED`, `DISCONNECTED`, `CLOSING`, `CLOSED`.
- You can implement this method of the abstract Class `MeetingEventListener` and add the listener to `Meeting` class using the `addEventListener()` method of `Meeting` Class.

### Example

Here is the usage of the event mentioned in this page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onMeetingStateChanged(state: String?) {
      when (state) {
        "CONNECTING" -> Log.d("onMeetingStateChanged: ", "Meeting is Connecting")
        "CONNECTED" -> Log.d("onMeetingStateChanged: ", "Meeting is Connected")
        "FAILED" -> Log.d("onMeetingStateChanged: ", "Meeting connection failed")
        "DISCONNECTED" -> Log.d("onMeetingStateChanged: ","Meeting connection disconnected abruptly")
        "CLOSING" -> Log.d("onMeetingStateChanged: ", "Meeting is closing")
        "CLOSED" -> Log.d("onMeetingStateChanged: ", "Meeting connection closed")
      }
  }
}

override fun onCreate(savedInstanceState: Bundle?) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting!!.addEventListener(meetingEventListener)
}
```

</TabItem>

<TabItem value="Java">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onMeetingStateChanged(String state) {
    switch (state) {
        case "CONNECTING":
          Log.d("onMeetingStateChanged: ", "Meeting is Connecting");
          break;
        case "CONNECTED":
          Log.d("onMeetingStateChanged: ", "Meeting is Connected");
          break;
        case "FAILED":
          Log.d("onMeetingStateChanged: ", "Meeting connection failed");
          break;
        case "DISCONNECTED":
          Log.d("onMeetingStateChanged: ", "Meeting connection disconnected abruptly");
          break;
        case "CLOSING":
          Log.d("onMeetingStateChanged: ", "Meeting is closing");
          break;
        case "CLOSED":
          Log.d("onMeetingStateChanged: ", "Meeting connection closed");
          break;
    }
  }
}

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting.addEventListener(meetingEventListener);
}
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onMeetingStateChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingstatechanged)
