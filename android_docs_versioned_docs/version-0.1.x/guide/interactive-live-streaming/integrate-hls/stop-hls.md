---
title: Stop HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Stop HLS
pagination_label: Stop HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: stop-hls
---

# Stop HLS - Android

This could refer to stopping the transmission of an ongoing HLS stream, which would mean the stream is no longer available to viewers.

## Stopping HLS

- `stopHls()` is used to stop interactive livestream of the meeting which can be accessed from the `Meeting` class.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
findViewById<View>(R.id.btnStopHls).setOnClickListener { view: View? ->
    // Stop Hls
    //highlight-next-line
    meeting!!.stopHls()
}
```

</TabItem>

<TabItem value="Java">

```js
findViewById(R.id.btnStopHls).setOnClickListener(view -> {
    // Stop Hls
    //highlight-next-line
    meeting.stopHls();
});
```

</TabItem>

</Tabs>

## Event associated with HLS

- **onHlsStateChanged** - Whenever meeting HLS state changes, then `onHlsStateChanged` event will trigger.

- You will get `HLS_STOPPING` and `HLS_STOPPED` status on calling `stopHls()`.

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
            //highlight-start
        "HLS_STOPPING" -> Log.d("onHlsStateChanged", "Meeting hls is stopping")
        "HLS_STOPPED" -> Log.d("onHlsStateChanged", "Meeting hls is stopped")
            //highlight-end

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
              //highlight-start
          case "HLS_STOPPING":
              Log.d("onHlsStateChanged", "Meeting hls is stopping");
              break;
          case "HLS_STOPPED":
              Log.d("onHlsStateChanged", "Meeting hls is stopped");
              break;
              //highlight-end

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

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls()](/android/api/sdk-reference/meeting-class/methods#starthls)
- [stopHls()](/android/api/sdk-reference/meeting-class/methods#stophls)
- [onHlsStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechanged)
