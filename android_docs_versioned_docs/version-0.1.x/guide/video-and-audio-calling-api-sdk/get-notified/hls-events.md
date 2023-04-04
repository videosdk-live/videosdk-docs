---
title: HLS Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: HLS Events
pagination_label: HLS Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: hls-events
---

# HLS Events

VideoSDK provides `onHlsStateChanged` event which will notify you of the current state of HLS for the meeting.

### onHlsStateChanged

- This event will be triggered when the meeting's HLS status changed.
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
  override fun onHlsStateChanged(HlsState: JSONObject) {
    when (HlsState.getString("status")) {
        "HLS_STARTING" -> Log.d("onHlsStateChanged", "Meeting hls is starting")
        "HLS_STARTED" -> Log.d("onHlsStateChanged", "Meeting hls is started")
        "HLS_PLAYABLE" -> {
            Log.d("onHlsStateChanged", "Meeting hls is playable now")
            // on hls playable you will receive downstreamUrl
            val downStreamUrl = HlsState.getString("downstreamUrl")
        }
        "HLS_STOPPING" -> Log.d("onHlsStateChanged", "Meeting hls is stopping")
        "HLS_STOPPED" -> Log.d("onHlsStateChanged", "Meeting hls is stopped")
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
  public void onHlsStateChanged(JSONObject HlsState) {
      switch (HlsState.getString("status")) {
          case "HLS_STARTING":
              Log.d("onHlsStateChanged", "Meeting hls is starting");
              break;
          case "HLS_STARTED":
              Log.d("onHlsStateChanged", "Meeting hls is started");
              break;
          case "HLS_PLAYABLE":
              Log.d("onHlsStateChanged", "Meeting hls is playable now");
              // on hls playable you will receive downstreamUrl
              String downStreamUrl = HlsState.getString("downstreamUrl");
              break;
          case "HLS_STOPPING":
              Log.d("onHlsStateChanged", "Meeting hls is stopping");
              break;
          case "HLS_STOPPED":
              Log.d("onHlsStateChanged", "Meeting hls is stopped");
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

- [onHlsStateChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechange)
