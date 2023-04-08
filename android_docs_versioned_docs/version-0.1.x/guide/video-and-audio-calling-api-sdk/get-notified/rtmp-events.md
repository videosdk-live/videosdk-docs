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

VideoSDK provides `onLivestreamStateChanged` event which will notify you of the current state of livestream for the meeting.

### onLivestreamStateChanged

- This event will be triggered when the meeting's livestream status changed.
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

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onLivestreamStateChanged(livestreamState: String?) {
    when (livestreamState) {
      "LIVESTREAM_STARTING" -> Log.d( "LivestreamStateChanged",
          "Meeting livestream is starting"
      )
      "LIVESTREAM_STARTED" -> Log.d( "LivestreamStateChanged",
          "Meeting livestream is started"
      )
      "LIVESTREAM_STOPPING" -> Log.d("LivestreamStateChanged",
          "Meeting livestream is stopping"
      )
      "LIVESTREAM_STOPPED" -> Log.d("LivestreamStateChanged",
          "Meeting livestream is stopped"
      )
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

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onLivestreamStateChanged(String livestreamState) {
    switch (livestreamState) {
      case "LIVESTREAM_STARTING":
          Log.d("LivestreamStateChanged", "Meeting livestream is starting");
          break;
      case "LIVESTREAM_STARTED":
          Log.d("LivestreamStateChanged", "Meeting livestream is started");
          break;
      case "LIVESTREAM_STOPPING":
          Log.d("LivestreamStateChanged", "Meeting livestream is stopping");
          break;
      case "LIVESTREAM_STOPPED":
          Log.d("LivestreamStateChanged", "Meeting livestream is stopped");
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

- [onLivestreamStateChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onlivestreamstatechanged)
